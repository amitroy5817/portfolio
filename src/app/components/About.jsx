"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const SketchedUnderline = () => (
  <motion.svg
    viewBox="0 0 200 25"
    className="absolute bottom-0 left-0 w-full h-4 text-[#ec4e39] pointer-events-none overflow-visible"
    preserveAspectRatio="none"
  >
    {/* Main thick stroke */}
    <motion.path
      d="M2,18 C40,12 120,8 198,16"
      fill="transparent"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.8 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: [0.45, 0.05, 0.55, 0.95] }}
    />
    {/* Quick secondary scribble */}
    <motion.path
      d="M15,22 C60,16 140,14 190,20"
      fill="transparent"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.5 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    />
    {/* Final light scuff mark */}
    <motion.path
      d="M50,20 C80,18 120,18 150,21"
      fill="transparent"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.3 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
    />
  </motion.svg>
);

export default function About() {
  const text = "Hello! I'm Amit Roy, An Engineer, Learner and a Freelancer. My approach combines clean code with thoughtful design to create solutions that not only look great but also perform exceptionally well.";
  const words = text.split(" ");
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 1", "start 0"]
  });

  return (
    <div 
      ref={container}
      className="bg-[#e9e8e8] dark:bg-[#252525] md:h-screen mb-20 w-full flex flex-wrap text-4xl lg:text-6xl leading-tight text-left md:text-center px-4 py-8 md:py-16"
    >
      <p className="max-w-6xl mx-auto text-black dark:text-white">
      {words.map((word, i) => {
        const start = i / words.length;
        const end   = start + 1/words.length;
        const wordWithoutPunctuation = word.replace(/[.,!?;:]/g, '');
        const shouldUnderline = ['Engineer', 'Learner', 'Freelancer'].includes(wordWithoutPunctuation);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]} showUnderline={shouldUnderline}>
            {word}
          </Word>
        );
      })}
      </p>
    </div>
  );
}


const Word = ({ children, progress, range, showUnderline = false }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative inline-block m-1 md:m-2 text-black dark:text-white">
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
      
      {/* Sketched underline for specific words */}
      {showUnderline && <SketchedUnderline />}
    </span>
  );
};
