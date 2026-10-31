import {useEffect,useRef,useState} from 'react';import {useReducedMotion,motion,AnimatePresence} from 'framer-motion';import {Link} from 'react-router-dom';import {ArrowRight,ArrowLeft,Award,Phone,MapPin,MessageCircle,Navigation,ChevronLeft,ChevronRight,ChevronDown,X,Calendar,GraduationCap} from 'lucide-react';
import {site,why,steps,audience,principles,commitments,missionPoints,facilities,certBenefits,admissionSteps,placementSupport,placementStats,hiringPartners,pathSteps,faqs} from '../data/site';
import {courses,courseCats} from '../data/courses';import {faculty,leadership} from '../data/faculty';import {gallery,galleryCats} from '../data/gallery';import {images,srcSetFor} from '../data/images';
import {Seo,Timeline,Reveal,Stagger,CountUp,Eyebrow,SectionHeading,Photo,FeatureCard,CourseCard,FacultyCard,CertificateImage,Reviews,RatingLine,Stars,PageHeader,CTA,Icon,links,wa} from '../components/ui';
import {SkillChipsMarquee} from '../components/Enhancements';
import {CourseFinder} from '../components/CourseFinder';
import {useDemoModal} from '../context/DemoModalContext';
export {CourseDetail} from './CourseDetail';
export {PrivacyPolicy} from './PrivacyPolicy';
export {NotFound} from './NotFound';
const Grid=({cols='lg:grid-cols-3',children})=><Stagger className={`grid gap-6 sm:grid-cols-2 ${cols}`}>{children}</Stagger>;
const Empty=({children})=><p className="rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center text-slate-500">{children}</p>;
const LinkBtn=({to,children,cls='btn-primary'})=><Link to={to} className={cls}>{children} <ArrowRight size={18} aria-hidden="true"/></Link>;


const ContactButtons=({light})=><div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href={links.call} className="btn-primary"><Phone size={18} aria-hidden="true"/>Call Now</a><a href={wa('Hi Navya Techno, I would like to know about admissions.')} target="_blank" rel="noopener noreferrer" className={light?'btn-light':'btn-outline'}><MessageCircle size={18} aria-hidden="true"/>WhatsApp</a><a href={links.directions} target="_blank" rel="noopener noreferrer" className={light?'btn-light':'btn-outline'}><Navigation size={18} aria-hidden="true"/>Get Directions</a></div>;
const MapEmbed=({h='h-80'})=><iframe title="Navya Techno location on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={`${h} w-full rounded-2xl border-0 ring-1 ring-slate-200`} src={links.embed}/>;

const heroSlides = images.heroSlides;

