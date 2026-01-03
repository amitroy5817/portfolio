"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"

// Enhanced featured works data with more details
const featuredWorks = [
  {
    id: 1,
    title: "Vinayak Food Company",
    subtitle: "Tea Manufacturing & Wholesale Website",
    work: "Freelance",
    date: "SEPTEMBER 2025",
    categories: ["NEXT.JS", "TAILWIND CSS", "CLOUDFLARE", "CLOUDINARY", "ADMIN DASHBOARD"],
    description:
      "A professional business website for a tea manufacturing and wholesale company, focused on brand presence, product showcase, fast load times, and mobile-first responsive design.",
    imageUrl: "/vinayakfoodcompany.mp4",
    color: "#FFEBAD",
    links: {
      live: "https://vinayakfoodcompany.com",
    },
  },
  {
    id: 2,
    title: "Biswakarma Brothers Billiards",
    subtitle: "Sports Equipment Store",
    work: "Freelance",
    date: "JANUARY 2025",
    categories: ["NEXT.JS", "TAILWIND CSS", "SUPABASE", "UX/UI", "WEB DEVELOPMENT"],
    description:
      "Custom billiards equipment store with dynamic product listings, admin dashboard, and responsive design optimized for performance and SEO.",
    imageUrl: "/biswakarmabrothersbilliards.mp4",
    color: "#4A90E2",
    links: {
      live: "https://biswakarmabrothersbilliards.com",
    },
  },
  {
    id: 3,
    title: "RoyFinds",
    subtitle: "Mutual Fund Distribution Platform",
    work: "Personal",
    date: "OCTOBER 2024",
    categories: ["REACT.JS", "FIREBASE", "REST API", "FINTECH"],
    description:
      "A mutual fund tracking platform with real-time NAV, portfolio tracking, profit/loss tools, SIP calculator, and secure role-based auth.",
    imageUrl: "/royfinds.mp4",
    color: "#27AE60",
    links: {
      live: "https://royfinds.in",
    },
  },
  {
    id: 4,
    title: "Notboook",
    subtitle: "Advanced Note-taking Web App",
    work: "Personal",
    date: "APRIL 2024",
    categories: ["REACT.JS", "FIREBASE", "AUTH", "PERSONAL PROJECT"],
    description:
      "A responsive note-taking application with markdown support, note sharing via links or QR, offline download, and Firebase-powered auth and database.",
    imageUrl: "/notboook.mp4",
    color: "#F39C12",
    links: {
      live: "https://notboook.netlify.app/",
      github: "https://github.com/amitroy-thedev/notboook",
    },
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    subtitle: "Developer Portfolio",
    work: "Personal",
    date: "JUNE 2025",
    categories: ["NEXT.JS", "TAILWIND CSS", "FRAMER MOTION", "EMAILJS", "PORTFOLIO"],
    description:
      "A modern, responsive portfolio website to showcase my projects, skills, and experience. Built with Next.js and Tailwind CSS, featuring smooth animations and a clean design.",
    imageUrl: "/portfolio.mp4",
    color: "#6366F1",
    links: {
      live: "https://amitroy.tech/",
    },
  },
];


