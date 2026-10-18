import type { IconType } from "react-icons";
import {
  PiMicrosoftWordLogoFill,
  PiMicrosoftExcelLogoFill,
  PiMicrosoftPowerpointLogoFill,
  PiMicrosoftOutlookLogoFill,
  PiHeadsetFill,
  PiTicketFill,
  PiDatabaseFill,
  PiChartBarFill,
  PiUsersThreeFill,
  PiSmileyFill,
  PiShieldCheckFill,
  PiChalkboardTeacherFill,
  PiChartLineUpFill,
  PiChatsCircleFill,
  PiHeartbeatFill,
  PiStorefrontFill,
  PiHandshakeFill,
  PiLightbulbFill,
  PiTargetFill,
  PiArrowsClockwiseFill,
  PiLockKeyFill,
  PiGraduationCapFill,
} from "react-icons/pi";
import { SiGmail, SiWhatsapp } from "react-icons/si";

export const profile = {
  name: "Mavine Atieno",
  fullName: "Mavine Brenda Atieno",
  roles: [
    "Customer Care Leader",
    "Customer Experience Specialist",
    "Public Health Officer",
    "Entrepreneurship Facilitator",
  ],
  tagline:
    "I lead customer care teams that turn every call, complaint and conversation into trust — backed by a foundation in Community Health and a heart for people.",
  location: "Nairobi, Kenya",
  email: "mavineatieno@gmail.com",
  phone: "+254 717 044 305",
  phoneHref: "tel:+254717044305",
  whatsapp: "https://wa.me/254717044305",
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
  { value: 1000, suffix: "+", label: "Entrepreneurs trained" },
  { value: 82, suffix: "%", label: "Customer satisfaction" },
];

export const about = {
  paragraphs: [
    "I'm a customer service professional currently heading a team of customer care representative agents at VTL Telecom Company in Nairobi. I guide agents in handling inquiries, resolving complaints and escalations, and delivering consistently positive customer experiences.",
    "Before telecoms, I facilitated entrepreneurship training with World Vision's DREAMS program, helping more than 1,000 community members — many of them adolescent girls and young women — build and grow their own businesses.",
    "My Bachelor's degree in Community Health gives me a people-first lens: understanding needs, communicating clearly with diverse audiences, and handling sensitive matters with empathy, confidentiality and professionalism.",
  ],
  facts: [
    { label: "Based in", value: "Nairobi, Kenya" },
    { label: "Current role", value: "Head of Customer Care Agents" },
    { label: "Degree", value: "BSc Community Health" },
    { label: "Experience", value: "4+ years" },
  ],
};

export type Service = { icon: IconType; title: string; text: string };

