import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Bootstrap",
  "PHP",
  "Laravel",
  "MySQL",
  "Git",
  "GitHub",
];

const dots = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 13) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  duration: 15 + ((i * 7 + 3) % 20),
  delay: ((i * 0.35) % 5).toFixed(2),
}));

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Profile Image / Circle Avatar - Order 1 on mobile (top), Order 2 on desktop (right) */}
          <div className="order-1 md:order-2 flex items-center justify-center animate-fade-in animation-delay-300 w-full">
            <div className="relative group">
              {/* Subtle Ambient Glow */}
              <div
                className="absolute inset-0 rounded-full bg-linear-to-tr from-primary/35 via-primary/15 to-primary/35 blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"
              />

              {/* Circle Glass Container with Cyan/Toska Border */}
              <div className="relative glass rounded-full p-2 sm:p-2.5 border-2 border-primary/50 ring-4 ring-primary/15 shadow-2xl shadow-primary/20 transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="w-44 h-44 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden aspect-square">
                  <img
                    src="/profile-photo.jpg"
                    alt="Diwangga Jarmana"
                    className="w-full h-full object-cover object-[72%_40%] rounded-full aspect-square transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Order 2 on mobile (bottom), Order 1 on desktop (left) */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full glass text-xs sm:text-sm text-primary">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" />
                Frontend Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Diwangga <span className="text-primary glow-text">Jarmana</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto md:mx-0 animate-fade-in animation-delay-200 leading-relaxed">
                Frontend developer yang berfokus pada performa, estetika modern, dan integrasi web yang bersih.
              </p>
            </div>

            {/* CTAs - Side-by-side in a horizontal row on mobile */}
            <div className="flex flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 animate-fade-in animation-delay-300">
              <a href="#projects" className="inline-block">
                <Button
                  size="default"
                  className="!px-4 !py-2.5 sm:!px-6 sm:!py-3 md:!px-8 md:!py-4 text-xs sm:text-sm md:text-base font-medium shadow-md shadow-primary/20"
                >
                  Lihat Proyek <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                </Button>
              </a>
              <a
                href="/CV_Diwangga_Jarmana.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <AnimatedBorderButton
                  as="span"
                  className="!px-4 !py-2.5 sm:!px-6 sm:!py-3 md:!px-8 md:!py-4 text-xs sm:text-sm md:text-base font-medium"
                >
                  Resume
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links - Centered on mobile */}
            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 animate-fade-in animation-delay-400 pt-1 sm:pt-0">
              <span className="text-xs sm:text-sm text-muted-foreground">Follow me:</span>
              {[
                {
                  icon: Github,
                  href: "https://github.com/Chainz-bit",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/diwangga-jarmana-508429426/",
                  label: "LinkedIn",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/4n99a_d_17",
                  label: "Instagram",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target={social.href.startsWith("#") ? undefined : "_blank"}
                  rel={
                    social.href.startsWith("#")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={social.label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 animate-fade-in animation-delay-600">
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-6 text-center">
            Tech Stack Utama
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-20 sm:w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-20 sm:w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-5 py-2.5 sm:px-8 sm:py-4">
                  <span className="text-base sm:text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="hidden sm:flex absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
