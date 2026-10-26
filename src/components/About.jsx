import { useInView } from '../hooks/useInView'

const values = [
  {
    title: 'Uncompromised Quality',
    desc: 'Every detail is executed with precision. We partner only with the finest craftsmen and source materials that stand the test of time.',
  },
  {
    title: 'Client-Centred Vision',
    desc: 'Your story is the blueprint. We listen deeply before we design, translating your aspirations into spaces that feel unmistakably yours.',
  },
  {
    title: 'Sustainable Luxury',
    desc: 'Elegance and responsibility coexist in our work. We integrate sustainable design principles without compromising aesthetic ambition.',
  },
]

export default function About() {
  const [ref, inView] = useInView()
  const [imgRef, imgInView] = useInView()

  return (
    <section id="about" className="py-28 md:py-36 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-copper-900/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-navy-800/40 blur-3xl pointer-events-none" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Stack */}
          <div
            ref={imgRef}
            className={`relative transition-all duration-1000 ${imgInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85&auto=format&fit=crop"
                alt="Luxury interior"
                className="w-full aspect-[4/5] object-cover"
              />
              {/* Floating accent card */}
              <div
                className="absolute -bottom-8 -right-8 lg:-right-12 w-56 h-48 overflow-hidden border-4 border-navy-950"
                style={{ transitionDelay: '200ms' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=85&auto=format&fit=crop"
                  alt="Architecture detail"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Gold frame decoration */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-copper-500/50" />
            </div>

            {/* Founding year badge */}
            <div className="absolute top-8 -right-4 lg:-right-8 bg-copper-500 px-6 py-4 text-white">
              <div className="font-display text-3xl font-bold">2001</div>
              <div className="text-xs tracking-widest uppercase text-copper-100">Founded</div>
            </div>
          </div>

          {/* Text */}
          <div
            ref={ref}
            className={`transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="section-label">About ArchVista</div>
            <h2 className="section-title mb-6">
              Crafting Spaces<br />
              <span className="italic text-gradient">That Endure</span>
            </h2>
            <div className="gold-line mb-8" />

            <p className="text-navy-200 leading-relaxed mb-6">
              Founded in 2001 by a collective of visionary architects and interior designers,
              ArchVista has grown into one of the most sought-after luxury residential design
              studios in the world. We believe that great architecture isn't just about structure
              — it's about soul.
            </p>
            <p className="text-navy-200 leading-relaxed mb-12">
              Our multidisciplinary team of 45 specialists works at the intersection of art,
              engineering, and human experience. From intimate private residences to landmark
              estates, every project receives the same devotion to craft and detail.
            </p>

            <div className="space-y-6 mb-12">
              {values.map((v, i) => (
                <div
                  key={i}
                  className={`flex gap-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${400 + i * 150}ms` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-copper-500 ring-4 ring-copper-500/20" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{v.title}</h4>
                    <p className="text-navy-300 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#portfolio" className="btn-primary">
              View Our Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
