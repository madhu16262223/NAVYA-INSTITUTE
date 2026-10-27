import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, X, Sparkles, ArrowRight } from 'lucide-react';
import { site } from '../data/site';
import { useDemoModal } from '../context/DemoModalContext';

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(() => {
    return sessionStorage.getItem('navya_announcement_dismissed') === 'true';
  });
  const { openDemoModal } = useDemoModal();

  if (dismissed || !site.announcement?.enabled || !site.announcement?.text) {
    return null;
  }

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('navya_announcement_dismissed', 'true');
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
            <button
              onClick={() => openDemoModal()}
              className="inline-flex items-center gap-1 font-bold text-accent hover:underline hover:text-white transition"
            >
              {site.announcement.cta} <ArrowRight size={13} aria-hidden="true" />
            </button>
          )}
        </div>
        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="grid h-6 w-6 place-items-center rounded-full text-white/70 hover:bg-white/20 hover:text-white transition shrink-0"
        >
          <X size={14} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export function SkillChipsMarquee() {
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
    <div aria-label="Key Computer Skills Covered" className="relative overflow-hidden bg-white py-4 border-y border-slate-100">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-marquee gap-3 pause-on-hover">
        {[...skills, ...skills].map((skill, idx) => (
          <span
            key={`${skill}-${idx}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-mist/60 px-4 py-1.5 text-xs font-bold text-navy shadow-sm transition hover:border-[#0B5ED7] hover:bg-white hover:text-[#0B5ED7]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {skill}
          </span>
        ))}
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
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="btn-icon fixed bottom-24 right-5 z-40 bg-white text-navy shadow-lg ring-1 ring-slate-200 hover:bg-navy hover:text-white"
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}

export function SoftDivider({ flip, light }) {
  return (
    <div aria-hidden="true" className={`overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
      <svg
        className={`relative block w-full h-8 sm:h-12 ${light ? 'text-[#F4F9FE]' : 'text-mist'}`}
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
