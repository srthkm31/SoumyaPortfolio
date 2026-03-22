import React from "react";
import Aboutme from "../components/Aboutme";
import Connect from "../components/Connect";
import Appbar from "../components/Appbar";
import { motion } from "framer-motion";

const AboutmePage = () => {
  return (
    <div className="bg-black min-h-screen">
      <Appbar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-7xl font-serif text-white tracking-tight pl-20 pb-5 pt-25"
      >
        Beyond <span className="text-[#00B6B6]">The Portfolio</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 pl-20"
      >
        <div className="w-8 h-[2px] bg-[#00E5FF]"></div>
        <span className="text-[#00B6B6] uppercase tracking-[0.3em] text-sm font-medium">
          Nice to Meet You
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Aboutme />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className=""
      >
        <Connect />
      </motion.div>
    </div>
  );
};

export default AboutmePage;
