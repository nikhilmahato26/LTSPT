import React, { useState } from "react";
import { FREIGHT_STAGES, FREIGHT_SERVICES } from "../data/companyData";
import { 
  Ship, 
  MapPin, 
  Truck, 
  FileCheck, 
  Globe, 
  Building, 
  ArrowRight, 
  ArrowRightCircle, 
  FileText,
  Anchor,
  CheckCircle2
} from "lucide-react";

interface FreightForwardingProps {
  onOpenQuote: (servicePref?: string) => void;
}

export const FreightForwarding: React.FC<FreightForwardingProps> = ({ onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "MapPin": return <MapPin size={22} />;
      case "Truck": return <Truck size={22} />;
      case "FileCheck": return <FileCheck size={22} />;
      case "Globe": return <Globe size={22} />;
      case "Building": return <Building size={22} />;
      default: return <Ship size={22} />;
    }
  };

  return (
    <section id="freight-forwarding" className="section freight-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            <span>Division 02</span>
          </div>
          <h2 className="section-title">Import–Export Freight Forwarding</h2>
          <p className="section-desc">
            Coordinated freight movement with support across key stages of the logistics journey.
          </p>
        </div>

        {/* Visual Banner Card */}
        <div className="freight-banner-card card-glass">
          <div className="freight-banner-grid">
            <div className="freight-banner-media">
              <img 
                src="/freight.jpg" 
                alt="Global Import-Export Freight Forwarding Terminal" 
                className="freight-photo"
              />
              <div className="freight-photo-overlay">
                <span className="freight-pill-tag">
                  <Anchor size={14} />
                  <span>Port & Multimodal Freight Coordination</span>
                </span>
              </div>
            </div>

            <div className="freight-banner-content">
              <div className="freight-card-badge">
                <Globe size={16} />
                <span>Intermodal Cargo Transit</span>
              </div>
              <h3 className="freight-main-title">
                Coordinated Freight Networks from Source to Final Port
              </h3>
              <p className="freight-main-desc">
                We bridge domestic factory staging, container movement, and port logistics channels through structured coordination with reliable global logistics partners.
              </p>

              <div className="freight-key-services">
                {FREIGHT_SERVICES.map((srv, idx) => (
                  <div key={idx} className="freight-service-bullet">
                    <CheckCircle2 size={18} className="text-red flex-shrink-0" />
                    <div>
                      <strong>{srv.title}</strong>
                      <p>{srv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="freight-action-wrap">
                <button 
                  onClick={() => onOpenQuote("Import–Export Freight Forwarding")} 
                  className="btn btn-primary"
                >
                  <FileText size={16} />
                  <span>Talk to Our Freight Team</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Logistics Journey / Timeline */}
        <div className="freight-journey-wrapper card-glass">
          <div className="journey-header">
            <div className="journey-title-box">
              <span className="journey-eyebrow">Interactive Process Flow</span>
              <h3 className="journey-title">Five-Stage Freight Logistics Journey</h3>
            </div>
            <p className="journey-desc">
              Click through each sequential step to view how cargo is coordinated from origin pickup to final destination delivery.
            </p>
          </div>

          {/* Timeline Steps Desktop & Tablet */}
          <div className="journey-timeline">
            {FREIGHT_STAGES.map((stage, idx) => (
              <React.Fragment key={stage.step}>
                <div 
                  className={`journey-step-node ${activeStep === idx ? "active" : ""}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="node-top-bar">
                    <span className="node-step-tag">STEP {stage.step}</span>
                    <div className="node-icon-circle">
                      {getStepIcon(stage.icon)}
                    </div>
                  </div>
                  <h4 className="node-title">{stage.title}</h4>
                  <p className="node-desc">{stage.desc}</p>
                  <div className="node-active-indicator" />
                </div>

                {idx < FREIGHT_STAGES.length - 1 && (
                  <div className="journey-connector">
                    <div className="connector-line" />
                    <div className="connector-arrow">
                      <ArrowRight size={16} className="arrow-pulse" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Active Step Highlight Showcase Box */}
          <div className="journey-active-callout">
            <div className="active-callout-icon">
              {getStepIcon(FREIGHT_STAGES[activeStep].icon)}
            </div>
            <div className="active-callout-info">
              <span className="active-step-indicator">
                Current Focus: STEP {FREIGHT_STAGES[activeStep].step}
              </span>
              <h4 className="active-step-heading">{FREIGHT_STAGES[activeStep].title} Stage</h4>
              <p className="active-step-text">{FREIGHT_STAGES[activeStep].desc}</p>
            </div>
            <div className="active-callout-cta">
              <button 
                onClick={() => onOpenQuote(`Freight Inquiry - Stage ${FREIGHT_STAGES[activeStep].title}`)} 
                className="btn btn-secondary"
              >
                <span>Consult on this Stage</span>
                <ArrowRightCircle size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Global Partner-Enabled Positioning Note */}
        <div className="freight-partner-strip">
          <div className="partner-strip-content">
            <Globe size={24} className="text-red flex-shrink-0" />
            <p>
              <strong>Global Partner-Enabled Logistics:</strong> All international freight operations are coordinated in conjunction with specialized, established logistics networks to ensure seamless door-to-port and port-to-door handovers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
