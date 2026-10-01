"use client";

import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import HeroMediaGallery from "./HeroMediaGallery";

export default function HeroSection() {
  return (
    <section className="section-padding hero-section-container">
      {/* Hero Media Gallery Layer */}
      <HeroMediaGallery />

      {/* Hero Foreground Content Glass Card */}
      <motion.div
        className="hero-content-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="hero-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Crafting Timeless <br />
          & <span className="gold-text-accent">Radiant Smiles</span>
        </motion.h1>

        <motion.p
          className="hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Gentle, modern dental care designed around your comfort and confidence.
        </motion.p>

        <motion.div
          className="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/booking" className="btn-primary-hero">
            <Calendar size={18} />
            <span>Book Consultation</span>
          </Link>
          <Link href="/services" className="btn-secondary-hero">
            <span>Explore Solutions</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
