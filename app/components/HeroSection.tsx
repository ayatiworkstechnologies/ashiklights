"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { FiArrowRight, FiUser, FiPhone, FiBox, FiCreditCard, FiMapPin, FiChevronDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    productInterest: "",
    budgetRange: "",
    showroom: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'm ${formData.name}. I'm interested in ${formData.productInterest || "lighting"}. Budget: ${formData.budgetRange || "Not specified"}. Preferred showroom: ${formData.showroom || "Any"}.`;
    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-[72px]">
      {/* Background */}
      <div className="absolute inset-0 img-placeholder-hero">
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Hero Content */}
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-playfair">
              <span className="text-foreground">Premium Chandeliers</span>
              <br />
              <span className="text-foreground">That Transform</span>
              <br />
              <span className="text-gradient-gold">Every Room</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-text-secondary max-w-lg leading-relaxed">
              Discover exquisite chandeliers designed to bring elegance, warmth & brilliance to your home and beyond.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#categories"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 sm:py-3 rounded-xl sm:rounded-full bg-gold text-black text-sm font-semibold transition-all duration-300 hover:bg-gold-light w-full sm:w-auto uppercase tracking-wide"
              >
                Explore Collections
                <FiArrowRight className="text-base" />
              </a>
              <a
                href="https://wa.me/919876543210"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 sm:py-3 rounded-xl sm:rounded-full border border-gold text-gold sm:text-foreground text-sm font-semibold transition-all duration-300 hover:bg-white/5 w-full sm:w-auto uppercase tracking-wide"
              >
                <FaWhatsapp className="text-lg" />
                Get Price on WhatsApp
              </a>
            </div>
          </ScrollReveal>

          {/* Right - Lead Form */}
          <ScrollReveal direction="left" delay={0.3}>
            <div className="bg-[#111111]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 max-w-md mx-auto lg:mx-0 lg:ml-auto w-full">
            <h2 className="text-xl font-semibold text-foreground font-playfair mb-1">
              Find the Right Light
            </h2>
            <p className="text-sm text-text-muted mb-5">for Your Space</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <FormInput
                icon={<FiUser className="text-base" />}
                placeholder="Name"
                value={formData.name}
                onChange={(v) => setFormData({ ...formData, name: v })}
              />
              <FormInput
                icon={<FiPhone className="text-base" />}
                placeholder="Mobile Number"
                type="tel"
                value={formData.mobile}
                onChange={(v) => setFormData({ ...formData, mobile: v })}
              />
              <FormSelect
                icon={<FiBox className="text-base" />}
                placeholder="Product Interest"
                value={formData.productInterest}
                onChange={(v) =>
                  setFormData({ ...formData, productInterest: v })
                }
                options={[
                  "Chandeliers",
                  "High-Ceiling Chandeliers",
                  "Outdoor Lights",
                  "Wall Lights",
                  "Pendant Lights",
                ]}
              />
              <FormSelect
                icon={<FiCreditCard className="text-base" />}
                placeholder="Budget Range"
                value={formData.budgetRange}
                onChange={(v) => setFormData({ ...formData, budgetRange: v })}
                options={[
                  "₹10,000 - ₹25,000",
                  "₹25,000 - ₹50,000",
                  "₹50,000 - ₹1,00,000",
                  "₹1,00,000+",
                ]}
              />
              <FormSelect
                icon={<FiMapPin className="text-base" />}
                placeholder="Preferred Showroom"
                value={formData.showroom}
                onChange={(v) => setFormData({ ...formData, showroom: v })}
                options={[
                  "Chennai",
                  "Bangalore",
                  "Hyderabad",
                  "Coimbatore",
                  "Kochi",
                  "Madurai",
                ]}
              />
              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-lg bg-gold text-black font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
              >
                GET FREE LIGHTING CONSULTATION
              </button>
            </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function FormInput({
  icon,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  icon: React.ReactNode;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/5 transition-all duration-200 focus-within:border-gold/40">
      <span className="text-text-muted shrink-0">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent text-sm text-foreground placeholder:text-text-muted outline-none"
      />
    </div>
  );
}

function FormSelect({
  icon,
  placeholder,
  value,
  onChange,
  options,
}: {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/5 transition-all duration-200 focus-within:border-gold/40">
      <span className="text-text-muted shrink-0">{icon}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent text-sm text-foreground outline-none appearance-none cursor-pointer [&>option]:bg-surface [&>option]:text-foreground"
      >
        <option value="" className="text-text-muted">
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <FiChevronDown className="text-text-muted" />
    </div>
  );
}


