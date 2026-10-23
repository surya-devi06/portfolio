import React, { useEffect } from "react";
import { motion } from "framer-motion";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import SoundBar from "../subComponents/SoundBar";
import { Develope, Design } from "../components/AllSvgs";
import { skillsData } from "../data/skills";
import { siteConfig } from "../data/site";

const MySkillsPage: React.FC = () => {
  useEffect(() => {
    document.title = `Skills | ${siteConfig.name}`;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen w-screen bg-[#F0F9FF] text-[#0F172A] overflow-x-hidden flex flex-col md:flex-row justify-evenly items-center py-24 md:py-0 px-6 gap-8 select-none"
    >
      <LogoComponent theme="light" />
      <PowerButton />
      <SoundBar theme="light" />
      <SocialIcons theme="light" />
      <ParticleComponent theme="light" />

      {/* Card 1: Software Developer */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.4 }}
        className="w-[88vw] md:w-[33vw] min-h-[58vh] border-2 border-[#BAE6FD] p-6 md:p-8 rounded-xl bg-white/95 backdrop-blur-sm z-20 font-ubuntu flex flex-col justify-between transition-all duration-300 hover:border-[#38BDF8] hover:shadow-[0_12px_35px_rgba(56,189,248,0.2)] group shadow-[0_8px_25px_rgba(56,189,248,0.08)]"
      >
        <div>
          <h2 className="flex items-center text-xl md:text-2xl font-karla font-bold mb-4 text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
            <span className="mr-3 text-[#0284C7] group-hover:text-[#38BDF8] transition-colors">
              <Develope width={36} height={36} fill="currentColor" />
            </span>
            {skillsData.software.title}
          </h2>

          <p className="text-sm md:text-base mb-6 text-[#475569] leading-relaxed font-sans">
            {skillsData.software.blurb}
          </p>

          <div className="space-y-4">
            {skillsData.software.items.map((grp) => (
              <div key={grp.label} className="text-sm">
                <strong className="block text-xs uppercase tracking-wider font-karla font-bold text-[#0284C7] mb-1.5">
                  {grp.label}
                </strong>
                <div className="flex flex-wrap gap-1.5 ml-1">
                  {grp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Card 2: Frontend & Creative */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.6 }}
        className="w-[88vw] md:w-[33vw] min-h-[58vh] border-2 border-[#BAE6FD] p-6 md:p-8 rounded-xl bg-white/95 backdrop-blur-sm z-20 font-ubuntu flex flex-col justify-between transition-all duration-300 hover:border-[#38BDF8] hover:shadow-[0_12px_35px_rgba(56,189,248,0.2)] group shadow-[0_8px_25px_rgba(56,189,248,0.08)]"
      >
        <div>
          <h2 className="flex items-center text-xl md:text-2xl font-karla font-bold mb-4 text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
            <span className="mr-3 text-[#0284C7] group-hover:text-[#38BDF8] transition-colors">
              <Design width={36} height={36} fill="currentColor" />
            </span>
            {skillsData.frontend.title}
          </h2>

          <p className="text-sm md:text-base mb-6 text-[#475569] leading-relaxed font-sans">
            {skillsData.frontend.blurb}
          </p>

          <div className="space-y-4">
            {skillsData.frontend.items.map((grp) => (
              <div key={grp.label} className="text-sm">
                <strong className="block text-xs uppercase tracking-wider font-karla font-bold text-[#0284C7] mb-1.5">
                  {grp.label}
                </strong>
                <div className="flex flex-wrap gap-1.5 ml-1">
                  {grp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Watermark Title */}
      <BigTitle
        text="Skills"
        top="78%"
        right="20%"
        color="rgba(56, 189, 248, 0.12)"
      />
    </motion.div>
  );
};

export default MySkillsPage;
