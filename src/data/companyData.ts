export interface ServiceItem {
  title: string;
  desc?: string;
  points?: string[];
}

export const COMPANY_INFO = {
  name: "Luxelogix Trans Solutions Private Limited",
  brandName: "LUXELOGIX",
  tagline: "Moving People. Moving Business. Moving Possibilities.",
  subTagline: "Integrated mobility, freight forwarding and cargo transportation solutions built for modern businesses.",
  phone: "9021212052",
  phone2: "9004620865",
  phones: ["9021212052", "9004620865"],
  phoneFormatted: "+91 90212 12052",
  phone2Formatted: "+91 90046 20865",
  emails: {
    sales: "sales@luxelogix.com",
    support: "support@luxelogix.com",
  },
  address: {
    line1: "Sr No-41/3, Fl-B-103, Pranam Towers",
    line2: "Near Radcliffe, Charoli Bk",
    city: "Pune",
    taluka: "Khed",
    state: "Maharashtra",
    country: "India",
    full: "Sr No-41/3, Fl-B-103, Pranam Towers, Near Radcliffe, Charoli Bk, Pune, Khed, Maharashtra, India",
  },
  businessType: "Corporate Mobility | Freight Forwarding | Cargo Transportation",
};

export const DIVISIONS = [
  {
    id: "corporate-mobility",
    title: "Corporate Mobility",
    badge: "Workplace Logistics",
    subtitle: "Seamless transportation for modern workplaces.",
    description: "End-to-end workforce mobility, scheduled executive car rental, and organized point-to-point shuttle operations designed to optimize corporate commute reliability.",
    icon: "Users",
    linkText: "Explore Corporate Mobility",
    services: [
      "End-to-End Employee Transportation",
      "Corporate Car Rental",
      "Shuttle Services"
    ]
  },
  {
    id: "freight-forwarding",
    title: "Freight Forwarding",
    badge: "Import–Export Logistics",
    subtitle: "Connecting shipments from origin to destination.",
    description: "Door-to-port and port-to-door freight movements, coordinated customs and documentation guidance, and partner-enabled multi-stage cargo management.",
    icon: "Ship",
    linkText: "Explore Freight Forwarding",
    services: [
      "Door-to-Port / Port-to-Door Movement",
      "Documentation & Customs Support",
      "Global Partner-Enabled Freight Logistics"
    ]
  },
  {
    id: "cargo-transport",
    title: "Cargo Transport",
    badge: "Distribution & Cold-Chain",
    subtitle: "Flexible transportation for every cargo requirement.",
    description: "High-precision temperature-controlled logistics, full truck load (FTL), part truck load (PTL), and seamless intracity/intercity distribution networks.",
    icon: "Truck",
    linkText: "Explore Cargo Transport",
    services: [
      "Temperature-Controlled Cargo",
      "Intercity & Intracity Distribution",
      "Full-Truck Load & Part-Load Cargo"
    ]
  }
];

export const CORPORATE_MOBILITY_SERVICES = [
  {
    id: "employee-transportation",
    title: "End-to-End Employee Transportation",
    summary: "Safe, reliable, and organized employee movement solutions customized to your organization's work shifts and facility locations.",
    features: [
      "Employee Pickup & Drop",
      "Office Commute Management",
      "Corporate Transportation",
      "Employee Route Planning",
      "Scheduled Transportation",
      "Daily Workforce Mobility",
      "Corporate Transport Coordination"
    ]
  },
  {
    id: "corporate-car-rental",
    title: "Corporate Car Rental",
    summary: "Professional vehicle rental solutions tailored for leadership travel, executive delegations, and corporate hospitality.",
    features: [
      "Business Travel",
      "Corporate Meetings",
      "Airport Transfers",
      "Executive Transportation",
      "Client Transportation",
      "Short-Term Corporate Rental",
      "Long-Term Corporate Vehicle Requirements"
    ]
  },
  {
    id: "shuttle-services",
    title: "Shuttle Services",
    summary: "Dedicated shuttle networks linking key transport hubs, corporate campuses, and designated pickup clusters on strict schedules.",
    features: [
      "Office Shuttle",
      "Employee Shuttle",
      "Campus Transportation",
      "Point-to-Point Shuttle",
      "Scheduled Shuttle Services"
    ]
  }
];

