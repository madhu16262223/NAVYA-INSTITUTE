import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { site } from '../data/site';
import { Seo, CourseCard, wa, links } from '../components/ui';
import {
  Clock,
  Award,
  BookOpen,
  Users,
  Phone,
  MessageCircle,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Calendar,
  HelpCircle,
  Target,
  Lightbulb,
  TrendingUp,
  Laptop,
  Sparkles,
  Code2,
  ShieldCheck,
  Sun,
  Moon,
  MapPin,
  Bookmark,
  Compass,
  CreditCard,
  Sliders,
  Cpu,
  ClipboardList,
  Monitor,
  FileSpreadsheet,
  Calculator,
  MessageSquare,
  Terminal,
  CheckCircle2,
  Briefcase,
} from 'lucide-react';

const COURSE_SKILLS = {
  ai: {
    tags: ['Machine Learning', 'Deep Learning', 'Generative AI', 'Prompt Engineering'],
    targetHeading: 'Build Future-Ready Skills',
    targetDesc: 'Gain hands-on experience and work on real-world AI projects in our computer lab.',
    heroImage: '/images/courses/ai-brain-hero.jpg',
    icons: [Cpu, TrendingUp, Sliders, Sparkles, Code2, ShieldCheck],
    careerRoles: ['AI Associate', 'Prompt Engineer', 'Data Annotation Specialist', 'ML Assistant', 'AI Workflow Specialist'],
    faqs: [
      {
        q: 'Is prior coding or mathematical experience required?',
        a: 'No advanced background is required to get started. We begin with intuitive AI concepts, prompt engineering, and step-by-step practical demonstrations.',
      },
      {
        q: 'Are classes taught in Telugu as well as English?',
        a: 'Yes! Our trainers explain all complex concepts in clear Telugu and English with step-by-step practical lab guidance.',
      },
      {
        q: 'Will I work on live Generative AI & ML tools?',
        a: 'Yes, you will gain hands-on practice with modern Generative AI models, prompt engineering workflows, and machine learning libraries.',
      },
      {
        q: 'Will I receive a course completion certificate?',
        a: 'Yes, every student who successfully finishes the curriculum and assignments receives an official Navya Techno Course Completion Certificate.',
      },
    ],
  },
  basics: {
    tags: ['MS Office Suite', 'Touch Typing', 'Excel & Formulas', 'Internet Literacy'],
    targetHeading: 'Build Office Automation Skills',
    targetDesc: 'Gain hands-on practical experience in MS Office, typing speed, and digital computer lab skills.',
    heroImage: '/images/courses/computer-basics-hd.jpg',
    icons: [Monitor, FileSpreadsheet, Laptop, Sparkles, Compass, ShieldCheck],
    careerRoles: ['Office Assistant', 'Computer Operator', 'Data Entry Executive', 'Front Desk Executive', 'Administrative Clerk'],
    faqs: [
      {
        q: 'I have never used a computer before. Can I join this course?',
        a: 'Absolutely! This course is specially designed from scratch for absolute beginners, school/college students, and job seekers.',
      },
      {
        q: 'Do I get a dedicated computer system for practice every day?',
        a: 'Yes! In our air-conditioned computer lab, every student is allocated their own dedicated PC during every lab session.',
      },
      {
        q: 'Will I learn both English and Telugu typing?',
        a: 'Yes, typing fundamentals, speed building, and accuracy drills for official workplace requirements are included.',
      },
      {
        q: 'Are the batch timings flexible for students & working people?',
        a: 'Yes, we run flexible morning (9 AM–12 PM), afternoon (1 PM–4 PM), and evening (4:30 PM–7:30 PM) batches.',
      },
    ],
  },
  'c-cpp': {
    tags: ['C Programming', 'C++ OOPs', 'Data Structures', 'Logic Building'],
    targetHeading: 'Build Strong Logic Foundations',
    targetDesc: 'Gain hands-on coding experience building procedural and OOP software applications in our lab.',
    heroImage: '/images/courses/programming-hd.jpg',
    icons: [Code2, Sliders, Cpu, Terminal, Laptop, ShieldCheck],
    careerRoles: ['Junior C/C++ Developer', 'Software Engineer Trainee', 'System Programmer', 'Academic Project Specialist'],
    faqs: [
      {
        q: 'Is this course suitable for B.Tech / BCA / Degree students?',
        a: 'Yes! It covers college syllabus requirements, lab practicals, pointers, memory allocation, and competitive programming logic.',
      },
      {
        q: 'Will I write and compile code directly in the lab?',
        a: 'Yes, every lecture is paired with 100% practical lab coding sessions under direct faculty supervision.',
      },
      {
        q: 'Do you cover Object-Oriented Programming (OOPs)?',
        a: 'Yes, C++ classes, objects, inheritance, polymorphism, templates, and exception handling are thoroughly covered.',
      },
      {
        q: 'Will I get interview and exam assistance?',
        a: 'Yes, our trainers conduct regular coding quizzes, viva preparation, and technical interview drills.',
      },
    ],
  },
  tally: {
    tags: ['Tally Prime', 'GST Invoicing', 'Voucher Entries', 'Balance Sheet'],
    targetHeading: 'Build Real-Time Accounting Skills',
    targetDesc: 'Gain hands-on practical experience in Tally Prime, GST billing, and live business accounting ledgers.',
    heroImage: '/images/courses/tally-accounting-hd.jpg',
    icons: [Calculator, TrendingUp, FileSpreadsheet, Bookmark, Sliders, Award],
    careerRoles: ['Accounts Executive', 'Tally Operator', 'Billing Specialist', 'GST Invoicing Assistant', 'Junior Accountant'],
    faqs: [
      {
        q: 'Can non-commerce students learn Tally Prime?',
        a: 'Yes! We start with fundamental accounting principles (Debit/Credit rules) before moving to Tally Prime software.',
      },
      {
        q: 'Is real GST billing and e-invoicing covered?',
        a: 'Yes, practical GST calculation (CGST, SGST, IGST), invoice printing, and tax reports are practiced with real business scenarios.',
      },
      {
        q: 'Will I learn bank reconciliation & inventory management?',
        a: 'Yes, stock groups, item units, godown management, and bank statement reconciliation are core modules.',
      },
      {
        q: 'Do local businesses in Porumamilla hire Tally operators from Navya Techno?',
        a: 'Yes, many local retail stores, wholesale businesses, and accounting firms regularly recruit our trained students.',
      },
    ],
  },
  fullstack: {
    tags: ['React.js Frontend', 'JavaScript ES6+', 'Node.js & APIs', 'MongoDB / SQL'],
    targetHeading: 'Build Full Stack Web Apps',
    targetDesc: 'Gain hands-on full stack development experience building modern responsive web apps and databases.',
    heroImage: '/images/courses/web-dev-hd.jpg',
    icons: [Laptop, Code2, Sliders, Sparkles, Terminal, ShieldCheck],
    careerRoles: ['Junior Frontend Developer', 'Full Stack Trainee', 'React.js Developer', 'Web Designer', 'Freelance Web Developer'],
    faqs: [
      {
        q: 'Will I build real full-stack web applications?',
        a: 'Yes! You will build full responsive web projects with React.js, Node.js APIs, and database integration.',
      },
      {
        q: 'Are Git & GitHub covered for code portfolio building?',
        a: 'Yes, version control, GitHub repository creation, and live web hosting deployment are included.',
      },
      {
        q: 'Do I need prior coding knowledge?',
        a: 'Basic computer understanding is helpful; we start HTML5 and CSS3 from scratch before progressing to JavaScript and React.',
      },
      {
        q: 'Will I receive guidance on resume & interview preparation?',
        a: 'Yes, we help you prepare your project portfolio, resume, and frontend/backend interview questions.',
      },
    ],
  },
  java: {
    tags: ['Core & Adv Java', 'OOPs Architecture', 'Collections Framework', 'JDBC & CRUD'],
    targetHeading: 'Build Enterprise Java Skills',
    targetDesc: 'Gain hands-on experience in Java OOPs, multi-threading, collections, and database connectivity.',
    heroImage: '/images/courses/java-hd.jpg',
    icons: [Code2, Sliders, Cpu, Sparkles, Laptop, ShieldCheck],
    careerRoles: ['Core Java Developer', 'Software Engineer Trainee', 'Backend Java Developer', 'Application Support Engineer'],
    faqs: [
      {
        q: 'Does this course cover Java Collections & Multi-threading?',
        a: 'Yes, ArrayList, HashMap, Iterators, thread lifecycle, and synchronization are taught with practical code examples.',
      },
      {
        q: 'Will I connect Java to a database with JDBC?',
        a: 'Yes, building database-driven CRUD applications with MySQL/SQL databases is part of the curriculum.',
      },
      {
        q: 'Is this course aligned with IT campus placement requirements?',
        a: 'Yes, OOPs concepts and Java coding problems commonly asked in IT recruitment rounds are actively practiced.',
      },
      {
        q: 'Can beginners learn Java here?',
        a: 'Yes, our trainers break down OOP concepts with practical analogies and daily lab problem-solving.',
      },
    ],
  },
  python: {
    tags: ['Python Scripting', 'Data Structures', 'Automation Scripts', 'NumPy & Pandas'],
    targetHeading: 'Build Python Automation Skills',
    targetDesc: 'Gain hands-on experience writing Python scripts, automation tools, and data analytics programs.',
    heroImage: '/images/courses/python-hd.jpg',
    icons: [Terminal, TrendingUp, Sliders, Sparkles, Code2, ShieldCheck],
    careerRoles: ['Python Developer', 'Automation Tester', 'Data Analyst Trainee', 'Backend Python Assistant'],
    faqs: [
      {
        q: 'Why should I learn Python?',
        a: 'Python has simple English-like syntax and is widely used in automation, web development, data science, and AI.',
      },
      {
        q: 'Do we work on automation scripts and file handling?',
        a: 'Yes, reading CSV/JSON files, automating repetitive tasks, and working with Python modules are emphasized.',
      },
      {
        q: 'Is introduction to data analysis libraries included?',
        a: 'Yes, introductory basics of NumPy and Pandas for data manipulation and visualization are covered.',
      },
      {
        q: 'Is the certificate provided upon completion?',
        a: 'Yes, Navya Techno issues a verified Course Completion Certificate after the practical project assessment.',
      },
    ],
  },
  hardware: {
    tags: ['PC Assembly', 'BIOS & OS Setup', 'LAN & Routers', 'Diagnostics & Repair'],
    targetHeading: 'Build Practical Hardware Skills',
    targetDesc: 'Gain hands-on practical experience assembling PC hardware, troubleshooting, and configuring LAN networks.',
    heroImage: '/images/courses/hardware-hd.jpg',
    icons: [Cpu, Sliders, Monitor, Laptop, TrendingUp, ShieldCheck],
    careerRoles: ['Hardware Support Technician', 'Desktop Support Engineer', 'Network Support Assistant', 'Computer Service Professional'],
    faqs: [
      {
        q: 'Will I assemble and disassemble real computers in the lab?',
        a: 'Yes! You will work with physical motherboards, SMPS, RAM, SSDs, CPUs, and cooling systems in our hardware lab.',
      },
      {
        q: 'Will I learn Windows/Linux OS installation and driver setup?',
        a: 'Yes, BIOS/UEFI boot settings, bootable USB creation, OS installation, and device driver troubleshooting are taught hands-on.',
      },
      {
        q: 'Are networking concepts like LAN and crimping covered?',
        a: 'Yes, CAT6 cable crimping with RJ45 connectors, LAN switches, Wi-Fi router setup, and IP configuration are practiced.',
      },
      {
        q: 'Can I start my own computer service or freelance work after this?',
        a: 'Yes! Many of our hardware students successfully start local computer repair, maintenance, and IT service shops.',
      },
    ],
  },
  'spoken-english': {
    tags: ['Fluency Drills', 'Vocabulary Building', 'Public Speaking', 'Interview Prep'],
    targetHeading: 'Build Confident Communication',
    targetDesc: 'Gain hands-on fluency practice in public speaking, daily English conversation, and interview drills.',
    heroImage: '/images/courses/spoken-english-hd.jpg',
    icons: [MessageSquare, Users, Sparkles, TrendingUp, Compass, Award],
    careerRoles: ['Customer Support Representative', 'Voice & Process Executive', 'Front Desk Officer', 'Communication Coordinator'],
    faqs: [
      {
        q: 'I feel nervous speaking English in public. Can this course help me?',
        a: 'Yes! We create a friendly, supportive environment with daily speaking practice, pronunciation exercises, and stage-fear removal.',
      },
      {
        q: 'Is grammar taught in a simple, practical way?',
        a: 'Yes, we teach practical spoken grammar and sentence formation without confusing jargon or heavy memorization.',
      },
      {
        q: 'Are interview preparation and resume tips included?',
        a: 'Yes, self-introduction, HR interview questions, group discussions, and telephone etiquette are thoroughly practiced.',
      },
      {
        q: 'Are evening or morning timings available?',
        a: 'Yes, we have morning and evening practice batches convenient for students, job seekers, and working professionals.',
      },
    ],
  },
};

