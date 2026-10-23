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
      className="relative min-h-screen w-screen bg-[#FCF6F4] text-black overflow-x-hidden flex flex-col md:flex-row justify-evenly items-center py-24 md:py-0 px-6 gap-8 select-none"
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
        className="w-[88vw] md:w-[32vw] min-h-[58vh] border-2 border-black p-6 md:p-8 rounded-sm bg-[#FCF6F4]/40 backdrop-blur-sm z-20 font-ubuntu flex flex-col justify-between transition-all duration-300 hover:bg-black/85 hover:text-[#FCF6F4] group shadow-xl"
      >
        <div>
          <h2 className="flex items-center text-xl md:text-2xl font-karla font-bold mb-4 group-hover:text-[#FCF6F4]">
            <span className="mr-3 text-black group-hover:text-[#FCF6F4]">
              <Develope width={36} height={36} fill="currentColor" />
            </span>
            {skillsData.software.title}
          </h2>

          <p className="text-sm md:text-base mb-6 opacity-90 leading-relaxed font-sans">
            {skillsData.software.blurb}
          </p>

          <div className="space-y-4">
            {skillsData.software.items.map((grp) => (
              <div key={grp.label} className="text-sm">
                <strong className="block text-xs uppercase tracking-wider font-karla font-bold opacity-80 mb-1">
                  {grp.label}
                </strong>
                <p className="ml-2 leading-relaxed opacity-90">
                  {grp.skills.join(", ")}
                </p>
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
        className="w-[88vw] md:w-[32vw] min-h-[58vh] border-2 border-black p-6 md:p-8 rounded-sm bg-[#FCF6F4]/40 backdrop-blur-sm z-20 font-ubuntu flex flex-col justify-between transition-all duration-300 hover:bg-black/85 hover:text-[#FCF6F4] group shadow-xl"
      >
        <div>
          <h2 className="flex items-center text-xl md:text-2xl font-karla font-bold mb-4 group-hover:text-[#FCF6F4]">
            <span className="mr-3 text-black group-hover:text-[#FCF6F4]">
              <Design width={36} height={36} fill="currentColor" />
            </span>
            {skillsData.frontend.title}
          </h2>

          <p className="text-sm md:text-base mb-6 opacity-90 leading-relaxed font-sans">
            {skillsData.frontend.blurb}
          </p>

          <div className="space-y-4">
            {skillsData.frontend.items.map((grp) => (
              <div key={grp.label} className="text-sm">
                <strong className="block text-xs uppercase tracking-wider font-karla font-bold opacity-80 mb-1">
                  {grp.label}
                </strong>
                <p className="ml-2 leading-relaxed opacity-90">
                  {grp.skills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Watermark Title */}
      <BigTitle
        text="Skills"
        top="78%"
        right="22%"
        color="rgba(0, 0, 0, 0.08)"
      />
    </motion.div>
  );
};

export default MySkillsPage;
