"use client";

import { Sparkles, Stethoscope, Smile, ShieldCheck, HeartPulse } from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: Stethoscope,
    title: "Comprehensive Dental Exam",
    subtitle: "Gentle Diagnostics & X-Rays",
    description: "We conduct a thorough examination of your teeth, gums, and oral health using low-radiation digital imaging.",
  },
  {
    step: "02",
    icon: Smile,
    title: "Personalized Treatment Plan",
    subtitle: "Clear Guidance & Options",
    description: "Dr. Vance discusses your dental goals, answers questions, and provides a transparent treatment plan tailored to your budget.",
  },
  {
    step: "03",
    icon: HeartPulse,
    title: "Gentle & Comfortable Treatment",
    subtitle: "Relaxed Clinical Environment",
    description: "Experience soft-touch procedures in our soothing practice suite designed to keep you relaxed and completely pain-free.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Radiant Smile & Aftercare",
    subtitle: "Long-Term Oral Health",
    description: "Walk out with a healthy, confident smile backed by personalized hygiene advice and ongoing preventive support.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding process-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Your Seamless Journey To A <br />
            <span className="gold-text-accent">Healthy, Radiant Smile</span>
          </h2>
          <p className="section-description">
            We've streamlined every step of your dental visit at Alora Dental Care in eMalahleni to ensure maximum comfort, complete clarity, and lasting results.
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
