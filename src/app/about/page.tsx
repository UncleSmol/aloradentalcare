"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Award,
  ShieldCheck,
  HeartPulse,
  Clock,
  CheckCircle2,
  Calendar,
  Smile,
  Stethoscope,
  MapPin,
  Phone,
} from "lucide-react";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="page-container about-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="section-container">
          <h1 className="page-title">
            Gentle Family & Aesthetic Dentistry <br />
            <span className="gold-text-accent">In eMalahleni</span>
          </h1>
          <p className="page-subtitle">
            Alora Dental Care is dedicated to delivering high-quality, compassionate dental care for patients of all ages in Reyno Ridge, eMalahleni.
          </p>
        </div>
      </section>

      {/* Main About Component */}
      <AboutSection />

      {/* Founder / Clinical Lead Spotlight */}
      <section className="section-padding founder-section">
        <div className="section-container founder-grid">
          <div className="founder-info-card">
            <h2>Meet Dr. Alora Vance & Team</h2>
            <p className="founder-lead">
              "Our goal is to make every dental visit comfortable, transparent, and completely stress-free for your entire family."
            </p>
            <p>
              Dr. Alora Vance and the clinical team at Alora Dental Care bring years of general, cosmetic, and restorative dental expertise. We take the time to understand your unique oral health needs and guide you through every treatment with care.
            </p>
            <div className="credentials-list">
              <div className="cred-pill"><CheckCircle2 size={16} /> Registered Dental Practitioner with HPCSA</div>
              <div className="cred-pill"><CheckCircle2 size={16} /> Specialized in Gentle & Family Dentistry</div>
              <div className="cred-pill"><CheckCircle2 size={16} /> Direct Submissions to South African Medical Aids</div>
            </div>
          </div>

          <div className="founder-visual-card" style={{ position: "relative", minHeight: "350px", borderRadius: "16px", overflow: "hidden" }}>
            <Image
              src="/about-us-hero.png"
              alt="Dr. Alora Vance Dental Practice"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Clinical Care Pillars */}
      <section className="section-padding tech-stack-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              What Sets Alora Dental <br />
              <span className="gold-text-accent">Care Apart</span>
            </h2>
            <p className="section-description">
              We focus on gentle care, modern equipment, and a welcoming environment for every patient.
            </p>
          </div>

          <div className="tech-grid">
            <div className="tech-card">
              <Smile className="tech-icon" size={32} />
              <h3>Gentle Family Dentistry</h3>
              <p>Comprehensive checkups, gentle ultrasonic cleanings, and preventive treatments tailored for both children and adults.</p>
            </div>
            <div className="tech-card">
              <Clock className="tech-icon" size={32} />
              <h3>Prompt & On-Time Appointments</h3>
              <p>We respect your busy schedule with punctual start times and efficient appointment slots.</p>
            </div>
            <div className="tech-card">
              <Sparkles className="tech-icon" size={32} />
              <h3>Cosmetic Smile Enhancement</h3>
              <p>Professional teeth whitening, handcrafted veneers, and aesthetic composite bonding to boost your confidence.</p>
            </div>
            <div className="tech-card">
              <ShieldCheck className="tech-icon" size={32} />
              <h3>Direct Medical Aid Claims</h3>
              <p>Hassle-free direct electronic billing for Discovery Health, Bonitas, Momentum, Medshield, Bestmed, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Practice Info Banner */}
      <section className="section-padding comfort-menu-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Conveniently Located In <br />
              <span className="gold-text-accent">Reyno Ridge Centre</span>
            </h2>
            <p className="section-description">
              Shop 18, Reyno Ridge Centre, 08 Darius Street, Reyno Ridge, eMalahleni, 1039.
            </p>
          </div>

          <div className="amenities-grid">
            <div className="amenity-item">
              <MapPin className="amenity-icon" size={24} />
              <h4>Easy Access & Parking</h4>
              <p>Ample free parking right in front of the centre with easy wheelchair accessibility.</p>
            </div>
            <div className="amenity-item">
              <Phone className="amenity-icon" size={24} />
              <h4>Direct Telephone</h4>
              <p>Call us at +27 13 697 3447 or message on WhatsApp at 061 891 3052.</p>
            </div>
            <div className="amenity-item">
              <HeartPulse className="amenity-icon" size={24} />
              <h4>Calm Atmosphere</h4>
              <p>A relaxing reception space designed to keep anxiety at bay from the moment you step inside.</p>
            </div>
            <div className="amenity-item">
              <Calendar className="amenity-icon" size={24} />
              <h4>Flexible Hours</h4>
              <p>Open Monday through Thursday 08:00 to 17:00, Friday 08:00 to 16:00, and Saturday mornings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding cta-banner-section">
        <div className="section-container cta-banner-card">
          <div className="cta-content">
            <h2>Book Your Dental Visit Today</h2>
            <p>Schedule your appointment at Alora Dental Care in eMalahleni and experience dedicated patient care.</p>
          </div>
          <div className="cta-actions">
            <Link href="/booking" className="btn-primary-hero">
              <Calendar size={18} />
              <span>Book Appointment Online</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
