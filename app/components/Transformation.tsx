"use client";
import ScrollReveal from "./ScrollReveal";
import { FiSun, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const transformations = [
  { id: 1 },
  { id: 2 },
];

export default function Transformation() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <h2 className="text-3xl lg:text-4xl font-bold text-center font-playfair mb-4">
            See the Transformation
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="h-px w-12 bg-gold/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/50" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transformations.map((item, idx) => (
            <ScrollReveal key={item.id} direction="up" delay={idx * 0.2}>
            <div
              className="relative rounded-2xl overflow-hidden group"
            >
              <div className="grid grid-cols-2 h-[280px] lg:h-[320px]">
                {/* Before */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 text-[10px] font-medium text-foreground border border-white/20 tracking-wider">
                    BEFORE
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-zinc-700/50 flex items-center justify-center">
                      <FiSun className="text-zinc-500 text-3xl" />
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <div className="absolute inset-0 img-placeholder-card" />
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-amber-900/20" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 text-[10px] font-medium text-foreground border border-white/20 tracking-wider">
                    AFTER
                  </div>
                </div>
              </div>

              {/* Center divider button */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-surface border-2 border-gold/50 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gold hover:border-gold group-hover:scale-110">
                  <div className="flex items-center -space-x-2">
                    <FiChevronLeft className="text-gold group-hover:text-background transition-colors text-lg" />
                    <FiChevronRight className="text-gold group-hover:text-background transition-colors text-lg" />
                  </div>
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
