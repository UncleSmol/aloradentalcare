"use client";

import { Sparkles, Smile, ShieldCheck, Cpu, Stethoscope, Zap } from "lucide-react";

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

const servicesData = [
  {
    id: "01",
    icon: Sparkles,
    title: "Cosmetic Veneers & Crowns",
    subtitle: "Custom Handcrafted Porcelain",
    description: "Transform chipped, discolored, or uneven teeth with ultra-thin porcelain veneers designed for natural brilliance.",
    tag: "Aesthetics",
  },
  {
    id: "02",
    icon: Smile,
    title: "3D Clear Invisalign Aligners",
    subtitle: "Discreet Arch Alignment",
    description: "Straighten your teeth comfortably with custom 3D printed invisible aligners without traditional brackets or wires.",
    tag: "Orthodontics",
  },
  {
    id: "03",
    icon: ShieldCheck,
    title: "Guided Dental Implants",
    subtitle: "Permanent Tooth Replacement",
    description: "Precision 3D CBCT guided implant placement for lifelike feel, seamless bite strength, and rapid healing time.",
    tag: "Restorative",
  },
  {
    id: "04",
    icon: Zap,
    title: "Laser Enamel Whitening",
    subtitle: "Instant 8-Shade Brightening",
    description: "Advanced cold-laser whitening safely eliminates deep food and beverage stains in 45 minutes with zero sensitivity.",
    tag: "Popular",
  },
  {
    id: "05",
    icon: Stethoscope,
    title: "Preventive Care & Hygiene",
    subtitle: "Comprehensive Oral Health",
    description: "Gentle ultrasonic cleaning, detailed gum health assessment, and protective enamel treatments for long-term health.",
    tag: "Wellness",
  },
  {
    id: "06",
    icon: Cpu,
    title: "Same-Day Emergency Care",
    subtitle: "Immediate Pain Relief",
    description: "Urgent dental appointments for toothaches, chipped teeth, or lost restorations with prompt relief guarantees.",
    tag: "24/7 Support",
  },
];

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section className="section-padding services-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-subtitle-badge">
            <Sparkles size={14} />
            <span>OUR TREATMENT SOLUTIONS</span>
          </div>
          <h2 className="section-title">
            Tailored Dental Care <br />
            <span className="gold-text-accent">For Every Stage of Life</span>
          </h2>
          <p className="section-description">
            From routine preventive checkups to complex full-mouth cosmetic transformations, Alora Dental Care delivers exceptional treatment with unmatched gentle touch.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="service-card"
                onClick={() => onSelectService && onSelectService(service.title)}
              >
                <div className="service-card-top">
                  <span className="service-number">{service.id}</span>
                  <span className="service-tag">{service.tag}</span>
                </div>

                <div className="service-icon-wrapper">
                  <Icon size={26} />
                </div>

                <h3 className="service-title">{service.title}</h3>
                <h4 className="service-subtitle">{service.subtitle}</h4>
                <p className="service-desc">{service.description}</p>

                <div className="service-card-footer">
                  <span className="service-learn-more">Schedule Treatment &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
