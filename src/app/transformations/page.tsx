"use client";

import Link from "next/link";
import {
  Sparkles,
  Award,
  CheckCircle2,
  Calendar,
  Star,
  ShieldCheck,
  ArrowRight,
  Smile,
} from "lucide-react";
import TransformationSection from "@/components/TransformationSection";
import Footer from "@/components/Footer";

const CASE_STUDIES = [
  {
    id: 1,
    patient: "Sophia M.",
    treatment: "Handcrafted Porcelain Veneers (8 Upper Arch)",
    duration: "2 Visits (10 Days Total)",
    shadeChange: "Natural Bleach BL2",
    quote: "I used to hide my teeth in every photo. Now I can't stop smiling. The 3D preview made me feel so confident before we even started!",
  },
  {
    id: 2,
    patient: "Marcus T.",
    treatment: "3D Invisalign & Laser Whitening",
    duration: "9 Months",
    shadeChange: "6 Shades Brighter",
    quote: "Nobody even noticed I was wearing aligners. The results exceeded my expectations, and the process was totally painless.",
  },
  {
    id: 3,
    patient: "Elena R.",
    treatment: "Same-Day Ceramic Crowns & Gum Sculpting",
    duration: "Single 3-Hour Visit",
    shadeChange: "Matched Natural Enamel A1",
    quote: "Fixing my chipped front tooth in a single visit without any gooey impressions felt like magic. Dr. Vance is a true artist.",
  },
];

export default function TransformationsPage() {
  return (
    <div className="page-container transformations-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="section-container">
          <div className="section-subtitle-badge">
            <Sparkles size={14} />
            <span>SMILE GALLERY & CASE STUDIES</span>
          </div>
          <h1 className="page-title">
            Witness the Power of <br />
            <span className="gold-text-accent">3D Smile Transformations</span>
          </h1>
          <p className="page-subtitle">
            Explore real patient results achieved through custom porcelain veneers, 3D aligner therapy, and same-day ceramic restorations.
          </p>
        </div>
      </section>

      {/* Interactive Transformation Slider Component */}
      <TransformationSection />

      {/* Detailed Patient Case Studies Grid */}
      <section className="section-padding case-studies-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle-badge">
              <Award size={14} />
              <span>REAL PATIENT STORIES</span>
            </div>
            <h2 className="section-title">
              Featured Smile Makeover <br />
              <span className="gold-text-accent">Case Studies</span>
            </h2>
            <p className="section-description">
              Every smile tells a story. Here is a glimpse at how personalized 3D smile design transformed our patients' confidence.
            </p>
          </div>

          <div className="case-studies-grid">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.id} className="case-study-card">
                <div className="cs-badge-row">
                  <span className="cs-patient-name">{cs.patient}</span>
                  <span className="cs-shade-tag">{cs.shadeChange}</span>
                </div>
                <h3 className="cs-treatment-title">{cs.treatment}</h3>
                <div className="cs-meta-row">
                  <span><strong>Duration:</strong> {cs.duration}</span>
                </div>
                <p className="cs-quote">"{cs.quote}"</p>
                <div className="cs-stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="star-gold" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Comparison Matrix */}
      <section className="section-padding comparison-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle-badge">
              <Smile size={14} />
              <span>CHOOSING YOUR TREATMENT</span>
            </div>
            <h2 className="section-title">
              Which Transformation is <br />
              <span className="gold-text-accent">Right For You?</span>
            </h2>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Porcelain Veneers</th>
                  <th>3D Invisalign</th>
                  <th>Same-Day Crowns</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Primary Goal</td>
                  <td>Instant Shape, Shade & Symmetry</td>
                  <td>Teeth Realignment & Bite Fix</td>
                  <td>Structural Tooth Repair</td>
                </tr>
                <tr>
                  <td>Treatment Time</td>
                  <td>1 - 2 Visits (10 Days)</td>
                  <td>6 - 12 Months</td>
                  <td>Single Visit (90 Mins)</td>
                </tr>
                <tr>
                  <td>Durability</td>
                  <td>15 - 20+ Years</td>
                  <td>Permanent Alignment</td>
                  <td>15 - 20+ Years</td>
                </tr>
                <tr>
                  <td>Custom 3D Preview</td>
                  <td><CheckCircle2 size={18} className="check-gold" /> Included</td>
                  <td><CheckCircle2 size={18} className="check-gold" /> Included</td>
                  <td><CheckCircle2 size={18} className="check-gold" /> Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guarantee Banner & CTA */}
      <section className="section-padding cta-banner-section">
        <div className="section-container cta-banner-card">
          <div className="cta-content">
            <h2>Start Your 3D Smile Transformation</h2>
            <p>Schedule a complimentary digital smile consultation and preview your new smile in 3D before treatment begins.</p>
          </div>
          <div className="cta-actions">
            <Link href="/booking" className="btn-primary-hero">
              <Calendar size={18} />
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
