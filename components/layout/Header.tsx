import Image from "next/image";
import Link from "next/link";
import { Icon } from "../ui/Icon";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 md:h-20 items-center justify-between px-4 md:px-8 bg-background/80 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
      <Link className="flex items-center transition-opacity hover:opacity-90" href="/" aria-label="Ashik Lights home">
        <div className="relative w-[140px] h-8 sm:w-[180px] sm:h-10 md:w-[220px] md:h-12">
           <Image
            src="/logo.png"
            alt="Ashik Lights"
            fill
            priority
            className="object-contain object-left"
          />
        </div>
      </Link>
      
      <nav className="hidden md:flex items-center gap-8">
        {["Chandeliers", "High Ceiling Chandeliers", "Outdoor Lights"].map((item) => (
          <Link 
            key={item}
            className="text-sm font-medium text-text-secondary hover:text-white transition-colors relative after:absolute after:-bottom-1.5 after:left-0 after:h-[1px] after:w-0 after:bg-gold hover:after:w-full after:transition-all after:duration-300 pb-1" 
            href={`#${item.toLowerCase().replace(' ', '-')}`}
          >
            {item}
          </Link>
        ))}
      </nav>

      <div className="flex gap-3 items-center">
        <Link className="h-9 md:h-10 px-3 md:px-4 rounded-full inline-flex items-center justify-center gap-2 text-sm font-medium transition-all hover:bg-white/5 border border-white/10 text-white" href="tel:+919876543210">
          <Icon name="phone" />
          <span className="hidden lg:inline">Call Now</span>
        </Link>
        <Link className="h-9 md:h-10 px-4 md:px-5 rounded-full inline-flex items-center justify-center gap-2 text-sm font-semibold transition-all hover:-translate-y-0.5 text-background bg-gradient-to-r from-gold-light via-gold to-gold-dark shadow-[0_4px_14px_rgba(215,169,79,0.3)] hover:shadow-[0_6px_20px_rgba(215,169,79,0.4)] relative overflow-hidden group" href="https://wa.me/919876543210">
          <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
          <Icon name="whatsapp" />
          <span className="hidden md:inline relative z-10">WhatsApp</span>
        </Link>
      </div>
    </header>
  );
}
