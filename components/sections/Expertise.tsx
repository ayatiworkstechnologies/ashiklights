import { Icon } from "../ui/Icon";

const expertiseItems = [
  { 
    icon: "diamond", 
    title: "Curated Collections", 
    desc: "A handpicked selection of modern and classic lighting masterpieces." 
  },
  { 
    icon: "home", 
    title: "Versatile Solutions", 
    desc: "Perfect lighting tailored for homes, villas, and commercial spaces." 
  },
  { 
    icon: "measure", 
    title: "Proportional Guidance", 
    desc: "Expert advice based on your exact room dimensions and ceiling height." 
  },
  { 
    icon: "showroom", 
    title: "Physical Showrooms", 
    desc: "Experience the brilliance firsthand at our multiple luxury locations." 
  },
  { 
    icon: "award", 
    title: "Installation Planning", 
    desc: "Comprehensive support to ensure seamless and safe installations." 
  },
];

export function Expertise() {
  return (
    <section className="pt-24 px-4 md:px-[6%]">
      <div className="text-center mb-16 md:mb-20">
        <p className="text-xs tracking-widest text-gold font-semibold mb-3 uppercase reveal-scale">Our Value</p>
        <h2 className="font-playfair text-3xl md:text-5xl mb-5 reveal-left">Expertise Beyond Products</h2>
        <p className="text-text-muted max-w-2xl mx-auto text-sm md:text-base reveal-right">
          We don't just sell chandeliers; we offer a complete luxury lighting consultation service tailored to your architectural needs.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8 reveal-stagger">
        {expertiseItems.map(({ icon, title, desc }) => (
          <article 
            key={title} 
            className="reveal-scale w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] flex flex-col items-center text-center p-8 md:p-10 border border-border-dark rounded-2xl bg-gradient-to-b from-surface to-background/50 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_10px_40px_rgba(215,169,79,0.15)] group"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <b className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-surface-light border border-gold/30 text-gold text-2xl md:text-3xl transition-transform duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-[0_0_20px_rgba(215,169,79,0.3)]">
                <Icon name={icon} />
              </b>
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-normal text-white mb-3 group-hover:text-gold-light transition-colors duration-300">{title}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
