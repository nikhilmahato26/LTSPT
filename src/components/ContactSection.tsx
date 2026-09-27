import React, { useState } from "react";
import { COMPANY_INFO } from "../data/companyData";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare
} from "lucide-react";

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    division: initialService || "Corporate Mobility",
    specificRequirement: "",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*New Corporate Logistics Inquiry*\n\n` +
      `*Company:* ${formData.companyName || "Not specified"}\n` +
      `*Contact Person:* ${formData.contactPerson || "Not specified"}\n` +
      `*Phone:* ${formData.phone || "Not specified"}\n` +
      `*Email:* ${formData.email || "Not specified"}\n` +
      `*Division:* ${formData.division}\n` +
      `*Requirement:* ${formData.specificRequirement || "General Inquiry"}\n` +
      `*Notes:* ${formData.notes || "None"}`;

    window.open(`https://wa.me/91${COMPANY_INFO.phone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`B2B Logistics Quote Request - ${formData.companyName || "Corporate Client"}`);
    const body = encodeURIComponent(
      `Company Name: ${formData.companyName}\n` +
      `Contact Person: ${formData.contactPerson}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Email Address: ${formData.email}\n` +
      `Service Division: ${formData.division}\n` +
      `Specific Requirement: ${formData.specificRequirement}\n` +
      `Notes / Details:\n${formData.notes}`
    );
    window.location.href = `mailto:${COMPANY_INFO.emails.sales}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            <span>Connect With Us</span>
          </div>
          <h2 className="section-title">Request a Corporate Business Quote</h2>
          <p className="section-desc">
            Partner with <strong>{COMPANY_INFO.name}</strong> for reliable employee mobility, import–export freight forwarding, and specialized cargo transportation.
          </p>
        </div>

        <div className="contact-grid">
          {/* Company Details Column */}
          <div className="contact-info-panel card-glass">
            <div className="info-panel-header">
              <span className="info-badge">Corporate Headquarters</span>
              <h3 className="info-title">{COMPANY_INFO.name}</h3>
              <p className="info-type">{COMPANY_INFO.businessType}</p>
            </div>

            <div className="info-items-list">
              {/* Phone */}
              <div className="info-card-item">
                <div className="info-icon-box">
                  <Phone size={20} className="text-red" />
                </div>
                <div>
                  <span className="info-label">Direct Corporate Phone</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="info-value-link">
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="info-sub">Dedicated Operations & Inquiries</span>
                </div>
              </div>

              {/* Emails */}
              <div className="info-card-item">
                <div className="info-icon-box">
                  <Mail size={20} className="text-red" />
                </div>
                <div>
                  <span className="info-label">Official Email Contacts</span>
                  <div className="email-links-group">
                    <a href={`mailto:${COMPANY_INFO.emails.sales}`} className="info-value-link">
                      {COMPANY_INFO.emails.sales}
                    </a>
                    <a href={`mailto:${COMPANY_INFO.emails.support}`} className="info-value-link">
                      {COMPANY_INFO.emails.support}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="info-card-item">
                <div className="info-icon-box">
                  <MapPin size={20} className="text-red" />
                </div>
                <div>
                  <span className="info-label">Registered Office</span>
                  <p className="info-address-text">
                    {COMPANY_INFO.address.line1}<br />
                    {COMPANY_INFO.address.line2}<br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.taluka},<br />
                    {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Banner */}
            <div className="whatsapp-callout-box">
              <div className="wa-icon-box">
                <MessageSquare size={22} />
              </div>
              <div className="wa-content">
                <strong>Need immediate assistance?</strong>
                <p>Chat directly with our dispatch team on WhatsApp.</p>
              </div>
              <a 
                href={`https://wa.me/91${COMPANY_INFO.phone}?text=Hello%20Luxelogix%20Trans%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20corporate%20logistics%20requirement.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary wa-btn"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive B2B Quote Request Form */}
          <div className="contact-form-panel card-glass">
            {submitted ? (
              <div className="submission-success-card">
                <div className="success-icon-box">
                  <CheckCircle2 size={48} className="text-red" />
                </div>
                <h3 className="success-title">Inquiry Prepared Successfully</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.contactPerson || "Partner"}</strong>. Your requirement for <strong>{formData.division}</strong> has been logged.
                </p>
                <div className="success-actions">
                  <button 
                    onClick={handleWhatsAppSend} 
                    className="btn btn-primary"
                  >
                    <MessageSquare size={16} />
                    <span>Send via WhatsApp ({COMPANY_INFO.phone})</span>
                  </button>
                  <button 
                    onClick={handleEmailSend} 
                    className="btn btn-secondary"
                  >
                    <Mail size={16} />
                    <span>Send via Email ({COMPANY_INFO.emails.sales})</span>
                  </button>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="btn btn-secondary"
                  >
                    <span>Edit Inquiry Details</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="b2b-form">
                <div className="form-header">
                  <h3 className="form-title">Business Inquiry Form</h3>
                  <p className="form-desc">
                    Fill in your logistics requirement for rapid commercial consultation.
                  </p>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Company Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Acme Industries Ltd."
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
                      placeholder="e.g. Rahul Sharma"
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
                      placeholder="e.g. rahul@acme.com"
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
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Primary Service Division *</label>
                  <select 
                    value={formData.division}
                    onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                    className="form-select"
                  >
                    <option value="Corporate Mobility">Corporate Mobility (Employee Commute / Rental / Shuttle)</option>
                    <option value="Import–Export Freight Forwarding">Import–Export Freight Forwarding (Door-to-Port / Customs)</option>
                    <option value="Cargo Transport">Cargo Transport (Temperature-Controlled / Distribution / FTL & PTL)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Specific Requirement / Scope</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Daily shift transport for 120 employees / Pune to Port cargo FTL"
                    value={formData.specificRequirement}
                    onChange={(e) => setFormData({ ...formData, specificRequirement: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Additional Route or Cargo Details</label>
                  <textarea 
                    rows={3}
                    placeholder="Specify routes, pickup hubs, consignment volume, or preferred timelines..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn btn-primary btn-lg w-full">
                    <Send size={18} />
                    <span>Submit Business Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
