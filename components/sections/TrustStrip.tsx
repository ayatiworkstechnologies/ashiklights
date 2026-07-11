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
      
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 md:gap-8 lg:gap-14 py-8 px-4 md:px-8">
        {trustItems.map(({ icon, text }) => (
          <div 
            key={text} 
            className="w-[42%] sm:w-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 group px-2 text-center"
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
