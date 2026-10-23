import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import SoundBar from "../subComponents/SoundBar";
import { siteConfig } from "../data/site";

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = `About | ${siteConfig.name}`;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-screen h-screen overflow-hidden bg-[#F0F9FF] text-[#0F172A] select-none"
    >
      <LogoComponent theme="light" />
      <PowerButton />
      <SoundBar theme="light" />
      <SocialIcons theme="light" />
      <ParticleComponent theme="light" />

      {/* Floating Spaceman Astronaut */}
      <motion.div
        initial={{ right: "-20%", top: "100%" }}
        animate={{
          right: "6%",
          top: "12%",
          transition: { duration: 1.8, delay: 0.4 }
        }}
        className="hidden md:block absolute w-[18vw] max-w-xs z-10 pointer-events-none animate-[float_4s_ease-in-out_infinite]"
      >
        <img
          src="/spaceman.png"
          alt="Surya Devi astronaut graphic"
          className="w-full h-auto drop-shadow-[0_12px_30px_rgba(56,189,248,0.3)]"
        />
      </motion.div>

      {/* Main Glassmorphic Text Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute z-20 border-2 border-[#BAE6FD] p-6 md:p-10 w-[86vw] md:w-[54vw] max-h-[75vh] overflow-y-auto left-7 md:left-[calc(5rem+5vw)] top-[calc(10%+3rem)] backdrop-blur-md bg-white/90 font-ubuntu italic text-sm md:text-base leading-relaxed text-[#0F172A] shadow-[0_12px_40px_rgba(56,189,248,0.15)] rounded-lg"
      >
        <div className="space-y-4">
          <p className="not-italic font-karla font-extrabold text-xl md:text-2xl text-[#0284C7]">
            Hello, I&apos;m {siteConfig.name}
          </p>

          <p className="text-[#334155]">{siteConfig.aboutMe.p1}</p>
          <p className="text-[#334155]">{siteConfig.aboutMe.p2}</p>
          <p className="text-[#334155]">{siteConfig.aboutMe.p3}</p>
          <p className="text-[#334155]">{siteConfig.aboutMe.p4}</p>

          <div className="pt-3 border-t border-[#BAE6FD] not-italic font-karla text-sm flex flex-wrap gap-4 text-[#0F172A] font-semibold">
            <span className="text-[#64748B]">Explore further:</span>
            <NavLink
              to="/experience"
              className="text-[#0284C7] underline underline-offset-4 hover:text-[#38BDF8] transition-colors"
            >
              Experience ➜
            </NavLink>
            <NavLink
              to="/work"
              className="text-[#0284C7] underline underline-offset-4 hover:text-[#38BDF8] transition-colors"
            >
              Projects ➜
            </NavLink>
            <NavLink
              to="/skills"
              className="text-[#0284C7] underline underline-offset-4 hover:text-[#38BDF8] transition-colors"
            >
              My Skills ➜
            </NavLink>
            <NavLink
              to="/feats"
              className="text-[#0284C7] underline underline-offset-4 hover:text-[#38BDF8] transition-colors"
            >
              Feats ➜
            </NavLink>
          </div>
        </div>
      </motion.div>

      {/* Large Watermark Title */}
      <BigTitle
        text="ABOUT"
        top="8%"
        left="5%"
        color="rgba(56, 189, 248, 0.14)"
      />
    </motion.div>
  );
};

export default AboutPage;
