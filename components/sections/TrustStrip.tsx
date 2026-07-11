import { Icon } from "../ui/Icon";

const trustItems = [
  { icon: "calendar", text: "Since 2016" },
  { icon: "showroom", text: "Luxury Showroom" },
  { icon: "star", text: "Latest Collections" },
  { icon: "user", text: "Expert Guidance" },
  { icon: "home", text: "Every Space Covered" },
];

export function TrustStrip() {
  return (
    <section className="relative bg-surface border-y border-border-gold/20 overflow-hidden shadow-2xl z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Container with horizontal scroll on mobile, flex row on desktop */}
      <div className="flex items-center overflow-x-auto snap-x snap-mandatory py-6 px-4 md:py-8 md:px-8 md:justify-center md:gap-8 lg:gap-14 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {trustItems.map(({ icon, text }) => (
          <div 
            key={text} 
            className="flex-shrink-0 w-[140px] md:w-auto snap-center flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 group px-2"
          >
            <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-background border border-gold/30 shadow-[inset_0_0_10px_rgba(215,169,79,0.1)] group-hover:shadow-[0_0_20px_rgba(215,169,79,0.25)] group-hover:border-gold/60 transition-all duration-300">
              <b className="text-gold text-xl md:text-2xl transition-transform duration-300 group-hover:scale-110">
                <Icon name={icon} />
              </b>
            </div>
            <span className="text-[13px] md:text-base font-playfair font-medium tracking-wide text-white/90 text-center md:text-left leading-tight">
              {text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
