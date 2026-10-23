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
      className="relative w-screen h-screen bg-black text-[#FCF6F4] flex flex-col justify-center items-center select-none font-ubuntu"
    >
      <LogoComponent theme="dark" />
      <PowerButton />
      <ParticleComponent theme="dark" />

      <BigTitle text="404" top="20%" left="20%" color="rgba(252, 246, 244, 0.15)" />

      <div className="relative z-20 text-center space-y-4 max-w-md p-6">
        <h1 className="text-3xl font-karla font-bold">Page Not Found</h1>
        <p className="opacity-80 text-sm">
          This destination does not exist. Use the button below or the power button above to return.
        </p>
        <NavLink
          to="/"
          className="inline-block mt-4 px-6 py-2 border border-[#FCF6F4] rounded font-karla font-semibold hover:bg-[#FCF6F4] hover:text-black transition-colors"
        >
          Return Home ➜
        </NavLink>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
