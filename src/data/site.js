// Verified business details + editable site content. Anything in [brackets] is not yet supplied.
export const site={
  name:'NAVYA TECHNO',
  fullName:'Navya Techno Institute of Computer Education Training Center',
  telugu:'నవ్య టెక్నో ఇన్స్టిట్యూట్ ఆఫ్ కంప్యూటర్ ఎడ్యుకేషన్ ట్రైనింగ్ సెంటర్',
  tagline:'Institute of Computer Education Training Center',
  address:'SH 54, Near APSRTC Busstand, Reddy Nagar, Porumamilla, Andhra Pradesh 516193, India',
  phone:'+91 98496 38258', phoneTel:'+919849638258',
  whatsapp:'919849638258', // assumed same as the phone number: change if the WhatsApp number differs
  email:'[Email Address]', hours:'[Working Hours]',
  rating:{score:'4.8',count:'83'}, plusCode:'2X2R+82 Porumamilla, Andhra Pradesh',
  mapQuery:'Navya Techno Institute of Computer Education Training Center, SH 54, Near APSRTC Busstand, Reddy Nagar, Porumamilla, Andhra Pradesh 516193',
  social:[], // only real profiles, e.g. [{label:'Instagram',icon:'Instagram',href:'https://...'}]
  announcement:{
    enabled:true,
    badge:'Admissions Open',
    text:'New Practical Computer Training Batches Starting Soon in Porumamilla!',
    cta:'',
  },
};
export const navMain=[['Home','/'],['About','/about'],['Courses','/courses'],['Placements','/placements'],['Faculty','/faculty'],['Certificates','/certificates'],['Contact','/contact']];
export const navMore=[['Facilities','/facilities'],['Gallery','/gallery']];
export const nav=[...navMain.slice(0,6),...navMore,navMain[6]];
export const strip=[['Users','Experienced Trainers','Learn from industry professionals'],['Laptop','Hands-on Practice','Real projects & live training'],['BadgeCheck','Course Certificates','Showcase your skills'],['Briefcase','Career Support','Guidance for your next step']];
export const why=[['Users','Expert Trainers','Learn from dedicated trainers.'],['MousePointerClick','Practical Learning','Focus on hands-on computer skills.'],['GraduationCap','Student-Focused Learning','Learning designed around student needs.'],['Briefcase','Career Support','Guidance toward education and employment opportunities.'],['Rocket','Future Ready','Develop skills for a changing digital world.']];
export const steps=[['Understand','Learn concepts clearly.'],['Practise','Apply what you learn.'],['Improve','Strengthen your skills through practice.'],['Progress','Use your skills for education and career growth.']];
export const audience=['School Students','College Students','Beginners','Job Seekers','Working Professionals','Entrepreneurs','Anyone wanting digital skills'];
export const principles=[['Zap','Digital Empowerment','Confident, capable users of modern technology.'],['BookOpen','Quality Education','Understandable, structured learning for every level.'],['MousePointerClick','Practical Skill Development','Hands-on learning applied to real tasks.'],['Briefcase','Career Preparation','Skills that may support study, work and growth.'],['Infinity','Lifelong Learning','Keep learning as technology evolves.']];
export const commitments=[['Lightbulb','Curiosity','We encourage learners to ask, explore and understand.'],['MousePointerClick','Practical Learning','We promote learning by doing, not just memorising.'],['ShieldCheck','Confidence','We help every learner grow sure of their abilities.']];
export const missionPoints=['Structured education for different skill levels','Practical knowledge through hands-on learning','Independent thinking and problem-solving','Useful applications and digital tools','Skills relevant to education and employment','Responsible, ethical use of technology'];
export const facilities=[
 {id:'computer-lab',icon:'Monitor',title:'Computer Lab',desc:'Computers and software for hands-on practice.'},
 {id:'hardware-lab',icon:'Cpu',title:'Hardware Lab',desc:'Hands-on hardware learning.'},
 {id:'classroom',icon:'School',title:'Classrooms',desc:'A comfortable learning environment.'},
 {id:'training-equipment',icon:'Wrench',title:'Training Equipment',desc:'Practical tools for technical learning.'},
 {id:'practical-training',icon:'MousePointerClick',title:'Practical Sessions',desc:'Learning through application and practice.'},
 {id:'learning-environment',icon:'Lightbulb',title:'Learning Environment',desc:'A supportive space to ask, practise and improve.'},
].map(f=>({...f,img:`/images/facilities/${f.id}.jpg`}));
export const certBenefits=[['Award','Course Completion Recognition'],['BadgeCheck','Skill Demonstration'],['Heart','Confidence Building'],['FileText','Portfolio Support']];
export const placementSupport=[['FileText','Career Preparation','Resume guidance, interview preparation and communication development.'],['Users','Placement Assistance','Support with relevant opportunities and interview preparation.'],['Compass','Career Guidance','Help understanding possible career paths.'],['Wrench','Job-Oriented Skills','Practical computer and digital skills.']];
export const placementStats=[]; // only verified figures, e.g. [{value:'..',label:'Students Placed'}]
export const hiringPartners=[]; // only verified partners
export const pathSteps=['Learn','Practise','Get Certified','Prepare','Explore Opportunities'];
export const faqs=[['What is Navya Techno?','An institute focused on computer education and digital skill development, with courses matched to the programs offered.'],['Can beginners join?','Yes. Beginners can enrol in courses designed for their level, subject to admission requirements and available programs.'],['Why learn computer skills?','They help with education, communication, productivity, digital services and preparation for professional opportunities.'],['Which courses are available?','Availability depends on current programs. Contact us for the latest course list, eligibility, duration and fees.'],['How can I enrol?','Call us, send an enquiry or message us on WhatsApp to learn about admissions and batch timings.']];
export const admissionSteps=[['Phone','Enquire','Call, WhatsApp or send an enquiry.'],['MapPin','Visit','Come see the institute and meet the trainers.'],['BookOpen','Join','Choose your course and batch.'],['Laptop','Learn','Practise hands-on with guidance.'],['Award','Get Certified','Receive your course certificate.']];
