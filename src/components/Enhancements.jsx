import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, X, Sparkles, ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { site } from '../data/site';
import { useDemoModal } from '../context/DemoModalContext';

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem('navya_announcement_dismissed') === 'true';
    } catch {
      return false;
    }
  });
  const { openDemoModal } = useDemoModal();

  if (dismissed || !site.announcement?.enabled || !site.announcement?.text) {
    return null;
  }

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem('navya_announcement_dismissed', 'true');
    } catch {
      // storage unavailable: bar stays dismissed for this render only
    }
  };

  return (
    <div
      role="region"
      aria-label="Announcement"
      className="relative z-50 bg-gradient-to-r from-navy via-[#0A3E8A] to-[#0B5ED7] px-4 py-2 text-white shadow-sm"
    >
      <div className="container-x flex items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex flex-1 items-center justify-center gap-2 sm:gap-3 text-center flex-wrap">
          <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm">
            <Sparkles size={12} aria-hidden="true" />
            {site.announcement.badge || 'Notice'}
          </span>
          <span className="font-medium text-blue-100">
            {site.announcement.text}
          </span>
          {site.announcement.cta && (
            <a
              href="#book-demo"
              onClick={(e) => {
                e.preventDefault();
                openDemoModal();
              }}
              className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white shadow-sm hover:bg-accent-600 transition"
            >
              {site.announcement.cta} <ArrowRight size={13} aria-hidden="true" />
            </a>
          )}
        </div>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="btn-icon !bg-transparent text-blue-100 hover:!bg-white/20 hover:text-white shrink-0"
        >
          <X size={14} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export function SkillChipsMarquee() {
  const [direction, setDirection] = useState('left');
  const [isPaused, setIsPaused] = useState(false);

  const skills = [
    'Computer Basics & Typing',
    'MS Office (Word, Excel, PPT)',
    'Tally Prime with GST',
    'Python Programming',
    'Core & Advanced Java',
    'C / C++ Coding',
    'Full Stack Web (HTML, CSS, JS, React)',
    'Artificial Intelligence & AI Tools',
    'PC Hardware & Troubleshooting',
    'Networking & LAN Setup',
    'English & Telugu Typing',
    'Digital Literacy & Cyber Safety',
  ];

  return (
    <div
      aria-label="Key Computer Skills Covered"
      className="marquee-container relative flex items-center overflow-hidden bg-white py-2.5 sm:py-3 border-y border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] select-none group"
    >
      {/* 🔴 Left Fixed News-Style Headline Badge */}
      <div className="relative z-30 shrink-0 pl-3 sm:pl-6 pr-2 sm:pr-3 flex items-center bg-white shadow-[6px_0_12px_rgba(255,255,255,1)]">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0B5ED7] via-[#0A3E8A] to-navy px-3 sm:px-4 py-1.5 text-xs font-bold text-white shadow-sm ring-1 ring-black/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="uppercase tracking-wider whitespace-nowrap">Trending Courses</span>
          <ChevronRight size={13} className="text-accent shrink-0 hidden sm:inline" />
        </div>
      </div>

      {/* Soft gradient edge masks */}
      <div className="pointer-events-none absolute inset-y-0 left-32 sm:left-48 z-20 w-10 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent" />

      {/* Interactive Controls Pill (Visible on hover or touch) */}
      <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 hidden group-hover:flex items-center gap-1 rounded-full bg-navy/90 backdrop-blur-md px-2 py-1 shadow-lg text-white transition-opacity">
        <button
          type="button"
          onClick={() => setDirection('left')}
          title="Scroll Left"
          aria-label="Scroll ticker left"
          className={`p-1 rounded-full hover:bg-white/20 transition ${direction === 'left' ? 'text-accent' : 'text-white'}`}
        >
          <ChevronLeft size={14} />
        </button>
        <button
          type="button"
          onClick={() => setIsPaused(!isPaused)}
          title={isPaused ? 'Resume auto-scroll' : 'Pause'}
          aria-label={isPaused ? 'Resume auto-scroll' : 'Pause'}
          className="p-1 rounded-full hover:bg-white/20 transition text-white"
        >
          {isPaused ? <Play size={12} className="fill-current" /> : <Pause size={12} className="fill-current" />}
        </button>
        <button
          type="button"
          onClick={() => setDirection('right')}
          title="Scroll Right"
          aria-label="Scroll ticker right"
          className={`p-1 rounded-full hover:bg-white/20 transition ${direction === 'right' ? 'text-accent' : 'text-white'}`}
        >
          <ChevronRight size={14} />
        </button>
      </div>

      {/* Continuous Seamless Infinite Ticker Track */}
      <div
        className={`flex w-max will-change-transform ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        } ${isPaused ? 'animate-paused' : ''}`}
      >
        {/* Set 1 */}
        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3 pr-2.5 sm:pr-3">
          {skills.map((skill, idx) => (
            <Link
              to="/courses"
              key={`s1-${idx}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-mist/80 px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold text-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0B5ED7] hover:bg-white hover:text-[#0B5ED7] hover:shadow-md active:scale-95 whitespace-nowrap"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span>{skill}</span>
            </Link>
          ))}
        </div>

        {/* Set 2 (Duplicate for seamless continuous loop) */}
        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3 pr-2.5 sm:pr-3" aria-hidden="true">
          {skills.map((skill, idx) => (
            <Link
              to="/courses"
              key={`s2-${idx}`}
              tabIndex={-1}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-mist/80 px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold text-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0B5ED7] hover:bg-white hover:text-[#0B5ED7] hover:shadow-md active:scale-95 whitespace-nowrap"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span>{skill}</span>
            </Link>
          ))}
        </div>

        {/* Set 3 (Buffer for seamless continuous loop on 4K screens) */}
        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3 pr-2.5 sm:pr-3" aria-hidden="true">
          {skills.map((skill, idx) => (
            <Link
              to="/courses"
              key={`s3-${idx}`}
              tabIndex={-1}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-mist/80 px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold text-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0B5ED7] hover:bg-white hover:text-[#0B5ED7] hover:shadow-md active:scale-95 whitespace-nowrap"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span>{skill}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="btn-icon fixed bottom-5 left-4 sm:left-5 z-40 !h-11 !w-11 !bg-white text-navy shadow-lg ring-1 ring-slate-200 hover:!bg-navy hover:text-white"
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}

export function SoftDivider({ flip, light }) {
  return (
    <div aria-hidden="true" className={`overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
      <svg
        className={`relative block w-full h-8 sm:h-12 ${light ? 'text-blue-100' : 'text-blue-100'}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
