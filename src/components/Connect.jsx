import React from "react";
import { useNavigate } from "react-router-dom";

const Connect = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black flex flex-col pt-16 pl-8 md:pt-24 md:pl-20 pb-5">
      <div className="flex items-center gap-4">
        <div className="w-8 h-[2px] bg-[#00E5FF]"></div>
        <span className="text-[#00B6B6] uppercase tracking-[0.3em] text-sm font-medium">
          Contact
        </span>
      </div>

      <div className="flex flex-col gap-10 mt-32 md:mt-48">
        <h1 className="text-white font-medium tracking-tight leading-[0.75] text-[6rem] sm:text-[9rem] md:text-[10rem] lg:text-[13rem]">
          Let's
          <br />
          connect
        </h1>

        <button
          className="bg-[#00B6B6] w-[150px] p-2 rounded-full cursor-pointer"
          onClick={() => navigate("/contactme")}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Connect;
