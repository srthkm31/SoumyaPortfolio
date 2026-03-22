import React from "react";
import { ArrowUpRight } from "lucide-react";
import Appbar from "../components/Appbar";

const ContactMePage = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center py-20 px-8 md:px-16 lg:px-24">
      <Appbar />
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#00E5FF]"></div>
            <span className="text-[#00E5FF] uppercase tracking-[0.3em] text-xs font-semibold">
              Get In Touch
            </span>
          </div>

          <h1 className="text-white font-light tracking-tighter leading-tight text-[5rem] sm:text-[7rem] md:text-[8rem]">
            Connect <br />
            <span className="font-bold">with Me.</span>
          </h1>

          <p className="mt-8 text-zinc-400 text-lg md:text-xl font-light max-w-md leading-relaxed">
            Currently open to new opportunities, internships, and engineering
            challenges. Let's build something great together.
          </p>
        </div>

        <div className="flex flex-col justify-center w-full">
          <a
            href="mailto:soumyaa368@gmail.com"
            className="group flex flex-col py-8 border-b border-zinc-800 hover:border-[#00E5FF]/50 transition-colors duration-500 relative"
          >
            <span className="text-zinc-500 text-xs font-mono uppercase tracking-[0.2em] mb-3 group-hover:text-[#00E5FF] transition-colors duration-300">
              Email
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl text-zinc-200 font-light group-hover:text-white transition-colors duration-300">
              soumyaa368@gmail.com
            </span>
            <ArrowUpRight className="absolute right-0 top-1/2 -translate-y-1/2 text-[#00E5FF] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 w-8 h-8" />
          </a>

          <a
            href="tel:+918101750869"
            className="group flex flex-col py-8 border-b border-zinc-800 hover:border-[#00E5FF]/50 transition-colors duration-500 relative"
          >
            <span className="text-zinc-500 text-xs font-mono uppercase tracking-[0.2em] mb-3 group-hover:text-[#00E5FF] transition-colors duration-300">
              Phone
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl text-zinc-200 font-light group-hover:text-white transition-colors duration-300">
              +91 8101750869
            </span>
            <ArrowUpRight className="absolute right-0 top-1/2 -translate-y-1/2 text-[#00E5FF] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 w-8 h-8" />
          </a>

          <a
            href="https://www.linkedin.com/in/soumyaamukherjee"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col py-8 border-b border-zinc-800 hover:border-[#00E5FF]/50 transition-colors duration-500 relative"
          >
            <span className="text-zinc-500 text-xs font-mono uppercase tracking-[0.2em] mb-3 group-hover:text-[#00E5FF] transition-colors duration-300">
              Network
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl text-zinc-200 font-light group-hover:text-white transition-colors duration-300">
              LinkedIn Profile
            </span>
            <ArrowUpRight className="absolute right-0 top-1/2 -translate-y-1/2 text-[#00E5FF] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 w-8 h-8" />
          </a>

          <div className="flex flex-col py-8 border-b border-zinc-800">
            <span className="text-zinc-500 text-xs font-mono uppercase tracking-[0.2em] mb-3">
              Location
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl text-zinc-400 font-light">
              Hooghly, West Bengal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
