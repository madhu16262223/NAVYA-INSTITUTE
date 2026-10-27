import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, MapPin, Phone, MessageCircle, Globe } from 'lucide-react';
import { site, nav, navMain, navMore } from '../data/site';
import { images } from '../data/images';
import { courses } from '../data/courses';
import { Icon, links, wa } from './ui';
import { useLanguage } from '../context/LanguageContext';
import { useDemoModal } from '../context/DemoModalContext';
import { AnnouncementBar, ScrollToTop } from './Enhancements';
import { PrivacyManager } from './PrivacyManager';

const lk = ({ isActive }) =>
  `border-b-2 py-1 text-[13.5px] 2xl:text-[14.5px] font-semibold transition-colors whitespace-nowrap ${
    isActive ? 'border-[#0B5ED7] text-[#0B5ED7]' : 'border-transparent text-navy hover:text-[#0B5ED7]'
  }`;

export function Navbar() {
  const [o, setO] = useState(false);
  const [m, setM] = useState(false);
  const [s, setS] = useState(false);
  const { pathname } = useLocation();
  const ref = useRef(null);
  const { lang, toggleLang, t } = useLanguage();
  const { openDemoModal } = useDemoModal();

  useEffect(() => {
    setO(false);
    setM(false);
  }, [pathname]);

  useEffect(() => {
    const sc = () => setS(window.scrollY > 24);
    sc();
    window.addEventListener('scroll', sc, { passive: true });
    const out = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setM(false);
    };
    const esc = (e) => e.key === 'Escape' && setM(false);
    document.addEventListener('mousedown', out);
    document.addEventListener('keydown', esc);
    return () => {
      window.removeEventListener('scroll', sc);
      document.removeEventListener('mousedown', out);
      document.removeEventListener('keydown', esc);
    };
  }, []);

  const moreActive = navMore.some(([, target]) => pathname.startsWith(target));

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${s ? 'shadow-md' : 'shadow-[0_1px_0_#e6edf6]'}`}>
      <div className="relative">
        <span aria-hidden="true" className="pointer-events-none absolute left-0 top-0 hidden h-full w-14 -skew-x-[30deg] bg-gradient-to-b from-sky-300/60 to-transparent sm:block" />
        <span aria-hidden="true" className="pointer-events-none absolute left-10 top-0 hidden h-full w-1.5 -skew-x-[30deg] bg-accent sm:block" />
        
        <div className={`container-x flex items-center justify-between gap-4 transition-[height] duration-300 ${s ? 'h-16' : 'h-[72px] xl:h-20'}`}>
          {/* Logo */}
          <Link to="/" aria-label="Navya Techno home" className="shrink-0 mr-4 sm:mr-6 2xl:mr-8 sm:ml-2 2xl:ml-4">
            <img
              src={images.logo.horizontal}
              alt="Navya Techno – Institute of Computer Education Training Center"
              width="1100"
              height="353"
              className={`w-auto transition-[height] duration-300 ${s ? 'h-10 sm:h-11' : 'h-11 sm:h-12 xl:h-[52px]'}`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main" className="hidden items-center gap-3.5 2xl:gap-5 xl:flex shrink-0">
            <NavLink to="/" end className={lk}>{t('home')}</NavLink>
            <NavLink to="/about" className={lk}>{t('about')}</NavLink>
            <NavLink to="/courses" className={lk}>{t('courses')}</NavLink>
            <NavLink to="/placements" className={lk}>{t('placements')}</NavLink>
            <NavLink to="/faculty" className={lk}>{t('faculty')}</NavLink>
            <NavLink to="/certificates" className={lk}>{t('certificates')}</NavLink>

            {/* More Dropdown */}
            <div ref={ref} className="relative">
              <button
                aria-expanded={m}
                aria-haspopup="true"
                onClick={() => setM(!m)}
                className={`flex items-center gap-1 border-b-2 py-1 text-[13.5px] 2xl:text-[14.5px] font-semibold whitespace-nowrap ${
                  moreActive ? 'border-[#0B5ED7] text-[#0B5ED7]' : 'border-transparent text-navy hover:text-[#0B5ED7]'
                }`}
              >
                {t('more')} <ChevronDown size={16} className={`transition-transform duration-200 ${m ? 'rotate-180' : ''}`} />
              </button>
              {m && (
                <ul className="absolute right-0 top-full mt-3 w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                  <li>
                    <NavLink to="/verify-certificate" className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy hover:bg-mist">
                      📜 Verify Certificate
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/facilities" className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy hover:bg-mist">
                      {t('facilities')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/gallery" className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy hover:bg-mist">
                      {t('gallery')}
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>

            <NavLink to="/contact" className={lk}>{t('contact')}</NavLink>
          </nav>

          {/* Right Header Actions: Call Pill, Language Toggle & CTA */}
          <div className="hidden items-center gap-2.5 2xl:gap-3 xl:flex shrink-0">
            {/* Quick Call Button */}
            <a
              href="tel:+919849638258"
              className="whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/80 px-3 2xl:px-3.5 py-1.5 text-xs font-bold text-[#0B5ED7] transition hover:bg-[#0B5ED7] hover:text-white"
            >
              <Phone size={13} className="text-[#FF850A] shrink-0" />
              <span>Call: 98496 38258</span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              title="Switch language between English and Telugu"
              aria-label="Switch language between English and Telugu"
              className="whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-mist/80 px-3 py-1.5 text-xs font-bold text-navy transition hover:border-[#0B5ED7] hover:bg-white"
            >
              <Globe size={14} className="text-[#0B5ED7] shrink-0" aria-hidden="true" />
              <span>{lang === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            {/* Join Now */}
            <Link
              to="/contact"
              className="whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 rounded-full bg-[#0B5ED7] px-4 2xl:px-5 py-2 text-xs 2xl:text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#0A4FB4]"
            >
              {t('joinNow')} <ArrowRight size={15} className="shrink-0" />
            </Link>
          </div>

          {/* Mobile Right Controls: Lang + Hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={toggleLang}
              aria-label="Switch language"
              className="rounded-full border border-slate-200 bg-mist px-2.5 py-1 text-xs font-bold text-navy"
            >
              {lang === 'en' ? 'తెలుగు' : 'EN'}
            </button>
            <button
              className="p-2 text-navy"
              aria-label={o ? 'Close menu' : 'Open menu'}
              aria-expanded={o}
              aria-controls="mobile-nav"
              onClick={() => setO(!o)}
            >
              {o ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {o && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t bg-white p-5 xl:hidden shadow-xl"
        >
          <ul className="grid gap-1 sm:grid-cols-2">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Courses', '/courses'],
              ['Placements', '/placements'],
              ['Faculty', '/faculty'],
              ['Certificates', '/certificates'],
              ['Verify Certificate', '/verify-certificate'],
              ['Facilities', '/facilities'],
              ['Gallery', '/gallery'],
              ['Contact', '/contact'],
            ].map(([l, target]) => (
              <li key={target}>
                <NavLink
                  to={target}
                  end={target === '/'}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 font-semibold transition ${
                      isActive ? 'bg-mist text-[#0B5ED7]' : 'text-navy hover:bg-mist'
                    }`
                  }
                >
                  {t(l.toLowerCase()) || l}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-5 border-t border-slate-100 pt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              onClick={() => setO(false)}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-md"
            >
              {t('joinNow')} <ArrowRight size={16} />
            </Link>
            <a
              href={links.call}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-navy px-6 py-3 font-semibold text-navy"
            >
              <Phone size={16} /> {t('callNow')}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const { t } = useLanguage();
  const { openDemoModal } = useDemoModal();

  return (
    <footer className="relative overflow-hidden pb-16 lg:pb-0 bg-gradient-to-b from-[#061838] via-[#082256] to-[#040e24] text-white">
      {/* Decorative accent geometry */}
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <span aria-hidden="true" className="pointer-events-none absolute top-0 left-1/4 h-32 w-96 bg-brand/10 blur-3xl" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-6 h-40 w-10 rotate-[30deg] bg-accent/80" />

      {/* 1. Pre-Footer Action / Admissions Card */}
      <div className="container-x pt-12 pb-6">
        <div className="relative overflow-hidden rounded-3xl border border-sky-400/30 bg-gradient-to-r from-[#0B3A85]/90 via-[#0B5ED7]/80 to-[#0A3374]/90 p-6 sm:p-8 shadow-[0_10px_35px_-5px_rgba(11,94,215,0.3)] backdrop-blur-md">
          <span aria-hidden="true" className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/30 blur-2xl" />
          <div className="relative flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-left">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/25 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-accent-400">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                ADMISSIONS OPEN
              </div>
              <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                Ready to Start Your Computer Journey in Porumamilla?
              </h3>
              <p className="mt-1 text-sm text-blue-100 max-w-xl">
                Practical batches starting soon. Learn MS Office, Tally with GST, Typing, and Hardware with dedicated guidance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Join Now <ArrowRight size={16} />
              </Link>
              <a
                href={wa('Hi Navya Techno, I would like to know about new batch admissions.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-navy"
              >
                <MessageCircle size={17} /> WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main 4-Column Structured Body */}
      <div className="container-x py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Institute Brand & Google Rating Badge */}
          <div className="space-y-4">
            <Link to="/" aria-label="Navya Techno home" className="inline-block">
              <img
                src={images.logo.light}
                alt="Navya Techno – Institute of Computer Education Training Center"
                width="1100"
                height="353"
                loading="lazy"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-xs font-semibold text-blue-100">
              {site.telugu}
            </p>
            <p className="text-sm text-blue-100/90 leading-relaxed">
              Practical, career-oriented computer education and hands-on skill development in Porumamilla.
            </p>

            {/* Google Rating Badge Card */}
            <div className="rounded-2xl border border-white/15 bg-white/5 p-3.5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-accent text-sm">
                    <span className="text-lg font-black text-white">{site.rating.score}</span>
                    <span>★★★★★</span>
                  </div>
                  <p className="text-xs text-blue-100 mt-0.5">
                    Based on <strong>{site.rating.count} Google Reviews</strong>
                  </p>
                </div>
                <a
                  href={links.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-bold text-blue-100 hover:bg-white/20 transition"
                >
                  Verified
                </a>
              </div>
            </div>

            {/* Quote */}
            <p className="border-l-2 border-accent pl-3 text-xs italic text-blue-100">
              “{t('footerQuote')}”
            </p>
          </div>

          {/* Column 2: Popular Courses */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white flex items-center gap-2 mb-4">
              <span className="h-3 w-1 rounded-full bg-accent" />
              Our Courses
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100">
              {courses.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/courses/${c.id}`}
                    className="group flex items-center gap-2 transition hover:text-blue-100"
                  >
                    <span className="text-accent text-xs transition-transform group-hover:translate-x-1">▸</span>
                    <span>{c.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline pt-1"
                >
                  View All Courses <ArrowRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white flex items-center gap-2 mb-4">
              <span className="h-3 w-1 rounded-full bg-sky-400" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100">
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['Placements & Career', '/placements'],
                ['Faculty & Trainers', '/faculty'],
                ['Course Certificates', '/certificates'],
                ['Institute Facilities', '/facilities'],
                ['Student Gallery', '/gallery'],
                ['Contact & Admissions', '/contact'],
                ['Privacy Policy', '/privacy'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="group flex items-center gap-2 transition hover:text-white"
                  >
                    <span className="text-slate-500 text-xs transition-transform group-hover:translate-x-1">→</span>
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white flex items-center gap-2 mb-4">
              <span className="h-3 w-1 rounded-full bg-accent" />
              Visit & Contact
            </h4>

            {/* Landmark Tag */}
            <div className="inline-flex items-center gap-2 rounded-xl bg-sky-500/15 border border-sky-400/30 px-3 py-1.5 text-xs font-bold text-blue-100">
              <MapPin size={14} className="text-accent shrink-0" />
              <span>Near APSRTC Bus Stand</span>
            </div>

            <address className="not-italic text-sm text-blue-100 leading-relaxed space-y-2">
              <p className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-1 shrink-0 text-accent" />
                <span>{site.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-accent" />
                <a href={links.call} className="font-semibold text-white hover:text-blue-100 transition">
                  {site.phone}
                </a>
              </p>
            </address>

            <div className="pt-2 flex flex-col gap-2 sm:flex-row">
              <a
                href={links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs !py-2 !px-4 !text-white !border-white/30 hover:!bg-white/20"
              >
                <MapPin size={14} /> Get Directions
              </a>
              <a
                href={links.call}
                className="btn-brand text-xs !py-2 !px-4"
              >
                <Phone size={14} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20 py-5">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-xs text-blue-100 sm:flex-row text-center sm:text-left">
          <p>
            © 2026 {site.fullName}. {t('allRightsReserved')}
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Porumamilla, Andhra Pradesh 516193</span>
            <span>•</span>
            <Link to="/privacy" className="hover:text-white underline">
              {t('privacyPolicy')}
            </Link>
            <span>•</span>
            <button
              type="button"
              onClick={() => window.openPrivacyPreferences && window.openPrivacyPreferences()}
              className="hover:text-white underline"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement;
      setP(h.scrollTop / ((h.scrollHeight - h.clientHeight) || 1));
    };
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-1">
      <div className="h-full origin-left bg-accent" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}

function MobileBar() {
  const { t } = useLanguage();
  const c = 'flex flex-col items-center gap-1 py-2.5 text-xs font-semibold text-navy';
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-slate-200 bg-white shadow-[0_-4px_16px_rgba(11,42,91,.12)] lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a href={links.call} className={c}>
        <Phone size={20} className="text-[#0B5ED7]" aria-hidden="true" />
        {t('callNow')}
      </a>
      <a
        href={wa('Hi Navya Techno, I would like to know about admissions.')}
        target="_blank"
        rel="noopener noreferrer"
        className={c}
      >
        <MessageCircle size={20} className="text-[#25D366]" aria-hidden="true" />
        WhatsApp
      </a>
      <a href={links.directions} target="_blank" rel="noopener noreferrer" className={c}>
        <MapPin size={20} className="text-accent" aria-hidden="true" />
        {t('getDirections')}
      </a>
    </div>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  const r = useReducedMotion();

  return (
    <>
      <ScrollProgress />
      <AnnouncementBar />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-white focus:p-3"
      >
        Skip to content
      </a>
      <Navbar />
      <motion.main
        key={pathname}
        id="main"
        initial={r ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
      <Footer />

      {/* Floating Action Buttons */}
      <ScrollToTop />
      <a
        href={wa('Hi Navya Techno, I would like to know about admissions.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 hidden h-14 w-14 lg:grid place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle aria-hidden="true" size={28} />
      </a>
      <PrivacyManager />
      <MobileBar />
    </>
  );
}
