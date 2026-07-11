"use client";
import { useState } from "react";
import { Title } from "../ui/Title";
import { Icon } from "../ui/Icon";

function Slider({ before, after }: { before: string, after: string }) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative h-64 md:h-[400px] w-full rounded-2xl overflow-hidden border border-border-gold/30 group shadow-2xl">
      {/* Before Image (Background) */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.4]"
        style={{ backgroundImage: `url(${before})` }}
      />
      <span className="absolute top-4 left-4 z-10 px-3 py-1 border border-gold-light/40 rounded-full bg-surface/80 backdrop-blur-md text-[10px] md:text-xs tracking-widest text-white shadow-lg">BEFORE</span>

      {/* After Image (Foreground, Clipped) */}
      <div
        className="absolute inset-0 bg-cover bg-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"
        style={{ 
          backgroundImage: `url(${after})`,
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
        }}
      />
      <span className="absolute top-4 right-4 z-10 px-3 py-1 border border-gold-light/40 rounded-full bg-surface/80 backdrop-blur-md text-[10px] md:text-xs tracking-widest text-gold shadow-lg">AFTER</span>

      {/* Invisible Range Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
      />

      {/* Visual Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-gold pointer-events-none z-10 shadow-[0_0_15px_rgba(215,169,79,0.8)]"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-light border-2 border-gold shadow-xl flex items-center justify-center text-gold transition-transform duration-300 group-hover:scale-110">
          <Icon name="arrowRight" className="w-4 h-4 md:w-5 md:h-5 rotate-180 absolute left-1.5 md:left-2 opacity-80" />
          <Icon name="arrowRight" className="w-4 h-4 md:w-5 md:h-5 absolute right-1.5 md:right-2 opacity-80" />
        </div>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section className="pt-24 px-4 md:px-[6%]">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-xs tracking-widest text-gold font-semibold mb-3 uppercase reveal-scale">Transformations</p>
        <h2 className="font-playfair text-3xl md:text-5xl mb-5 reveal-left">Before & After Inspiration</h2>
        <p className="text-text-muted max-w-2xl mx-auto text-sm md:text-base reveal-right">Drag the slider to see how the right lighting transforms ordinary spaces into extraordinary luxury experiences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
        {[
          [
            "Living Room Transformation",
            "/images/crystal-chandelier.png",
            "/images/hero-chandelier.png",
          ],
          [
            "Villa Facade Illumination",
            "/images/hero-chandelier.png",
            "/images/outdoor-lights.png",
          ],
        ].map(([title, before, after]) => (
          <article key={title} className="flex flex-col gap-6 reveal">
            <Slider before={before} after={after} />
            <h3 className="font-playfair text-xl md:text-2xl text-center text-white/90 drop-shadow-sm">{title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
