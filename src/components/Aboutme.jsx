import React from "react";
import photo from "../assets/photo.jpeg";

const Aboutme = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-zinc-200 pt-10 px-20 pb-10 selection:bg-cyan-900 selection:text-cyan-50">
      <div className=" flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <div className="shrink-0">
          <div className="relative rounded-[2rem] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-zinc-800/50 group">
            <img
              src={photo}
              alt="Soumya Mukherjee"
              className="w-[600px] h-[550px] object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col w-full pt-4">
          {/* Row 1 */}
          <div className="group flex flex-col sm:flex-row gap-4 sm:gap-12 py-8 border-b border-zinc-800/60 hover:border-zinc-700 transition-colors duration-300">
            <span className=" relative w-48 text-xl font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-cyan-600 transition-colors duration-300 pt-1">
              Skills
            </span>
            <div className="text-lg font-light tracking-wide text-zinc-300 leading-relaxed flex-1">
              <strong className="font-medium text-zinc-100">
                Computer-Aided Design (CAD) and 3D Modeling & Assemblies:
              </strong>{" "}
              Solidworks, Fusion 360.
              <br />
              <strong className="font-medium text-zinc-100 mt-2 block">
                Simulation:
              </strong>{" "}
              MSC ADAMS, Ansys.
            </div>
          </div>

          {/* Row 2 */}
          <div className="group flex flex-col sm:flex-row gap-4 sm:gap-12 py-8 border-b border-zinc-800/60 hover:border-zinc-700 transition-colors duration-300">
            <span className=" w-48 text-xl font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-cyan-600 transition-colors duration-300 pt-1">
              Engineering Knowledge
            </span>
            <div className="text-lg font-light tracking-wide text-zinc-300 leading-relaxed flex-1">
              Manufacturing Processes, CNC Machining, Material Testing.
            </div>
          </div>

          {/* Row 3 */}
          <div className="group flex flex-col sm:flex-row gap-4 sm:gap-12 py-8 border-b border-zinc-800/60 hover:border-zinc-700 transition-colors duration-300">
            <span className="w-48 text-2xl font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-cyan-600 transition-colors duration-300 pt-1">
              Training Experience
            </span>
            <div className="text-lg font-light tracking-wide text-zinc-300 leading-relaxed flex-1">
              Ishapore,West Bengal
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-5 max-w-5xl mx-auto mt-24 border-l-2 border-cyan-800/60 pl-5   ">
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose tracking-normal sm:tracking-wide text-zinc-400 text-left sm:text-justify max-w-[90%] sm:max-w-full">
          Mechanical Engineering undergraduate eager to gain hands-on experience
          in advanced manufacturing processes, with a strong desire to explore
          additive manufacturing and Industry 4.0 technologies. Skilled in 3D
          modeling, CAD, and simulation tools such as SolidWorks, Fusion 360,
          ANSYS, and MSC ADAMS. Interested in Robotics, IoT, and smart
          manufacturing systems, with a focus on applying engineering knowledge
          to deliver innovative solutions.
        </p>
        <div className=" p-3 bg-[#00B6B6] w-[120px] text-center rounded-lg cursor-pointer text-black font-medium    ">
          <a href="/pdf/resume.pdf" target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
