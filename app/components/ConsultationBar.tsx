import ScrollReveal from "./ScrollReveal";
import { FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ConsultationBar() {
  return (
    <section
      id="consultation"
      className="relative overflow-hidden border-t border-white/10"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543241596-36440db9746e?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="flex flex-col lg:flex-row items-center justify-between gap-6 py-10 lg:py-12">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold font-playfair text-foreground">
              Let&apos;s Find the Perfect
              <br />
              Light for Your Space
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-gold bg-gold text-black text-sm font-semibold transition-all duration-300 hover:bg-gold-light hover:border-gold-light"
            >
              Get Free Consultation
              <FiArrowRight />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-white/20 bg-transparent text-foreground text-sm font-semibold transition-all duration-300 hover:bg-white/5"
            >
              <FaWhatsapp className="text-base" />
              WhatsApp Your Requirement
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
