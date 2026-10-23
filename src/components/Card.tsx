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
      <div className="flip-card w-[15rem] md:w-[17rem] h-[50vh] md:h-[48vh] select-none">
        <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-700">
          {/* Flip Card Front */}
          <div className="flip-card-front absolute inset-0 w-full h-full">
            <div className="w-full h-full bg-[#FCF6F4] text-black p-6 rounded-[0_50px_0_50px] border border-black flex flex-col justify-between shadow-2xl">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase opacity-60 block mb-2">
                  Featured Build
                </span>
                <h2 className="text-xl md:text-2xl font-karla font-bold text-left leading-tight">
                  {name}
                </h2>
              </div>

              <div className="text-left font-karla text-sm text-neutral-800 leading-relaxed font-normal overflow-hidden line-clamp-6">
                {description}
              </div>

              <div className="text-left border-t border-black/20 pt-3">
                <span className="text-xs font-mono font-medium text-black/60 flex items-center justify-between">
                  <span>Hover to flip ➜</span>
                  <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-black/10 rounded">
                    Details
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Flip Card Back */}
          <div className="flip-card-back absolute inset-0 w-full h-full">
            <div className="w-full h-full bg-black/90 text-[#FCF6F4] p-6 rounded-[0_50px_0_50px] border border-[#FCF6F4] flex flex-col justify-between backdrop-blur-md shadow-2xl">
              <div className="text-left">
                <h3 className="text-lg font-karla font-bold mb-3 border-b border-[#FCF6F4]/30 pb-2">
                  {name}
                </h3>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-source bg-[#FCF6F4]/15 px-2 py-0.5 rounded text-[#FCF6F4] font-medium"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <footer className="flex items-center justify-between pt-4 border-t border-[#FCF6F4]/30">
                {demo ? (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FCF6F4] text-black text-sm md:text-base font-karla font-semibold py-2 px-5 rounded-[0_0_0_30px] hover:bg-white transition-all transform hover:scale-105"
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
                    className="p-1 text-[#FCF6F4] hover:text-white transition-transform hover:scale-110"
                  >
                    <Github width={28} height={28} fill="#FCF6F4" />
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
