import { useState } from "react";
import {
  Code2,
  FileCode2,
  Palette,
  Atom,
  Layout,
  Sparkles,
  Database,
  Server,
  GitBranch,
  Github,
  Layers,
  Globe,
  Terminal,
  Cpu,
  CheckCircle2,
} from "lucide-react";

const skillsData = [
  {
    name: "HTML5",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: FileCode2,
    description:
      "Menyusun struktur semantik halaman web yang rapi, ramah SEO, dan berstandar aksesibilitas tinggi.",
    tags: ["Semantik", "Formulir", "Aksesibilitas"],
  },
  {
    name: "CSS3",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: Palette,
    description:
      "Merancang tata letak visual modern, animasi halus, serta sistem responsif untuk berbagai ukuran layar.",
    tags: ["Flexbox", "CSS Grid", "Animasi & Media Queries"],
  },
  {
    name: "JavaScript",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: Code2,
    description:
      "Membangun logika interaktif pada browser, manipulasi DOM, penanganan event, dan fitur asinkronus (ES6+).",
    tags: ["ES6+", "DOM Manipulation", "Async/Await"],
  },
  {
    name: "React",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: Atom,
    description:
      "Mengembangkan aplikasi web berbasis komponen modular yang efisien, reusable, dan state management teratur.",
    tags: ["Hooks", "Modular Components", "Single Page App"],
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: Layout,
    description:
      "Mempercepat proses penataan gaya antarmuka menggunakan pendekatan utility-first yang konsisten dan ringan.",
    tags: ["Utility-First", "Responsive Layout", "Custom Theme"],
  },
  {
    name: "Bootstrap",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: Layers,
    description:
      "Penyusunan prototipe dan antarmuka web cepat dengan sistem grid 12 kolom dan komponen siap pakai.",
    tags: ["Grid System", "UI Components", "Responsive"],
  },
  {
    name: "PHP & Laravel",
    category: "backend",
    categoryLabel: "Backend",
    icon: Server,
    description:
      "Mengembangkan fungsionalitas sistem web berbasis arsitektur MVC, routing terstruktur, dan operasi CRUD.",
    tags: ["MVC Pattern", "Sistem CRUD", "Blade Templating"],
  },
  {
    name: "MySQL",
    category: "backend",
    categoryLabel: "Backend",
    icon: Database,
    description:
      "Merancang skema database relasional, relasi antar-tabel, dan eksekusi query data yang terstruktur.",
    tags: ["Relational Database", "Query SQL", "Data Integrity"],
  },
  {
    name: "REST API",
    category: "backend",
    categoryLabel: "Backend",
    icon: Globe,
    description:
      "Menghubungkan data backend dengan antarmuka frontend secara dinamis melalui pertukaran data JSON.",
    tags: ["JSON", "Fetch API", "Integrasi Data"],
  },
  {
    name: "Git & GitHub",
    category: "tools",
    categoryLabel: "Tools",
    icon: GitBranch,
    description:
      "Melakukan version control kode sumber, manajemen cabang (branching), dan kolaborasi repositori proyek.",
    tags: ["Version Control", "Commit History", "Kolaborasi"],
  },
  {
    name: "Figma",
    category: "tools",
    categoryLabel: "Tools",
    icon: Cpu,
    description:
      "Mempelajari dan mengeksplorasi rancangan UI/UX untuk kemudian di-slicing menjadi kode web yang presisi.",
    tags: ["UI Slicing", "Wireframing", "Desain Antarmuka"],
  },
  {
    name: "VS Code & Vercel",
    category: "tools",
    categoryLabel: "Tools",
    icon: Terminal,
    description:
      "Lingkungan kerja koding yang efisien serta alur deployment cepat untuk mempublikasikan proyek ke internet.",
    tags: ["Web Deployment", "Productivity", "Extensions"],
  },
];

const categories = [
  { id: "all", label: "Semua Keahlian" },
  { id: "frontend", label: "Frontend & Styling" },
  { id: "backend", label: "Backend & Data" },
  { id: "tools", label: "Tools & Desain" },
];

export const Experience = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            Keahlian & Teknologi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Keahlian yang saya{" "}
            <span className="font-serif italic font-normal text-white">
              kuasai.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200 leading-relaxed">
            Kumpulan teknologi dan keterampilan yang saya pelajari serta gunakan
            untuk mewujudkan antarmuka web yang rapi, responsif, dan fungsional.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 animate-fade-in animation-delay-300">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "glass text-muted-foreground hover:text-foreground hover:bg-surface border border-border/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group glass p-6 rounded-2xl border border-border/60 hover:border-primary/50 transition-all duration-500 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${(idx % 6) * 100}ms` }}
              >
                <div>
                  {/* Top Bar: Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-surface border border-border/60 text-xs font-medium text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-colors">
                      {skill.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Tags / Subskills */}
                <div className="pt-4 border-t border-border/40 flex flex-wrap gap-2">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-surface/80 text-xs text-muted-foreground border border-border/40 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Highlights / Nilai Tambah */}
        <div className="glass p-8 rounded-3xl border border-primary/20 max-w-6xl mx-auto animate-fade-in animation-delay-500">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-base text-foreground mb-1">
                  Slicing Figma ke Web
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Mengubah desain UI/UX dari Figma menjadi halaman web yang
                  presisi, interaktif, dan nyaman diakses.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-base text-foreground mb-1">
                  Desain Responsif
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Memastikan tata letak tetap rapi dan proporsional baik dibuka
                  melalui layar smartphone, tablet, maupun monitor desktop.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-base text-foreground mb-1">
                  Kode Bersih & Terstruktur
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Menerapkan penulisan kode komponen yang modular, mudah
                  dipahami, dan siap untuk dikembangkan lebih lanjut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
