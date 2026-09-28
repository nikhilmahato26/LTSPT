import React from "react";
import { COMPANY_INFO } from "../data/companyData";
import { Phone, Mail, MapPin, ArrowUp, ChevronRight, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Top Footer Grid */}
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#hero" className="footer-logo-link">
              <img 
                src="/logo.png" 
                alt="Luxelogix Trans Solutions Private Limited" 
                className="footer-logo"
              />
            </a>
            <p className="footer-brand-desc">
              Integrated transportation and logistics solutions delivering dependable corporate workforce mobility, structured import–export freight coordination, and high-precision cargo distribution.
            </p>
            <div className="footer-badge">
              <ShieldCheck size={16} className="text-red" />
              <span>Corporate B2B Transportation Partner</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#hero"><ChevronRight size={14} className="text-red" /> Home</a></li>
              <li><a href="#about"><ChevronRight size={14} className="text-red" /> About Solutions</a></li>
              <li><a href="#divisions"><ChevronRight size={14} className="text-red" /> Business Divisions</a></li>
              <li><a href="#logistics-flow"><ChevronRight size={14} className="text-red" /> From Origin to Destination</a></li>
              <li><a href="#contact"><ChevronRight size={14} className="text-red" /> Request a Quote</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Core Divisions</h4>
            <ul className="footer-links-list">
              <li><a href="#corporate-mobility"><ChevronRight size={14} className="text-red" /> Corporate Mobility</a></li>
              <li><a href="#corporate-mobility"><ChevronRight size={14} className="text-red" /> Employee Transportation</a></li>
              <li><a href="#corporate-mobility"><ChevronRight size={14} className="text-red" /> Corporate Car Rental</a></li>
              <li><a href="#freight-forwarding"><ChevronRight size={14} className="text-red" /> Import–Export Freight</a></li>
              <li><a href="#cargo-transport"><ChevronRight size={14} className="text-red" /> Temperature-Controlled Cargo</a></li>
              <li><a href="#cargo-transport"><ChevronRight size={14} className="text-red" /> FTL & PTL Transport</a></li>
            </ul>
          </div>

          {/* Registered Address & Direct Contacts */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Registered Office</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="text-red flex-shrink-0" />
              <address className="footer-address">
                {COMPANY_INFO.address.line1}<br />
                {COMPANY_INFO.address.line2}<br />
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.taluka},<br />
                {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}
              </address>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} className="text-red flex-shrink-0" />
              <div className="footer-phones-group">
                <a href={`tel:${COMPANY_INFO.phone}`} className="footer-contact-link" title={`Call ${COMPANY_INFO.phone}`}>
                  {COMPANY_INFO.phone}
                </a>
                <a href={`tel:${COMPANY_INFO.phone2}`} className="footer-contact-link" title={`Call ${COMPANY_INFO.phone2}`}>
                  {COMPANY_INFO.phone2}
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} className="text-red flex-shrink-0" />
              <div className="footer-emails">
                <a href={`mailto:${COMPANY_INFO.emails.sales}`} className="footer-contact-link">
                  {COMPANY_INFO.emails.sales}
                </a>
                <a href={`mailto:${COMPANY_INFO.emails.support}`} className="footer-contact-link">
                  {COMPANY_INFO.emails.support}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} <strong>{COMPANY_INFO.name}</strong>. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <span className="footer-bottom-tag">{COMPANY_INFO.businessType}</span>
            <button onClick={scrollToTop} className="footer-back-to-top" aria-label="Scroll back to top">
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
