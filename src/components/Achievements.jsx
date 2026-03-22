import React from "react";

const Achievements = () => {
  const achievements = [
    {
      id: "01",
      year: "2025",
      role: "Special Mention",
      event: "Autodesk Skill Surge Competition",
      description:
        "Recognized for excellence in design, mechanical modeling, and technical execution.",
    },
    {
      id: "02",
      year: "2025",
      role: "National Finalist",
      event: "Gujarat Robofest",
      description:
        "Competed and reached the finals in India’s largest robotics competition.",
    },
    {
      id: "03",
      year: "Awardee",
      role: "Mohan T. Advani Scholarship",
      event: "Blue Star Company",
      description:
        "Selected for this prestigious engineering scholarship based on academic excellence.",
    },
  ];

  return (
    <section className="bg-[#050505] min-h-screen flex flex-col px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col border-t border-white/10">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8 py-6 lg:py-8 border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-300 px-4 md:px-8 -mx-4 md:-mx-8 cursor-default"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <div className="flex items-center gap-6 md:w-1/4">
                <span className="text-gray-400 text-sm tracking-widest">
                  {item.id}
                </span>
                <span className="px-3 py-1 rounded-full border border-gray-700 bg-gray-800/30 text-gray-400 text-xs tracking-widest uppercase font-medium">
                  {item.year}
                </span>
              </div>
              <div className="md:w-3/4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col gap-1 w-full md:w-1/2">
                  <h3 className="text-xl md:text-2xl text-white font-light tracking-wide group-hover:text-gray-200 transition-colors">
                    {item.role}
                  </h3>
                  <h4 className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
                    {item.event}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm md:text-base md:text-right w-full md:w-1/2 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
