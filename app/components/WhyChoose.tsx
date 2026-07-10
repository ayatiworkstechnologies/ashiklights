import ScrollReveal from "./ScrollReveal";
import { FiBookOpen, FiEye, FiHome, FiShield, FiGlobe } from "react-icons/fi";

const reasons = [
  {
    icon: FiBookOpen,
    title: "Curated Collections",
    desc: "Handpicked designs for every style.",
  },
  {
    icon: FiEye,
    title: "Expert Sizing Guidance",
    desc: "Perfect light for the perfect space.",
  },
  {
    icon: FiHome,
    title: "Showroom Support",
    desc: "Experience before you decide.",
  },
  {
    icon: FiShield,
    title: "Premium Finishes",
    desc: "Quality that lasts for years.",
  },
  {
    icon: FiGlobe,
    title: "Solutions for Every Space",
    desc: "Homes, villas, hotels & commercial.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <h2 className="text-3xl lg:text-4xl font-bold text-center font-playfair mb-4">
            Why Choose Ashik Lights
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="h-px w-12 bg-gold/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/50" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {reasons.map((item, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
            <div
              className="group flex flex-col items-center text-center p-5 lg:p-6 rounded-2xl bg-[#141414] border border-white/5 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 h-full"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-4 text-gold transition-transform duration-300 group-hover:scale-110">
                <item.icon className="text-3xl" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {item.desc}
              </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
