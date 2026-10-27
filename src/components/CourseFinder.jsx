import { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { useDemoModal } from '../context/DemoModalContext';
import {
  User,
  GraduationCap,
  Building2,
  Briefcase,
  UserCheck,
  Check,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Target,
  Sparkles,
  Compass,
  Lightbulb,
  BookOpen,
  TrendingUp,
  CheckCircle2,
  Award,
  Calendar,
  Layers,
  Code2,
  Calculator,
  MessageSquare,
  Bot
} from 'lucide-react';

// Step 1: User Backgrounds (Exactly matching reference design)
const backgrounds = [
  {
    id: 'beginner',
    title: 'Beginner / Fresh Learner',
    desc: 'No prior computer experience needed',
    icon: GraduationCap,
    accent: '#0B5ED7',
    iconBg: '#EAF4FF',
    iconColor: '#0B5ED7',
  },
  {
    id: 'student',
    title: 'School / College Student',
    desc: 'Building essential digital foundations',
    icon: Building2,
    accent: '#08B9B0',
    iconBg: '#E6FAF8',
    iconColor: '#08B9B0',
  },
  {
    id: 'jobseeker',
    title: 'Job Seeker / Graduate',
    desc: 'Seeking job-oriented office/technical skills',
    icon: Briefcase,
    accent: '#8256E8',
    iconBg: '#F3EFFE',
    iconColor: '#8256E8',
  },
  {
    id: 'professional',
    title: 'Business Owner / Working Professional',
    desc: 'Looking to automate accounting or upskill',
    icon: UserCheck,
    accent: '#FF850A',
    iconBg: '#FFF3E8',
    iconColor: '#FF850A',
  },
];

// Step 2: Learning Goals tailored to selected background
const goalsByBackground = {
  beginner: [
    {
      id: 'basics',
      title: 'Computer Basics, MS Office & Touch Typing',
      desc: 'Master Windows, Word, Excel, PowerPoint & everyday internet skills.',
      courseId: 'basics',
    },
    {
      id: 'english',
      title: 'Spoken English & Communication Confidence',
      desc: 'Build daily fluency, vocabulary, grammar & clear conversational speech.',
      courseId: 'spoken-english',
    },
    {
      id: 'tally',
      title: 'Tally Prime & Computerized Accounting',
      desc: 'Learn basic accounting principles, voucher entries & invoicing.',
      courseId: 'tally',
    },
    {
      id: 'coding-start',
      title: 'Introductory Programming Logic (C / Python)',
      desc: 'Learn simple coding foundations from scratch with hands-on practice.',
      courseId: 'python',
    },
  ],
  student: [
    {
      id: 'programming',
      title: 'Core Programming (C, C++, Java or Python)',
      desc: 'Strengthen academic programming, OOP concepts, algorithms & lab tests.',
      courseId: 'c-cpp',
    },
    {
      id: 'fullstack',
      title: 'Full Stack Web Development',
      desc: 'Build modern websites with HTML, CSS, JavaScript, React & backend.',
      courseId: 'fullstack',
    },
    {
      id: 'ai-ml',
      title: 'Artificial Intelligence & Machine Learning',
      desc: 'Explore neural networks, AI algorithms, modern LLMs & prompt tools.',
      courseId: 'ai',
    },
    {
      id: 'basics',
      title: 'Essential Computer Literacy & Project Presentation',
      desc: 'MS Office formatting, PowerPoint presentations & Excel reporting.',
      courseId: 'basics',
    },
  ],
  jobseeker: [
    {
      id: 'fullstack-job',
      title: 'Full Stack Web & Software Development',
      desc: 'Job-ready frontend & backend skills to target IT & web roles.',
      courseId: 'fullstack',
    },
    {
      id: 'java-python',
      title: 'Java or Python Software Engineering',
      desc: 'Object-oriented programming, collections, APIs & interview preparation.',
      courseId: 'java',
    },
    {
      id: 'tally-gst',
      title: 'Tally Prime with GST & Business Accounting',
      desc: 'Prepare for billing executive, accounts assistant & GST filing jobs.',
      courseId: 'tally',
    },
    {
      id: 'spoken-english',
      title: 'Interview Communication & Fluency Training',
      desc: 'Overcome hesitation, master self-introduction, GDs & HR interviews.',
      courseId: 'spoken-english',
    },
  ],
  professional: [
    {
      id: 'business-tally',
      title: 'Tally Prime, GST Invoicing & Inventory Control',
      desc: 'Automate business bookkeeping, stock registers, P&L & tax filings.',
      courseId: 'tally',
    },
    {
      id: 'excel-analytics',
      title: 'Advanced Office Productivity & Digital Workflow',
      desc: 'Excel calculations, inventory tracking, business email & cloud safety.',
      courseId: 'basics',
    },
    {
      id: 'ai-productivity',
      title: 'AI Tools & Workflow Automation for Business',
      desc: 'Leverage generative AI for drafting, reporting, planning & productivity.',
      courseId: 'ai',
    },
    {
      id: 'spoken-english-biz',
      title: 'Professional Spoken English & Client Communication',
      desc: 'Speak confidently with customers, vendors & professional peers.',
      courseId: 'spoken-english',
    },
  ],
};

// Step 3: Skill Levels
const skillLevels = [
  {
    id: 'zero',
    title: 'Complete Beginner',
    desc: 'Starting from zero. Need step-by-step guidance and patient trainer support.',
    tag: 'From Scratch',
  },
  {
    id: 'basic',
    title: 'Basic Knowledge',
    desc: 'Familiar with general computer use. Want structured practical mastery.',
    tag: 'Intermediate',
  },
  {
    id: 'advanced',
    title: 'Some Practical Experience',
    desc: 'Have used software or written code before. Looking for job/advanced skills.',
    tag: 'Advanced Prep',
  },
];

export function CourseFinder() {
  const { openDemoModal } = useDemoModal();
  const [currentStep, setCurrentStep] = useState(0); // 0 = Background, 1 = Goal, 2 = Level, 3 = Results
  const [selectedBg, setSelectedBg] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  // Calculate progress
  const progressPercent = currentStep === 0 ? 33 : currentStep === 1 ? 66 : currentStep === 2 ? 100 : 100;

  const handleNext = () => {
    if (currentStep === 0 && selectedBg) setCurrentStep(1);
    else if (currentStep === 1 && selectedGoal) setCurrentStep(2);
    else if (currentStep === 2 && selectedLevel) setCurrentStep(3);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedBg(null);
    setSelectedGoal(null);
    setSelectedLevel(null);
  };

  // Determine course match
  const getMatch = () => {
    if (!selectedBg) return courses[0];
    const goals = goalsByBackground[selectedBg] || goalsByBackground.beginner;
    const chosenGoalObj = goals.find((g) => g.id === selectedGoal);
    const targetCourseId = chosenGoalObj ? chosenGoalObj.courseId : 'basics';
    return courses.find((c) => c.id === targetCourseId) || courses[0];
  };

  const matchedCourse = getMatch();

  // Secondary suggestions (next 2 courses)
  const secondaryCourses = courses.filter((c) => c.id !== matchedCourse.id).slice(0, 2);

  return (
    <section aria-label="Course Finder" className="relative overflow-hidden bg-gradient-to-b from-[#F3F9FE] via-[#EBF5FE] to-[#F7FAFD] py-16 sm:py-20 lg:py-24">
      {/* Decorative background flourishes - clean and subtle */}
      {/* Bottom-right orange accent flourish */}
      <div className="pointer-events-none absolute -bottom-14 -right-14 z-0 h-48 w-48 rounded-full border-[8px] border-[#FF850A]/70" aria-hidden="true" />

      {/* Dotted decorative grid patterns */}
      <div className="pointer-events-none absolute right-8 top-8 hidden sm:grid grid-cols-6 gap-2.5 opacity-30 z-0" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#168DFF]" />
        ))}
      </div>
      <div className="pointer-events-none absolute right-10 bottom-12 hidden sm:grid grid-cols-6 gap-2.5 opacity-25 z-0" aria-hidden="true">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#168DFF]" />
        ))}
      </div>

      <div className="container-x relative z-10">
        {/* The Unified Grand Master Card Combining Both Student Visual & Course Finder */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_16px_50px_rgba(9,43,85,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] xl:grid-cols-[380px_1fr]">
            
            {/* LEFT PANEL: Student Illustration & Motivation Panel */}
            <div className="relative hidden lg:flex flex-col justify-end overflow-hidden bg-gradient-to-b from-[#F2F8FD] via-[#E8F3FD] to-[#DDEEFC] border-r border-slate-100 select-none">
              <div className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full bg-blue-200/40 blur-2xl" aria-hidden="true" />
              
              <img
                src="/images/course-finder-student-hd.png"
                alt="Student thoughtfully planning course choices at Navya Techno"
                className="w-full h-full object-cover object-bottom max-h-[660px]"
                loading="lazy"
              />
            </div>

            {/* RIGHT PANEL: Questionnaire & Course Recommendations */}
            <div className="p-6 sm:p-9 lg:p-10 flex flex-col justify-between">
              {/* Card Header Block */}
              <div>
                <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.22em] text-[#FF850A]">
                  <span className="h-[2.5px] w-5 rounded-full bg-[#FF850A]" aria-hidden="true" />
                  COURSE FINDER
                </p>
                <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy leading-tight tracking-tight">
                  Not sure which course is<br />
                  <span className="text-[#0B5ED7]">right for you?</span>
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl">
                  Answer a few simple questions and we'll suggest the best course based on your interests, goals and background.
                </p>
              </div>

              {/* Progress Indicator (Visible during questionnaire) */}
              {currentStep < 3 && (
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-navy">Question {currentStep + 1} of 3</span>
                    <span className="text-slate-500">{progressPercent}% Complete</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-[#EAEFF6] overflow-hidden" role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100}>
                    <div
                      className="h-full rounded-full bg-[#FF850A] transition-all duration-500 ease-out"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              )}

              {/* STEP 1: USER BACKGROUND (Matches exact reference design 3 + 1 grid) */}
              {currentStep === 0 && (
                <div className="mt-6">
                  {/* Question Title Header with Person Icon */}
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-[#EAF4FF] text-[#0B5ED7] shrink-0">
                      <User size={22} strokeWidth={2.4} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-navy">Who are you?</h3>
                      <p className="text-xs text-slate-500">Select your current background to get tailored recommendations.</p>
                    </div>
                  </div>

                  {/* Desktop: 3 cards in Row 1, 1 card + CTA in Row 2 */}
                  <div className="mt-6 space-y-4">
                    {/* Row 1: First 3 Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                      {backgrounds.slice(0, 3).map((item) => {
                        const isSelected = selectedBg === item.id;
                        const IconComponent = item.icon;
                        return (
                          <div role="radio" tabIndex={0} key={item.id} onClick={() => setSelectedBg(item.id)} onKeyDown={(e) => (e.key === " " || e.key === "Enter") && setSelectedBg(item.id)} aria-checked={isSelected} className={`group relative flex flex-col justify-between text-left rounded-2xl p-4 sm:p-5 cursor-pointer transition-all duration-200 border ${
                              isSelected
                                ? 'border-2 border-[#FF850A] bg-white shadow-md shadow-orange-500/10'
                                : 'border-slate-200/90 bg-gradient-to-br from-white to-[#F8FAFD] hover:border-[#0B5ED7]/40 hover:bg-white hover:shadow-sm'
                            }`}
                          >
                            {/* Selected Checkmark Badge */}
                            {isSelected && (
                              <span className="absolute top-3 right-3 grid h-5 w-5 place-items-center rounded-full bg-[#FF850A] text-white shadow-sm">
                                <Check size={12} strokeWidth={3} />
                              </span>
                            )}

                            <div className="flex items-center gap-3">
                              <span
                                className="grid h-11 w-11 shrink-0 place-items-center rounded-full"
                                style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                              >
                                <IconComponent size={20} strokeWidth={2.2} />
                              </span>
                              <div className="min-w-0 pr-4">
                                <h4 className="text-sm font-bold text-navy leading-snug">{item.title}</h4>
                                <p className="mt-1 text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Row 2: 4th Card on Left + Main CTA on Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 sm:gap-4 items-center">
                      <div className="lg:col-span-2">
                        {(() => {
                          const item = backgrounds[3];
                          const isSelected = selectedBg === item.id;
                          const IconComponent = item.icon;
                          return (
                            <div role="radio" tabIndex={0} onClick={() => setSelectedBg(item.id)} onKeyDown={(e) => (e.key === " " || e.key === "Enter") && setSelectedBg(item.id)} aria-checked={isSelected} className={`group relative w-full flex flex-col justify-between text-left rounded-2xl p-4 sm:p-5 cursor-pointer transition-all duration-200 border ${
                                isSelected
                                ? 'border-2 border-[#FF850A] bg-white shadow-md shadow-orange-500/10'
                                : 'border-slate-200/90 bg-gradient-to-br from-white to-[#F8FAFD] hover:border-[#0B5ED7]/40 hover:bg-white hover:shadow-sm'
                              }`}
                            >
                              {isSelected && (
                                <span className="absolute top-3 right-3 grid h-5 w-5 place-items-center rounded-full bg-[#FF850A] text-white shadow-sm">
                                  <Check size={12} strokeWidth={3} />
                                </span>
                              )}
                              <div className="flex items-center gap-3">
                                <span
                                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full"
                                  style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                                >
                                  <IconComponent size={20} strokeWidth={2.2} />
                                </span>
                                <div className="min-w-0 pr-4">
                                  <h4 className="text-sm font-bold text-navy leading-snug">{item.title}</h4>
                                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })()}
                      </div>

                      {/* Primary CTA Button */}
                      <div className="flex justify-end lg:col-span-1">
                        <button
                          type="button"
                          onClick={handleNext}
                          disabled={!selectedBg}
                          className="w-full lg:w-auto inline-flex items-center justify-center gap-2 rounded-full btn-brand"
                        >
                          Get Personalized Recommendation <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: LEARNING GOAL */}
              {currentStep === 1 && (
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-[#EAF4FF] text-[#0B5ED7] shrink-0">
                      <Target size={22} strokeWidth={2.4} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-navy">What would you like to achieve?</h3>
                      <p className="text-xs text-slate-500">Choose the learning focus that best matches your target goal.</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {(goalsByBackground[selectedBg] || goalsByBackground.beginner).map((g) => {
                      const isSelected = selectedGoal === g.id;
                      return (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => setSelectedGoal(g.id)}
                          className={`relative flex flex-col text-left rounded-2xl p-4 sm:p-5 transition-all duration-200 border ${
                            isSelected
                              ? 'border-2 border-[#FF850A] bg-white shadow-md shadow-orange-500/10'
                              : 'border-slate-200/90 bg-gradient-to-br from-white to-[#F8FAFD] hover:border-[#0B5ED7]/40 hover:bg-white hover:shadow-sm'
                          }`}
                        >
                          {isSelected && (
                            <span className="absolute top-3 right-3 grid h-5 w-5 place-items-center rounded-full bg-[#FF850A] text-white shadow-sm">
                              <Check size={12} strokeWidth={3} />
                            </span>
                          )}
                          <h4 className="text-sm font-bold text-navy pr-6">{g.title}</h4>
                          <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{g.desc}</p>
                        </button>
                      );
                    })}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-xs font-bold text-navy hover:bg-slate-50 transition"
                    >
                      <ArrowLeft size={14} /> Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!selectedGoal}
                      className="inline-flex items-center gap-2 rounded-full bg-[#0B5ED7] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/25 transition hover:bg-[#085bc3] hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continue <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: PREFERRED SKILL LEVEL */}
              {currentStep === 2 && (
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-[#EAF4FF] text-[#0B5ED7] shrink-0">
                      <TrendingUp size={22} strokeWidth={2.4} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-navy">What is your current skill level?</h3>
                      <p className="text-xs text-slate-500">This helps us recommend the right batch pace and practical support.</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                    {skillLevels.map((lvl) => {
                      const isSelected = selectedLevel === lvl.id;
                      return (
                        <button
                          key={lvl.id}
                          type="button"
                          onClick={() => setSelectedLevel(lvl.id)}
                          className={`relative flex flex-col justify-between text-left rounded-2xl p-4 sm:p-5 transition-all duration-200 border ${
                            isSelected
                              ? 'border-2 border-[#FF850A] bg-white shadow-md shadow-orange-500/10'
                              : 'border-slate-200/90 bg-gradient-to-br from-white to-[#F8FAFD] hover:border-[#0B5ED7]/40 hover:bg-white hover:shadow-sm'
                          }`}
                        >
                          {isSelected && (
                            <span className="absolute top-3 right-3 grid h-5 w-5 place-items-center rounded-full bg-[#FF850A] text-white shadow-sm">
                              <Check size={12} strokeWidth={3} />
                            </span>
                          )}
                          <div>
                            <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-bold text-[#0B5ED7] uppercase">
                              {lvl.tag}
                            </span>
                            <h4 className="mt-2 text-sm font-bold text-navy">{lvl.title}</h4>
                            <p className="mt-1 text-xs text-slate-500 leading-relaxed">{lvl.desc}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-xs font-bold text-navy hover:bg-slate-50 transition"
                    >
                      <ArrowLeft size={14} /> Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!selectedLevel}
                      className="inline-flex items-center gap-2 rounded-full bg-[#FF850A] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-orange-500/25 transition hover:bg-[#e07204] hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      View Personalized Recommendation <Sparkles size={15} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: RECOMMENDATION RESULTS */}
              {currentStep === 3 && (
                <div className="mt-6">
                  {/* Results Header */}
                  <div className="rounded-2xl bg-gradient-to-br from-[#EAF4FF] to-white p-5 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#0B5ED7] text-white shadow-md">
                        <Award size={24} />
                      </span>
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#0B5ED7]">
                          Top Recommended Match
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-navy">{matchedCourse.title}</h3>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 hover:text-[#0B5ED7] hover:border-[#0B5ED7] transition"
                    >
                      <RotateCcw size={13} /> Retake Quiz
                    </button>
                  </div>

                  {/* Primary Matched Card Showcase */}
                  <div className="mt-6 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wider"
                          style={{ backgroundColor: matchedCourse.accent + '15', color: matchedCourse.accent }}
                        >
                          {matchedCourse.badge}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          • {matchedCourse.level}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {matchedCourse.overview || matchedCourse.desc}
                      </p>
                      
                      <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5 font-semibold text-navy">
                          <Calendar size={13} className="text-[#0B5ED7]" /> {matchedCourse.duration}
                        </span>
                        <span className="flex items-center gap-1.5 font-semibold text-navy">
                          <CheckCircle2 size={13} className="text-emerald-600" /> Hands-on Practical Lab
                        </span>
                        <span className="flex items-center gap-1.5 font-semibold text-navy">
                          <Award size={13} className="text-[#FF850A]" /> Course Certificate
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full sm:w-auto shrink-0">
                      <a
                        href={`https://wa.me/919849638258?text=${encodeURIComponent(
                          `Hi Navya Techno! I completed the online Course Finder quiz.\nMy Profile: ${backgrounds.find(b => b.id === selectedBackground)?.title || 'Learner'}\nRecommended Course: ${matchedCourse.title}\n\nPlease share upcoming batch timings, fees, and admission details!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition"
                      >
                        <MessageSquare size={16} /> Send Match to WhatsApp
                      </a>
                      <Link
                        to={`/courses/${matchedCourse.id}`}
                        className="text-center rounded-full bg-[#0B5ED7] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#085bc3] transition"
                      >
                        View Syllabus Details →
                      </Link>
                      <Link
                        to="/contact"
                        className="text-center rounded-full border border-slate-200 bg-white px-6 py-2 text-xs font-bold text-navy hover:bg-slate-50 transition"
                      >
                        Enquire at Institute
                      </Link>
                    </div>
                  </div>

                  {/* Secondary Recommendations */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Also Relevant to Your Goals:
                    </p>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {secondaryCourses.map((c) => (
                        <Link
                          key={c.id}
                          to={`/courses/${c.id}`}
                          className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-[#F9FBFE] p-3.5 hover:border-[#0B5ED7]/50 hover:bg-white transition"
                        >
                          <div className="min-w-0 pr-3">
                            <h5 className="text-xs font-bold text-navy">{c.title}</h5>
                            <p className="text-xs text-slate-500 truncate">{c.desc}</p>
                          </div>
                          <ArrowRight size={14} className="text-[#0B5ED7] shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
