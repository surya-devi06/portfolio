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
      className="relative w-screen h-screen overflow-hidden bg-black text-[#FCF6F4] select-none"
    >
      <LogoComponent theme="dark" />
      <PowerButton />
      <SoundBar theme="dark" />
      <SocialIcons theme="dark" />
      <ParticleComponent theme="dark" />

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
          className="w-full h-auto drop-shadow-[0_10px_20px_rgba(255,255,255,0.15)]"
        />
      </motion.div>

      {/* Main Glassmorphic Text Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute z-20 border-2 border-[#FCF6F4] p-6 md:p-10 w-[84vw] md:w-[52vw] max-h-[75vh] overflow-y-auto left-8 md:left-[calc(5rem+5vw)] top-[calc(10%+3rem)] backdrop-blur-md bg-black/30 font-ubuntu italic text-sm md:text-base leading-relaxed text-[#FCF6F4] shadow-2xl rounded-sm"
      >
        <div className="space-y-4">
          <p className="not-italic font-karla font-bold text-xl md:text-2xl text-white">
            Hello, I&apos;m {siteConfig.name}
          </p>

          <p>{siteConfig.aboutMe.p1}</p>
          <p>{siteConfig.aboutMe.p2}</p>
          <p>{siteConfig.aboutMe.p3}</p>
          <p>{siteConfig.aboutMe.p4}</p>

          <div className="pt-3 border-t border-[#FCF6F4]/30 not-italic font-karla text-sm flex flex-wrap gap-4 text-white">
            <span>Explore further:</span>
            <NavLink
              to="/experience"
              className="underline underline-offset-4 hover:text-white/80 transition-colors"
            >
              Experience ➜
            </NavLink>
            <NavLink
              to="/work"
              className="underline underline-offset-4 hover:text-white/80 transition-colors"
            >
              Projects ➜
            </NavLink>
            <NavLink
              to="/skills"
              className="underline underline-offset-4 hover:text-white/80 transition-colors"
            >
              My Skills ➜
            </NavLink>
            <NavLink
              to="/feats"
              className="underline underline-offset-4 hover:text-white/80 transition-colors"
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
        color="rgba(252, 246, 244, 0.15)"
      />
    </motion.div>
  );
};

export default AboutPage;
