import Link from "next/link";
import { Icon } from "../ui/Icon";

interface FinalCTAProps {
  onOpenModal: (e: React.MouseEvent) => void;
}

export function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section id="consultation" className="min-h-80 flex items-center justify-center text-center px-4 md:px-[6%] py-20 bg-gradient-to-t from-black via-black/80 to-transparent border-t border-border-dark">
      <div className="max-w-2xl">
        <p className="text-xs tracking-widest text-gold font-semibold mb-4">PERSONALISED LIGHTING SUPPORT</p>
        <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">Let&apos;s Find the Perfect Light for Your Space</h2>
        <p className="text-base md:text-lg text-text-secondary mb-8">
          Share your room photo, dimensions or interior design. Our team will
          help you shortlist suitable lighting options.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <Link className="w-full sm:w-auto h-11 px-6 rounded-md inline-flex items-center justify-center gap-3 text-sm font-semibold transition hover:-translate-y-px hover:brightness-110 text-background bg-gradient-to-br from-gold-gradient-start to-gold-gradient-end shadow-[inset_0_0_0_1px_rgba(245,217,148,0.33)]" href="#" onClick={onOpenModal}>
            Get Free Consultation
          </Link>
          <Link className="w-full sm:w-auto h-11 px-6 rounded-md inline-flex items-center justify-center gap-3 text-sm font-semibold transition hover:-translate-y-px hover:brightness-110 border border-gold-dark/70 bg-background/60 text-white" href="https://wa.me/919876543210">
            <Icon name="whatsapp" />
            WhatsApp Your Requirement
          </Link>
        </div>
      </div>
    </section>
  );
}
