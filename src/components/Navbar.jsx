import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-glass border-b border-white/5 py-4' : 'py-6'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-copper-500 flex items-center justify-center
                            group-hover:bg-copper-500 transition-colors duration-300">
              <span className="text-copper-400 group-hover:text-white font-display font-bold text-sm
                               transition-colors duration-300">A</span>
            </div>
            <span className="font-display text-white text-xl font-semibold tracking-wide">
              Arch<span className="text-copper-400">Vista</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wider uppercase transition-colors duration-300 relative group
                  ${activeSection === link.href.replace('#', '')
                    ? 'text-copper-400' : 'text-navy-200 hover:text-white'}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-copper-500 transition-all duration-300
                  ${activeSection === link.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary text-sm py-2.5 px-6"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-navy-950 transition-all duration-500 flex flex-col items-center justify-center
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-white hover:text-copper-400 transition-colors duration-300"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-4"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </>
  )
}
