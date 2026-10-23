import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import BigTitle from "../subComponents/BigTitle";
import SoundBar from "../subComponents/SoundBar";
import { YinYang } from "../components/AllSvgs";
import Card from "../components/Card";
import { projectsData } from "../data/projects";
import { siteConfig } from "../data/site";

const WorkPage: React.FC = () => {
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const yinyangRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    document.title = `Projects | ${siteConfig.name}`;

    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const pageX = (e: MouseEvent | TouchEvent) => {
      if ("touches" in e && e.touches.length) {
        return e.touches[0].pageX;
      }
      return (e as MouseEvent).pageX;
    };

    const onDown = (e: MouseEvent | TouchEvent) => {
      isDown = true;
      slider.classList.add("active");
      startX = pageX(e) - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const onUp = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return;
      const x = pageX(e) - slider.offsetLeft;
      const walk = (x - startX) * 1.8;
      slider.scrollLeft = scrollLeft - walk;

      if (yinyangRef.current) {
        yinyangRef.current.style.transform = `rotate(${slider.scrollLeft / 2.5}deg)`;
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 0) {
        e.preventDefault();
        slider.scrollLeft += e.deltaY * 1.5;
        if (yinyangRef.current) {
          yinyangRef.current.style.transform = `rotate(${slider.scrollLeft / 2.5}deg)`;
        }
      }
    };

    slider.addEventListener("mousedown", onDown);
    slider.addEventListener("mouseleave", onUp);
    slider.addEventListener("mouseup", onUp);
    slider.addEventListener("mousemove", onMove);
    slider.addEventListener("touchstart", onDown, { passive: true });
    slider.addEventListener("touchend", onUp);
    slider.addEventListener("touchcancel", onUp);
    slider.addEventListener("touchmove", onMove, { passive: true });
    slider.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      slider.removeEventListener("mousedown", onDown);
      slider.removeEventListener("mouseleave", onUp);
      slider.removeEventListener("mouseup", onUp);
      slider.removeEventListener("mousemove", onMove);
      slider.removeEventListener("touchstart", onDown);
      slider.removeEventListener("touchend", onUp);
      slider.removeEventListener("touchcancel", onUp);
      slider.removeEventListener("touchmove", onMove);
      slider.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-screen h-screen overflow-hidden bg-[#F0F9FF] text-[#0F172A] select-none"
    >
      <LogoComponent theme="light" />
      <PowerButton />
      <SoundBar theme="light" />
      <SocialIcons theme="light" />

      {/* Main Horizontal Drag & Scroll Container */}
      <ul
        ref={scrollRef}
        id="grab-scroll"
        className="fixed top-24 md:top-28 left-0 w-full h-[65vh] flex list-none m-0 items cursor-grab active:cursor-grabbing overflow-x-scroll overflow-y-hidden px-16 md:px-32 py-4 z-20 scrollbar-none"
      >
        {projectsData.map((project) => (
          <Card key={project.id} data={project} />
        ))}
      </ul>

      {/* Watermark Big Titles */}
      <BigTitle
        text="WORK"
        top="10%"
        right="20%"
        color="rgba(56, 189, 248, 0.12)"
      />
      <BigTitle
        text="Swipe.."
        top="78%"
        right="2%"
        color="rgba(56, 189, 248, 0.08)"
      />

      {/* Rotating YinYang Indicator in Bottom Right Corner */}
      <span
        ref={yinyangRef}
        className="fixed right-6 md:right-8 bottom-6 md:bottom-8 w-14 h-14 md:w-20 md:h-20 z-30 transition-transform duration-75 text-[#0284C7] pointer-events-none drop-shadow-[0_4px_16px_rgba(56,189,248,0.35)]"
      >
        <YinYang width="100%" height="100%" fill="currentColor" />
      </span>
    </motion.div>
  );
};

export default WorkPage;
