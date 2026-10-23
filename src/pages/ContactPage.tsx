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
      className="relative min-h-screen w-screen bg-[#F0F9FF] text-[#0F172A] select-none py-24 md:py-28 px-6 overflow-x-hidden font-ubuntu"
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
        color="rgba(56, 189, 248, 0.12)"
      />

      <div className="max-w-4xl mx-auto relative z-20">
        <div className="mb-10 text-center md:text-left">
          <h1 className="font-karla font-extrabold text-3xl md:text-5xl tracking-tight mb-3 text-[#0F172A]">
            Get In Touch
          </h1>
          <p className="font-source text-[#475569] text-sm md:text-base max-w-xl">
            {siteConfig.name} is currently open to full-stack engineering internships, software collaboration, and open-source projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Direct channels card */}
          <div className="border-2 border-[#BAE6FD] p-6 md:p-8 bg-[#FFFFFF] rounded-xl space-y-6 shadow-[0_8px_30px_rgba(56,189,248,0.1)]">
            <h2 className="font-karla font-bold text-xl border-b border-[#BAE6FD] pb-2 text-[#0284C7]">
              Direct Channels
            </h2>

            <ul className="space-y-4 text-sm md:text-base">
              <li>
                <span className="block text-xs uppercase font-karla font-bold text-[#64748B]">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-bold text-[#0F172A] hover:text-[#0284C7] underline transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>

              <li>
                <span className="block text-xs uppercase font-karla font-bold text-[#64748B]">
                  LinkedIn
                </span>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0284C7] hover:text-[#38BDF8] underline transition-colors"
                >
                  linkedin.com/in/surya-devi007
                </a>
              </li>

              <li>
                <span className="block text-xs uppercase font-karla font-bold text-[#64748B]">
                  GitHub
                </span>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0284C7] hover:text-[#38BDF8] underline transition-colors"
                >
                  github.com/surya-devi06
                </a>
              </li>

              <li>
                <span className="block text-xs uppercase font-karla font-bold text-[#64748B]">
                  LeetCode
                </span>
                <a
                  href={siteConfig.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0284C7] hover:text-[#38BDF8] underline transition-colors"
                >
                  leetcode.com/u/surya-devi
                </a>
              </li>

              <li>
                <span className="block text-xs uppercase font-karla font-bold text-[#64748B]">
                  Digital Media
                </span>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0284C7] hover:text-[#38BDF8] underline transition-colors"
                >
                  instagram.com/cart.bag
                </a>
              </li>

              <li>
                <span className="block text-xs uppercase font-karla font-bold text-[#64748B]">
                  Resume
                </span>
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 font-karla font-bold text-xs uppercase tracking-wider px-4 py-2 bg-[#38BDF8] text-[#FFFFFF] rounded-md hover:bg-[#0284C7] transition-all shadow-md hover:shadow-lg"
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
