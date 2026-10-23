import React, { useEffect } from "react";
import { motion } from "framer-motion";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import SoundBar from "../subComponents/SoundBar";
import ContactForm from "../components/ContactForm";
import { siteConfig } from "../data/site";

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = `Contact | ${siteConfig.name}`;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen w-screen bg-[#FCF6F4] text-black select-none py-24 md:py-28 px-6 overflow-x-hidden font-ubuntu"
    >
      <LogoComponent theme="light" />
      <PowerButton />
      <SoundBar theme="light" />
      <SocialIcons theme="light" />
      <ParticleComponent theme="light" />

      {/* Watermark Title */}
      <BigTitle
        text="HELLO"
        top="5rem"
        left="5rem"
        color="rgba(0, 0, 0, 0.08)"
      />

      <div className="max-w-4xl mx-auto relative z-20">
        <div className="mb-10 text-center md:text-left">
          <h1 className="font-karla font-extrabold text-3xl md:text-5xl tracking-tight mb-3">
            Get In Touch
          </h1>
          <p className="font-source text-neutral-700 text-sm md:text-base max-w-xl">
            {siteConfig.name} is currently open to full-stack engineering internships, software collaboration, and open-source projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Direct channels */}
          <div className="border-2 border-black p-6 md:p-8 bg-[#FCF6F4]/70 backdrop-blur-sm rounded-sm space-y-6 shadow-lg">
            <h2 className="font-karla font-bold text-xl border-b border-black/20 pb-2">
              Direct Channels
            </h2>

            <ul className="space-y-4 text-sm md:text-base">
              <li>
                <span className="block text-xs uppercase font-karla font-bold opacity-60">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-bold underline hover:opacity-75 transition-opacity"
                >
                  {siteConfig.email}
                </a>
              </li>

              <li>
                <span className="block text-xs uppercase font-karla font-bold opacity-60">
                  LinkedIn
                </span>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75 transition-opacity"
                >
                  linkedin.com/in/surya-devi007
                </a>
              </li>

              <li>
                <span className="block text-xs uppercase font-karla font-bold opacity-60">
                  GitHub
                </span>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75 transition-opacity"
                >
                  github.com/surya-devi06
                </a>
              </li>

              <li>
                <span className="block text-xs uppercase font-karla font-bold opacity-60">
                  LeetCode
                </span>
                <a
                  href={siteConfig.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75 transition-opacity"
                >
                  leetcode.com/u/surya-devi
                </a>
              </li>

              <li>
                <span className="block text-xs uppercase font-karla font-bold opacity-60">
                  Digital Media
                </span>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75 transition-opacity"
                >
                  instagram.com/cart.bag
                </a>
              </li>

              <li>
                <span className="block text-xs uppercase font-karla font-bold opacity-60">
                  Resume
                </span>
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 font-karla font-semibold text-xs uppercase tracking-wider px-3 py-1 bg-black text-[#FCF6F4] rounded hover:bg-neutral-800 transition-colors"
                >
                  View Resume (Google Drive) ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive Validated Form */}
          <ContactForm theme="light" />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
