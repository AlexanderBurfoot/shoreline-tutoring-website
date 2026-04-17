"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { BlogPost as BlogPostType } from '../data/blogData';
import './BlogPost.css';

interface BlogPostProps {
    post: BlogPostType;
    contentHtml: string;
}

const BlogPost = ({ post, contentHtml }: BlogPostProps) => {
    const router = useRouter();
    const [pageState, setPageState] = useState<'enter' | 'visible' | 'exit'>('enter');
    // Cache displayed content so the exit animation keeps showing the previous post
    // while the incoming post data is already in props.
    const [displayed, setDisplayed] = useState({ post, contentHtml });

    useEffect(() => {
        if (displayed.post.slug !== post.slug) {
            setTimeout(() => setPageState('exit'), 0);
            const timer = setTimeout(() => {
                setDisplayed({ post, contentHtml });
                window.scrollTo(0, 0);
                setPageState('enter');
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => setPageState('visible'));
                });
            }, 300);
            return () => clearTimeout(timer);
        } else {
            window.scrollTo(0, 0);
            requestAnimationFrame(() => setPageState('visible'));
        }
    }, [post, contentHtml, displayed.post.slug]);

    return (
        <main className={`blog-post blog-post--${pageState}`}>
            <article className="blog-post__article">
                {/* Header */}
                <header className="blog-post__header">
                    <div className="container blog-post__header-container">
                        <Link href="/resources" className="blog-post__back-link">
                            <span className="arrow">←</span> Back to Resources
                        </Link>

                        <div className="blog-post__meta">
                            <span className="blog-post__category">{displayed.post.category}</span>
                            <span className="blog-post__meta-divider">•</span>
                            <span className="blog-post__date">{displayed.post.date}</span>
                            <span className="blog-post__meta-divider">•</span>
                            <span className="blog-post__read-time">{displayed.post.readTime}</span>
                        </div>

                        <h1 className="blog-post__title">{displayed.post.title}</h1>
                        <p className="blog-post__author">By {displayed.post.author}</p>
                    </div>
                </header>

                {/* Hero Image */}
                <div className="blog-post__image-container">
                    <Image
                        src={displayed.post.imageUrl}
                        alt={displayed.post.title}
                        fill
                        priority
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className="blog-post__hero-image"
                    />
                </div>

                {/* Content — pre-compiled HTML from remark (server-rendered) */}
                <div className="container blog-post__content-container">
                    <div
                        className="blog-post__content"
                        dangerouslySetInnerHTML={{ __html: displayed.contentHtml }}
                    />

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
