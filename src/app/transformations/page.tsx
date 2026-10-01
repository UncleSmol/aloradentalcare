"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Award,
  CheckCircle2,
  Calendar,
  Star,
  Smile,
} from "lucide-react";
import TransformationSection from "@/components/TransformationSection";
import Footer from "@/components/Footer";

const CASE_STUDIES = [
  {
    id: 1,
    patient: "Sophia M.",
    image: "/hero-gallery-2.jpg",
    treatment: "Handcrafted Porcelain Veneers (8 Upper Arch)",
    duration: "2 Visits",
    shadeChange: "Natural Bleach BL2",
    quote: "I used to hide my teeth in every photo. Now I can't stop smiling. The consultation and care at Alora Dental made me feel so confident!",
  },
  {
    id: 2,
    patient: "Marcus T.",
    image: "/hero-gallery-5.jpg",
    treatment: "Clear Aligners & Teeth Whitening",
    duration: "9 Months",
    shadeChange: "6 Shades Brighter",
    quote: "Nobody even noticed I was wearing clear aligners. The results exceeded my expectations, and the treatment was smooth and painless.",
  },
  {
    id: 3,
    patient: "Elena R.",
    image: "/hero-gallery-3.jpg",
    treatment: "Porcelain Crowns & Aesthetic Restoration",
    duration: "2 Visits",
    shadeChange: "Matched Natural Enamel A1",
    quote: "Fixing my chipped front tooth without any gooey impressions or discomfort felt amazing. Dr. Vance and the team are true professionals.",
  },
];

export default function TransformationsPage() {
  return (
    <div className="page-container transformations-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="section-container">
          <h1 className="page-title">
            Witness Real Patient <br />
            <span className="gold-text-accent">Smile Transformations</span>
          </h1>
          <p className="page-subtitle">
            Explore real patient results achieved through custom porcelain veneers, clear orthodontic aligner therapy, and restorative ceramic crowns at Alora Dental Care in eMalahleni.
          </p>
        </div>
      </section>

      {/* Interactive Transformation Slider Component */}
      <TransformationSection />

      {/* Detailed Patient Case Studies Grid */}
      <section className="section-padding case-studies-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Featured Smile Makeover <br />
              <span className="gold-text-accent">Case Studies</span>
            </h2>
            <p className="section-description">
              Every smile tells a story. Here is a glimpse at how personalized dental care transformed our patients' confidence and oral health.
            </p>
          </div>

          <div className="case-studies-grid">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.id} className="case-study-card">
                <div className="cs-image-box" style={{ position: "relative", height: "160px", width: "100%", borderRadius: "10px", overflow: "hidden", marginBottom: "1rem" }}>
                  <Image
                    src={cs.image}
                    alt={cs.patient}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
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
                  <th>Clear Aligners</th>
                  <th>Porcelain Crowns</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Primary Goal</td>
                  <td>Instant Shape, Shade & Symmetry</td>
                  <td>Teeth Realignment & Bite Alignment</td>
                  <td>Structural Tooth Repair & Strength</td>
                </tr>
                <tr>
                  <td>Treatment Time</td>
                  <td>2 Visits</td>
                  <td>6 - 12 Months</td>
                  <td>1 - 2 Visits</td>
                </tr>
                <tr>
                  <td>Durability</td>
                  <td>15 - 20+ Years</td>
                  <td>Permanent Alignment</td>
                  <td>15 - 20+ Years</td>
                </tr>
                <tr>
                  <td>Personal Consultation</td>
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
            <h2>Start Your Smile Transformation</h2>
            <p>Schedule your consultation at Alora Dental Care in Reyno Ridge, eMalahleni today.</p>
          </div>
          <div className="cta-actions">
            <Link href="/booking" className="btn-primary-hero">
              <Calendar size={18} />
              <span>Book Visit Online</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
