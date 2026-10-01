"use client";

import Link from "next/link";
import { Calendar, ArrowRight, Star, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import HeroMediaGallery from "./HeroMediaGallery";

export default function HeroSection() {
  return (
    <section className="section-padding hero-section-container">
      {/* Background Media & Parallax Hand Layer */}
      <HeroMediaGallery />

      {/* Hero Content Container */}
      <div className="hero-content-wrapper">
        <motion.div
          className="hero-content-card"
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Headline */}
          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Crafting Timeless & <br />
            <span className="gold-text-accent">Radiant Smiles</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="hero-subheadline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Gentle family & aesthetic dentistry in Reyno Ridge, eMalahleni. Experience compassionate care, modern clinical techniques, and zero-anxiety visits.
          </motion.p>

          {/* CTA Buttons Group */}
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <Link href="/booking" className="btn-primary-hero">
              <Calendar size={18} />
              <span>Book Appointment Online</span>
            </Link>

            <Link href="/services" className="btn-secondary-hero">
              <span>Explore Treatments</span>
              <ArrowRight size={16} className="btn-arrow-icon" />
            </Link>
          </motion.div>

          {/* Luxury Stats & Trust Badges Strip */}
          <motion.div
            className="hero-trust-strip"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <div className="trust-item">
              <div className="stars-mini">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={13} className="star-gold" />
                ))}
              </div>
              <span><strong>4.9/5.0</strong> Rating</span>
            </div>

            <span className="trust-divider" />

            <div className="trust-item">
              <ShieldCheck size={15} className="shield-icon" />
              <span>Medical Aid Accepted</span>
            </div>

            <span className="trust-divider" />

            <div className="trust-item">
              <MapPin size={15} className="shield-icon" />
              <span>Reyno Ridge, eMalahleni</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