export const services: Service[] = [
  {
    icon: PiUsersThreeFill,
    title: "Team Leadership & Coordination",
    text: "Guiding customer care agents, coordinating daily responsibilities and building a team culture of accountability and collaboration.",
  },
  {
    icon: PiSmileyFill,
    title: "Customer Experience Management",
    text: "Promoting professional interactions, spotting service gaps early and driving improvements across every customer channel.",
  },
  {
    icon: PiShieldCheckFill,
    title: "Complaint & Escalation Handling",
    text: "Owning the most complex troubleshooting cases, de-escalating difficult conversations and steering them to resolution.",
  },
  {
    icon: PiChalkboardTeacherFill,
    title: "Agent Coaching & Training",
    text: "Onboarding and training new recruiters across branches with constructive feedback that lifts communication and service quality.",
  },
  {
    icon: PiChartLineUpFill,
    title: "Performance Monitoring",
    text: "Tracking SLAs, KPIs, resolution times and customer feedback to keep the team consistently above target.",
  },
  {
    icon: PiChatsCircleFill,
    title: "Stakeholder Communication",
    text: "Relaying customer needs, recurring issues and operational updates clearly to management and partner departments.",
  },
  {
    icon: PiHeartbeatFill,
    title: "Community Health Promotion",
    text: "Health education, community diagnosis, disease prevention and awareness on sanitation, hygiene and healthy lifestyles.",
  },
  {
    icon: PiStorefrontFill,
    title: "Entrepreneurship Facilitation",
    text: "Training in business planning, budgeting, financial literacy, record keeping and marketing for small business owners.",
  },
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
      "Leading and supporting a team of customer care agents to deliver professional, timely and empathetic service across calls, emails, messages and walk-ins.",
    points: [
      "Lead, guide and coach agents in daily customer service activities and complaint management.",
      "Monitor inquiries and escalations to ensure timely, professional resolution within SLAs.",
      "Identify recurring complaints and channel them to the relevant departments for follow-up.",
      "Prepare personal and team reports and oversee customer service records.",
      "Supported the roll-out of a CRM system for ticket creation, escalation and tracking.",
    ],
    wins: [
      "Grew installations and retention to 70%+ — the company's highest in six years",
      "Cut complaint resolution time from 4 hours to 2 hours",
      "Reached 90% of team performance targets",
    ],
  },
  {
    role: "Entrepreneurship Facilitator",
    org: "World Vision — Tumikia Mtoto DREAMS Program",
    place: "Dandora, Nairobi",
    period: "Oct 2021 — May 2023",
    summary:
      "Facilitated entrepreneurship and capacity-building sessions for community members, aspiring entrepreneurs and adolescent girls and young women running small businesses.",
    points: [
      "Supported participants in developing business ideas, plans and income opportunities.",
      "Trained in business management, budgeting, financial literacy, record keeping and marketing.",
      "Collected participant data, maintained program records and prepared activity reports.",
      "Identified participant challenges and referred them to the right program staff.",
    ],
    wins: [
      "Trained 1,000+ entrepreneurs in 1 year and 7 months",
      "500+ participants launched their own small businesses",
      "Participants received start-up capital and phones via the Ajira program",
    ],
  },
  {
    role: "Community Health Intern (Field Attachment)",
    org: "Karurumo Teaching & Referral Hospital · Kibugu Health Centre",
    place: "Embu, Kenya",
    period: "May 2019 — Aug 2021",
    summary:
      "Two field attachments supporting community health education, community diagnosis and health promotion activities.",
    points: [
      "Supported community health education, diagnosis and promotion activities.",
      "Assisted with health-related data collection and documentation.",
      "Promoted disease awareness, sanitation, hygiene and healthy lifestyles.",
      "Observed professional ethics and confidentiality with community information.",
    ],
    wins: [
      "Karurumo Teaching & Referral Hospital — May to Aug 2021",
      "Kibugu Health Centre — May to Aug 2019",
    ],
  },
];

export const achievements = [
  { value: 70, suffix: "%+", label: "Installations & retention", note: "Highest at VTL in six years" },
  { value: 82, suffix: "%", label: "Customer satisfaction score", note: "Team-wide CSAT contribution" },
  { value: 50, suffix: "%", label: "Faster resolutions", note: "From 4 hours down to 2" },
  { value: 90, suffix: "%", label: "Team performance target", note: "Achieved by the care team" },
  { value: 1000, suffix: "+", label: "Entrepreneurs trained", note: "World Vision DREAMS program" },
  { value: 500, suffix: "+", label: "Businesses started", note: "By program participants" },
];

export type Tool = { icon: IconType; name: string; category: string; color: string };

