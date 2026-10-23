import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitle";
import ParticleComponent from "../subComponents/ParticleComponent";

const NotFoundPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-screen h-screen bg-[#F0F9FF] text-[#0F172A] flex flex-col justify-center items-center select-none font-ubuntu"
    >
      <LogoComponent theme="light" />
      <PowerButton />
      <ParticleComponent theme="light" />

      <BigTitle text="404" top="20%" left="20%" color="rgba(56, 189, 248, 0.14)" />

      <div className="relative z-20 text-center space-y-4 max-w-md p-6 bg-white/90 border-2 border-[#BAE6FD] rounded-xl shadow-lg">
        <h1 className="text-3xl font-karla font-bold text-[#0284C7]">Page Not Found</h1>
        <p className="text-[#475569] text-sm">
          This destination does not exist. Use the button below or the power button above to return.
        </p>
        <NavLink
          to="/"
          className="inline-block mt-4 px-6 py-2.5 bg-[#38BDF8] text-[#FFFFFF] font-karla font-bold rounded-lg hover:bg-[#0284C7] transition-all shadow-md"
        >
          Return Home ➜
        </NavLink>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
