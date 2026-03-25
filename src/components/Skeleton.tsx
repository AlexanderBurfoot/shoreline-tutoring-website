"use client";
import './Skeleton.css';

/** Generic skeleton block with shimmer animation */
const SkeletonBlock = ({ width = '100%', height = '1rem', radius = '8px', style }: {
    width?: string; height?: string; radius?: string; style?: React.CSSProperties;
}) => (
    <div className="skeleton-block" style={{ width, height, borderRadius: radius, ...style }} />
);

/** Skeleton placeholder for a full homepage section */
export const SectionSkeleton = () => (
    <div className="skeleton-section">
        <SkeletonBlock width="120px" height="14px" style={{ margin: '0 auto' }} />
        <SkeletonBlock width="320px" height="28px" radius="6px" style={{ margin: '12px auto 0' }} />
        <SkeletonBlock width="460px" height="16px" style={{ margin: '16px auto 0' }} />
        <div className="skeleton-section__body">
            <SkeletonBlock height="180px" radius="16px" />
            <SkeletonBlock height="180px" radius="16px" />
            <SkeletonBlock height="180px" radius="16px" />
        </div>
    </div>
);

/** Skeleton placeholder for a single page (Subject page, Pricing) */
export const PageSkeleton = () => (
    <div className="skeleton-page">
        <div className="skeleton-page__hero">
            <SkeletonBlock width="80px" height="14px" />
            <SkeletonBlock width="340px" height="36px" radius="6px" />
            <SkeletonBlock width="500px" height="16px" />
            <SkeletonBlock width="420px" height="16px" />
        </div>
        <div className="skeleton-page__content">
            <SkeletonBlock height="200px" radius="16px" />
            <SkeletonBlock height="160px" radius="16px" />
        </div>
    </div>
);

export default SectionSkeleton;
