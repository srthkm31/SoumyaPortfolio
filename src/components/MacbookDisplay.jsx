import React, { useRef } from "react";
import Achievements from "./Achievements";
import { motion, useScroll, useTransform } from "framer-motion";

const MacbookDisplay = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center py-20 px-4 gap-10 items-center"
    >
      <h2 className="text-4xl md:text-7xl font-serif text-white tracking-tight">
        Here's <span className="text-[#00B6B6]">My Key Achievements</span>
      </h2>
      <p className="text-xs text-white/60 md:hidden text-center tracking-wide">
        *Note : Swipe inside the display to explore all achievements
      </p>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative w-full max-w-[1000px]"
      >
        <img
          src="https://dennissnellenberg.com/assets/img/device-mbp-16-lower.png"
          alt="Macbook frame"
          className="w-full h-auto drop-shadow-2xl"
        />

        <div className="absolute top-[1.2%] left-[10.7%] w-[78.6%] h-[88.8%] overflow-y-auto md:overflow-hidden rounded-sm bg-neutral-950 no-scrollbar">
          <Achievements />
        </div>
      </motion.div>
    </div>
  );
};

export default MacbookDisplay;
