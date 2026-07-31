import { remark } from 'remark';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import { notFound } from 'next/navigation';
import BlogPost from '../../../components/BlogPost';
import { blogPosts, getPostBySlug } from '../../../data/blogData';
import { truncateForMeta, toIsoDate } from '../../../lib/metadata';
import type { Metadata } from 'next';

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

// Posts are compiled in from blogData, so the slug set is fixed at build time.
// Anything outside it is a 404 rather than an on-demand render.
export const dynamicParams = false;

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    // No canonical for an unknown slug — it must not claim to be a real page.
    if (!post) {
        return { title: 'Article Not Found' };
    }

    const description = truncateForMeta(post.excerpt);
    const url = `/resources/${post.slug}`;

    return {
        title: post.title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: 'article',
            title: post.title,
            description,
            url,
            publishedTime: toIsoDate(post.date),
            authors: [post.author],
            images: [post.imageUrl],
        },
    };
}

export default async function BlogPostRoute({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const contentHtml = (
        await remark()
            .use(remarkMath)
            .use(remarkRehype)
            .use(rehypeKatex)
            .use(rehypeStringify)
            .process(post.content)
    ).toString();

    return <BlogPost post={post} contentHtml={contentHtml} />;
}
