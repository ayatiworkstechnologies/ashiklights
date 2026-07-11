import React from "react";
import { Icon } from "./Icon";

interface ConsultationModalProps {
  isOpen: boolean;
  isSubmitted: boolean;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TAMIL_NADU_CITIES = [
  "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Erode", "Vellore", "Thoothukudi", "Dindigul", "Thanjavur", "Nagercoil", "Hosur", "Avadi", "Kanchipuram", "Karur", "Cuddalore", "Tambaram", "Kumbakonam", "Sivakasi", "Karaikudi", "Namakkal", "Pudukkottai", "Tiruvannamalai", "Ambur", "Ambasamudram", "Arakkonam", "Arani", "Ariyalur", "Aruppukkottai", "Attur", "Bhavani", "Bodinayakanur", "Chengalpattu", "Chidambaram", "Chinnamanur", "Coonoor", "Cumbum", "Devakottai", "Dharapuram", "Dharmapuri", "Gobichettipalayam", "Gudalur", "Gudiyatham", "Harur", "Jayankondam", "Kallakurichi", "Kayalpattinam", "Kodaikanal", "Komarapalayam", "Kotagiri", "Krishnagiri", "Kulithalai", "Kuzhithurai", "Mannargudi", "Mayiladuthurai", "Melur", "Mettupalayam", "Mettur", "Nagapattinam", "Neyveli", "Nilakottai", "Oddanchatram", "Palani", "Palladam", "Paramakudi", "Pattukkottai", "Perambalur", "Periyakulam", "Pollachi", "Poonamallee", "Rasipuram", "Ranipet", "Ramanathapuram", "Sathyamangalam", "Shenkottai", "Sirkazhi", "Srivilliputhur", "Tenkasi", "Theni", "Thiruthuraipoondi", "Tiruchengode", "Tirupattur", "Tiruttani", "Tiruvallur", "Tiruvarur", "Udumalaipettai", "Udhagamandalam", "Ulundurpet", "Usilampatti", "Vandavasi", "Vaniyambadi", "Viluppuram", "Virudhunagar", "Walajapet", "Yercaud"
];

export function ConsultationModal({ isOpen, isSubmitted, isSubmitting, onClose, onSubmit }: ConsultationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-5 animate-fade-in-up" onClick={onClose}>
      <div className="relative bg-surface border border-border-gold rounded-xl w-full max-w-md shadow-[0_25px_50px_rgba(0,0,0,0.8)] p-8" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-4 right-5 bg-transparent border-none text-text-muted text-4xl font-light cursor-pointer hover:text-gold transition-colors leading-none" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        {isSubmitted ? (
          <div className="py-10 text-center flex flex-col items-center gap-4">
            <h2 className="font-playfair text-4xl text-gold mb-2">Thank You!</h2>
            <p className="text-base leading-relaxed text-text-secondary">Our lighting specialist will contact you shortly.</p>
            <button className="mt-4 h-11 px-6 rounded-md inline-flex items-center justify-center gap-3 text-sm font-semibold transition hover:-translate-y-px hover:brightness-110 text-background bg-gradient-to-br from-gold-gradient-start to-gold-gradient-end" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-2" onSubmit={onSubmit}>
            <h2 className="font-playfair text-2xl mb-4 text-center">Enquire Now</h2>
            <label className="h-11 px-3.5 my-1.5 flex gap-3 items-center text-text-muted border border-border rounded-md bg-surface-input/80">
              <Icon name="user" />
              <input name="name" className="flex-1 w-full bg-transparent border-none outline-none text-foreground text-sm" required placeholder="Full Name" />
            </label>
            <label className="h-11 px-3.5 my-1.5 flex gap-3 items-center text-text-muted border border-border rounded-md bg-surface-input/80">
              <Icon name="phone" />
              <input name="phone" className="flex-1 w-full bg-transparent border-none outline-none text-foreground text-sm" required type="tel" placeholder="Mobile Number" />
            </label>
            <label className="h-11 px-3.5 my-1.5 flex gap-3 items-center text-text-muted border border-border rounded-md bg-surface-input/80">
              <Icon name="mail" />
              <input name="email" className="flex-1 w-full bg-transparent border-none outline-none text-foreground text-sm" required type="email" placeholder="Email Address" />
            </label>
            <label className="h-11 px-3.5 my-1.5 flex gap-3 items-center text-text-muted border border-border rounded-md bg-surface-input/80">
              <Icon name="pin" />
              <input name="city" list="tn-cities-modal" className="flex-1 w-full bg-transparent border-none outline-none text-foreground text-sm" required placeholder="City / District" autoComplete="off" />
              <datalist id="tn-cities-modal">
                {TAMIL_NADU_CITIES.map(city => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </label>
            <label className="h-11 px-3.5 my-1.5 flex gap-3 items-center text-text-muted border border-border rounded-md bg-surface-input/80">
              <Icon name="home" />
              <select name="project_type" className="flex-1 w-full bg-transparent border-none outline-none text-foreground text-sm cursor-pointer" defaultValue="" required>
                <option className="bg-surface text-white" value="" disabled>Project Type</option>
                <option className="bg-surface text-white">Residential</option>
                <option className="bg-surface text-white">Commercial</option>
                <option className="bg-surface text-white">Wholesale / Retail</option>
              </select>
            </label>
            <button disabled={isSubmitting} className="mt-4 w-full h-12 rounded-md inline-flex items-center justify-center gap-3 text-sm font-semibold transition hover:-translate-y-px hover:brightness-110 text-background bg-gradient-to-br from-gold-gradient-start to-gold-gradient-end disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? "SUBMITTING..." : "SUBMIT REQUEST"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
