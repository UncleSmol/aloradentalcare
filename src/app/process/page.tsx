"use client";

import Link from "next/link";
import {
  Sparkles,
  Award,
  CheckCircle2,
  Calendar,
  Clock,
  HeartPulse,
  ShieldCheck,
  Cpu,
  Volume2,
  Tv,
  Coffee,
} from "lucide-react";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";

export default function ProcessPage() {
  return (
    <div className="page-container process-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="section-container">
          <div className="section-subtitle-badge">
            <Sparkles size={14} />
            <span>PATIENT EXPERIENCE & TIMELINE</span>
          </div>
          <h1 className="page-title">
            Your Seamless & Painless <br />
            <span className="gold-text-accent">4-Step Dental Journey</span>
          </h1>
          <p className="page-subtitle">
            From your very first 3D optical scan to your final smile unveiling, we have engineered every step of your experience around zero anxiety, transparent communication, and boutique luxury.
          </p>
        </div>
      </section>

      {/* Main Process Journey Timeline Component */}
      <ProcessSection />

      {/* Detailed Step-by-Step Breakdown */}
      <section className="section-padding process-breakdown-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle-badge">
              <Clock size={14} />
              <span>WHAT TO EXPECT</span>
            </div>
            <h2 className="section-title">
              Every Step Tailored To <br />
              <span className="gold-text-accent">Your Comfort & Peace of Mind</span>
            </h2>
          </div>

          <div className="process-details-grid">
            <div className="process-detail-card">
              <div className="step-num-badge">01</div>
              <h3>Complimentary 3D Consultation</h3>
              <p>
                You’ll start in a private consultation suite over espresso or tea. We use intraoral 3D scanners to capture 6,000 optical frames per second — no messy impression goo, zero gagging.
              </p>
              <div className="detail-pill"><CheckCircle2 size={14} /> Includes 3D Scan & Digital X-Rays</div>
            </div>

            <div className="process-detail-card">
              <div className="step-num-badge">02</div>
              <h3>3D Digital Smile Simulation</h3>
              <p>
                Dr. Vance designs your ideal tooth shape, length, and shade on screen. You’ll preview your new smile in 3D and approve every detail before treatment begins.
              </p>
              <div className="detail-pill"><CheckCircle2 size={14} /> See Your Result Before Starting</div>
            </div>

            <div className="process-detail-card">
              <div className="step-num-badge">03</div>
              <h3>Painless & Gentle Treatment</h3>
              <p>
                Relax in noise-canceling Bose headphones with Netflix on ceiling displays. Choose your preferred sedation option for a completely relaxing experience.
              </p>
              <div className="detail-pill"><CheckCircle2 size={14} /> Soft-Touch Local Anesthesia</div>
            </div>

            <div className="process-detail-card">
              <div className="step-num-badge">04</div>
              <h3>Unveiling & Warranty Seal</h3>
              <p>
                Your final restorations are bonded with Swiss ceramic cements. Receive your custom maintenance kit and signature 10-year porcelain warranty guarantee.
              </p>
              <div className="detail-pill"><CheckCircle2 size={14} /> 10-Year Porcelain Warranty Included</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sedation & Anxiety Care Section */}
      <section className="section-padding sedation-options-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle-badge">
              <HeartPulse size={14} />
              <span>ZERO-ANXIETY GUARANTEE</span>
            </div>
            <h2 className="section-title">
              Sedation Dentistry Options for <br />
              <span className="gold-text-accent">Complete Relaxation</span>
            </h2>
            <p className="section-description">
              If dental anxiety has kept you from receiving care, our specialized sedation protocols ensure total calm throughout your appointment.
            </p>
          </div>

          <div className="sedation-cards-grid">
            <div className="sedation-card">
              <h4>Nitrous Oxide (Laughing Gas)</h4>
              <p>Mild, fast-acting relaxation inhaled during treatment. Wears off instantly so you can drive yourself home right after.</p>
            </div>
            <div className="sedation-card">
              <h4>Oral Conscious Sedation</h4>
              <p>A prescribed relaxation pill taken prior to your appointment. You remain conscious but completely calm and drowsy.</p>
            </div>
            <div className="sedation-card">
              <h4>Twilight IV Sedation</h4>
              <p>Administered by our board-certified anesthesiologist. You drift into a deep sleep state and wake up with all treatment complete.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-padding cta-banner-section">
        <div className="section-container cta-banner-card">
          <div className="cta-content">
            <h2>Experience Anxiety-Free Dentistry</h2>
            <p>Book your initial consultation and discover how comfortable dental care can truly be.</p>
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
