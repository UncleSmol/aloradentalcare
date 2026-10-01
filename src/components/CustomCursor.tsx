"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, input, select, textarea, .service-card, .process-card, .testimonial-card, .slider-container, .service-detail-card"
      );

      if (interactive) {
        setIsHovered(true);
        if (target.closest(".slider-container")) {
          setCursorText("DRAG");
        } else if (target.closest(".service-card") || target.closest(".service-detail-card")) {
          setCursorText("VIEW");
        } else if (target.closest("button") || target.closest("a")) {
          setCursorText("");
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />
      <motion.div
        className={`custom-cursor-ring ${isHovered ? "hovered" : ""}`}
        animate={{
          x: mousePosition.x - (isHovered ? 28 : 16),
          y: mousePosition.y - (isHovered ? 28 : 16),
          scale: isHovered ? 1.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.2 }}
      >
        {cursorText && <span className="cursor-text">{cursorText}</span>}
      </motion.div>
    </>
  );
}
