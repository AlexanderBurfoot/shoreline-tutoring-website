import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, getAllCategories, getFeaturedPost } from '../data/blogData';
import ScrollReveal from './ScrollReveal';
import SEO from './SEO';
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

    const resourcesSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Shoreline Tutoring Resources & Insights",
        "description": "Expert advice on HSC strategy, study techniques, and subject-specific guides.",
        "url": "https://shorelinetutoring.com.au/resources"
    };

    return (
        <main className="resources-page">
            <SEO
                title="Resources & Insights"
                description="Expert advice on HSC strategy, study techniques, and subject-specific guides from Shoreline Tutoring."
                keywords="HSC study tips, tutoring blog, HSC strategy, selective school prep, study guides"
                canonical="/resources"
                schema={resourcesSchema}
            />

            {/* Hero Section */}
            <section className="resources-hero">
                <div className="resources-hero__bg"></div>
                <div className="container resources-hero__content">
                    <ScrollReveal>
                        <span className="section-eyebrow">Blog</span>
                        <h1 className="resources-hero__title gold-text">
                            Resources & Insights
                        </h1>
                        <p className="resources-hero__subtitle">
                            Expert advice on HSC strategy, study techniques, and subject-specific guides to help you achieve your academic goals.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Main Content */}
            <section className="resources-content section-padding">
                <div className="container">

                    {/* Featured Post (Only show if 'All' is selected, or if featured post matches category) */}
                    {(selectedCategory === 'All' || featuredPost.category === selectedCategory) && (
                        <ScrollReveal width="100%">
                            <Link to={`/resources/${featuredPost.slug}`} className="featured-post">
                                <div className="featured-post__image-wrapper">
                                    <img src={featuredPost.imageUrl} alt={featuredPost.title} className="featured-post__image" />
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
                                    <Link to={`/resources/${post.slug}`} className="resource-card">
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
