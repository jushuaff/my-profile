"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;

    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        // Stop observing before animating so scrolling cannot restart the reveal.
        observer.unobserve(entry.target);
        if (motion.matches || document.documentElement.hasAttribute("data-reduce-motion") || entry.target.matches(":focus-within")) continue;

        const animation = entry.target.animate(
          [{ opacity: 0, transform: "translateY(16px)" },
            { opacity: 1, transform: "translateY(0)" }],
          { duration: 500, easing: "ease-out" },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: 0 });

    document.querySelectorAll(".portfolio-effects .effect-reveal").forEach((element) => {
      // Leave initially visible content alone, including restored scroll positions.
      if (element.getBoundingClientRect().top >= window.innerHeight) observer.observe(element);
    });

    const cancelAnimations = () => {
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const onMotionChange = () => {
      if (motion.matches) {
        observer.disconnect();
        cancelAnimations();
      }
    };
    motion.addEventListener("change", onMotionChange);
    const preferences = new MutationObserver(() => {
      if (document.documentElement.hasAttribute("data-reduce-motion")) cancelAnimations();
    });
    preferences.observe(document.documentElement, { attributes: true, attributeFilter: ["data-reduce-motion"] });
    document.addEventListener("focusin", cancelAnimations);
    return () => {
      observer.disconnect();
      preferences.disconnect();
      cancelAnimations();
      motion.removeEventListener("change", onMotionChange);
      document.removeEventListener("focusin", cancelAnimations);
    };
  }, []);

  return null;
}
