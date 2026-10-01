"use client";

import { Sparkles, Smile, ShieldCheck, Stethoscope, Zap, HeartPulse } from "lucide-react";

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

const servicesData = [
  {
    id: "01",
    icon: Sparkles,
    title: "Cosmetic Veneers & Crowns",
    subtitle: "Custom Handcrafted Porcelain",
    description: "Transform chipped, discolored, or uneven teeth with high-quality porcelain veneers and ceramic crowns designed for natural brilliance.",
    tag: "Aesthetics",
  },
  {
    id: "02",
    icon: Smile,
    title: "Clear Aligners & Orthodontics",
    subtitle: "Discreet Tooth Alignment",
    description: "Straighten your teeth comfortably with custom clear aligners without traditional metal brackets or wires.",
    tag: "Orthodontics",
  },
  {
    id: "03",
    icon: ShieldCheck,
    title: "Dental Implants & Restorative",
    subtitle: "Permanent Tooth Replacement",
    description: "Precision-guided implant placement and restorative bridges for natural feel, seamless bite strength, and durable results.",
    tag: "Restorative",
  },
  {
    id: "04",
    icon: Zap,
    title: "Professional Teeth Whitening",
    subtitle: "Brighten Your Natural Smile",
    description: "Safe, effective clinical teeth whitening eliminates deep food, beverage, and aging stains to restore your radiant smile.",
    tag: "Popular",
  },
  {
    id: "05",
    icon: Stethoscope,
    title: "Preventive Care & Hygiene",
    subtitle: "Comprehensive Family Dentistry",
    description: "Gentle ultrasonic cleanings, detailed gum health assessments, and protective fluoride enamel treatments for long-term health.",
    tag: "Wellness",
  },
  {
    id: "06",
    icon: HeartPulse,
    title: "Same-Day Emergency Care",
    subtitle: "Immediate Pain Relief",
    description: "Urgent dental appointments for toothaches, chipped teeth, cracked fillings, or lost restorations with prompt relief guarantees.",
    tag: "Emergency",
  },
];

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section className="section-padding services-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Tailored Dental Care <br />
            <span className="gold-text-accent">For The Whole Family</span>
          </h2>
          <p className="section-description">
            From routine preventive checkups to restorative crowns and cosmetic teeth whitening, Alora Dental Care in eMalahleni delivers gentle, high-quality treatment.
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
