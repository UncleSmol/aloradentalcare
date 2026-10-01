"use client";

import Image from "next/image";
import { Sparkles, HeartPulse, ShieldCheck, Smile } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="section-padding about-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Gentle Dentistry Designed Around <br />
            <span className="gold-text-accent">Your Comfort & Oral Health</span>
          </h2>
          <p className="section-description">
            At Alora Dental Care in Reyno Ridge, eMalahleni, we combine compassionate patient care with modern dental techniques to deliver welcoming, anxiety-free dental experiences for the whole family.
          </p>
        </div>

        <div className="about-grid">
          {/* Visual About Us Image */}
          <div className="about-image-wrapper">
            <Image
              src="/about-us-hero.png"
              alt="About Alora Dental Care Practice"
              width={700}
              height={500}
              priority
              unoptimized
              className="about-us-clean-img"
            />
          </div>

          {/* Feature Highlights Grid */}
          <div className="about-features-col">
            <div className="feature-block">
              <div className="feature-icon-wrapper">
                <HeartPulse size={24} />
              </div>
              <div>
                <h3 className="feature-title">Painless & Gentle Care</h3>
                <p className="feature-desc">
                  We prioritize your comfort with soft-touch techniques, clear communication, and a soothing clinical setting for total peace of mind.
                </p>
              </div>
            </div>

            <div className="feature-block">
              <div className="feature-icon-wrapper">
                <Smile size={24} />
              </div>
              <div>
                <h3 className="feature-title">Modern Clinical Equipment</h3>
                <p className="feature-desc">
                  Low-radiation digital imaging and gentle ultrasonic tools ensure fast, comfortable diagnostics without traditional discomfort.
                </p>
              </div>
            </div>

            <div className="feature-block">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="feature-title">Comprehensive Family Dentistry</h3>
                <p className="feature-desc">
                  From toddlers' first checkups to adult cosmetic enhancements and restorative care, we treat every member of your family like royalty.
                </p>
              </div>
            </div>

            <div className="feature-block">
              <div className="feature-icon-wrapper">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="feature-title">Convenient eMalahleni Location</h3>
                <p className="feature-desc">
                  Easily accessible at Shop 18, Reyno Ridge Centre with free parking, flexible appointment scheduling, and direct medical aid billing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
