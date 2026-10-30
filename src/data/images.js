// Central image config. Replace files in public/images with real photos (same filenames) — no code changes needed.
// Large photos are stored as a 4K master (3840px wide, "<name>.jpg") plus a 1920px variant ("<name>-1920.jpg").
// Run `npm run images` after adding/replacing a master to regenerate the 1920px variants.
const b='/images';
export const srcSetFor=src=>`${src.replace(/\.jpg$/,'-1920.jpg')} 1920w, ${src} 3840w`;
export const images={
  logo:{horizontal:`${b}/logo/logo-horizontal.png`,light:`${b}/logo/logo-horizontal-light.png`,stacked:`${b}/logo/logo-stacked.png`},
  heroSlides:[
    {src:`${b}/hero/hero-1.jpg`,alt:'Students learning together on computers in a training lab'},
    {src:`${b}/hero/hero-2.jpg`,alt:'Programming code on a computer screen during a coding class'},
    {src:`${b}/hero/hero-3.jpg`,alt:'Accounting practice with calculator, ledgers and financial documents'},
  ],
  institute:`${b}/institute/institute.jpg`,
  certificate:`${b}/certificates/certificate-sample.jpg`, // not supplied yet: a designed sample layout is shown instead
};
