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
  Cpu,
  Tv,
  Coffee,
  Volume2,
} from "lucide-react";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="page-container about-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="section-container">
          <div className="section-subtitle-badge">
            <Sparkles size={14} />
            <span>OUR PRACTICE & PHILOSOPHY</span>
          </div>
          <h1 className="page-title">
            Where Modern Science Meets <br />
            <span className="gold-text-accent">Boutique Luxury Dentistry</span>
          </h1>
          <p className="page-subtitle">
            Founded by Dr. Alora Vance, DDS, Alora Dental Care was created to redefine dentistry — replacing fear and discomfort with zero-anxiety care, ultra-precise 3D technology, and radiant aesthetic artistry.
          </p>
        </div>
      </section>

      {/* Main About Component */}
      <AboutSection />

      {/* Founder Spotlight */}
      <section className="section-padding founder-section">
        <div className="section-container founder-grid">
          <div className="founder-info-card">
            <div className="section-subtitle-badge">
              <Award size={14} />
              <span>LEAD AESTHETIC SURGEON</span>
            </div>
            <h2>Meet Dr. Alora Vance, DDS</h2>
            <p className="founder-lead">
              "My mission is to help every patient feel completely relaxed, deeply cared for, and proud to show off their natural smile."
            </p>
            <p>
              Dr. Vance completed her Doctorate of Dental Surgery with top honors at Northwestern University and underwent advanced post-graduate fellowship training in Digital Prosthodontics and Cosmetic Dentistry in Zurich, Switzerland.
            </p>
            <div className="credentials-list">
              <div className="cred-pill"><CheckCircle2 size={16} /> Fellow, American Academy of Cosmetic Dentistry (AACD)</div>
              <div className="cred-pill"><CheckCircle2 size={16} /> Certified Master in 3D Digital CAD/CAM Design</div>
              <div className="cred-pill"><CheckCircle2 size={16} /> 15+ Years Specializing in Zero-Anxiety Care</div>
            </div>
          </div>

          <div className="founder-visual-card">
            <div className="doctor-avatar-large">DR</div>
            <div className="founder-badge-floating">
              <Award size={18} />
              <span>TOP AESTHETIC DENTIST 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Technology Stack */}
      <section className="section-padding tech-stack-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle-badge">
              <Cpu size={14} />
              <span>CLINICAL INNOVATION</span>
            </div>
            <h2 className="section-title">
              Our State-of-the-Art <br />
              <span className="gold-text-accent">3D Digital Suite</span>
            </h2>
            <p className="section-description">
              We invest in cutting-edge technology so your appointments are faster, cleaner, and completely comfortable.
            </p>
          </div>

          <div className="tech-grid">
            <div className="tech-card">
              <Cpu className="tech-icon" size={32} />
              <h3>3D Optical Intraoral Scanner</h3>
              <p>Say goodbye to gooey impression trays. Our 3D scanner captures 6,000 frames per second for instant, painless digital mapping.</p>
            </div>
            <div className="tech-card">
              <Clock className="tech-icon" size={32} />
              <h3>In-House 3D Milling Center</h3>
              <p>Custom porcelain veneers and ceramic crowns milled in under 90 minutes for single-visit smile perfection.</p>
            </div>
            <div className="tech-card">
              <Sparkles className="tech-icon" size={32} />
              <h3>Soft-Tissue Laser Dentistry</h3>
              <p>Painless gum sculpting and decontamination with zero scalpels, zero stitches, and rapid same-day healing.</p>
            </div>
            <div className="tech-card">
              <ShieldCheck className="tech-icon" size={32} />
              <h3>Ultra-Low Radiation 3D CBCT</h3>
              <p>Precision 3D bone and anatomical imaging using up to 90% less radiation than conventional dental X-rays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Comfort & Comfort Menu */}
      <section className="section-padding comfort-menu-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle-badge">
              <HeartPulse size={14} />
              <span>ZERO ANXIETY ENVIRONMENT</span>
            </div>
            <h2 className="section-title">
              Boutique Amenities Designed for <br />
              <span className="gold-text-accent">Total Peace of Mind</span>
            </h2>
          </div>

          <div className="amenities-grid">
            <div className="amenity-item">
              <Volume2 className="amenity-icon" size={24} />
              <h4>Bose Noise-Canceling Headphones</h4>
              <p>Listen to your favorite music or podcast during your treatment.</p>
            </div>
            <div className="amenity-item">
              <Tv className="amenity-icon" size={24} />
              <h4>Overhead Streaming Displays</h4>
              <p>Watch Netflix or Apple TV with ergonomic ceiling monitors.</p>
            </div>
            <div className="amenity-item">
              <Sparkles className="amenity-icon" size={24} />
              <h4>Essential Oil Aromatherapy</h4>
              <p>Calming lavender and eucalyptus scents throughout our clinic lounge.</p>
            </div>
            <div className="amenity-item">
              <Coffee className="amenity-icon" size={24} />
              <h4>Refreshed Beverage Bar</h4>
              <p>Enjoy sparkling waters, organic herbal teas, and espresso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding cta-banner-section">
        <div className="section-container cta-banner-card">
          <div className="cta-content">
            <h2>Experience Dentistry Reimagined</h2>
            <p>Book your initial consultation with Dr. Alora Vance and discover the difference of boutique care.</p>
          </div>
          <div className="cta-actions">
            <Link href="/booking" className="btn-primary-hero">
              <Calendar size={18} />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
