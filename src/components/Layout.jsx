import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, MapPin, Phone, MessageCircle, Globe, Instagram } from 'lucide-react';
import { site, navMain, navMore } from '../data/site';
import { images } from '../data/images';
import { courses } from '../data/courses';
import { links, wa } from './ui';
import { useLanguage } from '../context/LanguageContext';
import { AnnouncementBar, ScrollToTop } from './Enhancements';

// Translation key for a nav label (multi-word labels need an explicit key)
const navKey = (label) => ({ 'Verify Certificate': 'verifyCertificate' })[label] || label.toLowerCase();

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
    const esc = (e) => {
      if (e.key === 'Escape') {
        setM(false);
        setO(false);
      }
    };
    document.addEventListener('mousedown', out);
    document.addEventListener('keydown', esc);
    return () => {
      window.removeEventListener('scroll', sc);
      document.removeEventListener('mousedown', out);
      document.removeEventListener('keydown', esc);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = o ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [o]);

  const moreActive = navMore.some(([, target]) => pathname.startsWith(target));

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${s ? 'bg-white/85 backdrop-blur-md shadow-md' : 'bg-white shadow-[0_1px_0_#e6edf6]'}`}>
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
              <div
                role="button"
                tabIndex={0}
                aria-expanded={m}
                aria-haspopup="true"
                onClick={() => setM(!m)}
                onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && (e.preventDefault(), setM(!m))}
                className={`flex items-center gap-1 border-b-2 py-1 text-[13.5px] 2xl:text-[14.5px] font-semibold whitespace-nowrap cursor-pointer select-none ${
                  moreActive ? 'border-[#0B5ED7] text-[#0B5ED7]' : 'border-transparent text-navy hover:text-[#0B5ED7]'
                }`}
              >
                {t('more')} <ChevronDown size={16} className={`transition-transform duration-200 ${m ? 'rotate-180' : ''}`} />
              </div>
              {m && (
                <ul className="absolute right-0 top-full mt-3 w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                  <li>
                    <NavLink to="/verify-certificate" className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy hover:bg-mist">
                      📜 {t('verifyCertificate')}
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
              type="button"
              onClick={toggleLang}
              title="Switch language between English and Telugu"
              aria-label="Switch language between English and Telugu"
              className="btn-outline !py-1.5 !px-3.5 text-xs shrink-0 whitespace-nowrap"
            >
              <Globe size={14} className="text-[#0B5ED7] shrink-0" aria-hidden="true" />
              <span>{lang === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            {/* Join Now */}
            <Link
              to="/contact"
              className="btn-brand !py-2 !px-5 text-xs 2xl:text-sm whitespace-nowrap shrink-0"
            >
              {t('joinNow')} <ArrowRight size={15} className="shrink-0" />
            </Link>
          </div>

          {/* Mobile Right Controls: Lang + Hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={toggleLang}
              aria-label="Switch language"
              className="btn-outline !py-1 !px-2.5 text-xs font-bold"
            >
              {lang === 'en' ? 'తెలుగు' : 'EN'}
            </button>
            <button
              type="button"
              className="btn-icon"
              aria-label={o ? 'Close menu' : 'Open menu'}
              aria-expanded={o}
              aria-controls="mobile-nav"
              onClick={() => setO(!o)}
            >
              {o ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer: slides in from the right */}
      <AnimatePresence>
        {o && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setO(false)}
              aria-hidden="true"
              className="fixed inset-0 z-[55] bg-navy-900/60 backdrop-blur-sm xl:hidden"
            />
            <motion.nav
              key="drawer"
              id="mobile-nav"
              aria-label="Mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className="fixed inset-y-0 right-0 z-[60] flex w-[86%] max-w-sm flex-col bg-white shadow-2xl xl:hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <img src={images.logo.horizontal} alt="Navya Techno" width="1100" height="353" className="h-10 w-auto" />
                <button type="button" onClick={() => setO(false)} aria-label="Close menu" className="btn-icon">
                  <X size={18} />
                </button>
              </div>
              <ul className="flex-1 overflow-y-auto px-3 py-4">
                {[...navMain.slice(0, 6), ...navMore, navMain[6]].map(([l, target], i) => (
                  <motion.li
                    key={target}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                  >
                    <NavLink
                      to={target}
                      end={target === '/'}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl px-4 py-3 font-semibold transition ${
                          isActive ? 'bg-mist text-[#0B5ED7]' : 'text-navy hover:bg-mist'
                        }`
                      }
                    >
                      {t(navKey(l))}
                      <ArrowRight size={16} className="text-slate-300" aria-hidden="true" />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <div className="border-t border-slate-100 p-5 space-y-3">
                <Link to="/contact" onClick={() => setO(false)} className="btn-primary w-full">
                  {t('joinNow')} <ArrowRight size={16} />
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <a href={links.call} className="btn-outline !w-full text-sm">
                    <Phone size={16} /> {t('callNow')}
                  </a>
                  <a
                    href={wa('Hi Navya Techno, I would like to know about admissions.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn !w-full bg-[#25D366] text-white text-sm hover:bg-[#1ebe5b]"
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
                <p className="text-center text-xs text-slate-500">{site.phone}</p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#061838] via-[#082256] to-[#040e24] text-white">
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
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/25 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-accent">
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
            <p className="text-sm text-blue-100 leading-relaxed">
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
                    className="group flex items-center gap-2 transition hover:text-white"
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
            © {new Date().getFullYear()} {site.fullName}. {t('allRightsReserved')}
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Porumamilla, Andhra Pradesh 516193</span>
            <span>•</span>
            <Link to="/privacy" className="hover:text-white underline">
              {t('privacyPolicy')}
            </Link>
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

function FloatingContacts() {
  const items = [
    {
      label: 'Instagram',
      href: site.instagram,
      icon: <Instagram size={22} aria-hidden="true" />,
      cls: 'bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] shadow-pink-500/30',
      external: true,
    },
    {
      label: 'WhatsApp',
      href: wa('Hi Navya Techno, I would like to know about admissions.'),
      icon: <MessageCircle size={22} aria-hidden="true" />,
      cls: 'bg-[#25D366] shadow-emerald-500/30',
      external: true,
      pulse: true,
    },
    {
      label: 'Call Now',
      href: links.call,
      icon: <Phone size={22} aria-hidden="true" />,
      cls: 'bg-gradient-to-br from-brand to-navy shadow-blue-500/30',
    },
  ].filter((i) => i.href);
  return (
    <div
      className="fixed right-4 bottom-5 z-40 flex flex-col items-end gap-3 sm:right-5"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {items.map((i, k) => (
        <motion.a
          key={i.label}
          href={i.href}
          target={i.external ? '_blank' : undefined}
          rel={i.external ? 'noopener noreferrer' : undefined}
          aria-label={i.label}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + k * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={`group relative grid h-12 w-12 place-items-center rounded-full text-white shadow-lg ${i.cls}`}
        >
          {i.pulse && <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping [animation-duration:2.2s]" />}
          <span className="relative">{i.icon}</span>
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-navy px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 sm:block">
            {i.label}
          </span>
        </motion.a>
      ))}
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
        initial={r ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.main>
      <Footer />

      {/* Floating Action Buttons */}
      <ScrollToTop />
      <FloatingContacts />
    </>
  );
}
