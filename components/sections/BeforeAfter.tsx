"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "../ui/Icon";

type SliderProps = {
  before: string;
  after: string;
  title: string;
};

function Slider({ before, after, title }: SliderProps) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-border-gold/40 bg-surface shadow-[0_20px_55px_rgba(0,0,0,0.35)] ring-offset-2 ring-offset-background transition-shadow focus-within:ring-2 focus-within:ring-gold/70 md:rounded-2xl">
      {/* Before stays on the right as the base image. */}
      <Image
        src={before}
        alt={`${title} before lighting installation`}
        fill
        sizes="(min-width: 768px) 44vw, 92vw"
        className="object-cover"
      />

      {/* After is revealed from the left as the handle moves. */}
      <div
        className="absolute inset-0 overflow-hidden shadow-[inset_-12px_0_24px_rgba(0,0,0,0.22)]"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image
          src={after}
          alt={`${title} after lighting installation`}
          fill
          sizes="(min-width: 768px) 44vw, 92vw"
          className="object-cover"
        />
      </div>

      <span className="absolute left-3 top-3 z-10 rounded-full border border-gold-light/35 bg-black/60 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-gold-light shadow-lg backdrop-blur-md md:left-4 md:top-4 md:text-xs">
        AFTER
      </span>
      <span className="absolute right-3 top-3 z-10 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-white shadow-lg backdrop-blur-md md:right-4 md:top-4 md:text-xs">
        BEFORE
      </span>

      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        aria-label={`Compare before and after for ${title}`}
        aria-valuetext={`${sliderPos}% after, ${100 - sliderPos}% before`}
        onChange={(event) => setSliderPos(Number(event.target.value))}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize touch-pan-y opacity-0"
      />

      <div
        className="pointer-events-none absolute bottom-0 top-0 z-10 w-0.5 bg-gold shadow-[0_0_18px_rgba(215,169,79,0.9)]"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-surface-light text-gold shadow-xl transition-transform duration-300 group-hover:scale-110 md:h-11 md:w-11 lg:h-12 lg:w-12">
          <Icon name="arrowRight" className="absolute left-1.5 h-4 w-4 rotate-180 opacity-80 md:left-2 md:h-5 md:w-5" />
          <Icon name="arrowRight" className="absolute right-1.5 h-4 w-4 opacity-80 md:right-2 md:h-5 md:w-5" />
        </div>
      </div>
    </div>
  );
}

const transformations = [
  {
    title: "Living Room Transformation",
    before: "/images/be-1.png",
    after: "/images/af-1.png",
  },
  {
    title: "Villa Facade Illumination",
    before: "/images/be.png",
    after: "/images/af.png",
  },
];

export function BeforeAfter() {
  return (
    <section className="px-4 pt-20 md:px-[5%] md:pt-24 lg:px-[6%]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-12 lg:mb-16">
          <p className="reveal-scale mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
            Transformations
          </p>
          <h2 className="reveal-left mb-4 font-playfair text-3xl md:text-4xl lg:mb-5 lg:text-5xl">
            Before &amp; After Inspiration
          </h2>
          <p className="reveal-right mx-auto max-w-2xl text-sm leading-relaxed text-text-muted md:text-base">
            Drag the slider to see how the right lighting transforms ordinary
            spaces into extraordinary luxury experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-6 lg:gap-10 xl:gap-12">
          {transformations.map((transformation, index) => (
            <article
              key={transformation.title}
              className="reveal overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-surface-hover/80 to-surface/30 p-2.5 shadow-[0_16px_50px_rgba(0,0,0,0.2)] md:p-3 lg:rounded-3xl lg:p-4"
            >
              <Slider {...transformation} />
              <div className="flex items-center gap-3 px-2 pb-1 pt-4 md:gap-2 md:px-1 md:pt-4 lg:gap-3 lg:px-2 lg:pt-5">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-gold/70 md:text-xs">
                  0{index + 1}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-gold/45 to-transparent" />
                <h3 className="font-playfair text-base text-white/90 md:text-lg lg:text-xl xl:text-2xl">
                  {transformation.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
