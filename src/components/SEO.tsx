"use client";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    canonical?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    schema?: Record<string, any> | Record<string, any>[];
}

const SEO = ({ title, description, keywords, ogTitle, ogDescription, canonical, schema }: SEOProps) => {
    // Next.js App Router uses Server-Side \`export const metadata\` generation instead of React Helmet Client-Side injections.
    // This component is intentionally nullified to prevent crash conflicts during the massive Server Migration.
    // Full SEO logic has been elevated to the respective \`page.tsx\` wrappers.
    return null;
};

export default SEO;
