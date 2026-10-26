# NAVYA TECHNO WEBSITE: HANDOVER NOTES & ADVANCED UPGRADES

**Business:** Navya Techno Institute of Computer Education Training Center, Porumamilla, Andhra Pradesh.  
**Verified Details:**  
- **Name:** Navya Techno Institute of Computer Education Training Center  
- **Telugu:** నవ్య టెక్నో ఇన్స్టిట్యూట్ ఆఫ్ కంప్యూటర్ ఎడ్యుకేషన్ ట్రైనింగ్ సెంటర్  
- **Address:** SH 54, Near APSRTC Busstand, Reddy Nagar, Porumamilla, Andhra Pradesh 516193, India  
- **Phone / WhatsApp:** +91 98496 38258  
- **Google Rating:** 4.8 / 5.0 (83 reviews) • **Plus Code:** 2X2R+82 Porumamilla, Andhra Pradesh  

**Stack:** React 18 + Vite 5 + Tailwind CSS 3 + React Router 6 + Framer Motion 11 + Lucide Icons. Pure frontend architecture (zero backend, zero database, zero login/admin overhead).

---

## 1. HOW TO RUN & BUILD

```bash
npm install
npm run dev      # Local development server at http://localhost:5173/
npm run build    # Production build into /dist (clean, zero errors)
npm run preview  # Preview the production build locally
```

---

## 2. NEW ADVANCED UPGRADES IMPLEMENTED

### A. High-Conversion Lead Capture
1. **"Book a Free Visit / Demo Class" Accessible Modal (`src/context/DemoModalContext.jsx`):**
   - Automatically prompts once per session after 20 seconds or upon top exit intent.
   - Accessible: focus trap, `aria-modal="true"`, `role="dialog"`, Esc to close, backdrop click to close.
   - Captures: Full Name, WhatsApp Mobile Number (validated 10-digit), Course Interested In, and Preferred Time Slot (Morning / Afternoon / Evening / Weekend).
   - Generates and launches a prefilled WhatsApp enquiry message to `+91 98496 38258`.
   - Displays a clean thank-you confirmation state upon submission.
   - Can be triggered manually from the Announcement Bar, Header, Course Detail pages, and Course Finder quiz.
2. **Dismissible Announcement Bar (`src/components/Enhancements.jsx`):**
   - Top banner above navbar driven by `site.announcement` in `src/data/site.js`.
   - Features a notice badge, customizable text ("Admissions Open"), and a "Book Free Demo" quick button.
   - Remembers user dismissal across the current session in `sessionStorage`.
3. **Enhanced Contact & Enquiry Form (`src/pages/pages.jsx`):**
   - Inline field-level validation with clear error messages.
   - Friendly thank-you state with direct WhatsApp fallback.
4. **Optional External Webhook (`VITE_FORM_ENDPOINT`):**
   - If configured in `.env`, submissions will POST JSON to Formspree, Google Apps Script, or an email service in the background before opening WhatsApp.

### B. Bilingual English / Telugu Language Toggle
1. **Context & Translations (`src/context/LanguageContext.jsx`, `src/data/translations.js`):**
   - Toggle button in both Desktop Navbar and Mobile Drawer (`🌐 తెలుగు / English`).
   - Persists user selection in `localStorage`.
   - Dynamically updates `<html lang="en">` or `<html lang="te">`.
   - Integrated Google Font **Noto Sans Telugu** alongside Plus Jakarta Sans.
   - **NOTE FOR OWNER:** All Telugu translations are marked in `src/data/translations.js` for institute review. English remains the default.

### C. Course Detail Pages (`/courses/:id`) & Custom 404
1. **Dedicated Course Pages (`src/pages/CourseDetail.jsx`):**
   - Dynamic route `/courses/:id` (`basic`, `office`, `tally`, `typing`, `internet`, `hardware`, `programming`).
   - Breadcrumb navigation: `Home > Courses > [Course Name]`.
   - Detailed practical syllabus checklist with module numbers.
   - Course Quick Facts sidebar: Category, Duration (`[Course Duration]`), Level (`[Level]`), Eligibility (`[Eligibility]`), Fee (`[Course Fee]`), Certificate (`Yes`), and Batch Timings.
   - Dedicated "Enquire on WhatsApp", "Book a Free Demo", and "Call Institute" buttons.
   - Related courses recommendations section.