export default function Projects() {
  const targetRef = useRef(null)

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
  const containerY = useTransform(smoothProgress, [0, 0.2], [50, 0])
  const titleOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const titleY = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [20, 0, 0, -20])

  const width = useTransform(smoothProgress, [0, 0.14], ["90%", "100%"]);
  const borderRadius = useTransform(smoothProgress, [0, 0.5], ["2rem", "0rem"]);
  const translateY = useTransform(smoothProgress, [0, 0.14], ["0%", "-5%"]);

  return (
    <motion.div
      className="bg-[#252525] dark:bg-gray-950 text-white min-h-screen overflow-hidden relative mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width, borderRadius, translateY }}
      id="projects"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 opacity-80 z-0"></div>

      {/* Header */}
      <motion.div
        className="relative z-10 pt-12 md:pt-24 px-4 md:px-12 max-w-7xl mx-auto"
        style={{ opacity: titleOpacity, y: titleY }}
      >
        <div className="flex flex-col items-center">
          <span className="text-neutral-500 text-xs md:text-sm font-medium tracking-wider mb-2">FREELANCE & PERSONAL</span>
          <h2 className="relative text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Projects <sup className="text-gray-500 text-base md:text-xl absolute top-0 -right-6 md:-right-8">({featuredWorks.length})</sup>
          </h2>
        </div>
      </motion.div>

      {/* Projects section */}
      <section ref={targetRef} className="relative z-10 min-h-screen my-8 md:my-24 px-4 md:px-12 max-w-7xl mx-auto">
        <motion.div
          style={{
            scale: containerScale,
            y: containerY,
          }}
          className="relative"
        >
          {/* Project cards */}
          <div className="space-y-12 md:space-y-32">
            {featuredWorks.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}


const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)
  const videoRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  
  // Check if card is in viewport
  const isInView = useInView(cardRef, { 
    once: false, 
    amount: 0.3,
    margin: "-100px"
  })

  // Generate a dynamic gradient based on the project's color
  const gradientStyle = {
    background: `linear-gradient(135deg, ${project.color}22 0%, transparent 100%)`,
    borderColor: `${project.color}33`,
  }

  // Control video playback based on viewport and hover
  const shouldPlay = isInView || isHovered
  
  // Handle video play/pause with useEffect
  useEffect(() => {
    const video = videoRef.current
    if (!video || !project.imageUrl.endsWith('.mp4')) return

    if (shouldPlay) {
      video.play().catch(() => {
        // Silently handle play errors (e.g., autoplay restrictions)
      })
    } else {
      video.pause()
      if (!isInView) {
        video.currentTime = 0
      }
    }
  }, [shouldPlay, isInView, project.imageUrl])

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-xl overflow-hidden transition-all duration-700"
      initial={{y: 50 }}
      animate={{y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 p-4 md:p-8 border border-white/10 rounded-lg md:rounded-xl"
        style={gradientStyle}
      >
        {/* Project details */}
        <div className="flex flex-col justify-between order-2 md:order-1 gap-4 md:gap-0">
          <div>
            <div className="flex items-center flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-2">
              <span className="text-xs md:text-sm text-neutral-400">{`0${index + 1}`}</span>
              <span className="text-neutral-500 hidden md:inline">•</span>
              <span className="text-xs md:text-sm font-medium px-2 md:px-3 py-1 rounded-full bg-white/10 text-white">{project.work}</span>
              <span className="text-neutral-500 hidden md:inline">•</span>
              <span className="text-xs md:text-sm text-neutral-400">{project.date}</span>
            </div>

            <h3 className="text-xl md:text-3xl font-bold mb-2 text-white group-hover:text-white/90 leading-tight">
              {project.title}
            </h3>

            <p className="text-base md:text-lg text-neutral-300 mb-3">{project.subtitle}</p>

            <p className="text-sm md:text-base text-neutral-400 mb-4 md:mb-6 line-clamp-3 md:line-clamp-none leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-6 md:mb-8">
              {project.categories.map((category, i) => (
                <span
                  key={i}
                  className="text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href={project?.links?.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start space-x-2 text-white hover:text-white/80 transition-all group px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 active:scale-95"
            >
              <span className="text-sm md:text-base">View Live Website</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {project?.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start space-x-2 text-neutral-400 hover:text-white transition-all group px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 active:scale-95"
            >
              <span className="text-sm md:text-base">View Code</span>
              <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
            </a>
            )}
          </div>
        </div>

        {/* Project image */}
        <div className="relative aspect-[4/3] rounded-lg md:rounded-lg overflow-hidden order-1 md:order-2 shadow-lg">
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
                ref={videoRef}
                src={project.imageUrl}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
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
            className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-20 bg-white/10 backdrop-blur-md rounded-full p-2.5 md:p-3"
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 45 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