export const FREIGHT_STAGES = [
  {
    step: "01",
    title: "Origin",
    desc: "Shipment pickup and movement from the source location or manufacturing facility.",
    icon: "MapPin"
  },
  {
    step: "02",
    title: "Transportation",
    desc: "Movement toward the relevant port, container freight station, or primary cargo terminal.",
    icon: "Truck"
  },
  {
    step: "03",
    title: "Documentation",
    desc: "Comprehensive logistics documentation and customs-related coordination support.",
    icon: "FileCheck"
  },
  {
    step: "04",
    title: "Freight Coordination",
    desc: "Coordinated cargo handling and transit enabled through trusted global logistics partners.",
    icon: "Globe"
  },
  {
    step: "05",
    title: "Destination",
    desc: "Port-to-door or destination delivery completed safely at customer receiving docks.",
    icon: "Building"
  }
];

export const FREIGHT_SERVICES = [
  {
    title: "Door-to-Port / Port-to-Door Movement",
    desc: "End-to-end freight movement seamlessly managed between customer origin, staging facilities, port terminals, and end delivery locations."
  },
  {
    title: "Documentation & Customs Support",
    desc: "Dedicated support for shipping compliance, consignment paperwork, bills of lading, and customs-related procedural coordination."
  },
  {
    title: "Global Partner-Enabled Freight Logistics",
    desc: "Strategically coordinated freight networks supported by established global logistics partners for seamless cross-border transit."
  }
];

export const CARGO_SERVICES = [
  {
    id: "temp-controlled",
    title: "Temperature-Controlled Cargo",
    tagline: "Cold-Chain Integrity",
    desc: "Transportation solutions for temperature-sensitive cargo requiring controlled handling, refrigerated transit, and thermal preservation throughout the journey.",
    tags: [
      "Refrigerated Transportation",
      "Temperature-Sensitive Goods",
      "Controlled Cargo Movement",
      "Cold-Chain Logistics"
    ],
    image: "/cold_chain.jpg"
  },
  {
    id: "distribution",
    title: "Intercity & Intracity Distribution",
    tagline: "Point-to-Point Distribution",
    desc: "Flexible distribution solutions for local, city-to-city and regional transportation requirements across major industrial and commercial hubs.",
    corridors: [
      "City → City",
      "Warehouse → Distribution Center",
      "Distribution Center → Customer",
      "Local Distribution",
      "Regional Distribution"
    ],
    image: "/cargo_distribution.jpg"
  },
  {
    id: "ftl-ptl",
    title: "Full-Truck Load & Part-Load Cargo",
    tagline: "Optimized Load Capacity",
    desc: "Flexible cargo movement options engineered for both dedicated full truckload operations and cost-effective consolidated part-loads.",
    types: [
      {
        name: "FTL — Full Truck Load",
        detail: "For dedicated truckload transportation requiring exclusive vehicle capacity and direct point-to-point transit."
      },
      {
        name: "PTL — Part Truck Load",
        detail: "For shared/part-load transportation requirements designed to optimize shipping costs for partial consignments."
      }
    ]
  }
];

export const AUDIENCE_GROUPS = [
  {
    title: "Corporate HR & Admin Teams",
    desc: "Structured employee commute programs that ensure punctual shift transitions, worker safety, and reduced transit overhead.",
    icon: "Briefcase"
  },
  {
    title: "Supply Chain & Procurement",
    desc: "Predictable transport capacity, transparent coordination, and scheduled FTL/PTL cargo runs.",
    icon: "ShieldCheck"
  },
  {
    title: "Importers & Exporters",
    desc: "Coordinated door-to-port and port-to-door freight handoffs with reliable documentation guidance.",
    icon: "Ship"
  },
  {
    title: "Manufacturers & Distributors",
    desc: "Reliable plant-to-warehouse and intercity regional distribution with specialized temperature-controlled capabilities.",
    icon: "Factory"
  }
];
