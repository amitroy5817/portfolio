"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"

// Enhanced featured works data with more details
const featuredWorks = [
  {
    id: 1,
    title: "BiswakarmaBrothersBilliards",
    subtitle: "Sports Equipment Store",
    date: "JANUARY 2025",
    categories: ["UX/UI", "WEB DEVELOPMENT", "NEXT.JS", "SUPABASE", "TAILWIND CSS"],
    "description": "Custom billiards equipment store with dynamic product listings, admin dashboard, and responsive design optimized for performance and SEO.",
    "imageUrl": "/biswakarmabrothersbilliards.mp4",
    "color": "#4A90E2",
    "links": {
      "live": "https://biswakarmabrothersbilliards.com"
    }
  },
  {
    "id": 2,
    "title": "RoyFinds",
    "subtitle": "Mutual Fund Distribution Platform",
    "date": "FEBRUARY 2025",
    "categories": ["REACT.JS", "FIREBASE", "REST API", "FINTECH"],
    "description": "A mutual fund tracking platform for 10+ clients with real-time NAV, portfolio tracking, profit/loss tools, SIP calculator, and secure role-based auth.",
    "imageUrl": "/royfinds.mp4",
    "color": "#27AE60",
    "links": {
      "live": "https://royfinds.in"
    }
  },  
  {
    "id": 3,
    "title": "Notboook",
    "subtitle": "Advanced Note-taking Web App",
    "date": "JANUARY 2025",
    "categories": ["REACT.JS", "FIREBASE", "MARKDOWN", "REAL-TIME DB"],
    "description": "A responsive note-taking application with markdown support, note sharing via links or QR, offline download, and Firebase-powered auth and database.",
    "imageUrl": "/notboook.mp4",
    "color": "#F39C12",
    "links": {
      live: "https://notboook.netlify.app/",
      github: "https://github.com/amitroy-thedev/notboook",
    }
  },
]

export default function Projects() {
  const targetRef = useRef(null)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [activeProject, setActiveProject] = useState(0)

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 100,
    mass: 3,
  })

  // Scroll based animations
  const containerScale = useTransform(smoothProgress, [0, 0.2], [0.95, 1])
  const containerOpacity = useTransform(smoothProgress, [0, 0.2], [0.5, 1])
  const containerY = useTransform(smoothProgress, [0, 0.2], [50, 0])
  const titleOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const titleY = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [20, 0, 0, -20])

  const width = useTransform(smoothProgress, [0, 0.14], ["90%", "100%"]);
  const borderRadius = useTransform(smoothProgress, [0, 0.5], ["2rem", "0rem"]);
  const translateY = useTransform(smoothProgress, [0, 0.14], ["0%", "-5%"]);
  // Handle project change on scroll
  const projectIndex = useTransform(smoothProgress, (value) => {
    const index = Math.min(Math.floor(value * featuredWorks.length * 1.5), featuredWorks.length - 1)
    if (index !== activeProject) {
      setActiveProject(index)
    }
    return index
  })

  return (
    <motion.div
      className="bg-[#080807] text-white min-h-screen overflow-hidden relative mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width, borderRadius, translateY }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80 z-0"></div>

      {/* Header */}
      <motion.div
        className="relative z-10 pt-16 md:pt-24 px-6 md:px-12 max-w-7xl mx-auto"
        style={{ opacity: titleOpacity, y: titleY }}
      >
        <div className="flex flex-col items-center">
          <span className="text-neutral-500 text-sm font-medium tracking-wider mb-2">FREELANCE & PERSONAL</span>
          <h2 className="relative text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Projects <sup className="text-gray-500 text-xl absolute top-0 -right-8">({featuredWorks.length})</sup>
          </h2>
        </div>
      </motion.div>

      {/* Projects section */}
      <section ref={targetRef} className="relative z-10 min-h-screen my-12 md:my-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          style={{
            scale: containerScale,
            opacity: containerOpacity,
            y: containerY,
          }}
          className="relative"
        >
          {/* Project cards */}
          <div className="space-y-24 md:space-y-32">
            {featuredWorks.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isActive={index === activeProject}
                isHovered={hoveredProject === index}
                onHover={() => setHoveredProject(index)}
                onLeave={() => setHoveredProject(null)}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Project counter */}
      {/* <div className="fixed bottom-8 right-8 z-20">
        <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 flex items-center space-x-2">
          <span className="text-white font-medium">{String(activeProject + 1).padStart(2, "0")}</span>
          <span className="text-gray-500">/</span>
          <span className="text-gray-500">{String(featuredWorks.length).padStart(2, "0")}</span>
        </div>
      </div> */}
    </motion.div>
  )
}


const ProjectCard = ({ project, index, isActive, isHovered, onHover, onLeave }) => {
  // Generate a dynamic gradient based on the project's color
  const gradientStyle = {
    background: `linear-gradient(135deg, ${project.color}22 0%, transparent 100%)`,
    borderColor: `${project.color}33`,
  }

  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden transition-all duration-700 ${
        isActive ? "opacity-100 scale-100" : "opacity-50 scale-95"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isActive ? 1 : 0.5, y: 0, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-8 border border-white/10 rounded-xl"
        style={gradientStyle}
      >
        {/* Project details */}
        <div className="flex flex-col justify-between order-2 md:order-1">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/10 text-white">{project.date}</span>
              <span className="text-neutral-500">•</span>
              <span className="text-sm text-neutral-400">{`0${index + 1}`}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-white/90">
              {project.title}
            </h3>

            <p className="text-lg text-neutral-300 mb-3">{project.subtitle}</p>

            <p className="text-neutral-400 mb-6 line-clamp-3 md:line-clamp-none">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.categories.map((category, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors group"
            >
              <span>View Project</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors group"
            >
              <span>Code</span>
              <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
            </a>
            )}
          </div>
        </div>

        {/* Project image */}
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-1 md:order-2">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60 z-10"></div>

          <motion.div
            className="absolute inset-0 z-0"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {project.imageUrl.endsWith('.mp4') ? (
              <video
                src={project.imageUrl}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                ref={(el) => {
                  if (el) {
                    if (isHovered || isActive) {
                      el.play();
                    } else {
                      el.pause();
                      el.currentTime = 0;
                    }
                  }
                }}
              />
            ) : (
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            )}
          </motion.div>

          <motion.div
            className="absolute bottom-4 right-4 z-20 bg-white/10 backdrop-blur-md rounded-full p-3"
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 45 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight className="w-5 h-5 text-white" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
