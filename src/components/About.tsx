import React from "react";
import { COMPANY_INFO } from "../data/companyData";
import { 
  Zap, 
  ShieldCheck, 
  Target, 
  GitMerge, 
  Award, 
  Maximize2,
  ArrowRight
} from "lucide-react";

interface AboutProps {
  onOpenQuote: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuote }) => {
  const coreValues = [
    {
      title: "Operational Efficiency",
      desc: "Streamlined processes engineered to minimize transit delays, optimize route logistics, and eliminate administrative friction for corporate clients.",
      icon: Zap
    },
    {
      title: "Reliable Transportation",
      desc: "Dependable, scheduled vehicle movements for workforce commutes and freight shipments with stringent adherence to timelines.",
      icon: ShieldCheck
    },
    {
      title: "Business-Focused Logistics",
      desc: "Services structured specifically for B2B requirements, aligning with organizational shifts, procurement schedules, and supply chains.",
      icon: Target
    },
    {
      title: "Coordinated Movement",
      desc: "Synchronized transit across road corridors, port staging, and multi-leg journeys enabled by coordinated communication.",
      icon: GitMerge
    },
    {
      title: "Professional Service",
      desc: "High standards of accountability, professional fleet management, and dedicated customer support for seamless corporate operations.",
      icon: Award
    },
    {
      title: "Scalable Solutions",
      desc: "Adaptive capacity that scales smoothly with corporate workforce expansions, peak production runs, and shifting cargo demands.",
      icon: Maximize2
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            <span>About Luxelogix</span>
          </div>
          <h2 className="section-title">
            Integrated Transportation & Logistics Solutions
          </h2>
          <p className="section-desc">
            <strong>{COMPANY_INFO.name}</strong> provides integrated transportation and logistics solutions across corporate mobility, freight forwarding and cargo transportation.
          </p>
        </div>

        {/* Divisions Summary Overview */}
        <div className="about-divisions-card card-glass">
          <div className="about-intro-grid">
            <div className="about-intro-col">
              <span className="about-badge">Division 01</span>
              <h3 className="about-div-title">Corporate Mobility</h3>
              <p className="about-div-desc">
                Organized employee transportation, scheduled workforce pickups and drops, executive car rentals, and dedicated corporate shuttle services tailored for modern workplaces.
              </p>
              <a href="#corporate-mobility" className="about-div-link">
                <span>View Mobility Solutions</span>
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="about-intro-col">
              <span className="about-badge">Division 02</span>
              <h3 className="about-div-title">Import–Export Freight Forwarding</h3>
              <p className="about-div-desc">
                Coordinated freight logistics connecting origin to port and port to door, backed by logistics documentation support and global partner-enabled transportation channels.
              </p>
              <a href="#freight-forwarding" className="about-div-link">
                <span>View Freight Forwarding</span>
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="about-intro-col">
              <span className="about-badge">Division 03</span>
              <h3 className="about-div-title">Cargo Transport</h3>
              <p className="about-div-desc">
                Flexible cargo transportation covering temperature-controlled cold-chain goods, intercity & intracity distribution, and comprehensive Full Truck Load (FTL) and Part Truck Load (PTL) runs.
              </p>
              <a href="#cargo-transport" className="about-div-link">
                <span>View Cargo Transport</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Operational Focus Values Grid */}
        <div className="about-values-header">
          <h3 className="values-subtitle">Key Operational Emphases</h3>
          <p className="values-subdesc">
            Built from the ground up to solve complex enterprise mobility and logistics demands.
          </p>
        </div>

        <div className="grid-3 about-values-grid">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="value-card card-glass">
                <div className="value-icon-box">
                  <Icon size={24} className="text-red" />
                </div>
                <h4 className="value-title">{val.title}</h4>
                <p className="value-desc">{val.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA banner within About */}
        <div className="about-cta-strip">
          <div className="about-cta-text">
            <h4>Ready to streamline your corporate transportation or freight movement?</h4>
            <p>Connect with our solutions team to discuss tailored operational coordination.</p>
          </div>
          <button onClick={onOpenQuote} className="btn btn-primary">
            <span>Get a Business Quote</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
