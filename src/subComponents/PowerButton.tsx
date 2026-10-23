import React from "react";
import { NavLink } from "react-router-dom";
import { PowerBtn } from "../components/AllSvgs";

const PowerButton: React.FC = () => {
  return (
    <button
      type="button"
      aria-label="Home"
      className="fixed top-8 left-1/2 -translate-x-1/2 bg-[#FFFFFF] p-1.5 rounded-full border border-[#BAE6FD] w-8 h-8 md:w-10 md:h-10 flex justify-center items-center z-[999999] cursor-pointer transition-all duration-300 hover:bg-[#E0F2FE] hover:border-[#38BDF8] hover:shadow-[0_0_12px_rgba(56,189,248,0.35)]"
    >
      <NavLink
        to="/"
        className="w-full h-full flex items-center justify-center text-[#0284C7] hover:text-[#38BDF8] transition-colors"
        aria-label="Back to home"
      >
        <PowerBtn width={18} height={18} fill="currentColor" />
      </NavLink>
    </button>
  );
};

export default PowerButton;
