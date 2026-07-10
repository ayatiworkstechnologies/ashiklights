import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function StickyFooter() {
  return (
    <div className="sticky bottom-0 z-40 lg:hidden border-t border-border bg-background/95 backdrop-blur-lg">
      <div className="grid grid-cols-2">
        <a
          href="tel:+919876543210"
          className="flex items-center justify-center py-4 text-black bg-gold transition-colors hover:bg-gold-light"
          aria-label="Call Now"
        >
          <FiPhone className="text-2xl" />
        </a>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center py-4 text-white bg-[#25D366] transition-colors hover:bg-[#20bd5a]"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
    </div>
  );
}
