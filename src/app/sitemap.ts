import { MetadataRoute } from 'next';
import { blogPosts } from '../data/blogData';
import { subjects } from '../data/subjectData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shorelinetutoring.com.au';

  // Static routes
  const staticRoutes = [
    '',
    '/pricing',
    '/resources',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog dynamic routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/resources/${post.slug}`,
    lastModified: new Date(post.date || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Subject dynamic routes
  const subjectRoutes = subjects.map((subject) => ({
    url: `${baseUrl}/subjects/${subject.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...subjectRoutes];
}
