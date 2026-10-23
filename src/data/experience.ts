export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  badge?: string;
  highlights: string[];
}

export const statsData = [
  { value: "17", label: "LMS Functional Modules" },
  { value: "10,000", label: "Molecules per Screening Run" },
  { value: "90+", label: "LeetCode Problems Solved" },
  { value: "3", label: "Colleges on Career Upskill Hub" }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Full Stack Web Development Intern",
    organization: "Prime Vector (A Division of Nidvex Technology Pvt. Ltd.)",
    period: "Jul 2026 – Present",
    location: "Bengaluru, India",
    badge: "Current",
    highlights: [
      "Developing an Online Learning Management System spanning 17 functional modules, including authentication, course management, enrollment, assessments, progress tracking, dashboards, and administration.",
      "Building frontend, backend APIs, and database integration to support student, instructor, and administrator workflows.",
      "Implementing course search, filtering, interactive quizzes, and learning-material management."
    ]
  },
  {
    role: "FlutterFlow App Design Intern",
    organization: "NextSkill Pvt. Ltd",
    period: "Dec 2025 – Dec 2025",
    location: "Coimbatore, India",
    highlights: [
      "Designed mobile UI/UX using FlutterFlow, gaining hands-on experience in rapid prototyping and accelerating application development from prototype to deployment."
    ]
  },
  {
    role: "Hackathon Team Member — ADMET Intelligence Platform",
    organization: "TENSOR ’26 Hackathon (SRM College)",
    period: "2026 · 24-Hour Hackathon",
    location: "Trichy, India",
    badge: "Hackathon",
    highlights: [
      "Contributed to the development of an ADMET intelligence platform for molecular drug screening.",
      "Developed a GNN-based drug screening pipeline predicting ADMET properties directly from SMILES input, supporting up to 10,000 molecules per screening run.",
      "Integrated Explainable AI (XAI) atom-level heatmaps and Lipinski’s Rule of Five scoring to provide interpretable screening insights.",
      "Contributed to an exportable workflow for analyzing and presenting model predictions."
    ]
  }
];

export const educationData = {
  degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
  institution: "Undergraduate Degree",
  period: "Ongoing",
  description:
    "Core coursework in Data Structures and Algorithms, Object-Oriented Programming (Java), Database Management Systems (SQL), Operating Systems, and Software Engineering."
};
