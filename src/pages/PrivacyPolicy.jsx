import { useState } from 'react';
import { Seo, PageHeader } from '../components/ui';
import { site } from '../data/site';
import { ShieldCheck, Lock, Mail, Phone, MapPin, Sliders, CheckCircle, FileText, UserCheck, AlertCircle } from 'lucide-react';

export function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleOpenPreferences = () => {
    if (typeof window !== 'undefined' && window.openPrivacyPreferences) {
      window.openPrivacyPreferences();
    }
  };

  return (
    <>
      <Seo
        title="Privacy & Data Protection Center"
        desc="Advanced Privacy Policy & Student Data Protection framework of Navya Techno Institute, Porumamilla. Compliant with Digital Personal Data Protection (DPDP) Act 2023."
      />
      <PageHeader
        title="Privacy & Data Protection"
        sub="Your personal information, student records, and privacy rights are protected under the Digital Personal Data Protection (DPDP) Act, 2023."
      />

      <section className="section bg-white">
        <div className="container-x max-w-4xl space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          {/* Top Compliance Trust Card */}
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-[#F0F6FD] to-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#0B5ED7] text-white shadow-md shadow-blue-500/20">
                  <ShieldCheck size={28} aria-hidden="true" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-bold text-navy">Data Fiduciary Commitment</h2>
                    <span className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-bold text-[#0B5ED7]">
                      DPDP Act 2023 Compliant
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    <strong>{site.fullName}</strong> operates as an educational data fiduciary, ensuring that student and parent data is collected transparently and strictly protected.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleOpenPreferences}
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2.5 text-xs font-bold text-[#0B5ED7] shadow-sm hover:bg-[#0B5ED7] hover:text-white transition shrink-0"
              >
                <Sliders size={14} /> Cookie Preferences
              </button>
            </div>
          </div>

          {/* Quick Summary Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-100 text-emerald-700 mb-2">
                <CheckCircle size={18} />
              </span>
              <h3 className="font-bold text-navy text-sm">Zero Commercial Sale</h3>
              <p className="mt-1 text-xs text-slate-500">We never sell, rent, or trade student phone numbers or personal records to marketing third parties.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-100 text-[#0B5ED7] mb-2">
                <Lock size={18} />
              </span>
              <h3 className="font-bold text-navy text-sm">SSL & Header Security</h3>
              <p className="mt-1 text-xs text-slate-500">All browser traffic is encrypted via 256-bit TLS/SSL with strict frame and XSS mitigation headers.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-100 text-amber-700 mb-2">
                <UserCheck size={18} />
              </span>
              <h3 className="font-bold text-navy text-sm">Right to Erasure</h3>
              <p className="mt-1 text-xs text-slate-500">You can request correction of certificate records or complete erasure of enquiry contact logs anytime.</p>
            </div>
          </div>

          {/* Section 1: Data Categories Collected */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xl font-bold text-navy flex items-center gap-2">
              <span className="text-[#0B5ED7]">1.</span> Categories of Personal Data Collected
            </h3>
            <p>
              Under Section 4 and Section 6 of the DPDP Act 2023, data is gathered only for specified lawful educational purposes based on voluntary student/guardian submission:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-navy font-bold">
                  <tr>
                    <th className="p-3 sm:p-4">Category</th>
                    <th className="p-3 sm:p-4">Data Elements</th>
                    <th className="p-3 sm:p-4">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-navy">Course Enquiries</td>
                    <td className="p-3 sm:p-4">Full Name, Mobile/WhatsApp number, Preferred Course & Batch Timing</td>
                    <td className="p-3 sm:p-4">Answering admission queries and scheduling free demo classes.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-navy">Enrollment & Training</td>
                    <td className="p-3 sm:p-4">Academic Background, Attendance, Practical Lab Assignments & Test Scores</td>
                    <td className="p-3 sm:p-4">Tracking skill progression, project reviews, and training delivery.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-navy">Certification Records</td>
                    <td className="p-3 sm:p-4">Student Name, Certificate ID (e.g. NT-2024-XXX), Course Title, Completion Date, Grade</td>
                    <td className="p-3 sm:p-4">Employer verification registry & permanent academic proof.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-navy">Technical & Cookies</td>
                    <td className="p-3 sm:p-4">Local storage preferences, language setting (English/Telugu), anonymous device type</td>
                    <td className="p-3 sm:p-4">Responsive user experience and offline caching.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Protection of Minors */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-navy flex items-center gap-2">
              <span className="text-[#0B5ED7]">2.</span> Protection of Minors & School Learners
            </h3>
            <p>
              Navya Techno trains school students (10th standard and below) in Computer Basics, Typing, and School IT Literacy. In accordance with Section 9 of the DPDP Act 2023:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>Admissions for students under 18 years require verifiable parental or legal guardian consent.</li>
              <li>We do not perform behavioral tracking or targeted advertisements directed at young learners.</li>
              <li>Communications regarding batch timings, fees, and test scores are shared directly with the designated parent/guardian.</li>
            </ul>
          </div>

          {/* Section 3: Certificate Verification Transparency */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-navy flex items-center gap-2">
              <span className="text-[#0B5ED7]">3.</span> Public Certificate Registry & Transparency
            </h3>
            <p>
              To protect students against counterfeit credentials, Navya Techno hosts an online certificate verification tool at <code className="rounded bg-slate-100 px-2 py-0.5 text-xs text-[#0B5ED7]">/verify-certificate</code>. Searching a valid Certificate ID reveals only verifiable academic credentials (Student Name, Course Completed, Issue Date, and Performance Grade). Sensitive personal details (phone numbers, fees paid, or address) are never displayed in the public verification portal.
            </p>
          </div>

          {/* Section 4: Data Retention & Erasure Schedule */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-navy flex items-center gap-2">
              <span className="text-[#0B5ED7]">4.</span> Data Retention & Erasure Schedule
            </h3>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li><strong>Unenrolled Enquiry Contacts:</strong> Retained for a maximum of 90 days after last contact, then securely deleted.</li>
              <li><strong>Active Student Academic Records:</strong> Retained for the duration of the enrolled course.</li>
              <li><strong>Official Certification Registry:</strong> Maintained for a minimum of 7 years to facilitate employer background checks and re-issue of lost certificates.</li>
            </ul>
          </div>

          {/* Section 5: Student Data Rights */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-navy flex items-center gap-2">
              <span className="text-[#0B5ED7]">5.</span> Your Rights as a Data Principal
            </h3>
            <p>
              As a student or guardian, you have the following enforceable rights under the DPDP Act 2023:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                <p className="font-bold text-navy">Right to Information</p>
                <p className="text-slate-500 mt-0.5">Know what personal data is processed and shared.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                <p className="font-bold text-navy">Right to Correction</p>
                <p className="text-slate-500 mt-0.5">Correct misspelled names, certificate details, or contact info.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                <p className="font-bold text-navy">Right to Erasure</p>
                <p className="text-slate-500 mt-0.5">Request deletion of contact records once learning is completed.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                <p className="font-bold text-navy">Right of Grievance Redressal</p>
                <p className="text-slate-500 mt-0.5">Direct access to the institute Data Protection Officer.</p>
              </div>
            </div>
          </div>

          {/* Section 6: Grievance Redressal Officer */}
          <div className="space-y-4 pt-2">
            <h3 className="text-xl font-bold text-navy flex items-center gap-2">
              <span className="text-[#0B5ED7]">6.</span> Data Protection & Grievance Redressal Officer
            </h3>
            <p>
              For privacy queries, data access requests, or grievance reporting, contact our designated officer:
            </p>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2 text-sm">
              <p className="font-bold text-navy text-base">{site.fullName} — Grievance Cell</p>
              <p className="text-xs text-slate-500">Designation: Data Protection & Admissions Administrator</p>
              <p className="flex items-center gap-2 text-slate-600 pt-1">
                <MapPin size={16} className="text-accent shrink-0" />
                {site.address}
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <Phone size={16} className="text-accent shrink-0" />
                <a href={site.phoneTel} className="font-semibold text-[#0B5ED7] hover:underline">
                  {site.phone}
                </a>
              </p>
              <p className="text-xs text-slate-500 pt-2 border-t border-slate-100 flex items-center gap-1.5">
                <CheckCircle size={14} className="text-emerald-600" />
                <span>Response Time SLA: All privacy requests are acknowledged within 24–48 hours.</span>
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
