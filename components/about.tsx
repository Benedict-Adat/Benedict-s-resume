"use client"

export default function About() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack developer with 2+ years of experience building , user-friendly web
                applications. I specialize in React, JavaScript, tailwindcss, Python  and modern web technologies.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                I transform ideas into interactive digital experiences. From concept to deployment, I focus on creating
                responsive, accessible, and performant applications that users love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
