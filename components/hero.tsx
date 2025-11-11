"use client"
import Image from "next/image"

export default function Hero() {
  const skills = [
    { label: "React", delay: 0 },
    { label: "JavaScript", delay: 0.1 },
    { label: "Frontend", delay: 0.2 },
    { label: "UI/UX", delay: 0.3 },
    { label: "HTML & CSS", delay: 0.4 },
    { label: "Git", delay: 0.5 },
    { label: "Node.js", delay: 0.6 },
    { label: "Responsive", delay: 0.7 },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text and CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-accent glow-text">Benedict</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Full stack Developer & UI/UX Designer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              I create beautiful, responsive web experiences with a passion for clean code and user-centered design.
              Based in Nigeria, working on innovative digital solutions.
            </p>

            {/* Skills Grid */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-accent/10 border border-accent text-accent text-sm font-semibold hover:bg-accent hover:text-background hover:scale-110 button-hover-animation cursor-default"
                  style={{
                    animation: `fadeInSlide 0.6s ease-out ${skill.delay}s backwards`,
                  }}
                >
                  {skill.label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 button-hover-animation hover:scale-105 inline-block button-pulse"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-background button-hover-animation hover:scale-105 inline-block"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Decorative background circle */}
              <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-3xl" />
              <div className="absolute inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl" />

              {/* Profile Image */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-accent/30 shadow-2xl button-hover-animation hover:border-accent/60">
                <Image
                  src="../public/profile.jpg"
                  alt="Benedict Okon-Effiong"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
