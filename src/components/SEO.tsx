import { Helmet } from 'react-helmet-async';

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

const SITE_NAME = 'Shoreline Tutoring';
const BASE_URL = 'https://shorelinetutoring.com.au';

const SEO = ({ title, description, keywords, ogTitle, ogDescription, canonical, schema }: SEOProps) => {
    const fullTitle = title === SITE_NAME
        ? `${SITE_NAME} | Premium One-on-One Tutoring | Sydney`
        : `${title} | ${SITE_NAME}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={`${BASE_URL}${canonical}`} />}

            {/* Open Graph */}
            <meta property="og:title" content={ogTitle || fullTitle} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:type" content="website" />
            {canonical && <meta property="og:url" content={`${BASE_URL}${canonical}`} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={ogTitle || fullTitle} />
            <meta name="twitter:description" content={ogDescription || description} />

            {/* Schema Markup */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
