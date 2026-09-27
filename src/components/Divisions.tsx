import React from "react";
import { Users, Ship, Truck, ArrowRight, CheckCircle } from "lucide-react";

interface DivisionsProps {
  onSelectDivision: (divisionId: string) => void;
}

export const Divisions: React.FC<DivisionsProps> = ({ onSelectDivision }) => {
  const divisionsData = [
    {
      id: "corporate-mobility",
      title: "CORPORATE MOBILITY",
      tagline: "Seamless transportation for modern workplaces.",
      badge: "Workforce Mobility",
      icon: Users,
      services: [
        "End-to-End Employee Transportation",
        "Corporate Car Rental",
        "Shuttle Services"
      ],
      ctaText: "Explore Corporate Mobility",
      anchor: "#corporate-mobility"
    },
    {
      id: "freight-forwarding",
      title: "FREIGHT FORWARDING",
      tagline: "Connecting shipments from origin to destination.",
      badge: "Import–Export",
      icon: Ship,
      services: [
        "Door-to-Port / Port-to-Door",
        "Documentation & Customs Support",
        "Global Partner-Enabled Freight Logistics"
      ],
      ctaText: "Explore Freight Forwarding",
      anchor: "#freight-forwarding"
    },
    {
      id: "cargo-transport",
      title: "CARGO TRANSPORT",
      tagline: "Flexible transportation for every cargo requirement.",
      badge: "Commercial Cargo",
      icon: Truck,
      services: [
        "Temperature-Controlled Cargo",
        "Intercity & Intracity Distribution",
        "Full-Truck Load & Part-Load Cargo"
      ],
      ctaText: "Explore Cargo Transport",
      anchor: "#cargo-transport"
    }
  ];

  return (
    <section id="divisions" className="section divisions-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="section-title">Three Dedicated Business Divisions</h2>
          <p className="section-desc">
            Engineered to deliver end-to-end reliability for personnel transit, international shipments, and high-capacity cargo movement.
          </p>
        </div>

        <div className="grid-3 divisions-grid">
          {divisionsData.map((division) => {
            const Icon = division.icon;
            return (
              <div key={division.id} className="division-card card-glass">
                <div className="division-card-top">
                  <div className="division-badge-wrap">
                    <span className="division-badge">{division.badge}</span>
                  </div>
                  <div className="division-icon-wrap">
                    <Icon size={32} className="division-icon" />
                  </div>
                  <h3 className="division-title">{division.title}</h3>
                  <p className="division-tagline">{division.tagline}</p>
                </div>

                <div className="division-card-divider" />

                <div className="division-card-services">
                  <h4 className="services-list-title">Core Services Included:</h4>
                  <ul className="division-service-list">
                    {division.services.map((item, idx) => (
                      <li key={idx} className="division-service-item">
                        <CheckCircle size={16} className="text-red flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="division-card-footer">
                  <a 
                    href={division.anchor} 
                    className="btn btn-outline-red w-full division-cta-btn"
                    onClick={() => onSelectDivision(division.id)}
                  >
                    <span>{division.ctaText}</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
