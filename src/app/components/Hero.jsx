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
    <main className={styles.main} ref={target}>
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
            className="text-[2em] sm:text-[4em] md:text-[6em] lg:text-[10em] font-bold text-center "
          >
          </h1>
          <h1
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-[3em] sm:text-[5em] md:text-[8em] lg:text-[15em] font-bold text-center"
          >
            <span className="absolute top-0 left-0 outlined-text pointer-events-none">FrontEnd Developer</span>
            Amit Roy
          </h1>
        </motion.div>
      )}

      {/* Static Text */}
      <div className="flex flex-col md:hidden">
       <p className="text-xl sm:text-sm md:text-lg tracking-widest uppercase text-gray-600 text-center">
          Frontend Developer
        </p>
        <h1 className="text-[7em] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-black text-center leading-none ">
          Amit <br />Roy
        </h1>
        <a href="#footer" className="border-1 black  px-8 py-2 rounded-full text-center">Available Now</a>
      </div>
      <h1 className="hidden md:block absolute text-[8em] sm:text-[5em] md:text-[8em] lg:text-[15em] font-bold text-center outlined-text pointer-events-none">
        Amit Roy
      </h1>

      <div className="absolute bottom-50 w-full flex items-center justify-center space-x-2">
        <span className="h-px w-10 bg-black/50"></span>
        <p className="text-lg text-black/80">Based in West Bengal, India</p>
        <span className="h-px w-10 bg-black/50"></span>
      </div>
    </main>

  );
} 