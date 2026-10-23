import React from "react";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../data/site";

interface LogoProps {
  theme?: "dark" | "light";
}

const LogoComponent: React.FC<LogoProps> = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`fixed top-8 left-4 md:left-8 z-30 font-pacifico select-none transition-colors duration-300 text-2xl md:text-3xl`}
      style={{
        color: isDark ? "#FCF6F4" : "#000000"
      }}
    >
      <NavLink
        to="/"
        aria-label={`${siteConfig.name} home`}
        className="focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
      >
        {siteConfig.initials}
      </NavLink>
    </div>
  );
};

export default LogoComponent;
