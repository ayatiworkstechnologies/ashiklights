import Link from "next/link";
import { Icon } from "../ui/Icon";

interface HeroProps {
  isSubmitted: boolean;
  isSubmitting: boolean;
  onOpenModal: (e: React.MouseEvent) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onResetSubmit: () => void;
}

export function Hero({ isSubmitted, isSubmitting, onOpenModal, onSubmit, onResetSubmit }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center gap-9 pt-24 pb-12 px-5 md:px-[6%] md:pl-[4.2%] bg-[url('/images/hero-chandelier.png')] bg-[62%_center] md:bg-[center_43%] bg-cover bg-no-repeat overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(7,9,10,0.95)] via-[rgba(7,9,10,0.7)] to-[rgba(7,9,10,0.2)]" />
      
      <div className="relative z-10 text-center md:text-left reveal-stagger">
        <p className="reveal-left text-xs tracking-[0.3em] text-gold font-semibold mb-6 uppercase">Luxury Lighting Since 2016</p>
        <h1 className="reveal-left reveal-delay-1 font-playfair font-medium text-4xl sm:text-5xl md:text-[4.5rem] leading-[1.1] text-foreground mb-6 drop-shadow-lg">
          Premium Chandeliers
          <br />
          <span className="text-white/90">That Transform</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark">Every Room</span>
        </h1>
        <p className="reveal-left reveal-delay-2 text-lg md:text-xl leading-relaxed text-text-secondary mb-8 max-w-xl mx-auto md:mx-0">
          Discover statement chandeliers crafted to bring warmth, elegance and
          personality to your interiors.
        </p>
        <div className="reveal-left reveal-delay-3 flex flex-col sm:flex-row justify-center md:justify-start gap-4 items-center">
          <Link className="w-full sm:w-auto h-12 px-8 rounded-full inline-flex items-center justify-center gap-2 text-sm font-semibold transition hover:-translate-y-1 text-background bg-gradient-to-r from-gold-light via-gold to-gold-dark shadow-[0_4px_14px_rgba(215,169,79,0.3)] hover:shadow-[0_6px_20px_rgba(215,169,79,0.5)]" href="#spaces">
            Explore Collections <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
          <Link className="w-full sm:w-auto h-12 px-8 rounded-full inline-flex items-center justify-center gap-3 text-sm font-semibold transition hover:-translate-y-1 border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10" href="https://wa.me/919876543210">
            Get Price on WhatsApp
          </Link>
        </div>
      </div>

      <form className="reveal-scale reveal-delay-2 relative z-10 justify-self-center md:justify-self-end w-full max-w-[420px] p-6 sm:p-8 rounded-2xl border border-white/10 bg-background/40 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.6)]" onSubmit={onSubmit}>
        {isSubmitted ? (
          <div className="py-16 px-3 text-center flex flex-col items-center gap-4">
            <h2 className="font-playfair font-medium text-3xl leading-tight text-gold">Thank You!</h2>
            <p className="text-base leading-relaxed text-text-secondary">Our lighting specialist will contact you shortly.</p>
            <button type="button" className="h-12 px-8 mt-5 rounded-full inline-flex items-center justify-center gap-3 text-sm font-semibold transition hover:-translate-y-1 text-background bg-gradient-to-r from-gold-light via-gold to-gold-dark shadow-[0_4px_14px_rgba(215,169,79,0.3)] hover:shadow-[0_6px_20px_rgba(215,169,79,0.4)]" onClick={onResetSubmit}>Done</button>
          </div>
        ) : (
          <>
            <h2 className="font-playfair font-medium text-3xl leading-tight text-center mb-6 text-white">
              Find the Right Chandelier
            </h2>
            <div className="space-y-3">
              <label className="h-12 px-4 flex gap-3 items-center text-text-muted border border-white/10 rounded-xl bg-white/5 transition-colors focus-within:border-gold/50 focus-within:bg-white/10">
                <Icon name="user" />
                <input name="name" className="flex-1 w-full bg-transparent border-none outline-none text-white text-sm placeholder:text-text-muted" required placeholder="Full Name" />
              </label>
              <label className="h-12 px-4 flex gap-3 items-center text-text-muted border border-white/10 rounded-xl bg-white/5 transition-colors focus-within:border-gold/50 focus-within:bg-white/10">
                <Icon name="phone" />
                <input name="phone" className="flex-1 w-full bg-transparent border-none outline-none text-white text-sm placeholder:text-text-muted" required type="tel" placeholder="Mobile Number" />
              </label>
              <label className="h-12 px-4 flex gap-3 items-center text-text-muted border border-white/10 rounded-xl bg-white/5 transition-colors focus-within:border-gold/50 focus-within:bg-white/10">
                <Icon name="mail" />
                <input name="email" className="flex-1 w-full bg-transparent border-none outline-none text-white text-sm placeholder:text-text-muted" required type="email" placeholder="Email Address" />
              </label>
              <label className="h-12 px-4 flex gap-3 items-center text-text-muted border border-white/10 rounded-xl bg-white/5 transition-colors focus-within:border-gold/50 focus-within:bg-white/10">
                <Icon name="pin" />
                <select name="city" className="flex-1 w-full bg-transparent border-none outline-none text-white text-sm cursor-pointer" defaultValue="" required>
                  <option className="bg-surface text-white" value="" disabled>Select City</option>
                  <option className="bg-surface text-white">Chennai</option>
                  <option className="bg-surface text-white">Coimbatore</option>
                  <option className="bg-surface text-white">Madurai</option>
                  <option className="bg-surface text-white">Tiruchirappalli</option>
                  <option className="bg-surface text-white">Salem</option>
                  <option className="bg-surface text-white">Tirunelveli</option>
                  <option className="bg-surface text-white">Tiruppur</option>
                  <option className="bg-surface text-white">Erode</option>
                  <option className="bg-surface text-white">Vellore</option>
                  <option className="bg-surface text-white">Thoothukudi</option>
                  <option className="bg-surface text-white">Other</option>
                </select>
              </label>
              <label className="h-12 px-4 flex gap-3 items-center text-text-muted border border-white/10 rounded-xl bg-white/5 transition-colors focus-within:border-gold/50 focus-within:bg-white/10">
                <Icon name="home" />
                <select name="project_type" className="flex-1 w-full bg-transparent border-none outline-none text-white text-sm cursor-pointer" defaultValue="" required>
                  <option className="bg-surface text-white" value="" disabled>Project Type</option>
                  <option className="bg-surface text-white">Residential</option>
                  <option className="bg-surface text-white">Commercial</option>
                  <option className="bg-surface text-white">Wholesale / Retail</option>
                </select>
              </label>
            </div>
            <button disabled={isSubmitting} className="w-full mt-6 h-12 rounded-xl inline-flex items-center justify-center gap-3 text-sm font-semibold transition hover:-translate-y-0.5 text-background bg-gradient-to-r from-gold-light via-gold to-gold-dark shadow-[0_4px_14px_rgba(215,169,79,0.3)] hover:shadow-[0_6px_20px_rgba(215,169,79,0.5)] disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? "SUBMITTING..." : "GET FREE CONSULTATION"}
            </button>
            <small className="block text-center mt-4 text-text-muted text-xs">Our lighting specialist will contact you shortly.</small>
          </>
        )}
      </form>
    </section>
  );
}
