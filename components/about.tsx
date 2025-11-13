"use client"

import LogoLoop from './LogoLoop';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiCplusplus,
  SiLaravel, SiDjango, SiDocker, SiGit, SiJavascript, SiHtml5, SiCss3,
  SiBootstrap, SiDotnet, SiNodedotjs, SiPostgresql, SiMongodb, SiAmazon,
  SiMicrosoft, SiGithub
} from 'react-icons/si';

export default function About() {
  return (
    <section id="about" className="min-h-screen relative overflow-hidden gradient-bg py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-left-8 duration-700 font-black uppercase tracking-tighter">
                ABOUT
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-in scale-x-0 origin-left duration-1000 delay-300" />
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
                Hey, I'm <strong>Yassine Ech-chaoui</strong> and I use <strong>yassine13ch</strong> as my username on
                social networks. I'm an engineering student in my final year at <strong>EMSI Rabat</strong>,
                specializing in Computer Science and Networks.
              </p>

              <p className="animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
                I'm a <strong>full-stack developer</strong>, passionate about creating innovative web applications and
                AI solutions. I love building user-friendly interfaces and robust backend systems using modern
                technologies like React, Laravel, Django, and the AI SDK.
              </p>

              <p className="animate-in fade-in slide-in-from-left-4 duration-700 delay-400">
                Passionate about <strong>music</strong>, I enjoy creating digital experiences around what I listen to.
                I'm always curious to learn more about new technologies, creative coding, and how to build better
                products.
              </p>

              <div className="pt-4 animate-in fade-in slide-in-from-left-4 duration-700 delay-500">
                <a href="#contact" className="inline-flex items-center gap-2 text-primary hover:underline hover:gap-3 transition-all duration-300">
                  <span className="inline-block group-hover:translate-y-1 transition-transform">↓</span> download CV
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-background/50 backdrop-blur-sm hover:border-primary transition-colors duration-500 group cursor-pointer">
              <img
                src="/professional-developer-portrait.png"
                alt="Yassine Ech-chaoui"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full duration-700" />
              </div>
            </div>
            {/* Decorative blob */}
            <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-secondary/30 blur-3xl -z-10 blob" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-accent/30 blur-3xl -z-10 blob-slow" />
          </div>
        </div>

        {/* Skills section */}
        <div className="mt-24 space-y-8">
          <h3 className="text-3xl md:text-4xl font-bold animate-in fade-in slide-in-from-bottom-4 duration-700 font-black uppercase tracking-wide">
            Technical Skills
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Languages", skills: "C++, Java, Python, JavaScript, TypeScript, C#" },
              { title: "Frontend", skills: "React, Next.js, HTML, CSS, Tailwind, Bootstrap" },
              { title: "Backend", skills: "Laravel, Django, .NET, Node.js" },
              { title: "Databases", skills: "SQL, Oracle, NoSQL, Chroma" },
              { title: "AI & ML", skills: "LangChain, HuggingFace, Streamlit, AI SDK" },
              { title: "Tools", skills: "Git, Docker, AWS, Azure, Agile (Scrum)" },
            ].map((category, index) => (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-md border border-border/50 hover:border-primary hover:from-card/80 hover:to-card/60 transition-all duration-500 hover:shadow-xl hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700 group overflow-hidden relative"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Animated background shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full duration-700" />
                </div>

                <div className="relative z-10 flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse" />
                  <h4 className="font-bold text-lg text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300 uppercase tracking-wide">
                    {category.title}
                  </h4>
                </div>
                <p className="relative z-10 text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 font-medium">
                  {category.skills}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack Logo Loop */}
          <div className="mt-16 space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold animate-in fade-in slide-in-from-bottom-4 duration-700 font-black uppercase tracking-wide">
              Tech Stack
            </h3>

            <div className="relative h-32 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-md border border-border/50 p-8 overflow-hidden">
              <LogoLoop
                logos={[
                  { node: <SiCplusplus className="text-4xl text-blue-700" />, title: "C++", href: "https://cplusplus.com" },
                  { node: <SiPython className="text-4xl text-blue-500" />, title: "Python", href: "https://python.org" },
                  { node: <SiJavascript className="text-4xl text-yellow-400" />, title: "JavaScript", href: "https://javascript.com" },
                  { node: <SiTypescript className="text-4xl text-blue-600" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
                  { node: <SiReact className="text-4xl text-blue-400" />, title: "React", href: "https://react.dev" },
                  { node: <SiNextdotjs className="text-4xl text-foreground" />, title: "Next.js", href: "https://nextjs.org" },
                  { node: <SiHtml5 className="text-4xl text-orange-600" />, title: "HTML5", href: "https://html.spec.whatwg.org" },
                  { node: <SiCss3 className="text-4xl text-blue-500" />, title: "CSS3", href: "https://www.w3.org/Style/CSS" },
                  { node: <SiTailwindcss className="text-4xl text-cyan-400" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
                  { node: <SiBootstrap className="text-4xl text-purple-600" />, title: "Bootstrap", href: "https://getbootstrap.com" },
                  { node: <SiLaravel className="text-4xl text-red-500" />, title: "Laravel", href: "https://laravel.com" },
                  { node: <SiDjango className="text-4xl text-green-700" />, title: "Django", href: "https://djangoproject.com" },
                  { node: <SiDotnet className="text-4xl text-purple-500" />, title: ".NET", href: "https://dotnet.microsoft.com" },
                  { node: <SiNodedotjs className="text-4xl text-green-600" />, title: "Node.js", href: "https://nodejs.org" },
                  { node: <SiPostgresql className="text-4xl text-blue-700" />, title: "SQL", href: "https://www.postgresql.org" },
                  { node: <SiMongodb className="text-4xl text-green-500" />, title: "NoSQL", href: "https://www.mongodb.com" },
                  { node: <SiDocker className="text-4xl text-blue-500" />, title: "Docker", href: "https://docker.com" },
                  { node: <SiGit className="text-4xl text-orange-600" />, title: "Git", href: "https://git-scm.com" },
                  { node: <SiAmazon className="text-4xl text-orange-500" />, title: "AWS", href: "https://aws.amazon.com" },
                  { node: <SiMicrosoft className="text-4xl text-blue-600" />, title: "Azure", href: "https://azure.microsoft.com" },
                ]}
                speed={60}
                direction="left"
                logoHeight={64}
                gap={48}
                scaleOnHover={true}
                fadeOut={true}
                fadeOutColor="rgba(0, 0, 0, 0)"
                ariaLabel="Technology stack"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
