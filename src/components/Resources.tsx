"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, getAllCategories, getFeaturedPost } from '../data/blogData';
import ScrollReveal from './ScrollReveal';
import './Resources.css';

const Resources = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = getAllCategories();
    const featuredPost = getFeaturedPost();

    // Filter out the featured post from the grid only when showing 'All'
    // (the featured banner is hidden during category filters, so it must
    // reappear in the grid if its category matches the active filter)
    const filteredPosts = blogPosts.filter(post => {
        const isNotFeatured = selectedCategory === 'All' ? post.id !== featuredPost.id : true;
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return isNotFeatured && matchesCategory;
    });

    return (
        <main className="resources-page">
            {/* Hero Section */}
            <section className="resources-hero">
                <div className="resources-hero__bg"></div>
                <div className="container resources-hero__content">
                    <span className="section-eyebrow">Blog</span>
                    <h1 className="resources-hero__title">
                        Resources & <span className="gold-text">Insights</span>
                    </h1>
                    <p className="resources-hero__subtitle">
                        Expert advice on HSC strategy, study techniques, and subject-specific guides to help you achieve your academic goals.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="resources-content section-padding">
                <div className="container">

                    {/* Featured Post (Only show if 'All' is selected, or if featured post matches category) */}
                    {(selectedCategory === 'All' || featuredPost.category === selectedCategory) && (
                        <ScrollReveal width="100%">
                            <Link href={`/resources/${featuredPost.slug}`} className="featured-post">
                                <div className="featured-post__image-wrapper">
                                    <Image
                                        src={featuredPost.imageUrl}
                                        alt={featuredPost.title}
                                        fill
                                        priority
                                        sizes="(max-width: 900px) 100vw, 55vw"
                                        className="featured-post__image"
                                    />
                                </div>
                                <div className="featured-post__content">
                                    <div className="featured-post__meta">
                                        <span className="featured-post__category">{featuredPost.category}</span>
                                        <span className="featured-post__read-time">{featuredPost.readTime}</span>
                                    </div>
                                    <h2 className="featured-post__title">{featuredPost.title}</h2>
                                    <p className="featured-post__excerpt">{featuredPost.excerpt}</p>
                                    <span className="featured-post__read-more">Read Article <span className="arrow">→</span></span>
                                </div>
                            </Link>
                        </ScrollReveal>
                    )}

                    {/* Category Filter */}
                    <ScrollReveal delay={100}>
                        <div className="resources-filter">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`resources-filter__btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Article Grid */}
                    <div className="resources-grid">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post, index) => (
                                <ScrollReveal key={post.id} delay={index * 100} width="100%">
                                    <Link href={`/resources/${post.slug}`} className="resource-card">
                                        <div className="resource-card__image-wrapper">
                                            <Image
                                                src={post.imageUrl}
                                                alt={post.title}
                                                fill
                                                sizes="(max-width: 600px) 100vw, 400px"
                                                className="resource-card__image"
                                            />
                                        </div>
                                        <div className="resource-card__content">
                                            <div className="resource-card__meta">
                                                <span className="resource-card__category">{post.category}</span>
                                                <span className="resource-card__read-time">{post.readTime}</span>
                                            </div>
                                            <h3 className="resource-card__title">{post.title}</h3>
                                            <p className="resource-card__excerpt">{post.excerpt}</p>
                                            <span className="resource-card__read-more">Read More <span className="arrow">→</span></span>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            ))
                        ) : (
                            <div className="resources-empty">
                                <p>No articles found in this category.</p>
                                <button className="btn btn-primary" onClick={() => setSelectedCategory('All')}>View All Articles</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Resources;
