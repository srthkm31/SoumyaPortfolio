import { motion } from "framer-motion";

const Intro = ({ children, onFinish }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center text-white z-50"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      exit={{ y: "-120%" }}
      transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
      onAnimationComplete={onFinish}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-light"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        &#8226; {children}
      </motion.h1>
    </motion.div>
  );
};

export default Intro;
