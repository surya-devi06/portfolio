import React, { useEffect, useRef } from "react";
import { Anchor, LinkIcon } from "../components/AllSvgs";

interface AnchorProps {
  number?: number;
}

const AnchorComponent: React.FC<AnchorProps> = ({ number = 20 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const hiddenRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const windowSize = window.innerHeight;
      const bodyHeight = document.documentElement.scrollHeight;

      const diff = Math.max(0, bodyHeight - (scrollPosition + windowSize));
      const totalScrollable = Math.max(1, bodyHeight - windowSize);
      const diffP = (diff * 100) / totalScrollable;

      if (ref.current) {
        ref.current.style.transform = `translateY(${-diffP}%)`;
      }

      if (hiddenRef.current) {
        if (scrollPosition > 10) {
          hiddenRef.current.style.display = "none";
        } else {
          hiddenRef.current.style.display = "block";
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden md:block relative z-40 select-none pointer-events-none" aria-hidden="true">
      <div ref={hiddenRef} className="absolute top-4 right-8 text-black">
        <Anchor width={65} height={65} fill="#000000" />
      </div>
      <div
        ref={ref}
        className="fixed top-0 right-8 flex flex-col items-center justify-center -translate-y-full transition-transform duration-75 text-black"
      >
        {Array.from({ length: number }).map((_, id) => (
          <LinkIcon
            key={id}
            width={22}
            height={22}
            fill="#000000"
            className="rotate-[135deg] my-[1px] opacity-80"
          />
        ))}
        <Anchor width={65} height={65} fill="#000000" />
      </div>
    </div>
  );
};

export default AnchorComponent;
