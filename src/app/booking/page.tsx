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
  HeartPulse,
} from "lucide-react";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Porcelain Veneers & Smile Design",
    date: "",
    time: "10:00 AM",
    sedation: "Comfort Amenities Only",
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
            <span>ONLINE APPOINTMENT PORTAL</span>
          </div>
          <h1 className="page-title">
            Reserve Your 3D Digital <br />
            <span className="gold-text-accent">Smile Consultation</span>
          </h1>
          <p className="page-subtitle">
            Select your preferred treatment, date, and comfort preferences below. Our patient care team will confirm your reservation within 2 business hours.
          </p>
        </div>
      </section>

      {/* Main Interactive Booking Portal */}
      <section className="section-padding booking-main-section">
        <div className="section-container booking-portal-grid">
          {/* Booking Form Card */}
          <div className="booking-form-card">
            {submitted ? (
              <div className="booking-success-box">
                <CheckCircle2 size={48} className="check-gold" />
                <h2>Appointment Request Confirmed!</h2>
                <p>
                  Thank you, <strong>{formData.name}</strong>. We have received your consultation request for <strong>{formData.service}</strong> on <strong>{formData.date || "your selected date"}</strong> at <strong>{formData.time}</strong>.
                </p>
                <div className="success-details">
                  <div className="detail-row"><Clock size={16} /> <span>Confirmation sent to {formData.email}</span></div>
                  <div className="detail-row"><Phone size={16} /> <span>Our team will call you at {formData.phone} if any adjustments are needed.</span></div>
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
                    <label>Treatment / Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option>Porcelain Veneers & Smile Design</option>
                      <option>3D Invisalign & Aligners</option>
                      <option>Laser Teeth Whitening</option>
                      <option>Same-Day Porcelain Crown</option>
                      <option>Dental Implants</option>
                      <option>Zero-Anxiety Sedation Visit</option>
                      <option>General Checkup & Hygiene Spa</option>
                      <option>Emergency Care</option>
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
                    <label>Comfort & Sedation Preference</label>
                    <select
                      value={formData.sedation}
                      onChange={(e) => setFormData({ ...formData, sedation: e.target.value })}
                    >
                      <option>Comfort Amenities Only (Headphones, Netflix)</option>
                      <option>Nitrous Oxide (Laughing Gas)</option>
                      <option>Oral Conscious Sedation Pill</option>
                      <option>Twilight IV Sleep Dentistry</option>
                    </select>
                  </div>
                </div>

                <h3 className="form-title" style={{ marginTop: "1.5rem" }}>
                  <User size={18} className="star-gold" /> 2. Patient Contact Details
                </h3>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
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
                    placeholder="sarah@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Notes / Goals for Your Smile (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about any specific teeth concerns, questions, or anxiety preferences..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary-hero btn-full-width">
                  <Calendar size={18} />
                  <span>Confirm Appointment Reservation</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact & Practice Info Sidebar */}
          <div className="booking-info-sidebar">
            <div className="info-card-box">
              <h3>Practice Hours & Location</h3>
              <div className="info-item">
                <MapPin size={20} className="icon-gold" />
                <div>
                  <h4>Alora Dental Care</h4>
                  <p>742 Evergreen Suite #100, Luxury Medical District</p>
                </div>
              </div>

              <div className="info-item">
                <Clock size={20} className="icon-gold" />
                <div>
                  <h4>Office Hours</h4>
                  <p>Mon - Thu: 8:00 AM - 6:00 PM</p>
                  <p>Fri: 8:00 AM - 4:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="info-item">
                <Phone size={20} className="icon-gold" />
                <div>
                  <h4>Direct Line</h4>
                  <p><a href="tel:18005552567">+1 (800) 555-ALORA</a></p>
                </div>
              </div>

              <div className="info-item">
                <Mail size={20} className="icon-gold" />
                <div>
                  <h4>Email Concierge</h4>
                  <p><a href="mailto:hello@aloradental.com">hello@aloradental.com</a></p>
                </div>
              </div>
            </div>

            <div className="info-card-box guarantee-box">
              <ShieldCheck size={28} className="icon-gold" />
              <h4>Zero-Wait Guarantee</h4>
              <p>We respect your time. Every appointment is scheduled with generous buffer time so you are seen promptly on arrival.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
