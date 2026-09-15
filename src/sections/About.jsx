import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Tentang Saya
              </span>
            </div>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Halo, saya Diwangga, mahasiswa Rekayasa Perangkat Lunak yang fokus di bidang web frontend. Saya senang mengubah rancangan desain dari Figma menjadi halaman web yang rapi, responsif, dan nyaman dibuka dari laptop maupun HP.
              </p>
              <p>
                Saya menguasai HTML, CSS, JavaScript, dan React. Selain coding, saya suka belajar tool desain seperti Figma agar tampilan website tidak hanya berfungsi, tapi juga enak dipandang.
              </p>
              <p>
                Saya selalu ingin belajar hal baru, mulai dari tool baru sampai framework yang sedang tren. Buat saya, dunia digital selalu berkembang, jadi kita juga harus siap untuk terus bergerak.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Fokus membuat tampilan web yang rapi di layar, enteng diakses, dan kodenya mudah dipahami."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
