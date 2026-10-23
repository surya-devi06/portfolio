import React from "react";
import { motion } from "framer-motion";
import { Github, LinkedIn, LeetCodeIcon, InstagramIcon } from "../components/AllSvgs";
import { siteConfig } from "../data/site";

interface SocialIconsProps {
  theme?: "dark" | "light";
}

const SocialIcons: React.FC<SocialIconsProps> = ({ theme = "light" }) => {
  const isContrast = theme === "dark";
  const iconColor = isContrast ? "#FFFFFF" : "#0284C7";
  const lineColor = isContrast ? "#FFFFFF" : "#BAE6FD";

  return (
    <div className="flex flex-col items-center fixed bottom-0 left-4 md:left-8 z-30 space-y-2 md:space-y-3">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
        whileHover={{ scale: 1.25 }}
      >
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="me noopener noreferrer"
          aria-label="Surya Devi LinkedIn"
          className="block transition-colors duration-200 hover:text-[#38BDF8] focus:outline-none"
        >
          <LinkedIn width={24} height={24} fill={iconColor} />
        </a>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.1 }}
        whileHover={{ scale: 1.25 }}
      >
        <a
          href={siteConfig.github}
          target="_blank"
          rel="me noopener noreferrer"
          aria-label="Surya Devi GitHub"
          className="block transition-colors duration-200 hover:text-[#38BDF8] focus:outline-none"
        >
          <Github width={24} height={24} fill={iconColor} />
        </a>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
        whileHover={{ scale: 1.25 }}
      >
        <a
          href={siteConfig.leetcode}
          target="_blank"
          rel="me noopener noreferrer"
          aria-label="Surya Devi LeetCode Profile"
          className="block transition-colors duration-200 hover:text-[#38BDF8] focus:outline-none"
        >
          <LeetCodeIcon width={24} height={24} fill={iconColor} />
        </a>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.3 }}
        whileHover={{ scale: 1.25 }}
      >
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="me noopener noreferrer"
          aria-label="Surya Devi Instagram Content"
          className="block transition-colors duration-200 hover:text-[#38BDF8] focus:outline-none"
        >
          <InstagramIcon width={24} height={24} fill={iconColor} />
        </a>
      </motion.div>

      <motion.span
        initial={{ height: 0 }}
        animate={{ height: "6rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
        className="w-[2px] block"
        style={{
          backgroundColor: lineColor
        }}
      />
    </div>
  );
};

export default SocialIcons;
