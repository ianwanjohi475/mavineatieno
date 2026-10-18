import type { LucideIcon } from "lucide-react";
import {
  Users,
  Smile,
  ShieldCheck,
  Presentation,
  ChartLine,
  MessagesSquare,
  HeartPulse,
  Store,
  Target,
  Handshake,
  Lightbulb,
  RefreshCw,
  Lock,
  Headset,
  Ticket,
  Database,
  ChartColumn,
  GraduationCap,
} from "lucide-react";
import type { BrandIconName } from "./brand-icons";

export const profile = {
  name: "Mavine Atieno",
  fullName: "Mavine Brenda Atieno",
  title: "Customer Care Leader",
  roles: ["Customer Care Leader", "Customer Experience Specialist", "FTTH Support Lead", "Public Health Officer"],
  tagline:
    "I lead customer care teams that resolve issues fast and build lasting customer trust, from fibre (FTTH) troubleshooting to complaint escalation. My background in Community Health means I start every conversation with empathy.",
  location: "Nairobi, Kenya",
  email: "mavineatieno@gmail.com",
  phone: "+254 717 044 305",
  phoneHref: "tel:+254717044305",
  whatsapp: "https://wa.me/254717044305?text=Hi%20Mavine%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.",
  linkedin: "https://www.linkedin.com/search/results/all/?keywords=Mavine%20Atieno",
  cv: "/Mavine-Atieno-CV.pdf",
  photo: "/mavine.webp",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "services", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "tools", label: "Tools" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const heroStats = [
  { value: 15, suffix: "", label: "Agents led" },
  { value: 82, suffix: "%", label: "Customer satisfaction" },
  { value: 1000, suffix: "+", label: "Entrepreneurs trained" },
  { value: 70, suffix: "%+", label: "Retention achieved" },
];

export const organisations = [
  "VTL Telecom",
  "World Vision Kenya",
  "DREAMS · Tumikia Mtoto",
  "University of Embu",
  "Karurumo Teaching & Referral Hospital",
  "Kibugu Health Centre",
  "SmartOLT",
];

export const about = {
  paragraphs: [
    "I head a team of customer care representative agents at VTL Telecom Company in Nairobi, an internet and fibre service provider. I coach agents on handling inquiries, resolving complaints and managing escalations, and I take on the hardest troubleshooting cases myself, including ONU and fibre connection issues in SmartOLT.",
    "Before telecoms, I facilitated entrepreneurship training with World Vision's DREAMS program. I trained more than 1,000 community members, many of them adolescent girls and young women, to build and grow their own businesses.",
    "I hold a Bachelor's degree in Community Health. It shaped how I work: I take time to understand needs, communicate clearly with people from all backgrounds, and handle sensitive matters with empathy and confidentiality.",
  ],
  facts: [
    { label: "Based in", value: "Nairobi, Kenya" },
    { label: "Current role", value: "Head of Customer Care" },
    { label: "Degree", value: "BSc Community Health" },
    { label: "Experience", value: "4+ years" },
  ],
};

export type Service = { icon: LucideIcon; title: string; text: string };

export const services: Service[] = [
  { icon: Users, title: "Team Leadership", text: "I lead a team of 15 agents: coordinating daily work and building a culture of accountability and collaboration." },
  { icon: Smile, title: "Customer Experience", text: "I keep interactions professional, spot service gaps early, and push improvements across calls, email, messaging and walk-ins." },
  { icon: ShieldCheck, title: "Complaints & Escalations", text: "I take the most complex cases myself, calm difficult conversations, and see each issue through to resolution within SLA." },
  { icon: Presentation, title: "Agent Coaching & Training", text: "I onboard and train new recruiters across branches, with constructive feedback that improves service quality." },
  { icon: ChartLine, title: "Performance Monitoring", text: "I track SLAs, KPIs, resolution times and customer feedback to keep the team above target." },
  { icon: MessagesSquare, title: "Stakeholder Communication", text: "I report customer needs, recurring issues and operational updates clearly to management and technical teams." },
  { icon: HeartPulse, title: "Community Health", text: "I have delivered health education, community diagnosis and disease prevention work, and promoted hygiene and healthy lifestyles." },
  { icon: Store, title: "Entrepreneurship Training", text: "I have trained small business owners in business planning, budgeting, financial literacy, record keeping and marketing." },
];

export type Job = {
  role: string;
  org: string;
  place: string;
  period: string;
  current?: boolean;
  summary: string;
  points: string[];
  wins: string[];
};

export const experience: Job[] = [
  {
    role: "Head of Customer Care Representative Agents",
    org: "VTL Telecom Company",
    place: "Nairobi, Kenya",
    period: "May 2024 — Present",
    current: true,
    summary:
      "Leading and supporting a team of 15 customer care agents to deliver fast, professional and empathetic service to internet and fibre customers across calls, email, messaging and walk-ins.",
    points: [
      "Lead, guide and coach agents in daily customer service, complaint handling and escalation procedures.",
      "Manage customer ONUs and fibre (FTTH) connections in SmartOLT: checking status and signal, authorising devices and troubleshooting downtime.",
      "Worked through the roll-out of a CRM system that made it easier to create, escalate and track tickets.",
      "Identify recurring complaints and channel them to technical and partner departments for follow-up.",
      "Prepare personal and team reports and oversee customer service records.",
    ],
    wins: [
      "Grew installations and retention to 70%+, the company's highest in six years",
      "Cut complaint resolution time from 4 hours to 2",
      "82% customer satisfaction and 90% of team performance target",
    ],
  },
  {
    role: "Entrepreneurship Facilitator",
    org: "World Vision · Tumikia Mtoto DREAMS Program",
    place: "Dandora, Nairobi",
    period: "Oct 2021 — May 2023",
    summary:
      "Facilitated entrepreneurship and capacity-building sessions for community members, aspiring entrepreneurs and adolescent girls and young women running small businesses.",
    points: [
      "Supported participants in developing business ideas, business plans and income opportunities.",
      "Trained in business management, budgeting, financial literacy, record keeping and marketing.",
      "Collected participant data, maintained program records and prepared monitoring reports.",
      "Identified participant challenges and referred them to the right program staff.",
    ],
    wins: [
      "Trained 1,000+ entrepreneurs in 1 year and 7 months",
      "500+ participants launched their own businesses",
      "Through the Ajira program, participants received start-up capital and phones",
    ],
  },
  {
    role: "Community Health Intern (Field Attachment)",
    org: "Karurumo Teaching & Referral Hospital · Kibugu Health Centre",
    place: "Embu, Kenya",
    period: "May 2019 — Aug 2021",
    summary: "Two field attachments supporting community health education, community diagnosis and health promotion.",
    points: [
      "Supported community health education, diagnosis and promotion activities.",
      "Assisted with health-related data collection and documentation.",
      "Promoted disease awareness, sanitation, hygiene and healthy lifestyles.",
      "Observed professional ethics and confidentiality with community information.",
    ],
    wins: ["Karurumo Teaching & Referral Hospital, May–Aug 2021", "Kibugu Health Centre, May–Aug 2019"],
  },
];

export const achievements = [
  { value: 70, suffix: "%+", label: "Installations & retention", note: "Highest at VTL in six years" },
  { value: 82, suffix: "%", label: "Customer satisfaction", note: "Team-wide CSAT score" },
  { value: 50, suffix: "%", label: "Faster resolutions", note: "From 4 hours down to 2" },
  { value: 90, suffix: "%", label: "Team performance target", note: "Achieved by the care team" },
  { value: 1000, suffix: "+", label: "Entrepreneurs trained", note: "World Vision DREAMS program" },
  { value: 500, suffix: "+", label: "Businesses launched", note: "By program participants" },
];

export const smartOlt = {
  name: "SmartOLT",
  logo: "/tools/smartolt.png",
  label: "Featured platform · Fibre network CRM",
  text: "Day to day, I use SmartOLT to manage the fibre (FTTH) customer base: finding a subscriber's ONU, checking its status and signal, and fixing connection problems before they turn into escalations.",
  capabilities: [
    "ONU authorisation & provisioning",
    "Online / offline status monitoring",
    "Optical signal (Rx power) checks",
    "Fibre-direct (FTTH) troubleshooting",
    "Customer & device records",
    "Escalation to field technicians",
  ],
};

export type Tool = {
  name: string;
  category: string;
  brand?: BrandIconName;
  icon?: LucideIcon;
  color: string;
};

export const tools: Tool[] = [
  { brand: "word", name: "Microsoft Word", category: "Reports & documentation", color: "#2B579A" },
  { brand: "excel", name: "Microsoft Excel", category: "Data, tracking & reporting", color: "#217346" },
  { brand: "powerpoint", name: "PowerPoint", category: "Training & presentations", color: "#D24726" },
  { brand: "outlook", name: "Outlook", category: "Email & scheduling", color: "#0078D4" },
  { brand: "gmail", name: "Gmail", category: "Customer email support", color: "#EA4335" },
  { brand: "whatsapp", name: "WhatsApp Business", category: "Customer messaging", color: "#25D366" },
  { icon: Ticket, name: "CRM & Ticketing", category: "Tickets, escalations & tracking", color: "#7C3AED" },
  { icon: Headset, name: "Call Centre Telephony", category: "Inbound & outbound calls", color: "#0EA5E9" },
  { icon: Database, name: "Data Entry & Records", category: "Customer record management", color: "#F59E0B" },
  { icon: ChartColumn, name: "KPI & SLA Reporting", category: "Team performance reports", color: "#10B981" },
];

export const skills = [
  "Customer care leadership",
  "CRM management",
  "ONU & FTTH support",
  "Complaint resolution",
  "Call centre operations",
  "Agent coaching",
  "Conflict de-escalation",
  "Active listening",
  "Problem-solving",
  "Service quality",
  "Customer feedback",
  "Reporting & documentation",
  "Time management",
  "Health promotion",
  "Community mobilisation",
  "Training delivery",
  "Financial literacy",
  "Confidentiality & ethics",
];

export const approach: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Target, title: "Lead by example", text: "My agents see the same professional conduct I expect from them, every day." },
  { icon: Handshake, title: "Accountability", text: "Clear expectations and shared ownership of results." },
  { icon: HeartPulse, title: "Empathy first", text: "Respectful, human conversations with customers and agents alike." },
  { icon: Lightbulb, title: "Continuous learning", text: "Ongoing coaching and skills development for every agent." },
  { icon: RefreshCw, title: "Feedback loops", text: "I use customer feedback to decide what to improve next." },
  { icon: Lock, title: "Integrity", text: "Confidentiality and ethical standards, without exception." },
];

