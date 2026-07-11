import Link from "next/link";
import { Icon } from "../ui/Icon";

interface ProductFeaturesProps {
  onOpenModal: (e: React.MouseEvent) => void;
}

export function ProductFeatures({ onOpenModal }: ProductFeaturesProps) {
  return (
    <section className="flex flex-col gap-16 md:gap-24 pt-16 md:pt-24">
      <article id="chandeliers" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center px-4 md:px-[6%]">
        <div
          className="reveal-left h-80 md:h-[520px] bg-cover bg-center rounded-xl border border-border shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          style={{ backgroundImage: "url(/images/home-1.png)" }}
        />
        <div className="reveal-right flex flex-col items-start text-left">
          <p className="text-xs tracking-widest text-gold font-semibold mb-3">CHANDELIERS</p>
          <h2 className="font-playfair text-3xl md:text-5xl leading-tight mb-5">Warmth and Elegance for Every Interior</h2>
          <p className="text-base md:text-lg leading-relaxed text-text-light mb-6">
            Discover statement chandeliers for living rooms, dining spaces,
            bedrooms and refined hospitality interiors.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1.5 border border-border-gold bg-surface-light/50 rounded-md text-xs text-text-secondary">Living Room</span>
            <span className="px-3 py-1.5 border border-border-gold bg-surface-light/50 rounded-md text-xs text-text-secondary">Dining Room</span>
            <span className="px-3 py-1.5 border border-border-gold bg-surface-light/50 rounded-md text-xs text-text-secondary">Classic & Modern</span>
          </div>
          <Link className="h-11 px-6 rounded-md inline-flex items-center justify-center gap-3 text-sm font-semibold transition hover:-translate-y-px hover:brightness-110 text-background bg-gradient-to-br from-gold-gradient-start to-gold-gradient-end shadow-[inset_0_0_0_1px_rgba(245,217,148,0.33)]" href="#consultation" onClick={onOpenModal}>
            Explore Chandeliers <Icon name="arrowRight" className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
      <article id="high-ceiling" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center px-4 md:px-[6%]">
        <div
          className="reveal-right h-80 md:h-[520px] bg-cover bg-center rounded-xl border border-border shadow-[0_20px_50px_rgba(0,0,0,0.3)] md:order-last"
          style={{ backgroundImage: "url(/images/home-2.png)" }}
        />
        <div className="reveal-left flex flex-col items-start text-left">
          <p className="text-xs tracking-widest text-gold font-semibold mb-3">HIGH CEILING</p>
          <h2 className="font-playfair text-3xl md:text-5xl leading-tight mb-5">Make Your Double-Height Space Unforgettable</h2>
          <p className="text-base md:text-lg leading-relaxed text-text-light mb-6">
            Explore dramatic cascading chandeliers designed for staircases,
            foyers, villas, duplexes and hotel lobbies.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1.5 border border-border-gold bg-surface-light/50 rounded-md text-xs text-text-secondary">Staircase</span>
            <span className="px-3 py-1.5 border border-border-gold bg-surface-light/50 rounded-md text-xs text-text-secondary">Double Height</span>
            <span className="px-3 py-1.5 border border-border-gold bg-surface-light/50 rounded-md text-xs text-text-secondary">Villa Foyer</span>
          </div>
          <Link className="h-11 px-6 rounded-md inline-flex items-center justify-center gap-3 text-sm font-semibold transition hover:-translate-y-px hover:brightness-110 text-background bg-gradient-to-br from-gold-gradient-start to-gold-gradient-end shadow-[inset_0_0_0_1px_rgba(245,217,148,0.33)]" href="#consultation" onClick={onOpenModal}>
            View High-Ceiling Designs <Icon name="arrowRight" className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
      <article id="outdoor-lights" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center px-4 md:px-[6%]">
        <div
          className="reveal-left h-80 md:h-[520px] bg-cover bg-center rounded-xl border border-border shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          style={{ backgroundImage: "url(/images/home-3.png)" }}
        />
        <div className="reveal-right flex flex-col items-start text-left">
          <p className="text-xs tracking-widest text-gold font-semibold mb-3">OUTDOOR LIGHTS</p>
          <h2 className="font-playfair text-3xl md:text-5xl leading-tight mb-5">Illuminate Your Outdoors Beautifully</h2>
          <p className="text-base md:text-lg leading-relaxed text-text-light mb-6">
            Upgrade facades, gardens, pathways, gates and balconies with warm,
            considered outdoor lighting.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1.5 border border-border-gold bg-surface-light/50 rounded-md text-xs text-text-secondary">Facade</span>
            <span className="px-3 py-1.5 border border-border-gold bg-surface-light/50 rounded-md text-xs text-text-secondary">Garden</span>
            <span className="px-3 py-1.5 border border-border-gold bg-surface-light/50 rounded-md text-xs text-text-secondary">Pathway & Gate</span>
          </div>
          <Link className="h-11 px-6 rounded-md inline-flex items-center justify-center gap-3 text-sm font-semibold transition hover:-translate-y-px hover:brightness-110 text-background bg-gradient-to-br from-gold-gradient-start to-gold-gradient-end shadow-[inset_0_0_0_1px_rgba(245,217,148,0.33)]" href="#consultation" onClick={onOpenModal}>
            Explore Outdoor Lights <Icon name="arrowRight" className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
    </section>
  );
}
