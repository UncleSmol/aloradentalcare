"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

export interface MediaItem {
  id: string;
  type?: "image";
  src: string;
  title: string;
  duration?: number; // image display duration in ms (default: 12000ms)
}

export const initialHeroMedia: MediaItem[] = [
  {
    id: "hero-img-1",
    type: "image",
    src: "/hero-bg.jpg",
    title: "Aesthetic Dental Arch",
    duration: 12000,
  },
  {
    id: "hero-img-2",
    type: "image",
    src: "/hero-gallery-2.jpg",
    title: "Executive Minimalist Practice",
    duration: 12000,
  },
];

interface HeroMediaGalleryProps {
  mediaQueue?: MediaItem[];
  /** Pause autoplay while the pointer is over the gallery. Off by default — this sits behind hero copy. */
  pauseOnHover?: boolean;
}

// 4x4 Grid Matrix setup (16 blocks)
const GRID_ROWS = 4;
const GRID_COLS = 4;
const FLIP_DURATION = 320; // ms — single tile flip
const FLIP_STAGGER = 25; // ms — per row+col step
const TRANSITION_TOTAL =
  FLIP_DURATION + (GRID_ROWS - 1 + (GRID_COLS - 1)) * FLIP_STAGGER;

// How long to wait for the upcoming image to finish loading before giving up and flipping anyway.
const MAX_LOAD_WAIT_MS = 3000;
const LOAD_POLL_INTERVAL_MS = 100;

