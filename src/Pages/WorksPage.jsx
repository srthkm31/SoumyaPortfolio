import Appbar from "../components/Appbar";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

const WorksPage = () => {
  const projects = [
    {
      id: 1,
      title: "Samuka",
      img: project1,
      category: "Web Application",
      viewlink: "https://autode.sk/4lK8YzX",
      file: "/projects/SAMUKA(UAV).STEP",
    },
    {
      id: 2,
      title: "6 Wheel Rocker Bogie",
      img: project2,
      category: "Mobile Interface",
      viewlink: "https://autode.sk/4uLJB4I",
      file: "/projects/RockerBogie.STEP",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] overflow-hidden font-sans pt-20">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00B6B6] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="relative z-10">
        <Appbar />

        <div className="max-w-5xl mx-auto px-5 py-12">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h4 className="text-[#00B6B6] font-mono text-xs tracking-[0.2em] uppercase mb-2">
                Projects
              </h4>
              <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
                Here's <span className="text-[#00B6B6]">My Works.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-2 max-w-sm">
              <p className="text-zinc-400 text-xs leading-relaxed">
                A collection of my recent projects, focusing on user experience,
                minimal design, and scalable architecture.
              </p>
              <p className="text-[#00B6B6] text-xs leading-relaxed italic opacity-80">
                * Note: If not viewing on clicking the link, please download it
                and then view.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900/50 hover:border-[#00B6B6]/40 transition-colors duration-500"
              >
                <div className="relative h-[280px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent z-20 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-[#00B6B6] font-mono text-[10px] uppercase tracking-widest mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-3 group-hover:translate-y-0">
                    <a
                      href={project.viewlink}
                      target="_blank"
                      className="cursor-pointer flex items-center gap-2 bg-white text-black px-5 py-2.5 text-sm rounded-full font-semibold hover:bg-[#00B6B6] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(0,182,182,0.4)]"
                    >
                      View Project
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>
                    <a
                      href={project.file}
                      download
                      className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:bg-[#00B6B6] hover:border-[#00B6B6] hover:text-white transition-all duration-300"
                      aria-label="Download"
                      title="Download File"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
