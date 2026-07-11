import Link from "next/link";
import { Icon } from "../ui/Icon";

export function Footer() {
  return (
    <footer className="md:hidden sticky bottom-0 z-20 mx-2 mt-4 h-16 px-3 py-2 grid grid-cols-2 gap-3 bg-surface/90 backdrop-blur-md border border-border-dark border-b-0 rounded-t-xl shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <Link className="flex items-center justify-center border border-gold-dark/50 rounded-lg text-sm font-medium transition hover:bg-surface-hover gap-2" href="tel:+919876543210">
        <Icon name="phone" />
        Call Now
      </Link>
      <Link className="flex items-center justify-center border border-transparent rounded-lg text-sm font-semibold transition text-background bg-gradient-to-br from-gold-gradient-start to-gold-gradient-end hover:brightness-110 gap-2" href="https://wa.me/919876543210">
        <Icon name="whatsapp" />
        WhatsApp
      </Link>
    </footer>
  );
}
