"use client";
import Link from "next/link";
import { Title } from "../ui/Title";
import { Icon } from "../ui/Icon";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  id: string;
  title: string;
  image: string;
  categories: string[];
  location: string;
};

const projects: Project[] = [
  {
    id: "p1",
    title: "Double-Height Crystal Cascade",
    image: "/images/p-01.png",
    categories: ["Chandeliers"],
    location: "Boat Club Road, Chennai"
  },
  {
    id: "p2",
    title: "Modern Minimalist Dining",
    image: "/images/p-02.png",
    categories: ["Chandeliers"],
    location: "ECR, Chennai"
  },
  {
    id: "p3",
    title: "Luxury Villa Facade",
    image: "/images/p-03.png",
    categories: ["Outdoor"],
    location: "Neelankarai"
  },
  {
    id: "p4",
    title: "Grand Lobby Statement",
    image: "/images/p-04.png",
    categories: ["High Ceiling"],
    location: "Guindy"
  },
  {
    id: "p5",
    title: "Boutique Hotel Garden",
    image: "/images/p-05.png",
    categories: ["Outdoor"],
    location: "Nungambakkam"
  },
  {
    id: "p6",
    title: "Spiral Staircase Elegance",
    image: "/images/p-06.png",
    categories: ["High Ceiling"],
    location: "Anna Nagar"
  }
];

interface ProjectGalleryProps {
  filter: string;
  setFilter: (filter: string) => void;
  onOpenModal: (e: React.MouseEvent) => void;
}

export function ProjectGallery({ filter, setFilter, onOpenModal }: ProjectGalleryProps) {
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.categories.includes(filter));

  return (
    <section className="pt-20 px-4 md:px-[6%]">
      <Title>Project Gallery</Title>
      
      {/* Filter Buttons */}
      <div className="flex overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] justify-start md:justify-center gap-3 md:gap-4 mb-10 pb-2 -mx-4 px-4 md:mx-0 md:px-0">
        {[
          "All",
          "Chandeliers",
          "High Ceiling",
          "Outdoor",
        ].map((x) => (
          <button
            className={`flex-shrink-0 px-5 py-2 md:px-6 md:py-2.5 border rounded-full text-xs md:text-sm tracking-wide font-medium transition-all duration-300 ${
              filter === x 
              ? 'border-gold text-background bg-gold shadow-[0_0_15px_rgba(215,169,79,0.4)] scale-105' 
              : 'border-border text-text-muted hover:border-gold hover:text-gold'
            }`}
            onClick={() => setFilter(x)}
            key={x}
          >
            {x}
          </button>
        ))}
      </div>
      
      {/* Animated Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id} 
              className="relative block h-80 md:h-96 bg-cover bg-center rounded-xl overflow-hidden border border-border-dark group shadow-xl" 
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="absolute top-4 right-4 px-3 py-1 border border-gold/30 rounded-full bg-surface/90 backdrop-blur-md text-[10px] tracking-widest text-gold font-semibold z-10 uppercase shadow-lg">
                {project.categories[0]}
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform md:translate-y-6 md:group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-gold-light/80 text-xs tracking-widest uppercase mb-2 flex items-center gap-1.5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100">
                  <Icon name="pin" className="w-3 h-3" /> {project.location}
                </p>
                <h3 className="font-playfair text-xl md:text-2xl font-normal text-white mb-3 drop-shadow-md">{project.title}</h3>
                <Link className="inline-flex text-sm text-gold font-medium items-center gap-2 hover:text-white transition-colors" href="#consultation" onClick={onOpenModal}>
                  Get a Similar Design <Icon name="arrowRight" className="w-4 h-4 transition-transform md:group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
