"use client"
import { Mail, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-accent hover:bg-accent/10 rounded-lg button-hover-animation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 mobile-menu-animation">
            <a
              href="#hero"
              className="block px-4 py-2 rounded-lg text-accent hover:bg-accent/10 button-hover-animation"
            >
              Home
            </a>
            <a
              href="#projects"
              className="block px-4 py-2 rounded-lg text-accent hover:bg-accent/10 button-hover-animation"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="block px-4 py-2 rounded-lg text-accent hover:bg-accent/10 button-hover-animation"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 rounded-lg text-accent hover:bg-accent/10 button-hover-animation"
            >
              Contact
            </a>
            <a
              href="mailto:benedictokoneffiong@gmail.com"
              className="block px-4 py-2 rounded-lg border border-accent text-accent hover:bg-accent/10 button-hover-animation"
            >
              Email Me
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
