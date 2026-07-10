import ScrollReveal from "./ScrollReveal";
import { FiCalendar, FiHome, FiUsers, FiStar, FiGlobe } from "react-icons/fi";

const trustItems = [
  {
    icon: FiCalendar,
    label: "Since 2016",
  },
  {
    icon: FiHome,
    label: "6 Showrooms",
  },
  {
    icon: FiUsers,
    label: "Expert Product Guidance",
  },
  {
    icon: FiStar,
    label: "Latest Collections",
  },
  {
    icon: FiGlobe,
    label: "Lighting Solutions for Every Space",
  },
];

export default function TrustBar() {
  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 -mt-6 lg:-mt-10 mb-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-4 lg:p-6 overflow-x-auto scrollbar-none flex items-center justify-between lg:justify-center gap-4 lg:gap-12 min-w-max shadow-xl shadow-black/50">
            {trustItems.map((item, idx) => (
              <div key={idx} className="flex items-center">
                {idx > 0 && <div className="w-px h-12 lg:h-10 bg-white/10 mx-4 lg:mx-12" />}
                <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 group w-[80px] lg:w-auto shrink-0">
                  <span className="text-gold transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="text-[28px] lg:text-[24px]" />
                  </span>
                  <span className="text-[11px] lg:text-sm text-foreground/80 font-medium text-center lg:text-left leading-tight">
                    {item.label.split(' ').map((word, i) => (
                      <span key={i} className="block lg:inline">{word} </span>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
