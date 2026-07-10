import ScrollReveal from "./ScrollReveal";
import { FiSun, FiArrowRight, FiNavigation } from "react-icons/fi";

export default function ShowroomCTA() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 img-placeholder-hero" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-8 lg:p-12">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <FiSun className="text-gold text-xl" />
                </div>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold font-playfair text-foreground mb-2">
                See the Lights Before You Decide
              </h2>
              <p className="text-sm text-text-secondary max-w-lg">
                Visit our showrooms and experience the brilliance in person.
              </p>
            </div>

          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
