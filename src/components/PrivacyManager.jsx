import { useState, useEffect } from 'react';
import { Shield, Lock, Check, X, Sliders, ChevronRight, RefreshCw, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'navya_privacy_consent_v1';

export function PrivacyManager() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [prefs, setPrefs] = useState({
    essential: true, // Always true
    analytics: false,
    functional: true,
  });
  const [toastMsg, setToastMsg] = useState('');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setPrefs(JSON.parse(stored));
      } else {
        // Show banner after brief delay
        const t = setTimeout(() => setShowBanner(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      // In case localStorage is blocked
    }
  }, []);

  const savePreferences = (newPrefs) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newPrefs));
      setPrefs(newPrefs);
      setShowBanner(false);
      setShowModal(false);
      showToast('Privacy preferences saved successfully.');
    } catch {
      setShowBanner(false);
      setShowModal(false);
    }
  };

  const handleAcceptAll = () => {
    savePreferences({ essential: true, analytics: true, functional: true });
  };

  const handleEssentialOnly = () => {
    savePreferences({ essential: true, analytics: false, functional: false });
  };

  const handleSaveCustom = () => {
    savePreferences(prefs);
  };

  const handleResetData = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setPrefs({ essential: true, analytics: false, functional: true });
      setShowModal(false);
      setShowBanner(true);
      showToast('Local preferences and stored cache cleared.');
    } catch {
      // ignore
    }
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3500);
  };

  // Expose global trigger for footer or privacy policy page to open modal
  useEffect(() => {
    window.openPrivacyPreferences = () => setShowModal(true);
    return () => {
      delete window.openPrivacyPreferences;
    };
  }, []);

  return (
    <>
      {/* Toast Alert */}
      {toastMsg && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-full bg-navy px-5 py-2.5 text-xs font-bold text-white shadow-xl ring-2 ring-white flex items-center gap-2"
        >
          <Check size={14} className="text-emerald-400" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Floating Privacy Trigger Button (Bottom Left) */}
      <button
        type="button"
        onClick={() => setShowModal(true)}
        aria-label="Manage Privacy & Cookie Preferences"
        title="Privacy Preferences"
        className="fixed bottom-5 left-5 z-40 hidden sm:flex h-10 items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-3 text-xs font-bold text-navy shadow-md backdrop-blur-md transition-all hover:bg-slate-50 hover:shadow-lg hover:border-[#0B5ED7]/40"
      >
        <Shield size={15} className="text-[#0B5ED7]" aria-hidden="true" />
        <span className="hidden md:inline">Privacy</span>
      </button>

      {/* Bottom Cookie Consent Banner */}
      {showBanner && (
        <aside
          role="region"
          aria-label="Privacy & Cookie Consent"
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/90 bg-white/95 p-4 sm:p-5 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md"
        >
          <div className="container-x flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div className="flex items-start gap-3 max-w-3xl">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0B5ED7]">
                <Shield size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-navy">
                  Your Privacy & Data Protection at Navya Techno
                </p>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  We respect your personal privacy in accordance with the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>. We use cookies and local storage solely for essential website navigation, language selection, and responsive course enquiry services.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto shrink-0">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="btn-brand text-xs !py-2 !px-5"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={handleEssentialOnly}
                className="btn-outline text-xs !py-2 !px-4"
              >
                Essential Only
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowBanner(false);
                  setShowModal(true);
                }}
                className="rounded-full px-3 py-2 text-xs font-semibold text-[#0B5ED7] hover:underline"
              >
                Customize
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Comprehensive Privacy Preference Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in"
        >
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-[#0B5ED7]">
                  <Lock size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 id="privacy-modal-title" className="text-lg font-bold text-navy">
                    Privacy Preference Center
                  </h3>
                  <p className="text-xs text-slate-500">
                    Compliant with India DPDP Act 2023 & GDPR standards
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="grid h-8 w-8 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close privacy preferences modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body: Preference toggles */}
            <div className="mt-5 space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                When you visit Navya Techno, information may be stored in your browser to deliver the best learning experience. You can choose which data categories you allow:
              </p>

              {/* 1. Essential Cookies */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-navy flex items-center gap-2">
                      <span>Strictly Necessary & Security</span>
                      <span className="rounded-md bg-blue-100/80 px-2 py-0.5 text-[10px] font-extrabold text-[#0B5ED7] uppercase">
                        Always Active
                      </span>
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      Required for secure browsing, page routing, certificate verification lookups, and language state persistence.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Functional & Course Preferences */}
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-navy">
                      Functional & Course Preferences
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      Remembers your Course Finder quiz answers, preferred batch timings, and recently viewed courses.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      checked={prefs.functional}
                      onChange={(e) => setPrefs({ ...prefs, functional: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0B5ED7]"></div>
                  </label>
                </div>
              </div>

              {/* 3. Analytics & Institute Performance */}
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-navy">
                      Performance & Aggregate Analytics
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      Helps us count page visits, popular course views, and optimize website loading speeds without identifying you personally.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      checked={prefs.analytics}
                      onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0B5ED7]"></div>
                  </label>
                </div>
              </div>

              {/* Data Rights & Erasure */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Trash2 size={16} className="text-amber-700 shrink-0" />
                  <span className="text-xs font-medium text-amber-900">
                    Exercise Right to Erasure / Clear Local Cache
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleResetData}
                  className="rounded-lg border border-amber-300 bg-white px-3 py-1 text-xs font-bold text-amber-800 hover:bg-amber-100 transition"
                >
                  Reset Cache
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <Link
                to="/privacy"
                onClick={() => setShowModal(false)}
                className="text-xs font-bold text-[#0B5ED7] hover:underline flex items-center gap-1"
              >
                Read Full Privacy Policy <ChevronRight size={13} />
              </Link>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleEssentialOnly}
                  className="btn-outline text-xs !py-2 !px-4"
                >
                  Reject Optional
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="btn-brand text-xs !py-2 !px-5"
                >
                  Save Choices
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
