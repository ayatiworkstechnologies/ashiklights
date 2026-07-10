"use client";
import { useState } from "react";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FiAward,
  FiCalendar,
  FiHome,
  FiMapPin,
  FiMaximize,
  FiPhone,
  FiShoppingBag,
  FiStar,
  FiTool,
  FiUploadCloud,
  FiUser,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const spaces = [
  ["Living Room", "/images/crystal-chandelier.png"],
  ["Dining Room", "/images/hero-chandelier.png"],
  ["Double-Height Living Room", "/images/hero-chandelier.png"],
  ["Staircase", "/images/crystal-chandelier.png"],
  ["Villa Facade", "/images/outdoor-lights.png"],
  ["Garden & Pathway", "/images/outdoor-lights.png"],
];
const collections = [
  "Crystal Elegance",
  "Modern Minimal",
  "Contemporary Statement",
  "Classic Luxury",
  "Linear & Spiral Designs",
];


export default function Home() {
  const [filter, setFilter] = useState("All");
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#" aria-label="Ashik Lights home">
          <Image
            src="/logo.png"
            alt="Ashik Lights"
            width={52}
            height={52}
            priority
          />
        </a>
        <nav className="nav">
          <a href="#chandeliers">Chandeliers</a>
          <a href="#high-ceiling">High Ceiling</a>
          <a href="#outdoor-lights">Outdoor Lights</a>
        </nav>
        <div className="header-actions">
          <a className="btn outline" href="tel:+919876543210">
            <Icon name="phone" />
            Call Now
          </a>
          <a className="btn gold" href="https://wa.me/919876543210">
            <Icon name="whatsapp" />
            WhatsApp
          </a>
        </div>
      </header>
      <section className="hero">
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">LUXURY LIGHTING SINCE 2016</p>
          <h1>
            Premium Chandeliers
            <br />
            That Transform
            <br />
            Every Room
          </h1>
          <p>
            Discover statement chandeliers crafted to bring warmth, elegance and
            personality to your interiors.
          </p>
          <div className="actions">
            <a className="btn gold" href="#spaces">
              Explore Collections <span>-&gt;</span>
            </a>
            <a className="btn outline" href="https://wa.me/919876543210">
              Get Price on WhatsApp
            </a>
          </div>
        </div>
        <form className="lead-card" onSubmit={(e) => e.preventDefault()}>
          <h2>
            Find the Right Chandelier
            <br />
            for Your Space
          </h2>
          <label>
            <Icon name="user" />
            <input required placeholder="Name" />
          </label>
          <label>
            <Icon name="phone" />
            <input required type="tel" placeholder="Mobile Number" />
          </label>
          <label>
            <Icon name="home" />
            <select defaultValue="">
              <option value="" disabled>
                Property Type
              </option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Commercial</option>
            </select>
          </label>
          <label>
            <Icon name="wallet" />
            <select defaultValue="">
              <option value="" disabled>
                Budget Range
              </option>
              <option>25,000 - 50,000</option>
              <option>50,000 - 1,00,000</option>
              <option>1,00,000+</option>
            </select>
          </label>
          <label>
            <Icon name="pin" />
            <select defaultValue="">
              <option value="" disabled>
                Preferred Showroom
              </option>
              <option>Teynampet, Chennai</option>
              <option>Nearest showroom</option>
            </select>
          </label>
          <button className="btn gold submit">
            GET FREE LIGHTING CONSULTATION
          </button>
          <small>Our lighting specialist will contact you shortly.</small>
        </form>
      </section>
      <section className="trust-strip">
        {[
          ["calendar", "Since 2016"],
          ["showroom", "6 Showrooms"],
          ["star", "Latest Lighting Collections"],
          ["user", "Expert Product Guidance"],
          ["home", "Lighting Solutions for Every Space"],
        ].map(([icon, text]) => (
          <div key={text}>
            <b>
              <Icon name={icon} />
            </b>
            <span>{text}</span>
          </div>
        ))}
      </section>
      <section className="product-sections">
        <article id="chandeliers" className="product-feature">
          <div
            className="product-image"
            style={{ backgroundImage: "url(/images/chandeliers-section.png)" }}
          />
          <div className="product-copy">
            <p className="eyebrow">CHANDELIERS</p>
            <h2>Warmth and Elegance for Every Interior</h2>
            <p>
              Discover statement chandeliers for living rooms, dining spaces,
              bedrooms and refined hospitality interiors.
            </p>
            <div className="feature-tags">
              <span>Living Room</span>
              <span>Dining Room</span>
              <span>Classic & Modern</span>
            </div>
            <a className="btn gold" href="#consultation">
              Explore Chandeliers <span>-&gt;</span>
            </a>
          </div>
        </article>
        <article id="high-ceiling" className="product-feature reverse">
          <div
            className="product-image"
            style={{ backgroundImage: "url(/images/high-ceiling-section.png)" }}
          />
          <div className="product-copy">
            <p className="eyebrow">HIGH CEILING</p>
            <h2>Make Your Double-Height Space Unforgettable</h2>
            <p>
              Explore dramatic cascading chandeliers designed for staircases,
              foyers, villas, duplexes and hotel lobbies.
            </p>
            <div className="feature-tags">
              <span>Staircase</span>
              <span>Double Height</span>
              <span>Villa Foyer</span>
            </div>
            <a className="btn gold" href="#consultation">
              View High-Ceiling Designs <span>-&gt;</span>
            </a>
          </div>
        </article>
        <article id="outdoor-lights" className="product-feature">
          <div
            className="product-image"
            style={{ backgroundImage: "url(/images/outdoor-section.png)" }}
          />
          <div className="product-copy">
            <p className="eyebrow">OUTDOOR LIGHTS</p>
            <h2>Illuminate Your Outdoors Beautifully</h2>
            <p>
              Upgrade facades, gardens, pathways, gates and balconies with warm,
              considered outdoor lighting.
            </p>
            <div className="feature-tags">
              <span>Facade</span>
              <span>Garden</span>
              <span>Pathway & Gate</span>
            </div>
            <a className="btn gold" href="#consultation">
              Explore Outdoor Lights <span>-&gt;</span>
            </a>
          </div>
        </article>
      </section>
      <section id="spaces" className="section">
        <Title>Shop by Space</Title>
        <p className="section-intro">
          Choose the space you want to transform and explore suitable lighting
          ideas.
        </p>
        <div className="space-grid">
          {spaces.map(([title, image]) => (
            <a
              className="space-card"
              href="#consultation"
              key={title}
              style={{ backgroundImage: `url(${image})` }}
            >
              <span>
                <strong>{title}</strong>
                <small>View Designs -&gt;</small>
              </span>
            </a>
          ))}
        </div>
      </section>
      <section className="section">
        <Title>Featured Collections</Title>
        <div className="editorial">
          {collections.map((title, i) => (
            <article
              key={title}
              style={{
                backgroundImage: `url(${i === 4 ? "/images/outdoor-lights.png" : i % 2 ? "/images/hero-chandelier.png" : "/images/crystal-chandelier.png"})`,
              }}
            >
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>Ideal spaces, available sizes and finish options</p>
                <a href="#consultation">Enquire -&gt;</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <Title>Before & After Inspiration</Title>
        <div className="transform-grid">
          {[
            [
              "Living room transformation",
              "/images/crystal-chandelier.png",
              "/images/hero-chandelier.png",
            ],
            [
              "Villa facade transformation",
              "/images/hero-chandelier.png",
              "/images/outdoor-lights.png",
            ],
          ].map(([title, before, after]) => (
            <article key={title}>
              <div className="compare">
                <div
                  className="before"
                  style={{ backgroundImage: `url(${before})` }}
                >
                  <span>BEFORE</span>
                </div>
                <div style={{ backgroundImage: `url(${after})` }}>
                  <span>AFTER</span>
                </div>
                <b>-&gt;</b>
              </div>
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <Title>Lighting Expertise Beyond Product Selection</Title>
        <div className="reason-grid">
          {[
            ["diamond", "Curated modern and classic collections"],
            ["home", "Solutions for homes, villas and commercial spaces"],
            ["measure", "Guidance based on room size and ceiling height"],
            ["showroom", "Multiple showroom locations"],
            ["award", "Installation planning support"],
          ].map(([icon, text]) => (
            <article className="reason" key={text}>
              <b>
                <Icon name={icon} />
              </b>
              <h3>{text}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="section project-section">
        <Title>Project Gallery</Title>
        <div className="filters">
          {[
            "All",
            "Chandeliers",
            "High Ceiling",
            "Outdoor",
            "Residential",
            "Commercial",
          ].map((x) => (
            <button
              className={filter === x ? "active" : ""}
              onClick={() => setFilter(x)}
              key={x}
            >
              {x}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {spaces.map(([title, image], i) => (
            <article key={title} style={{ backgroundImage: `url(${image})` }}>
              <span>
                {filter === "All"
                  ? i > 3
                    ? "Commercial"
                    : "Residential"
                  : filter}
              </span>
              <div>
                <h3>{title}</h3>
                <a href="#consultation">Get a Similar Design</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="visit panel">
        <div>
          <p className="eyebrow">TEYNAMPET, CHENNAI</p>
          <h2>See the Lights Before You Decide</h2>
          <p>
            Experience the scale, finish and glow of our latest lighting
            collections at our Anna Salai showroom, opposite Kamaraj Arangam.
          </p>
          <div className="actions">
            <a className="btn gold" href="#visit-form">
              <Icon name="calendar" />
              Book Showroom Visit
            </a>
            <a className="btn outline" href="#">
              <Icon name="pin" />
              Get Directions
            </a>
            <a className="btn outline" href="tel:+919876543210">
              <Icon name="phone" />
              Call Showroom
            </a>
          </div>
        </div>
        
      </section>
      <section className="testimonial section">
        <blockquote>
          “We were unsure about the chandelier
          size for our double-height living room. The team helped us select the
          right proportion and design.
        </blockquote>
        <p>
          Sample testimonial - replace with a client-approved customer review
          before publishing.
        </p>
      </section>
      {/* <section className="section faq">
        <Title>Frequently Asked Questions</Title>
        {faqs.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </section> */}
      <section id="consultation" className="final-cta">
        <div>
          <p className="eyebrow">PERSONALISED LIGHTING SUPPORT</p>
          <h2>Let&apos;s Find the Perfect Light for Your Space</h2>
          <p>
            Share your room photo, dimensions or interior design. Our team will
            help you shortlist suitable lighting options.
          </p>
          <div className="actions">
            <a className="btn gold" href="#">
              Get Free Consultation
            </a>
            <a className="btn outline" href="https://wa.me/919876543210">
              <Icon name="whatsapp" />
              WhatsApp Your Requirement
            </a>
          </div>
        </div>
      </section>
      <footer>
        <a href="tel:+919876543210">
          <Icon name="phone" />
          Call Now
        </a>
        <a href="https://wa.me/919876543210">
          <Icon name="whatsapp" />
          WhatsApp
        </a>
      </footer>
    </main>
  );
}
const iconMap: Record<string, IconType> = {
  phone: FiPhone,
  whatsapp: FaWhatsapp,
  user: FiUser,
  home: FiHome,
  pin: FiMapPin,
  wallet: FiShoppingBag,
  calendar: FiCalendar,
  star: FiStar,
  showroom: FiShoppingBag,
  diamond: FiMaximize,
  measure: FiTool,
  award: FiAward,
  upload: FiUploadCloud,
};
function Icon({ name }: { name: string }) {
  const Component = iconMap[name] ?? FiStar;
  return <Component className="ui-icon" aria-hidden="true" />;
}
function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-title">
      <h2>{children}</h2>
      <span />
    </div>
  );
}
