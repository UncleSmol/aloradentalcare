"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroMediaGallery() {
  const { scrollY } = useScroll();

  // Slower scroll translation for smooth parallax effect as user scrolls
  const handY = useTransform(scrollY, [0, 800], [0, 180]);

  return (
    <div className="hero-bg-image-wrapper">
      {/* Background Main Image Layer */}
      <div className="hero-media-layer">
        <Image
          src="/hero-bg.jpg"
          alt="Alora Dental Care Practice Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="hero-bg-img"
        />
      </div>

      {/* Dark Gradient Contrast Overlay */}
      <div className="hero-bg-overlay" />

      {/* Parallax Floating Hand Image Layer (Bottom-Right Overlap) */}
      <motion.div
        className="hero-hand-wrapper"
        style={{ y: handY }}
      >
        <Image
          src="/hero-bg-hand.png"
          alt="Alora Dental Care Practice Detail"
          width={700}
          height={700}
          priority
          unoptimized
          className="hero-hand-img"
        />
      </motion.div>
    </div>
  );
}