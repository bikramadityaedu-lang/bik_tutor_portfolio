import { 
  Award, 
  MapPin, 
  Laptop, 
  UserCheck, 
  Brain, 
  Target, 
  Sparkles, 
  RefreshCw, 
  TrendingUp, 
  BookOpen, 
  Cpu, 
  Compass, 
  ShieldCheck, 
  MessageSquare, 
  Eye, 
  Users, 
  HeartHandshake, 
  FileCheck2, 
  Lightbulb, 
  BarChart2, 
  Smile 
} from "lucide-react";

export const trustStats = [
  {
    id: "exp",
    stat: "3+ Years",
    title: "Teaching Experience",
    description: "Personalized mentoring & academic guidance across subjects",
    icon: Award
  },
  {
    id: "home",
    stat: "Home Tuition",
    title: "Bhubaneswar",
    description: "Doorstep learning within 10–15 km of OUTR",
    icon: MapPin
  },
  {
    id: "online",
    stat: "Online Classes",
    title: "Flexible Learning",
    description: "Interactive digital sessions with shared resources",
    icon: Laptop
  },
  {
    id: "approach",
    stat: "Student-Centered",
    title: "Teaching Approach",
    description: "Focus on conceptual clarity and independent thinking",
    icon: UserCheck
  }
];

export const learningJourney = [
  {
    step: "01",
    title: "Understand",
    subtitle: "Conceptual Clarity First",
    description: "Build strong fundamental concepts instead of relying on rote memorization or quick formulas.",
    icon: Brain,
    gradient: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30"
  },
  {
    step: "02",
    title: "Apply",
    subtitle: "Real-World Context",
    description: "Connect theoretical classroom concepts with practical situations and everyday applications.",
    icon: Target,
    gradient: "from-cyan-500/20 to-teal-500/10",
    border: "border-cyan-500/30"
  },
  {
    step: "03",
    title: "Explore",
    subtitle: "Curiosity & Technology",
    description: "Leverage modern visual tools, digital aids, and technology to foster active curiosity.",
    icon: Sparkles,
    gradient: "from-teal-500/20 to-indigo-500/10",
    border: "border-teal-500/30"
  },
  {
    step: "04",
    title: "Practice",
    subtitle: "Problem Solving & Reflection",
    description: "Solve structured problems, identify common traps, and learn constructively from mistakes.",
    icon: RefreshCw,
    gradient: "from-indigo-500/20 to-purple-500/10",
    border: "border-indigo-500/30"
  },
  {
    step: "05",
    title: "Grow",
    subtitle: "Confidence & Character",
    description: "Develop academic self-reliance, disciplined study habits, and strong moral values.",
    icon: TrendingUp,
    gradient: "from-purple-500/20 to-blue-500/10",
    border: "border-purple-500/30"
  }
];

export const methodologyPillars = [
  {
    title: "Concept-Based Learning",
    description: "Understand the 'why' behind formulas and theorems, not just the steps to write in an exam.",
    icon: BookOpen,
    tag: "Core Foundation"
  },
  {
    title: "Real-World Connections",
    description: "Relate mathematical models and scientific laws to practical life scenarios for deeper memory.",
    icon: Compass,
    tag: "Practical Context"
  },
  {
    title: "Visual Learning",
    description: "Use custom diagrams, geometric visualizers, and structured diagrams where beneficial.",
    icon: Eye,
    tag: "Multi-Sensory"
  },
  {
    title: "AI-Assisted Learning",
    description: "Use modern digital & AI tools responsibly to supplement practice problems, visual aids, and step-by-step clarity.",
    icon: Cpu,
    tag: "Modern Tools"
  },
  {
    title: "Practical Problem Solving",
    description: "Focus on application strategies, breaking complex questions into manageable logical steps.",
    icon: Target,
    tag: "Skill Building"
  },
  {
    title: "Personalized Support",
    description: "Adapt pace, explanation styles, and exercises according to each student's unique learning curve.",
    icon: Users,
    tag: "Tailored Pace"
  }
];

export const subjectsData = [
  {
    id: "mathematics",
    title: "Mathematics",
    badge: "Core Subject",
    tagline: "Conceptual understanding, logical thinking, and structured problem solving.",
    highlights: [
      "Building numerical intuition and logical reasoning",
      "Step-by-step problem breakdown and formula derivation",
      "Geometry, Algebra, Trigonometry, Calculus & Foundations",
      "Eliminating math anxiety through structured practice"
    ],
    iconColor: "text-blue-400",
    glowColor: "group-hover:border-blue-500/50"
  },
  {
    id: "science",
    title: "Science",
    badge: "Core Subject",
    tagline: "Understanding physical & natural phenomena through practical examples and curiosity.",
    highlights: [
      "Physics: Mechanics, Motion, Electricity & Energy concepts",
      "Chemistry: Reaction logic, Periodic properties & Matter",
      "Biology & Environmental Science core fundamentals",
      "Connecting textbook theories to observable real-world phenomena"
    ],
    iconColor: "text-cyan-400",
    glowColor: "group-hover:border-cyan-500/50"
  },
  {
    id: "computer-science",
    title: "Computer Science",
    badge: "Modern Skill",
    tagline: "Programming fundamentals, computational logic, and digital thinking.",
    highlights: [
      "Programming logic & algorithmic problem solving",
      "Computer fundamentals, data basics, and coding",
      "Responsible use of digital tools and technology",
      "Building confidence in modern computing concepts"
    ],
    iconColor: "text-indigo-400",
    glowColor: "group-hover:border-indigo-500/50"
  }
];

