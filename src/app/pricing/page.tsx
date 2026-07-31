import type { Metadata } from 'next';
import Pricing from '../../components/Pricing';

const TITLE = 'Tutoring Prices & Rates';
const DESCRIPTION =
    'Transparent pricing for one-on-one tutoring and small-group classes across Years 1–12. Compare hourly rates, bundle options, and what every session includes.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: '/pricing',
    },
    openGraph: {
        type: 'website',
        title: TITLE,
        description: DESCRIPTION,
        url: '/pricing',
    },
};

export default function PricingRoute() {
    return <Pricing />;
}
