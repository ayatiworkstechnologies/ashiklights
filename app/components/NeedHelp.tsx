import ScrollReveal from "./ScrollReveal";
import { FiCamera } from "react-icons/fi";

export default function NeedHelp() {
return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
        <div className="rounded-2xl bg-[#141414] border border-white/5 overflow-hidden shadow-2xl relative">
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center">
            {/* Left - Content */}
            <div className="p-6 sm:p-8 lg:p-12 w-full z-10">
              <div className="flex items-start gap-4 sm:gap-6 mb-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-xl bg-gold/90 text-black flex items-center justify-center shadow-lg">
                  <FiCamera className="text-3xl" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-playfair text-foreground mb-2">
                    Not Sure Which Light Fits Your Space?
                  </h2>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-sm">
                    Share a photo of your space and our lighting experts will suggest the perfect options for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Image/Phone mockup */}
            <div className="w-full relative h-[200px] sm:h-[300px] lg:h-full mt-4 lg:mt-0 flex justify-end items-end lg:items-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center lg:opacity-100 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent lg:hidden" />
              <div className="relative z-10 w-[200px] sm:w-[250px] mr-4 sm:mr-10 translate-y-8 sm:translate-y-12 lg:translate-y-0 rounded-t-3xl sm:rounded-3xl border-4 sm:border-8 border-black overflow-hidden shadow-2xl bg-black">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 sm:h-6 bg-black rounded-b-xl z-20" />
                <div className="aspect-[9/19] bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

