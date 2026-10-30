import {Children,useEffect,useRef,useState} from 'react';
import {Link} from 'react-router-dom';
import {motion,useReducedMotion} from 'framer-motion';
import {Monitor,FileSpreadsheet,Calculator,Keyboard,Globe,Cpu,Code2,Users,MousePointerClick,Target,LifeBuoy,GraduationCap,Laptop,Rocket,Briefcase,Infinity as Inf,Zap,BookOpen,FileText,Compass,Wrench,School,BadgeCheck,Lightbulb,Award,Star,ArrowRight,MapPin,Phone,Mail,Clock,Heart,TrendingUp,ShieldCheck,Sparkles,HeartHandshake,MessageCircleQuestion,Image as ImageIcon,Circle,Quote,User,Calendar,Coffee,Terminal,MessageSquare,Layers,ChevronLeft,ChevronRight} from 'lucide-react';
import {site} from '../data/site';import {images} from '../data/images';import {reviews} from '../data/testimonials';
const map={Monitor,FileSpreadsheet,Calculator,Keyboard,Globe,Cpu,Code2,Users,MousePointerClick,Target,LifeBuoy,GraduationCap,Laptop,Rocket,Briefcase,Infinity:Inf,Zap,BookOpen,FileText,Compass,Wrench,School,BadgeCheck,Lightbulb,Award,MapPin,Phone,Mail,Clock,Heart,TrendingUp,ShieldCheck,Sparkles,HeartHandshake,MessageCircleQuestion,User,Calendar,Coffee,Terminal,MessageSquare,Layers};
export const Icon=({name,...p})=>{const C=map[name]||Circle;return <C aria-hidden="true" {...p}/>};
const q=encodeURIComponent(site.mapQuery);
export const links={call:`tel:${site.phoneTel}`,directions:`https://www.google.com/maps/dir/?api=1&destination=${q}`,maps:`https://www.google.com/maps/search/?api=1&query=${q}`,embed:`https://www.google.com/maps?q=${q}&output=embed`};
export const wa=m=>`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(m)}`;
export function Seo({title,desc}){useEffect(()=>{document.title=title?`${title} | Navya Techno, Porumamilla`:'Navya Techno | Computer Education Training Center, Porumamilla';
 if(desc)document.querySelector('meta[name=description]')?.setAttribute('content',desc);window.scrollTo({top:0,left:0,behavior:'instant'})},[title,desc]);return null}
export function Reveal({children,className='',delay=0,y=24}){const r=useReducedMotion();
 return <motion.div className={className} initial={r?false:{opacity:0,y}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.6,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
// Grid/list wrapper that reveals each child with a small stagger
export function Stagger({children,className='',step=.08}){return <div className={className}>{Children.map(children,(c,i)=>c?<Reveal key={i} delay={i*step} className="h-full">{c}</Reveal>:null)}</div>}
export const Eyebrow=({children,center,light})=><p className={`mb-3 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[.22em] ${light?'text-blue-100':'text-[#0B5ED7]'} ${center?'justify-center':''}`}><span className="h-[3px] w-7 rounded-full bg-gradient-to-r from-accent to-[#FFB366]"/>{children}</p>;
export const SectionHeading=({eyebrow,title,sub,center=true,light})=><Reveal className={`mb-12 max-w-2xl ${center?'mx-auto text-center':''}`}>{eyebrow&&<Eyebrow center={center} light={light}>{eyebrow}</Eyebrow>}<h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] ${light?'!text-white':''}`}>{title}</h2>{sub&&<p className={`mt-4 text-lg ${light?'text-blue-100':'text-slate-600'}`}>{sub}</p>}</Reveal>;
export function Photo({src,srcSet,sizes,label='[Photo]',className='',ratio='aspect-[4/3]',eager}){const [bad,setBad]=useState(!src);
 return <div className={`${ratio} ${className} overflow-hidden rounded-2xl bg-gradient-to-br from-mist to-blue-100 ring-1 ring-slate-200`}>
 {!bad?<img src={src} srcSet={srcSet} sizes={srcSet?sizes||'(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw':undefined} alt={label} loading={eager?'eager':'lazy'} decoding="async" onError={()=>setBad(true)} className="h-full w-full object-cover transition-transform duration-700 ease-out"/>:
 <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center text-sm font-medium text-brand"><ImageIcon size={28} aria-hidden="true"/>{label}</div>}</div>}
export const Stars=({size=16,score=site.rating.score})=><span className="inline-flex gap-0.5 text-accent" role="img" aria-label={`${score} out of 5 stars`}>{[0,1,2,3,4].map(i=><Star key={i} size={size} fill="currentColor" aria-hidden="true"/>)}</span>;
export const RatingLine=({dark})=><div className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${dark?'text-white':'text-navy'}`}><span className="text-2xl font-extrabold">{site.rating.score}</span><Stars/><span className="text-sm font-semibold">{site.rating.count} Google Reviews</span></div>;
export const FeatureCard=({icon,title,text})=><div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-blue-900/10">
 <span aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-brand/15 to-accent/15 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
 <span className="relative mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-mist to-blue-100 text-brand ring-1 ring-blue-100 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"><Icon name={icon} size={24}/></span><h3 className="relative text-lg">{title}</h3><p className="relative mt-2 text-slate-600">{text}</p></div>;
