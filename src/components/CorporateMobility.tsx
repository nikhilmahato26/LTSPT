import React from "react";
import { 
  Users, 
  Car, 
  Bus, 
  Check, 
  ArrowRight, 
  Briefcase, 
  Clock, 
  Calendar,
  Building2
} from "lucide-react";

interface CorporateMobilityProps {
  onOpenQuote: (servicePref?: string) => void;
}

export const CorporateMobility: React.FC<CorporateMobilityProps> = ({ onOpenQuote }) => {
  return (
    <section id="corporate-mobility" className="section mobility-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            <span>Division 01</span>
          </div>
          <h2 className="section-title">Corporate Mobility Solutions</h2>
          <p className="section-desc">
            Reliable employee and business transportation designed around corporate requirements.
          </p>
        </div>

        {/* Feature Hero Card with Real Photography */}
        <div className="mobility-banner-card card-glass">
          <div className="mobility-banner-grid">
            <div className="mobility-banner-content">
              <div className="mobility-banner-badge">
                <Building2 size={16} />
                <span>Enterprise Workforce Mobility</span>
              </div>
              <h3 className="mobility-banner-title">
                Safe, Organized & Dependable Commute Operations
              </h3>
              <p className="mobility-banner-text">
                Designed for corporate human resources, administrative leaders, and operational facilities requiring punctual daily personnel transit and executive fleet readiness.
              </p>
              
              <div className="mobility-banner-stats">
                <div className="banner-stat-item">
                  <Clock size={20} className="text-red" />
                  <div>
                    <strong>Punctual Shifts</strong>
                    <span>Coordinated pickup & drop</span>
                  </div>
                </div>
                <div className="banner-stat-item">
                  <Briefcase size={20} className="text-red" />
                  <div>
                    <strong>Executive Standards</strong>
                    <span>Clean, professional vehicles</span>
                  </div>
                </div>
              </div>

              <div className="mobility-banner-actions">
                <button 
                  onClick={() => onOpenQuote("Corporate Mobility - Employee Transportation")} 
                  className="btn btn-primary"
                >
                  <span>Discuss Your Mobility Requirement</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="mobility-banner-media">
              <img 
                src="/mobility.jpg" 
                alt="Luxelogix Corporate Mobility Fleet" 
                className="mobility-photo"
              />
              <div className="mobility-photo-caption">
                <span>Executive Transport & Workforce Vans</span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Large Service Cards */}
        <div className="grid-3 mobility-cards-grid">
          {/* 1. End-to-End Employee Transportation */}
          <div className="service-detail-card card-glass">
            <div className="service-card-header">
              <div className="service-card-icon">
                <Users size={26} />
              </div>
              <span className="service-number">01</span>
            </div>
            
            <h3 className="service-card-title">
              End-to-End Employee Transportation
            </h3>
            <p className="service-card-intro">
              Complete workforce movement solutions structured around shift timetables, designated cluster routes, and organized transit management.
            </p>

            <div className="service-card-features-box">
              <h4 className="features-box-heading">Key Capabilities:</h4>
              <ul className="service-feature-checklist">
                <li><Check size={16} className="text-red" /> <span>Employee Pickup & Drop</span></li>
                <li><Check size={16} className="text-red" /> <span>Office Commute Management</span></li>
                <li><Check size={16} className="text-red" /> <span>Corporate Transportation</span></li>
                <li><Check size={16} className="text-red" /> <span>Employee Route Planning</span></li>
                <li><Check size={16} className="text-red" /> <span>Scheduled Transportation</span></li>
                <li><Check size={16} className="text-red" /> <span>Daily Workforce Mobility</span></li>
                <li><Check size={16} className="text-red" /> <span>Corporate Transport Coordination</span></li>
              </ul>
            </div>

            <div className="service-card-btn-wrap">
              <button 
                onClick={() => onOpenQuote("End-to-End Employee Transportation")} 
                className="btn btn-secondary w-full"
              >
                <span>Plan Employee Commute</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* 2. Corporate Car Rental */}
          <div className="service-detail-card card-glass">
            <div className="service-card-header">
              <div className="service-card-icon">
                <Car size={26} />
              </div>
              <span className="service-number">02</span>
            </div>

            <h3 className="service-card-title">
              Corporate Car Rental
            </h3>
            <p className="service-card-intro">
              Dedicated passenger vehicles for business delegations, leadership teams, guest transportation, and executive meetings.
            </p>

            <div className="service-card-features-box">
              <h4 className="features-box-heading">Use Cases Supported:</h4>
              <ul className="service-feature-checklist">
                <li><Check size={16} className="text-red" /> <span>Business Travel</span></li>
                <li><Check size={16} className="text-red" /> <span>Corporate Meetings</span></li>
                <li><Check size={16} className="text-red" /> <span>Airport Transfers</span></li>
                <li><Check size={16} className="text-red" /> <span>Executive Transportation</span></li>
                <li><Check size={16} className="text-red" /> <span>Client Transportation</span></li>
                <li><Check size={16} className="text-red" /> <span>Short-Term Corporate Rental</span></li>
                <li><Check size={16} className="text-red" /> <span>Long-Term Corporate Vehicle Requirements</span></li>
              </ul>
            </div>

            <div className="service-card-btn-wrap">
              <button 
                onClick={() => onOpenQuote("Corporate Car Rental")} 
                className="btn btn-secondary w-full"
              >
                <span>Book Corporate Fleet</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* 3. Shuttle Services */}
          <div className="service-detail-card card-glass">
            <div className="service-card-header">
              <div className="service-card-icon">
                <Bus size={26} />
              </div>
              <span className="service-number">03</span>
            </div>

            <h3 className="service-card-title">
              Shuttle Services
            </h3>
            <p className="service-card-intro">
              High-frequency, organized shuttle links connecting corporate business parks, transit hubs, campuses, and plant locations.
            </p>

            <div className="service-card-features-box">
              <h4 className="features-box-heading">Shuttle Scope:</h4>
              <ul className="service-feature-checklist">
                <li><Check size={16} className="text-red" /> <span>Office Shuttle</span></li>
                <li><Check size={16} className="text-red" /> <span>Employee Shuttle</span></li>
                <li><Check size={16} className="text-red" /> <span>Campus Transportation</span></li>
                <li><Check size={16} className="text-red" /> <span>Point-to-Point Shuttle</span></li>
                <li><Check size={16} className="text-red" /> <span>Scheduled Shuttle Services</span></li>
              </ul>
            </div>

            <div className="service-card-btn-wrap">
              <button 
                onClick={() => onOpenQuote("Corporate Shuttle Services")} 
                className="btn btn-secondary w-full"
              >
                <span>Configure Shuttle Route</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Section Bottom Callout */}
        <div className="mobility-bottom-callout">
          <div className="callout-content">
            <Calendar size={28} className="text-red flex-shrink-0" />
            <div>
              <h4>Need customized shift timings or multiple office locations?</h4>
              <p>We coordinate pickup schedules and passenger allocation according to your facility's roster.</p>
            </div>
          </div>
          <button 
            onClick={() => onOpenQuote("Corporate Mobility Consultation")} 
            className="btn btn-outline-red"
          >
            <span>Discuss Your Mobility Requirement</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
