"use client"

import { useEffect, useState } from 'react'
import './vertical-nav.css'
interface Section {
  id: string
  label: string
}

const sections: Section[] = [
  { id: "about", label: "Home" },
  { id: "whyBuy", label: "Acerca de" },
  { id: "roadmap", label: "Contrato" },
  { id: "disclaimer", label: "Comunidad" }
]

export function VerticalNav() {
  const [activeSection, setActiveSection] = useState<string>("about") // Establecemos "about" como valor inicial

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.5 // Cambiamos a threshold en lugar de rootMargin
      }
    )

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="vertical-nav">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => handleClick(id)}
          className={`nav-item ${activeSection === id ? 'active' : ''}`}
        >
          <span className={`arrow ${activeSection === id ? 'visible' : ''}`}>→</span>
          {label}
        </button>
      ))}
    </nav>
  )
}