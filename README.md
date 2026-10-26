# Navya Techno website
React + Vite + Tailwind + React Router + Framer Motion + Lucide. Frontend only (no backend).
`npm install && npm run dev` | `npm run build`

## Edit content (src/data)
- site.js: verified business details (address, phone, WhatsApp, rating), nav, section copy
- courses.js: ONE course list used everywhere (set show:false to hide, fill [Level]/[Course Duration])
- faculty.js, gallery.js, testimonials.js (real Google reviews only), images.js

## Images (public/images)
logo/ hero/ institute/ faculty/ courses/ certificates/ facilities/ gallery/
Drop real photos in with the SAME filenames (see src/data/*.js). Missing files show labelled placeholders.
Needed: hero/hero-student.jpg (replace the low-res placeholder crop), institute/institute-classroom.jpg,
faculty/md-profile.jpg, computer-trainer.jpg, hardware-trainer.jpg, other-faculty.jpg,
certificates/certificate-sample.jpg, facilities/<computer-lab|hardware-lab|classroom|training-equipment|practical-training|learning-environment>.jpg,
gallery/*.jpg.

SPA hosting: public/_redirects is included for Netlify; other hosts need a fallback to index.html.
