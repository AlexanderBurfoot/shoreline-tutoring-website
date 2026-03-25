"use client";
import Link from 'next/link';
import { blogPosts } from '../data/blogData';
import ScrollReveal from './ScrollReveal';
import './Resources.css';
import './RecentArticles.css';

const RecentArticles = () => {
    // Get the 3 most recent articles
    const recentPosts = blogPosts.slice(0, 3);

    return (
        <section className="recent-articles section-padding">
            <div className="container">
                <ScrollReveal width="100%">
                    <div className="recent-articles__header">
                        <div>
                            <span className="section-eyebrow">Resources</span>
                            <h2 className="section-title">Latest <span className="gold-text">Insights</span></h2>
                            <p className="section-subtitle">
                                Strategies, study guides, and expert advice to help you maximize your results.
                            </p>
                        </div>
                        <Link href="/resources" className="btn btn-outline recent-articles__view-all">
                            View All Articles
                        </Link>
                    </div>
                </ScrollReveal>

                <div className="recent-articles__grid">
                    {recentPosts.map((post, index) => (
                        <ScrollReveal key={post.id} delay={index * 100} width="100%">
                            <Link href={`/resources/${post.slug}`} className="resource-card recent-articles__card">
                                <div className="resource-card__image-wrapper">
                                    <img src={post.imageUrl} alt={post.title} className="resource-card__image" loading="lazy" />
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
                    ))}
                </div>
                
                <div className="recent-articles__mobile-btn-container">
                    <Link href="/resources" className="btn btn-outline recent-articles__mobile-view-all">
                        View All Articles
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RecentArticles;
