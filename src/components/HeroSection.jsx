import { motion } from "framer-motion";
import bg from "../assets/bg1.png";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#050505] flex flex-col justify-end overflow-hidden px-6 md:px-16 lg:px-24 pb-20 md:pb-32 font-sans">
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-neutral-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-neutral-800/30 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80 pointer-events-none md:hidden" />{" "}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between w-full pointer-events-none gap-8 md:gap-0"
      >
        <motion.div variants={itemVariants} className="w-full md:w-auto">
          <h2 className="pr-3 pb-5 text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600 text-[16vw] md:text-[10vw] lg:text-[9vw] font-serif leading-[0.85] tracking-tighter drop-shadow-xl m-0 p-0">
            Soumya <br className="hidden md:block" /> Mukherjee
          </h2>
          <div className="flex items-center gap-4 mt-6 md:mt-8">
            <div className="h-[2px] w-12 bg-white/80" />
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gray-400 font-semibold">
              Portfolio 2026
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-left md:text-right w-full md:w-auto flex flex-col md:items-end"
        >
          <p className="text-gray-300 text-xl md:text-3xl lg:text-4xl font-light tracking-wide leading-tight">
            Mechanical CAD{" "}
            <span className="text-gray-500 italic px-1 font-serif">&</span>{" "}
            <br className="hidden md:block" />
            Aspiring Product Designer
          </p>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.4, duration: 1.2, ease: "easeInOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-gray-200 mt-6 md:mt-8 w-full md:w-[120%] ml-auto origin-right shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] text-gray-500 font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-gray-400 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
