export interface SocialLink {
  id: string;
  name: string;
  url: string;
  label: string;
}

export const siteConfig = {
  name: "Surya Devi",
  initials: "SD",
  headline: "Building useful things with code, curiosity, and creativity.",
  subheadline:
    "I'm a Computer Science Engineering student interested in software development, problem-solving, and building practical digital products.",
  role: "Computer Science Engineering Student | Full Stack Developer | Java & DSA Learner | Content Creator",
  email: "suryadevi0607@gmail.com",
  location: "India",
  resumeUrl:
    "https://drive.google.com/file/d/1_RoPrwvdrRTfe0p3JLah5v-hOrzHRLWz/view?usp=drive_link",
  github: "https://github.com/surya-devi06",
  linkedin: "https://www.linkedin.com/in/surya-devi007/",
  leetcode: "https://leetcode.com/u/surya-devi/",
  instagram: "https://www.instagram.com/cart.bag/",
  
  aboutMe: {
    p1: "I am a Computer Science Engineering undergraduate passionate about practical software engineering, clean architecture, and systematic problem solving.",
    p2: "My core technical interests lie in Java programming, Full Stack Web Development (Spring Boot, React, MySQL), and mastering Data Structures & Algorithms. I have actively practiced and solved 90+ algorithmic problems on LeetCode focusing on fundamental patterns like two pointers, sliding window, binary search, trees, and linked lists.",
    p3: "Through hands-on internships and hackathons, I have built real-world software—including a 17-module Learning Management System during my Full Stack Web Development internship at Prime Vector (A Division of Nidvex Technology Pvt. Ltd.), an interactive GNN-based drug screening platform (ADMET) at the TENSOR '26 Hackathon capable of screening up to 10,000 molecules per run, and a multi-campus career upskilling portal.",
    p4: "Beyond traditional code, I create and curate digital content (@cart.bag), bringing creative storytelling, visual editing, and product empathy into every engineering solution I build."
  },

  socials: [
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/surya-devi007/",
      label: "LinkedIn Profile"
    },
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/surya-devi06",
      label: "GitHub Profile"
    },
    {
      id: "leetcode",
      name: "LeetCode",
      url: "https://leetcode.com/u/surya-devi/",
      label: "LeetCode Profile"
    },
    {
      id: "instagram",
      name: "Instagram",
      url: "https://www.instagram.com/cart.bag/",
      label: "Digital Content Presence"
    }
  ]
};
