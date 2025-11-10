"use client"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS", "Responsive Design", "Figma"],
    },
    {
      title: "Backend & Tools",
      skills: ["Node.js", "Git", "Agile/Scrum", "Version Control", "Performance Optimization"],
    },
    {
      title: "Design & UX",
      skills: ["UI/UX Design", "Wireframing", "Prototyping", "User Research"],
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 text-center">Skills & Expertise</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-accent/30 hover:border-accent/60 hover:bg-accent/5 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-accent mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 text-muted-foreground hover:text-accent transition">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
