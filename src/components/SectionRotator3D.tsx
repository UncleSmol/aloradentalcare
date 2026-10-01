"use client";

import { useState, useEffect, useRef, WheelEvent, TouchEvent } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import TransformationSection from "./TransformationSection";
import ProcessSection from "./ProcessSection";
import TestimonialsSection from "./TestimonialsSection";
import BookingSection from "./BookingSection";
import Footer from "./Footer";

interface SectionRotator3DProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const SECTION_NAMES = [
  "01. Hero",
  "02. About",
  "03. Services",
  "04. Smile 3D",
  "05. Journey",
  "06. Reviews",
  "07. Booking",
];

export default function SectionRotator3D({ activeIndex, setActiveIndex }: SectionRotator3DProps) {
  const isAnimatingRef = useRef(false);
  const touchStartYRef = useRef(0);
  const faceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalSections = 7;

  // Keep ref synchronized with activeIndex for callback handlers
  const activeIndexRef = useRef(activeIndex);
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Helper to change section drawer with smooth cubic-bezier transition lock
  const changeSection = (targetIndex: number, direction: "next" | "prev") => {
    if (targetIndex < 0 || targetIndex >= totalSections) return;
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setActiveIndex(targetIndex);

    // Position scroll for incoming section
    setTimeout(() => {
      const targetFace = faceRefs.current[targetIndex];
      if (targetFace) {
        if (direction === "next") {
          targetFace.scrollTop = 0;
        } else {
          targetFace.scrollTop = Math.max(0, targetFace.scrollHeight - targetFace.clientHeight);
        }
      }
    }, 50);

    // Lock duration matching cubic-bezier animation duration (800ms)
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 800);
  };

  // Wheel Scroll Event Handler
  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (isAnimatingRef.current) return;

    const currIdx = activeIndexRef.current;
    const currentFace = faceRefs.current[currIdx];
    if (!currentFace) return;

    const { scrollTop, scrollHeight, clientHeight } = currentFace;
    const maxScroll = Math.max(0, scrollHeight - clientHeight);
    const isOverflowing = maxScroll > 12;

    const isAtTop = scrollTop <= 10;
    const isAtBottom = scrollTop >= maxScroll - 10;

    if (e.deltaY > 12) {
      // Scroll Down
      if (isOverflowing && !isAtBottom) {
        // Continue internal scrolling inside current section
        return;
      }
      // Reached bottom of section -> Drawer slides up on top!
      if (currIdx < totalSections - 1) {
        changeSection(currIdx + 1, "next");
      }
    } else if (e.deltaY < -12) {
      // Scroll Up
      if (isOverflowing && !isAtTop) {
        // Continue internal upward scrolling inside current section
        return;
      }
      // Reached top of section -> Drawer slides down to reveal previous section!
      if (currIdx > 0) {
        changeSection(currIdx - 1, "prev");
      }
    }
  };

  // Touch Handlers for Mobile Swiping
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (isAnimatingRef.current) return;
    const currIdx = activeIndexRef.current;
    const currentFace = faceRefs.current[currIdx];
    if (!currentFace) return;

    const { scrollTop, scrollHeight, clientHeight } = currentFace;
    const maxScroll = Math.max(0, scrollHeight - clientHeight);
    const isOverflowing = maxScroll > 12;

    const isAtTop = scrollTop <= 10;
    const isAtBottom = scrollTop >= maxScroll - 10;

    const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;

    if (deltaY > 30) {
      if (isOverflowing && !isAtBottom) return;
      if (currIdx < totalSections - 1) {
        changeSection(currIdx + 1, "next");
      }
    } else if (deltaY < -30) {
      if (isOverflowing && !isAtTop) return;
      if (currIdx > 0) {
        changeSection(currIdx - 1, "prev");
      }
    }
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimatingRef.current) return;
      const currIdx = activeIndexRef.current;
      const currentFace = faceRefs.current[currIdx];
      if (!currentFace) return;

      const { scrollTop, scrollHeight, clientHeight } = currentFace;
      const maxScroll = Math.max(0, scrollHeight - clientHeight);
      const isOverflowing = maxScroll > 12;

      const isAtTop = scrollTop <= 10;
      const isAtBottom = scrollTop >= maxScroll - 10;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        if (isOverflowing && !isAtBottom) return;
        if (currIdx < totalSections - 1) {
          changeSection(currIdx + 1, "next");
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (isOverflowing && !isAtTop) return;
        if (currIdx > 0) {
          changeSection(currIdx - 1, "prev");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Compute Drawer Slide-Up Stacking Styles for each section face
  const getFaceStyle = (idx: number) => {
    if (idx < activeIndex) {
      // Section pinned underneath: scaled back slightly & recessed in Z depth
      const diff = activeIndex - idx;
      const scale = Math.max(0.92, 1 - diff * 0.03);
      const translateZ = -diff * 40;
      const filter = `brightness(${Math.max(0.75, 1 - diff * 0.1)})`;

      return {
        transform: `translateY(0%) translateZ(${translateZ}px) scale(${scale})`,
        opacity: 1,
        filter,
        zIndex: 10 + idx,
        pointerEvents: "none" as const,
      };
    } else if (idx === activeIndex) {
      // Active top drawer section: full scale & active
      return {
        transform: `translateY(0%) translateZ(0px) scale(1)`,
        opacity: 1,
        filter: "brightness(1)",
        zIndex: 100 + idx,
        pointerEvents: "auto" as const,
      };
    } else {
      // Incoming drawer section waiting below: ready to slide UP on top
      return {
        transform: `translateY(100%) translateZ(20px) scale(1)`,
        opacity: 1,
        filter: "brightness(1)",
        zIndex: 100 + idx,
        pointerEvents: "none" as const,
      };
    }
  };

  return (
    <div
      className="app-viewport"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Drawer Stacking Stage Container */}
      <div className="stacker-3d-stage">
        {/* Face 0: Hero Section */}
        <div
          ref={(el) => { faceRefs.current[0] = el; }}
          className="block-face"
          style={getFaceStyle(0)}
        >
          <HeroSection />
        </div>

        {/* Face 1: About Section */}
        <div
          ref={(el) => { faceRefs.current[1] = el; }}
          className="block-face face-dark"
          style={getFaceStyle(1)}
        >
          <AboutSection />
        </div>

        {/* Face 2: Services Section */}
        <div
          ref={(el) => { faceRefs.current[2] = el; }}
          className="block-face"
          style={getFaceStyle(2)}
        >
          <ServicesSection onSelectService={() => changeSection(6, "next")} />
        </div>

        {/* Face 3: Smile Transformation Section */}
        <div
          ref={(el) => { faceRefs.current[3] = el; }}
          className="block-face face-dark"
          style={getFaceStyle(3)}
        >
          <TransformationSection />
        </div>

        {/* Face 4: Process Journey Section */}
        <div
          ref={(el) => { faceRefs.current[4] = el; }}
          className="block-face"
          style={getFaceStyle(4)}
        >
          <ProcessSection />
        </div>

        {/* Face 5: Testimonials Section */}
        <div
          ref={(el) => { faceRefs.current[5] = el; }}
          className="block-face face-dark"
          style={getFaceStyle(5)}
        >
          <TestimonialsSection />
        </div>

        {/* Face 6: Booking & Footer Section */}
        <div
          ref={(el) => { faceRefs.current[6] = el; }}
          className="block-face"
          style={getFaceStyle(6)}
        >
          <BookingSection />
          <Footer />
        </div>
      </div>

      {/* Floating 3D Side Dots Controls */}
      <div className="rotator-nav-dots">
        {SECTION_NAMES.map((name, idx) => (
          <button
            key={name}
            className={`dot-btn ${activeIndex === idx ? "active" : ""}`}
            onClick={() => changeSection(idx, idx > activeIndex ? "next" : "prev")}
            aria-label={name}
          >
            <span className="dot-tooltip">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
