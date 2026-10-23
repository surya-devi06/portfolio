import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../data/site";

interface IntroProps {
  click: boolean;
}

const Intro: React.FC<IntroProps> = () => {
  const [height, setHeight] = useState("55vh");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      const mobile = window.innerWidth <= 800;
      setIsMobile(mobile);
      if (window.innerWidth <= 480) {
        setHeight("75vh");
      } else if (mobile) {
        setHeight("68vh");
      } else {
        setHeight("55vh");
      }
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: height }}
      transition={{ type: "spring", duration: 1.6, delay: 0.8 }}
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 overflow-hidden flex ${
        isMobile ? "flex-col w-[88vw] max-w-md justify-between" : "w-[62vw] max-w-4xl"
      }`}
      style={{
        borderLeft: isMobile ? "none" : "2px solid #FFFFFF",
        borderRight: isMobile ? "none" : "2px solid #0284C7",
        borderTop: isMobile ? "2px solid #FFFFFF" : "none",
        borderBottom: isMobile ? "2px solid #0284C7" : "none",
        backgroundImage: isMobile
          ? "linear-gradient(#FFFFFF 50%, #0284C7 50%), linear-gradient(#FFFFFF 50%, #0284C7 50%)"
          : "linear-gradient(to right, #FFFFFF 50%, #0284C7 50%), linear-gradient(to right, #FFFFFF 50%, #0284C7 50%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: isMobile ? "2px 100%" : "100% 2px",
        backgroundPosition: isMobile ? "0 0, 100% 0" : "0 0, 0 100%"
      }}
    >
      {/* Left SubBox (Over Deep Sky Blue Half) */}
      <div
        className={`${
          isMobile ? "w-full h-1/2 p-5" : "w-1/2 p-6 md:p-8"
        } flex flex-col justify-evenly font-karla cursor-crosshair select-none text-[#FFFFFF]`}
      >
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Hi,</h1>
          <h3 className="text-xl md:text-3xl font-semibold mt-1">
            I&apos;m <span className="text-[#BAE6FD]">{siteConfig.name}</span>.
          </h3>
        </div>

        <p className="text-sm md:text-base font-normal text-[#E0F2FE] mt-2 leading-relaxed">
          {siteConfig.headline}
        </p>

        <p className="text-xs md:text-sm font-normal text-[#BAE6FD]/90 mt-1 leading-normal font-source">
          Computer Science Engineering Student • Full Stack Developer • Java & DSA Learner • Content Creator
        </p>
      </div>

      {/* Right SubBox (Over White / Pale Blue Half) */}
      <div
        className={`${
          isMobile ? "w-full h-1/2" : "w-1/2"
        } relative flex items-end justify-center`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="w-full h-full flex items-end justify-center"
        >
          <img
            src="/portrait.png"
            alt={siteConfig.name}
            className="object-contain max-h-[85%] md:max-h-[92%] filter contrast-105 drop-shadow-[0_8px_20px_rgba(56,189,248,0.25)]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;
