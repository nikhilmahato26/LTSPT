import React, { useState } from "react";
import { 
  PackageCheck, 
  Truck, 
  Boxes, 
  FileText, 
  GitFork, 
  Building2, 
  ArrowDown, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export const LogisticsFlow: React.FC = () => {
  const [selectedFlow, setSelectedFlow] = useState<number>(0);

  const flowSteps = [
    {
      step: 1,
      title: "Pickup",
      subtitle: "Source Origin Logistics",
      icon: PackageCheck,
      details: "Organized collection from client manufacturing facilities, supplier docks, or corporate pickup hubs.",
      bullets: [
        "Consignment verification at source",
        "Vehicle dispatch & scheduled loading",
        "Initial dispatch manifest generation"
      ]
    },
    {
      step: 2,
      title: "Transportation",
      subtitle: "Secure Transit Corridor",
      icon: Truck,
      details: "Road transit across planned line-haul routes utilizing dedicated or consolidated fleet vehicles.",
      bullets: [
        "Optimized transit corridor routing",
        "Safe cargo fastening & protection",
        "Direct point-to-point movement"
      ]
    },
    {
      step: 3,
      title: "Freight / Cargo Handling",
      subtitle: "Staging & Sorting",
      icon: Boxes,
      details: "Cross-docking, multimodal transfer, container stuffing, or cold-chain preservation handling.",
      bullets: [
        "Careful cargo staging & transfer",
        "Temperature-controlled verification",
        "Port or intermodal consolidation"
      ]
    },
    {
      step: 4,
      title: "Documentation & Coordination",
      subtitle: "Logistics Verification",
      icon: FileText,
      details: "Consignment billing, customs support, transit documentation, and partner liaison communication.",
      bullets: [
        "Shipping documentation assistance",
        "Customs coordination support",
        "Multi-stakeholder status alignment"
      ]
    },
    {
      step: 5,
      title: "Distribution",
      subtitle: "Intra/Intercity Routing",
      icon: GitFork,
      details: "Strategic delivery dispatch from central warehouses or distribution nodes to regional delivery routes.",
      bullets: [
        "Warehouse-to-DC distribution",
        "Intracity & intercity dispatch",
        "Consolidated route drop schedules"
      ]
    },
    {
      step: 6,
      title: "Destination",
      subtitle: "Verified Handover",
      icon: Building2,
      details: "Safe, punctual final delivery at customer receiving bays, commercial retail hubs, or port terminals.",
      bullets: [
        "Final offloading inspection",
        "Proof of delivery confirmation",
        "Complete consignment closure"
      ]
    }
  ];

  return (
    <section id="logistics-flow" className="section flow-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            <span>Operational Architecture</span>
          </div>
          <h2 className="section-title">From Origin to Destination</h2>
          <p className="section-desc">
            A seamless, transparent 6-stage logistics pipeline coordinated with discipline and precision.
          </p>
        </div>

        {/* Central Logo & Brand Assurance Card */}
        <div className="flow-brand-card card-glass">
          <div className="flow-logo-showcase">
            <img 
              src="/logo.png" 
              alt="Luxelogix Trans Solutions Private Limited" 
              className="flow-brand-logo"
            />
            <p className="flow-brand-caption">
              End-to-end synchronized movement backed by <strong>Luxelogix Trans Solutions Private Limited</strong>
            </p>
          </div>
        </div>

        {/* Interactive Flow Visual Grid */}
        <div className="flow-journey-container">
          {/* Vertical / Horizontal Step Chain */}
          <div className="flow-steps-grid">
            {flowSteps.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = selectedFlow === idx;
              return (
                <React.Fragment key={item.step}>
                  <div 
                    className={`flow-step-card card-glass ${isSelected ? "is-selected" : ""}`}
                    onClick={() => setSelectedFlow(idx)}
                  >
                    <div className="flow-step-num">0{item.step}</div>
                    <div className="flow-icon-wrapper">
                      <Icon size={24} className="flow-icon" />
                    </div>
                    <h3 className="flow-step-title">{item.title}</h3>
                    <p className="flow-step-sub">{item.subtitle}</p>
                    <div className="flow-pulse-bar" />
                  </div>

                  {idx < flowSteps.length - 1 && (
                    <div className="flow-arrow-indicator">
                      <div className="flow-arrow-desktop">
                        <ArrowRight size={20} className="arrow-glow" />
                      </div>
                      <div className="flow-arrow-mobile">
                        <ArrowDown size={20} className="arrow-glow" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Active Flow Detail Card */}
          <div className="flow-detail-panel card-glass">
            <div className="flow-detail-header">
              <div className="flow-detail-badge">
                <span>Stage 0{flowSteps[selectedFlow].step} Deep Dive</span>
              </div>
              <h3 className="flow-detail-title">{flowSteps[selectedFlow].title}</h3>
              <p className="flow-detail-desc">{flowSteps[selectedFlow].details}</p>
            </div>

            <div className="flow-detail-bullets">
              <h4 className="detail-bullets-title">Operational Controls:</h4>
              <div className="detail-bullets-grid">
                {flowSteps[selectedFlow].bullets.map((b, i) => (
                  <div key={i} className="detail-bullet-item">
                    <CheckCircle2 size={18} className="text-red flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo in Destination Section */}
            {selectedFlow === 5 && (
              <div className="destination-logo-callout">
                <img 
                  src="/logo.png" 
                  alt="Luxelogix Logo at Destination" 
                  className="destination-callout-logo"
                />
                <p>
                  Consignment successfully delivered with full corporate assurance from <strong>Luxelogix Trans Solutions Private Limited</strong>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
