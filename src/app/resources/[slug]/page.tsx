import { remark } from 'remark';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import BlogPost from '../../../components/BlogPost';
import NotFound from '../../../components/NotFound';
import { getPostBySlug } from '../../../data/blogData';

export default async function BlogPostRoute({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return <NotFound />;
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
