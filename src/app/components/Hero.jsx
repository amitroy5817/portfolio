"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "react-haiku";
import styles from "./Hero.module.css";

export default function CursorHover() {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const { target, x, y } = useMousePosition();
  const size = (isHovered && !isScrolled && !isTouchDevice) ? 600 : 40;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Check if device is touch-enabled
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main ref={target} data-hero-section className={`${styles.main} bg-[url('/bg-shadow.jpg')] dark:bg-[url('/bg-shadow-dark.jpg')] bg-cover bg-center bg-fixed`}>
      {!isTouchDevice && (
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <h1
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-[3em] sm:text-[5em] md:text-[8em] lg:text-[15em] font-bold text-center"
          >
            <span className="absolute top-0 left-0 outlined-text pointer-events-none">FullStack Developer</span>
            <span className="text-black dark:text-white">Amit Roy</span>
          </h1>
        </motion.div>
      )}

      {/* Static Text */}
      <div className="flex flex-col md:hidden">
        <p className="text-xl sm:text-sm md:text-lg tracking-widest uppercase text-gray-600 dark:text-gray-400 text-center">
          FullStack Developer
        </p>
        <h1 className="text-[7em] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-black dark:text-white text-center leading-none ">
          Amit <br />Roy
        </h1>
        <a href="#projects" className="mt-6 border-1 black dark:border-white px-8 py-2 rounded-full text-center text-black dark:text-white">View My Works</a>
        <a href="#footer" className="mt-6 border-1 black px-8 py-2 rounded-full text-center bg-[#ec4e39] text-white">Let's Work Together</a>
      </div>
      <h1 className="
        hidden md:block absolute
        text-[5em] sm:text-[5em] md:text-[8em] lg:text-[15em]
        font-bold text-center pointer-events-none
        text-transparent
        [-webkit-text-stroke:2px_black]
        dark:[-webkit-text-stroke:2px_white]
      ">
        Amit Roy
      </h1>


      <div className="absolute bottom-50 w-full items-center justify-center space-x-2 hidden md:flex">
        <span className="h-px w-10 bg-black/50 dark:bg-white/50"></span>
        <p className="text-lg text-black/80 dark:text-white/80">Based in West Bengal, India</p>
        <span className="h-px w-10 bg-black/50 dark:bg-white/50"></span>
      </div>
    </main>
  );
} 