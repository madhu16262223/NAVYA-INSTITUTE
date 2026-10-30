import { useState } from 'react';
import { ShieldCheck, Search, Award, CheckCircle2, Printer, MessageCircle, Calendar, User, FileText, School, AlertCircle } from 'lucide-react';
import { Seo, PageHeader, links, wa } from '../components/ui';
import { site } from '../data/site';

// Sample verified certificates for instant demonstration
const verifiedRecords = {
  'NT-2024-108': {
    id: 'NT-2024-108',
    studentName: 'K. Madhusudhan Reddy',
    course: 'Tally Prime with GST & Computer Accounting',
    duration: '45 Days Practical Lab Training',
    grade: 'A+ (Distinction - 94%)',
    issueDate: 'October 15, 2024',
    center: 'Navya Techno Computer Education, Porumamilla (AP)',
    status: 'Valid & Verified',
    skills: ['Tally Prime', 'Voucher Entry', 'GST Invoicing', 'Balance Sheet Analysis', 'MS Excel'],
  },
  'NT-2024-215': {
    id: 'NT-2024-215',
    studentName: 'P. Suresh Kumar',
    course: 'Full Stack Web Development & React',
    duration: '90 Days Project-Based Curriculum',
    grade: 'A (Excellence - 89%)',
    issueDate: 'September 28, 2024',
    center: 'Navya Techno Computer Education, Porumamilla (AP)',
    status: 'Valid & Verified',
    skills: ['HTML5', 'CSS3', 'JavaScript ES6', 'React.js', 'Git & Deployment'],
  },
  'NT-2023-042': {
    id: 'NT-2023-042',
    studentName: 'G. Lakshmi Prasanna',
    course: 'Computer Basics & MS Office Automation',
    duration: '30 Days Hands-on Program',
    grade: 'A+ (Distinction - 96%)',
    issueDate: 'December 10, 2023',
    center: 'Navya Techno Computer Education, Porumamilla (AP)',
    status: 'Valid & Verified',
    skills: ['MS Word', 'MS Excel', 'PowerPoint', 'Typing Mastery', 'Internet Literacy'],
  },
};

