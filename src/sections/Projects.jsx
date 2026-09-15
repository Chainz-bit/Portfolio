import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Website Profil SMK MargaSatwa",
    description:
      "Web profil sekolah modern dan responsif yang menyajikan informasi profil lembaga, program akademik, hingga informasi alur PPDB dengan tata letak bersih.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Chainz-bit/Web-SI-Sekolah",
  },
  {
    title: "SiNemu - Platform Pelaporan Barang Hilang",
    description:
      "Aplikasi web layanan publik untuk pencarian dan pelaporan barang hilang atau temuan di wilayah Indramayu. Dilengkapi fitur filter pencarian cepat multi-parameter (kata kunci, kategori, waktu, dan wilayah) serta formulir pelaporan yang responsif.",
    image: "/projects/project2.png",
    tags: ["Laravel", "PHP", "Bootstrap", "JavaScript", "MySQL"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Proyek Pilihan
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Proyek yang
            <span className="font-serif italic font-normal text-white">
              {" "}
              dibuat.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200 leading-relaxed">
            Kumpulan aplikasi web dan antarmuka yang pernah saya bangun, baik untuk kebutuhan kampus maupun eksplorasi mandiri.
          </p>
        </div>

        {/* Projects Grid (2 Balanced Cards) */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col justify-between border border-border/60 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video bg-surface">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/40
                 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-background/20">
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                      aria-label="Kunjungi Website"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                      aria-label="Lihat Source Code GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3.5 py-1 rounded-full bg-surface text-xs font-medium border border-border/60 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/Chainz-bit?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <AnimatedBorderButton>
              Lihat Proyek Lainnya
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
