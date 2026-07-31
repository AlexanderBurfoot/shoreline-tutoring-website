import { MetadataRoute } from 'next';
import { blogPosts } from '../data/blogData';
import { subjects } from '../data/subjectData';
import { SITE_URL } from '../lib/site';
import { toIsoDate } from '../lib/metadata';

/**
 * `lastModified` is emitted only where a genuine content date exists, which
 * today means blog posts. Stamping build time on every URL would claim the
 * whole site changed on every deploy; search engines that notice a lastmod is
 * never trustworthy discount the field entirely, including on the entries where
 * it is accurate. Omitting it is the stronger signal.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/pricing',
    '/resources',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/resources/${post.slug}`,
    lastModified: toIsoDate(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const subjectRoutes = subjects.map((subject) => ({
    url: `${SITE_URL}/subjects/${subject.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...subjectRoutes];
}
