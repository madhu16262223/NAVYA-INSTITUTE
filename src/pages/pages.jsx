import {useEffect,useRef,useState} from 'react';import {useReducedMotion,motion,AnimatePresence} from 'framer-motion';import {Link} from 'react-router-dom';import {ArrowRight,Award,Phone,MapPin,Mail,Clock,MessageCircle,Navigation,ChevronLeft,ChevronRight,X,Play,GraduationCap} from 'lucide-react';
import {site,strip,why,steps,audience,principles,commitments,missionPoints,facilities,certBenefits,admissionSteps,placementSupport,placementStats,hiringPartners,pathSteps,faqs} from '../data/site';
import {courses,courseCats} from '../data/courses';import {faculty,leadership} from '../data/faculty';import {gallery,galleryCats} from '../data/gallery';import {images} from '../data/images';
import {Seo,Timeline,Reveal,Eyebrow,SectionHeading,Photo,FeatureCard,CourseCard,FacultyCard,CertificateImage,Reviews,RatingLine,Stars,PageHeader,CTA,Icon,links,wa} from '../components/ui';
import {SkillChipsMarquee} from '../components/Enhancements';
import {CourseFinder} from '../components/CourseFinder';
import {useDemoModal} from '../context/DemoModalContext';
export {CourseDetail} from './CourseDetail';
export {PrivacyPolicy} from './PrivacyPolicy';
export {NotFound} from './NotFound';
const Grid=({cols='lg:grid-cols-3',children})=><div className={`grid gap-6 sm:grid-cols-2 ${cols}`}>{children}</div>;
const Empty=({children})=><p className="rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center text-slate-500">{children}</p>;
const LinkBtn=({to,children,cls='btn-primary'})=><Link to={to} className={cls}>{children} <ArrowRight size={18} aria-hidden="true"/></Link>;


const ContactButtons=({light})=><div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href={links.call} className="btn-primary"><Phone size={18} aria-hidden="true"/>Call Now</a><a href={wa('Hi Navya Techno, I would like to know about admissions.')} target="_blank" rel="noopener noreferrer" className={light?'btn-light':'btn-outline'}><MessageCircle size={18} aria-hidden="true"/>WhatsApp</a><a href={links.directions} target="_blank" rel="noopener noreferrer" className={light?'btn-light':'btn-outline'}><Navigation size={18} aria-hidden="true"/>Get Directions</a></div>;
const MapEmbed=({h='h-80'})=><iframe title="Navya Techno location on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={`${h} w-full rounded-2xl border-0 ring-1 ring-slate-200`} src={links.embed}/>;

const heroSlides = [
 {
  src: '/images/hero/hero-mentor-hd.jpg',
  alt: 'Dedicated instructor mentoring student in modern computer education lab at Navya Techno',
 },
 {
  src: '/images/hero/hero-coding-hd.jpg',
  alt: 'Students actively practicing software programming and digital skills on desktop computers',
 },
 {
  src: '/images/hero/hero-accounting-hd.jpg',
  alt: 'Practical Tally accounting, MS Office and financial software training classroom',
 },
];

