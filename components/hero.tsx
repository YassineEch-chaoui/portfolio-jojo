"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden gradient-bg pt-32 md:pt-40">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-secondary/40 blur-3xl blob" />
        <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-accent/40 blur-3xl blob-slow" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-chart-1/40 blur-3xl blob" />
        <div className="absolute bottom-40 right-1/4 w-64 h-64 rounded-full bg-chart-3/40 blur-3xl blob-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-chart-5/30 blur-3xl blob" />
      </div>



      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-8rem)] px-6 md:px-12">
        <div className="max-w-6xl w-full text-center space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block text-muted-foreground text-2xl md:text-3xl mb-4 font-normal animate-in fade-in slide-in-from-top-8 duration-700 uppercase tracking-widest">
              HEY, I'M
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-in fade-in slide-in-from-left-8 duration-700 delay-200 bg-[length:200%_auto] hover:bg-right-bottom transition-all duration-500 font-black">
              YASSINE ECH-CHAOUI
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-4 text-foreground/80 font-normal animate-in fade-in slide-in-from-right-8 duration-700 delay-300 uppercase tracking-wide">
              BUT YOU CAN CALL ME
            </span>
            <span className="block text-primary mt-2 animate-in fade-in scale-in duration-700 delay-500 font-black text-5xl md:text-7xl">
              JOJO
            </span>
          </h1>

          <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto animate-in scale-x-0 origin-center duration-1000 delay-400" />

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            I'm a <span className="text-foreground font-semibold">full-stack developer</span>, <span className="text-foreground font-semibold">UX/UI enthusiast</span> & <span className="text-foreground font-semibold">engineering student</span> specializing in Computer Science and Networks
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-3 text-lg font-semibold px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-left-4 duration-700 delay-500"
            >
              <span>view my projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              href="#about"
              className="group inline-flex items-center gap-3 text-lg font-semibold px-8 py-4 rounded-xl border-2 border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-right-4 duration-700 delay-600"
            >
              <span>learn more about me</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-in fade-in duration-1000 delay-700">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">scroll to explore</span>
              <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2 animate-bounce">
                <div className="w-1 h-2 bg-primary rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
