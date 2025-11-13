"use client"

import { Mail, MapPin, Phone, Github, Linkedin, Download } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen relative overflow-hidden gradient-bg py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-left-8 duration-700 font-black uppercase tracking-tighter">
            CONTACT
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-in scale-x-0 origin-left duration-1000 delay-300" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 group animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
                <Mail className="w-6 h-6 text-primary mt-1 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <h3 className="font-bold text-xl mb-2">E-MAIL</h3>
                  <a
                    href="mailto:Rechchaoui.yassine@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group/link"
                  >
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span> Rechchaoui.yassine@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
                <Phone className="w-6 h-6 text-primary mt-1 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <h3 className="font-bold text-xl mb-2">PHONE</h3>
                  <a href="tel:+212641655393" className="text-muted-foreground hover:text-primary transition-colors group/link">
                    <span className="group-hover/link:translate-x-1 transition-transform inline-block">→</span> +212 6 4165-5393
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group animate-in fade-in slide-in-from-left-4 duration-700 delay-400">
                <MapPin className="w-6 h-6 text-primary mt-1 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <h3 className="font-bold text-xl mb-2">LOCATION</h3>
                  <p className="text-muted-foreground">Rabat, Morocco</p>
                </div>
              </div>
            </div>

            <div className="pt-8 animate-in fade-in slide-in-from-left-4 duration-700 delay-500">
              <h3 className="font-bold text-xl mb-6 font-black uppercase tracking-wide">SOCIAL NETWORKS & CV</h3>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="https://github.com/YassineEch-chaoui"
                  target="_blank"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 px-6 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 group/social border border-border/50 hover:border-primary/50 font-semibold"
                >
                  <Github className="w-5 h-5 group-hover/social:scale-125 group-hover/social:rotate-12 transition-transform" />
                  <span className="group-hover/social:translate-x-1 transition-transform">github</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/yassine-ech-chaoui-58a745329"
                  target="_blank"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 px-6 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 group/social border border-border/50 hover:border-primary/50 font-semibold"
                >
                  <Linkedin className="w-5 h-5 group-hover/social:scale-125 group-hover/social:rotate-12 transition-transform" />
                  <span className="group-hover/social:translate-x-1 transition-transform">linkedin</span>
                </Link>
                <a
                  href="/CV.pdf"
                  download="Yassine_Ech-chaoui_CV.pdf"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 px-6 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 group/social border border-border/50 hover:border-primary/50 font-semibold"
                >
                  <Download className="w-5 h-5 group-hover/social:scale-125 group-hover/social:rotate-12 transition-transform" />
                  <span className="group-hover/social:translate-x-1 transition-transform">download cv</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Additional info */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-md border border-border/50 hover:border-primary hover:from-card/80 hover:to-card/60 transition-all duration-500 hover:shadow-xl hover:scale-105 animate-in fade-in slide-in-from-right-4 duration-700 delay-200 group">
              <h3 className="text-2xl font-bold mb-6 font-black uppercase tracking-wide">Looking for an Internship</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 font-medium">
                I'm currently seeking a <span className="text-foreground font-semibold">6-month end-of-studies internship (PFE)</span> starting in February
                2026. I'm passionate about full-stack development, AI solutions, and creating innovative web
                applications.
              </p>
              <div className="space-y-3">
                {[
                  "Available: February 2026",
                  "Duration: 6 months",
                  "Location: Rabat or Remote"
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300 p-2 rounded-lg hover:bg-primary/10 animate-in fade-in slide-in-from-left-4 duration-500"
                    style={{
                      animationDelay: `${idx * 100}ms`,
                    }}
                  >
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary group-hover/item:scale-150 transition-transform animate-pulse" />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-md border border-border/50 hover:border-primary hover:from-card/80 hover:to-card/60 transition-all duration-500 hover:shadow-xl hover:scale-105 animate-in fade-in slide-in-from-right-4 duration-700 delay-300 group">
              <h3 className="text-2xl font-bold mb-6 font-black uppercase tracking-wide">Languages</h3>
              <div className="space-y-3">
                {[
                  { lang: "French", level: "Fluent" },
                  { lang: "English", level: "Fluent" },
                  { lang: "Arabic", level: "Native" }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center group/lang hover:translate-x-2 transition-transform duration-300 p-2 rounded-lg hover:bg-primary/10 animate-in fade-in slide-in-from-right-4 duration-500"
                    style={{
                      animationDelay: `${idx * 100}ms`,
                    }}
                  >
                    <span className="font-semibold">{item.lang}</span>
                    <span className="text-muted-foreground group-hover/lang:text-primary transition-colors font-semibold">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border text-center text-muted-foreground animate-in fade-in duration-700 delay-500">
          <p>© 2025 Yassine Ech-chaoui. Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  )
}