export function Home(){
 const {openDemoModal}=useDemoModal();
 const [slideIndex, setSlideIndex] = useState(0);
 const [paused, setPaused] = useState(false);
 const reduceMotion = useReducedMotion();
 const touchStartX = useRef(null);

 useEffect(() => {
  heroSlides.forEach((slide) => {
   const img = new Image();
   img.src = slide.src;
  });
 }, []);

 useEffect(() => {
  if (paused || reduceMotion) return undefined;
  const timer = setInterval(() => {
   setSlideIndex((prev) => (prev + 1) % heroSlides.length);
  }, 4500);
  return () => clearInterval(timer);
 }, [slideIndex, paused, reduceMotion]);

 const handleTouchStart = (e) => {
  touchStartX.current = e.touches[0].clientX;
 };

 const handleTouchEnd = (e) => {
  if (touchStartX.current === null) return;
  const diff = touchStartX.current - e.changedTouches[0].clientX;
  if (diff > 45) {
   setSlideIndex((prev) => (prev + 1) % heroSlides.length);
  } else if (diff < -45) {
   setSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }
  touchStartX.current = null;
 };

 return <>
<Seo desc="Navya Techno Institute of Computer Education Training Center, Porumamilla: practical computer courses, certificates and career support. 4.8 on Google."/>
{/* HERO: Horizontal sliding carousel with high contrast overlay & tactile slide controls */}
<section
 aria-label="Welcome"
 onMouseEnter={() => setPaused(true)}
 onMouseLeave={() => setPaused(false)}
 onFocus={() => setPaused(true)}
 onBlur={() => setPaused(false)}
 onTouchStart={handleTouchStart}
 onTouchEnd={handleTouchEnd}
 className="relative overflow-hidden min-h-[560px] sm:min-h-[620px] lg:min-h-[72vh] lg:max-h-[820px] flex items-end bg-[#021333] select-none"
>
 {/* 1. Pure Horizontal Sliding Carousel Track */}
 <div className="absolute inset-0 z-0 overflow-hidden">
  <div
   className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
   style={{ transform: `translateX(-${slideIndex * 100}%)` }}
  >
   {heroSlides.map((slide, idx) => (
    <div key={idx} className="relative h-full w-full shrink-0 overflow-hidden">
     <img
      src={slide.src}
      srcSet={srcSetFor(slide.src)}
      sizes="100vw"
      alt={slide.alt}
      width="3840"
      height="2160"
      className="h-full w-full object-cover object-center pointer-events-none select-none"
      loading={idx === 0 ? 'eager' : 'lazy'}
      fetchpriority={idx === 0 ? 'high' : 'auto'}
      decoding="async"
     />
    </div>
   ))}
  </div>
 </div>

 {/* Soft bottom & left ambient shade for text contrast */}
 <div aria-hidden="true" className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/40 via-50% to-transparent pointer-events-none" />

 {/* Copy */}
 <div className="container-x relative z-20 w-full pb-16 sm:pb-20 lg:pb-24 pt-24">
  <motion.div className="max-w-2xl" initial={reduceMotion?false:{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8,ease:[.22,1,.36,1]}}>
   <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-blue-100 shadow-md mb-4">
    <span className="h-2 w-2 rounded-full bg-[#FF850A] animate-pulse" />
    <span>Navya Techno Computer Education Training Center</span>
   </div>
   <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-[0_2px_12px_rgba(0,10,30,0.8)]">
    Build Your Skills.<br />
    <span className="text-[#FF850A]">Shape Your Future.</span>
   </h1>
   <p className="mt-4 max-w-lg text-base sm:text-lg text-white/90 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,10,30,0.8)]">
    Practical, career-oriented computer education in Porumamilla.
   </p>
   <div className="mt-7 flex flex-wrap items-center gap-3">
    <Link to="/courses" className="btn-primary">
     Explore Courses <ArrowRight size={18} aria-hidden="true" />
    </Link>
    <button type="button" onClick={() => openDemoModal()} className="btn-ghost">
     <Calendar size={16} aria-hidden="true" /> Book Free Demo
    </button>
   </div>
  </motion.div>
 </div>

 {/* Slide controls */}
 <div className="absolute bottom-5 sm:bottom-7 right-5 sm:right-8 z-30 flex flex-col items-end gap-2.5">
  {heroSlides[slideIndex]?.tag && (
   <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/55 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white shadow-lg">
    <span className="text-[#FF850A] font-extrabold">{`0${slideIndex + 1}`}</span>
    <span className="text-white/40">/</span>
    <span className="text-white/70">{`0${heroSlides.length}`}</span>
    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
    <span className="text-blue-100 hidden sm:inline">{heroSlides[slideIndex].tag}</span>
   </div>
  )}
  <div className="flex items-center gap-3">
   <div role="tablist" aria-label="Slide indicators" className="flex items-center gap-2">
    {heroSlides.map((_, idx) => (
     <button
      key={idx}
      type="button"
      role="tab"
      aria-selected={slideIndex === idx}
      onClick={() => setSlideIndex(idx)}
      aria-label={`Go to slide ${idx + 1}`}
      className={`h-2 rounded-full transition-all duration-300 ${
       slideIndex === idx ? 'w-7 bg-[#FF850A]' : 'w-2 bg-white/70 hover:bg-white'
      }`}
     />
    ))}
   </div>
   <div className="flex items-center gap-1.5">
    <button
     type="button"
     onClick={() => setSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
     aria-label="Previous slide"
     className="btn-icon text-white hover:!bg-accent border border-white/20"
    >
     <ChevronLeft size={15} />
    </button>
    <button
     type="button"
     onClick={() => setSlideIndex((prev) => (prev + 1) % heroSlides.length)}
     aria-label="Next slide"
     className="btn-icon !h-8 !w-8 !bg-black/45 hover:!bg-accent text-white backdrop-blur-md border border-white/20"
    >
     <ChevronRight size={15} />
    </button>
   </div>
  </div>
 </div>
</section>
<SkillChipsMarquee/>

{/* IMPACT STATISTICS STRIP */}
<section aria-label="Key Institute Statistics" className="relative z-20 border-b border-slate-100 bg-white py-10 sm:py-12">
 <div className="container-x">
  <Stagger className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
   {[[1500,'+','Students Certified','Practical Computer Skills','text-[#0B5ED7]'],[10,'+ Years','Teaching in Porumamilla','Trusted Local Center','text-[#FF850A]'],[100,'%','Practical Lab Focus','Individual Hands-on Desktops','text-emerald-600'],[4.8,' ★','Google Rating','83+ Verified Reviews','text-navy']].map(([v,suf,l,d,col],i)=>
    <div key={l} className={`text-center ${i?'lg:pl-6':''}`}><p className={`text-3xl sm:text-4xl font-black tracking-tight ${col}`}><CountUp to={v} decimals={v%1?1:0}/>{suf}</p><p className="mt-1 text-xs sm:text-sm font-bold text-navy">{l}</p><p className="text-xs text-slate-500">{d}</p></div>)}
  </Stagger>
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
    <p className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#FF850A]">
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
      <Link to="/contact" aria-label="Start enquiry" className="btn-icon !h-8 !w-8 bg-accent text-white shadow-sm hover:scale-105">
       <ArrowRight size={14} strokeWidth={2.5}/>
      </Link>
     </div>
    </div>
   </Reveal>
  </div>
 </div>
</section>
<CourseFinder/>
<section className="section bg-mist bg-dots"><div className="container-x"><SectionHeading eyebrow="Why Choose Navya?" title="Learn With Purpose. Grow With Confidence." sub="Dedicated mentors, lab facilities, and supportive atmosphere in Porumamilla."/><Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">{why.map(([i,t,d])=><FeatureCard key={t} icon={i} title={t} text={d}/>)}</Stagger></div></section>
<section className="section bg-gradient-to-br from-[#082256] to-[#0B3A85]"><div className="container-x"><SectionHeading light eyebrow="Learning Process" title="Understand. Practise. Improve. Progress." sub="A simple four-stage path from fundamentals to real-world use."/><Timeline dark items={steps}/></div></section>
<section className="section bg-white"><div className="container-x"><SectionHeading eyebrow="Our Team" title="Meet Our Dedicated Trainers" sub="Learn from experienced mentors committed to your individual growth."/><Grid cols="lg:grid-cols-4">{faculty.map((f,i)=><FacultyCard key={i} f={f}/>)}</Grid><div className="mt-8 text-center"><LinkBtn to="/faculty" cls="btn-outline">View All Faculty</LinkBtn></div></div></section>
<section className="section bg-mist"><div className="container-x grid items-center gap-10 lg:grid-cols-2"><Reveal><CertificateImage/></Reveal><div><Eyebrow>Certificates</Eyebrow><h2 className="text-3xl sm:text-4xl">Learn. Complete. Get Certified.</h2><p className="mt-3 text-lg text-slate-600">Receive official course completion certificates upon successful completion of your training modules and practical tests.</p><ul className="mt-6 grid gap-3 sm:grid-cols-2">{certBenefits.map(([i,t])=><li key={t} className="flex items-center gap-3 font-semibold text-navy"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-accent shadow-sm"><Icon name={i} size={20}/></span>{t}</li>)}</ul><div className="mt-8 flex flex-wrap items-center gap-3"><LinkBtn to="/certificates">View Certificate Details</LinkBtn><Link to="/verify-certificate" className="btn-outline text-xs !py-2.5 !px-5">📜 Verify Certificate Online →</Link></div></div></div></section>
<section className="section bg-white"><div className="container-x grid items-stretch gap-8 lg:grid-cols-2"><Reveal className="flex flex-col justify-center rounded-3xl border border-slate-200 bg-[#F4F9FE] p-8 shadow-card sm:p-10">
 <Eyebrow>Find Us</Eyebrow><h2 className="text-3xl font-extrabold text-navy">Visit Navya Techno in Porumamilla</h2><div className="mt-4"><RatingLine/></div>
 <address className="mt-5 space-y-2.5 not-italic text-slate-600"><p className="font-bold text-navy text-base">{site.fullName}</p><p lang="te" className="text-sm text-slate-500">{site.telugu}</p><p className="flex gap-2 text-sm pt-1"><MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true"/>{site.address}</p><p className="flex gap-2 text-sm"><Phone size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true"/><a href={links.call} className="font-bold text-[#0B5ED7] hover:underline">{site.phone}</a></p></address>
 <div className="mt-6 flex flex-col gap-3 sm:flex-row"><a href={links.directions} target="_blank" rel="noopener noreferrer" className="btn-primary"><Navigation size={18} aria-hidden="true"/>Get Directions</a><a href={links.call} className="btn-outline"><Phone size={18} aria-hidden="true"/>Call Now</a></div></Reveal>
 <MapEmbed h="h-80 lg:h-full lg:min-h-[380px]"/></div></section>
<section className="section bg-mist"><div className="container-x"><SectionHeading eyebrow="Reviews" title="What Our Learners Say" sub="Verified Google Rating 4.8 / 5 based on 83 student reviews."/><Reviews/></div></section>
<section className="section bg-white"><div className="container-x"><SectionHeading eyebrow="Admission Process" title="Your Journey Starts in 5 Simple Steps"/><Timeline items={admissionSteps}/><div className="mt-10 text-center"><LinkBtn to="/contact">Start Your Enquiry</LinkBtn></div></div></section>
<CTA/></>}

export function About(){return <><Seo title="About" desc="About Navya Techno: our purpose, vision, mission and commitment to practical computer education in Porumamilla."/><PageHeader title="About Us" sub="Building Knowledge. Creating Opportunities." image="/images/institute/institute-1920.jpg"/>
<section className="section"><div className="container-x grid items-center gap-10 lg:grid-cols-2"><div><Eyebrow>Who We Are</Eyebrow><h2 className="text-3xl sm:text-4xl">Building Knowledge. Creating Opportunities.</h2><p className="mt-4 text-lg text-slate-600">Navya Techno is dedicated to quality computer education and essential digital skills. We help learners connect theory with practical application.</p><p className="mt-3 text-lg text-slate-600">In a supportive environment, students build ability and confidence for academic, professional and personal growth. We see every student as an opportunity to create a success story.</p></div><Photo src={images.institute} srcSet={srcSetFor(images.institute)} sizes="(min-width:1024px) 50vw, 100vw" label="Navya Techno classroom"/></div></section>
<section className="section bg-mist"><div className="container-x"><SectionHeading eyebrow="OUR PURPOSE" title="Making Computer Education Meaningful and Accessible" sub="Five principles guide everything we do."/><Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{principles.map(([i,t,d])=><FeatureCard key={t} icon={i} title={t} text={d}/>)}</Stagger></div></section>
<section className="section"><div className="container-x grid gap-6 lg:grid-cols-2"><Reveal><div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#082256] via-navy to-[#0B4FA8] p-8 text-white shadow-xl shadow-blue-900/20 sm:p-10"><span aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl"/><Eyebrow>Our Vision</Eyebrow><h2 className="!text-white text-2xl">A Digitally Empowered Generation</h2><p className="mt-3 text-blue-100">To become a trusted centre for computer education and digital skill development, where students explore technology, discover their potential and pursue their ambitions with confidence.</p></div></Reveal>
 <Reveal delay={.1}><div className="h-full rounded-3xl border-2 border-accent/70 bg-gradient-to-br from-white to-orange-50/40 p-8 shadow-card sm:p-10"><Eyebrow>Our Mission</Eyebrow><h2 className="text-2xl">Transforming Learning into Practical Skills</h2><ul className="mt-3 space-y-2">{missionPoints.map(x=><li key={x} className="flex gap-2"><Award size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true"/>{x}</li>)}</ul></div></Reveal></div></section>
<section className="section bg-mist"><div className="container-x"><SectionHeading eyebrow="OUR COMMITMENT" title="Every Learner Deserves an Opportunity to Grow" sub="Whatever the starting point, we want students to approach learning with confidence and a willingness to grow."/><Grid>{commitments.map(([i,t,d])=><FeatureCard key={t} icon={i} title={t} text={d}/>)}</Grid></div></section>

<section className="section bg-mist"><div className="container-x max-w-3xl"><SectionHeading eyebrow="FAQ" title="Frequently Asked Questions"/>{faqs.map(([q,a],i)=><Reveal key={q} delay={i*.06}><details className="group mb-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 open:border-brand/40 open:shadow-lg"><summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-semibold text-navy transition-colors hover:text-brand"><span>{q}</span><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mist text-brand transition-transform duration-300 group-open:rotate-180 group-open:bg-brand group-open:text-white"><ChevronDown size={16} aria-hidden="true"/></span></summary><p className="border-t border-slate-100 px-5 pb-5 pt-4 text-slate-600">{a}</p></details></Reveal>)}</div></section><CTA/></>}

export function Courses(){const [cat,setCat]=useState('All');const list=courses.filter(c=>cat==='All'||c.cat===cat);return <><Seo title="Courses" desc="Computer courses at Navya Techno, Porumamilla: basic computer, MS Office, Tally, typing, hardware and more."/><PageHeader title="Our Courses" sub="Discover the skills that move you forward. Contact us for the latest list, eligibility, duration and fees." image="/images/facilities/computer-lab-1920.jpg"/>
<section className="section"><div className="container-x"><div className="mb-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filter courses">{courseCats.map(c=><button key={c} aria-pressed={cat===c} onClick={()=>setCat(c)} className={`btn-pill relative ${cat===c?'text-white':'bg-mist text-navy hover:bg-blue-100'}`}>{cat===c&&<motion.span layoutId="course-filter-pill" aria-hidden="true" className="absolute inset-0 rounded-full bg-gradient-to-r from-brand to-[#2F7BF0] shadow-md shadow-blue-500/30" transition={{type:'spring',stiffness:420,damping:32}}/>}<span className="relative">{c}</span></button>)}<span className="ml-auto text-sm font-semibold text-slate-500">{list.length} course{list.length===1?'':'s'}</span></div><motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><AnimatePresence mode="popLayout">{list.map(c=><motion.div layout key={c.id} initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.94}} transition={{duration:.3,ease:'easeOut'}}><CourseCard c={c}/></motion.div>)}</AnimatePresence></motion.div></div></section>
<section className="section bg-mist"><div className="container-x"><SectionHeading eyebrow="Who Can Join" title="Computer Education for Every Ambitious Learner"/><ul className="flex flex-wrap justify-center gap-3">{audience.map((a,i)=><Reveal key={a} delay={i*.05}><li className="rounded-full border border-slate-200 bg-white px-5 py-3 font-semibold text-navy shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg">{a}</li></Reveal>)}</ul></div></section><CTA/></>}

export function Placements(){return <><Seo title="Placements" desc="Career preparation and placement support at Navya Techno."/><PageHeader title="Placements & Career Support" sub="Build Skills. Prepare for Your Career." image="/images/gallery/training-1-1920.jpg"/>
<section className="section"><div className="container-x"><SectionHeading eyebrow="Career Support" title="Build Skills. Prepare for Your Career."/><Grid cols="lg:grid-cols-4">{placementSupport.map(([i,t,d])=><FeatureCard key={t} icon={i} title={t} text={d}/>)}</Grid></div></section>
<section className="section bg-mist"><div className="container-x"><SectionHeading eyebrow="Our Impact" title="Learners Who Recommend Us"/><div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2"><div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card"><p className="text-4xl font-extrabold text-[#0B5ED7]">{site.rating.score}</p><div className="mt-1"><Stars/></div><p className="mt-2 text-slate-600">Google rating</p></div><div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card"><p className="text-4xl font-extrabold text-[#0B5ED7]">{site.rating.count}</p><p className="mt-3 text-slate-600">Google reviews</p></div></div>
{placementStats.length>0?<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{placementStats.map(s=><div key={s.label} className="rounded-2xl border bg-white p-6 text-center shadow-card"><p className="text-4xl font-extrabold text-[#0B5ED7]">{s.value}</p><p className="mt-1">{s.label}</p></div>)}</div>:<div className="mx-auto mt-6 max-w-3xl"><Empty>Detailed batch placement records and alumni updates are available at the institute office.</Empty></div>}
{hiringPartners.length>0&&<ul className="mt-8 flex flex-wrap justify-center gap-4">{hiringPartners.map(p=><li key={p} className="rounded-xl bg-white px-5 py-3 font-semibold shadow-card">{p}</li>)}</ul>}</div></section>
<section className="section"><div className="container-x"><SectionHeading eyebrow="Career Journey" title="Possible Career Paths" sub="Your journey, step by step. Outcomes depend on your effort and opportunities; employment is not guaranteed."/><ol className="grid gap-4 md:grid-cols-5">{pathSteps.map((s,i)=><li key={s} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-card"><span className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-full bg-navy font-bold text-white">{i+1}</span><span className="font-semibold text-navy">{s}</span></li>)}</ol></div></section><CTA/></>}

export function Faculty(){const [md,...rest]=faculty;return <><Seo title="Faculty & Trainers" desc="Meet the leadership and trainers of Navya Techno Institute: Veeraiah Raga, B. Balakondaiah, and Gurumadhu Kakarla."/><PageHeader title="Faculty & Trainers" sub="The people behind your learning." image="/images/facilities/practical-training-1920.jpg"/>
<section className="section"><div className="container-x"><div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#082256] to-[#0B4FA8] p-8 text-white sm:p-12"><span aria-hidden="true" className="absolute -bottom-8 right-24 h-40 w-3 rotate-[30deg] bg-accent"/><div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]"><div><Eyebrow>LEADERSHIP</Eyebrow><h2 className="!text-white text-3xl sm:text-4xl">Leadership That Inspires Learning</h2><p className="mt-5 text-lg text-blue-100">{leadership.paragraph}</p><p className="mt-2 text-sm text-blue-100">{leadership.note}</p><div className="mt-6 border-l-4 border-accent pl-4"><p className="text-xl font-bold">{md.name} <span className="text-sm font-normal text-blue-200">({md.qualification})</span></p><p className="text-blue-100 font-semibold">{md.role}</p><p className="text-xs text-blue-200 mt-1 font-medium">{md.spec}</p></div></div><Photo src={md.photo} label={`${md.name} - Head of Institute`} ratio="aspect-[4/5]" className="mx-auto w-full max-w-sm rounded-2xl shadow-2xl"/></div></div></div></section>
<section className="section bg-mist"><div className="container-x"><SectionHeading eyebrow="OUR TRAINERS" title="Meet Our Trainers" sub="Dedicated mentors committed to your individual technical growth and career readiness."/><Grid cols="lg:grid-cols-3">{rest.map((f,i)=><Reveal key={f.id||i}><FacultyCard f={f}/></Reveal>)}</Grid></div></section><CTA/></>}

export function Certificates(){const cc=courses.filter(c=>c.certificate);return <><Seo title="Certificates" desc="Course completion certificates from Navya Techno."/><PageHeader title="Certificates" sub="Learn. Complete. Get Certified." image="/images/gallery/certificate-1-1920.jpg"/>
<section className="section"><div className="container-x grid items-center gap-10 lg:grid-cols-2"><Reveal><CertificateImage/></Reveal><div><Eyebrow>WHY IT MATTERS</Eyebrow><h2 className="text-3xl sm:text-4xl">Why Our Certificates Matter</h2><ul className="mt-6 space-y-4">{[['Award','Course completion recognition','Formal recognition when you complete a course.'],['BadgeCheck','Demonstrates learning','Shows the skills you have built.'],['Heart','Builds confidence','A milestone that motivates you forward.'],['FileText','Portfolio support','Add it to your resume and portfolio.']].map(([i,t,d])=><li key={t} className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist text-accent"><Icon name={i} size={22}/></span><div><p className="font-bold text-navy">{t}</p><p className="text-slate-600">{d}</p></div></li>)}</ul><p className="mt-5 text-sm text-slate-500">Authorized Course Completion Certificate issued directly by Navya Techno Institute of Computer Education, Porumamilla.</p></div></div></section>
<section className="section bg-mist"><div className="container-x"><SectionHeading eyebrow="COURSES" title="Courses With Certificates"/><Grid cols="lg:grid-cols-3 xl:grid-cols-4">{cc.map(c=><CourseCard key={c.id} c={c}/>)}</Grid></div></section><CTA/></>}

export function Facilities(){return <><Seo title="Facilities" desc="Computer lab, hardware lab, classrooms and training equipment at Navya Techno."/><PageHeader title="Our Facilities" sub="Learn in a Practical Environment" image="/images/facilities/learning-environment-1920.jpg"/>
<section className="section"><div className="container-x"><Grid>{facilities.map(f=><div key={f.id} className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:[&_img]:scale-110"><div className="relative"><Photo src={f.img} srcSet={srcSetFor(f.img)} label={`${f.title} at Navya Techno`} className="!rounded-none !ring-0"/><span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent"/><span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-navy backdrop-blur">{f.title}</span></div><div className="flex gap-4 p-5"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist text-brand"><Icon name={f.icon} size={22}/></span><div><h3 className="text-lg">{f.title}</h3><p className="mt-1 text-sm text-slate-600">{f.desc}</p></div></div></div>)}</Grid></div></section><CTA/></>}

function Lightbox({items,i,onClose,onNav}){const ref=useRef(null);const it=items[i];
 useEffect(()=>{ref.current?.focus();document.body.style.overflow='hidden';
  const k=e=>{if(e.key==='Escape')onClose();else if(e.key==='ArrowRight')onNav(1);else if(e.key==='ArrowLeft')onNav(-1);else if(e.key==='Tab'){const b=[...document.querySelectorAll('[data-lb]')];const a=document.activeElement;const n=b.indexOf(a);e.preventDefault();b[(n+(e.shiftKey?-1:1)+b.length)%b.length].focus()}};
  window.addEventListener('keydown',k);return()=>{window.removeEventListener('keydown',k);document.body.style.overflow=''}},[onClose,onNav]);
 const bt='inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/20 text-white hover:bg-white/40 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0 shadow-lg';
 return(
  <div role="dialog" aria-modal="true" aria-label="Image viewer" onClick={e=>{if(e.target===e.currentTarget)onClose()}} className="fixed inset-0 z-[70] flex flex-col items-center justify-between bg-black/92 p-4 sm:p-6 backdrop-blur-md transition-opacity">
   {/* ── Top Bar with "Back to Gallery" and "Close X" ─────────────────────── */}
   <div className="w-full max-w-6xl flex items-center justify-between gap-4 py-2 z-10">
    <button ref={ref} data-lb onClick={onClose} aria-label="Back to gallery" className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-white/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-md active:scale-95">
     <ArrowLeft size={16} aria-hidden="true"/>
     <span>Back to Gallery</span>
    </button>
    <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-sm shadow-sm">{i+1} / {items.length}</span>
    <button data-lb onClick={onClose} aria-label="Close image viewer" className="inline-flex items-center gap-1.5 rounded-full bg-white/15 hover:bg-red-500/80 px-3.5 py-2 text-xs sm:text-sm font-bold text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-md active:scale-95">
     <X size={18} aria-hidden="true"/>
     <span className="hidden sm:inline">Close</span>
    </button>
   </div>

   {/* ── Image & Nav Controls ────────────────────────────────────────────── */}
   <div className="flex w-full max-w-6xl items-center justify-between gap-2 sm:gap-4 my-auto">
    <button data-lb onClick={()=>onNav(-1)} aria-label="Previous image" className={bt}><ChevronLeft size={24} aria-hidden="true"/></button>
    <div className="min-w-0 flex-1 flex items-center justify-center p-2">
     <div onClick={e=>e.stopPropagation()} className="relative max-h-[72vh] max-w-full overflow-hidden rounded-2xl bg-black/40 shadow-2xl ring-1 ring-white/15">
      <img src={it.src} alt={it.alt} className="max-h-[72vh] w-auto max-w-full object-contain mx-auto transition-transform duration-200" style={{filter:'contrast(1.05) saturate(1.08) brightness(1.02)',imageRendering:'auto',WebkitFontSmoothing:'antialiased'}}/>
     </div>
    </div>
    <button data-lb onClick={()=>onNav(1)} aria-label="Next image" className={bt}><ChevronRight size={24} aria-hidden="true"/></button>
   </div>

   {/* ── Caption & Category ──────────────────────────────────────────────── */}
   <div className="w-full max-w-2xl flex flex-col items-center gap-1.5 py-2 z-10 text-center">
    <p className="text-sm font-medium text-white/95 px-4 drop-shadow-md">{it.alt}</p>
    <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm">{it.cat}</span>
   </div>
  </div>
 );
}

export function Gallery(){
 const [cat,setCat]=useState('All');
 const [open,setOpen]=useState(null);
 const opener=useRef(null);
 const prefMotion=useReducedMotion();
 const list=gallery.filter(g=>cat==='All'||g.cat===cat);
 const close=()=>{setOpen(null);opener.current?.focus()};
 const nav=d=>setOpen(o=>(o+d+list.length)%list.length);
 const catCounts=galleryCats.reduce((acc,c)=>({...acc,[c]:gallery.filter(g=>g.cat===c).length}),{});
 return(
  <>
  <Seo title="Gallery" desc="Authentic photos from Navya Techno: institute, labs, classrooms, training, events and student activities in Porumamilla."/>
  <PageHeader title="Our Gallery" sub="Real moments from our institute – classes, labs, events and celebrations." image="/images/gallery/activity-1-1920.jpg"/>
  <section className="section">
   <div className="container-x">
    {/* ── Stats row ─────────────────────────────────────────────────────── */}
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
     <div className="flex items-center gap-2 text-sm text-slate-500">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-navy text-white font-bold text-xs">{gallery.length}</span>
      <span>authentic photos from Navya Techno Institute</span>
     </div>
     <p className="text-xs text-slate-400 italic">Click any photo to view full size · Press Esc or X to return to gallery</p>
    </div>
    {/* ── Category filter pills ─────────────────────────────────────────── */}
    <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter gallery by category">
     {['All',...galleryCats].map(c=>(
      <button key={c} aria-pressed={cat===c} onClick={()=>setCat(c)}
       className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${cat===c?'bg-navy text-white shadow-md scale-105':'bg-mist text-navy hover:bg-blue-100'}`}>
       {c}
       {c!=='All'&&catCounts[c]&&<span className={`rounded-full px-1.5 py-0.5 text-xs font-bold ${cat===c?'bg-white/20 text-white':'bg-slate-200 text-slate-600'}`}>{catCounts[c]}</span>}
       {c==='All'&&<span className={`rounded-full px-1.5 py-0.5 text-xs font-bold ${cat==='All'?'bg-white/20 text-white':'bg-slate-200 text-slate-600'}`}>{gallery.length}</span>}
      </button>
     ))}
    </div>
    {/* ── Photo grid ───────────────────────────────────────────────────── */}
    {list.length?(
     <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {list.map((g,i)=>(
       <li key={g.src}>
        <div
         role="button" tabIndex={0}
         onClick={e=>{opener.current=e.currentTarget;setOpen(i)}}
         onKeyDown={e=>(e.key===' '||e.key==='Enter')&&(e.preventDefault(),opener.current=e.currentTarget,setOpen(i))}
         aria-label={`View photo: ${g.alt}`}
         className="group relative block w-full overflow-hidden rounded-2xl cursor-pointer bg-slate-100 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-[#0B5ED7]/40 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5ED7]"
        >
         {/* Real photo with color & contrast enhancement */}
         <div className="aspect-square overflow-hidden bg-slate-900/10">
          <img
           src={g.src} alt={g.alt} loading="lazy" decoding="async"
           className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
           style={{filter:'contrast(1.04) saturate(1.08) brightness(1.01)',imageRendering:'auto'}}
          />
         </div>
         {/* Hover overlay with caption */}
         <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-[#021333]/90 via-[#021333]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-3 z-10">
          <span className="mb-1 rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white">{g.cat}</span>
          <p className="text-center text-xs font-medium text-white/95 line-clamp-2 leading-tight drop-shadow-sm">{g.alt}</p>
         </div>
         {/* Zoom indicator icon */}
         <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none z-10">
          <div className="rounded-full bg-white/25 p-3 backdrop-blur-sm ring-1 ring-white/30">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          </div>
         </div>
        </div>
       </li>
      ))}
     </ul>
    ):<Empty>No photos in this category yet.</Empty>}
   </div>
  </section>
  {open!==null&&<Lightbox items={list} i={open} onClose={close} onNav={nav}/>}
  </>
 );
}

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
 const inp=e=>`mt-1 w-full rounded-xl border bg-slate-50/50 px-4 py-3 font-normal transition focus:bg-white focus:outline-none focus:ring-4 ${e?'border-red-500 bg-red-50/30 focus:ring-red-100':'border-slate-300 focus:border-brand focus:ring-blue-100'}`;
 return <><Seo title="Contact" desc="Contact Navya Techno, Porumamilla: call, WhatsApp, get directions or send an admission enquiry."/><PageHeader title="Contact & Admissions" sub="Let's Build Your Future Together" image="/images/facilities/classroom-1920.jpg"/>
<section className="section"><div className="container-x grid gap-10 lg:grid-cols-2"><div><h2 className="text-2xl">Get In Touch</h2><p className="mt-3 font-semibold text-navy">{site.fullName}</p><p lang="te" className="text-sm text-slate-500">{site.telugu}</p><div className="mt-4"><RatingLine/></div>
 <dl className="mt-6 space-y-4">{[['MapPin','Address',site.address],['Phone','Phone',site.phone],['Mail','Email',site.email],['Clock','Working Hours',site.hours]].filter(([,,v])=>v&&!/^\[.*\]$/.test(v)).map(([i,l,v])=><div key={l} className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist text-brand"><Icon name={i} size={20}/></span><div><dt className="text-sm text-slate-500">{l}</dt><dd className="font-semibold text-navy">{v}</dd></div></div>)}</dl>
 <div className="mt-6"><ContactButtons/></div><div className="mt-8"><MapEmbed/></div></div>
<Reveal delay={.1}><div className="h-fit rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-blue-900/5 ring-1 ring-blue-100/60">
 {sent?(<div className="text-center py-6"><div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600"><Icon name="BadgeCheck" size={32}/></div><h3 className="text-2xl font-bold text-navy">Thank You, {f.name}!</h3><p className="mt-2 text-slate-600">Your enquiry has opened in WhatsApp. Please send the message to complete your submission.</p><div className="mt-6 flex flex-col sm:flex-row gap-3"><button onClick={()=>setSent(false)} className="btn-outline flex-1">Send Another Enquiry</button><a href={wa(`Hi Navya Techno, following up on my enquiry for ${f.course}.`)} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">Open WhatsApp</a></div></div>):
 (<form onSubmit={submit} className="space-y-4" noValidate><h2 className="text-2xl">Admission Enquiry</h2>
 <L label="Full Name *" err={errors.name}><input required className={inp(errors.name)} value={f.name} onChange={on('name')} placeholder="e.g. Ramesh Kumar" autoComplete="name"/></L>
 <L label="Phone Number (WhatsApp) *" err={errors.phone}><input required type="tel" className={inp(errors.phone)} value={f.phone} onChange={on('phone')} placeholder="e.g. 98496 38258" autoComplete="tel"/></L>
 <L label="Email (Optional)"><input type="email" className={inp()} value={f.email} onChange={on('email')} placeholder="e.g. yourname@gmail.com" autoComplete="email"/></L>
 <L label="Course Interested In *" err={errors.course}><select required className={inp(errors.course)} value={f.course} onChange={on('course')}><option value="">Select a course</option>{courses.map(c=><option key={c.id} value={c.title}>{c.title}</option>)}</select></L>
 <L label="Message / Questions (Optional)"><textarea rows="3" className={inp()} value={f.msg} onChange={on('msg')} placeholder="Any specific requirements or questions..."/></L>
 <button disabled={submitting} className="btn-primary w-full">{submitting?'Opening WhatsApp...':'Submit Enquiry'} <ArrowRight size={18} aria-hidden="true"/></button>
 <p className="text-xs text-slate-500 text-center">Submitting will open WhatsApp with your enquiry details prefilled.</p></form>)}</div></Reveal></div></section></>}
