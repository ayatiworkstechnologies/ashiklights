import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const collections = [
  {
    title: "Crystal Elegance",
    gradient: "from-amber-800/50 to-yellow-900/30",
  },
  {
    title: "Modern Minimal",
    gradient: "from-zinc-700/50 to-stone-800/30",
  },
  {
    title: "Statement Staircase",
    gradient: "from-orange-900/50 to-amber-800/30",
  },
  {
    title: "Outdoor Glow",
    gradient: "from-yellow-700/50 to-amber-900/30",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <h2 className="text-3xl lg:text-4xl font-bold text-center font-playfair mb-4">
            Featured Collections
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="h-px w-12 bg-gold/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/50" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {collections.map((col, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
            <Link
              href="#"
              className="group relative rounded-xl overflow-hidden aspect-square transition-all duration-500 hover:shadow-lg hover:shadow-gold/10 block"
            >
              <div className="absolute inset-0 img-placeholder-card transition-transform duration-700 group-hover:scale-110" />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${col.gradient}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm lg:text-base font-semibold text-foreground font-playfair">
                  {col.title}
                </h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-gold text-sm font-medium px-4 py-2 rounded-full border border-gold/40">
                  View Collection
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
