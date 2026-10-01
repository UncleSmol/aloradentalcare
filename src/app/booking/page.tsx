"use client";

import { useState } from "react";
import {
  Calendar,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ShieldCheck,
  User,
  MessageSquare,
  CreditCard,
  Building,
} from "lucide-react";
import PracticeMap from "@/components/PracticeMap";
import Footer from "@/components/Footer";

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General Checkup & Clean",
    date: "",
    time: "10:00 AM",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-container booking-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="section-container">
          <div className="section-subtitle-badge">
            <Calendar size={14} />
            <span>APPOINTMENT & CONTACT PORTAL</span>
          </div>
          <h1 className="page-title">
            Book Your Visit at <br />
            <span className="gold-text-accent">Alora Dental Care</span>
          </h1>
          <p className="page-subtitle">
            Situated conveniently in Reyno Ridge Centre, eMalahleni. Reserve your dental appointment online, message us on WhatsApp, or give our reception team a call.
          </p>
        </div>
      </section>

      {/* Main Interactive Booking & Contact Portal */}
      <section className="section-padding booking-main-section">
        <div className="section-container booking-portal-grid">
          {/* Booking Form Card */}
          <div className="booking-form-card">
            {submitted ? (
              <div className="booking-success-box">
                <CheckCircle2 size={48} className="check-gold" />
                <h2>Appointment Request Received!</h2>
                <p>
                  Thank you, <strong>{formData.name}</strong>. We have received your visit request for <strong>{formData.service}</strong> on <strong>{formData.date || "your selected date"}</strong> at <strong>{formData.time}</strong>.
                </p>
                <div className="success-details">
                  <div className="detail-row"><Clock size={16} /> <span>Confirmation sent to {formData.email}</span></div>
                  <div className="detail-row"><Phone size={16} /> <span>Our team will contact you at {formData.phone} shortly.</span></div>
                </div>
                <button
                  className="btn-primary-hero"
                  onClick={() => setSubmitted(false)}
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="portal-form">
                <h3 className="form-title">
                  <Sparkles size={18} className="star-gold" /> 1. Select Treatment & Schedule
                </h3>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Treatment / Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option>General Checkup & Clean</option>
                      <option>Teeth Whitening & Aesthetics</option>
                      <option>Porcelain Veneers & Crowns</option>
                      <option>Clear Aligners & Orthodontics</option>
                      <option>Dental Implants & Restorative</option>
                      <option>Root Canal & Pain Relief</option>
                      <option>Pediatric / Family Dentistry</option>
                      <option>Emergency Dental Care</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Preferred Time Slot</label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    >
                      <option>08:30 AM</option>
                      <option>10:00 AM</option>
                      <option>11:30 AM</option>
                      <option>01:30 PM</option>
                      <option>03:00 PM</option>
                      <option>04:30 PM</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Patient Category</label>
                    <select>
                      <option>New Patient</option>
                      <option>Existing Patient</option>
                      <option>Medical Aid Patient</option>
                      <option>Private Cash / Card</option>
                    </select>
                  </div>
                </div>

                <h3 className="form-title" style={{ marginTop: "1.5rem" }}>
                  <User size={18} className="star-gold" /> 2. Patient Details
                </h3>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Sipho Ndlovu"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      placeholder="061 891 3052"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="sipho@example.co.za"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Additional Notes / Specific Dental Concerns (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Describe any tooth pain, cosmetic goals, or questions you have for our dental team..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary-hero btn-full-width">
                  <Calendar size={18} />
                  <span>Submit Appointment Reservation</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact & Location Info Sidebar */}
          <div className="booking-info-sidebar">
            <div className="info-card-box">
              <h3>Practice Information & Contact</h3>
              
              <div className="info-item">
                <Building size={20} className="icon-gold" />
                <div>
                  <h4>Practice Location</h4>
                  <p>Shop 18, Reyno Ridge Centre</p>
                  <p>08 Darius Street, Reyno Ridge</p>
                  <p>eMalahleni, 1039</p>
                </div>
              </div>

              <div className="info-item">
                <Clock size={20} className="icon-gold" />
                <div>
                  <h4>Operating Hours</h4>
                  <p>Mon - Thu: 08:00 AM - 17:00 PM</p>
                  <p>Friday: 08:00 AM - 16:00 PM</p>
                  <p>Saturday: 08:30 AM - 13:00 PM</p>
                  <p>Sunday & Public Holidays: Closed</p>
                </div>
              </div>

              <div className="info-item">
                <Phone size={20} className="icon-gold" />
                <div>
                  <h4>Telephone (Landline)</h4>
                  <p><a href="tel:+27136973447">+27 13 697 3447</a></p>
                </div>
              </div>

              <div className="info-item">
                <MessageSquare size={20} className="icon-gold" />
                <div>
                  <h4>Cell & WhatsApp</h4>
                  <p>
                    <a href="https://wa.me/27618913052" target="_blank" rel="noopener noreferrer">
                      061 891 3052 (Click to Chat)
                    </a>
                  </p>
                </div>
              </div>

              <div className="info-item">
                <Mail size={20} className="icon-gold" />
                <div>
                  <h4>Email Enquiries</h4>
                  <p><a href="mailto:info@aloradentalcare.co.za">info@aloradentalcare.co.za</a></p>
                </div>
              </div>
            </div>

            <div className="info-card-box guarantee-box">
              <CreditCard size={24} className="icon-gold" />
              <h4>Medical Aid & Payment Methods</h4>
              <p>We submit directly to most major South African medical aids (Discovery Health, Bonitas, Momentum, Medshield, Bestmed, and more). Debit, credit cards, and cash payments accepted.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Practice Location Map Section */}
      <section className="section-padding map-section-container">
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle-badge">
              <MapPin size={14} />
              <span>FIND US IN REYNO RIDGE</span>
            </div>
            <h2 className="section-title">
              Visit Our Practice in <br />
              <span className="gold-text-accent">eMalahleni</span>
            </h2>
            <p className="section-description">
              Conveniently located at Shop 18, Reyno Ridge Centre, 08 Darius Street, Reyno Ridge, eMalahleni. Ample free parking and easy wheelchair access available.
            </p>
          </div>

          <div className="map-wrapper" style={{ marginTop: "2rem" }}>
            <PracticeMap />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
