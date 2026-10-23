import React, { useState, useRef } from "react";

interface SoundBarProps {
  theme?: "dark" | "light";
}

const SoundBar: React.FC<SoundBarProps> = ({ theme = "light" }) => {
  const [click, setClick] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (!click) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        // Create an ambient gentle harmonic chord
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(220, ctx.currentTime); // gentle warm A3 tone
        gain.gain.setValueAtTime(0.015, ctx.currentTime); // soft background volume

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscillatorRef.current = osc;
        gainRef.current = gain;
        setClick(true);
      } catch {
        setClick(true);
      }
    } else {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      setClick(false);
    }
  };

  const isContrast = theme === "dark";
  const barColor = isContrast ? "#FFFFFF" : "#0284C7";

  return (
    <button
      type="button"
      onClick={toggleSound}
      title={click ? "Mute audio" : "Play ambient audio"}
      aria-label={click ? "Mute sound" : "Play sound"}
      className="fixed top-8 left-20 md:left-24 z-30 flex items-center gap-[2px] cursor-pointer h-6 px-1 focus:outline-none"
    >
      <span
        className={`w-[2px] h-4 inline-block transition-all ${
          click ? "animate-[soundWave_1s_infinite_ease-in-out]" : "h-1"
        }`}
        style={{ backgroundColor: barColor, animationDelay: "0.1s" }}
      />
      <span
        className={`w-[2px] h-5 inline-block transition-all ${
          click ? "animate-[soundWave_1s_infinite_ease-in-out]" : "h-2"
        }`}
        style={{ backgroundColor: barColor, animationDelay: "0.2s" }}
      />
      <span
        className={`w-[2px] h-3 inline-block transition-all ${
          click ? "animate-[soundWave_1s_infinite_ease-in-out]" : "h-3"
        }`}
        style={{ backgroundColor: barColor, animationDelay: "0.3s" }}
      />
      <span
        className={`w-[2px] h-6 inline-block transition-all ${
          click ? "animate-[soundWave_1s_infinite_ease-in-out]" : "h-1.5"
        }`}
        style={{ backgroundColor: barColor, animationDelay: "0.4s" }}
      />
      <span
        className={`w-[2px] h-4 inline-block transition-all ${
          click ? "animate-[soundWave_1s_infinite_ease-in-out]" : "h-2.5"
        }`}
        style={{ backgroundColor: barColor, animationDelay: "0.5s" }}
      />
    </button>
  );
};

export default SoundBar;
