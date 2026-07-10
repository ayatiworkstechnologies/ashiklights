"use client";

import { useState } from "react";
import Link from "next/link";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const navCategories = ["Chandeliers", "High Ceiling", "Outdoor Lights"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-lg lg:text-xl font-bold tracking-wide text-gold font-playfair uppercase">
              Ashik Lights
            </span>
          </Link>

          {/* Center Nav - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navCategories.map((cat) => (
              <Link
                key={cat}
                href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-transparent text-foreground text-sm font-medium transition-all duration-300 hover:bg-white/5 border border-white/20"
              >
                <FiPhone className="text-base" />
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-semibold transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/20"
              >
                <FaWhatsapp className="text-lg" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="tel:+919876543210"
                className="w-9 h-9 rounded-lg border border-gold/50 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
              >
                <FiPhone className="text-base" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[#25D366]/50 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-foreground transition-colors ml-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-surface/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            {navCategories.map((cat) => (
              <Link
                key={cat}
                href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-text-secondary rounded-lg transition-colors hover:bg-surface-lighter hover:text-foreground"
              >
                {cat}
              </Link>
            ))}
            <a
              href="tel:+919876543210"
              className="sm:hidden flex items-center gap-2 px-4 py-3 text-sm font-medium text-text-secondary rounded-lg hover:bg-surface-lighter hover:text-foreground"
            >
              <FiPhone className="text-base" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
