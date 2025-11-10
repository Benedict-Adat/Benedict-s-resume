"use client"

export default function Experience() {
  const experiences = [
    {
      company: "NNPC",
      location: "Abuja FCT, Nigeria",
      position: "Software Intern - Full stack & Ui/UX" ,
      period: "July 2025 - September 2025",
      highlights: [
        "Designed and implemented responsive web interfaces using HTML, CSS, JavaScript, and React.js",
        "Collaborated with UI/UX designers to translate wireframes and prototypes into functional code using Figma",
        "Optimized website performance using lazy loading, code splitting, and responsive image techniques",
        "Applied Version Control (Git) and worked in Agile/Scrum teams to deliver solutions",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-accent/30 hover:border-accent/60 bg-background hover:bg-accent/5 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-accent">{exp.position}</h3>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <span className="text-accent font-semibold text-sm md:text-base whitespace-nowrap">{exp.period}</span>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-accent font-bold">●</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
