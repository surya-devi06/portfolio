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
      className="relative min-h-screen w-screen bg-cover bg-fixed bg-center select-none"
      style={{ backgroundImage: "url('/bg-book.jpg')" }}
    >
      {/* Soft translucent wash over background */}
      <div className="min-h-screen w-full bg-[#FCF6F4]/90 pb-20 relative text-black">
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
          color="rgba(0, 0, 0, 0.08)"
        />

        {/* Header / Intro */}
        <div className="pt-28 md:pt-36 px-6 max-w-4xl mx-auto text-center relative z-20">
          <h1 className="font-karla font-extrabold text-3xl md:text-5xl mb-3 tracking-tight">
            Features & Highlights
          </h1>
          <p className="font-source text-neutral-700 text-sm md:text-base max-w-2xl mx-auto">
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
                <div className="h-full border-2 border-black p-6 rounded-sm bg-[#FCF6F4]/60 backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:bg-black hover:text-[#FCF6F4] group shadow-lg cursor-pointer">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2 opacity-70">
                      <span className="uppercase tracking-wider font-semibold">
                        {feat.category}
                      </span>
                      <span>{feat.date}</span>
                    </div>

                    <h2 className="font-karla font-bold text-xl mb-3 group-hover:text-white leading-snug">
                      {feat.name}
                    </h2>

                    <p className="text-sm font-source opacity-85 leading-relaxed mb-4">
                      {feat.summary}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 border-t border-black/20 group-hover:border-white/20 pt-3">
                      {feat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2 py-0.5 rounded bg-black/5 group-hover:bg-white/10"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 text-xs font-mono font-bold flex items-center justify-end group-hover:underline">
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
