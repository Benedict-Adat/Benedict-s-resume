"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-accent/20 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div>
            <p className="text-accent font-bold text-lg">Benedict Okon-Effiong</p>
            <p className="text-muted-foreground text-sm">Full stack Developer & Creative Problem Solver</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-accent/30 text-accent hover:bg-accent hover:text-background transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-accent/30 text-accent hover:bg-accent hover:text-background transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:benedictokoneffiong@gmail.com"
              className="p-3 rounded-full border border-accent/30 text-accent hover:bg-accent hover:text-background transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-accent/20 pt-8 text-center text-muted-foreground text-sm">
          <p>© 2025 Benedict Okon-Effiong. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
