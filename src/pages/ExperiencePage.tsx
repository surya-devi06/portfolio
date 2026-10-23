import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import SoundBar from "../subComponents/SoundBar";
import { statsData, experienceData, educationData } from "../data/experience";
import { siteConfig } from "../data/site";

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.7 }
  }
};

const ExperiencePage: React.FC = () => {
  useEffect(() => {
    document.title = `Experience | ${siteConfig.name}`;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen w-screen bg-[#F0F9FF] text-[#0F172A] select-none py-28 px-4 md:px-0 overflow-x-hidden font-ubuntu"
    >
      <LogoComponent theme="light" />
      <PowerButton />
      <SoundBar theme="light" />
      <SocialIcons theme="light" />
      <ParticleComponent theme="light" />

      {/* Background Watermark Title */}
      <div
        className="w-[90vw] md:w-[50vw] mx-auto text-[calc(3rem+5vw)] font-karla font-extrabold leading-none text-[#38BDF8]/15 mb-6 select-none pointer-events-none"
        aria-hidden="true"
      >
        WORK
      </div>

      {/* Stack of Experience Cards */}
      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="show"
        className="w-[90vw] md:w-[50vw] mx-auto flex flex-col gap-6 relative z-20"
      >
        {/* Intro Summary Card */}
        <motion.article
          variants={itemVariants}
          className="border-2 border-[#BAE6FD] p-6 md:p-8 backdrop-blur-md bg-white/95 text-sm md:text-base leading-relaxed rounded-xl shadow-[0_8px_30px_rgba(56,189,248,0.1)] transition-all duration-300 hover:border-[#38BDF8] hover:shadow-[0_12px_35px_rgba(56,189,248,0.2)] group"
        >
          <h2 className="not-italic font-karla font-bold text-xl md:text-2xl mb-2 text-[#0284C7]">
            {siteConfig.name}
          </h2>
          <p className="text-[#334155] leading-relaxed">
            {siteConfig.role}. Dedicated to developing software solutions that solve practical challenges, mastering core full-stack web architecture, and systematically training in Data Structures & Algorithms.
          </p>
        </motion.article>

        {/* What I Work On */}
        <motion.article
          variants={itemVariants}
          className="border-2 border-[#BAE6FD] p-6 md:p-8 backdrop-blur-md bg-white/95 text-sm md:text-base leading-relaxed rounded-xl shadow-[0_8px_30px_rgba(56,189,248,0.1)] transition-all duration-300 hover:border-[#38BDF8] hover:shadow-[0_12px_35px_rgba(56,189,248,0.2)] group"
        >
          <h2 className="not-italic font-karla font-bold text-lg md:text-xl mb-2 text-[#0284C7]">
            What I work on
          </h2>
          <p className="text-[#334155] leading-relaxed">
            Full-stack web applications with React, Spring Boot, and MySQL; desktop speech recognition utilities with Python & Faster-Whisper; mobile UI prototyping in FlutterFlow; GNN-based drug discovery screening tools; and digital content creation (@cart.bag).
          </p>
        </motion.article>

        {/* Quantified Milestones Grid */}
        <motion.article
          variants={itemVariants}
          className="border-2 border-[#BAE6FD] p-6 md:p-8 backdrop-blur-md bg-white/95 text-sm md:text-base leading-relaxed rounded-xl shadow-[0_8px_30px_rgba(56,189,248,0.1)] transition-all duration-300 hover:border-[#38BDF8] hover:shadow-[0_12px_35px_rgba(56,189,248,0.2)] group"
        >
          <h2 className="not-italic font-karla font-bold text-lg md:text-xl mb-4 text-[#0284C7]">
            Milestones & Practice
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-italic">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="border border-[#BAE6FD] p-3.5 rounded-lg bg-[#F0F9FF] transition-all hover:bg-[#E0F2FE]"
              >
                <span className="block text-2xl md:text-3xl font-karla font-extrabold text-[#0284C7]">
                  {stat.value}
                </span>
                <span className="text-xs uppercase font-karla font-semibold tracking-wider text-[#475569]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.article>

        {/* Experience Items */}
        {experienceData.map((item, idx) => (
          <motion.article
            key={idx}
            variants={itemVariants}
            className="border-2 border-[#BAE6FD] p-6 md:p-8 backdrop-blur-md bg-white/95 text-sm md:text-base leading-relaxed rounded-xl shadow-[0_8px_30px_rgba(56,189,248,0.1)] transition-all duration-300 hover:border-[#38BDF8] hover:shadow-[0_12px_35px_rgba(56,189,248,0.2)] group"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h2 className="not-italic font-karla font-bold text-lg md:text-xl text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                {item.role}
              </h2>
              {item.badge && (
                <span className="not-italic text-xs font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]">
                  {item.badge}
                </span>
              )}
            </div>
            <p className="not-italic font-karla font-semibold text-sm mb-1 text-[#0284C7]">
              {item.organization}
            </p>
            <p className="text-xs font-mono text-[#64748B] mb-4 not-italic">
              {item.period} · {item.location}
            </p>
            <ul className="list-disc ml-5 space-y-2 text-[#334155] text-sm">
              {item.highlights.map((point, pIdx) => (
                <li key={pIdx} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}

        {/* Education */}
        <motion.article
          variants={itemVariants}
          className="border-2 border-[#BAE6FD] p-6 md:p-8 backdrop-blur-md bg-white/95 text-sm md:text-base leading-relaxed rounded-xl shadow-[0_8px_30px_rgba(56,189,248,0.1)] transition-all duration-300 hover:border-[#38BDF8] hover:shadow-[0_12px_35px_rgba(56,189,248,0.2)] group"
        >
          <h2 className="not-italic font-karla font-bold text-lg md:text-xl mb-2 text-[#0284C7]">
            Education
          </h2>
          <p className="not-italic font-karla font-semibold text-[#0F172A]">
            {educationData.degree}
          </p>
          <p className="text-xs font-mono text-[#64748B] mb-2 not-italic">
            {educationData.institution} · {educationData.period}
          </p>
          <p className="text-[#334155] text-sm">
            {educationData.description}
          </p>
        </motion.article>

        {/* Quick Links */}
        <motion.article
          variants={itemVariants}
          className="border-2 border-[#BAE6FD] p-6 backdrop-blur-md bg-white/95 not-italic font-karla rounded-xl flex flex-wrap justify-between items-center gap-4 text-sm shadow-md"
        >
          <span className="text-[#475569] font-bold">Navigate to:</span>
          <div className="flex flex-wrap gap-4 font-semibold">
            <NavLink to="/work" className="text-[#0284C7] hover:text-[#38BDF8] underline">
              Projects ➜
            </NavLink>
            <NavLink to="/skills" className="text-[#0284C7] hover:text-[#38BDF8] underline">
              My Skills ➜
            </NavLink>
            <NavLink to="/feats" className="text-[#0284C7] hover:text-[#38BDF8] underline">
              Feats ➜
            </NavLink>
            <NavLink to="/contact" className="text-[#0284C7] hover:text-[#38BDF8] underline">
              Say Hi ➜
            </NavLink>
          </div>
        </motion.article>
      </motion.div>
    </motion.div>
  );
};

export default ExperiencePage;
