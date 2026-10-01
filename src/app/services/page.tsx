"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  HeartPulse,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Smile,
  Layers,
  Award,
  CreditCard,
} from "lucide-react";
import Footer from "@/components/Footer";

const SERVICES_DATA = [
  {
    id: "veneers",
    category: "cosmetic",
    icon: Sparkles,
    image: "/hero-gallery-2.jpg",
    title: "Porcelain Veneers & Cosmetic Dentistry",
    tagline: "Handcrafted Ceramic Shells for Radiant Symmetry",
    description:
      "Transform discolored, chipped, gapped, or uneven teeth with porcelain veneers. Each veneer is custom-designed to match your facial aesthetics and reflect light just like natural enamel.",
    features: [
      "Custom Shade & Form Matching",
      "Stain-Resistant High-Grade Porcelain",
      "Minimal Prep Dental Options",
      "Natural Enamel Aesthetics",
    ],
    duration: "2 Visits",
    idealFor: "Chipped, discolored, spaced, or uneven teeth",
  },
  {
    id: "aligners",
    category: "aligners",
    icon: Zap,
    image: "/hero-gallery-5.jpg",
    title: "Clear Aligners & Orthodontic Care",
    tagline: "Discreet & Comfortable Teeth Straightening",
    description:
      "Straighten your teeth comfortably with clear, removable aligners. Enjoy smooth, bracket-free tooth movement tailored to your active lifestyle.",
    features: [
      "Nearly Invisible Appearance",
      "Removable for Meals & Hygiene",
      "Gentle & Smooth Aligners",
      "Includes Professional Whitening",
    ],
    duration: "6 - 14 Months Average",
    idealFor: "Crowding, gaps, overbites, and alignment",
  },
  {
    id: "whitening",
    category: "cosmetic",
    icon: Smile,
    image: "/hero-gallery-4.jpg",
    title: "Professional Laser Teeth Whitening",
    tagline: "Brighten Your Natural Teeth up to 8 Shades",
    description:
      "Our gentle clinical teeth whitening system safely removes deep intrinsic stains caused by coffee, tea, wine, and aging without tooth sensitivity.",
    features: [
      "Immediate In-Office Results",
      "Gentle Enamel-Safe Gel Formula",
      "Enamel Remineralization Care",
      "Includes Take-Home Touch-Up Kit",
    ],
    duration: "Single 60-Minute Visit",
    idealFor: "Deep stains, yellowing, special event prep",
  },
  {
    id: "crowns",
    category: "restorative",
    icon: Clock,
    image: "/hero-gallery-3.jpg",
    title: "Porcelain Crowns, Bridges & Fillings",
    tagline: "Durable & Lifelike Tooth Restorations",
    description:
      "Restore damaged or decayed teeth with tooth-colored ceramic crowns, custom bridges, and aesthetic composite fillings designed for optimal strength and bite comfort.",
    features: [
      "100% Metal-Free Ceramic Materials",
      "Digitally Mapped Precise Fit",
      "Strong & Natural Translucency",
      "Painless Restoration Process",
    ],
    duration: "1 - 2 Visits",
    idealFor: "Broken, cracked, or heavily decayed teeth",
  },
  {
    id: "implants",
    category: "restorative",
    icon: ShieldCheck,
    image: "/hero-bg.jpg",
    title: "Dental Implants & Tooth Replacements",
    tagline: "Permanent, Natural-Feeling Implant Solutions",
    description:
      "Replace single or multiple missing teeth with biocompatible titanium dental implants topped with natural ceramic crowns that function just like your real teeth.",
    features: [
      "Guided Surgical Placement",
      "Preserves Natural Bone Structure",
      "Permanent Lifetime Solution",
      "Restores Full Chewing Strength",
    ],
    duration: "Multi-Phase Precision Care",
    idealFor: "Single or multiple missing teeth",
  },
  {
    id: "sedation",
    category: "preventive",
    icon: HeartPulse,
    image: "/about-us-hero.png",
    title: "Gentle Family & Preventive Dentistry",
    tagline: "Comfortable Care for Adults & Children",
    description:
      "Comprehensive dental examinations, gentle ultrasonic plaque removal, fluoride treatments, and zero-anxiety care designed for adults and children.",
    features: [
      "Soft-Touch Gentle Hygiene",
      "Low-Radiation Digital X-Rays",
      "Pediatric Friendly Dentist",
      "Quiet & Relaxing Environment",
    ],
    duration: "45 - 60 Minutes",
    idealFor: "Routine exams, cleanings, and preventive checkups",
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
            <span>OUR DENTAL SERVICES</span>
          </div>
          <h1 className="page-title">
            Comprehensive Family & Cosmetic Dentistry <br />
            <span className="gold-text-accent">In eMalahleni</span>
          </h1>
          <p className="page-subtitle">
            Explore our complete suite of general, cosmetic, restorative, and orthodontic dental treatments delivered with warmth, precision, and patient-centered care.
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
              Clear Aligners
            </button>
            <button
              className={`filter-btn ${activeCategory === "restorative" ? "active" : ""}`}
              onClick={() => setActiveCategory("restorative")}
            >
              Restorative & Crowns
            </button>
            <button
              className={`filter-btn ${activeCategory === "preventive" ? "active" : ""}`}
              onClick={() => setActiveCategory("preventive")}
            >
              Preventive & Family
            </button>
          </div>

          {/* Service Detail Cards Grid */}
          <div className="services-detail-grid">
            {filteredServices.map((service) => {
              const IconComp = service.icon;
              return (
                <div key={service.id} className="service-detail-card">
                  {/* Visual Image Header */}
                  <div className="service-card-image-box" style={{ position: "relative", height: "180px", width: "100%", borderRadius: "12px", overflow: "hidden", marginBottom: "1.25rem" }}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(11,23,48,0.85) 100%)" }} />
                  </div>

                  <div className="card-header-row">
                    <div className="service-icon-box">
                      <IconComp size={24} />
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

                  <div className="card-action-row" style={{ marginTop: "auto", paddingTop: "1.25rem" }}>
                    <Link href={`/booking?service=${service.id}`} className="btn-primary-hero" style={{ width: "100%", justifyContent: "center" }}>
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
              <CreditCard size={14} />
              <span>MEDICAL AID & PAYMENTS</span>
            </div>
            <h2>Direct Medical Aid Billing & Flexible Options</h2>
            <p>
              At Alora Dental Care in Reyno Ridge, eMalahleni, we submit claims directly to Discovery Health, Bonitas, Momentum, Medshield, Bestmed, Fedhealth, and all major South African medical schemes. We also accept debit cards, credit cards, and EFT payments.
            </p>
          </div>
          <div className="insurance-bullets">
            <div className="bullet-pill"><CheckCircle2 size={16} /> All Major South African Medical Aids Accepted</div>
            <div className="bullet-pill"><CheckCircle2 size={16} /> Direct Electronic Claims Submission</div>
            <div className="bullet-pill"><CheckCircle2 size={16} /> Transparent Quotes & Cash Rates Available</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
