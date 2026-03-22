import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Intro = ({ children, onFinish }) => {
  const [startExit, setStartExit] = useState(false);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartExit(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center text-white z-50"
      initial={{ opacity: 1 }}
      animate={startExit ? { opacity: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onAnimationComplete={onFinish}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-light"
        initial={isMobile ? false : { opacity: 0, y: 30 }}
        animate={isMobile ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        &#8226; {children}
      </motion.h1>
    </motion.div>
  );
};

export default Intro;
