"use client"

export default function Projects() {
  const projects = [
    {
      name: "KONEGAN-3D Homes",
      description: "A 3D home visualization platform using cutting-edge web technologies",
      tags: ["React", "3D", "Web Design"],
    },
    {
      name: "KONEGAN",
      description: "Main platform for real estate and property management solutions",
      tags: ["React", "Full Stack", "UI/UX"],
    },
    {
      name: "Stock Market Simulator",
      description: "Interactive educational platform for learning stock market trading",
      tags: ["React", "JavaScript", "API Integration"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-accent/30 hover:border-accent/60 bg-accent/5 hover:bg-accent/10 button-hover-animation hover:scale-105 group cursor-pointer"
            >
              <h3 className="text-xl font-bold text-accent mb-2 group-hover:text-accent/80 button-hover-animation">
                {project.name}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium button-hover-animation hover:bg-accent/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
