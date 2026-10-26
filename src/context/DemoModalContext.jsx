import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { courses } from '../data/courses';
import { site } from '../data/site';
import { wa } from '../components/ui';
import { X, CheckCircle2, Calendar, Phone, User, BookOpen, Clock, ArrowRight } from 'lucide-react';

const DemoModalContext = createContext({
  isOpen: false,
  openDemoModal: (preselectedCourse) => {},
  closeDemoModal: () => {},
});

export const useDemoModal = () => useContext(DemoModalContext);

export function DemoModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    timeSlot: 'Morning (9:00 AM - 12:00 PM)',
    notes: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openDemoModal = useCallback((courseTitle = '') => {
    if (courseTitle) {
      setPreselectedCourse(courseTitle);
      setFormData(prev => ({ ...prev, course: courseTitle }));
    }
    setSubmitted(false);
    setErrors({});
    setIsOpen(true);
  }, []);

  const closeDemoModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // No automatic popups - modal only opens on explicit user action

  // Accessibility: focus trap & Esc to close
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeDemoModal();
        return;
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus first input
    const timer = setTimeout(() => {
      firstFocusableRef.current?.focus();
    }, 100);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
      clearTimeout(timer);
    };
  }, [isOpen, closeDemoModal]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.course) {
      errs.course = 'Please select a course of interest';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            type: 'Free Demo / Institute Visit Request',
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch (err) {
        // Fallback gracefully without breaking user WhatsApp experience
        console.warn('Optional endpoint submission failed:', err);
      }
    }

    const message = `*Free Visit / Demo Booking Request*\n` +
      `*Name:* ${formData.name.trim()}\n` +
      `*Phone:* ${formData.phone.trim()}\n` +
      `*Course:* ${formData.course}\n` +
      `*Preferred Slot:* ${formData.timeSlot}\n` +
      (formData.notes.trim() ? `*Notes:* ${formData.notes.trim()}\n` : '') +
      `\nPlease confirm the demo batch schedule at Navya Techno.`;

    const waUrl = wa(message);
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <DemoModalContext.Provider value={{ isOpen, openDemoModal, closeDemoModal }}>
      {children}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-900/70 backdrop-blur-sm animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeDemoModal();
          }}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200"
          >
            {/* Header Banner */}
            <div className="relative bg-gradient-to-r from-navy via-brand to-[#0B4FA8] p-6 text-white">
              <span aria-hidden="true" className="absolute -right-4 -top-6 h-24 w-24 rotate-12 bg-accent/40 rounded-full blur-xl" />
              <button
                ref={firstFocusableRef}
                onClick={closeDemoModal}
                aria-label="Close dialog"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
              >
                <X size={18} aria-hidden="true" />
              </button>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Complimentary
                </span>
                <span className="text-xs text-blue-100">Zero Obligation</span>
              </div>
              <h2 id="demo-modal-title" className="mt-2 text-2xl font-extrabold !text-white sm:text-3xl">
                Book a Free Visit / Demo Class
              </h2>
              <p className="mt-1 text-sm text-blue-100">
                Experience our practical training lab and meet our trainers at Porumamilla.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
              {submitted ? (
                <div className="py-6 text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                    <CheckCircle2 size={36} aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Thank You, {formData.name}!</h3>
                  <p className="mt-2 text-slate-600">
                    Your demo request has been initiated on WhatsApp. Our training coordinator will confirm your visit slot.
                  </p>
                  <div className="mt-6 p-4 rounded-xl bg-mist text-left text-sm space-y-1">
                    <p className="font-semibold text-navy">Requested Summary:</p>
                    <p><span className="text-slate-500">Course:</span> {formData.course}</p>
                    <p><span className="text-slate-500">Preferred Slot:</span> {formData.timeSlot}</p>
                    <p><span className="text-slate-500">Contact:</span> {formData.phone}</p>
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={closeDemoModal}
                      className="btn-outline flex-1"
                    >
                      Close
                    </button>
                    <a
                      href={wa(`Hi Navya Techno, following up on my demo booking for ${formData.course}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3.5 text-slate-400">
                        <User size={18} aria-hidden="true" />
                      </span>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: null });
                        }}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full rounded-xl border py-3 pl-10 pr-4 text-sm font-medium transition focus:outline-none ${
                          errors.name ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-brand'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-xs text-red-600 font-medium">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Mobile Number (WhatsApp) <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3.5 text-slate-400">
                        <Phone size={18} aria-hidden="true" />
                      </span>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: null });
                        }}
                        placeholder="e.g. 98496 38258"
                        className={`w-full rounded-xl border py-3 pl-10 pr-4 text-sm font-medium transition focus:outline-none ${
                          errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-brand'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>}
                  </div>

                  {/* Course */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Course Interested In <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3.5 text-slate-400">
                        <BookOpen size={18} aria-hidden="true" />
                      </span>
                      <select
                        required
                        value={formData.course}
                        onChange={(e) => {
                          setFormData({ ...formData, course: e.target.value });
                          if (errors.course) setErrors({ ...errors, course: null });
                        }}
                        className={`w-full rounded-xl border py-3 pl-10 pr-4 text-sm font-medium bg-white transition focus:outline-none ${
                          errors.course ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-brand'
                        }`}
                      >
                        <option value="">Select a course</option>
                        {courses.map((c) => (
                          <option key={c.id} value={c.title}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.course && <p className="mt-1 text-xs text-red-600 font-medium">{errors.course}</p>}
                  </div>

                  {/* Preferred Timing */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3.5 text-slate-400">
                        <Clock size={18} aria-hidden="true" />
                      </span>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm font-medium focus:border-brand focus:outline-none"
                      >
                        <option>Morning (9:00 AM - 12:00 PM)</option>
                        <option>Afternoon (1:00 PM - 4:00 PM)</option>
                        <option>Evening (4:30 PM - 7:30 PM)</option>
                        <option>Weekend Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full shadow-lg shadow-orange-500/20"
                    >
                      {isSubmitting ? 'Opening WhatsApp...' : 'Confirm Demo & Chat on WhatsApp'}
                      <ArrowRight size={18} aria-hidden="true" />
                    </button>
                    <p className="mt-2 text-center text-xs text-slate-500">
                      🔒 No spam. We only use your number to confirm your institute visit schedule.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </DemoModalContext.Provider>
  );
}
