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
      className="relative min-h-screen w-screen bg-black text-[#FCF6F4] select-none py-28 px-4 md:px-0 overflow-x-hidden font-ubuntu"
    >
      <LogoComponent theme="dark" />
      <PowerButton />
      <SoundBar theme="dark" />
      <SocialIcons theme="dark" />
      <ParticleComponent theme="dark" />

      {/* Background Watermark Title */}
      <div
        className="w-[90vw] md:w-[50vw] mx-auto text-[calc(3rem+5vw)] font-karla font-extrabold leading-none text-[#FCF6F4]/15 mb-6 select-none pointer-events-none"
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
          className="border-2 border-[#FCF6F4] p-6 md:p-8 backdrop-blur-md bg-black/30 italic text-sm md:text-base leading-relaxed rounded-sm transition-all duration-300 hover:bg-[#FCF6F4] hover:text-black group shadow-xl"
        >
          <h2 className="not-italic font-karla font-bold text-xl md:text-2xl mb-2 text-white group-hover:text-black">
            {siteConfig.name}
          </h2>
          <p className="opacity-90">
            {siteConfig.role}. Dedicated to developing software solutions that solve practical challenges, mastering core full-stack web architecture, and systematically training in Data Structures & Algorithms.
          </p>
        </motion.article>

        {/* What I Work On */}
        <motion.article
          variants={itemVariants}
          className="border-2 border-[#FCF6F4] p-6 md:p-8 backdrop-blur-md bg-black/30 italic text-sm md:text-base leading-relaxed rounded-sm transition-all duration-300 hover:bg-[#FCF6F4] hover:text-black group shadow-xl"
        >
          <h2 className="not-italic font-karla font-bold text-lg md:text-xl mb-2 text-white group-hover:text-black">
            What I work on
          </h2>
          <p className="opacity-90">
            Full-stack web applications with React, Spring Boot, and MySQL; desktop speech recognition utilities with Python & Faster-Whisper; mobile UI prototyping in FlutterFlow; GNN-based drug discovery screening tools; and digital content creation (@cart.bag).
          </p>
        </motion.article>

        {/* Quantified Milestones Grid */}
        <motion.article
          variants={itemVariants}
          className="border-2 border-[#FCF6F4] p-6 md:p-8 backdrop-blur-md bg-black/30 italic text-sm md:text-base leading-relaxed rounded-sm transition-all duration-300 hover:bg-[#FCF6F4] hover:text-black group shadow-xl"
        >
          <h2 className="not-italic font-karla font-bold text-lg md:text-xl mb-4 text-white group-hover:text-black">
            Milestones & Practice
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-italic">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="border border-[#FCF6F4]/30 group-hover:border-black/30 p-3 rounded bg-white/5 group-hover:bg-black/5"
              >
                <span className="block text-2xl md:text-3xl font-karla font-extrabold text-white group-hover:text-black">
                  {stat.value}
                </span>
                <span className="text-xs uppercase font-karla tracking-wider opacity-80">
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
            className="border-2 border-[#FCF6F4] p-6 md:p-8 backdrop-blur-md bg-black/30 italic text-sm md:text-base leading-relaxed rounded-sm transition-all duration-300 hover:bg-[#FCF6F4] hover:text-black group shadow-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h2 className="not-italic font-karla font-bold text-lg md:text-xl text-white group-hover:text-black">
                {item.role}
              </h2>
              {item.badge && (
                <span className="not-italic text-xs font-mono uppercase px-2 py-0.5 rounded border border-[#FCF6F4] group-hover:border-black group-hover:bg-black group-hover:text-[#FCF6F4]">
                  {item.badge}
                </span>
              )}
            </div>
            <p className="not-italic font-karla font-semibold text-sm opacity-90 mb-1 text-neutral-300 group-hover:text-neutral-800">
              {item.organization}
            </p>
            <p className="text-xs font-mono opacity-70 mb-4 not-italic">
              {item.period} · {item.location}
            </p>
            <ul className="list-disc ml-5 space-y-2 opacity-90 text-sm">
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
          className="border-2 border-[#FCF6F4] p-6 md:p-8 backdrop-blur-md bg-black/30 italic text-sm md:text-base leading-relaxed rounded-sm transition-all duration-300 hover:bg-[#FCF6F4] hover:text-black group shadow-xl"
        >
          <h2 className="not-italic font-karla font-bold text-lg md:text-xl mb-2 text-white group-hover:text-black">
            Education
          </h2>
          <p className="not-italic font-karla font-semibold text-neutral-200 group-hover:text-neutral-800">
            {educationData.degree}
          </p>
          <p className="text-xs font-mono opacity-70 mb-2 not-italic">
            {educationData.institution} · {educationData.period}
          </p>
          <p className="opacity-90 text-sm">
            {educationData.description}
          </p>
        </motion.article>

        {/* Quick Links */}
        <motion.article
          variants={itemVariants}
          className="border-2 border-[#FCF6F4] p-6 backdrop-blur-md bg-black/30 not-italic font-karla rounded-sm flex flex-wrap justify-between items-center gap-4 text-sm"
        >
          <span className="text-neutral-300 font-semibold">Navigate to:</span>
          <div className="flex flex-wrap gap-4">
            <NavLink to="/work" className="underline hover:text-white">
              Projects ➜
            </NavLink>
            <NavLink to="/skills" className="underline hover:text-white">
              My Skills ➜
            </NavLink>
            <NavLink to="/feats" className="underline hover:text-white">
              Feats ➜
            </NavLink>
            <NavLink to="/contact" className="underline hover:text-white">
              Say Hi ➜
            </NavLink>
          </div>
        </motion.article>
      </motion.div>
    </motion.div>
  );
};

export default ExperiencePage;
