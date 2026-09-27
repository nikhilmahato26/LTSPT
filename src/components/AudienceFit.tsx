import React from "react";
import { 
  Building2, 
  Users, 
  Factory, 
  Globe2, 
  ShoppingCart, 
  CheckCircle,
  Layers
} from "lucide-react";

export const AudienceFit: React.FC = () => {
  const audiences = [
    {
      title: "HR & Admin Departments",
      need: "Organized employee transport, shift synchronization, and safe daily pickup/drop mobility.",
      solution: "Tailored route planning, dedicated office shuttles, and scheduled corporate commute management.",
      icon: Users
    },
    {
      title: "Procurement & Supply Chain",
      need: "Predictable freight capacity, disciplined coordination, and compliant documentation support.",
      solution: "Consolidated billing, dedicated FTL line-hauls, and shared PTL space optimization.",
      icon: Layers
    },
    {
      title: "Importers & Exporters",
      need: "Dependable origin-to-port and port-to-door handovers with multi-partner logistics sync.",
      solution: "Coordinated cargo handling, port movement, and comprehensive documentation guidance.",
      icon: Globe2
    },
    {
      title: "Manufacturers & Industrial Hubs",
      need: "Heavy industrial transport, plant-to-distribution center runs, and specialized cargo handling.",
      solution: "Full-truckload transit, regional distribution corridors, and temperature-controlled cold-chains.",
      icon: Factory
    },
    {
      title: "Distributors & E-Commerce",
      need: "High-frequency intercity stock transfers and dependable warehouse-to-center logistics.",
      solution: "Point-to-point regional networks, scheduled line-haul runs, and secure cargo protection.",
      icon: ShoppingCart
    },
    {
      title: "Corporate Leadership & Delegates",
      need: "Premium executive car rental, business travel, airport transfers, and VIP delegation transit.",
      solution: "Chauffeured executive vehicles, short/long-term corporate rental contracts.",
      icon: Building2
    }
  ];

  return (
    <section className="section audience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            <span>Target Industries</span>
          </div>
          <h2 className="section-title">Built Exclusively for Modern B2B Operations</h2>
          <p className="section-desc">
            We deliver disciplined enterprise mobility, cross-border freight support, and heavy cargo transit tailored for diverse corporate sectors.
          </p>
        </div>

        <div className="grid-3 audience-grid">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div key={idx} className="audience-card card-glass">
                <div className="aud-header">
                  <div className="aud-icon-box">
                    <Icon size={22} className="text-red" />
                  </div>
                  <h3 className="aud-title">{aud.title}</h3>
                </div>
                
                <div className="aud-body">
                  <div className="aud-block">
                    <span className="aud-label">Core Requirement:</span>
                    <p className="aud-text">{aud.need}</p>
                  </div>
                  
                  <div className="aud-block">
                    <span className="aud-label">Luxelogix Solution:</span>
                    <p className="aud-solution-text">
                      <CheckCircle size={14} className="text-red inline-icon" />
                      {aud.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
