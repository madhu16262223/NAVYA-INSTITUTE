# Navya Techno website
React + Vite + Tailwind + React Router + Framer Motion + Lucide. Frontend only (no backend).
`npm install && npm run dev` | `npm run build` | `npm run images` (regenerate photo variants)

## Edit content (src/data)
- site.js: verified business details (address, phone, WhatsApp, rating), nav, section copy. Values left as `[Placeholder]` are hidden on the Contact page until filled in.
- courses.js: ONE course list used everywhere (set show:false to hide)
- faculty.js, gallery.js, testimonials.js (real Google reviews only), images.js (hero slides, institute photo)

## Images (public/images)
logo/ hero/ institute/ facilities/ gallery/ courses/ faculty/ certificates/

Large photos (hero, institute, facilities, gallery) are stored as a **4K master** (`<name>.jpg`, 3840px wide)
plus a **1920px variant** (`<name>-1920.jpg`). The site serves the right one per screen via `srcset`.
To replace a photo: drop the new 4K JPEG in with the SAME filename, then run `npm run images` to rebuild the
1920px variant (macOS `sips`; on other systems create `<name>-1920.jpg` with any image tool).
Missing files show labelled placeholders.

Current hero/facility/gallery/institute photos are stock photos from Unsplash (Unsplash License, free for commercial use,
no attribution required). Replace them with real institute photos when available.

Still to supply: certificates/certificate-sample.jpg (a designed sample layout is shown until then) and real faculty photos
(faculty.js currently points at course/hero illustrations).

SPA hosting: vercel.json rewrites all routes to index.html; public/_redirects does the same for Netlify.
