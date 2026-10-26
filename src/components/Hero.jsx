import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Play } from 'lucide-react'

const heroImages = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1800&q=85&auto=format&fit=crop',
]

const stats = [
  { value: '180+', label: 'Projects Completed' },
  { value: '24', label: 'Years of Excellence' },
  { value: '38', label: 'Awards Won' },
  { value: '12', label: 'Countries' },
]

export default function Hero() {
  const [activeImg, setActiveImg] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [counting, setCounting] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
    const interval = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setCounting(true) },
      { threshold: 0.5 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Slideshow */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1500 ease-in-out"
          style={{ opacity: activeImg === i ? 1 : 0 }}
        >
          <img
            src={img}
            alt={`Architecture ${i + 1}`}
            className="w-full h-full object-cover scale-105"
            style={{
              transform: activeImg === i ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 6s ease-in-out',
            }}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/30" />

      {/* Vertical Line Decoration */}
      <div
        className={`absolute left-6 lg:left-12 top-32 bottom-32 w-[1px] bg-copper-500/30
                    transition-all duration-1000 delay-500
                    ${loaded ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
        style={{ transformOrigin: 'top' }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center section-container">
        <div className="max-w-3xl pt-24">
          <div className={`section-label transition-all duration-700 delay-300
                           ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Luxury Architecture Studio
          </div>

          <h1
            className={`font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] text-white
                         mb-6 transition-all duration-800 delay-500
                         ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Where Vision
            <br />
            <span className="text-gradient italic">Becomes</span>
            <br />
            Architecture
          </h1>

          <p
            className={`section-subtitle mb-10 transition-all duration-800 delay-700
                         ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            We craft extraordinary living spaces that blend timeless elegance with
            contemporary vision — spaces that tell the story of those who inhabit them.
          </p>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-800 delay-900
                         ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <a href="#portfolio" className="btn-primary">
              Explore Our Work
              <ArrowDown size={16} />
            </a>
            <button className="btn-outline group">
              <div className="w-8 h-8 rounded-full border border-copper-500 flex items-center justify-center
                              group-hover:bg-white/10 transition-colors duration-300">
                <Play size={10} fill="currentColor" className="ml-0.5" />
              </div>
              Watch Showreel
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 right-12 hidden lg:flex flex-col gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveImg(i)}
            className={`w-[2px] transition-all duration-300 ${
              activeImg === i ? 'h-8 bg-copper-500' : 'h-3 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Stats Bar */}
      <div
        ref={statsRef}
        className={`relative z-10 border-t border-white/10 transition-all duration-800 delay-1000
                     ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={i} className="py-8 px-6 first:pl-0">
                <div className="font-display text-3xl md:text-4xl font-semibold text-copper-400 mb-1">
                  {s.value}
                </div>
                <div className="text-navy-300 text-sm tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-copper-500 to-transparent animate-pulse" />
        <span className="text-navy-300 text-xs tracking-[0.2em] uppercase">Scroll</span>
      </div>
    </section>
  )
}
