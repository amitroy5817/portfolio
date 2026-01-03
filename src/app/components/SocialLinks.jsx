"use client";
import { Github, Linkedin, Globe, Mail, FileDown } from "lucide-react";
import { useState } from "react";
import { useMousePosition } from "react-haiku";

export default function SocialLinks() {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredText, setHoveredText] = useState("");

  const socialLinks = [
    {
      icon: <Github className="size-6" />,
      href: "https://github.com/amitroy-thedev",
      text: "Github",
    },
    {
      icon: <Linkedin className="size-6" />,
      href: "https://linkedin.com/in/amitroy-thedev",
      text: "LinkedIn",
    },
    {
      icon: (
        <svg 
          viewBox="0 0 16 16" 
          className="size-5" 
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z" strokeWidth="1" />
        </svg>
      ),
      href: "https://x.com/amitroy_thedev",
      text: "X (Twitter)",
    },
    {
      icon: <Mail className="size-6" />,
      href: "mailto:hello@amitroy.tech",
      text: "Mail",
    },
    {
      icon: <FileDown className="size-6" />,
      href:
        "https://drive.google.com/file/d/1NNrVXNYnFDxTiC22ZL8VzBFajaV4vdSz/view?usp=sharing",
      text: "CV",
    },
  ];

  return (
    <div className="text-white/90 dark:text-white/90 fixed bottom-8 right-8 z-20 mix-blend-difference">
      <div className="px-4 py-2 flex items-center space-x-3">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link hover:text-white/50 dark:hover:text-white/70 transition-colors duration-300"
            onMouseEnter={() => {
              setIsHovering(true);
              setHoveredText(link.text);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              setHoveredText("");
            }}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {isHovering && hoveredText && (
        <div
          className="fixed pointer-events-none z-50 transition-all duration-100 ease-in"
          style={{
            left: x - 30,
            top: y - 50,
          }}
        >
          <div className="bg-red-500 text-white px-4 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105 flex items-center gap-2 whitespace-nowrap">
            {hoveredText}
          </div>
        </div>
      )}
    </div>
  );
}
