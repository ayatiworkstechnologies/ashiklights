import Image from "next/image";
import Link from "next/link";
import { Icon } from "../ui/Icon";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-24 items-center justify-center border-b border-white/5 bg-background/80 px-4 backdrop-blur-lg transition-all duration-300 sm:h-28 md:h-24 md:justify-between md:gap-4 md:px-5 lg:h-28 lg:gap-6 lg:px-8 xl:h-32">
      <Link className="flex items-center transition-opacity hover:opacity-90 mx-auto md:mx-0" href="/" aria-label="Ashik Lights home">
        <div className="relative h-[64px] w-[260px] sm:h-[80px] sm:w-[300px] md:h-14 md:w-44 lg:h-20 lg:w-56 xl:h-[96px] xl:w-[320px]">
           <Image
            src="/logo.png"
            alt="Ashik Lights"
            fill
            priority
            className="object-contain object-center md:object-left brightness-0 invert"
          />
        </div>
      </Link>
      
      <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 md:flex lg:gap-6 xl:gap-8">
        {["Chandeliers", "High Ceiling Chandeliers", "Outdoor Lights"].map((item) => (
          <Link 
            key={item}
            className="relative pb-1 text-center text-xs font-medium leading-5 text-text-secondary transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-[1px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-white hover:after:w-full lg:text-sm" 
            href={`#${item.toLowerCase().replace(' ', '-')}`}
          >
            {item}
          </Link>
        ))}
      </nav>

      <div className="hidden shrink-0 items-center gap-2 md:flex lg:gap-3">
        <Link
          className="inline-flex h-10 w-10 items-center justify-center gap-2 rounded-full border border-white/10 p-0 text-sm font-medium text-white transition-all hover:bg-white/5 lg:w-auto lg:px-4"
          href="tel:+918754860555"
          aria-label="Call Ashik Lights"
        >
          <Icon name="phone" />
          <span className="hidden lg:inline">Call Now</span>
        </Link>
        <Link
          className="group relative inline-flex h-10 w-10 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark p-0 text-sm font-semibold text-background shadow-[0_4px_14px_rgba(215,169,79,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(215,169,79,0.4)] lg:w-auto lg:px-5"
          href="https://wa.me/918754860555"
          aria-label="Chat with Ashik Lights on WhatsApp"
        >
          <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
          <Icon name="whatsapp" className="relative z-10" />
          <span className="relative z-10 hidden lg:inline">WhatsApp</span>
        </Link>
      </div>
    </header>
  );
}
