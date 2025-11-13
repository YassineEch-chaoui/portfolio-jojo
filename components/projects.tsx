"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "ChatBot Fairlynk",
    category: "AI Development",
    description: "Intelligent chatbot for LegalTech platform using RAG architecture",
    fullDescription: "A sophisticated AI-powered chatbot designed for the LegalTech industry. Built with RAG (Retrieval-Augmented Generation) architecture to provide accurate legal information and assistance.",
    tech: ["Python", "Streamlit", "LangChain", "HuggingFace"],
    link: "https://github.com/yassine13ch/ChatBot-Fairlynk",
    color: "from-blue-500/20 to-purple-500/20",
    images: ["/logine-fairlynk.png","/chate-fairlynk.png", "/dark-fairlynk.png", "/light-fairlynk.png", ],
    features: ["RAG Architecture", "Legal Document Processing", "Real-time Responses", "Multi-language Support"],
  },
  
  {
    title: "Recommendation System",
    category: "Data Science",
    description: "E-commerce recommendation engine using collaborative filtering",
    fullDescription: "Advanced recommendation engine using collaborative filtering and machine learning algorithms to provide personalized product suggestions to users.",
    tech: ["Python", "PySpark", "Kafka", "Elasticsearch"],
    link: "https://github.com/yassine13ch/Recommendation-System-Ecommerce",
    color: "from-orange-500/20 to-red-500/20",
    images: ["/PFA4eme/1.png", "/PFA4eme/2.png","/PFA4eme/3.png","/PFA4eme/4.png", "/PFA4eme/5.png",],
    features: ["Collaborative Filtering", "Real-time Processing", "Scalable Architecture", "ML Algorithms"],
  },
  {
    title: "Online Exams App",
    category: "Mobile Development",
    description: "Android app for creating and taking quizzes",
    fullDescription: "A comprehensive mobile application for creating, managing, and taking online exams and quizzes. Features real-time scoring and detailed analytics.",
    tech: ["Java", "Android Studio", "Firebase"],
    link: "https://github.com/yassine13ch/OnlineExamsApp",
    color: "from-pink-500/20 to-rose-500/20",
    images: ["/mobile app/1.png", "/mobile app/2.png","/mobile app/3.png","/mobile app/4.png", ],
    features: ["Quiz Creation", "Real-time Scoring", "Analytics Dashboard", "Firebase Integration"],
  },
  {
    title: "E-commerce Platform",
    category: "Full-Stack Development",
    description: "Complete e-commerce solution for dietary supplements",
    fullDescription: "A full-featured e-commerce platform specifically designed for dietary supplement sales. Includes product catalog, shopping cart, payment processing, and order management.",
    tech: ["Laravel", "React", "MySQL"],
    link: "https://github.com/yassine13ch/Ecommerce-C2M",
    color: "from-green-500/20 to-teal-500/20",
    images: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
    features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Tracking"],
  },
  {
    title: "TechStore JEE",
    category: "Web Development",
    description: "Electronics catalog management with CRUD operations",
    fullDescription: "Enterprise-level electronics catalog management system built with Jakarta EE. Provides comprehensive CRUD operations for managing product inventory.",
    tech: ["Jakarta EE", "JDK 17", "Tomcat"],
    link: "https://github.com/yassine13ch/TechStore-JEE",
    color: "from-cyan-500/20 to-blue-500/20",
    images: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
    features: ["CRUD Operations", "Inventory Management", "Enterprise Architecture", "Tomcat Deployment"],
  },
  {
    title: "YI-Movie",
    category: "Full-Stack Development",
    description: "Film and actor database management system",
    fullDescription: "A comprehensive film and actor database management system. Allows users to browse, search, and manage information about movies and actors.",
    tech: ["C#", ".NET", "React", "SQL"],
    link: "https://github.com/yassine13ch/YI-Movie",
    color: "from-violet-500/20 to-purple-500/20",
    images: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
    features: ["Movie Database", "Actor Profiles", "Search Functionality", "Rating System"],
  },
  {
    title: "Hotel Management",
    category: "Desktop Application",
    description: "Complete hotel management system with booking features",
    fullDescription: "A desktop application for managing hotel operations including room bookings, guest management, billing, and reporting.",
    tech: ["Java", "NetBeans", "SQL"],
    link: "https://github.com/yassine13ch/hotel-management",
    color: "from-amber-500/20 to-yellow-500/20",
    images: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
    features: ["Room Booking", "Guest Management", "Billing System", "Reports Generation"],
  },
  {
    title: "Taxi Reservation",
    category: "Web Application",
    description: "Online taxi booking platform with dual authentication",
    fullDescription: "A web-based taxi reservation platform with separate interfaces for drivers and passengers. Features real-time tracking and dual authentication.",
    tech: ["Python", "Django", "CSS", "HTML"],
    link: "https://github.com/yassine13ch/taxi-reservation",
    color: "from-emerald-500/20 to-green-500/20",
    images: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
    features: ["Real-time Tracking", "Dual Authentication", "Booking System", "Rating System"],
  },
  {
    title: "YassineIA",
    category: "AI Integration",
    description: "Web app consuming OpenAI API with interactive UI",
    fullDescription: "An interactive web application that integrates with OpenAI API to provide AI-powered features and intelligent responses.",
    tech: ["React", "Laravel", "OpenAI API"],
    link: "https://github.com/yassine13ch/YassineIA",
    color: "from-indigo-500/20 to-blue-500/20",
    images: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
    features: ["OpenAI Integration", "Interactive UI", "Real-time Responses", "API Management"],
  },
]

