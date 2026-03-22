import React from "react";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Works", path: "/works" },
    { name: "About Me", path: "/aboutme" },
    { name: "Contact", path: "/contactme" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-6 pt-2">
      <nav className="flex items-center justify-between px-5 py-1 border rounded-full bg-white/5 backdrop-blur-md border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-full max-w-2xl">
        <div
          onClick={() => navigate("/")}
          className="text-white font-serif text-xl tracking-widest cursor-pointer hover:opacity-70 transition-opacity"
        >
          SM.
        </div>
        <div className="flex items-center gap-6 md:gap-10 text-xs md:text-sm uppercase tracking-[0.15em] font-medium text-gray-400">
          {navItems.map((item) => (
            <div
              key={item.name}
              onClick={() => navigate(item.path)}
              className="relative cursor-pointer group py-1"
            >
              <span className="transition-colors duration-300 hover:text-white">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Appbar;
