import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import AnchorComponent from "../subComponents/AnchorComponent";
import BigTitle from "../subComponents/BigTitle";
import SoundBar from "../subComponents/SoundBar";
import { featsData } from "../data/feats";
import { siteConfig } from "../data/site";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.5
    }
  }
};

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } }
};

const BlogPage: React.FC = () => {
  const [chainCount, setChainCount] = useState(20);

  useEffect(() => {
    document.title = `Feats | ${siteConfig.name}`;
    const calculated = Math.floor((window.innerHeight - 70) / 30);
    setChainCount(Math.max(10, calculated));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen w-screen bg-[#F0F9FF] select-none"
    >
      <div className="min-h-screen w-full bg-[#F0F9FF] pb-24 relative text-[#0F172A]">
        <LogoComponent theme="light" />
        <PowerButton />
        <SoundBar theme="light" />
        <SocialIcons theme="light" />
        <AnchorComponent number={chainCount} />

        {/* Big Watermark Title */}
        <BigTitle
          text="FEATURES"
          top="5rem"
          left="5rem"
          color="rgba(56, 189, 248, 0.12)"
        />

        {/* Header / Intro */}
        <div className="pt-28 md:pt-36 px-6 max-w-4xl mx-auto text-center relative z-20">
          <h1 className="font-karla font-extrabold text-3xl md:text-5xl mb-3 tracking-tight text-[#0F172A]">
            Features & Highlights
          </h1>
          <p className="font-source text-[#475569] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Practical developments, competitive problem solving milestones, hackathon builds, and digital content creation activity.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex justify-center items-center pt-10 px-6 relative z-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
          >
            {featsData.map((feat) => {
              const cardContent = (
                <div className="h-full border-2 border-[#BAE6FD] p-6 rounded-xl bg-white/95 backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:border-[#38BDF8] hover:shadow-[0_12px_35px_rgba(56,189,248,0.2)] group shadow-[0_8px_25px_rgba(56,189,248,0.08)] cursor-pointer">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="uppercase tracking-wider font-bold text-[#0284C7] bg-[#E0F2FE] px-2.5 py-0.5 rounded-full border border-[#BAE6FD]">
                        {feat.category}
                      </span>
                      <span className="text-[#64748B]">{feat.date}</span>
                    </div>

                    <h2 className="font-karla font-bold text-xl mb-3 text-[#0F172A] group-hover:text-[#0284C7] transition-colors leading-snug">
                      {feat.name}
                    </h2>

                    <p className="text-sm font-source text-[#475569] leading-relaxed mb-4">
                      {feat.summary}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 border-t border-[#BAE6FD] pt-3">
                      {feat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2 py-0.5 rounded bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD] font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 text-xs font-mono font-bold flex items-center justify-end text-[#0284C7] group-hover:text-[#38BDF8] transition-colors">
                      View details ➜
                    </div>
                  </div>
                </div>
              );

              return (
                <motion.div key={feat.id} variants={cardVariants}>
                  {feat.internal ? (
                    <NavLink to={feat.link} className="block h-full">
                      {cardContent}
                    </NavLink>
                  ) : (
                    <a
                      href={feat.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      {cardContent}
                    </a>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPage;
