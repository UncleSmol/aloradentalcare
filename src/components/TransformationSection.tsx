"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

export default function TransformationSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section className="section-padding transformation-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-subtitle-badge">
            <Sparkles size={14} />
            <span>REAL PATIENT RESULTS</span>
          </div>
          <h2 className="section-title">
            Witness the Power of <br />
            <span className="gold-text-accent">3D Smile Transformation</span>
          </h2>
          <p className="section-description">
            Drag the interactive slider below to explore the dramatic difference handcrafted porcelain veneers and 3D alignment can make.
          </p>
        </div>

        <div className="transformation-interactive-wrapper">
          <div
            ref={containerRef}
            className="slider-container"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER Layer (Full Width) */}
            <div className="after-layer">
              <div className="smile-demo-after">
                <div className="smile-graphic-after">
                  <div className="smile-label-badge after-label">AFTER ALORA CARE</div>
                  <div className="teeth-row">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="tooth-item after-tooth" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BEFORE Layer (Clipped Width) */}
            <div
              className="before-layer"
              style={{ width: `${sliderPosition}%`, overflow: "hidden" }}
            >
              <div className="smile-demo-before" style={{ width: containerRef.current?.clientWidth || "100%" }}>
                <div className="smile-graphic-before">
                  <div className="smile-label-badge before-label">BEFORE TREATMENT</div>
                  <div className="teeth-row">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="tooth-item before-tooth" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Handle Divider */}
            <div className="slider-handle" style={{ left: `${sliderPosition}%` }}>
              <div className="slider-handle-line" />
              <div className="slider-handle-button">
                &harr;
              </div>
            </div>
          </div>

          <div className="transformation-facts">
            <div className="fact-pill">
              <CheckCircle2 size={16} className="fact-icon" />
              <span>Painless 1-Visit Procedure</span>
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