const THEMES = [
  {
    bg: 'bg-[#EEF6FF]',
    border: 'border-blue-200/90',
    badgeBg: 'bg-[#0866F5]',
    iconColor: 'text-[#0B5ED7]',
  },
  {
    bg: 'bg-[#E8F8F5]',
    border: 'border-teal-200/90',
    badgeBg: 'bg-[#0D9488]',
    iconColor: 'text-[#0B5ED7]',
  },
  {
    bg: 'bg-[#F4EEFD]',
    border: 'border-purple-200/90',
    badgeBg: 'bg-[#8B5CF6]',
    iconColor: 'text-[#0B5ED7]',
  },
  {
    bg: 'bg-[#FFF4E6]',
    border: 'border-amber-200/90',
    badgeBg: 'bg-[#F97316]',
    iconColor: 'text-[#FF850A]',
  },
  {
    bg: 'bg-[#E8F6FE]',
    border: 'border-sky-200/90',
    badgeBg: 'bg-[#0284C7]',
    iconColor: 'text-[#0B5ED7]',
  },
  {
    bg: 'bg-[#FDEEF5]',
    border: 'border-pink-200/90',
    badgeBg: 'bg-[#EC4899]',
    iconColor: 'text-[#FF850A]',
  },
];

function renderTitle(title) {
  if (title.includes('&')) {
    const parts = title.split('&');
    return (
      <>
        {parts[0].trim()} &amp;{' '}
        <span className="text-[#0B5ED7]">{parts.slice(1).join('&').trim()}</span>
      </>
    );
  }
  const words = title.split(' ');
  if (words.length > 2) {
    const main = words.slice(0, -1).join(' ');
    const last = words[words.length - 1];
    return (
      <>
        {main} <span className="text-[#0B5ED7]">{last}</span>
      </>
    );
  }
  return <span className="text-[#0B5ED7]">{title}</span>;
}

