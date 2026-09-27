import React from "react";
import { COMPANY_INFO } from "../data/companyData";
import { Phone, ArrowRight, Shield, Award, CheckCircle2, ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="hero" className="hero-section">
      {/* Background Image Container with Gradient Overlay */}
      <div className="hero-bg-wrapper">
        <img 
          src="/hero_bg.jpg" 
          alt="Luxelogix Corporate Mobility and Freight Logistics Fleet" 
          className="hero-bg-img"
        />
        <div className="hero-overlay" />
        <div className="hero-grid-pattern" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="hero-pulse-dot" />
            <span>CORPORATE MOBILITY • FREIGHT • CARGO</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            Moving People. <br />
            <span className="text-gradient">Moving Business.</span> <br />
            Moving Possibilities.
          </h1>

          {/* Supporting Copy */}
          <p className="hero-subtitle">
            {COMPANY_INFO.subTagline}
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <button 
              onClick={onOpenQuote} 
              className="btn btn-primary btn-lg hero-cta-primary"
            >
              <span>Get a Business Quote</span>
              <ArrowRight size={18} />
            </button>

            <a 
              href="#divisions" 
              className="btn btn-secondary btn-lg"
            >
              <span>Explore Our Services</span>
            </a>

            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="btn btn-secondary btn-lg hero-cta-call"
            >
              <Phone size={18} className="text-red" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Operational Highlight Badges */}
          <div className="hero-badges">
            <div className="hero-badge-pill">
              <Shield size={16} className="text-red" />
              <span>Reliable Corporate Mobility</span>
            </div>
            <div className="hero-badge-pill">
              <CheckCircle2 size={16} className="text-red" />
              <span>Coordinated Multi-Stage Freight</span>
            </div>
            <div className="hero-badge-pill">
              <Award size={16} className="text-red" />
              <span>Intracity, Intercity & Temperature-Controlled Cargo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Down Indicator */}
      <a href="#trust-strip" className="hero-scroll-down" aria-label="Scroll down to trust strip">
        <span className="scroll-text">Explore Divisions</span>
        <ChevronDown size={18} className="bounce-anim" />
      </a>
    </section>
  );
};
