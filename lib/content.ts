// All copy below is taken from Mavine's CV and Professional Portfolio documents.
import type { Icon } from "iconsax-react";
import {
  People,
  EmojiHappy,
  ShieldTick,
  Teacher,
  Chart,
  Messages2,
  Health,
  Shop,
  Headphone,
  Ticket,
  Data,
  ChartSquare,
  Book1,
  Sms,
  Profile2User,
  Award,
  Briefcase,
  TaskSquare,
  Lock,
  Like1,
  Hierarchy,
} from "iconsax-react";
import type { BrandIconName } from "./brand-icons";

export const profile = {
  name: "Mavine Atieno",
  fullName: "Mavine Brenda Atieno",
  title: "Head of Customer Care Representative Agents",
  headline: ["Customer Experience", "Telecommunications", "Public Health Officer"],
  summary:
    "A customer service professional with experience leading customer care representative agents at VTL Telecom Company. Experienced in supporting customer service operations, guiding agents in handling customer inquiries, addressing complaints, maintaining professional communication, and promoting positive customer experiences.",
  location: "Nairobi, Kenya",
  email: "mavineatieno@gmail.com",
  phone: "0717 044 305",
  phoneHref: "tel:+254717044305",
  whatsapp: "https://wa.me/254717044305",
  linkedin: "https://www.linkedin.com/in/mavine-atieno-0306612b7/",
  cv: "/Mavine-Atieno-CV.pdf",
  photo: "/mavine.webp",
  openTo: ["Customer care leadership", "Customer experience", "Telecommunications operations"],
};