export default function Projects() {
  const [displayCount, setDisplayCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    // Animated counter
    if (isVisible && displayCount < projects.length) {
      const timer = setTimeout(() => {
        setDisplayCount(prev => Math.min(prev + 1, projects.length))
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [isVisible, displayCount])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject === null) return

      if (e.key === "Escape") {
        setSelectedProject(null)
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex(prev => (prev - 1 + 3) % 3)
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex(prev => (prev + 1) % 3)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedProject])

  const handlePrevImage = () => {
    if (selectedProject !== null) {
      const imageCount = projects[selectedProject].images.length
      setCurrentImageIndex(prev => (prev - 1 + imageCount) % imageCount)
    }
  }

  const handleNextImage = () => {
    if (selectedProject !== null) {
      const imageCount = projects[selectedProject].images.length
      setCurrentImageIndex(prev => (prev + 1) % imageCount)
    }
  }

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (selectedProject === null) return

    const interval = setInterval(() => {
      if (selectedProject !== null) {
        const imageCount = projects[selectedProject].images.length
        setCurrentImageIndex(prev => (prev + 1) % imageCount)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [selectedProject])

  return (
    <section id="projects" className="min-h-screen relative overflow-hidden gradient-bg py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-baseline gap-6 mb-6">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold animate-in fade-in slide-in-from-left-8 duration-700 font-black uppercase tracking-tighter">
              PROJECTS
            </h2>
            <span className="text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-mono tabular-nums animate-in fade-in slide-in-from-right-8 duration-700 delay-200 font-black">
              {displayCount.toString().padStart(2, '0')}
            </span>
          </div>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-in scale-x-0 origin-left duration-1000 delay-300" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedProject(index)
                  setCurrentImageIndex(0)
                }}
                className="group relative overflow-hidden rounded-2xl bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 text-left cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
              {/* Animated gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Animated shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full duration-700" />
              </div>

              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 blur-xl" />
              </div>

              <div className="relative p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 font-black">
                    {project.title}
                  </h3>
                  <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300 text-2xl font-bold">
                    ↗
                  </span>
                </div>

                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary text-sm font-semibold group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-300 border border-primary/30">
                  {project.category}
                </div>

                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs rounded-lg bg-muted/50 text-muted-foreground group-hover:bg-primary/30 group-hover:text-primary transition-all duration-300 font-semibold border border-border/50 group-hover:border-primary/50"
                      style={{
                        transitionDelay: `${techIndex * 30}ms`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Expanded Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-card/98 backdrop-blur-xl rounded-3xl border border-border/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in scale-in duration-300 shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 hover:from-primary/50 hover:to-secondary/50 transition-all duration-300 z-10 border border-primary/30 hover:border-primary/60 group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Image carousel */}
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden bg-muted aspect-square flex items-center justify-center">
                  <img
                    src={projects[selectedProject].images[currentImageIndex]}
                    alt={`${projects[selectedProject].title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      console.error(`Failed to load image: ${projects[selectedProject].images[currentImageIndex]}`);
                      (e.target as HTMLImageElement).src = "/placeholder.jpg";
                    }}
                  />

                  {/* Image navigation */}
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/80 hover:bg-primary transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/80 hover:bg-primary transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {projects[selectedProject].images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 animate-in fade-in ${
                          i === currentImageIndex ? "bg-primary w-6 scale-125" : "bg-primary/50 hover:bg-primary/75"
                        }`}
                        style={{
                          animationDelay: `${i * 50}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="space-y-3">
                  <h4 className="font-bold text-lg animate-in fade-in slide-in-from-left-4 duration-500">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech, idx) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-primary/20 text-primary text-sm font-medium animate-in fade-in scale-in duration-300 hover:bg-primary/40 transition-colors"
                        style={{
                          animationDelay: `${idx * 75}ms`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold mb-2">{projects[selectedProject].title}</h2>
                  <p className="text-primary font-semibold">{projects[selectedProject].category}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  {projects[selectedProject].fullDescription}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-bold text-lg">Key Features</h4>
                  <ul className="space-y-2">
                    {projects[selectedProject].features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GitHub link */}
                <Link
                  href={projects[selectedProject].link}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold group/link"
                >
                  <ExternalLink className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  View on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