export function Home(){
 const {openDemoModal}=useDemoModal();
 const [slideIndex, setSlideIndex] = useState(0);

 useEffect(() => {
  // Preload all slides for immediate, crisp rendering
  heroSlides.forEach((slide) => {
   const img = new Image();
   img.src = slide.src;
  });
 }, []);

 useEffect(() => {
  const timer = setInterval(() => {
   setSlideIndex((prev) => (prev + 1) % heroSlides.length);
  }, 4000);
  return () => clearInterval(timer);
 }, [slideIndex]);

 return <>
<Seo desc="Navya Techno Institute of Computer Education Training Center, Porumamilla: practical computer courses, certificates and career support. 4.8 on Google."/>
{/* EXACT CUSTOM-BUILT HERO SECTION WITH PROPORTIONS MATCHING IMAGE 2 */}
<section aria-label="Welcome" className="relative overflow-hidden min-h-[500px] sm:min-h-[540px] lg:h-[580px] lg:max-h-[620px] flex items-center bg-[#021333]">
 {/* 1. Animated Lab Photos with Crystal Clear High-Definition Presentation & Subtle Cinematic Zoom */}
 <div className="absolute inset-0 z-0 overflow-hidden">
  {heroSlides.map((slide, idx) => {
   const isActive = slideIndex === idx;
   return (
    <div
     key={idx}
     className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
     }`}
    >
     <img
      src={slide.src}
      alt={slide.alt}
      className={`h-full w-full object-cover object-center pointer-events-none transition-transform duration-[4500ms] ease-out ${
       isActive ? 'scale-[1.07]' : 'scale-100'
      }`}
      loading="eager"
     />
    </div>
   );
  })}
 </div>
  {/* Pure, clear photo slideshow without color tints or corner swooshes */}
  {/* Subtle, soft ambient vignette strictly for text contrast */}
  <div aria-hidden="true" className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/25 via-40% to-transparent pointer-events-none" />

 {/* 4. Bottom-Right Slide Dots (Exact Image 1 Position) */}
 <div className="absolute bottom-4 sm:bottom-5 right-20 sm:right-28 lg:right-32 z-30 flex items-center gap-2">
  {heroSlides.map((_, idx) => (
   <button
    key={idx}
    type="button"
    onClick={() => setSlideIndex(idx)}
    aria-label={`Go to slide ${idx + 1}`}
    className={`h-2 rounded-full transition-all duration-300 ${
     slideIndex === idx
      ? 'w-7 bg-[#FF850A] shadow-md shadow-orange-500/60'
      : 'w-2 bg-white/70 hover:bg-white'
    }`}
   />
  ))}
 </div>

 {/* Slide Controls (Prev / Next subtle arrows next to dots) */}
 <div className="hidden sm:flex absolute right-20 sm:right-28 lg:right-32 bottom-10 z-30 items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
  <button
   type="button"
   onClick={() => setSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
   aria-label="Previous slide"
   className="grid h-7 w-7 place-items-center rounded-full bg-black/40 hover:bg-[#FF850A] text-white backdrop-blur-md border border-white/20 transition-colors"
  >
   <ChevronLeft size={14} />
  </button>
  <button
   type="button"
   onClick={() => setSlideIndex((prev) => (prev + 1) % heroSlides.length)}
   aria-label="Next slide"
   className="grid h-7 w-7 place-items-center rounded-full bg-black/40 hover:bg-[#FF850A] text-white backdrop-blur-md border border-white/20 transition-colors"
  >
   <ChevronRight size={14} />
  </button>
 </div>

 {/* 5. Content Container */}
 <div className="container-x relative z-20 w-full py-14 sm:py-16 lg:py-20">
  <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">
   {/* Eyebrow Label Badge */}
   <div className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-black/30 backdrop-blur-md px-3.5 py-1.5 shadow-md">
    <span className="h-2 w-2 rounded-full bg-[#FF850A] animate-pulse" />
    <p className="text-xs sm:text-sm font-semibold tracking-wider text-blue-100">
     Learn <span className="text-[#FF850A]">•</span> Practice <span className="text-[#FF850A]">•</span> Grow
    </p>
   </div>

   {/* Main Heading with Elegant Line Height and Contrast */}
   <h1 className="mt-4 sm:mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight drop-shadow-[0_2px_12px_rgba(0,10,30,0.9)]">
    Build Your Skills.<br />
    <span className="text-[#FF850A] drop-shadow-[0_2px_12px_rgba(255,133,10,0.4)]">Shape Your Future.</span>
   </h1>

   {/* Description Paragraph with Clean Breathing Room */}
   <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,10,30,0.85)]">
    Practical, career-oriented computer education in Porumamilla. We offer computer fundamentals, software coding, Tally accounting and more — designed for your success.
   </p>

   {/* Interactive CTA Buttons */}
   <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4">
    <Link
     to="/courses"
     className="btn-primary"
    >
     Explore Courses <ArrowRight size={18} aria-hidden="true" />
    </Link>
    <button
     type="button"
     onClick={() => openDemoModal()}
     className="btn-ghost"
    >
     <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-navy">
      <Play size={11} className="fill-[#0B2A5B] translate-x-0.5" aria-hidden="true" />
     </span>
     Watch Our Intro
    </button>
   </div>

   {/* Live Batch Urgency & Trust Seals */}
   <div className="mt-5 flex flex-wrap items-center gap-2.5">
    <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/50 bg-black/40 px-3.5 py-1 text-xs font-bold text-orange-200 backdrop-blur-md shadow-sm">
     <span className="h-2 w-2 rounded-full bg-[#FF850A] animate-ping" />
     <span>Next Batch: Monday 10:00 AM • Limited Seats Left!</span>
    </div>
    <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3.5 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
     <span className="text-amber-400 font-bold">★ 4.8/5</span> Google Verified (83 Reviews)
    </div>
   </div>
  </div>

  {/* 6. In-Hero Highlights Strip (Generous Width, Cleanly Separated) */}
  <div className="mt-10 sm:mt-12 pt-6 border-t border-white/20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:divide-x lg:divide-white/20 max-w-4xl">
   {/* Item 1: Experienced Trainers */}
   <div className="flex items-center gap-3">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/30 bg-black/35 backdrop-blur-md text-white shadow-md">
     <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <circle cx="12" cy="7" r="3.5" stroke="#FFFFFF" strokeWidth="2" fill="#FF850A" />
      <path d="M5 20v-1.5a5.5 5.5 0 0111 0V20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18" cy="10" r="2" stroke="#FFFFFF" strokeWidth="1.5" fill="#FF850A" />
     </svg>
    </span>
    <div>
     <p className="text-xs sm:text-sm font-bold text-white drop-shadow-md leading-tight">Experienced Trainers</p>
     <p className="text-xs text-blue-100 hidden sm:block mt-0.5 leading-snug drop-shadow-sm">Learn from industry professionals</p>
    </div>
   </div>

   {/* Item 2: Hands-on Practice */}
   <div className="flex items-center gap-3 lg:pl-5">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/30 bg-black/35 backdrop-blur-md text-white shadow-md">
     <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <rect x="2" y="3" width="20" height="13" rx="2" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M8 20h8M12 16v4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <rect x="5" y="6" width="14" height="7" rx="1" fill="#FF850A" />
     </svg>
    </span>
    <div>
     <p className="text-xs sm:text-sm font-bold text-white drop-shadow-md leading-tight">Hands-on Practice</p>
     <p className="text-xs text-blue-100 hidden sm:block mt-0.5 leading-snug drop-shadow-sm">Real projects & live training</p>
    </div>
   </div>

   {/* Item 3: Course Certificates */}
   <div className="flex items-center gap-3 lg:pl-5">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/30 bg-black/35 backdrop-blur-md text-white shadow-md">
     <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <circle cx="12" cy="8.5" r="5.5" stroke="#FFFFFF" strokeWidth="2" fill="#FF850A" fillOpacity="0.25" />
      <path d="M9 13.5L7 21l5-2.5L17 21l-2-7.5" stroke="#FF850A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#FF850A" />
      <polyline points="9 8.5 11 10.5 15 6.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
     </svg>
    </span>
    <div>
     <p className="text-xs sm:text-sm font-bold text-white drop-shadow-md leading-tight">Course Certificates</p>
     <p className="text-xs text-blue-100 hidden sm:block mt-0.5 leading-snug drop-shadow-sm">Showcase your skills</p>
    </div>
   </div>

   {/* Item 4: Career Support */}
   <div className="flex items-center gap-3 lg:pl-5">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/30 bg-black/35 backdrop-blur-md text-white shadow-md">
     <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <rect x="3" y="14" width="3.5" height="7" rx="0.5" fill="#FFFFFF" />
      <rect x="8.5" y="10" width="3.5" height="11" rx="0.5" fill="#FFFFFF" />
      <rect x="14" y="6" width="3.5" height="15" rx="0.5" fill="#FFFFFF" />
      <path d="M4 10l5-4 5 3 6-6" stroke="#FF850A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="16 3 20 3 20 7" stroke="#FF850A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
     </svg>
    </span>
    <div>
     <p className="text-xs sm:text-sm font-bold text-white drop-shadow-md leading-tight">Career Support</p>
     <p className="text-xs text-blue-100 hidden sm:block mt-0.5 leading-snug drop-shadow-sm">Guidance for your next step</p>
    </div>
   </div>
  </div>
 </div>
</section>
<SkillChipsMarquee/>

{/* IMPACT STATISTICS STRIP */}
<section aria-label="Key Institute Statistics" className="border-b border-slate-100 bg-white py-8 sm:py-10 shadow-sm relative z-20">
 <div className="container-x">
  <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
   <div className="text-center">
    <p className="text-3xl sm:text-4xl font-black text-[#0B5ED7]">1,500+</p>
    <p className="mt-1 text-xs sm:text-sm font-bold text-navy">Students Certified</p>
    <p className="text-xs text-slate-500">Practical Computer Skills</p>
   </div>
   <div className="text-center lg:pl-6">
    <p className="text-3xl sm:text-4xl font-black text-[#FF850A]">10+ Years</p>
    <p className="mt-1 text-xs sm:text-sm font-bold text-navy">Teaching in Porumamilla</p>
    <p className="text-xs text-slate-500">Trusted Local Center</p>
   </div>
   <div className="text-center lg:pl-6">
    <p className="text-3xl sm:text-4xl font-black text-emerald-600">100%</p>
    <p className="mt-1 text-xs sm:text-sm font-bold text-navy">Practical Lab Focus</p>
    <p className="text-xs text-slate-500">Individual Hands-on Desktops</p>
   </div>
   <div className="text-center lg:pl-6">
    <p className="text-3xl sm:text-4xl font-black text-navy">4.8 ★</p>
     <p className="mt-1 text-xs sm:text-sm font-bold text-navy">Google Rating</p>
    <p className="text-xs text-slate-500">83+ Verified Reviews</p>
   </div>
  </div>
 </div>
</section>

{/* COURSES SECTION — EXACT BLUEPRINT RECREATION */}
<section id="courses" className="relative overflow-hidden bg-gradient-to-b from-[#F2F8FE] via-[#EBF4FD] to-[#F8FAFD] py-16 sm:py-24">
 <div className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" aria-hidden="true"/>
 <div className="pointer-events-none absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl" aria-hidden="true"/>
 
 <div className="pointer-events-none absolute right-6 top-8 hidden sm:grid grid-cols-6 gap-2.5 opacity-25" aria-hidden="true">
  {Array.from({length: 30}).map((_, i) => (
   <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#0B5ED7]"/>
  ))}
 </div>

 <div className="container-x relative">
  <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
   <div className="max-w-2xl">
    <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.22em] text-[#FF850A]">
     <span className="h-[2px] w-5 rounded-full bg-[#FF850A]" aria-hidden="true"/>
     Our Courses
    </p>
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl leading-[1.18]">
     Build Skills for a<br/>
     <span className="text-[#0B5ED7]">Better</span> <span className="text-[#FF850A]">Tomorrow</span>
    </h2>
    <p className="mt-3.5 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
     Practical, industry-relevant courses designed to help you learn, grow and achieve your career goals.
    </p>
   </div>

   <div className="flex items-center gap-6 lg:gap-10 self-start md:self-end">
    <Link to="/courses" className="btn-brand shrink-0">
     View All Courses <ArrowRight size={16} aria-hidden="true"/>
    </Link>
   </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
   {courses.slice(0, 8).map(c => (
    <Reveal key={c.id} className="h-full">
     <CourseCard c={c}/>
    </Reveal>
   ))}

   <Reveal className="h-full">
    <div className="relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-[#F8FBFF] to-[#EFF6FF] p-6 sm:p-7 shadow-[0_4px_20px_rgba(11,42,91,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
     <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-100/60 blur-xl" aria-hidden="true"/>
     <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 opacity-15" aria-hidden="true">
      <svg viewBox="0 0 100 100" fill="none" className="h-full w-full text-[#0B5ED7]">
       <path d="M0 100 C 40 60, 60 40, 100 0 L 100 100 Z" fill="currentColor"/>
      </svg>
     </div>

     <div>
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#FF850A]">
       <GraduationCap size={32} strokeWidth={2.4}/>
      </div>
      <h3 className="mt-4 text-2xl font-extrabold text-navy leading-tight">
       Your Future<br/>Starts Here
      </h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-[260px]">
       Choose your course and take the first step towards a brighter future.
      </p>
      <div className="mt-4 w-24">
       <svg viewBox="0 0 100 15" fill="none" className="w-full text-[#FF850A]">
        <path d="M2 10 Q 50 2, 98 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
       </svg>
      </div>
     </div>

     <div className="mt-6 pt-3.5 border-t border-slate-100/90 flex items-center justify-between">
      <Link to="/courses" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B5ED7] hover:underline">
       Explore All Offerings <ArrowRight size={13}/>
      </Link>
      <Link to="/contact" aria-label="Start enquiry" className="grid h-8 w-8 place-items-center rounded-full bg-[#FF850A] text-white shadow-sm hover:scale-105 transition-transform">
       <ArrowRight size={14} strokeWidth={2.5}/>
      </Link>
     </div>
    </div>
   </Reveal>
  </div>
 </div>
</section>
<CourseFinder/>
<section className="section bg-mist"><div className="container-x"><SectionHeading eyebrow="Why Choose Navya?" title="Learn With Purpose. Grow With Confidence." sub="Dedicated mentors, lab facilities, and supportive atmosphere in Porumamilla."/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">{why.map(([i,t,d])=><Reveal key={t}><FeatureCard icon={i} title={t} text={d}/></Reveal>)}</div></div></section>
<section className="section bg-gradient-to-br from-[#082256] to-[#0B3A85]"><div className="container-x"><SectionHeading light eyebrow="Learning Process" title="Understand. Practise. Improve. Progress." sub="A simple four-stage path from fundamentals to real-world use."/><Timeline dark items={steps}/></div></section>
<section className="section bg-white"><div className="container-x"><SectionHeading eyebrow="Our Team" title="Meet Our Dedicated Trainers" sub="Learn from experienced mentors committed to your individual growth."/><Grid cols="lg:grid-cols-4">{faculty.map((f,i)=><Reveal key={i}><FacultyCard f={f}/></Reveal>)}</Grid><div className="mt-8 text-center"><LinkBtn to="/faculty" cls="btn-outline">View All Faculty</LinkBtn></div></div></section>
<section className="section bg-mist"><div className="container-x grid items-center gap-10 lg:grid-cols-2"><Reveal><CertificateImage/></Reveal><div><Eyebrow>Certificates</Eyebrow><h2 className="text-3xl sm:text-4xl">Learn. Complete. Get Certified.</h2><p className="mt-3 text-lg text-slate-600">Receive official course completion certificates upon successful completion of your training modules and practical tests.</p><ul className="mt-6 grid gap-3 sm:grid-cols-2">{certBenefits.map(([i,t])=><li key={t} className="flex items-center gap-3 font-semibold text-navy"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-accent shadow-sm"><Icon name={i} size={20}/></span>{t}</li>)}</ul><div className="mt-8 flex flex-wrap items-center gap-3"><LinkBtn to="/certificates">View Certificate Details</LinkBtn><Link to="/verify-certificate" className="btn-outline text-xs !py-2.5 !px-5">📜 Verify Certificate Online →</Link></div></div></div></section>
<section className="section bg-white"><div className="container-x grid items-stretch gap-8 lg:grid-cols-2"><Reveal className="flex flex-col justify-center rounded-3xl border border-slate-200 bg-[#F4F9FE] p-8 shadow-card sm:p-10">
 <Eyebrow>Find Us</Eyebrow><h2 className="text-3xl font-extrabold text-navy">Visit Navya Techno in Porumamilla</h2><div className="mt-4"><RatingLine/></div>
 <address className="mt-5 space-y-2.5 not-italic text-slate-700"><p className="font-bold text-navy text-base">{site.fullName}</p><p lang="te" className="text-sm text-slate-500">{site.telugu}</p><p className="flex gap-2 text-sm pt-1"><MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true"/>{site.address}</p><p className="flex gap-2 text-sm"><Phone size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true"/><a href={links.call} className="font-bold text-[#0B5ED7] hover:underline">{site.phone}</a></p></address>
 <div className="mt-6 flex flex-col gap-3 sm:flex-row"><a href={links.directions} target="_blank" rel="noopener noreferrer" className="btn-primary"><Navigation size={18} aria-hidden="true"/>Get Directions</a><a href={links.call} className="btn-outline"><Phone size={18} aria-hidden="true"/>Call Now</a></div></Reveal>
 <MapEmbed h="h-80 lg:h-full lg:min-h-[380px]"/></div></section>
<section className="section bg-mist"><div className="container-x"><SectionHeading eyebrow="Reviews" title="What Our Learners Say" sub="Verified Google Rating 4.8 / 5 based on 83 student reviews."/><Reviews/></div></section>
<section className="section bg-white"><div className="container-x"><SectionHeading eyebrow="Admission Process" title="Your Journey Starts in 5 Simple Steps"/><Timeline items={admissionSteps}/><div className="mt-10 text-center"><LinkBtn to="/contact">Start Your Enquiry</LinkBtn></div></div></section>
<CTA/></>}

export function About(){return <><Seo title="About" desc="About Navya Techno: our purpose, vision, mission and commitment to practical computer education in Porumamilla."/><PageHeader title="About Us" sub="Building Knowledge. Creating Opportunities."/>
<section className="section"><div className="container-x grid items-center gap-10 lg:grid-cols-2"><div><Eyebrow>Who We Are</Eyebrow><h2 className="text-3xl sm:text-4xl">Building Knowledge. Creating Opportunities.</h2><p className="mt-4 text-lg text-slate-600">Navya Techno is dedicated to quality computer education and essential digital skills. We help learners connect theory with practical application.</p><p className="mt-3 text-lg text-slate-600">In a supportive environment, students build ability and confidence for academic, professional and personal growth. We see every student as an opportunity to create a success story.</p></div><Photo src={images.institute} label="[Institute photo]"/></div></section>
<section className="section bg-mist"><div className="container-x"><SectionHeading eyebrow="OUR PURPOSE" title="Making Computer Education Meaningful and Accessible" sub="Five principles guide everything we do."/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{principles.map(([i,t,d])=><FeatureCard key={t} icon={i} title={t} text={d}/>)}</div></div></section>
<section className="section"><div className="container-x grid gap-6 lg:grid-cols-2"><div className="rounded-3xl bg-navy p-8 text-white sm:p-10"><Eyebrow>Our Vision</Eyebrow><h2 className="!text-white text-2xl">A Digitally Empowered Generation</h2><p className="mt-3 text-blue-100">To become a trusted centre for computer education and digital skill development, where students explore technology, discover their potential and pursue their ambitions with confidence.</p></div>
 <div className="rounded-3xl border-2 border-accent bg-white p-8 sm:p-10"><Eyebrow>Our Mission</Eyebrow><h2 className="text-2xl">Transforming Learning into Practical Skills</h2><ul className="mt-3 space-y-2">{missionPoints.map(x=><li key={x} className="flex gap-2"><Award size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true"/>{x}</li>)}</ul></div></div></section>
<section className="section bg-mist"><div className="container-x"><SectionHeading eyebrow="OUR COMMITMENT" title="Every Learner Deserves an Opportunity to Grow" sub="Whatever the starting point, we want students to approach learning with confidence and a willingness to grow."/><Grid>{commitments.map(([i,t,d])=><FeatureCard key={t} icon={i} title={t} text={d}/>)}</Grid></div></section>
<section className="section"><div className="container-x"><SectionHeading eyebrow="Why Navya" title="Learn With Purpose. Grow With Confidence."/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{why.map(([i,t,d])=><FeatureCard key={t} icon={i} title={t} text={d}/>)}</div></div></section>
<section className="section bg-mist"><div className="container-x max-w-3xl"><SectionHeading eyebrow="FAQ" title="Frequently Asked Questions"/>{faqs.map(([q,a])=><details key={q} className="mb-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-card"><summary className="cursor-pointer font-semibold text-navy">{q}</summary><p className="mt-3 text-slate-600">{a}</p></details>)}</div></section><CTA/></>}

export function Courses(){const [cat,setCat]=useState('All');const list=courses.filter(c=>cat==='All'||c.cat===cat);return <><Seo title="Courses" desc="Computer courses at Navya Techno, Porumamilla: basic computer, MS Office, Tally, typing, hardware and more."/><PageHeader title="Our Courses" sub="Discover the skills that move you forward. Contact us for the latest list, eligibility, duration and fees."/>
<section className="section"><div className="container-x"><div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter courses">{courseCats.map(c=><button key={c} aria-pressed={cat===c} onClick={()=>setCat(c)} className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${cat===c?'bg-[#0B5ED7] text-white shadow-md':'bg-mist text-navy hover:bg-blue-100'}`}>{c}</button>)}</div><Grid cols="lg:grid-cols-3 xl:grid-cols-4">{list.map(c=><Reveal key={c.id}><CourseCard c={c}/></Reveal>)}</Grid></div></section>
<section className="section bg-mist"><div className="container-x"><SectionHeading eyebrow="Who Can Join" title="Computer Education for Every Ambitious Learner"/><ul className="flex flex-wrap justify-center gap-3">{audience.map(a=><li key={a} className="rounded-full border border-slate-200 bg-white px-5 py-3 font-semibold text-navy shadow-card">{a}</li>)}</ul></div></section><CTA/></>}

