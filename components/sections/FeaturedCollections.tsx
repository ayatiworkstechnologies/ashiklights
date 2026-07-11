import { Title } from "../ui/Title";
import Link from "next/link";
import { Icon } from "../ui/Icon";

const collections = [
  { 
    title: "Crystal Elegance", 
    image: "/images/fu-01.png", 
    desc: "Timeless brilliance for grand spaces.", 
    spanClass: "md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-[500px]" 
  },
  { 
    title: "Modern Minimal", 
    image: "/images/fu-02.png", 
    desc: "Sleek lines and understated luxury.", 
    spanClass: "md:col-span-1 md:row-span-1 min-h-[240px]" 
  },
  { 
    title: "Contemporary", 
    image: "/images/fu-03.png", 
    desc: "Bold geometries that captivate.", 
    spanClass: "md:col-span-1 md:row-span-1 min-h-[240px]" 
  },
  { 
    title: "Classic Luxury", 
    image: "/images/fu-04.png", 
    desc: "Ornate details for opulent interiors.", 
    spanClass: "md:col-span-1 md:row-span-1 min-h-[240px]" 
  },
  { 
    title: "Linear & Spiral Designs", 
    image: "/images/fu-05.png", 
    desc: "Perfectly tailored for sweeping staircases.", 
    spanClass: "md:col-span-2 md:row-span-1 min-h-[240px]" 
  },
];

interface FeaturedCollectionsProps {
  onOpenModal: (e: React.MouseEvent) => void;
}

export function FeaturedCollections({ onOpenModal }: FeaturedCollectionsProps) {
  return (
    <section className="pt-24 px-4 md:px-[6%]">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-xs tracking-widest text-gold font-semibold mb-3 uppercase reveal-scale">Curated Selection</p>
        <h2 className="font-playfair text-3xl md:text-5xl mb-5 reveal-left">Featured Collections</h2>
        <p className="text-text-muted max-w-2xl mx-auto text-sm md:text-base reveal-right">Discover our most sought-after lighting styles, crafted to elevate every corner of your luxury space.</p>
      </div>

      {/* Bento Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 reveal-stagger auto-rows-fr">
        {collections.map((item, i) => (
          <article
            key={item.title}
            className={`reveal-scale relative bg-cover bg-center rounded-2xl overflow-hidden border border-border-dark group shadow-xl ${item.spanClass}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Number Indicator */}
            <span className="absolute top-5 left-5 text-gold/70 text-lg md:text-xl font-playfair font-medium z-10">
              0{i + 1}
            </span>

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="font-playfair text-2xl md:text-3xl font-normal text-white mb-2 drop-shadow-md">
                {item.title}
              </h3>
              
              <div className="overflow-hidden">
                <p className="text-sm md:text-base text-text-muted mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {item.desc}
                </p>
                
                <Link 
                  className="inline-flex text-sm text-gold font-medium items-center gap-2 hover:text-white transition-colors uppercase tracking-widest transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 delay-150" 
                  href="#consultation" 
                  onClick={onOpenModal}
                >
                  Enquire Collection <Icon name="arrowRight" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
