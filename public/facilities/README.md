# Facility photographs

Drop photographs of the St Leonards space here, then add one entry each to
`FACILITY_IMAGES` in `src/data/groupClassLaunch.ts`:

```ts
export const FACILITY_IMAGES: FacilityImage[] = [
    { src: '/facilities/teaching-room.webp', alt: 'A teaching room set up for a small group class' },
    { src: '/facilities/one-on-one-desk.webp', alt: 'A tutor and student working through a problem at a desk' },
    { src: '/facilities/entrance.webp', alt: 'The street entrance at 558 Pacific Highway' },
];
```

The gallery is hidden entirely while that array is empty, so the site never
shows a broken image before the photos are ready.

- **Format:** `.webp` (matches the rest of the site's images)
- **Shape:** landscape; displayed at a 3:2 aspect ratio and cropped to fill
- **Size:** around 1200x800 or larger
- **Count:** three or four works best across the grid
- **Alt text:** describe what is actually shown; screen readers read it aloud
