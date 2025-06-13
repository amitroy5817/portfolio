"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

export default function About() {
  const text = "My approach combines clean code with thoughtful design to create solutions that not only look great but also perform exceptionally well.";
  const words = text.split(" ");
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 1", "start 0"]
  });

  return (
    <div 
      ref={container}
      className="bg-[#e9e8e8] md:h-screen mb-20 w-full flex flex-wrap text-4xl lg:text-6xl leading-tight text-left md:text-center px-4 py-8 md:py-16"
    >
      <p className="max-w-6xl mx-auto">
      {words.map((word, i) => {
        const start = i / words.length;
        const end   = start + 1/words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
      </p>
    </div>
  );
}


const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative inline-block m-1 md:m-2">
      {/* shadow copy */}
      <motion.span 
        className="absolute inset-0 opacity-20"
      >
        {children}
      </motion.span>

      {/* actually-fading-in text */}
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};
