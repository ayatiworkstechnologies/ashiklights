import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { FiArrowRight } from "react-icons/fi";

const categories = [
  {
    title: "Living Room",
    description: "Timeless designs for every room.",
    gradient: "from-amber-900/40 via-yellow-900/20 to-transparent",
  },
  {
    title: "Dining Room",
    description: "Grand lighting for high spaces.",
    gradient: "from-orange-900/40 via-amber-900/20 to-transparent",
  },
  {
    title: "Foyer",
    description: "Beautiful exteriors. Lasting impressions.",
    gradient: "from-yellow-800/40 via-amber-900/20 to-transparent",
  },
  {
    title: "Bedroom",
    description: "Relaxing and elegant illumination.",
    gradient: "from-amber-800/40 via-yellow-900/20 to-transparent",
  },
];

export default function ShopByCategory() {
  return (
    <section id="categories" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-left mb-6 lg:mb-12">
            <h3 className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-2 font-sans">
              Shop By Space
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-playfair mb-4">
              Find the Perfect Light<br/>for Your Space
            </h2>
            <div className="hidden lg:flex items-center gap-2">
              <div className="h-px w-12 bg-gold/50" />
              <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
              <div className="h-px w-12 bg-gold/50" />
            </div>
          </div>
        </ScrollReveal>

        <div className="flex lg:grid lg:grid-cols-3 gap-4 lg:gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-none">
          {categories.map((cat, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.15} className="min-w-[240px] sm:min-w-[280px] lg:min-w-0 snap-start">
            <Link
              href="#"
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[4/5] transition-all duration-500 hover:shadow-xl hover:shadow-gold/10 block"
            >
              {/* Placeholder image */}
              <div className="absolute inset-0 img-placeholder-card transition-transform duration-700 group-hover:scale-105" />

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${cat.gradient}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 text-center lg:text-left">
                <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs lg:text-sm text-text-secondary mb-3 hidden lg:block">
                  {cat.description}
                </p>
                <span className="hidden lg:inline-flex items-center gap-1.5 text-gold text-sm font-medium transition-all duration-300 group-hover:gap-3">
                  View Designs
                  <FiArrowRight />
                </span>
              </div>
            </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
