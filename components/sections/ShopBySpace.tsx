import { Title } from "../ui/Title";
import Link from "next/link";
import { Icon } from "../ui/Icon";

const spaces = [
  { title: "Living Room", image: "/images/shop-01.png", desc: "Statement chandeliers that anchor your gathering spaces" },
  { title: "Dining Room", image: "/images/shop-02.png", desc: "Elegant suspensions for perfect ambiance" },
  { title: "Double-Height", image: "/images/shop-03.png", desc: "Cascading installations for grand volumes" },
  { title: "Staircase", image: "/images/shop-04.png", desc: "Sweeping spirals that follow your architecture" },
  { title: "Villa Facade", image: "/images/shop-05.png", desc: "Architectural lighting for exterior grandeur" },
  { title: "Garden & Pathway", image: "/images/shop-06.png", desc: "Subtle illuminations for landscapes" },
];

interface ShopBySpaceProps {
  onOpenModal: (e: React.MouseEvent) => void;
}

export function ShopBySpace({ onOpenModal }: ShopBySpaceProps) {
  return (
    <section id="spaces" className="pt-24 px-4 md:px-[6%]">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-xs tracking-widest text-gold font-semibold mb-3 uppercase reveal-scale">Tailored For You</p>
        <h2 className="font-playfair text-3xl md:text-5xl mb-5 reveal-left">Shop by Space</h2>
        <p className="text-text-muted max-w-2xl mx-auto text-sm md:text-base reveal-right">
          Choose the space you want to transform and explore our curated lighting collections designed specifically for that environment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal-stagger">
        {spaces.map(({ title, image, desc }) => (
          <Link
            className="group relative block h-80 md:h-[420px] rounded-2xl overflow-hidden border border-border-dark shadow-xl hover:shadow-2xl transition-all duration-500 reveal-scale"
            href="#consultation"
            onClick={onOpenModal}
            key={title}
          >
            {/* Background Image with Zoom Effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url(${image})` }}
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="font-playfair text-2xl md:text-3xl font-normal text-white mb-2 drop-shadow-md">
                  {title}
                </h3>
                
                <div className="overflow-hidden">
                  <p className="text-sm md:text-base text-text-muted mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-2">
                    {desc}
                  </p>
                  
                  <span className="inline-flex text-xs md:text-sm text-gold font-medium items-center gap-2 uppercase tracking-widest transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                    View Designs <Icon name="arrowRight" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
