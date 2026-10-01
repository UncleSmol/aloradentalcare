"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  HeartPulse,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Smile,
  Layers,
  Award,
} from "lucide-react";
import Footer from "@/components/Footer";

const SERVICES_DATA = [
  {
    id: "veneers",
    category: "cosmetic",
    icon: Sparkles,
    title: "Porcelain Veneers & Digital Smile Design",
    tagline: "Handcrafted Ceramic Shells for Flawless Symmetry",
    description:
      "Transform shade, length, shape, and slight misalignments with ultra-thin porcelain veneers. Each veneer is custom-milled to reflect light just like natural enamel.",
    features: [
      "100% Custom Shade Matching",
      "Stain-Resistant Swiss Porcelain",
      "Micro-Thin Minimal Prep Option",
      "10-Year Porcelain Warranty",
    ],
    duration: "2 Visits (or Same-Day CAD)",
    idealFor: "Chipped, discolored, spaced, or uneven teeth",
  },
  {
    id: "invisalign",
    category: "aligners",
    icon: Zap,
    title: "3D Invisalign & Clear Aligner Therapy",
    tagline: "Virtually Invisible Teeth Straightening",
    description:
      "Straighten your smile discreetly using custom 3D printed clear aligners. Using optical digital tracking, we map your tooth movement with sub-millimeter precision.",
    features: [
      "No Messy Impression Trays",
      "Removable for Meals & Events",
      "Accelerated 3D Tracking",
      "Includes Complimentary Whitening",
    ],
    duration: "6 - 14 Months Average",
    idealFor: "Crowding, gaps, overbites, and crossbites",
  },
  {
    id: "whitening",
    category: "cosmetic",
    icon: Smile,
    title: "Laser Teeth Whitening & Enamel Spa",
    tagline: "Up to 8 Shades Brighter in 60 Minutes",
    description:
      "Our gentle cold-laser whitening system removes deep intrinsic stains caused by coffee, wine, and aging without chemical tooth sensitivity.",
    features: [
      "Immediate 60-Minute Results",
      "Zero Tooth Sensitivity Formula",
      "Enamel Remineralizing Seal",
      "Includes Custom Take-Home Trays",
    ],
    duration: "Single 60-Minute Visit",
    idealFor: "Deep stains, yellowing, special event prep",
  },
  {
    id: "crowns",
    category: "restorative",
    icon: Clock,
    title: "Same-Day Porcelain Crowns & Onlays",
    tagline: "Permanent Ceramic Restorations in 90 Minutes",
    description:
      "Restore damaged or decayed teeth in a single visit with our in-house 3D CAD/CAM milling system. No temporary crowns or multi-week waits required.",
    features: [
      "100% Metal-Free Ceramic",
      "3D Digitally Designed Fit",
      "Done in a Single Visit",
      "Natural Translucency",
    ],
    duration: "90 Minutes Total",
    idealFor: "Broken, cracked, or heavily decayed teeth",
  },
  {
    id: "implants",
    category: "restorative",
    icon: ShieldCheck,
    title: "Premium Dental Implants & Arch Restorations",
    tagline: "Permanent, Natural-Feeling Tooth Replacement",
    description:
      "Replace missing teeth with biocompatible titanium implants and porcelain crowns that look, feel, and function just like your natural teeth.",
    features: [
      "3D Guided Surgical Precision",
      "Preserves Facial Structure",
      "Permanent Lifetime Solution",
      "Natural Bite Strength",
    ],
    duration: "Multi-Phase Precision Care",
    idealFor: "Single or multiple missing teeth",
  },
  {
    id: "sedation",
    category: "sedation",
    icon: HeartPulse,
    title: "Zero-Anxiety Sleep Dentistry & Sedation",
    tagline: "Painless, Fear-Free Dental Experiences",
    description:
      "Overcome dental anxiety completely with customized sedation options ranging from nitrous oxide (laughing gas) to oral and twilight IV sedation.",
    features: [
      "Board-Certified Sedation Monitoring",
      "Wake Up with Treatment Complete",
      "Soft-Touch Anesthesia Technique",
      "Quiet, Luxury Suites",
    ],
    duration: "Per Treatment Visit",
    idealFor: "Dental anxiety, sensitive gag reflex, complex procedures",
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="page-container services-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="section-container">
          <div className="section-subtitle-badge">
            <Layers size={14} />
            <span>OUR CLINICAL SERVICES</span>
          </div>
          <h1 className="page-title">
            Comprehensive Boutique Dentistry <br />
            <span className="gold-text-accent">Designed For Your Comfort</span>
          </h1>
          <p className="page-subtitle">
            Explore our signature range of 3D cosmetic, restorative, aligner, and zero-anxiety treatments engineered to deliver long-lasting beauty and health.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="section-padding services-main-section">
        <div className="section-container">
          <div className="category-filter-bar">
            <button
              className={`filter-btn ${activeCategory === "all" ? "active" : ""}`}
              onClick={() => setActiveCategory("all")}
            >
              All Treatments
            </button>
            <button
              className={`filter-btn ${activeCategory === "cosmetic" ? "active" : ""}`}
              onClick={() => setActiveCategory("cosmetic")}
            >
              Cosmetic Dentistry
            </button>
            <button
              className={`filter-btn ${activeCategory === "aligners" ? "active" : ""}`}
              onClick={() => setActiveCategory("aligners")}
            >
              3D Aligners
            </button>
            <button
              className={`filter-btn ${activeCategory === "restorative" ? "active" : ""}`}
              onClick={() => setActiveCategory("restorative")}
            >
              Restorative & Crowns
            </button>
            <button
              className={`filter-btn ${activeCategory === "sedation" ? "active" : ""}`}
              onClick={() => setActiveCategory("sedation")}
            >
              Zero-Anxiety Sedation
            </button>
          </div>

          {/* Service Detail Cards Grid */}
          <div className="services-detail-grid">
            {filteredServices.map((service) => {
              const IconComp = service.icon;
              return (
                <div key={service.id} className="service-detail-card">
                  <div className="card-header-row">
                    <div className="service-icon-box">
                      <IconComp size={28} />
                    </div>
                    <div className="duration-tag">
                      <Clock size={14} />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <h2 className="service-card-title">{service.title}</h2>
                  <h4 className="service-tagline">{service.tagline}</h4>
                  <p className="service-description">{service.description}</p>

                  <div className="ideal-for-box">
                    <strong>Ideal For:</strong> {service.idealFor}
                  </div>

                  <div className="features-checklist">
                    {service.features.map((feat, i) => (
                      <div key={i} className="checklist-item">
                        <CheckCircle2 size={16} className="check-icon" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="card-action-row">
                    <Link href={`/booking?service=${service.id}`} className="btn-primary-hero">
                      <Calendar size={16} />
                      <span>Book Treatment</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Financial & Insurance Partners Banner */}
      <section className="section-padding insurance-banner-section">
        <div className="section-container insurance-card">
          <div className="insurance-info">
            <div className="section-subtitle-badge">
              <Award size={14} />
              <span>TRANSPARENT PRICING</span>
            </div>
            <h2>Flexible Payment & Insurance Options</h2>
            <p>
              We believe luxury dental care should be accessible and transparent. We accept all major PPO insurance plans, offer 0% APR financing options via CareCredit and Sunbit, and provide our in-house VIP Membership Plan for non-insured patients.
            </p>
          </div>
          <div className="insurance-bullets">
            <div className="bullet-pill"><CheckCircle2 size={16} /> All Major PPO Insurance Accepted</div>
            <div className="bullet-pill"><CheckCircle2 size={16} /> 0% APR Flexible Monthly Payment Plans</div>
            <div className="bullet-pill"><CheckCircle2 size={16} /> Complimentary 3D Smile Consultation</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
