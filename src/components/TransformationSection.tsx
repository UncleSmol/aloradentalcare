"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function TransformationSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 2) position = 2;
    if (position > 98) position = 98;
    setSliderPosition(position);
  };

  const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section className="section-padding transformation-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Witness the Power of a <br />
            <span className="gold-text-accent">Radiant Smile Transformation</span>
          </h2>
          <p className="section-description">
            Drag the interactive divider below to explore real patient smile results achieved with custom porcelain veneers and teeth whitening.
          </p>
        </div>

        <div className="transformation-interactive-wrapper">
          <div
            ref={containerRef}
            className="slider-container"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER Layer (Full Background Image) */}
            <div className="after-layer">
              <Image
                src="/hero-gallery-2.jpg"
                alt="After Dental Smile Transformation"
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
                unoptimized
                style={{ objectFit: "cover" }}
              />
              <div className="smile-label-badge after-label">AFTER ALORA DENTAL CARE</div>
            </div>

            {/* BEFORE Layer (Clipped Overlay Image) */}
            <div
              className="before-layer"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="before-image-inner" style={{ width: containerRef.current?.clientWidth || "100%" }}>
                <Image
                  src="/hero-gallery-4.jpg"
                  alt="Before Dental Smile Treatment"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1000px"
                  unoptimized
                  style={{ objectFit: "cover", filter: "contrast(0.9) brightness(0.9)" }}
                />
                <div className="smile-label-badge before-label">BEFORE TREATMENT</div>
              </div>
            </div>

            {/* Interactive Drag Handle */}
            <div className="slider-handle" style={{ left: `${sliderPosition}%` }}>
              <div className="slider-handle-line" />
              <div className="slider-handle-button">
                <span>&larr; &rarr;</span>
              </div>
            </div>
          </div>

          <div className="transformation-facts">
            <div className="fact-pill">
              <CheckCircle2 size={16} className="fact-icon" />
              <span>Pain-Free Procedures</span>
            </div>
            <div className="fact-pill">
              <ShieldCheck size={16} className="fact-icon" />
              <span>Natural Shade Matching</span>
            </div>
            <div className="fact-pill">
              <Sparkles size={16} className="fact-icon" />
              <span>Stain Resistant Porcelain</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
