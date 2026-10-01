"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  HeartPulse,
  ShieldCheck,
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
          <h1 className="page-title">
            Your Gentle & Painless <br />
            <span className="gold-text-accent">4-Step Dental Journey</span>
          </h1>
          <p className="page-subtitle">
            From your very first visit to your final smile checkup, we have engineered every step of your experience around zero anxiety, clear communication, and personalized care.
          </p>
        </div>
      </section>

      {/* Main Process Journey Timeline Component */}
      <ProcessSection />

      {/* Detailed Step-by-Step Breakdown */}
      <section className="section-padding process-breakdown-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Every Step Tailored To <br />
              <span className="gold-text-accent">Your Comfort & Peace of Mind</span>
            </h2>
          </div>

          <div className="process-details-grid">
            <div className="process-detail-card">
              <div className="step-num-badge">01</div>
              <h3>Warm Welcome & Consultation</h3>
              <p>
                You start in a welcoming reception area at Shop 18, Reyno Ridge Centre. Our team listens to your dental history, concerns, and goals in total privacy.
              </p>
              <div className="detail-pill"><CheckCircle2 size={14} /> Includes Oral Exam & Digital X-Rays</div>
            </div>

            <div className="process-detail-card">
              <div className="step-num-badge">02</div>
              <h3>Transparent Treatment Planning</h3>
              <p>
                Dr. Vance reviews your X-rays and options. You will receive a clear, upfront treatment plan with full cost breakdowns and medical aid submission advice.
              </p>
              <div className="detail-pill"><CheckCircle2 size={14} /> Clear Options & Upfront Quotes</div>
            </div>

            <div className="process-detail-card">
              <div className="step-num-badge">03</div>
              <h3>Gentle & Painless Treatment</h3>
              <p>
                Relax in our comfortable treatment chairs. We utilize soft-touch techniques and gentle local anesthesia to keep you completely pain-free.
              </p>
              <div className="detail-pill"><CheckCircle2 size={14} /> Gentle Soft-Touch Technique</div>
            </div>

            <div className="process-detail-card">
              <div className="step-num-badge">04</div>
              <h3>Long-Term Care & Follow-Up</h3>
              <p>
                Receive detailed aftercare instructions and protective advice. We schedule routine checkups to maintain your oral health for years to come.
              </p>
              <div className="detail-pill"><CheckCircle2 size={14} /> Comprehensive Preventive Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Comfort & Atmosphere Banner */}
      <section className="section-padding practice-comfort-section">
        <div className="section-container">
          <div className="about-grid" style={{ alignItems: "center" }}>
            <div className="about-image-wrapper">
              <Image
                src="/hero-gallery-3.jpg"
                alt="Alora Dental Care Practice Atmosphere"
                width={700}
                height={480}
                style={{ borderRadius: "16px", objectFit: "cover" }}
              />
            </div>
            <div className="about-features-col">
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Designed For A <br />
                <span className="gold-text-accent">Zero-Anxiety Experience</span>
              </h2>
              <p className="feature-desc" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
                We understand that visiting the dentist can feel intimidating. That is why Alora Dental Care in eMalahleni is built around a warm, friendly atmosphere, clear explanations at every step, and soft-touch techniques to keep you completely at ease.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <Link href="/booking" className="btn-primary-hero">
                  <Calendar size={18} />
                  <span>Book Your Visit Today</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-padding cta-banner-section">
        <div className="section-container cta-banner-card">
          <div className="cta-content">
            <h2>Experience Gentle Family Dentistry</h2>
            <p>Book your appointment at Shop 18, Reyno Ridge Centre, eMalahleni today.</p>
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
