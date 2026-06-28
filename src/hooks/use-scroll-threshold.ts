"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook that tracks whether the window has been scrolled past a certain threshold.
 * @param threshold The pixel scroll depth to trigger the true state (default: 20)
 * @returns A boolean indicating whether the window has been scrolled past the threshold
 */
export const useScrollThreshold = (threshold: number = 20): boolean => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Run once on mount to handle initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};
