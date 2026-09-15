import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
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
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Kontak Saya
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-2 animate-fade-in animation-delay-100 text-secondary-foreground">
            Tertarik kerja sama, atau
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            <span className="font-serif italic font-normal text-white">
              sekadar ngobrol santai?
            </span>
          </h3>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Punya ide proyek yang mau dibikin, mau ngajak kolaborasi, atau sekadar mau kenalan? Tulis pesan kamu di bawah ya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
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
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
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
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Masukkan pesan kamu..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Loading...</>
                ) : (
                  <>
                    Kirim Pesan
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Terbuka untuk Kolaborasi</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Lagi antusias ngerjain hal-hal baru seputar web. Kalau ada ide seru atau proyek yang mau dikerjain bareng, sapa aja lewat kontak di atas ya!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
