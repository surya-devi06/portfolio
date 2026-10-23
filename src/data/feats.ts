export interface FeatItem {
  id: number;
  name: string;
  tags: string[];
  date: string;
  link: string;
  internal?: boolean;
  summary: string;
  category: string;
}

export const featsData: FeatItem[] = [
  {
    id: 1,
    name: "LeetCode 90+ Solved in Java",
    tags: ["DSA", "Java", "ProblemSolving"],
    date: "Active Practice",
    link: "https://leetcode.com/u/surya-devi/",
    category: "Algorithm",
    summary:
      "Consistent practice mastering data structures (arrays, trees, linked lists, hash maps) and key algorithmic patterns (two pointers, sliding window, binary search, DFS)."
  },
  {
    id: 2,
    name: "ADMET Intelligence Platform — TENSOR ’26",
    tags: ["Hackathon", "GNN", "AI", "SMILES"],
    date: "TENSOR ’26 Hackathon",
    link: "https://tr-034-team-turbo1.vercel.app/",
    category: "Hackathon",
    summary:
      "24-Hour hackathon at SRM College, Trichy. Graph Neural Network molecular screening tool processing up to 10,000 molecules with XAI interpretability heatmaps."
  },
  {
    id: 3,
    name: "Live Transcript — Whisper Desktop & Web",
    tags: ["SpeechToText", "FasterWhisper", "PySide6"],
    date: "Recent Build",
    link: "https://live-transcript-anything-i-m-watchi-lyart.vercel.app/",
    category: "Software",
    summary:
      "Real-time loopback speech recognition desktop application and web companion for transcribing audio from media, tutorials, and meetings directly into editable text."
  },
  {
    id: 4,
    name: "College Career Upskilling Platform",
    tags: ["FullStack", "React", "Education"],
    date: "Multi-Campus Project",
    link: "https://career-upskill.vercel.app/",
    category: "Platform",
    summary:
      "A career roadmap and resource portal serving 3 institutions and 9+ programmes with semester-wise skill tracks across 8 semesters and interactive web security drills."
  },
  {
    id: 5,
    name: "Digital Media & Content — @cart.bag",
    tags: ["ContentCreation", "Media", "VideoEditing"],
    date: "Ongoing",
    link: "https://www.instagram.com/cart.bag/",
    category: "Creative",
    summary:
      "Digital presence and content creation space where storytelling, video editing, and visual communication meet modern online audiences."
  },
  {
    id: 6,
    name: "Full Stack Internship — Prime Vector LMS",
    tags: ["SpringBoot", "React", "MySQL"],
    date: "Jul 2026 – Present",
    link: "/experience",
    internal: true,
    category: "Internship",
    summary:
      "Engineering a comprehensive Learning Management System across 17 functional modules covering user auth, course management, quizzes, and role-based portals."
  }
];