2. **Interactive Course Cards (`src/components/ui.jsx`):**
   - "Learn More" links directly to `/courses/:id`.
   - Added subtle hover tilt, glow ring, and icon zoom for a premium look.
3. **Custom 404 Page (`src/pages/NotFound.jsx`):**
   - Friendly 404 page with quick navigation back to Home or Courses.

### D. Interactive Course Finder Quiz (`src/components/CourseFinder.jsx`)
- 3-step interactive recommendation quiz on Home and Courses pages:
  1. *Who are you?* (Beginner, Student, Job Seeker, Professional)
  2. *What is your primary goal?* (Office, Tally, Hardware, Internet, Programming)
  3. *What matters most?* (Practical hands-on, Certificate, Trainer guidance, Job readiness)
- Instantly matches the best course from `src/data/courses.js`.
- Provides an instant "Enquire for this Course on WhatsApp" button with answers prefilled, plus direct link to syllabus.

### E. Hero & Visual Polish
1. **Multi-Photo Auto-Sliding Hero (`HeroSlider` in `src/pages/pages.jsx`):**
   - Loaded with 4 realistic photos (modern computer lab, trainer guidance, hardware lab, and student practice).
   - Autoplays with crossfade every 5.5 seconds; pauses automatically on hover.
   - Includes Previous/Next navigation buttons and slide indicator dots.
   - Floating cards: 4.8 Rating & 83 Reviews, Hands-on Training, and Caveat script "Learn Build Grow".
2. **Text-Only Skill Chips Marquee (`src/components/Enhancements.jsx`):**
   - Continuous smooth CSS marquee ticker showcasing core skills (MS Word, Excel, Tally with GST, English & Telugu Typing, PC Hardware, Troubleshooting, etc.) without third-party logos.
3. **Scroll-To-Top Button (`src/components/Enhancements.jsx`):**
   - Floating button appears after scrolling 400px with smooth scroll back to top.

### F. Social Proof & Trust
- Real Google rating card (4.8 score, 83 reviews).
- Direct "Write a Review on Google" button alongside "Read on Google".
- Clean fallback for review text until institute adds text reviews to `src/data/testimonials.js`.

### G. SEO, Discoverability & Legal
1. **LocalBusiness & EducationalOrganization JSON-LD (`index.html`):**
   - Verified data schema with name, address, phone, rating (4.8 / 83), and Google Maps reference.
2. **SEO Meta & Social Sharing:**
   - Open Graph tags, Twitter Card tags, Apple touch icon, and theme color `#0B2A5B`.
3. **Files Created in `public/`:**
   - `sitemap.xml`: XML sitemap with all routes and course URLs.
   - `robots.txt`: Search engine crawling rules referencing the sitemap.
   - `manifest.webmanifest`: Progressive Web App (PWA) manifest for mobile installability.
   - `_redirects`: Netlify SPA single-page routing rule (`/* /index.html 200`).
4. **Privacy Policy Page (`/privacy` & `src/pages/PrivacyPolicy.jsx`):**
   - Explains voluntary data collection (name and phone) for admission inquiries; linked in the footer.

### H. Performance & Quality Standards
- **Route-level Code Splitting:** `React.lazy` with `<Suspense>` splits pages into light chunks.
- **Production Build:** Passes with 0 errors (`npm run build`).
- **Zero Console Errors:** Verified with full browser automation suite.
- **Accessibility:** Visible focus rings (`:focus-visible`), WCAG AA compliant contrast, reduced-motion overrides.

---

## 3. FILE INVENTORY & WHERE TO EDIT

