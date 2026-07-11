import Link from "next/link";
import { Icon } from "../ui/Icon";

interface ShowroomVisitProps {
  onOpenModal: (e: React.MouseEvent) => void;
}

export function ShowroomVisit({ onOpenModal }: ShowroomVisitProps) {
  return (
    <section className="mt-20 mx-4 md:mx-[6%] border border-border-gold rounded-xl bg-surface overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-xs tracking-widest text-gold font-semibold mb-3">TEYNAMPET, CHENNAI</p>
          <h2 className="font-playfair text-3xl md:text-5xl leading-tight mb-5">See the Lights Before You Decide</h2>
          <p className="text-base md:text-lg leading-relaxed text-text-light mb-8 max-w-xl mx-auto lg:mx-0">
            Experience the scale, finish and glow of our latest lighting
            collections at our Anna Salai showroom, opposite Kamaraj Arangam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center lg:justify-start justify-center">
            <Link className="w-full sm:w-auto h-11 px-6 rounded-md inline-flex items-center justify-center gap-2 text-sm font-semibold transition hover:-translate-y-px hover:brightness-110 text-background bg-gradient-to-br from-gold-gradient-start to-gold-gradient-end shadow-[inset_0_0_0_1px_rgba(245,217,148,0.33)]" href="#visit-form" onClick={onOpenModal}>
              <Icon name="calendar" />
              Book Showroom Visit
            </Link>
            <Link className="w-full sm:w-auto h-11 px-6 rounded-md inline-flex items-center justify-center gap-2 text-sm font-semibold transition hover:-translate-y-px hover:brightness-110 border border-gold-dark/70 bg-background/60 text-white" href="https://www.google.com/maps/dir/?api=1&destination=Ashik+Lights+Teynampet+Chennai" target="_blank" rel="noopener noreferrer">
              <Icon name="pin" />
              Get Directions
            </Link>
            <Link className="w-full sm:w-auto h-11 px-6 rounded-md inline-flex items-center justify-center gap-2 text-sm font-semibold transition hover:-translate-y-px hover:brightness-110 border border-gold-dark/70 bg-background/60 text-white" href="tel:+919876543210">
              <Icon name="phone" />
              Call Showroom
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[480px] h-80 rounded-xl overflow-hidden shadow-lg border border-border-gold/30 flex-shrink-0">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1759.3595072503192!2d80.24888025453582!3d13.049886272615671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526646610db38f%3A0x8a4786f1bb0c0c74!2sASHIK%20LIGHTS!5e1!3m2!1sen!2sin!4v1783754013163!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
