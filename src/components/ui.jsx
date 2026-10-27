import {useEffect,useRef,useState} from 'react';
import {Link} from 'react-router-dom';
import {motion,useReducedMotion} from 'framer-motion';
import {Monitor,FileSpreadsheet,Calculator,Keyboard,Globe,Cpu,Code2,Users,MousePointerClick,Target,LifeBuoy,GraduationCap,Laptop,Rocket,Briefcase,Infinity as Inf,Zap,BookOpen,FileText,Compass,Wrench,School,BadgeCheck,Lightbulb,Award,Star,ArrowRight,MapPin,Phone,Mail,Clock,Heart,TrendingUp,ShieldCheck,Sparkles,HeartHandshake,MessageCircleQuestion,Image as ImageIcon,Circle,Quote,User,Calendar,Coffee,Terminal,MessageSquare,Layers} from 'lucide-react';
import {site} from '../data/site';import {images} from '../data/images';import {reviews} from '../data/testimonials';
const map={Monitor,FileSpreadsheet,Calculator,Keyboard,Globe,Cpu,Code2,Users,MousePointerClick,Target,LifeBuoy,GraduationCap,Laptop,Rocket,Briefcase,Infinity:Inf,Zap,BookOpen,FileText,Compass,Wrench,School,BadgeCheck,Lightbulb,Award,MapPin,Phone,Mail,Clock,Heart,TrendingUp,ShieldCheck,Sparkles,HeartHandshake,MessageCircleQuestion,User,Calendar,Coffee,Terminal,MessageSquare,Layers};
export const Icon=({name,...p})=>{const C=map[name]||Circle;return <C aria-hidden="true" {...p}/>};
const q=encodeURIComponent(site.mapQuery);
export const links={call:`tel:${site.phoneTel}`,directions:`https://www.google.com/maps/dir/?api=1&destination=${q}`,maps:`https://www.google.com/maps/search/?api=1&query=${q}`,embed:`https://www.google.com/maps?q=${q}&output=embed`};
export const wa=m=>`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(m)}`;
export function Seo({title,desc}){useEffect(()=>{document.title=title?`${title} | Navya Techno, Porumamilla`:'Navya Techno | Computer Education Training Center, Porumamilla';
 if(desc)document.querySelector('meta[name=description]')?.setAttribute('content',desc);window.scrollTo(0,0)},[title,desc]);return null}
export function Reveal({children,className=''}){const r=useReducedMotion();
 return <motion.div className={className} initial={r?false:{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.5,ease:'easeOut'}}>{children}</motion.div>}
