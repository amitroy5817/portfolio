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
    // {
    //   icon: <Globe className="size-6" />,
    //   href: "https://amitroy.tech",
    //   text: "Portfolio",
    // },
    {
      icon: <Mail className="size-6" />,
      href: "mailto:hello@amitroy.tech",
      text: "Mail",
    },
    {
      icon: <FileDown className="size-6" />,
      href:
        "https://drive.usercontent.google.com/download?id=1ZDD3MViX-_jSpkMOyD-m4f3YptNQDPCJ&export=download",
      text: "CV",
    },
  ];

  return (
    <div className="text-white/90 fixed bottom-8 right-8 z-20 mix-blend-difference">
      <div className="px-4 py-2 flex items-center space-x-3">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/50 transition-colors duration-300"
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
