import React, { useState, useEffect } from "react";
import { COMPANY_INFO } from "../data/companyData";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  FileText, 
  MessageSquare
} from "lucide-react";

interface NavbarProps {
  onOpenQuote: (servicePref?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Divisions", href: "#divisions" },
    { label: "Corporate Mobility", href: "#corporate-mobility" },
    { label: "Freight Forwarding", href: "#freight-forwarding" },
    { label: "Cargo Transport", href: "#cargo-transport" },
    { label: "Logistics Flow", href: "#logistics-flow" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* Top Utility Bar (Desktop) */}
      <header className={`navbar-wrapper ${isScrolled ? "is-sticky" : ""}`}>
        <div className="top-bar">
          <div className="container top-bar-inner">
            <div className="top-bar-left">
              <span className="top-item">
                <MapPin size={13} className="text-red" />
                <span>Pune, Maharashtra, India</span>
              </span>
              <span className="top-divider">|</span>
              <a href={`mailto:${COMPANY_INFO.emails.sales}`} className="top-item">
                <Mail size={13} className="text-red" />
                <span>{COMPANY_INFO.emails.sales}</span>
              </a>
            </div>
            <div className="top-bar-right">
              <span className="top-badge">B2B Corporate & Freight Solutions</span>
              <a href={`tel:${COMPANY_INFO.phone}`} className="top-phone">
                <Phone size={13} className="text-red" />
                <span>Call Us: <strong>{COMPANY_INFO.phone}</strong></span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="main-nav">
          <div className="container nav-container">
            {/* Brand Logo */}
            <a href="#hero" className="brand-logo-link" aria-label="Luxelogix Home">
              <img 
                src="/logo.png" 
                alt="Luxelogix Trans Solutions Private Limited Logo" 
                className="brand-logo-img"
              />
            </a>

            {/* Desktop Navigation Links */}
            <div className="nav-menu-desktop">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="nav-link"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Nav Actions */}
            <div className="nav-actions-desktop">
              <a 
                href={`tel:${COMPANY_INFO.phone}`} 
                className="btn btn-secondary nav-call-btn"
                title="Call 9021212052"
              >
                <Phone size={16} className="text-red" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <button 
                onClick={() => onOpenQuote()} 
                className="btn btn-primary nav-quote-btn"
              >
                <FileText size={16} />
                <span>Get a Quote</span>
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <button 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slide Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-header">
          <img src="/logo.png" alt="Luxelogix Logo" className="mobile-drawer-logo" />
          <button 
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="mobile-drawer-links">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{link.label}</span>
              <ChevronRight size={18} className="text-muted" />
            </a>
          ))}
        </div>

        <div className="mobile-drawer-footer">
          <div className="mobile-info-card">
            <p className="mobile-info-title">Need direct coordination?</p>
            <a href={`tel:${COMPANY_INFO.phone}`} className="mobile-call-link">
              <Phone size={18} className="text-red" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <p className="mobile-address-text">{COMPANY_INFO.address.full}</p>
          </div>

          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }} 
            className="btn btn-primary w-full"
            style={{ width: "100%", marginTop: "16px" }}
          >
            <FileText size={18} />
            <span>Request a Quote</span>
          </button>
        </div>
      </div>

      {/* Mobile Sticky Bottom Action Strip */}
      <div className="mobile-bottom-bar">
        <a href={`tel:${COMPANY_INFO.phone}`} className="mobile-bottom-item">
          <Phone size={18} />
          <span>Call</span>
        </a>
        <a 
          href={`https://wa.me/91${COMPANY_INFO.phone}?text=Hello%20Luxelogix%20Trans%20Solutions%2C%20I%20would%20like%20to%20inquire%20about%20corporate%20mobility%20and%20logistics%20solutions.`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mobile-bottom-item text-green"
        >
          <MessageSquare size={18} />
          <span>WhatsApp</span>
        </a>
        <button 
          onClick={() => onOpenQuote()} 
          className="mobile-bottom-item mobile-bottom-cta"
        >
          <FileText size={18} />
          <span>Get Quote</span>
        </button>
      </div>

      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="drawer-backdrop" 
          onClick={() => setMobileMenuOpen(false)} 
        />
      )}
    </>
  );
};