export const tools: Tool[] = [
  { icon: PiMicrosoftWordLogoFill, name: "Microsoft Word", category: "Documentation", color: "#2B7CD3" },
  { icon: PiMicrosoftExcelLogoFill, name: "Microsoft Excel", category: "Data & Reporting", color: "#21A366" },
  { icon: PiMicrosoftPowerpointLogoFill, name: "PowerPoint", category: "Training & Presentations", color: "#D35230" },
  { icon: PiMicrosoftOutlookLogoFill, name: "Outlook & Email", category: "Digital Communication", color: "#0A64AD" },
  { icon: SiGmail, name: "Gmail", category: "Digital Communication", color: "#EA4335" },
  { icon: SiWhatsapp, name: "WhatsApp Business", category: "Customer Messaging", color: "#25D366" },
  { icon: PiTicketFill, name: "CRM & Ticketing", category: "Tickets · Escalations · Tracking", color: "#A855F7" },
  { icon: PiHeadsetFill, name: "Call Centre Telephony", category: "Inbound & Outbound Calls", color: "#F43F5E" },
  { icon: PiDatabaseFill, name: "Data Entry & Records", category: "Record Management", color: "#F59E0B" },
  { icon: PiChartBarFill, name: "Reporting & Analysis", category: "KPIs · SLAs · Team Reports", color: "#06B6D4" },
];

export const skills = [
  "Customer care leadership",
  "Customer relationship management",
  "Complaint resolution",
  "Call centre operations",
  "Agent coaching",
  "Conflict de-escalation",
  "Active listening",
  "Problem-solving",
  "Service quality",
  "Customer feedback management",
  "Reporting & documentation",
  "Time management",
  "Health promotion",
  "Community mobilisation",
  "Training delivery",
  "Financial literacy training",
  "Data collection",
  "Confidentiality & ethics",
];

export const approach: { icon: IconType; title: string; text: string }[] = [
  { icon: PiTargetFill, title: "Lead by example", text: "Professional conduct the team can see and mirror every day." },
  { icon: PiHandshakeFill, title: "Accountability", text: "Clear expectations, shared ownership and real collaboration." },
  { icon: PiHeartbeatFill, title: "Empathy first", text: "Respectful, human conversations — with customers and agents." },
  { icon: PiLightbulbFill, title: "Keep learning", text: "Continuous coaching and skills development for every agent." },
  { icon: PiArrowsClockwiseFill, title: "Feedback loops", text: "Using customer feedback to find what to improve next." },
  { icon: PiLockKeyFill, title: "Integrity", text: "Confidentiality and ethical standards, without exception." },
];

export const story = {
  title: "Closing the training gap",
  challenge:
    "New recruiters were joining the customer care team without any professional training, and it showed in their customer interactions.",
  action:
    "I designed and ran the trainings myself, then travelled to the other branches to deliver the same programme — while working with management to make the case for a dedicated trainer.",
  result:
    "Management hired a professional customer service trainer, closing the gap for good and lifting customer interactions and relations — even among brand-new agents.",
};

export const education = {
  degree: "Bachelor of Science in Community Health",
  school: "University of Embu",
  year: "2021",
  icon: PiGraduationCapFill,
  coursework: [
    "Community health assessment & health promotion",
    "Epidemiology & public health principles",
    "Environmental & occupational health",
    "Health education & community mobilisation",
    "Research methods & data collection",
    "Monitoring & evaluation of health programs",
    "Disease prevention & control",
  ],
  transferable: [
    "Interpersonal communication",
    "Stakeholder engagement",
    "Understanding diverse needs",
    "Health communication",
    "Critical thinking",
    "Ethical conduct",
  ],
};

export const referees = [
  { name: "Mr Collins Asweto", title: "Head of Public Health Department", org: "University of Embu", place: "Embu, Kenya" },
  { name: "Miss Mary Wanjala", title: "Public Health Officer", org: "Karurumo Rural Health Training Centre", place: "Embu, Kenya" },
  { name: "Mr Felix Onyango", title: "Ward Coordinator", org: "DREAMS / USAID Tumikia Mtoto Program", place: "Migori, Kenya" },
];

export const objective =
  "To keep advancing in customer experience, customer care leadership and telecommunications operations — contributing to an organisation that values customer satisfaction, strong team leadership, service quality and continuous improvement.";

