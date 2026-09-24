export interface CourseItem {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  audience: string;
  longDesc: string;
  iconName: "Compass" | "BookOpenCheck" | "Award" | "Users";
  curriculumHighlights: string[];
  features: string[];
}

export interface TrustHighlightItem {
  id: string;
  title: string;
  description: string;
  icon: "Brain" | "UserCheck" | "Target" | "Sparkles";
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: "Brain" | "UserCheck" | "Target" | "Award" | "HelpCircle" | "ShieldCheck";
}

export interface HowItWorksStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
}

export interface BatchItem {
  id: string;
  title: string;
  type: string;
  badge: string;
  description: string;
  features: string[];
  note: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  studentPlaceholder: string;
  coursePlaceholder: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const BRAND_INFO = {
  name: "Shree Classes",
  tagline: "Learn Better. Perform Better. Achieve More.",
  eyebrow: "Trusted Academic Guidance",
  heroTitle: "Build a Stronger Academic Future with Shree Classes",
  heroDescription:
    "Personalized coaching, expert guidance, and focused learning designed to help students understand concepts, improve performance, and achieve their academic goals.",
  // Editable Demo Contact Placeholders
  address: "[Academy Address]",
  addressDetail: "[Premises / Street, Landmark, City, State - PIN]",
  phone: "[Phone Number]",
  phoneRaw: "+910000000000",
  whatsapp: "[WhatsApp Number]",
  whatsappRaw: "910000000000",
  whatsappDemo: "[WhatsApp Number]",
  email: "[Email Address]",
  hoursDemo: "Monday – Saturday (Timings confirmed on admission)",
};

export const TRUST_HIGHLIGHTS: TrustHighlightItem[] = [
  {
    id: "concept-focused",
    title: "Concept-Focused Learning",
    description: "Deep deconstruction of core principles and derivations so students grasp the 'why' behind every concept.",
    icon: "Brain",
  },
  {
    id: "personal-guidance",
    title: "Personal Guidance",
    description: "Focused mentoring tailored to individual learning speeds, ensuring no student is left behind.",
    icon: "UserCheck",
  },
  {
    id: "exam-oriented",
    title: "Exam-Oriented Preparation",
    description: "Structured practice, previous-year question analyses, and time-tested answer writing techniques.",
    icon: "Target",
  },
  {
    id: "student-support",
    title: "Student Support",
    description: "Accessible academic faculty, daily doubt-clearing assistance, and continuous moral encouragement.",
    icon: "Sparkles",
  },
];

export const COURSES_DATA: CourseItem[] = [
  {
    id: "engineering-diploma",
    title: "Engineering / Diploma Coaching",
    badge: "Technical Core",
    iconName: "Compass",
    audience: "Diploma & Degree Engineering Aspirants",
    shortDesc:
      "Comprehensive coaching for diploma and engineering semester subjects, emphasizing fundamental concepts, analytical derivations, and university examination standards.",
    longDesc:
      "Designed specifically for polytechnic and undergraduate engineering students tackling rigorous semester curricula. We bridge theory and practical mathematical application, covering analytical problem solving, circuit theories, mechanics, and computational logic with structured academic discipline.",
    curriculumHighlights: [
      "Engineering Mathematics & Calculus",
      "Applied Mechanics & Strength of Materials",
      "Basic Electrical & Electronics Engineering",
      "Department-Specific Semester Subjects",
    ],
    features: [
      "Step-by-step breakdown of intricate derivations",
      "Rigorous numerical solving sessions",
      "University question paper pattern deconstruction",
      "Clear, chapter-wise reference notes",
    ],
  },
  {
    id: "subject-wise",
    title: "Subject-Wise Coaching",
    badge: "Targeted Focus",
    iconName: "BookOpenCheck",
    audience: "Students Requiring Subject-Specific Clarity",
    shortDesc:
      "Targeted modular coaching for individual challenging subjects, providing students with focused attention and customized pacing to overcome conceptual hurdles.",
    longDesc:
      "Not every student needs a full curriculum package. Our subject-wise coaching permits students to enroll specifically in the subjects where they experience friction—turning perceived weak points into confident strengths through individualized focus.",
    curriculumHighlights: [
      "Modular enrollment for specific subjects",
      "Concentrated revision on high-weightage topics",
      "Custom pace tailored to the student's foundation",
      "Formula mastery and conceptual diagnostics",
    ],
    features: [
      "Enroll only in subjects you need",
      "Tailored pacing without syllabus rush",
      "Focused one-on-one doubt resolution",
      "Comprehensive summary sheets and cheat notes",
    ],
  },
  {
    id: "exam-preparation",
    title: "Exam Preparation",
    badge: "Performance Driven",
    iconName: "Award",
    audience: "Board & Semester Exam Candidates",
    shortDesc:
      "Strategic examination preparation featuring full-syllabus test series, paper presentation guidance, and time management coaching for peak performance.",
    longDesc:
      "Knowing the subject is half the battle; writing it effectively within the time limit is what earns results. Our Exam Preparation track coaches students on precise answer formatting, stepwise presentation, time allocation, and stress management under simulated exam conditions.",
    curriculumHighlights: [
      "Standardized simulated test series",
      "Detailed examiner-style answer review",
      "Time allocation and pacing masterclasses",
      "Past 5+ years question paper synthesis",
    ],
    features: [
      "Rigorous timed mock examinations",
      "Individual answer sheet evaluation & feedback",
      "Correction strategies for common calculation pitfalls",
      "Pre-exam revision marathons",
    ],
  },
  {
    id: "personalized-guidance",
    title: "Personalized Academic Guidance",
    badge: "1-on-1 Mentorship",
    iconName: "Users",
    audience: "Students Seeking Dedicated Mentorship",
    shortDesc:
      "Individualized academic mentoring, customized study roadmaps, and continuous progress monitoring to nurture personal confidence and academic consistency.",
    longDesc:
      "A high-touch mentorship format designed for students who thrive with direct, dedicated instructor attention. Mentors collaborate closely with students to formulate personal study timetables, identify micro-gaps in comprehension, and maintain steady motivation.",
    curriculumHighlights: [
      "Personal diagnostic evaluation upon intake",
      "Customized study timetables & weekly targets",
      "Dedicated 1-on-1 doubt clearing slots",
      "Periodic parent-mentor alignment reviews",
    ],
    features: [
      "Direct instructor mentorship",
      "Customized learning roadmap based on student's pace",
      "Structured weekly progress tracking",
      "Constructive, encouraging academic atmosphere",
    ],
  },
];

export const WHY_US_DATA: WhyUsItem[] = [
  {
    id: "concept-clarity",
    title: "Concept Clarity",
    description:
      "We replace rote memorization with foundational intuition, teaching the core logic behind every formula, theorem, and method.",
    iconName: "Brain",
  },
  {
    id: "personal-attention",
    title: "Personal Attention",
    description:
      "Small, disciplined batch sizes ensure each student's learning pace is noticed, respected, and directly supported by faculty.",
    iconName: "UserCheck",
  },
  {
    id: "exam-focused-learning",
    title: "Exam-Focused Learning",
    description:
      "Curriculum delivery is systematically aligned with board and university grading schemes, prioritizing high-yield question patterns.",
    iconName: "Target",
  },
  {
    id: "experienced-guidance",
    title: "Experienced Guidance",
    description:
      "Disciplined academic methodologies shaped by a deep understanding of student pain points and curriculum requirements.",
    iconName: "Award",
  },
  {
    id: "doubt-solving",
    title: "Doubt Solving",
    description:
      "No doubt is dismissed as trivial. We provide dedicated doubt-resolution windows before and after class sessions.",
    iconName: "HelpCircle",
  },
  {
    id: "supportive-environment",
    title: "Supportive Environment",
    description:
      "A calm, distraction-free atmosphere where students build academic stamina, intellectual curiosity, and self-confidence.",
    iconName: "ShieldCheck",
  },
];

export const HOW_IT_WORKS_DATA: HowItWorksStep[] = [
  {
    step: "01",
    title: "Choose Your Course",
    tagline: "Find the right academic support.",
    description:
      "Explore our diploma, engineering, subject-wise, or exam preparation programs to identify the specific curriculum matching your academic requirements.",
  },
  {
    step: "02",
    title: "Connect With Us",
    tagline: "Discuss your learning requirements.",
    description:
      "Reach out via our enquiry form or WhatsApp. Our academic team will discuss your current syllabus, syllabus targets, and preferred batch timing.",
  },
  {
    step: "03",
    title: "Start Learning",
    tagline: "Join the appropriate batch and begin.",
    description:
      "Complete registration, receive structured study material, and step into an encouraging learning environment focused on your long-term success.",
  },
];

export const BATCHES_DATA: BatchItem[] = [
  {
    id: "weekday-batches",
    title: "Weekday Batches",
    type: "Regular Academic Track",
    badge: "Continuous Pace",
    description:
      "Structured weekday sessions designed to synchronize smoothly with daily college and school schedules, reinforcing classroom concepts through regular weekly problem sets.",
    features: [
      "Consistent daily / alternate day schedule",
      "Regular practice problem sets and weekly reviews",
      "Daily post-session doubt resolution window",
      "Steady syllabus coverage ahead of college exams",
    ],
    note: "Demo schedule placeholder — exact batch timings and days are scheduled upon enrollment.",
  },
  {
    id: "weekend-batches",
    title: "Weekend Batches",
    type: "Intensive Weekend Track",
    badge: "Accelerated Focus",
    description:
      "Comprehensive, extended weekend sessions tailored for diploma and degree students who need dedicated time for practical labs and projects during weekdays.",
    features: [
      "High-focus sessions across Saturdays & Sundays",
      "In-depth concept deconstruction and numerical workshops",
      "Curated weekend assignment booklets",
      "Ideal for commuters and busy college schedules",
    ],
    note: "Demo schedule placeholder — weekend slots subject to cohort capacity and semester timing.",
  },
  {
    id: "personalized-support",
    title: "Personalized Support",
    type: "Tailored Mentorship Track",
    badge: "Custom Timetable",
    description:
      "Flexible micro-group or individual coaching designed for students aiming to overcome specific subject bottlenecks or prepare for immediate exam deadlines.",
    features: [
      "Flexible pace aligned with the student's foundation",
      "Targeted focus on high-difficulty chapters",
      "Custom test series calibrated to student needs",
      "Direct one-on-one mentor interaction",
    ],
    note: "Demo schedule placeholder — slots organized following diagnostic consultation.",
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    quote:
      "“Student testimonial will be added here upon client launch. This section will feature verified student reviews on concept clarity, teaching methodology, and personal guidance.”",
    studentPlaceholder: "[Student Name Placeholder]",
    coursePlaceholder: "Engineering / Diploma Coaching",
    tag: "Concept Clarity & Guidance",
  },
  {
    id: "test-2",
    quote:
      "“Student testimonial will be added here upon client launch. Demonstrates authentic feedback on subject-wise coaching, doubt clearance, and faculty responsiveness.”",
    studentPlaceholder: "[Student Name Placeholder]",
    coursePlaceholder: "Subject-Wise Coaching",
    tag: "Personalized Attention",
  },
  {
    id: "test-3",
    quote:
      "“Student testimonial will be added here upon client launch. Highlights student experience during exam preparation, mock test practice, and paper presentation guidance.”",
    studentPlaceholder: "[Student Name Placeholder]",
    coursePlaceholder: "Exam Preparation Track",
    tag: "Exam Confidence",
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    category: "Courses",
    question: "What courses are available?",
    answer:
      "Shree Classes offers four core academic tracks: Engineering / Diploma Coaching for polytechnic and undergraduate technical subjects; Subject-Wise Coaching for focused mastery in specific challenging modules; Exam Preparation featuring structured test series and paper presentation; and Personalized Academic Guidance providing dedicated one-on-one mentorship.",
  },
  {
    category: "Admissions",
    question: "How can I enquire about admission?",
    answer:
      "You can submit an enquiry using the online form on this website, or connect directly with our admissions desk via WhatsApp at [WhatsApp Number] or by calling [Phone Number]. Our academic counselor will schedule a quick consultation to understand your academic goals.",
  },
  {
    category: "Batches",
    question: "Are different batches available?",
    answer:
      "Yes. We offer flexible learning options including Weekday Batches (ideal for regular continuous study), Weekend Batches (extended sessions tailored for students balancing college lab hours), and Personalized Support batches with custom scheduling.",
  },
  {
    category: "Mentorship",
    question: "Is personalized guidance available?",
    answer:
      "Yes, personal attention is central to Shree Classes' philosophy. We maintain disciplined, compact batch sizes so instructors can track individual progress, and we offer dedicated 1-on-1 personalized academic guidance for students seeking customized study roadmaps.",
  },
  {
    category: "Location",
    question: "Where is Shree Classes located?",
    answer:
      "Shree Classes is conveniently located at [Academy Address]. Detailed landmark directions and campus visiting hours are provided upon enquiry. Please contact our desk prior to visiting so we can reserve dedicated time for you.",
  },
  {
    category: "Contact",
    question: "How can I contact Shree Classes?",
    answer:
      "You can reach Shree Classes via phone at [Phone Number], send a message via WhatsApp at [WhatsApp Number], or email us at [Email Address]. You can also complete the enquiry form below, and our team will get back to you promptly.",
  },
];