export function VerifyCertificate() {
  const [certId, setCertId] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [notFoundId, setNotFoundId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSearch = (e) => {
    e?.preventDefault();
    const cleanId = certId.trim().toUpperCase();
    if (!cleanId) {
      setErrorMsg('Please enter a Certificate ID or Roll Number.');
      setSearchResult(null);
      setNotFoundId('');
      return;
    }
    setErrorMsg('');

    if (verifiedRecords[cleanId]) {
      setSearchResult(verifiedRecords[cleanId]);
      setNotFoundId('');
    } else {
      // Only IDs present in the registry are ever shown as verified
      setSearchResult(null);
      setNotFoundId(cleanId);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Seo
        title="Verify Certificate"
        desc="Online Certificate Verification Portal for Navya Techno Institute of Computer Education, Porumamilla. Verify student credentials and course completion certificates."
      />

      <PageHeader
        title="Certificate Verification"
        sub="Official Online Credential Verification Portal • Navya Techno Institute, Porumamilla"
      />

      <section className="section bg-gradient-to-b from-mist via-white to-mist py-12 sm:py-16">
        <div className="container-x max-w-4xl">
          {/* Header Banner */}
          <div className="rounded-3xl border border-blue-100 bg-white p-6 sm:p-8 shadow-card text-center mb-10">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-blue-50 text-[#0B5ED7] mb-4">
              <ShieldCheck size={36} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Verify Student Credentials
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Employers, students, and institutions can verify the authenticity of certificates issued by Navya Techno Institute of Computer Education Training Center.
            </p>

            {/* Search Input Form */}
            <form onSubmit={handleSearch} className="mt-8 max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input
                    type="text"
                    value={certId}
                    onChange={(e) => setCertId(e.target.value)}
                    aria-label="Certificate ID"
                    aria-invalid={Boolean(errorMsg)}
                    placeholder="e.g. NT-2024-108 or Roll No"
                    className="w-full rounded-2xl border border-slate-300 py-3.5 pl-11 pr-4 font-mono font-bold tracking-wider text-navy uppercase placeholder:normal-case placeholder:font-sans focus:border-[#0B5ED7] focus:outline-none focus:ring-2 focus:ring-blue-100 transition shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-brand shrink-0"
                >
                  <Search size={18} /> Verify Now
                </button>
              </div>
              {errorMsg && (
                <p role="alert" className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-red-600">
                  <AlertCircle size={14} aria-hidden="true" /> {errorMsg}
                </p>
              )}

              {/* Sample IDs Quick Bar */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-600">Sample Test IDs:</span>
                {['NT-2024-108', 'NT-2024-215', 'NT-2023-042'].map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      setCertId(id);
                      setErrorMsg('');
                      setNotFoundId('');
                      setSearchResult(verifiedRecords[id]);
                    }}
                    className="rounded-lg bg-blue-50 px-2.5 py-1 font-mono font-bold text-[#0B5ED7] hover:bg-[#0B5ED7] hover:text-white transition"
                  >
                    {id}
                  </button>
                ))}
              </div>
            </form>
          </div>

          {/* No matching record */}
          {notFoundId && (
            <div role="status" className="rounded-3xl border-2 border-amber-300/70 bg-white p-6 sm:p-8 shadow-card">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-100 text-amber-600">
                  <AlertCircle size={26} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-extrabold text-navy">No record found for <span className="font-mono text-[#0B5ED7]">{notFoundId}</span></h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    This ID is not in the institute registry. Please check the Certificate ID printed on the certificate (format NT-YYYY-NNN) and try again, or contact the institute to confirm the record.
                  </p>
                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <a
                      href={wa(`Hi Navya Techno, I could not verify certificate ID ${notFoundId} online. Please confirm whether it is genuine.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <MessageCircle size={16} aria-hidden="true" /> Ask on WhatsApp
                    </a>
                    <a href={links.call} className="btn-outline">Call {site.phone}</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Verification Results Display */}
          {searchResult && (
            <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-500/40 bg-white p-6 sm:p-10 shadow-xl transition-all">
              {/* Top Verified Header Ribbon */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-sm">
                    <CheckCircle2 size={28} />
                  </span>
                  <div>
                    <span className="inline-block rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-extrabold uppercase tracking-wider text-emerald-600 border border-emerald-200">
                      Official Record Authenticated
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-navy mt-1">
                      Certificate Verified Successfully
                    </h3>
                  </div>
                </div>

                <div className="text-right self-end sm:self-center">
                  <span className="text-xs uppercase font-bold text-slate-500 block">Certificate No.</span>
                  <span className="font-mono text-lg font-black text-[#0B5ED7]">{searchResult.id}</span>
                </div>
              </div>

              {/* Certificate Details Grid */}
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <User size={15} className="text-[#0B5ED7]" /> Student Name
                  </p>
                  <p className="mt-1.5 text-lg font-extrabold text-navy">{searchResult.studentName}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 sm:col-span-2">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <Award size={15} className="text-[#FF850A]" /> Course Completed
                  </p>
                  <p className="mt-1.5 text-lg font-extrabold text-[#0B5ED7]">{searchResult.course}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <Calendar size={15} className="text-slate-500" /> Duration & Hours
                  </p>
                  <p className="mt-1.5 text-sm font-bold text-navy">{searchResult.duration}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <FileText size={15} className="text-emerald-600" /> Performance Grade
                  </p>
                  <p className="mt-1.5 text-sm font-extrabold text-emerald-600">{searchResult.grade}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <Calendar size={15} className="text-slate-500" /> Issue Date
                  </p>
                  <p className="mt-1.5 text-sm font-bold text-navy">{searchResult.issueDate}</p>
                </div>
              </div>

              {/* Skills Verified Tags */}
              <div className="mt-6 border-t border-slate-100 pt-6">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Key Practical Competencies Tested & Certified:
                </p>
                <div className="flex flex-wrap gap-2">
                  {searchResult.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#0B5ED7] border border-blue-100"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Institute Seal & Authority */}
              <div className="mt-8 rounded-2xl bg-gradient-to-r from-navy to-[#0B4FA8] p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/20 text-white">
                    <School size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-100">Issuing Institution</p>
                    <p className="text-sm font-extrabold">{site.fullName}</p>
                    <p className="text-xs text-blue-100">{site.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Institute Registry Record
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-6">
                <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="btn-outline flex-1 sm:flex-none"
                  >
                    <Printer size={16} /> Print Verification Slip
                  </button>

                  <a
                    href={wa(`Hi Navya Techno, I am verifying certificate ID: ${searchResult.id} for student ${searchResult.studentName}. Please confirm details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 transition"
                  >
                    <MessageCircle size={16} /> Inquire on WhatsApp
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setCertId('');
                    setSearchResult(null);
                    setNotFoundId('');
                  }}
                  className="btn-outline !py-2 !px-4 text-xs font-bold"
                >
                  Verify Another ID →
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