export function CourseDetail() {
  const { id } = useParams();
  const [openFaq, setOpenFaq] = useState(0);
  const course = courses.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [id]);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  // Prefer courses from the same category, then fill with others
  const others = courses.filter((c) => c.id !== course.id);
  const related = [...others.filter((c) => c.cat === course.cat), ...others.filter((c) => c.cat !== course.cat)].slice(0, 3);
  const whatsappMessage = `Hi Navya Techno, I am interested in the ${course.title} course.\nPlease share the latest batch timings, fee details, and admission process.`;

  const config = COURSE_SKILLS[course.id] || {
    tags: [course.badge || 'Practical Training', 'Hands-on Lab', 'Live Projects', 'Certification'],
    targetHeading: 'Build Future-Ready Skills',
    targetDesc: `Gain hands-on practical experience in our modern computer lab in Porumamilla.`,
    heroImage: course.image,
    icons: [Cpu, TrendingUp, Sliders, Sparkles, Code2, ShieldCheck],
    careerRoles: ['Computer Operator', 'Office Assistant', 'Technical Trainee', 'Lab Assistant'],
    faqs: [
      {
        q: 'What are the prerequisites for this course?',
        a: 'No prior prerequisites are required. We start with fundamental concepts and guide you step-by-step.',
      },
      {
        q: 'Do I get daily practical lab practice?',
        a: 'Yes, every student is provided a dedicated computer in our lab for hands-on practice every day.',
      },
      {
        q: 'Will I get a Course Completion Certificate?',
        a: 'Yes, an official Navya Techno Certificate is awarded upon successful completion of the course.',
      },
      {
        q: 'How do I enrol or attend a demo class?',
        a: 'You can click Enquire on WhatsApp, call our institute directly, or visit our campus near APSRTC Busstand, Porumamilla.',
      },
    ],
  };

  const rawList = course.whatYouLearn || [];
  const moduleCards = rawList.slice(0, 6).map((topic, idx) => {
    const t = THEMES[idx % THEMES.length];
    const IconComponent = config.icons[idx % config.icons.length] || Sparkles;
    return {
      title: topic,
      IconComponent,
      ...t,
    };
  });

  return (
    <div className="min-h-screen bg-[#F4F9FE]">
      <Seo
        title={`${course.title} Course`}
        desc={`${course.title} in Porumamilla at Navya Techno Institute. Practical training, certificate, and hands-on lab sessions.`}
      />

      {/* Breadcrumb Navigation */}
      <div className="border-b border-blue-100/60 bg-[#F8FBFE] py-3 sm:py-3.5 text-xs font-medium text-slate-500">
        <div className="container-x flex items-center gap-2">
          <Link to="/" className="hover:text-[#0B5ED7] transition-colors">Home</Link>
          <ChevronRight size={13} className="text-slate-500" />
          <Link to="/courses" className="hover:text-[#0B5ED7] transition-colors">Courses</Link>
          <ChevronRight size={13} className="text-slate-500" />
          <span className="font-bold text-navy truncate">{course.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-[#F4F9FF] via-[#EBF4FE] to-[#F1F8FF] border-b border-blue-100/70 py-10 sm:py-14">
        {/* Decorative 3x3 Dots Grid at Top Right */}
        <div className="pointer-events-none absolute right-8 top-6 h-16 w-16 opacity-30 hidden sm:block" aria-hidden="true">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            ))}
          </div>
        </div>

        <div className="container-x grid gap-8 lg:grid-cols-[1.25fr_1fr] items-center">
          {/* Left Column Hero Content */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0866F5] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm mb-4">
              <Sparkles size={12} strokeWidth={2.4} />
              {course.cat ? course.cat.toUpperCase() : 'PROFESSIONAL COURSE'}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-navy leading-[1.18] tracking-tight">
              {renderTitle(course.title)}
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              {course.overview || course.desc}
            </p>

            {/* Three Compact Benefit Items */}
            <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-7">
              <div className="flex items-center gap-2.5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 text-[#0B5ED7]">
                  <BookOpen size={18} strokeWidth={2.4} />
                </span>
                <div>
                  <p className="text-xs font-bold text-navy">Learn</p>
                  <p className="text-xs text-slate-500 font-medium">Cutting-Edge Skills</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 text-[#0B5ED7]">
                  <Laptop size={18} strokeWidth={2.4} />
                </span>
                <div>
                  <p className="text-xs font-bold text-navy">Build</p>
                  <p className="text-xs text-slate-500 font-medium">Real Projects</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 text-[#0B5ED7]">
                  <TrendingUp size={18} strokeWidth={2.4} />
                </span>
                <div>
                  <p className="text-xs font-bold text-navy">Grow</p>
                  <p className="text-xs text-slate-500 font-medium">Your Career</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Hero Graphic */}
          <div className="relative">
            <div className="relative rounded-[28px] bg-[#051329] p-4 sm:p-5 shadow-2xl border border-blue-600/40 overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[340px]">
              {/* Radial backlighting glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,102,245,0.45)_0%,transparent_75%)]" />

              {/* Course Center Graphic */}
              <img
                src={config.heroImage}
                alt={course.title}
                className="relative z-0 h-full w-full max-h-[320px] object-cover rounded-2xl drop-shadow-[0_0_35px_rgba(13,110,253,0.7)]"
              />

              {/* Four Floating Skill Pill Badges */}
              {config.tags[0] && (
                <span className="absolute top-5 left-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-[#0D6EFD]/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white shadow-xl border border-white/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" /> {config.tags[0]}
                </span>
              )}

              {config.tags[1] && (
                <span className="absolute top-[35%] left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-[#0D6EFD]/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white shadow-xl border border-white/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" /> {config.tags[1]}
                </span>
              )}

              {config.tags[2] && (
                <span className="absolute top-[60%] left-6 z-10 inline-flex items-center gap-1.5 rounded-full bg-[#0D6EFD]/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white shadow-xl border border-white/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" /> {config.tags[2]}
                </span>
              )}

              {config.tags[3] && (
                <span className="absolute bottom-5 left-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-[#0D6EFD]/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white shadow-xl border border-white/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" /> {config.tags[3]}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content & Right Sticky Sidebar */}
      <div className="py-10 sm:py-14 bg-[#F4F9FE]">
        <div className="container-x grid gap-8 lg:grid-cols-[1.9fr_1fr] items-start">
          {/* Left Column (Scrolls smoothly with full comprehensive course content) */}
          <div className="space-y-8">
            {/* 1. Course Overview Card */}
            <div className="rounded-[24px] border border-blue-100/90 bg-white p-6 sm:p-8 shadow-[0_4px_20px_rgba(11,42,91,0.04)]">
              <div className="grid gap-6 md:grid-cols-[1.25fr_1fr] items-start">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-[#0B5ED7] border border-blue-100">
                      <BookOpen size={20} strokeWidth={2.4} />
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-navy">Course Overview</h2>
                  </div>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {course.overview || course.desc}
                  </p>
                </div>

                {/* Promotional Target Panel */}
                <div className="rounded-2xl bg-[#F0F6FD] border border-blue-100/90 p-4 sm:p-5 flex items-start gap-3.5 shadow-sm">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-100 text-[#0B5ED7]">
                    <Target size={20} strokeWidth={2.4} />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-navy">{config.targetHeading}</h4>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {config.targetDesc}
                    </p>
                    {/* Orange Curved Swoosh Underline */}
                    <svg className="w-16 h-2 mt-2 text-[#FF850A]" viewBox="0 0 70 8" fill="none">
                      <path d="M2 5C22 1.5 48 1.5 68 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Who Is This Course For? */}
              {course.whoFor && (
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-[#0B5ED7] border border-blue-100">
                      <Users size={18} strokeWidth={2.4} />
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-navy">Who Is This Course For?</h3>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed pl-12">
                    {course.whoFor}
                  </p>
                </div>
              )}

              {/* Career Opportunities / Job Roles You Can Target */}
              {config.careerRoles && config.careerRoles.length > 0 && (
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0B5ED7]">
                    <Briefcase size={15} />
                    <span>Career Opportunities You Can Target</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {config.careerRoles.map((role, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100/90 px-3 py-1 text-xs font-semibold text-navy"
                      >
                        <CheckCircle2 size={13} className="text-[#0B5ED7]" />
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. What You Will Learn (Six Module Cards in 3x2 Grid) */}
            {moduleCards.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-[#0B5ED7] border border-blue-100">
                    <Lightbulb size={20} strokeWidth={2.4} />
                  </span>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-navy">What You Will Learn</h2>
                    <p className="mt-0.5 text-xs sm:text-sm text-slate-500">
                      Practical modules designed for hands-on mastery in our computer lab.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {moduleCards.map((m, idx) => {
                    const ModIcon = m.IconComponent;
                    return (
                      <div
                        key={idx}
                        className={`rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-sm ${m.bg} ${m.border}`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className={`grid h-7 w-7 place-items-center rounded-full text-xs font-black text-white shadow-sm ${m.badgeBg}`}>
                            {idx + 1}
                          </span>
                          <span className={m.iconColor}>
                            <ModIcon size={22} strokeWidth={2.2} />
                          </span>
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold text-navy leading-snug">
                          {m.title}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3. Key Course Highlights & Methodology */}
            <div className="rounded-[24px] border border-blue-100/90 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(11,42,91,0.04)]">
              <h3 className="text-base sm:text-lg font-bold text-navy mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-[#0B5ED7]" />
                Why Study This Course at Navya Techno Institute?
              </h3>
              <div className="grid gap-3.5 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl bg-[#F8FBFE] border border-blue-100/70 p-3.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-100 text-[#0B5ED7] shrink-0 font-bold text-xs">
                    💻
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-navy">100% Practical Lab Training</h4>
                    <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                      Every student gets dedicated daily computer time with high-speed internet and updated software.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-[#F8FBFE] border border-blue-100/70 p-3.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-100 text-emerald-600 shrink-0 font-bold text-xs">
                    👨‍🏫
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-navy">Experienced Mentors</h4>
                    <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                      Direct 1-on-1 personal attention with clear step-by-step explanations in Telugu and English.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-[#F8FBFE] border border-blue-100/70 p-3.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-purple-100 text-[#0B5ED7] shrink-0 font-bold text-xs">
                    📜
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-navy">Recognized Course Certificate</h4>
                    <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                      Valuable credential demonstrating hands-on proficiency for private, government, and business jobs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-[#F8FBFE] border border-blue-100/70 p-3.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-100 text-[#FF850A] shrink-0 font-bold text-xs">
                    🎯
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-navy">Flexible Batch Timings</h4>
                    <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                      Convenient morning, afternoon, and evening batches tailored for college students and working people.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Batch Timings & Course Certificate (Horizontally Aligned Panels) */}
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Batch Timings */}
              <div className="rounded-2xl bg-[#EEF5FD] border border-blue-100/90 p-5 sm:p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center gap-2.5 text-[#0B5ED7]">
                    <Calendar size={18} strokeWidth={2.4} />
                    <h3 className="text-base font-bold text-navy">Batch Timings</h3>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Flexible batches available for students, job seekers, and working individuals:
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Sun size={14} className="text-[#FF850A] shrink-0" />
                      <span className="font-semibold text-navy">Morning:</span>
                      <span>9:00 AM – 12:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Sun size={14} className="text-[#0B5ED7] shrink-0" />
                      <span className="font-semibold text-navy">Afternoon:</span>
                      <span>1:00 PM – 4:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Moon size={14} className="text-[#0B5ED7] shrink-0" />
                      <span className="font-semibold text-navy">Evening:</span>
                      <span>4:30 PM – 7:30 PM</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-blue-200/60 flex items-center gap-2 text-xs text-slate-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Current batch availability: <strong className="text-navy font-bold">{course.batchTimings || 'Special Batches Available'}</strong></span>
                </div>
              </div>

              {/* Course Certificate */}
              <div className="rounded-2xl bg-[#EDF9F4] border border-emerald-100/90 p-5 sm:p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center gap-2.5 text-emerald-600">
                    <Award size={18} strokeWidth={2.4} />
                    <h3 className="text-base font-bold text-navy">Course Certificate</h3>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Students successfully completing the course and practical assessments receive a formal Course Completion Certificate from Navya Techno.
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-emerald-200/60 flex items-center justify-between gap-3">
                  <Link
                    to="/certificates"
                    className="text-xs font-bold text-[#0B5ED7] hover:underline inline-flex items-center gap-1"
                  >
                    View sample certificate <ArrowRight size={13} strokeWidth={2.4} />
                  </Link>

                  {/* Realistic Certificate Mockup with Green Case & Gold Seal */}
                  <div className="relative h-12 w-20 flex items-center justify-end shrink-0">
                    <div className="absolute left-0 h-11 w-9 rounded-sm bg-[#1B4D3E] shadow-sm transform -rotate-3" />
                    <div className="relative z-10 h-10 w-16 rounded-sm border border-emerald-400 bg-white shadow-md p-1 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="h-1 w-5 bg-blue-300 rounded-full" />
                        <span className="h-1 w-3 bg-amber-400 rounded-full" />
                      </div>
                      <div className="h-0.5 w-full bg-slate-200" />
                      <div className="flex items-center justify-between">
                        <span className="h-0.5 w-6 bg-slate-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400 flex items-center justify-center text-[6px] text-[#FF850A] font-bold">★</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Frequently Asked Questions (FAQ Accordion) */}
            {config.faqs && config.faqs.length > 0 && (
              <div className="rounded-[24px] border border-blue-100/90 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(11,42,91,0.04)]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-[#0B5ED7] border border-blue-100">
                    <HelpCircle size={20} strokeWidth={2.4} />
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-navy">Frequently Asked Questions</h3>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Got questions? Here are quick answers about this course at Navya Techno.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {config.faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-200/80 bg-white overflow-hidden transition-all duration-200"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                          className="w-full flex items-center justify-between gap-3 p-4 text-left font-bold text-xs sm:text-sm text-navy hover:text-[#0B5ED7] transition-colors"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            size={16}
                            className={`shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0B5ED7]' : ''}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FBFDFF]">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column Sticky Sidebar (Permanently fixed in view while the left column scrolls) */}
          <div className="lg:sticky lg:top-[76px] self-start space-y-4 max-h-[calc(100vh-5.5rem)] overflow-y-auto no-scrollbar">
            {/* Course Details Card */}
            <div className="rounded-[24px] border border-blue-100/90 bg-white shadow-[0_4px_25px_rgba(11,42,91,0.06)] overflow-hidden">
              {/* Top Banner Image (Dedicated HD Course Image) */}
              <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-2.5 pb-2.5 border-b border-slate-100">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-blue-50 text-[#0B5ED7]">
                    <ClipboardList size={16} strokeWidth={2.4} />
                  </span>
                  <h3 className="text-base font-bold text-navy">Course Details</h3>
                </div>

                {/* Details Rows */}
                <dl className="mt-1.5 divide-y divide-slate-100 text-xs sm:text-sm">
                  <div className="py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 font-medium">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-blue-50 text-[#0B5ED7]">
                        <Bookmark size={13} />
                      </span>
                      <span>Category</span>
                    </div>
                    <dd className="font-bold text-navy">{course.cat}</dd>
                  </div>

                  <div className="py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 font-medium">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-blue-50 text-[#0B5ED7]">
                        <Clock size={13} />
                      </span>
                      <span>Duration</span>
                    </div>
                    <dd className="font-bold text-navy">{course.duration}</dd>
                  </div>

                  <div className="py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 font-medium">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-blue-50 text-[#0B5ED7]">
                        <Compass size={13} />
                      </span>
                      <span>Level</span>
                    </div>
                    <dd className="font-bold text-navy">{course.level}</dd>
                  </div>

                  <div className="py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 font-medium">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-blue-50 text-[#0B5ED7]">
                        <Users size={13} />
                      </span>
                      <span>Eligibility</span>
                    </div>
                    <dd className="font-bold text-navy text-right truncate max-w-[155px]">
                      {course.eligibility}
                    </dd>
                  </div>

                  <div className="py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 font-medium">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-blue-50 text-[#0B5ED7]">
                        <CreditCard size={13} />
                      </span>
                      <span>Course Fee</span>
                    </div>
                    <dd className="font-bold text-[#0B5ED7]">{course.fee}</dd>
                  </div>

                  <div className="py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 font-medium">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-blue-50 text-[#0B5ED7]">
                        <Award size={13} />
                      </span>
                      <span>Certificate</span>
                    </div>
                    <dd className="font-bold text-emerald-600">Yes (Upon Completion)</dd>
                  </div>
                </dl>

                {/* Enquiry Action Buttons */}
                <div className="mt-4 space-y-2">
                  <a
                    href={wa(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-xs sm:text-sm !py-2.5"
                  >
                    <MessageCircle size={16} fill="currentColor" stroke="none" />
                    Enquire on WhatsApp →
                  </a>

                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-blue-50/60 border border-[#0866F5] py-2.5 px-4 text-xs sm:text-sm font-bold text-[#0B5ED7] transition-all hover:scale-[1.01]"
                  >
                    <MapPin size={15} />
                    Visit Institute / Enrol →
                  </Link>
                </div>

                {/* Phone & Rating Rows */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 text-center">
                  <a
                    href={links.call}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0B5ED7] transition-colors"
                  >
                    <Phone size={12} className="text-[#0B5ED7]" />
                    Call Institute: {site.phone}
                  </a>
                  <p className="mt-1 text-xs text-slate-500 font-medium">
                    ⭐ Google Rating: <strong className="text-slate-600">{site.rating.score} / 5</strong> ({site.rating.count} reviews)
                  </p>
                </div>
              </div>
            </div>

            {/* Help Panel */}
            <div className="rounded-2xl bg-[#EAF3FD] border border-blue-100/90 p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-sm relative overflow-hidden">
              <div className="flex items-start gap-2.5 min-w-0 z-10">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-100 text-[#0B5ED7] shrink-0 mt-0.5">
                  <HelpCircle size={16} />
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-navy">Have questions?</h4>
                  <p className="mt-0.5 text-xs text-slate-500 leading-snug">
                    Visit near APSRTC Busstand or talk to our trainers.
                  </p>
                </div>
              </div>

              <a
                href={wa(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask questions on WhatsApp"
                className="relative grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white shadow-md hover:scale-110 transition-all shrink-0 z-10"
              >
                <MessageCircle size={20} fill="currentColor" stroke="none" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses Section */}
      {related.length > 0 && (
        <section className="py-12 bg-white border-t border-blue-100/60">
          <div className="container-x">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs font-bold tracking-wider text-[#0B5ED7]">Explore More</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mt-1">Related Courses</h2>
              </div>
              <Link
                to="/courses"
                className="text-sm font-bold text-[#0B5ED7] hover:underline flex items-center gap-1"
              >
                View All <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <CourseCard key={c.id} c={c} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
