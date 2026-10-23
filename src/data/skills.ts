export interface SkillGroup {
  title: string;
  blurb: string;
  items: {
    label: string;
    skills: string[];
  }[];
}

export const skillsData = {
  software: {
    title: "Software Developer",
    blurb: "I enjoy writing clean code, building backend systems, and solving problems systematically.",
    items: [
      {
        label: "Programming Languages",
        skills: ["Java", "Python", "JavaScript"]
      },
      {
        label: "Backend & Architecture",
        skills: ["Spring Boot", "REST APIs", "Microservices Concepts"]
      },
      {
        label: "Databases",
        skills: ["MySQL", "SQL Queries & Schemas"]
      },
      {
        label: "Problem Solving & DSA",
        skills: ["Data Structures & Algorithms", "90+ Solved on LeetCode"]
      }
    ]
  },
  frontend: {
    title: "Frontend & Creative",
    blurb: "It's fun for me to bring new concepts to life, combining functional interfaces with creative presentation.",
    items: [
      {
        label: "Frontend Technologies",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS"]
      },
      {
        label: "Developer Tools",
        skills: ["Git", "GitHub", "VS Code", "Cursor", "Postman", "Vercel"]
      },
      {
        label: "Prototyping & Auth",
        skills: ["FlutterFlow (Mobile UI/UX)", "Firebase Authentication"]
      },
      {
        label: "Digital Content & Creative",
        skills: ["Video Editing", "Content Creation", "Visual Storytelling (@cart.bag)"]
      }
    ]
  }
};