export const CourseCard=({c})=><article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-[0_4px_20px_rgba(11,42,91,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(11,42,91,0.12)] hover:border-[#0B5ED7]/40">
 <div>
  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-inner">
   <img src={c.image} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src='/images/facilities/computer-lab-1920.jpg'}}/>
   <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-80"/>
   <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-navy shadow-sm backdrop-blur">{c.cat}</span>
   <span className="absolute right-3 top-3 rounded-full bg-navy/70 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur">{c.cardDuration||c.duration.split(' (')[0]}</span>
  </div>
  <div className="relative -mt-6 ml-3.5 z-10 grid h-12 w-12 place-items-center rounded-full text-white shadow-md ring-4 ring-white" style={{backgroundColor:c.accent||'#0B5ED7'}}>
   <Icon name={c.icon} size={22} strokeWidth={2.2}/>
  </div>
  <div className="pt-2 px-1">
   <h3 className="text-lg font-bold text-navy leading-snug group-hover:text-[#0B5ED7] transition-colors">{c.title}</h3>
   <span className="block h-1 w-8 rounded-full mt-2 mb-3" style={{backgroundColor:c.accent||'#0B5ED7'}}/>
   <p className="text-xs sm:text-sm leading-relaxed text-slate-500 line-clamp-3">{c.desc}</p>
  </div>
 </div>
 <div className="mt-4 px-1">
  <div className="rounded-xl bg-[#F0F6FD] p-2.5 sm:p-3 grid grid-cols-2 gap-2 text-xs">
   <div className="flex items-center gap-2 min-w-0" title={`Level: ${c.level}`}>
    <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-100/90 text-[#0B5ED7] shrink-0"><User size={13} strokeWidth={2.4}/></span>
    <div className="min-w-0"><p className="text-xs uppercase font-bold text-slate-500 leading-none">Level</p><p className="text-xs font-bold text-navy mt-1 whitespace-nowrap overflow-visible">{c.cardLevel || c.level}</p></div>
   </div>
   <div className="flex items-center gap-2 min-w-0" title={`Duration: ${c.duration}`}>
    <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-100/90 text-[#0B5ED7] shrink-0"><Calendar size={13} strokeWidth={2.4}/></span>
    <div className="min-w-0"><p className="text-xs uppercase font-bold text-slate-500 leading-none">Duration</p><p className="text-xs font-bold text-navy mt-1 whitespace-nowrap overflow-visible">{c.cardDuration || c.duration.split(' (')[0]}</p></div>
   </div>
  </div>
  <div className="mt-3.5 pt-0.5">
   <Link to={`/courses/${c.id}`} className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B5ED7] hover:gap-2.5 transition-all">
    Learn More <ArrowRight size={15} strokeWidth={2.4}/>
   </Link>
  </div>
 </div>
</article>;
export const FacultyCard=({f})=><article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-200 hover:[&_img]:scale-105"><div className="relative"><Photo src={f.photo} label="Faculty Photo" ratio="aspect-[4/5]" className="!rounded-none !ring-0"/><span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy/50 to-transparent"/></div><div className="p-5">{f.experience&&<span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-2.5 py-0.5 text-xs font-extrabold text-[#0B5ED7] mb-2">{f.experience}</span>}<h3 className="text-lg font-extrabold text-navy">{f.name}</h3><p className="text-sm font-semibold text-[#0B5ED7]">{f.role}</p><p className="mt-1 text-xs text-slate-500 leading-relaxed">{f.spec}</p>{f.bio&&<p className="mt-2 text-xs text-slate-600 line-clamp-2">{f.bio}</p>}</div></article>;
export function CertificateImage(){const [bad,setBad]=useState(false);
 return !bad?<img src={images.certificate} alt="Navya Techno course completion certificate" loading="lazy" onError={()=>setBad(true)} className="w-full rounded-2xl shadow-card ring-1 ring-slate-200"/>:
 <div role="img" aria-label="Sample certificate layout" className="rounded-2xl border-[6px] border-double border-accent bg-white p-8 text-center shadow-card"><img src={images.logo.stacked} alt="" className="mx-auto h-20 w-auto"/><p className="mt-4 text-sm font-semibold text-slate-500">Certificate of Completion</p><p className="my-3 text-3xl font-extrabold text-navy">[Student Name]</p><p>has successfully completed</p><p className="font-bold text-brand">[Course Name]</p><div className="mt-8 flex justify-between text-xs text-slate-500"><span>[Date]</span><Award className="text-accent" aria-hidden="true"/><span>[Authorised Signature]</span></div><p className="mt-4 text-xs text-slate-500">Sample layout: replace with the real certificate image</p></div>}
const initials=n=>n.split(/\s+/).map(w=>w[0]).filter(Boolean).slice(0,2).join('').toUpperCase();
const AVATAR=['from-brand to-sky-400','from-accent to-amber-300','from-emerald-500 to-teal-300','from-violet-500 to-fuchsia-400','from-rose-500 to-orange-300','from-navy to-brand'];
export function Reviews(){const track=useRef(null);const [i,setI]=useState(0);const [hover,setHover]=useState(false);const r=useReducedMotion();const n=reviews.length;
 const go=k=>{const el=track.current;if(!el||!n)return;const next=((k%n)+n)%n;setI(next);const card=el.children[next];if(card)el.scrollTo({left:card.offsetLeft-el.offsetLeft,behavior:r?'instant':'smooth'})};
 useEffect(()=>{if(hover||r||n<2)return undefined;const t=setInterval(()=>go(i+1),5000);return()=>clearInterval(t)},[i,hover,r,n]);
 useEffect(()=>{const el=track.current;if(!el)return undefined;const on=()=>{const w=el.children[0]?.offsetWidth||1;setI(Math.round(el.scrollLeft/(w+24)))};el.addEventListener('scroll',on,{passive:true});return()=>el.removeEventListener('scroll',on)},[]);
 return <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
 <Reveal><div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#082256] via-navy to-[#0B4FA8] p-8 text-white shadow-xl shadow-blue-900/20"><span aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl"/><span aria-hidden="true" className="absolute inset-0 bg-grid opacity-30"/>
  <div className="relative"><p className="text-6xl font-extrabold tracking-tight"><CountUp to={Number(site.rating.score)} decimals={1}/></p><div className="mt-2"><Stars size={22}/></div><p className="mt-3 font-semibold">Based on <CountUp to={Number(site.rating.count)}/> Google Reviews</p><p className="mt-1 text-sm text-blue-100">Verified rating of our institute in Porumamilla.</p><div className="mt-6 flex flex-col gap-2.5"><a href={links.maps} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs !py-2.5 !px-5">Read on Google <ArrowRight size={14}/></a><a href={links.maps} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs !py-2.5 !px-5">Write a Review on Google</a></div></div></div></Reveal>
 {n?<Reveal delay={.1} className="min-w-0"><div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="relative">
  <div ref={track} className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2" aria-live="polite">
   {reviews.map((t,k)=><figure key={k} className="group relative flex h-auto w-[88%] shrink-0 snap-start flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[calc(50%-12px)] sm:p-7">
    <div><div className="flex items-center justify-between"><Quote size={28} className="text-brand/20 transition-colors group-hover:text-accent/40" aria-hidden="true"/><Stars size={14} score={t.rating}/></div>
    <blockquote className="mt-4 text-[15px] leading-relaxed text-slate-600">“{t.text}”</blockquote></div>
    <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4"><span aria-hidden="true" className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br ${AVATAR[k%AVATAR.length]} text-sm font-extrabold text-white shadow-md`}>{initials(t.name)}</span><div className="min-w-0"><p className="font-bold text-navy">{t.name}</p>{t.course&&<p className="truncate text-xs text-slate-500">{t.course}</p>}</div>{t.sample&&<span title="Sample review: replace with a real Google review in src/data/testimonials.js" className="ml-auto shrink-0 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-600 ring-1 ring-amber-200">Sample</span>}</figcaption>
   </figure>)}
  </div>
  <div className="mt-5 flex items-center justify-between"><div role="tablist" aria-label="Testimonials" className="flex items-center gap-2">{reviews.map((_,k)=><button key={k} type="button" role="tab" aria-selected={i===k} aria-label={`Show testimonial ${k+1}`} onClick={()=>go(k)} className={`h-2 rounded-full transition-all duration-300 ${i===k?'w-7 bg-accent':'w-2 bg-slate-300 hover:bg-slate-400'}`}/>)}</div>
   <div className="flex items-center gap-2"><button type="button" onClick={()=>go(i-1)} aria-label="Previous testimonial" className="btn-icon"><ChevronLeft size={18}/></button><button type="button" onClick={()=>go(i+1)} aria-label="Next testimonial" className="btn-icon"><ChevronRight size={18}/></button></div></div>
 </div></Reveal>:
 <div className="grid place-items-center rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-card"><p>Read what our learners say about Navya Techno on Google, or share your own experience to help future students.</p></div>}</div>}
export const PageHeader=({title,sub,image='/images/facilities/classroom-1920.jpg'})=>{const r=useReducedMotion();
 return <header className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
 <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-105 object-cover opacity-35" loading="eager" decoding="async"/>
 <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-navy/85 to-[#0B4FA8]/60"/>
 <span aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl animate-float"/><span aria-hidden="true" className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"/>
 <span aria-hidden="true" className="absolute -right-8 top-0 h-full w-20 -skew-x-[28deg] bg-accent/80"/><span aria-hidden="true" className="absolute right-20 top-0 h-full w-6 -skew-x-[28deg] bg-sky-400/40"/>
 <div className="container-x relative"><motion.div initial={r?false:{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7,ease:[.22,1,.36,1]}}>
  <nav aria-label="Breadcrumb" className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold text-blue-100 backdrop-blur-md"><Link to="/" className="hover:text-white">Home</Link><span aria-hidden="true" className="text-accent">›</span><span className="text-white">{title}</span></nav>
  <h1 className="text-4xl !text-white sm:text-5xl lg:text-6xl tracking-tight drop-shadow-[0_2px_12px_rgba(0,10,30,.6)]">{title}</h1>{sub&&<p className="mt-4 max-w-2xl text-lg text-blue-100">{sub}</p>}</motion.div></div></header>};
export const CTA=()=><section className="section"><div className="container-x"><Reveal><div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#082256] via-navy to-[#0B4FA8] px-6 py-16 text-center sm:px-16 sm:py-20 shadow-2xl shadow-blue-900/30">
 <span aria-hidden="true" className="absolute inset-0 bg-grid opacity-40"/><span aria-hidden="true" className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/40 blur-3xl animate-float"/><span aria-hidden="true" className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-sky-400/30 blur-3xl"/><span aria-hidden="true" className="absolute bottom-0 right-16 h-16 w-3 -skew-x-[30deg] bg-accent"/>
 <p className="relative mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-blue-100 backdrop-blur-md"><span className="h-2 w-2 rounded-full bg-accent animate-pulse"/>Admissions Open</p>
 <h2 className="relative text-3xl !text-white sm:text-4xl lg:text-5xl">Your Future Begins With What You Learn Today.</h2><p className="relative mx-auto mt-4 max-w-xl text-lg text-blue-100">Start building practical computer skills and take the next step toward your future.</p>
 <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link to="/courses" className="btn-light">Explore Courses <ArrowRight size={18}/></Link><Link to="/contact" className="btn-primary">Join Now <ArrowRight size={18}/></Link></div></div></Reveal></div></section>;

export function CountUp({to,decimals=0}){const [v,setV]=useState(0);const r=useReducedMotion();const ref=useRef(null);
 useEffect(()=>{if(r){setV(to);return}const el=ref.current;if(!el||!('IntersectionObserver' in window)){setV(to);return}
  const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io.disconnect();const t0=performance.now();const step=t=>{const p=Math.min((t-t0)/1200,1);setV(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)});io.observe(el);return()=>io.disconnect()},[to,r]);
 return <span ref={ref}>{Number(v.toFixed(decimals)).toLocaleString('en-IN',{minimumFractionDigits:decimals,maximumFractionDigits:decimals})}</span>}
export function Timeline({items,dark}){const n=items.length;
 return <ol className={`relative grid gap-8 ${n===5?'md:grid-cols-5':'md:grid-cols-4'}`} style={{'--i':`${50/n}%`}}><span aria-hidden="true" className="absolute bottom-5 left-5 top-5 w-0.5 bg-gradient-to-b from-[#12A5E8] to-accent md:bottom-auto md:left-[var(--i)] md:right-[var(--i)] md:h-0.5 md:w-auto md:bg-gradient-to-r"/>
 {items.map((it,i)=>{const [ic,t,d]=it.length===3?it:[null,...it];return <Reveal key={t} delay={i*.1}><li className="group relative flex gap-4 md:flex-col md:items-center md:text-center"><span className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full text-sm font-bold ring-4 shadow-lg transition-transform duration-300 group-hover:scale-110 ${dark?'bg-gradient-to-br from-accent to-[#FF9A2E] text-white ring-[#0A3374]':'bg-gradient-to-br from-brand to-navy text-white ring-white'}`}>{ic?<Icon name={ic} size={20}/>:`0${i+1}`}</span><div><h3 className={`text-lg ${dark?'!text-white':''}`}>{t}</h3><p className={`mt-1 ${dark?'text-blue-100':'text-slate-600'}`}>{d}</p></div></li></Reveal>})}</ol>}
