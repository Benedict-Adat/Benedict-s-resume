"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:benedictokoneffiong@gmail.com"
            className="flex flex-col items-center p-6 rounded-lg border border-accent/30 hover:border-accent hover:bg-accent/10 button-hover-animation hover:scale-105 group"
          >
            <Mail className="w-8 h-8 text-accent mb-3 group-hover:scale-110 button-hover-animation" />
            <p className="text-sm text-muted-foreground mb-1">Email</p>
            <p className="text-accent font-semibold text-center">benedictokoneffiong@gmail.com</p>
          </a>

          <a
            href="tel:+2349064067870"
            className="flex flex-col items-center p-6 rounded-lg border border-accent/30 hover:border-accent hover:bg-accent/10 button-hover-animation hover:scale-105 group"
          >
            <Phone className="w-8 h-8 text-accent mb-3 group-hover:scale-110 button-hover-animation" />
            <p className="text-sm text-muted-foreground mb-1">Phone</p>
            <p className="text-accent font-semibold text-center">+234 906 406 7870</p>
          </a>

          <div className="flex flex-col items-center p-6 rounded-lg border border-accent/30 hover:border-accent hover:bg-accent/10 button-hover-animation hover:scale-105 group">
            <MapPin className="w-8 h-8 text-accent mb-3 group-hover:scale-110 button-hover-animation" />
            <p className="text-sm text-muted-foreground mb-1">Location</p>
            <p className="text-accent font-semibold text-center">Abuja, Nigeria</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="mailto:benedictokoneffiong@gmail.com"
            className="inline-block px-8 py-3 rounded-full bg-accent text-background font-bold button-hover-animation hover:bg-accent/90 hover:scale-105 button-pulse"
          >
            Send Me An Email
          </a>
        </div>
      </div>
    </section>
  )
}