export default function HeroMediaGallery({
  mediaQueue = initialHeroMedia,
  pauseOnHover = false,
}: HeroMediaGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [stepCount, setStepCount] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loadWaitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Tracks which slide indices have a decoded image ready, via the hidden preloader below.
  // A ref (not state) so the polling loop in goTo always reads the live value, not a stale closure.
  const loadedIndicesRef = useRef<Set<number>>(new Set());
  const prefersReducedMotion = useReducedMotion();

  const currentItem = mediaQueue[currentIndex] || mediaQueue[0];
  const activeNextItem = nextIndex !== null ? mediaQueue[nextIndex] : null;
  const slideDuration = currentItem.duration || 12000;

  const effectivelyPlaying = isPlaying && isPageVisible && !(pauseOnHover && isHovered);

  // Stop scheduling/animating while the tab is backgrounded.
  useEffect(() => {
    const handleVisibility = () => setIsPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Guard against dangling timers if the component unmounts mid-transition/mid-wait.
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
      if (loadWaitTimeoutRef.current) clearTimeout(loadWaitTimeoutRef.current);
    };
  }, []);

  const startTransition = useCallback(
    (targetIdx: number) => {
      if (isTransitioning || targetIdx === currentIndex || mediaQueue.length <= 1) return;

      setStepCount((prev) => prev + 1);

      if (prefersReducedMotion) {
        setCurrentIndex(targetIdx);
        return;
      }

      setNextIndex(targetIdx);
      setIsTransitioning(true);

      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = setTimeout(() => {
        setCurrentIndex(targetIdx);
        setNextIndex(null);
        setIsTransitioning(false);
      }, TRANSITION_TOTAL);
    },
    [isTransitioning, currentIndex, mediaQueue.length, prefersReducedMotion]
  );

  // Only ever flip once the target image is actually decoded and ready — this is what
  // guarantees the background behind the tiles is never exposed/blank mid-flip.
  const goTo = useCallback(
    (targetIdx: number) => {
      if (isTransitioning || targetIdx === currentIndex || mediaQueue.length <= 1) return;

      if (loadedIndicesRef.current.has(targetIdx)) {
        startTransition(targetIdx);
        return;
      }

      const startedAt = Date.now();
      const check = () => {
        const ready = loadedIndicesRef.current.has(targetIdx);
        const timedOut = Date.now() - startedAt > MAX_LOAD_WAIT_MS;
        if (ready || timedOut) {
          startTransition(targetIdx);
        } else {
          loadWaitTimeoutRef.current = setTimeout(check, LOAD_POLL_INTERVAL_MS);
        }
      };
      check();
    },
    [isTransitioning, currentIndex, mediaQueue.length, startTransition]
  );

  const handleNext = useCallback(() => {
    goTo((currentIndex + 1) % mediaQueue.length);
  }, [currentIndex, mediaQueue.length, goTo]);

  const handlePrev = useCallback(() => {
    goTo((currentIndex - 1 + mediaQueue.length) % mediaQueue.length);
  }, [currentIndex, mediaQueue.length, goTo]);

  // Autoplay loop
  useEffect(() => {
    if (!effectivelyPlaying || isTransitioning || mediaQueue.length <= 1) return;
    const timer = setTimeout(handleNext, slideDuration);
    return () => clearTimeout(timer);
  }, [currentIndex, effectivelyPlaying, isTransitioning, slideDuration, mediaQueue.length, handleNext]);

  // Touch swipe support (left = next, right = previous)
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  const tiles = Array.from({ length: GRID_ROWS * GRID_COLS });
  const activeIdx = isTransitioning && nextIndex !== null ? nextIndex : currentIndex;
  const displayedItem = isTransitioning && activeNextItem ? activeNextItem : currentItem;
  const isExpanding = stepCount % 2 === 0;

  return (
    <div
      className="hero-bg-image-wrapper"
      {...swipeHandlers}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Practice image gallery"
    >
      {/* Hidden preloader — same `sizes` as the visible image so the browser resolves the
          same responsive srcset candidate, meaning by the time we flip to it, it's a cache hit. */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", opacity: 0, pointerEvents: "none" }}
      >
        {mediaQueue.map((item, idx) => (
          <div key={item.id} style={{ position: "relative", width: 1, height: 1 }}>
            <Image
              src={item.src}
              alt=""
              fill
              sizes="100vw"
              onLoad={() => {
                loadedIndicesRef.current.add(idx);
              }}
            />
          </div>
        ))}
      </div>

      {/* Underlying Base Image Layer */}
      <div className="hero-media-layer">
        <motion.div
          key={`${displayedItem.id}-${stepCount}`}
          className="hero-media-layer-inner"
          initial={{ scale: isExpanding ? 1.0 : 1.08 }}
          animate={{
            scale: prefersReducedMotion || !effectivelyPlaying
              ? (isExpanding ? 1.0 : 1.08)
              : (isExpanding ? 1.08 : 1.0),
          }}
          transition={{ duration: slideDuration / 1000, ease: "linear" }}
        >
          <Image
            src={displayedItem.src}
            alt={displayedItem.title}
            fill
            priority={currentIndex === 0}
            sizes="100vw"
            className="hero-bg-img"
          />
        </motion.div>
      </div>

      {/* 3D Grid Block Flip Overlay Curtain */}
      {isTransitioning && !prefersReducedMotion && (
        <div className="grid-flip-container" aria-hidden="true">
          {tiles.map((_, i) => {
            const row = Math.floor(i / GRID_COLS);
            const col = i % GRID_COLS;
            const bgPosX = col * (100 / (GRID_COLS - 1));
            const bgPosY = row * (100 / (GRID_ROWS - 1));
            const delay = (row + col) * (FLIP_STAGGER / 1000);

            return (
              <motion.div
                key={i}
                className="grid-flip-tile"
                style={{
                  left: `${(col / GRID_COLS) * 100}%`,
                  top: `${(row / GRID_ROWS) * 100}%`,
                  width: `${100 / GRID_COLS}%`,
                  height: `${100 / GRID_ROWS}%`,
                  backgroundImage: `url("${currentItem.src}")`,
                  backgroundSize: `${GRID_COLS * 100}% ${GRID_ROWS * 100}%`,
                  backgroundPosition: `${bgPosX}% ${bgPosY}%`,
                }}
                initial={{ rotateY: 0, rotateX: 0, scale: 1, opacity: 1 }}
                animate={{ rotateY: 180, scale: 0.75, opacity: 0 }}
                transition={{ duration: FLIP_DURATION / 1000, delay, ease: [0.65, 0, 0.35, 1] }}
              />
            );
          })}
        </div>
      )}

      {/* Dark Gradient Overlay for Crisp Text Contrast */}
      <div className="hero-bg-overlay" />
    </div>
  );
}