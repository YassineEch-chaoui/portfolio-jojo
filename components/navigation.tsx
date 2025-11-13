"use client"

import { useState } from "react"
import { X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const menuItems = [
    { number: "01", label: "HOME", href: "#home" },
    { number: "02", label: "ABOUT", href: "#about" },
    { number: "03", label: "PROJECTS", href: "#projects" },
    { number: "04", label: "CONTACT", href: "#contact" },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-3 md:p-4 backdrop-blur-md bg-background/30 border-b border-border/50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="#home" className="text-2xl font-bold group">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={70}
                height={70}
                className="w-20 h-20 group-hover:scale-110 transition-all duration-300"
              />
              <span className="hidden sm:inline text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                
              </span>
            </div>
          </Link>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
            >
              {isDark ? (
                <Sun className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
              ) : (
                <Moon className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
            >
              <div className="grid grid-cols-3 gap-1.5 w-5 h-5">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-foreground group-hover:bg-primary transition-all duration-300 group-hover:scale-125"
                    style={{
                      transitionDelay: `${i * 30}ms`,
                    }}
                  />
                ))}
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Full screen menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 gradient-bg animate-in fade-in duration-300">
          <div className="absolute inset-0 overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-secondary/30 blur-3xl blob" />
            <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-accent/30 blur-3xl blob-slow" />
            <div className="absolute bottom-20 left-1/4 w-56 h-56 rounded-full bg-chart-1/30 blur-3xl blob" />
            <div className="absolute bottom-40 right-1/3 w-40 h-40 rounded-full bg-chart-3/30 blur-3xl blob-slow" />
          </div>

          <div className="relative h-full flex flex-col">
            <div className="p-6 md:p-8 flex justify-between items-center border-b border-border/50">
              <Link href="#home" onClick={() => setIsOpen(false)} className="text-2xl font-bold group">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="w-14 h-14 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
              >
                <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
              </Button>
            </div>

            <div className="flex-1 flex items-center justify-center px-6">
              <nav className="space-y-6">
                {menuItems.map((item, index) => (
                  <Link
                    key={item.number}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block group animate-in fade-in slide-in-from-left-8 duration-500"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="flex items-center gap-6 group-hover:gap-8 transition-all duration-300">
                      <span className="text-muted-foreground text-sm font-mono group-hover:text-primary transition-colors duration-300">
                        {item.number}
                      </span>
                      <span className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight group-hover:text-primary transition-all duration-300 group-hover:translate-x-2">
                        {item.label}
                      </span>
                    </div>
                    <div className="h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-32 transition-all duration-500 mt-2" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="p-6 md:p-8 flex gap-8 justify-center border-t border-border/50">
              {[
                { label: "github", href: "https://github.com/YassineEch-chaoui" },
                { label: "linkedin", href: "https://www.linkedin.com/in/yassine-ech-chaoui-58a745329" }
              ].map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 group/social animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{
                    animationDelay: `${500 + idx * 100}ms`,
                  }}
                >
                  <span className="group-hover/social:translate-x-1 transition-transform">→</span> {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
