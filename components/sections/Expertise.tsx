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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 reveal-stagger">
        {expertiseItems.map(({ icon, title, desc }) => (
          <article 
            key={title} 
            className="reveal-scale flex items-center text-left p-4 md:p-5 border border-border-dark rounded-xl bg-gradient-to-b from-surface to-background/50 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg group"
          >
            <div className="relative flex-shrink-0 mr-4 md:mr-5">
              <div className="absolute inset-0 bg-gold/10 blur-lg rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <b className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface-light border border-gold/30 text-gold text-xl transition-transform duration-500 group-hover:scale-110 shadow-sm">
                <Icon name={icon} />
              </b>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-playfair font-medium text-white mb-1 group-hover:text-gold-light transition-colors duration-300">{title}</h3>
              <p className="text-xs text-text-muted leading-relaxed line-clamp-2 md:line-clamp-none">{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
