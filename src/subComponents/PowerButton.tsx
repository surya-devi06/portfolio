import React from "react";
import { NavLink } from "react-router-dom";
import { PowerBtn } from "../components/AllSvgs";

const PowerButton: React.FC = () => {
  return (
    <button
      type="button"
      aria-label="Home"
      className="fixed top-8 left-1/2 -translate-x-1/2 bg-[#FCF6F4] p-1.5 rounded-full border border-black w-8 h-8 md:w-10 md:h-10 flex justify-center items-center z-[999999] cursor-pointer transition-all duration-300 hover:bg-[#dadada66] hover:shadow-[0_0_8px_6px_rgba(0,0,0,0.2)]"
    >
      <NavLink
        to="/"
        className="w-full h-full flex items-center justify-center text-black"
        aria-label="Back to home"
      >
        <PowerBtn width={20} height={20} fill="#000000" />
      </NavLink>
    </button>
  );
};

export default PowerButton;
