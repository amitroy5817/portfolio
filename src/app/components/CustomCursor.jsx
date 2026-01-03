"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    const checkTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };

    setIsTouchDevice(checkTouchDevice());

    // Don't add cursor if it's a touch device
    if (checkTouchDevice()) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if mouse is in hero section
      const heroSection = document.querySelector('[data-hero-section]');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isInHero = 
          e.clientY >= rect.top && 
          e.clientY <= rect.bottom &&
          e.clientX >= rect.left &&
          e.clientX <= rect.right;
        setIsInHeroSection(isInHero);
      }
    };

    // Check if element is interactive
    const checkIfInteractive = (element) => {
      if (!element) return false;
      
      const tagName = element.tagName;
      const computedStyle = window.getComputedStyle(element);
      
      return (
        (
          tagName === 'A' ||
          tagName === 'BUTTON' ||
          element.closest('a') !== null ||
          element.closest('button') !== null ||
          element.closest('[role="button"]') !== null ||
          computedStyle.cursor === 'pointer' ||
          element.onclick !== null ||
          element.hasAttribute('onclick')
        ) &&
        !element.classList.contains('social-link') &&
        !element.closest('.social-link')
      );      
    };

    // Check hover state on mouse move
    const handleMouseMove = (e) => {
      const target = e.target;
      setIsHovering(checkIfInteractive(target));
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mousemove", handleMouseMove, true);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mousemove", handleMouseMove, true);
    };
  }, []);

  // Don't render on touch devices or when in hero section
  if (isTouchDevice || isInHeroSection) return null;

  const cursorSize = isHovering ? 60 : 20;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - cursorSize / 2,
          y: mousePosition.y - cursorSize / 2,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.3,
        }}
      >
        <motion.div
          className="rounded-full bg-[#ec4e39]"
          animate={{
            width: cursorSize,
            height: cursorSize,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
            mass: 0.5,
          }}
          style={{
            boxShadow: isHovering 
              ? '0 0 30px rgba(236, 78, 57, 0.8), 0 0 60px rgba(236, 78, 57, 0.5), 0 0 90px rgba(236, 78, 57, 0.3)' 
              : '0 0 15px rgba(236, 78, 57, 0.5), 0 0 30px rgba(236, 78, 57, 0.3)',
          }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - (cursorSize * 1.5) / 2,
          y: mousePosition.y - (cursorSize * 1.5) / 2,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.4,
        }}
      >
        <motion.div
          className="rounded-full border-2 border-[#ec4e39]"
          animate={{
            width: cursorSize * 1.5,
            height: cursorSize * 1.5,
            opacity: isHovering ? 0.5 : 0.2,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.5,
          }}
        />
      </motion.div>
    </>
  );
}
