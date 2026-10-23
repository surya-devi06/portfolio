import React from "react";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../data/site";

interface LogoProps {
  theme?: "dark" | "light";
}

const LogoComponent: React.FC<LogoProps> = ({ theme = "light" }) => {
  const isContrast = theme === "dark";

  return (
    <div
      className="fixed top-8 left-4 md:left-8 z-30 font-pacifico select-none transition-colors duration-300 text-2xl md:text-3xl"
      style={{
        color: isContrast ? "#FFFFFF" : "#0284C7"
      }}
    >
      <NavLink
        to="/"
        aria-label={`${siteConfig.name} home`}
        className="focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2 rounded transition-colors duration-200 hover:text-[#38BDF8]"
      >
        {siteConfig.initials}
      </NavLink>
    </div>
  );
};

export default LogoComponent;
