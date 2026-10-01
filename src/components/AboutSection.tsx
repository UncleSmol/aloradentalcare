"use client";

import Image from "next/image";
import { Sparkles, HeartPulse, Award, ShieldCheck, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="section-padding about-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-subtitle-badge">
            <Sparkles size={14} />
            <span>WHO WE ARE</span>
          </div>
          <h2 className="section-title">
            Gentle Dentistry Designed Around <br />
            <span className="gold-text-accent">Your Comfort & Beauty</span>
          </h2>
          <p className="section-description">
            At Alora Dental Care, we combine boutique luxury with modern clinical science to deliver anxiety-free dental experiences that leave you smiling with confidence.
          </p>
        </div>

        <div className="about-grid">
          {/* Visual About Us Image (No border, no background) */}
          <div className="about-image-wrapper">
            <Image
              src="/about-us-hero.png"
              alt="About Alora Dental Care"
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
                <h3 className="feature-title">Painless & Gentle Approach</h3>
                <p className="feature-desc">
                  We specialize in zero-anxiety techniques, sedation options, and soft-laser treatments designed for total peace of mind.
                </p>
              </div>
            </div>

            <div className="feature-block">
              <div className="feature-icon-wrapper">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="feature-title">3D Precision Technology</h3>
                <p className="feature-desc">
                  Intraoral 3D scanners replace messy traditional impressions for instant, ultra-comfortable optical mapping.
                </p>
              </div>
            </div>

            <div className="feature-block">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="feature-title">Comprehensive Warranty</h3>
                <p className="feature-desc">
                  All porcelain veneers, ceramic crowns, and implant restorations come with our signature quality assurance guarantee.
                </p>
              </div>
            </div>

            <div className="feature-block">
              <div className="feature-icon-wrapper">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="feature-title">Same-Day Restorations</h3>
                <p className="feature-desc">
                  Our in-house 3D CAD/CAM milling suite enables single-visit veneers, crowns, and smile touch-ups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
