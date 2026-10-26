import { Seo, PageHeader } from '../components/ui';
import { site } from '../data/site';
import { ShieldCheck, Lock, Mail, Phone, MapPin } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        desc="Privacy Policy of Navya Techno Institute of Computer Education Training Center, Porumamilla."
      />
      <PageHeader
        title="Privacy Policy"
        sub="How we respect and protect your personal information."
      />

      <section className="section bg-white">
        <div className="container-x max-w-4xl space-y-8 text-slate-700 leading-relaxed text-base">
          <div className="rounded-2xl border border-slate-200 bg-mist p-6 sm:p-8 flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-[#0B5ED7] shadow-sm">
              <ShieldCheck size={26} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-xl font-bold text-navy">Our Commitment to Privacy</h2>
              <p className="mt-1 text-sm text-slate-600">
                At <strong>{site.fullName}</strong>, we respect the privacy of every student, parent, and visitor who contacts us or submits an enquiry through our website.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-navy">1. Information We Collect</h3>
            <p>
              When you submit a course enquiry, book a demo session, or contact us via WhatsApp, we collect basic contact information provided voluntarily by you:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600">
              <li>Full Name</li>
              <li>Mobile / WhatsApp Phone Number</li>
              <li>Email address (optional)</li>
              <li>Course of interest and preferred batch timings</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-navy">2. How We Use Your Information</h3>
            <p>
              The information you provide is used solely for educational purposes:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600">
              <li>To respond to your course enquiry or admission request</li>
              <li>To schedule and confirm your free demo class or institute visit</li>
              <li>To inform you regarding course batch timings, syllabus details, and fees</li>
              <li>To answer questions about course certificates and training schedules</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-navy">3. Information Protection & Third Parties</h3>
            <p>
              We do <strong>not</strong> sell, rent, trade, or distribute your personal contact information to any third-party marketing companies. Your details remain confidential with Navya Techno administration.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-navy">4. External Services & Links</h3>
            <p>
              Our website provides links to external services such as WhatsApp (Meta) for instant enquiry messaging and Google Maps for institute directions. Interactions on these platforms are subject to their respective privacy policies.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-navy">5. Contacting Us</h3>
            <p>
              If you have any questions regarding this Privacy Policy or wish to have your enquiry details updated or removed from our records, please contact us:
            </p>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2 text-sm">
              <p className="font-bold text-navy">{site.fullName}</p>
              <p className="flex items-center gap-2 text-slate-600">
                <MapPin size={16} className="text-accent shrink-0" />
                {site.address}
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <Phone size={16} className="text-accent shrink-0" />
                {site.phone}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
