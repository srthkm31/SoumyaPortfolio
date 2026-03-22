import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const tools = ["SolidWorks", "Fusion 360", "ANSYS", "MSC ADAMS"];
  const interests = [
    "Advanced Manufacturing",
    "Robotics",
    "Smart Systems",
    "IoT & Automation",
    "Industry 4.0",
  ];

  return (
    <section className="min-h-screen bg-[#050505] py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 flex items-center gap-4"
      >
        <h2 className="text-4xl md:text-7xl font-serif text-white tracking-tight">
          Here's <span className="text-[#00B6B6]">Who I Am</span>
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-gray-700 to-transparent ml-4" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]"
      >
        <motion.div
          variants={cardVariants}
          className="md:col-span-12 lg:col-span-8 bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
        >
          <div className="absolute top-0 right-0 w-16 h-16 border-l border-b border-white/5 rounded-bl-3xl" />

          <h3 className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
            I aim to develop{" "}
            <span className="text-white font-medium">
              innovative and practical engineering solutions
            </span>{" "}
            by bridging the gap between traditional mechanics and modern smart
            technologies.
          </h3>
          <p className="mt-6 text-gray-400 leading-loose">
            As a Mechanical Engineering undergraduate, my core focus lies in
            integrating physical mechanical systems with digital automation,
            energy-efficient frameworks, and autonomous vehicle design.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="md:col-span-6 lg:col-span-4 bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-between"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">
            Toolkit
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full border border-[#00B6B6] bg-gray-800/20 text-gray-300 text-sm font-medium hover:border-gray-400 hover:text-white transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="md:col-span-6 lg:col-span-12 bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] border border-white/5 rounded-3xl p-8 md:p-10"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-8">
            Focus Areas
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {interests.map((interest, i) => (
              <div key={interest} className="flex flex-col gap-2">
                <div className=" text-gray-500 font-bold text-7xl">
                  0{i + 1}
                </div>
                <div className=" text-gray-300 text-md md:text-lg font-light">
                  {interest}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Profile;