export const studentExpectations = [
  { text: "Personalized Attention", icon: UserCheck },
  { text: "Concept Clarity", icon: Brain },
  { text: "Regular Practice", icon: RefreshCw },
  { text: "Dedicated Doubt Solving", icon: MessageSquare },
  { text: "Real-World Examples", icon: Compass },
  { text: "Digital Learning Resources", icon: Laptop },
  { text: "Responsible AI Assistance", icon: Cpu },
  { text: "Targeted Exam Preparation", icon: FileCheck2 },
  { text: "Transparent Progress Discussions", icon: BarChart2 },
  { text: "Confidence & Mindset Building", icon: TrendingUp },
  { text: "Structured Problem-Solving", icon: Lightbulb },
  { text: "Moral & Personal Growth", icon: Smile }
];

export const parentAssurances = [
  {
    title: "Clear & Regular Communication",
    description: "Keep parents informed about learning progress, strengths, and areas needing further practice.",
    icon: MessageSquare
  },
  {
    title: "Identifying & Bridging Gaps",
    description: "Diagnose foundational weak spots early so future topics don't feel overwhelming.",
    icon: ShieldCheck
  },
  {
    title: "Focus on Long-Term Capability",
    description: "Equip students with independent study habits and critical thinking skills that last beyond exams.",
    icon: TrendingUp
  },
  {
    title: "Respectful & Encouraging Environment",
    description: "Maintain a supportive, patient atmosphere where asking questions is always welcomed.",
    icon: HeartHandshake
  }
];

export const timelineEvents = [
  {
    period: "2020",
    title: "Class X — CBSE Board",
    subtitle: "Secondary Education",
    description: "Strong foundation in Science and Mathematics under the CBSE curriculum.",
    type: "academic"
  },
  {
    period: "2022",
    title: "Class XII — CBSE Board",
    subtitle: "Senior Secondary Education",
    description: "Specialized in Mathematics & Science streams.",
    type: "academic"
  },
  {
    period: "2022 – 2027",
    title: "Integrated MSc in Mathematics and Computing",
    subtitle: "Odisha University of Technology and Research (OUTR), Bhubaneswar",
    description: "Rigorous 5-year academic program bridging advanced mathematical logic and modern computing science.",
    type: "university"
  },
  {
    period: "3+ Years",
    title: "Private Teaching & Academic Mentoring",
    subtitle: "Home Tuition & Online Mentorship",
    description: "Helping students build confidence, master concepts, and excel in Mathematics, Science, and Computer Science.",
    type: "teaching"
  },
  {
    period: "Ongoing",
    title: "Social Education Mission — EWB Club",
    subtitle: "Engineers Without Borders (EWB), OUTR Bhubaneswar",
    description: "Providing voluntary, free educational support to students from underprivileged communities.",
    type: "social"
  }
];

export const ewbMission = {
  title: "Education Should Reach Everyone",
  organization: "Engineers Without Borders (EWB) Club, OUTR Bhubaneswar",
  quote: "I believe education becomes more meaningful when knowledge is shared. Alongside my regular teaching, I contribute my time to providing free education to students from underprivileged communities through the Engineers Without Borders (EWB) Club at OUTR Bhubaneswar.",
  points: [
    "Voluntary weekend teaching sessions for children in nearby slum communities",
    "Focusing on foundational numeracy, basic science, and general awareness",
    "Encouraging curiosity, discipline, and positive social values",
    "Building community trust through genuine educational support"
  ]
};

export const bhubaneswarLocalities = [
  { name: "Ghatikia / OUTR", distance: "0 km", radius: "Core" },
  { name: "Khandagiri & Udayagiri", distance: "2–4 km", radius: "Primary" },
  { name: "Kalinga Nagar & Pokhariput", distance: "3–6 km", radius: "Primary" },
  { name: "Nayapalli & CRPF Square", distance: "5–8 km", radius: "Primary" },
  { name: "Jaydev Vihar & Acharya Vihar", distance: "7–9 km", radius: "Extended" },
  { name: "Master Canteen & Saheed Nagar", distance: "8–11 km", radius: "Extended" },
  { name: "Patia & KIIT Area", distance: "11–14 km", radius: "Extended" },
  { name: "Old Town & Samantarapur", distance: "10–13 km", radius: "Extended" }
];
