import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { YinYang } from "../components/AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import SoundBar from "../subComponents/SoundBar";
import Intro from "../components/Intro";
import { siteConfig } from "../data/site";

const Main: React.FC = () => {
  const [click, setClick] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.title = `${siteConfig.name} | Developer Portfolio`;
    const checkMq = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    checkMq();
    window.addEventListener("resize", checkMq);
    return () => window.removeEventListener("resize", checkMq);
  }, []);

  const handleClick = () => {
    setClick(!click);
  };

  const openResume = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(siteConfig.resumeUrl, "_blank", "noopener,noreferrer");
  };

  const springEntrance = {
    initial: { y: -200 },
    animate: {
      y: 0,
      transition: { type: "spring", duration: 1.5, delay: 0.8 }
    },
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 }
  };

  const bottomSpringEntrance = {
    initial: { y: 200 },
    animate: {
      y: 0,
      transition: { type: "spring", duration: 1.5, delay: 0.8 }
    },
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-screen h-screen overflow-hidden bg-[#FCF6F4] text-black select-none font-karla"
    >
      {/* Expanding Dark Division from the center */}
      <div
        className={`absolute top-0 bottom-0 z-10 bg-black transition-all duration-700 ease-in-out ${
          isMobile
            ? click
              ? "h-1/2 w-full right-0"
              : "h-0 w-full right-0"
            : click
            ? "right-1/2 w-1/2 h-full"
            : "right-1/2 w-0 h-0"
        }`}
      />

      <div className="p-6 md:p-8 w-full h-full relative z-20">
        <LogoComponent theme={click ? "dark" : "light"} />
        <PowerButton />
        <SoundBar theme={click ? "dark" : "light"} />
        <SocialIcons theme={isMobile ? (click ? "dark" : "light") : (click ? "dark" : "light")} />

        {/* Center Rotating Yin-Yang Toggle Button */}
        <button
          type="button"
          onClick={handleClick}
          aria-label={click ? "Close introduction" : "Open introduction"}
          className={`absolute flex flex-col items-center justify-center cursor-pointer border-none outline-none bg-transparent transition-all duration-1000 z-30 focus:outline-none ${
            isMobile
              ? click
                ? "top-[90%] left-[88%] -translate-x-1/2 -translate-y-1/2"
                : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              : click
              ? "top-[85%] left-[92%] -translate-x-1/2 -translate-y-1/2"
              : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          }`}
        >
          <div className="animate-[spin_2s_linear_infinite] drop-shadow-md">
            <YinYang
              width={isMobile ? (click ? 60 : 120) : (click ? 80 : 180)}
              height={isMobile ? (click ? 60 : 120) : (click ? 80 : 180)}
              fill="currentColor"
            />
          </div>
          {!click && (
            <span className="font-karla font-semibold text-sm md:text-base mt-3 tracking-widest uppercase opacity-80 hover:opacity-100 transition-opacity">
              click here
            </span>
          )}
        </button>

        {/* Say Hi / Contact link (Top Right) */}
        <div className="absolute top-8 right-6 md:right-12 z-20">
          <NavLink
            to="/contact"
            style={{
              color: click && !isMobile ? "#000000" : "#000000"
            }}
            className="block focus:outline-none"
          >
            <motion.h3
              {...springEntrance}
              className="text-lg md:text-xl font-medium tracking-wide"
            >
              Say hi..
            </motion.h3>
          </NavLink>
        </div>

        {/* Right Rail: Feats */}
        <div className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 rotate-90 z-20 origin-center">
          <NavLink
            to="/feats"
            style={{
              color: "#000000"
            }}
            className="block focus:outline-none"
          >
            <motion.h2
              {...springEntrance}
              className="text-lg md:text-2xl font-medium tracking-wider"
            >
              Feats
            </motion.h2>
          </NavLink>
        </div>

        {/* Left Rail: Resume */}
        <div
          className={`absolute z-20 transition-all ${
            isMobile
              ? "top-20 left-4"
              : "top-[25%] left-4 md:left-8 -translate-x-1/2 -translate-y-1/2 -rotate-90 origin-center"
          }`}
        >
          <button
            type="button"
            onClick={openResume}
            style={{
              color: click && !isMobile ? "#FCF6F4" : "#000000"
            }}
            className="cursor-pointer focus:outline-none bg-transparent border-none text-left"
          >
            <motion.h2
              {...springEntrance}
              className="text-lg md:text-2xl font-medium tracking-wider flex items-center gap-1.5"
            >
              Resume
            </motion.h2>
          </button>
        </div>

        {/* Left Rail: Projects */}
        <div
          className={`absolute z-20 transition-all ${
            isMobile
              ? "top-32 left-4"
              : "top-[45%] left-4 md:left-8 -translate-x-1/2 -translate-y-1/2 -rotate-90 origin-center"
          }`}
        >
          <NavLink
            to="/work"
            style={{
              color: click && !isMobile ? "#FCF6F4" : "#000000"
            }}
            className="block focus:outline-none"
          >
            <motion.h2
              {...springEntrance}
              className="text-lg md:text-2xl font-medium tracking-wider"
            >
              Projects
            </motion.h2>
          </NavLink>
        </div>

        {/* Bottom Bar: About, Experience & Skills */}
        <div className="absolute bottom-6 left-0 right-0 w-full flex justify-around items-center px-6 md:px-16 z-20">
          <NavLink
            to="/about"
            style={{
              color: click && !isMobile ? "#FCF6F4" : "#000000"
            }}
            className="focus:outline-none"
          >
            <motion.h2
              {...bottomSpringEntrance}
              className="text-lg md:text-2xl font-medium tracking-wider"
            >
              About
            </motion.h2>
          </NavLink>

          <NavLink
            to="/experience"
            style={{
              color: click && !isMobile ? "#000000" : "#000000"
            }}
            className="focus:outline-none"
          >
            <motion.h2
              {...bottomSpringEntrance}
              className="text-lg md:text-2xl font-medium tracking-wider"
            >
              Experience
            </motion.h2>
          </NavLink>

          <NavLink
            to="/skills"
            style={{
              color: "#000000"
            }}
            className="focus:outline-none"
          >
            <motion.h2
              {...bottomSpringEntrance}
              className="text-lg md:text-2xl font-medium tracking-wider"
            >
              My Skills
            </motion.h2>
          </NavLink>
        </div>
      </div>

      {/* Intro Modal / Overlay */}
      {click && <Intro click={click} />}
    </motion.main>
  );
};

export default Main;
