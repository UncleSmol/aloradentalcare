"use client";

import { Sparkles, Scan, Smile, ShieldCheck, HeartPulse } from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: Scan,
    title: "Digital Consultation & 3D Scan",
    subtitle: "Mess-Free Optical Imaging",
    description: "We capture high-resolution 3D optical scans of your teeth in under 5 minutes without uncomfortable tray impressions.",
  },
  {
    step: "02",
    icon: Smile,
    title: "Custom 3D Smile Preview",
    subtitle: "Try On Your New Smile",
    description: "Our digital smile design software creates a photorealistic 3D preview of your proposed results before treatment begins.",
  },
  {
    step: "03",
    icon: HeartPulse,
    title: "Gentle Micro-Procedure",
    subtitle: "Zero Stress & Pain Guarantee",
    description: "Relax in our comfortable treatment suite while our specialists carry out your gentle, micro-invasive procedure.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Radiant Lifetime Smile",
    subtitle: "Ongoing Care & Assurance",
    description: "Walk out with your brand new, confident smile backed by our clinic guarantee and comprehensive follow-up care.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding process-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-subtitle-badge">
            <Sparkles size={14} />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="section-title">
            Your Seamless Journey To A <br />
            <span className="gold-text-accent">Perfect, Healthy Smile</span>
          </h2>
          <p className="section-description">
            We've streamlined every step of your dental visit to ensure maximum comfort, complete clarity, and flawless results.
          </p>
        </div>

        <div className="process-steps-grid">
          {processSteps.map((stepItem) => {
            const Icon = stepItem.icon;
            return (
              <div key={stepItem.step} className="process-card">
                <div className="process-card-header">
                  <span className="process-number-badge">{stepItem.step}</span>
                  <div className="process-icon-box">
                    <Icon size={24} />
                  </div>
                </div>

                <h3 className="process-card-title">{stepItem.title}</h3>
                <h4 className="process-card-subtitle">{stepItem.subtitle}</h4>
                <p className="process-card-desc">{stepItem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
