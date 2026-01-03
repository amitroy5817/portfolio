"use client";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#ec4e39] origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}

