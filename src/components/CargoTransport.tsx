import React from "react";
import { 
  Snowflake, 
  Truck, 
  Package, 
  MapPin, 
  Layers, 
  ArrowRight, 
  Check, 
  CheckCircle2
} from "lucide-react";

interface CargoTransportProps {
  onOpenQuote: (servicePref?: string) => void;
}

export const CargoTransport: React.FC<CargoTransportProps> = ({ onOpenQuote }) => {
  const corridors = [
    { from: "City", to: "City", desc: "Long-haul highway freight corridors" },
    { from: "Warehouse", to: "Distribution Center", desc: "Bulk staging and cross-dock transit" },
    { from: "Distribution Center", to: "Customer", desc: "Commercial receiving hub delivery" },
    { from: "Local", to: "Distribution", desc: "High-density intracity intra-hub movement" },
    { from: "Regional", to: "Distribution", desc: "Connected regional manufacturing clusters" }
  ];

  return (
    <section id="cargo-transport" className="section cargo-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            <span>Division 03</span>
          </div>
          <h2 className="section-title">Cargo Transport Solutions</h2>
          <p className="section-desc">
            Flexible transportation engineered for dedicated truckloads, partial freight, regional distribution, and specialized cold-chain goods.
          </p>
        </div>

        {/* 3 Premium Service Sections */}
        <div className="cargo-cards-stack">
          {/* 1. Temperature-Controlled Cargo */}
          <div className="cargo-service-row card-glass">
            <div className="cargo-row-media">
              <img 
                src="/cold_chain.jpg" 
                alt="Temperature-Controlled Refrigerated Cargo Truck" 
                className="cargo-photo"
              />
              <div className="cargo-media-badge">
                <Snowflake size={16} />
                <span>Cold-Chain Movement</span>
              </div>
            </div>

            <div className="cargo-row-content">
              <div className="cargo-row-tag">
                <Snowflake size={16} className="text-red" />
                <span>Preservation & Controlled Environment</span>
              </div>
              <h3 className="cargo-row-title">Temperature-Controlled Cargo</h3>
              <p className="cargo-row-desc">
                Transportation solutions for temperature-sensitive cargo requiring controlled handling and movement. Built for commodities, pharmaceuticals, and perishable goods demanding thermal stability throughout transit.
              </p>

              <div className="cargo-features-grid">
                <div className="cargo-feat-item">
                  <CheckCircle2 size={16} className="text-red flex-shrink-0" />
                  <span>Refrigerated transportation</span>
                </div>
                <div className="cargo-feat-item">
                  <CheckCircle2 size={16} className="text-red flex-shrink-0" />
                  <span>Temperature-sensitive goods</span>
                </div>
                <div className="cargo-feat-item">
                  <CheckCircle2 size={16} className="text-red flex-shrink-0" />
                  <span>Controlled cargo movement</span>
                </div>
                <div className="cargo-feat-item">
                  <CheckCircle2 size={16} className="text-red flex-shrink-0" />
                  <span>Cold-chain logistics</span>
                </div>
              </div>

              <div className="cargo-row-actions">
                <button 
                  onClick={() => onOpenQuote("Temperature-Controlled Cargo")} 
                  className="btn btn-primary"
                >
                  <span>Book Cold-Chain Transport</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* 2. Intercity & Intracity Distribution */}
          <div className="cargo-service-row reverse card-glass">
            <div className="cargo-row-media">
              <img 
                src="/cargo_distribution.jpg" 
                alt="Intercity and Regional Commercial Cargo Distribution" 
                className="cargo-photo"
              />
              <div className="cargo-media-badge">
                <MapPin size={16} />
                <span>Regional Routing</span>
              </div>
            </div>

            <div className="cargo-row-content">
              <div className="cargo-row-tag">
                <Truck size={16} className="text-red" />
                <span>Multi-Tier Commercial Distribution</span>
              </div>
              <h3 className="cargo-row-title">Intercity & Intracity Distribution</h3>
              <p className="cargo-row-desc">
                Flexible distribution solutions for local, city-to-city and regional transportation requirements. Connect manufacturing sites, central warehouses, and fulfillment nodes with predictable transport schedules.
              </p>

              <div className="distribution-corridors-list">
                <h4 className="corridor-title">Key Transport Corridors Supported:</h4>
                <div className="corridor-chips-wrap">
                  {corridors.map((c, i) => (
                    <div key={i} className="corridor-chip">
                      <span className="corridor-flow">{c.from} <ArrowRight size={12} className="text-red inline-icon" /> {c.to}</span>
                      <span className="corridor-detail">{c.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cargo-row-actions">
                <button 
                  onClick={() => onOpenQuote("Intercity & Intracity Distribution")} 
                  className="btn btn-secondary"
                >
                  <span>Inquire for Distribution Corridors</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* 3. Full-Truck Load & Part-Load Cargo */}
          <div className="cargo-ftl-ptl-card card-glass">
            <div className="ftl-ptl-header">
              <div className="cargo-row-tag">
                <Layers size={16} className="text-red" />
                <span>Capacity Optimization</span>
              </div>
              <h3 className="cargo-row-title">Full-Truck Load & Part-Load Cargo</h3>
              <p className="cargo-row-desc">
                Flexible cargo movement options for both dedicated truckload and part-load requirements.
              </p>
            </div>

            <div className="grid-2 ftl-ptl-grid">
              {/* FTL */}
              <div className="load-type-card">
                <div className="load-type-header">
                  <div className="load-icon-box">
                    <Truck size={24} className="text-red" />
                  </div>
                  <div>
                    <h4 className="load-type-title">FTL — Full Truck Load</h4>
                    <span className="load-type-badge">Dedicated Movement</span>
                  </div>
                </div>
                <p className="load-type-text">
                  For dedicated truckload transportation. The entire vehicle capacity is assigned exclusively to your shipment, guaranteeing direct transit from loading dock to delivery destination with zero intermediate offloading.
                </p>
                <ul className="load-type-points">
                  <li><Check size={14} className="text-red" /> Exclusive dedicated vehicle capacity</li>
                  <li><Check size={14} className="text-red" /> Direct non-stop point-to-point transit</li>
                  <li><Check size={14} className="text-red" /> Suitable for bulk and high-volume freight</li>
                </ul>
                <button 
                  onClick={() => onOpenQuote("FTL - Full Truck Load Cargo")} 
                  className="btn btn-outline-red w-full mt-auto"
                >
                  <span>Request FTL Capacity</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* PTL */}
              <div className="load-type-card">
                <div className="load-type-header">
                  <div className="load-icon-box">
                    <Package size={24} className="text-red" />
                  </div>
                  <div>
                    <h4 className="load-type-title">PTL — Part Truck Load</h4>
                    <span className="load-type-badge">Consolidated Movement</span>
                  </div>
                </div>
                <p className="load-type-text">
                  For shared/part-load transportation requirements. Economical consolidated freight transport allowing businesses to ship palletized or partial consignments while paying solely for the cargo space utilized.
                </p>
                <ul className="load-type-points">
                  <li><Check size={14} className="text-red" /> Cost-efficient shared vehicle space</li>
                  <li><Check size={14} className="text-red" /> Ideal for partial shipments and pallet loads</li>
                  <li><Check size={14} className="text-red" /> Scheduled regional line-haul dispatch</li>
                </ul>
                <button 
                  onClick={() => onOpenQuote("PTL - Part Truck Load Cargo")} 
                  className="btn btn-outline-red w-full mt-auto"
                >
                  <span>Request PTL Consolidation</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
