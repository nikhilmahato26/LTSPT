import React, { useState, useEffect } from "react";
import { COMPANY_INFO } from "../data/companyData";
import { X, Send, MessageSquare, CheckCircle2, Phone, Mail } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  onClose, 
  defaultService = "Corporate Mobility" 
}) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    division: defaultService,
    details: ""
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, division: defaultService }));
    }
  }, [defaultService]);

  // Lock background scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*New Corporate Business Quote Inquiry*\n\n` +
      `*Company:* ${formData.companyName || "N/A"}\n` +
      `*Contact:* ${formData.contactPerson || "N/A"}\n` +
      `*Phone:* ${formData.phone || "N/A"}\n` +
      `*Email:* ${formData.email || "N/A"}\n` +
      `*Division / Scope:* ${formData.division}\n` +
      `*Details:* ${formData.details || "None"}`;

    window.open(`https://wa.me/91${COMPANY_INFO.phone}?text=${encodeURIComponent(text)}`, "_blank");
    onClose();
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`B2B Logistics Quote - ${formData.companyName || "Corporate Request"}`);
    const body = encodeURIComponent(
      `Company Name: ${formData.companyName}\n` +
      `Contact Person: ${formData.contactPerson}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Email Address: ${formData.email}\n` +
      `Service: ${formData.division}\n` +
      `Requirement Details:\n${formData.details}`
    );
    window.location.href = `mailto:${COMPANY_INFO.emails.sales}?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="modal-eyebrow">Enterprise Procurement</span>
            <h3 className="modal-title">Request a Business Quote</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div className="modal-success-wrap">
              <div className="modal-success-icon">
                <CheckCircle2 size={54} className="text-red" />
              </div>
              <h4>Requirement Recorded</h4>
              <p>
                We have registered your request for <strong>{formData.division}</strong>. Choose how you would like to connect with our operations desk immediately:
              </p>
              
              <div className="modal-direct-actions">
                <button onClick={handleWhatsAppSend} className="btn btn-primary w-full">
                  <MessageSquare size={18} />
                  <span>Send via WhatsApp (+91 {COMPANY_INFO.phone})</span>
                </button>
                <button onClick={handleEmailSend} className="btn btn-secondary w-full">
                  <Mail size={18} />
                  <span>Send via Email ({COMPANY_INFO.emails.sales})</span>
                </button>
                <div className="modal-call-actions-grid">
                  <a href={`tel:${COMPANY_INFO.phone}`} className="btn btn-white w-full">
                    <Phone size={16} />
                    <span>Call {COMPANY_INFO.phone}</span>
                  </a>
                  <a href={`tel:${COMPANY_INFO.phone2}`} className="btn btn-white w-full">
                    <Phone size={16} />
                    <span>Call {COMPANY_INFO.phone2}</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="modal-form">
              <p className="modal-form-intro">
                Provide your corporate requirements and our logistics coordinators will furnish a customized operational proposal.
              </p>

              <div className="form-group">
                <label className="form-label">Service Division</label>
                <select 
                  value={formData.division}
                  onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                  className="form-select"
                >
                  <option value="Corporate Mobility - Employee Transportation">Corporate Mobility - Employee Transportation</option>
                  <option value="Corporate Mobility - Corporate Car Rental">Corporate Mobility - Corporate Car Rental</option>
                  <option value="Corporate Mobility - Shuttle Services">Corporate Mobility - Shuttle Services</option>
                  <option value="Import–Export Freight Forwarding">Import–Export Freight Forwarding</option>
                  <option value="Cargo Transport - Temperature Controlled">Cargo Transport - Temperature Controlled</option>
                  <option value="Cargo Transport - Intercity & Intracity Distribution">Cargo Transport - Intercity & Intracity Distribution</option>
                  <option value="Cargo Transport - Full Truck Load (FTL)">Cargo Transport - Full Truck Load (FTL)</option>
                  <option value="Cargo Transport - Part Truck Load (PTL)">Cargo Transport - Part Truck Load (PTL)</option>
                </select>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Company Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Tata Tech / Infosys / ABC Mfg"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact Person *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Full Name"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Corporate Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="corporate@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="e.g. 9021212052"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Requirement Details / Locations / Fleet Scope</label>
                <textarea 
                  rows={3}
                  placeholder="Estimated number of employees, cargo weight, pickup & drop locations, or frequency..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <div className="modal-footer-actions">
                <button type="button" onClick={onClose} className="btn btn-secondary">
                  <span>Cancel</span>
                </button>
                <button type="submit" className="btn btn-primary">
                  <Send size={16} />
                  <span>Submit Quote Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
