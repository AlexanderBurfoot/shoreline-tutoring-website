import NotFound from '../components/NotFound';

// Rendered with a 404 status for unmatched URLs and wherever `notFound()` is
// called. Keeps the site's own 404 design instead of the framework default.
export const metadata = {
    title: 'Page Not Found',
};

export default function NotFoundPage() {
    return <NotFound />;
}
