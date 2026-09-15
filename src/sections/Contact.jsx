import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// Ikon resmi WhatsApp
const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.24-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29" />
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "diwanggajarmana@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=diwanggajarmana@gmail.com",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+62 851-7438-6642",
    href: "https://wa.me/6285174386642?text=Halo%20Diwangga,%20saya%20tertarik%20bekerja%20sama%20atau%20berdiskusi%20proyek.",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Chainz-bit",
    href: "https://github.com/Chainz-bit",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Indramayu, Jawa Barat",
    href: "https://maps.google.com/?q=Indramayu",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Jika EmailJS sudah dikonfigurasi di .env, kirim otomatis via EmailJS
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          publicKey
        );
      }

      // Selalu buka Gmail Compose dengan tujuan diwanggajarmana@gmail.com dan data terisi
      const subject = encodeURIComponent(`Pesan Portofolio dari ${formData.name}`);
      const body = encodeURIComponent(
        `Halo Diwangga,\n\n${formData.message}\n\n---\nPengirim: ${formData.name}\nEmail: ${formData.email}`
      );
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=diwanggajarmana@gmail.com&su=${subject}&body=${body}`;

      window.open(gmailUrl, "_blank", "noopener,noreferrer");

      setSubmitStatus({
        type: "success",
        message:
          "Membuka Gmail untuk mengirim pesan ke diwanggajarmana@gmail.com. Silakan klik tombol Send pada tab Gmail!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Email error:", err);

      // Fallback tetap buka Gmail compose jika ada kendala
      const subject = encodeURIComponent(`Pesan Portofolio dari ${formData.name}`);
      const body = encodeURIComponent(
        `Halo Diwangga,\n\n${formData.message}\n\n---\nPengirim: ${formData.name}\nEmail: ${formData.email}`
      );
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=diwanggajarmana@gmail.com&su=${subject}&body=${body}`;
      window.open(gmailUrl, "_blank", "noopener,noreferrer");

      setSubmitStatus({
        type: "success",
        message:
          "Membuka Gmail untuk mengirim pesan ke diwanggajarmana@gmail.com. Silakan klik tombol Send pada tab Gmail!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative overflow-hidden w-full">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-52 sm:w-64 h-52 sm:h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-secondary-foreground text-xs sm:text-sm font-medium tracking-wider uppercase animate-fade-in inline-block">
            Kontak Saya
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-2 animate-fade-in animation-delay-100 text-secondary-foreground">
            Tertarik kerja sama, atau
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            <span className="font-serif italic font-normal text-white">
              sekadar ngobrol santai?
            </span>
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground animate-fade-in animation-delay-200 leading-relaxed max-w-xl mx-auto">
            Punya ide proyek yang mau dibikin, mau ngajak kolaborasi, atau sekadar mau kenalan? Tulis pesan kamu di bawah ya.
          </p>
        </div>

        {/* Form & Info Grid: 1 column on mobile, 2 columns on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto w-full items-start">
          {/* Form Message Card */}
          <div className="glass p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-primary/30 animate-fade-in animation-delay-300 w-full">
            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1.5 sm:mb-2 text-foreground"
                >
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Masukkan nama kamu..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-base text-foreground placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1.5 sm:mb-2 text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Masukkan email kamu..."
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-base text-foreground placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1.5 sm:mb-2 text-foreground"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Masukkan pesan kamu..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-base text-foreground placeholder:text-muted-foreground/60 sm:rows-5"
                />
              </div>

              <Button
                className="w-full min-h-[48px] text-base font-medium transition-transform active:scale-[0.99]"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Loading...</>
                ) : (
                  <>
                    Kirim Pesan
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-start sm:items-center gap-3 p-3.5 sm:p-4 rounded-xl text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 sm:mt-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 sm:mt-0" />
                  )}
                  <p className="text-xs sm:text-sm leading-relaxed break-words">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in animation-delay-400 w-full">
            <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 w-full">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-foreground">
                Informasi Kontak
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-surface transition-colors group w-full"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary shrink-0" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                        {item.label}
                      </div>
                      <div className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors break-all sm:break-words">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-primary/30 w-full">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse shrink-0" />
                <span className="font-medium text-sm sm:text-base text-foreground">
                  Terbuka untuk Kolaborasi
                </span>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Lagi antusias ngerjain hal-hal baru seputar web. Kalau ada ide seru atau proyek yang mau dikerjain bareng, sapa aja lewat kontak di atas ya!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
