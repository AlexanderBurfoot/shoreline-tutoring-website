"use client";
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPostBySlug } from '../data/blogData';
import type { BlogPost as BlogPostType } from '../data/blogData';
import SEO from './SEO';
import ReactMarkdown from 'react-markdown';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const router = useRouter();
    const [pageState, setPageState] = useState<'enter' | 'visible' | 'exit'>('enter');
    const [displayedSlug, setDisplayedSlug] = useState(slug);

    useEffect(() => {
        if (displayedSlug !== slug) {
            setTimeout(() => setPageState('exit'), 0);
            const timer = setTimeout(() => {
                setDisplayedSlug(slug);
                window.scrollTo(0, 0);
                setPageState('enter');
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setPageState('visible');
                    });
                });
            }, 300);
            return () => clearTimeout(timer);
        } else {
            window.scrollTo(0, 0);
            requestAnimationFrame(() => {
                setPageState('visible');
            });
        }
    }, [slug, displayedSlug]);

    const post: BlogPostType | undefined = getPostBySlug(displayedSlug || '');

    if (!post) {
        return (
            <main className="blog-post__not-found">
                <div className="container text-center py-5">
                    <h2>Article Not Found</h2>
                    <p>The article you are looking for does not exist or has been removed.</p>
                    <Link href="/resources" className="btn btn-primary mt-4">Back to Resources</Link>
                </div>
            </main>
        );
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.imageUrl,
        "datePublished": post.date, /* Requires ISO format ideally, using string for now */
        "author": {
            "@type": "Organization",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Shoreline Tutoring",
            "logo": {
                "@type": "ImageObject",
                "url": "https://shorelinetutoring.com.au/ShorelineLogo.png"
            }
        }
    };

    return (
        <main className={`blog-post blog-post--${pageState}`}>
            <SEO
                title={post.title}
                description={post.excerpt}
                keywords={`${post.category.toLowerCase()}, HSC, tutoring blog, Shoreline Tutoring`}
                canonical={`/resources/${post.slug}`}
                schema={articleSchema}
            />

            <article className="blog-post__article">
                {/* Header */}
                <header className="blog-post__header">
                    <div className="container blog-post__header-container">
                        <Link href="/resources" className="blog-post__back-link">
                            <span className="arrow">←</span> Back to Resources
                        </Link>

                        <div className="blog-post__meta">
                            <span className="blog-post__category">{post.category}</span>
                            <span className="blog-post__meta-divider">•</span>
                            <span className="blog-post__date">{post.date}</span>
                            <span className="blog-post__meta-divider">•</span>
                            <span className="blog-post__read-time">{post.readTime}</span>
                        </div>

                        <h1 className="blog-post__title">{post.title}</h1>
                        <p className="blog-post__author">By {post.author}</p>
                    </div>
                </header>

                {/* Hero Image */}
                <div className="blog-post__image-container">
                    <img src={post.imageUrl} alt={post.title} className="blog-post__hero-image" />
                </div>

                {/* Content */}
                <div className="container blog-post__content-container">
                    <div className="blog-post__content">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>

                    {/* Footer / Share / CTA */}
                    <div className="blog-post__footer">
                        <div className="blog-post__cta-box">
                            <h3 className="gold-text">Ready to boost your marks?</h3>
                            <p>Get a free trial lesson with one of our expert tutors.</p>
                            <Link href="/#contact" className="btn btn-primary" onClick={() => {
                                router.push('/#contact');
                            }}>Book a Free Trial</Link>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default BlogPost;
