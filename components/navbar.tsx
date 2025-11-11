"use client"
import { Mail } from "lucide-react"

export default function Navbar() {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border nav-animation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#hero" className="text-2xl font-bold text-accent hover:text-accent/80 button-hover-animation">
            BO
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1">
            <a
              href="#hero"
              className="px-4 py-2 rounded-full bg-accent text-background hover:bg-accent/90 button-hover-animation font-medium"
            >
              Home
            </a>
            <a
              href="#projects"
              className="px-4 py-2 rounded-full border border-accent text-accent hover:bg-accent/10 button-hover-animation font-medium"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="px-4 py-2 rounded-full border border-accent text-accent hover:bg-accent/10 button-hover-animation font-medium"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-accent text-accent hover:bg-accent/10 button-hover-animation font-medium"
            >
              Contact
            </a>
          </div>

          <a
            href="mailto:benedictokoneffiong@gmail.com"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-background button-hover-animation font-medium"
          >
            <Mail size={18} />
            <span className="text-sm">Email</span>
          </a>

          {/* Mobile Menu Button removed per request (no mobile menu) */}
        </div>
        {/* Mobile menu removed to disable mobile toggle */}
      </div>
    </nav>
  )
}