export const nav = [
  { id: "about", label: "Profile" },
  { id: "experience", label: "Experience" },
  { id: "competencies", label: "Competencies" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const heroStats = [
  { value: 15, suffix: "", label: "Customer care agents led" },
  { value: 82, suffix: "%", label: "Customer satisfaction score" },
  { value: 70, suffix: "%+", label: "Installations & retention" },
  { value: 1000, suffix: "+", label: "Entrepreneurs trained" },
];

export const organisations = [
  "VTL Telecom Company",
  "World Vision",
  "Tumikia Mtoto DREAMS Program",
  "University of Embu",
  "Karurumo Teaching and Referral Hospital",
  "Kibugu Health Centre",
];

/* ---------------- Professional profile ---------------- */

export const about = {
  paragraphs: [
    "Professional with a Bachelor's Degree in Community Health and experience in NGO programming, entrepreneurship facilitation and administrative customer support in the telecommunications sector. Practical experience in community engagement, entrepreneurship training, client relationship management, business development support and customer complaint resolution.",
    "Proven ability to adhere to service level agreements, meet KPI standards, maintain accurate records, respond effectively to client inquiries and build strong customer relations and satisfaction. Comfortable in fast-paced environments while maintaining professionalism, confidentiality and effective communication with customers and colleagues.",
    "Possesses leadership, communication, problem-solving, and interpersonal skills, with an interest in continuous service improvement, customer relationship management, and team performance. Committed to fostering a customer-focused service culture, supporting agent development, and ensuring that customer concerns are handled professionally, efficiently, and respectfully.",
  ],
  facts: [
    { label: "Location", value: "Nairobi, Kenya" },
    { label: "Current role", value: "VTL Telecom Company" },
    { label: "Education", value: "BSc Community Health" },
    { label: "Team led", value: "15 agents" },
  ],
  attributes: [
    "Excellent written & verbal communication",
    "Empathy & cultural sensitivity",
    "Strong facilitation & presentation skills",
    "Commitment to community development & quality service delivery",
    "Works independently & collaboratively",
    "Professionalism & integrity",
  ],
};

export const objective = [
  "To continue advancing my career in customer experience, customer care leadership, and telecommunications operations by applying my experience leading customer care representative agents, my communication and problem-solving skills, and my Bachelor of Science in Community Health.",
  "I aspire to contribute to an organization that values customer satisfaction, effective team leadership, service quality, operational efficiency, and continuous improvement.",
];

/* ---------------- Competencies ---------------- */

export type Service = { icon: Icon; title: string; text: string };

export const services: Service[] = [
  {
    icon: People,
    title: "Team Leadership and Coordination",
    text: "Guiding customer care agents, coordinating daily responsibilities, encouraging teamwork, and supporting the achievement of customer service objectives.",
  },
  {
    icon: EmojiHappy,
    title: "Customer Experience Management",
    text: "Promoting professional customer interactions, identifying service challenges, and supporting improvements in the overall customer experience.",
  },
  {
    icon: ShieldTick,
    title: "Complaint and Escalation Management",
    text: "Helping agents address difficult customer concerns, reviewing escalated issues, and supporting appropriate solutions.",
  },
  {
    icon: Teacher,
    title: "Agent Coaching and Development",
    text: "Providing guidance and constructive feedback to agents to strengthen communication, customer handling, and service quality.",
  },
  {
    icon: Chart,
    title: "Performance Monitoring",
    text: "Supporting the monitoring of customer service standards, productivity, complaint resolution, and customer feedback.",
  },
  {
    icon: Messages2,
    title: "Communication and Stakeholder Coordination",
    text: "Communicating customer needs and operational concerns clearly to team members, management, and relevant departments.",
  },
];

export const coreCompetencies: { icon: Icon; text: string }[] = [
  { icon: Health, text: "Community health and health promotion" },
  { icon: Shop, text: "Entrepreneurship training and facilitation" },
  { icon: Hierarchy, text: "Community mobilisation and development" },
  { icon: Briefcase, text: "NGO program implementation support" },
  { icon: Headphone, text: "Customer service and client relationship management" },
  { icon: Chart, text: "Small business development support" },
  { icon: Teacher, text: "Training delivery and group certification" },
  { icon: Data, text: "Data collection and record management" },
  { icon: Profile2User, text: "Teamwork and collaboration" },
  { icon: Like1, text: "Client education and empowerment" },
  { icon: Lock, text: "Confidentiality and professional ethics" },
];

/* ---------------- Experience ---------------- */

export type Job = {
  role: string;
  org: string;
  place: string;
  period: string;
  current?: boolean;
  summary?: string;
  groups: { title: string; points: string[] }[];
  wins: string[];
  sites?: { name: string; period: string }[];
};

export const experience: Job[] = [
  {
    role: "Head of Customer Care Representative Agents",
    org: "VTL Telecom Company",
    place: "Nairobi, Kenya",
    period: "May 2024 – Present",
    current: true,
    summary:
      "Responsible for leading and supporting customer care representative agents in delivering professional customer service. The role involves coordinating customer support activities, guiding agents in resolving customer concerns, promoting service quality, and supporting effective communication between customers and the organization.",
    groups: [
      {
        title: "Key responsibilities",
        points: [
          "Lead, guide, and support customer care representative agents in their daily customer service activities.",
          "Monitor customer inquiries and complaints to support timely, professional, and appropriate resolution.",
          "Provide guidance to agents on communication, customer handling, complaint management, and service standards.",
          "Support the consistent delivery of quality customer experiences across relevant customer service channels.",
          "Assist in identifying recurring customer complaints and communicating issues to the relevant departments for follow-up.",
          "Encourage teamwork, accountability, professionalism, and continuous improvement among customer care agents.",
          "Support the management of escalated customer concerns and guide agents on appropriate resolution procedures.",
          "Maintain or oversee customer service records and reports in line with company procedures.",
          "Communicate operational updates, customer feedback, and service challenges to relevant management or departments.",
          "Promote respectful communication, customer confidentiality, and compliance with company policies.",
          "Support the orientation, coaching, and development of agents.",
          "Contribute to improving customer satisfaction, customer retention, and service delivery.",
        ],
      },
      {
        title: "Customer support & administration",
        points: [
          "Serve as the immediate contact point for clients, creating a professional welcome and building client trust in the company.",
          "Coordinate incoming calls, emails, messages and inquiries, ensuring quick resolutions and timely responses.",
          "Manage customer appointments, reservations and walk-in clients while ensuring efficient service delivery.",
          "Work closely with internal staff to ensure smooth communication between departments.",
          "Support daily administrative operations, including preparing personal and team reports and coordinating routine office activities.",
          "Assist with office coordination by monitoring supplies and supporting daily operational requirements.",
          "Use SmartOLT, MikroTik and oneISP to manage customer ONUs, fibre-direct connections and accounts, and the CRM system for ticket creation, escalation and tracking.",
        ],
      },
    ],
    wins: [
      "Grew installations and retention to more than 70%, the highest percentage achieved in the company in the last six years.",
      "Handle the most complicated troubleshooting cases for the team, significantly reducing Service Level Agreement (SLA) times and consistently exceeding Key Performance Indicators (KPIs).",
    ],
  },
  {
    role: "Entrepreneurship Facilitator",
    org: "World Vision – Tumikia Mtoto DREAMS Program",
    place: "Dandora, Nairobi",
    period: "Oct 2021 – May 2023",
    groups: [
      {
        title: "Responsibilities",
        points: [
          "Facilitated entrepreneurship training and capacity-building sessions for community members, aspiring entrepreneurs, and adolescent girls and young women running small businesses.",
          "Supported participants in developing business ideas, preparing business plans and identifying business opportunities for income generation.",
          "Trained participants in basic business management, budgeting, financial literacy, record keeping and marketing.",
          "Collected participant information, maintained program records and prepared activity reports for program monitoring.",
          "Identified participant challenges and referred relevant issues to the appropriate program staff for support.",
        ],
      },
    ],
    wins: [
      "Trained more than 1,000 entrepreneurs within 1 year and 7 months, with over 500 participants going on to start their own small businesses.",
      "Through the organisation's Ajira program, participants received business start-up capital and free Samsung phones to market and advertise their products.",
      "With the training, phones and capital provided, several participants achieved strong profits that led to business expansion.",
    ],
  },
  {
    role: "Community Health Intern (Field Attachment)",
    org: "Community Health Field Attachment",
    place: "Embu, Kenya",
    period: "May 2019 – Aug 2021",
    sites: [
      { name: "Karurumo Teaching and Referral Hospital, Embu", period: "May 2021 – Aug 2021" },
      { name: "Kibugu Health Centre, Embu", period: "May 2019 – Aug 2019" },
    ],
    groups: [
      {
        title: "Responsibilities",
        points: [
          "Supported community health education, community diagnosis and health promotion activities.",
          "Assisted with health-related data collection and documentation.",
          "Promoted disease awareness, sanitation, hygiene and healthy lifestyles.",
          "Observed professional ethics and confidentiality when handling community information.",
        ],
      },
    ],
    wins: [],
  },
];

/* ---------------- Achievements ---------------- */

export const achievements = [
  { value: 15, suffix: "", label: "Agents led", note: "Customer care representative agents" },
  { value: 82, suffix: "%", label: "Customer satisfaction", note: "Customer satisfaction score achieved" },
  { value: 2, suffix: " hrs", label: "Complaint resolution", note: "Improved from 4hrs to 2hrs" },
  { value: 90, suffix: "%", label: "Team performance target", note: "Contributed to achieving" },
  { value: 70, suffix: "%+", label: "Installations & retention", note: "Highest at the company in six years" },
  { value: 1000, suffix: "+", label: "Entrepreneurs trained", note: "Over 500 started their own businesses" },
];

export const achievementList = [
  "Led a team of 15 customer care representative agents.",
  "Contributed to achieving a customer satisfaction score of 82%.",
  "Helped improve complaint resolution time from 4hrs to 2hrs per day.",
  "Supported improvements in call quality, customer feedback and service delivery.",
  "Contributed to achieving 90% of team performance target.",
  "Introduced or supported customer service agents training, adjustment in agents' work schedule and reporting time, and worked through the introduction of a CRM system for ease in ticket creation, escalation and tracking.",
];

export const story = {
  title: "Closing the training gap",
  challenge: "One of the challenges I encountered was a lack of professional training for new recruiters.",
  action: "I managed it by conducting the trainings on my own and also travelling to the other branches to apply the same.",
  result:
    "Working with management, a professional customer service agent trainer was hired, which filled the gap. This led to improved customer interactions and relations, even with new recruiters.",
};

/* ---------------- Telecoms contribution ---------------- */

export const contribution = {
  intro: [
    "In the telecommunications industry, customer satisfaction depends on reliable communication, accurate information, responsive support, and effective complaint handling.",
    "My contribution as a customer care team leader focuses on supporting agents in addressing customer needs, promoting consistent service standards, and helping the team manage customer concerns professionally.",
  ],
  points: [
    "Supporting effective handling of service-related inquiries and complaints.",
    "Guiding agents in communicating service information clearly and accurately.",
    "Encouraging timely follow-up on unresolved customer concerns.",
    "Identifying recurring issues that may affect customer satisfaction.",
    "Promoting professional conduct and customer-focused service delivery.",
    "Supporting collaboration between customer care and other departments.",
    "Encouraging a working environment in which agents can learn, improve, and deliver quality service.",
  ],
};

/* ---------------- Skills & tools ---------------- */

export type SkillItem = { name: string; note: string; brand?: BrandIconName; logo?: string; wordmark?: "oneisp"; icon?: Icon; color?: string };
export type SkillGroup = { title: string; icon: Icon; items: SkillItem[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Telecom & ISP systems",
    icon: Hierarchy,
    items: [
      { name: "SmartOLT", note: "Customer ONU and fibre-direct (FTTH) management", logo: "/tools/smartolt.png" },
      { name: "MikroTik", note: "Router management for customer connectivity", brand: "mikrotik", color: "#293239" },
      { name: "oneISP", note: "ISP customer accounts and operations", wordmark: "oneisp" },
      { name: "CRM system", note: "Ticket creation, escalation and tracking", icon: Ticket, color: "#0F766E" },
    ],
  },
  {
    title: "Office & communication",
    icon: Briefcase,
    items: [
      { name: "Microsoft Word", note: "Reports and documentation", brand: "word" },
      { name: "Microsoft Excel", note: "Records, data entry and tracking", brand: "excel" },
      { name: "Microsoft PowerPoint", note: "Training and presentations", brand: "powerpoint" },
      { name: "Email & digital communication", note: "Client correspondence", brand: "gmail" },
    ],
  },
  {
    title: "Customer service operations",
    icon: Headphone,
    items: [
      { name: "Call centre operations", note: "Incoming calls, emails, messages and inquiries", icon: Headphone, color: "#0F766E" },
      { name: "Complaints & escalations", note: "Troubleshooting within SLA timelines", icon: ShieldTick, color: "#0F766E" },
      { name: "SLA & KPI standards", note: "Service level agreements and team targets", icon: Chart, color: "#0F766E" },
      { name: "Front office", note: "Appointments, reservations and walk-in clients", icon: People, color: "#0F766E" },
    ],
  },
  {
    title: "Data & reporting",
    icon: ChartSquare,
    items: [
      { name: "Data entry & record management", note: "Accurate customer and program records", icon: Data, color: "#0F766E" },
      { name: "Basic data analysis & reporting", note: "Personal and team reports", icon: ChartSquare, color: "#0F766E" },
      { name: "Program monitoring", note: "Activity reports for NGO programs", icon: TaskSquare, color: "#0F766E" },
      { name: "Health data collection", note: "Community health documentation", icon: Health, color: "#0F766E" },
    ],
  },
];

export const skills = [
  "Customer care leadership and team coordination",
  "Customer relationship management",
  "Customer complaint resolution",
  "Call center operations and support",
  "Agent guidance and coaching",
  "Customer experience improvement",
  "Conflict resolution and de-escalation",
  "Professional communication and active listening",
  "Problem-solving and decision-making",
  "Service quality awareness",
  "Customer feedback management",
  "Reporting and documentation",
  "Time management and prioritization",
  "Teamwork and collaboration",
  "Confidentiality and professional ethics",
];

/* ---------------- Leadership approach ---------------- */

export const approachIntro = [
  "My leadership approach is centred on professionalism, accountability, empathy, teamwork, and continuous improvement.",
  "I believe effective customer care leadership requires clear communication, consistent service standards, constructive guidance, and a commitment to understanding customer concerns. I aim to support an environment where agents feel equipped to handle customer inquiries, escalate complex matters appropriately, learn from feedback, and contribute to organizational goals.",
];

export const approach: { icon: Icon; text: string }[] = [
  { icon: Award, text: "Leading by example through professional conduct." },
  { icon: Profile2User, text: "Encouraging accountability and collaboration." },
  { icon: Sms, text: "Promoting respectful and empathetic customer interactions." },
  { icon: Book1, text: "Supporting continuous learning and skills development." },
  { icon: TaskSquare, text: "Using customer feedback to identify opportunities for improvement." },
  { icon: Lock, text: "Maintaining confidentiality and ethical standards." },
];

/* ---------------- Education ---------------- */

export const education = {
  degree: "Bachelor of Science in Community Health",
  school: "University of Embu",
  year: "2021",
  icon: Book1,
  coursework: [
    "Community health assessment and health promotion",
    "Epidemiology and public health principles",
    "Environmental and occupational health",
    "Health education and community mobilisation",
    "Research methods and data collection",
    "Monitoring and evaluation of health programs",
    "Disease prevention and control",
  ],
  relevance: [
    "My academic background in Community Health has provided a foundation relevant to understanding people, communicating information, engaging with diverse communities, and approaching individual needs with professionalism and empathy.",
    "These competencies are valuable in customer care leadership, particularly when handling sensitive concerns, communicating with customers from different backgrounds, supporting constructive interactions, and promoting respectful service delivery.",
  ],
  transferable: [
    "Effective interpersonal communication",
    "Community and stakeholder engagement",
    "Understanding diverse needs and perspectives",
    "Health communication and information delivery",
    "Problem-solving and critical thinking",
    "Ethical conduct and confidentiality",
    "Teamwork and collaboration",
  ],
};

/* ---------------- Referees & declaration ---------------- */

export const referees = [
  { name: "Miss Damaris Kirai", title: "Administrator", org: "VTL Telecom Company", place: "Nairobi, Kenya", phone: "0768 000 429" },
  { name: "Mr Collins Asweto", title: "Head of Public Health Department", org: "University of Embu", place: "Embu, Kenya", phone: "0700 713 392" },
  { name: "Miss Mary Wanjala", title: "Public Health Officer", org: "Karurumo Rural Health Training Centre, Embu", place: "Nairobi, Kenya", phone: "0100 764 640" },
  { name: "Mr Felix Onyango", title: "Ward Coordinator", org: "DREAMS / USAID Tumikia Mtoto Program", place: "Migori, Kenya", phone: "+254 704 309 010" },
];

export const declaration =
  "I confirm that the information provided in this portfolio accurately reflects my qualifications, professional experience, and capabilities.";
