import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { About } from "./components/About";
import { Divisions } from "./components/Divisions";
import { CorporateMobility } from "./components/CorporateMobility";
import { FreightForwarding } from "./components/FreightForwarding";
import { CargoTransport } from "./components/CargoTransport";
import { LogisticsFlow } from "./components/LogisticsFlow";
import { AudienceFit } from "./components/AudienceFit";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { QuoteModal } from "./components/QuoteModal";

export function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServicePref, setSelectedServicePref] = useState("Corporate Mobility");

  const handleOpenQuote = (servicePref?: string) => {
    if (servicePref) {
      setSelectedServicePref(servicePref);
    }
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className="app-root">
      {/* Sticky Responsive Navbar with Brand Logo */}
      <Navbar onOpenQuote={handleOpenQuote} />

      <main>
        {/* Cinematic Corporate Logistics Hero */}
        <Hero onOpenQuote={() => handleOpenQuote("General Corporate Logistics Quote")} />

        {/* Hero Trust Strip (3 Core Pillars) */}
        <TrustStrip />

        {/* Integrated Solutions & About Overview */}
        <About onOpenQuote={() => handleOpenQuote("Enterprise Logistics Consultation")} />

        {/* Three Business Divisions High-Level Presentation */}
        <Divisions onSelectDivision={(divId) => setSelectedServicePref(divId)} />

        {/* Division A: Corporate Mobility Detailed Section */}
        <CorporateMobility onOpenQuote={handleOpenQuote} />

        {/* Division B: Import–Export Freight Forwarding Detailed Section */}
        <FreightForwarding onOpenQuote={handleOpenQuote} />

        {/* Division C: Cargo Transport Detailed Section */}
        <CargoTransport onOpenQuote={handleOpenQuote} />

        {/* Interactive Logistics Flow Visualization: Origin to Destination with Logo */}
        <LogisticsFlow />

        {/* B2B Audience & Enterprise Fit Matrix */}
        <AudienceFit />

        {/* Business Quote Request Form & Verified Contact Information */}
        <ContactSection initialService={selectedServicePref} />
      </main>

      {/* Official Corporate Footer with Complete Details */}
      <Footer />

      {/* Interactive B2B Quote Modal */}
      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={handleCloseQuote} 
        defaultService={selectedServicePref} 
      />
    </div>
  );
}

export default App;
