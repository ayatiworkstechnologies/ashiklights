import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function ThankYouPage() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center pt-24 pb-12 px-5">
        <div className="text-center max-w-xl mx-auto p-8 md:p-12 rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-xl shadow-2xl">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gold-light via-gold to-gold-dark rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(215,169,79,0.3)]">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-background">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h1 className="font-playfair font-medium text-4xl md:text-5xl text-gold mb-6">
            Thank You!
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            We have received your consultation request. Our luxury lighting specialist will contact you shortly to discuss your project.
          </p>
          <Link href="/" className="inline-flex h-12 px-8 rounded-full items-center justify-center gap-3 text-sm font-semibold transition hover:-translate-y-1 border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
