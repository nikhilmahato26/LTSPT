import React from "react";
import { Users, Ship, Truck, ArrowUpRight } from "lucide-react";

export const TrustStrip: React.FC = () => {
  const pillars = [
    {
      id: "corporate-mobility",
      title: "Corporate Mobility",
      desc: "Employee Transportation & Corporate Car Rental",
      icon: Users,
      href: "#corporate-mobility",
      tag: "Pillar 01"
    },
    {
      id: "freight-forwarding",
      title: "Freight Forwarding",
      desc: "Import–Export Logistics & Documentation Support",
      icon: Ship,
      href: "#freight-forwarding",
      tag: "Pillar 02"
    },
    {
      id: "cargo-transport",
      title: "Cargo Transport",
      desc: "Temperature-Controlled, FTL & PTL Transportation",
      icon: Truck,
      href: "#cargo-transport",
      tag: "Pillar 03"
    }
  ];

  return (
    <section id="trust-strip" className="trust-strip-section">
      <div className="container">
        <div className="trust-strip-grid">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <a 
                key={pillar.id} 
                href={pillar.href} 
                className="trust-strip-card"
              >
                <div className="trust-card-header">
                  <div className="trust-icon-box">
                    <Icon size={24} className="trust-icon" />
                  </div>
                  <span className="trust-pill-tag">{pillar.tag}</span>
                  <div className="trust-arrow-btn">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <div className="trust-card-body">
                  <h3 className="trust-card-title">{pillar.title}</h3>
                  <p className="trust-card-desc">{pillar.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
