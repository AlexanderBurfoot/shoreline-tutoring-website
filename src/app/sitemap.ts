import { MetadataRoute } from 'next';
import { blogPosts } from '../data/blogData';
import { subjects } from '../data/subjectData';
import { COURSES_WITH_OUTLINES, COURSE_OUTLINES_PUBLISHED, courseOutlinePath } from '../data/courseOutlines';
import { PRIVACY_PATH, SITE_URL } from '../lib/site';
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
    '/one-on-one',
    '/group-classes',
    '/pricing',
    '/resources',
    '/subjects',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Rarely changes and carries little search value, so it ranks lowest.
  const legalRoutes = [
    {
      url: `${SITE_URL}${PRIVACY_PATH}`,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

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

  // Draft course plans are left out until they are published.
  const courseRoutes = COURSE_OUTLINES_PUBLISHED
    ? COURSES_WITH_OUTLINES.map((course) => ({
      url: `${SITE_URL}${courseOutlinePath(course.id)}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
    : [];

  return [...staticRoutes, ...legalRoutes, ...blogRoutes, ...subjectRoutes, ...courseRoutes];
}
