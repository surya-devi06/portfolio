import React from "react";
import { Github } from "./AllSvgs";
import { Project } from "../data/projects";

interface CardProps {
  data: Project;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { name, description, tags, demo, github } = data;

  return (
    <div className="mr-16 md:mr-28 flex-shrink-0 group">
      <div className="flip-card w-[15rem] md:w-[17.5rem] h-[50vh] md:h-[48vh] select-none">
        <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-700">
          {/* Flip Card Front */}
          <div className="flip-card-front absolute inset-0 w-full h-full">
            <div className="w-full h-full bg-[#FFFFFF] text-[#0F172A] p-6 rounded-[0_50px_0_50px] border-2 border-[#BAE6FD] flex flex-col justify-between shadow-[0_8px_25px_rgba(56,189,248,0.12)] transition-all duration-300 group-hover:border-[#38BDF8] group-hover:shadow-[0_12px_30px_rgba(56,189,248,0.22)]">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#0284C7] font-semibold block mb-2 px-2.5 py-0.5 bg-[#E0F2FE] rounded-full w-max">
                  Featured Build
                </span>
                <h2 className="text-xl md:text-2xl font-karla font-bold text-left leading-tight text-[#0F172A]">
                  {name}
                </h2>
              </div>

              <div className="text-left font-karla text-sm text-[#475569] leading-relaxed font-normal overflow-hidden line-clamp-6">
                {description}
              </div>

              <div className="text-left border-t border-[#BAE6FD] pt-3">
                <span className="text-xs font-mono font-medium text-[#0284C7] flex items-center justify-between">
                  <span>Hover to flip ➜</span>
                  <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-[#E0F2FE] text-[#0284C7] rounded font-semibold">
                    Details
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Flip Card Back */}
          <div className="flip-card-back absolute inset-0 w-full h-full">
            <div className="w-full h-full bg-[#F0F9FF] text-[#0F172A] p-6 rounded-[0_50px_0_50px] border-2 border-[#38BDF8] flex flex-col justify-between backdrop-blur-md shadow-[0_12px_30px_rgba(56,189,248,0.2)]">
              <div className="text-left">
                <h3 className="text-lg font-karla font-bold mb-3 border-b border-[#BAE6FD] pb-2 text-[#0F172A]">
                  {name}
                </h3>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-source bg-[#E0F2FE] text-[#0284C7] px-2.5 py-1 rounded font-semibold border border-[#BAE6FD]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <footer className="flex items-center justify-between pt-4 border-t border-[#BAE6FD]">
                {demo ? (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#38BDF8] text-[#FFFFFF] text-sm md:text-base font-karla font-bold py-2 px-5 rounded-[0_0_0_30px] hover:bg-[#0284C7] transition-all transform hover:scale-105 shadow-md"
                  >
                    Visit
                  </a>
                ) : (
                  <span />
                )}

                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} GitHub repository`}
                    className="p-1 text-[#0284C7] hover:text-[#38BDF8] transition-transform hover:scale-110"
                  >
                    <Github width={28} height={28} fill="currentColor" />
                  </a>
                )}
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