export function Placements(){return <><Seo title="Placements" desc="Career preparation and placement support at Navya Techno."/><PageHeader title="Placements & Career Support" sub="Build Skills. Prepare for Your Career."/>
<section className="section"><div className="container-x"><SectionHeading eyebrow="Career Support" title="Build Skills. Prepare for Your Career."/><Grid cols="lg:grid-cols-4">{placementSupport.map(([i,t,d])=><Reveal key={t}><FeatureCard icon={i} title={t} text={d}/></Reveal>)}</Grid></div></section>
<section className="section bg-mist"><div className="container-x"><SectionHeading eyebrow="Our Impact" title="Learners Who Recommend Us"/><div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2"><div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card"><p className="text-4xl font-extrabold text-[#0B5ED7]">{site.rating.score}</p><div className="mt-1"><Stars/></div><p className="mt-2 text-slate-600">Google rating</p></div><div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card"><p className="text-4xl font-extrabold text-[#0B5ED7]">{site.rating.count}</p><p className="mt-3 text-slate-600">Google reviews</p></div></div>
{placementStats.length>0?<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{placementStats.map(s=><div key={s.label} className="rounded-2xl border bg-white p-6 text-center shadow-card"><p className="text-4xl font-extrabold text-[#0B5ED7]">{s.value}</p><p className="mt-1">{s.label}</p></div>)}</div>:<div className="mx-auto mt-6 max-w-3xl"><Empty>[Placement Statistic]: verified figures from the institute will be shown here</Empty></div>}
{hiringPartners.length>0&&<ul className="mt-8 flex flex-wrap justify-center gap-4">{hiringPartners.map(p=><li key={p} className="rounded-xl bg-white px-5 py-3 font-semibold shadow-card">{p}</li>)}</ul>}</div></section>
<section className="section"><div className="container-x"><SectionHeading eyebrow="Career Journey" title="Possible Career Paths" sub="Your journey, step by step. Outcomes depend on your effort and opportunities; employment is not guaranteed."/><ol className="grid gap-4 md:grid-cols-5">{pathSteps.map((s,i)=><li key={s} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-card"><span className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-full bg-navy font-bold text-white">{i+1}</span><span className="font-semibold text-navy">{s}</span></li>)}</ol></div></section><CTA/></>}

export function Faculty(){const [md,...rest]=faculty;return <><Seo title="Faculty" desc="Meet the leadership and trainers of Navya Techno."/><PageHeader title="Faculty & Trainers" sub="The people behind your learning."/>
<section className="section"><div className="container-x"><div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#082256] to-[#0B4FA8] p-8 text-white sm:p-12"><span aria-hidden="true" className="absolute -bottom-8 right-24 h-40 w-3 rotate-[30deg] bg-accent"/><div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]"><div><Eyebrow>LEADERSHIP</Eyebrow><h2 className="!text-white text-3xl sm:text-4xl">Leadership That Inspires Learning</h2><p className="mt-5 text-lg text-blue-100">{leadership.paragraph}</p><p className="mt-2 text-sm text-sky-200">{leadership.note}</p><div className="mt-6 border-l-4 border-accent pl-4"><p className="text-xl font-bold">{md.name}</p><p className="text-sky-200">{md.role}</p></div></div><Photo src={md.photo} label="[Managing Director photo]" ratio="aspect-[4/5]" className="mx-auto w-full max-w-sm"/></div></div></div></section>
<section className="section bg-mist"><div className="container-x"><SectionHeading eyebrow="OUR TRAINERS" title="Meet Our Trainers" sub="Dedicated trainers committed to your growth."/><Grid cols="lg:grid-cols-3">{rest.map((f,i)=><Reveal key={i}><FacultyCard f={f}/></Reveal>)}</Grid></div></section><CTA/></>}

export function Certificates(){const cc=courses.filter(c=>c.certificate);return <><Seo title="Certificates" desc="Course completion certificates from Navya Techno."/><PageHeader title="Certificates" sub="Learn. Complete. Get Certified."/>
<section className="section"><div className="container-x grid items-center gap-10 lg:grid-cols-2"><Reveal><CertificateImage/></Reveal><div><Eyebrow>WHY IT MATTERS</Eyebrow><h2 className="text-3xl sm:text-4xl">Why Our Certificates Matter</h2><ul className="mt-6 space-y-4">{[['Award','Course completion recognition','Formal recognition when you complete a course.'],['BadgeCheck','Demonstrates learning','Shows the skills you have built.'],['Heart','Builds confidence','A milestone that motivates you forward.'],['FileText','Portfolio support','Add it to your resume and portfolio.']].map(([i,t,d])=><li key={t} className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist text-accent"><Icon name={i} size={22}/></span><div><p className="font-bold text-navy">{t}</p><p className="text-slate-600">{d}</p></div></li>)}</ul><p className="mt-5 text-sm text-slate-500">[Add any affiliation or recognition only once verified.]</p></div></div></section>
<section className="section bg-mist"><div className="container-x"><SectionHeading eyebrow="COURSES" title="Courses With Certificates"/><Grid cols="lg:grid-cols-3 xl:grid-cols-4">{cc.map(c=><CourseCard key={c.id} c={c}/>)}</Grid></div></section><CTA/></>}

export function Facilities(){return <><Seo title="Facilities" desc="Computer lab, hardware lab, classrooms and training equipment at Navya Techno."/><PageHeader title="Our Facilities" sub="Learn in a Practical Environment"/>
<section className="section"><div className="container-x"><Grid>{facilities.map(f=><Reveal key={f.id}><div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"><Photo src={f.img} label={`[${f.title} photo]`} className="!rounded-none !ring-0"/><div className="flex gap-4 p-5"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist text-brand"><Icon name={f.icon} size={22}/></span><div><h3 className="text-lg">{f.title}</h3><p className="mt-1 text-sm text-slate-600">{f.desc}</p></div></div></div></Reveal>)}</Grid></div></section><CTA/></>}

function Lightbox({items,i,onClose,onNav}){const ref=useRef(null);const it=items[i];
 useEffect(()=>{ref.current?.focus();document.body.style.overflow='hidden';
  const k=e=>{if(e.key==='Escape')onClose();else if(e.key==='ArrowRight')onNav(1);else if(e.key==='ArrowLeft')onNav(-1);else if(e.key==='Tab'){const b=[...document.querySelectorAll('[data-lb]')];const a=document.activeElement;const n=b.indexOf(a);e.preventDefault();b[(n+(e.shiftKey?-1:1)+b.length)%b.length].focus()}};
  window.addEventListener('keydown',k);return()=>{window.removeEventListener('keydown',k);document.body.style.overflow=''}},[onClose,onNav]);
 const bt='grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30';
 return <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-navy-900/95 p-4"><button ref={ref} data-lb onClick={onClose} aria-label="Close" className={`${bt} absolute right-4 top-4`}><X aria-hidden="true"/></button>
 <div className="flex w-full max-w-5xl items-center gap-3"><button data-lb onClick={()=>onNav(-1)} aria-label="Previous image" className={bt}><ChevronLeft aria-hidden="true"/></button><div className="min-w-0 flex-1"><Photo src={it.src} label={it.alt} ratio="aspect-[4/3] max-h-[75vh]" className="mx-auto w-full"/></div><button data-lb onClick={()=>onNav(1)} aria-label="Next image" className={bt}><ChevronRight aria-hidden="true"/></button></div><p className="mt-3 text-center text-sm text-blue-100">{it.alt} · {i+1} / {items.length}</p></div>}
export function Gallery(){const [cat,setCat]=useState('All');const [open,setOpen]=useState(null);const opener=useRef(null);const list=gallery.filter(g=>cat==='All'||g.cat===cat);
 const close=()=>{setOpen(null);opener.current?.focus()};const nav=d=>setOpen(o=>(o+d+list.length)%list.length);
 return <><Seo title="Gallery" desc="Moments from Navya Techno: institute, labs, classrooms, training and events."/><PageHeader title="Our Gallery" sub="Moments That Inspire"/>
<section className="section"><div className="container-x"><div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">{['All',...galleryCats].map(c=><button key={c} aria-pressed={cat===c} onClick={()=>setCat(c)} className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${cat===c?'bg-navy text-white':'bg-mist text-navy hover:bg-blue-100'}`}>{c}</button>)}</div>
{list.length?<ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">{list.map((g,i)=><li key={g.src}><button onClick={e=>{opener.current=e.currentTarget;setOpen(i)}} aria-label={`Open image: ${g.alt}`} className="block w-full overflow-hidden rounded-2xl transition-transform hover:scale-[1.02]"><Photo src={g.src} label={g.alt} ratio="aspect-square"/></button></li>)}</ul>:<Empty>No photos in this category yet.</Empty>}</div></section>
{open!==null&&<Lightbox items={list} i={open} onClose={close} onNav={nav}/>}</>}

export function Contact(){const [f,setF]=useState({name:'',phone:'',email:'',course:'',msg:''});
 const [errors,setErrors]=useState({});const [sent,setSent]=useState(false);const [submitting,setSubmitting]=useState(false);
 const on=k=>e=>{setF({...f,[k]:e.target.value});if(errors[k])setErrors({...errors,[k]:null})};
 const validate=()=>{const errs={};if(!f.name.trim())errs.name='Please enter your name.';
  const p=f.phone.replace(/[^0-9]/g,'');if(!p||p.length<10)errs.phone='Please enter a valid 10-digit mobile number.';
  if(!f.course)errs.course='Please select a course.';setErrors(errs);return Object.keys(errs).length===0};
 const submit=async e=>{e.preventDefault();if(!validate())return;setSubmitting(true);
  const endpoint=import.meta.env.VITE_FORM_ENDPOINT;
  if(endpoint){try{await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({type:'Course Enquiry',...f,date:new Date().toISOString()})})}catch(err){console.warn('Optional endpoint submission failed:',err)}}
  const m=`Admission enquiry\nName: ${f.name.trim()}\nPhone: ${f.phone.trim()}\nEmail: ${f.email.trim()||'N/A'}\nCourse: ${f.course}\nMessage: ${f.msg.trim()||'N/A'}`;
  window.open(wa(m),'_blank','noopener,noreferrer');setSubmitting(false);setSent(true)};
 const L=({label,children,err})=><label className="block text-sm font-semibold text-navy">{label}{children}{err&&<span className="mt-1 block text-xs font-normal text-red-600">{err}</span>}</label>;
 const inp=e=>`mt-1 w-full rounded-xl border px-4 py-3 font-normal focus:outline-none transition ${e?'border-red-500 bg-red-50/30':'border-slate-300 focus:border-brand'}`;
 return <><Seo title="Contact" desc="Contact Navya Techno, Porumamilla: call, WhatsApp, get directions or send an admission enquiry."/><PageHeader title="Contact & Admissions" sub="Let's Build Your Future Together"/>
<section className="section"><div className="container-x grid gap-10 lg:grid-cols-2"><div><h2 className="text-2xl">Get In Touch</h2><p className="mt-3 font-semibold text-navy">{site.fullName}</p><p lang="te" className="text-sm text-slate-500">{site.telugu}</p><div className="mt-4"><RatingLine/></div>
 <dl className="mt-6 space-y-4">{[['MapPin','Address',site.address],['Phone','Phone',site.phone],['Mail','Email',site.email],['Clock','Working Hours',site.hours]].map(([i,l,v])=><div key={l} className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist text-brand"><Icon name={i} size={20}/></span><div><dt className="text-sm text-slate-500">{l}</dt><dd className="font-semibold text-navy">{v}</dd></div></div>)}</dl>
 <div className="mt-6"><ContactButtons/></div><div className="mt-8"><MapEmbed/></div></div>
<div className="h-fit rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
 {sent?(<div className="text-center py-6"><div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600"><Icon name="BadgeCheck" size={32}/></div><h3 className="text-2xl font-bold text-navy">Thank You, {f.name}!</h3><p className="mt-2 text-slate-600">Your enquiry has opened in WhatsApp. Please send the message to complete your submission.</p><div className="mt-6 flex flex-col sm:flex-row gap-3"><button onClick={()=>setSent(false)} className="btn-outline flex-1">Send Another Enquiry</button><a href={wa(`Hi Navya Techno, following up on my enquiry for ${f.course}.`)} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">Open WhatsApp</a></div></div>):
 (<form onSubmit={submit} className="space-y-4" noValidate><h2 className="text-2xl">Admission Enquiry</h2>
 <L label="Full Name *" err={errors.name}><input required className={inp(errors.name)} value={f.name} onChange={on('name')} placeholder="e.g. Ramesh Kumar" autoComplete="name"/></L>
 <L label="Phone Number (WhatsApp) *" err={errors.phone}><input required type="tel" className={inp(errors.phone)} value={f.phone} onChange={on('phone')} placeholder="e.g. 98496 38258" autoComplete="tel"/></L>
 <L label="Email (Optional)"><input type="email" className={inp()} value={f.email} onChange={on('email')} placeholder="e.g. yourname@gmail.com" autoComplete="email"/></L>
 <L label="Course Interested In *" err={errors.course}><select required className={inp(errors.course)} value={f.course} onChange={on('course')}><option value="">Select a course</option>{courses.map(c=><option key={c.id} value={c.title}>{c.title}</option>)}</select></L>
 <L label="Message / Questions (Optional)"><textarea rows="3" className={inp()} value={f.msg} onChange={on('msg')} placeholder="Any specific requirements or questions..."/></L>
 <button disabled={submitting} className="btn-primary w-full">{submitting?'Opening WhatsApp...':'Submit Enquiry'} <ArrowRight size={18} aria-hidden="true"/></button>
 <p className="text-xs text-slate-500 text-center">Submitting will open WhatsApp with your enquiry details prefilled.</p></form>)}</div></div></section></>}
