"use client";

import Image from "next/image";

export default function HeroMediaGallery() {
  return (
    <div className="hero-bg-image-wrapper">
      <div className="hero-media-layer">
        <Image
          src="/hero-bg.jpg"
          alt="Alora Dental Care Practice"
          fill
          priority
          sizes="100vw"
          className="hero-bg-img"
        />
      </div>
      <div className="hero-bg-overlay" />
    </div>
  );
}