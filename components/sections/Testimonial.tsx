import { Icon } from "../ui/Icon";

const reviews = [
  {
    name: "Rajesh Kumar",
    review: "Excellent collection of chandeliers. We bought one for our living room and it completely transformed the space. The staff was very helpful in guiding us.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Priya Senthil",
    review: "One of the best lighting showrooms in Chennai. Huge variety of modern and classic designs. Pricing is also very reasonable compared to others.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Anand",
    review: "Purchased outdoor lights for my villa. Good quality and perfect finish. They also guided me on the installation process.",
    rating: 4,
    date: "2 months ago"
  },
  {
    name: "Karthik R",
    review: "If you are looking for premium chandeliers in Chennai, this is the place to go. They have a massive double height section.",
    rating: 5,
    date: "3 months ago"
  },
  {
    name: "Sowmya V",
    review: "Amazing collection. The staff were very patient in explaining the different types of crystal chandeliers.",
    rating: 5,
    date: "3 months ago"
  },
  {
    name: "Vijay M",
    review: "Bought some wall lights and pendant lights for my new home. Excellent quality and prompt delivery. Highly recommended.",
    rating: 5,
    date: "4 months ago"
  },
  {
    name: "Lakshmi",
    review: "The showroom is beautiful and has a great display. Found exactly what I was looking for my dining room.",
    rating: 4,
    date: "5 months ago"
  },
  {
    name: "Manoj P",
    review: "Ashik lights has the best collection of modern lighting. The pricing is transparent and the quality is top-notch.",
    rating: 5,
    date: "6 months ago"
  },
  {
    name: "Arun Thomas",
    review: "Very professional service. They helped us choose the right size chandelier for our 12ft ceiling. Very happy with the purchase.",
    rating: 5,
    date: "7 months ago"
  },
  {
    name: "Sneha Reddy",
    review: "Loved the crystal elegance collection. The chandelier looks stunning and luxurious. Will definitely visit again.",
    rating: 5,
    date: "8 months ago"
  }
];

export function Testimonial() {
  return (
    <section className="pt-24 pb-16 overflow-hidden">
      <div className="text-center mb-12 px-4 md:px-[6%]">
        <p className="text-xs tracking-widest text-gold font-semibold mb-3 uppercase">Testimonials</p>
        <h2 className="font-playfair text-3xl md:text-5xl mb-4">What Our Clients Say</h2>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="font-bold text-xl">4.6</span>
          <div className="flex gap-1 text-base text-gold drop-shadow-[0_0_6px_rgba(215,169,79,0.55)]">
            {[...Array(5)].map((_, i) => (
              <span key={i}><Icon name="starFilled" /></span>
            ))}
          </div>
          <span className="text-text-muted text-sm ml-2">(400+ Google Reviews)</span>
        </div>
      </div>
      
      {/* Horizontal scrolling container */}
      <div className="overflow-hidden w-full relative pb-8 pt-4">
        {/* Left and Right fades for smooth visual entry/exit */}
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-marquee gap-6">
          {[...reviews, ...reviews].map((review, i) => (
            <article 
              key={i} 
              className="flex-none w-[320px] md:w-[400px] p-6 rounded-2xl border border-white/5 bg-surface/50 backdrop-blur-sm shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center font-bold text-gold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{review.name}</h3>
                  <div className="mt-1 flex gap-1 text-xs text-gold drop-shadow-[0_0_5px_rgba(215,169,79,0.45)]">
                    {[...Array(5)].map((_, idx) => (
                      <span key={idx} className={idx < review.rating ? "opacity-100" : "opacity-35"}>
                        <Icon name={idx < review.rating ? "starFilled" : "star"} />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="ml-auto flex items-center justify-center w-8 h-8 rounded-full bg-white/5">
                  <span className="text-[#4285F4]"><Icon name="google" /></span>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-4">
                &ldquo;{review.review}&rdquo;
              </p>
              <span className="text-xs text-text-muted">{review.date}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
