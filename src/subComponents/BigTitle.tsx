import React from "react";

interface BigTitleProps {
  text: string;
  top?: string;
  left?: string;
  right?: string;
  color?: string;
}

const BigTitle: React.FC<BigTitleProps> = ({
  text,
  top,
  left,
  right,
  color = "rgba(0,0,0,0.1)"
}) => {
  return (
    <span
      className="inline-block fixed font-karla font-extrabold uppercase pointer-events-none select-none z-0 tracking-wider text-[calc(4rem+5vw)] md:text-[calc(5rem+5vw)] leading-none"
      style={{
        top: top || "auto",
        left: left || "auto",
        right: right || "auto",
        color: color
      }}
      aria-hidden="true"
    >
      {text}
    </span>
  );
};

export default BigTitle;
