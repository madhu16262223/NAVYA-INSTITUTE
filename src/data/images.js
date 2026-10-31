// Central image config. Replace files in public/images with real photos (same filenames) — no code changes needed.
// Large photos are stored as a 4K master (3840px wide, "<name>.jpg") plus a 1920px variant ("<name>-1920.jpg").
// Run `npm run images` after adding/replacing a master to regenerate the 1920px variants.
const b = '/images';
export const srcSetFor = (src) =>
  src && (src.includes('hero-1') || src.includes('hero-2') || src.includes('hero-3') || src.includes('institute.'))
    ? `${src.replace(/\.jpg$/, '-1920.jpg')} 1920w, ${src} 3840w`
    : undefined;

export const images = {
  logo: {
    horizontal: `${b}/logo/logo-horizontal.png`,
    light: `${b}/logo/logo-horizontal-light.png`,
    stacked: `${b}/logo/logo-stacked.png`,
  },
  heroSlides: [
    {
      src: `${b}/hero/hero-1.jpg`,
      tag: 'Hands-on Computer Lab',
      alt: 'Students learning together on computers in modern training lab at Navya Techno',
    },
    {
      src: `${b}/hero/hero-2.jpg`,
      tag: 'Software Coding & Python',
      alt: 'Programming code on a computer screen during a software development class',
    },
    {
      src: `${b}/hero/hero-3.jpg`,
      tag: 'Tally Prime & Office Accounting',
      alt: 'Accounting practice with calculator, GST ledgers and financial documents',
    },
    {
      src: `${b}/hero/hero-mentor-hd.jpg`,
      tag: 'Personal Trainer Guidance',
      alt: 'Dedicated instructor mentoring student in modern computer education lab at Navya Techno',
    },
  ],
  institute: `${b}/facilities/classroom.jpg`,
  certificate: `${b}/certificates/certificate-sample.jpg`,
};
