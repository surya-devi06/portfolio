export interface Project {
  id: number;
  name: string;
  description: string;
  problem: string;
  tags: string[];
  demo?: string;
  github?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: "Live Transcript",
    description:
      "A desktop & web transcription system engineered to capture spoken dialogue directly from playing media (videos, streams, meetings) and produce searchable, editable text.",
    problem:
      "Extracting text from videos and podcasts manually is slow. Built a private desktop workflow using Faster-Whisper and WASAPI audio loopback.",
    tags: ["Python", "Faster-Whisper", "PySide6", "SoundCard", "React", "Tailwind"],
    demo: "https://live-transcript-anything-i-m-watchi-lyart.vercel.app/",
    github: "https://github.com/surya-devi06/LIVE-TRANSCRIPT-ANYTHING-I-M-WATCHING"
  },
  {
    id: 2,
    name: "ADMET Intelligence Platform",
    description:
      "GNN-based drug screening platform predicting Absorption, Distribution, Metabolism, Excretion, and Toxicity properties directly from SMILES molecular notation.",
    problem:
      "Developed at TENSOR '26 24-hr Hackathon (SRM College). Screen up to 10,000 molecules per run with Explainable AI heatmaps and Lipinski scoring.",
    tags: ["Next.js", "PyTorch Geometric", "RDKit", "Python", "Tailwind", "GNN"],
    demo: "https://tr-034-team-turbo1.vercel.app/",
    github: "https://github.com/surya-devi06"
  },
  {
    id: 3,
    name: "Career Upskilling Platform",
    description:
      "A multi-campus career development and student readiness hub designed to guide undergraduates with curated roadmaps, tracks, and web security modules.",
    problem:
      "Centralizes semester-by-semester roadmaps for 3 institutions and 9+ programmes with dedicated Java, Flutter, and AI tracks.",
    tags: ["React", "JavaScript", "Responsive Design", "Vercel", "Web Security"],
    demo: "https://career-upskill.vercel.app/",
    github: "https://github.com/surya-devi06/career-upskill-mod1"
  },
  {
    id: 4,
    name: "Career Upskill Web Security",
    description:
      "An advanced security module for the upskilling platform providing vulnerability testing, authentication guidelines, and secure development workflows.",
    problem:
      "Provides hands-on security awareness and best practices for junior developers navigating web application security.",
    tags: ["React", "Security", "Web Architecture", "Vercel"],
    demo: "https://complete-upskill-web-sec.vercel.app/",
    github: "https://github.com/surya-devi06/complete-upskill-web-SEC-mod2"
  },
  {
    id: 5,
    name: "Legacy Vault — Asset Recovery",
    description:
      "Structured tracking and management system to organize, archive, and retrieve misplaced assets through systematized records.",
    problem:
      "Designed a clean data store for asset information so recovery is faster, verifiable, and free of chaotic manual records.",
    tags: ["Java", "Maven", "Travis CI", "Git", "REST APIs"],
    demo: "https://asset-recovery-system.vercel.app/",
    github: "https://github.com/surya-devi06"
  },
  {
    id: 6,
    name: "Inflation Expense Tracker",
    description:
      "Real-time expense monitoring dashboard that juxtaposes everyday spending habits with inflation metrics to maintain financial visibility.",
    problem:
      "Enables continuous financial transparency by visualizing purchasing power and categorical expense shifts over time.",
    tags: ["React", "JavaScript", "Vercel", "Finance"],
    demo: "https://inflation-expense-tracker.vercel.app/",
    github: "https://github.com/surya-devi06"
  }
];