export const story = {
  title: "Closing the training gap",
  challenge: "New recruiters were joining the customer care team without professional training, and customers could tell.",
  action: "I designed and ran the training myself and travelled to the other branches to deliver it, while making the case to management for a dedicated trainer.",
  result: "Management hired a professional customer service trainer. The gap closed for good, and customer interactions improved, even with brand-new agents.",
};

export const education = {
  degree: "Bachelor of Science in Community Health",
  school: "University of Embu",
  year: "2021",
  icon: GraduationCap,
  coursework: [
    "Community health assessment & promotion",
    "Epidemiology & public health principles",
    "Environmental & occupational health",
    "Health education & community mobilisation",
    "Research methods & data collection",
    "Monitoring & evaluation of programs",
    "Disease prevention & control",
  ],
  transferable: [
    "Interpersonal communication",
    "Stakeholder engagement",
    "Understanding diverse needs",
    "Clear information delivery",
    "Critical thinking",
    "Ethical conduct & confidentiality",
  ],
};

export const referees = [
  { name: "Mr Collins Asweto", title: "Head of Public Health Department", org: "University of Embu", place: "Embu, Kenya" },
  { name: "Miss Mary Wanjala", title: "Public Health Officer", org: "Karurumo Rural Health Training Centre", place: "Embu, Kenya" },
  { name: "Mr Felix Onyango", title: "Ward Coordinator", org: "DREAMS / USAID Tumikia Mtoto Program", place: "Migori, Kenya" },
];

export const objective =
  "My goal is to keep growing in customer experience, customer care leadership and telecom operations, at an organisation that values customer satisfaction, strong team leadership and continuous improvement.";
