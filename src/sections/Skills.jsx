import {
  FileCode2,
  Palette,
  Code2,
  Layers,
  Server,
  Flame,
  Database,
  GitBranch,
  Github,
  Sparkles,
} from "lucide-react";

const techStack = [
  { name: "HTML5", icon: FileCode2 },
  { name: "CSS3", icon: Palette },
  { name: "JavaScript", icon: Code2 },
  { name: "Bootstrap", icon: Layers },
  { name: "PHP", icon: Server },
  { name: "Laravel", icon: Flame },
  { name: "MySQL", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
];

export const Skills = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-teal-400 text-sm font-medium tracking-wider uppercase inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-400" />
            Tech Stack & Keahlian
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">
            Keahlian yang saya{" "}
            <span className="font-serif italic font-normal text-teal-300">
              kuasai.
            </span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Teknologi, framework, dan tools yang biasa saya gunakan dalam merancang antarmuka serta mengembangkan aplikasi web.
          </p>
        </div>

        {/* Symmetrical 3x3 Grid (Desktop & Tablet: 3 Kolom, Mobile: 3 Kolom Responsif) */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
          {techStack.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group bg-white/5 border border-white/10 hover:border-teal-400/50 hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer hover:-translate-y-1"
                style={{ animationDelay: `${(idx + 1) * 60}ms` }}
              >
                {/* Ikon di Tengah */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-teal-400 group-hover:text-teal-300 transition-colors">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Nama Singkat Teknologi */}
                <span className="text-neutral-300 font-medium text-xs sm:text-sm mt-3 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Experience = Skills;
export default Skills;