```
NAVYA-INSTITUE/
├── public/
│   ├── _redirects                 # SPA routing redirect rule for Netlify
│   ├── manifest.webmanifest       # PWA web manifest
│   ├── robots.txt                 # Search crawler instructions
│   ├── sitemap.xml                # Search engine sitemap
│   └── images/
│       ├── certificates/          # Sample certificate image
│       ├── facilities/            # computer-lab.jpg, hardware-lab.jpg, practical-training.jpg
│       ├── faculty/               # Trainer and leadership photos
│       ├── gallery/               # Gallery photos
│       ├── hero/                  # hero-lab.jpg, hero-training.jpg, hero-hardware.jpg, hero-student.jpg
│       └── logo/                  # logo-horizontal.png, logo-horizontal-light.png, logo-stacked.png, favicon.png
├── src/
│   ├── App.jsx                    # Route-level code splitting & Provider wrappers
│   ├── main.jsx                   # React root entry
│   ├── index.css                  # Tailwind directives and utility classes
│   ├── components/
│   │   ├── CourseFinder.jsx       # 3-step interactive recommendation quiz
│   │   ├── Enhancements.jsx       # AnnouncementBar, SkillChipsMarquee, ScrollToTop
│   │   ├── Layout.jsx             # Sticky navbar, mobile menu, footer, floating buttons
│   │   └── ui.jsx                 # CourseCard, FacultyCard, Reviews, PageHeader, CTA, Icons
│   ├── context/
│   │   ├── DemoModalContext.jsx   # Free Demo lead capture modal & state
│   │   └── LanguageContext.jsx    # English/Telugu toggle & localStorage persistence
│   ├── data/
│   │   ├── courses.js             # Single source of truth for all course data & syllabus
│   │   ├── faculty.js             # Trainers, bios, roles, leadership note
│   │   ├── gallery.js             # Gallery image list and categories
│   │   ├── images.js              # Central image paths & heroSlides configuration
│   │   ├── site.js                # Verified business info, phone, address, announcement
│   │   ├── testimonials.js        # Google reviews array (empty by default)
│   │   └── translations.js        # English and Telugu UI strings
│   └── pages/
│       ├── CourseDetail.jsx       # Individual course detail page (/courses/:id)
│       ├── NotFound.jsx           # Custom 404 page
│       ├── pages.jsx              # Home, About, Courses, Placements, Faculty, Certificates, Facilities, Gallery, Contact
│       └── PrivacyPolicy.jsx      # Privacy Policy page (/privacy)
├── index.html                     # HTML head, Google Fonts, JSON-LD schema
└── tailwind.config.js             # Brand colors, typography, marquee keyframes
```

---

## 4. ENVIRONMENT VARIABLES (Optional)

Create a `.env` file in the root directory if you wish to enable additional third-party integrations:

```env
# Optional: External form webhook endpoint (e.g. Formspree or Google Apps Script web app)
VITE_FORM_ENDPOINT=https://formspree.io/f/your-form-id

# Optional: Google Analytics 4 Measurement ID
VITE_GA_ID=G-XXXXXXXXXX
```

*Note: If `VITE_FORM_ENDPOINT` is not provided, all enquiry submissions will seamlessly open in WhatsApp with prefilled text.*

---

## 5. PLACEHOLDERS TO CONFIRM WITH INSTITUTE OWNER

Whenever the institute owner provides the real details, simply update the corresponding file in `src/data/`:
1. **Course Fees & Durations (`src/data/courses.js`):** Currently set to clear placeholders `[Course Fee]` and `[Course Duration]`.
2. **Trainer Names & Bios (`src/data/faculty.js`):** Replace `[Name]`, `[Specialization]`, and `[Short bio]`.
3. **Managing Director Note (`src/data/faculty.js`):** Replace `[Leadership message to be provided by the Managing Director]`.
4. **Real Google Review Quotes (`src/data/testimonials.js`):** Add verified quote objects `{ name, text, rating, course }`.
5. **Real Gallery & Faculty Photos (`public/images/`):** Replace photos using the existing filenames.
6. **Telugu Review:** Institute owner can review Telugu strings in `src/data/translations.js`.