export const Eyebrow=({children,center,light})=><p className={`mb-2 flex items-center gap-3 text-xs font-bold tracking-[.22em] ${light?'text-sky-300':'text-[#0B5ED7]'} ${center?'justify-center':''}`}><span className="h-0.5 w-6 bg-accent"/>{children}</p>;
export const SectionHeading=({eyebrow,title,sub,center=true,light})=><div className={`mb-10 max-w-2xl ${center?'mx-auto text-center':''}`}>{eyebrow&&<Eyebrow center={center} light={light}>{eyebrow}</Eyebrow>}<h2 className={`text-3xl sm:text-4xl ${light?'!text-white':''}`}>{title}</h2>{sub&&<p className={`mt-3 text-lg ${light?'text-blue-100':'text-slate-600'}`}>{sub}</p>}</div>;
export function Photo({src,label='[Photo]',className='',ratio='aspect-[4/3]',eager}){const [bad,setBad]=useState(!src);
 return <div className={`${ratio} ${className} overflow-hidden rounded-2xl bg-gradient-to-br from-mist to-blue-100 ring-1 ring-slate-200`}>
 {!bad?<img src={src} alt={label} loading={eager?'eager':'lazy'} decoding="async" onError={()=>setBad(true)} className="h-full w-full object-cover"/>:
 <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center text-sm font-medium text-brand"><ImageIcon size={28} aria-hidden="true"/>{label}</div>}</div>}
export const Stars=({size=16})=><span className="inline-flex gap-0.5 text-accent" role="img" aria-label={`${site.rating.score} out of 5 stars`}>{[0,1,2,3,4].map(i=><Star key={i} size={size} fill="currentColor" aria-hidden="true"/>)}</span>;
export const RatingLine=({dark})=><div className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${dark?'text-white':'text-navy'}`}><span className="text-2xl font-extrabold">{site.rating.score}</span><Stars/><span className="text-sm font-semibold">{site.rating.count} Google Reviews</span></div>;
export const FeatureCard=({icon,title,text})=><div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand/40">
 <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-mist text-brand"><Icon name={icon} size={24}/></span><h3 className="text-lg">{title}</h3><p className="mt-2 text-slate-600">{text}</p></div>;
export const CourseCard=({c})=><article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-[0_4px_20px_rgba(11,42,91,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(11,42,91,0.12)] hover:border-[#0B5ED7]/40">
 <div>
  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-inner">
   <img src={c.image} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" onError={e=>{e.currentTarget.src='/images/facilities/computer-lab.jpg'}}/>
  </div>
  <div className="relative -mt-6 ml-3.5 z-10 grid h-12 w-12 place-items-center rounded-full text-white shadow-md ring-4 ring-white" style={{backgroundColor:c.accent||'#0B5ED7'}}>
   <Icon name={c.icon} size={22} strokeWidth={2.2}/>
  </div>
  <div className="pt-2 px-1">
   <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0B5ED7] transition-colors">{c.title}</h3>
   <span className="block h-1 w-8 rounded-full mt-2 mb-3" style={{backgroundColor:c.accent||'#0B5ED7'}}/>
   <p className="text-xs sm:text-sm leading-relaxed text-slate-500 line-clamp-3">{c.desc}</p>
  </div>
 </div>
 <div className="mt-4 px-1">
  <div className="rounded-xl bg-[#F0F6FD] p-2.5 sm:p-3 grid grid-cols-2 gap-2 text-xs">
   <div className="flex items-center gap-2 min-w-0" title={`Level: ${c.level}`}>
    <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-100/90 text-[#0B5ED7] shrink-0"><User size={13} strokeWidth={2.4}/></span>
    <div className="min-w-0"><p className="text-xs uppercase font-bold text-slate-400 leading-none">Level</p><p className="text-xs font-bold text-slate-800 mt-1 whitespace-nowrap overflow-visible">{c.cardLevel || c.level}</p></div>
   </div>
   <div className="flex items-center gap-2 min-w-0" title={`Duration: ${c.duration}`}>
    <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-100/90 text-[#0B5ED7] shrink-0"><Calendar size={13} strokeWidth={2.4}/></span>
    <div className="min-w-0"><p className="text-xs uppercase font-bold text-slate-400 leading-none">Duration</p><p className="text-xs font-bold text-slate-800 mt-1 whitespace-nowrap overflow-visible">{c.cardDuration || c.duration.split(' (')[0]}</p></div>
   </div>
  </div>
  <div className="mt-3.5 pt-0.5">
   <Link to={`/courses/${c.id}`} className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B5ED7] hover:gap-2.5 transition-all">
    Learn More <ArrowRight size={15} strokeWidth={2.4}/>
   </Link>
  </div>
 </div>
</article>;
export const FacultyCard=({f})=><article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-200"><Photo src={f.photo} label="Faculty Photo" ratio="aspect-[4/5]" className="!rounded-none !ring-0"/><div className="p-5">{f.experience&&<span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-2.5 py-0.5 text-xs font-extrabold text-[#0B5ED7] mb-2">{f.experience}</span>}<h3 className="text-lg font-extrabold text-navy">{f.name}</h3><p className="text-sm font-semibold text-[#0B5ED7]">{f.role}</p><p className="mt-1 text-xs text-slate-500 leading-relaxed">{f.spec}</p>{f.bio&&<p className="mt-2 text-xs text-slate-600 line-clamp-2">{f.bio}</p>}</div></article>;
export function CertificateImage(){const [bad,setBad]=useState(false);
 return !bad?<img src={images.certificate} alt="Navya Techno course completion certificate" loading="lazy" onError={()=>setBad(true)} className="w-full rounded-2xl shadow-card ring-1 ring-slate-200"/>:
 <div role="img" aria-label="Sample certificate layout" className="rounded-2xl border-[6px] border-double border-accent bg-white p-8 text-center shadow-card"><img src={images.logo.stacked} alt="" className="mx-auto h-20 w-auto"/><p className="mt-4 text-sm font-semibold text-slate-500">Certificate of Completion</p><p className="my-3 text-3xl font-extrabold text-navy">[Student Name]</p><p>has successfully completed</p><p className="font-bold text-brand">[Course Name]</p><div className="mt-8 flex justify-between text-xs text-slate-500"><span>[Date]</span><Award className="text-accent" aria-hidden="true"/><span>[Authorised Signature]</span></div><p className="mt-4 text-xs text-slate-400">Sample layout: replace with the real certificate image</p></div>}
export function Reviews(){return <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
 <div className="rounded-2xl bg-navy p-8 text-white"><p className="text-6xl font-extrabold"><CountUp to={Number(site.rating.score)} decimals={1}/></p><div className="mt-2"><Stars size={22}/></div><p className="mt-3 font-semibold"><CountUp to={Number(site.rating.count)}/> Google Reviews</p><div className="mt-6 flex flex-col gap-2.5"><a href={links.maps} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs !py-2.5 !px-5">Read on Google <ArrowRight size={14}/></a><a href={links.maps} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs !py-2.5 !px-5">Write a Review on Google</a></div></div>
 {reviews.length?<div className="grid gap-6 sm:grid-cols-2">{reviews.slice(0,4).map((r,i)=><figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:shadow-lg"><Quote className="text-sky-300" aria-hidden="true"/><blockquote className="mt-2 text-slate-700">{r.text}</blockquote><figcaption className="mt-4 font-semibold text-navy">{r.name}{r.course&&<span className="font-normal text-slate-500"> · {r.course}</span>}</figcaption></figure>)}</div>:
 <div className="grid place-items-center rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center text-slate-500">[Real Google reviews will appear here once added in src/data/testimonials.js]</div>}</div>}
export const PageHeader=({title,sub})=><header className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy py-14 sm:py-20"><span aria-hidden="true" className="absolute -right-8 top-0 h-full w-24 -skew-x-[28deg] bg-accent/90"/><span aria-hidden="true" className="absolute right-24 top-0 h-full w-8 -skew-x-[28deg] bg-sky-400/50"/><div className="container-x relative"><h1 className="text-4xl !text-white sm:text-5xl">{title}</h1>{sub&&<p className="mt-4 max-w-2xl text-lg text-blue-100">{sub}</p>}</div></header>;
export const CTA=()=><section className="section"><div className="container-x"><div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#082256] via-navy to-[#0B4FA8] px-6 py-14 text-center sm:px-16 sm:py-16">
 <span aria-hidden="true" className="absolute -left-6 -top-6 h-28 w-28 rotate-45 bg-accent"/><span aria-hidden="true" className="absolute -bottom-10 -right-10 h-32 w-32 rotate-45 bg-sky-400/40"/><span aria-hidden="true" className="absolute bottom-0 right-16 h-16 w-3 -skew-x-[30deg] bg-accent"/>
 <h2 className="relative text-3xl !text-white sm:text-4xl">Your Future Begins With What You Learn Today.</h2><p className="relative mx-auto mt-3 max-w-xl text-lg text-blue-100">Start building practical computer skills and take the next step toward your future.</p>
 <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link to="/courses" className="btn-light">Explore Courses <ArrowRight size={18}/></Link><Link to="/contact" className="btn-primary">Join Now <ArrowRight size={18}/></Link></div></div></div></section>;

export function CountUp({to,decimals=0}){const [v,setV]=useState(0);const r=useReducedMotion();const ref=useRef(null);
 useEffect(()=>{if(r){setV(to);return}const el=ref.current;if(!el||!('IntersectionObserver' in window)){setV(to);return}
  const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io.disconnect();const t0=performance.now();const step=t=>{const p=Math.min((t-t0)/1200,1);setV(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)});io.observe(el);return()=>io.disconnect()},[to,r]);
 return <span ref={ref}>{v.toFixed(decimals)}</span>}
export function Timeline({items,dark}){const n=items.length;
 return <ol className={`relative grid gap-8 ${n===5?'md:grid-cols-5':'md:grid-cols-4'}`} style={{'--i':`${50/n}%`}}><span aria-hidden="true" className="absolute bottom-5 left-5 top-5 w-0.5 bg-gradient-to-b from-[#12A5E8] to-accent md:bottom-auto md:left-[var(--i)] md:right-[var(--i)] md:h-0.5 md:w-auto md:bg-gradient-to-r"/>
 {items.map((it,i)=>{const [ic,t,d]=it.length===3?it:[null,...it];return <li key={t} className="relative flex gap-4 md:flex-col md:items-center md:text-center"><span className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold ring-4 ${dark?'bg-accent text-white ring-[#0A3374]':'bg-navy text-white ring-white'}`}>{ic?<Icon name={ic} size={18}/>:`0${i+1}`}</span><div><h3 className={`text-lg ${dark?'!text-white':''}`}>{t}</h3><p className={`mt-1 ${dark?'text-blue-100':'text-slate-600'}`}>{d}</p></div></li>})}</ol>}
