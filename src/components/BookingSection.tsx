"use client";

import { useState, FormEvent } from "react";
import { Calendar, Clock, User, Phone, Mail, CheckCircle2, Sparkles, MapPin } from "lucide-react";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Cosmetic Veneers & Crowns",
    date: "",
    time: "10:00 AM",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    const randomRef = `ALORA-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(randomRef);
    setIsSubmitted(true);
  };

  return (
    <section className="section-padding booking-section">
      <div className="section-container">
        <div className="booking-card-wrapper">
          <div className="booking-info-col">
            <div className="section-subtitle-badge">
              <Calendar size={14} />
              <span>BOOK AN APPOINTMENT</span>
            </div>
            <h2 className="booking-title">
              Ready For Your <br />
              <span className="gold-text-accent">New Smile?</span>
            </h2>
            <p className="booking-desc">
              Reserve your consultation at Alora Dental Care today. Our friendly team is eager to welcome you.
            </p>

            <div className="booking-perks">
              <div className="perk-item">
                <CheckCircle2 size={18} className="perk-icon" />
                <span>Complimentary 3D Intraoral Scan</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={18} className="perk-icon" />
                <span>Flexible Payment & Financing Options</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={18} className="perk-icon" />
                <span>Zero-Pain Guarantee in Executive Suites</span>
              </div>
            </div>

            <div className="clinic-contact-badge">
              <MapPin size={16} />
              <span>742 Evergreen Suite #100, Aesthetics Plaza</span>
            </div>
          </div>

          <div className="booking-form-col">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="booking-form">
                <h3 className="form-heading">Schedule Consultation</h3>

                <div className="form-group">
                  <label><User size={14} /> Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label><Phone size={14} /> Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label><Mail size={14} /> Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label><Sparkles size={14} /> Desired Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option>Cosmetic Veneers & Crowns</option>
                    <option>3D Clear Invisalign Aligners</option>
                    <option>Guided Dental Implants</option>
                    <option>Laser Enamel Whitening</option>
                    <option>Preventive Care & Hygiene</option>
                    <option>Same-Day Emergency Care</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label><Calendar size={14} /> Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label><Clock size={14} /> Preferred Time</label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    >
                      <option>09:00 AM</option>
                      <option>10:30 AM</option>
                      <option>01:00 PM</option>
                      <option>03:30 PM</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn-submit-booking">
                  Confirm Reservation &rarr;
                </button>
              </form>
            ) : (
              <div className="booking-success-card">
                <div className="success-icon-badge">
                  <CheckCircle2 size={36} />
                </div>
                <h3>Reservation Confirmed!</h3>
                <p className="ref-code">Reference Code: <strong>{bookingRef}</strong></p>
                <p className="success-text">
                  Thank you, <strong>{formData.name}</strong>. Your consultation for <strong>{formData.service}</strong> has been received. Our concierge will call you shortly.
                </p>
                <div className="success-details">
                  <div><span>Date:</span> <strong>{formData.date || "Tomorrow"}</strong></div>
                  <div><span>Time:</span> <strong>{formData.time}</strong></div>
                </div>
                <button className="btn-new-booking" onClick={() => setIsSubmitted(false)}>
                  Book Another Appointment
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
