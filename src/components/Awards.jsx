import { Trophy } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const awards = [
  {
    year: '2024',
    title: 'World Architecture Festival',
    subtitle: 'Best Residential Architecture — Americas',
    project: 'The Meridian House',
    org: 'WAF',
  },
  {
    year: '2024',
    title: 'AD100 List',
    subtitle: 'Architectural Digest Top 100 Designers',
    project: 'Studio Recognition',
    org: 'AD',
  },
  {
    year: '2023',
    title: 'RIBA International Award',
    subtitle: 'Excellence in Residential Architecture',
    project: 'Azure Penthouse, NYC',
    org: 'RIBA',
  },
  {
    year: '2023',
    title: 'Elle Décor A-List',
    subtitle: 'Interior Design Excellence',
    project: 'Lumina Interiors, London',
    org: 'ED',
  },
  {
    year: '2022',
    title: 'AIA Housing Award',
    subtitle: 'Housing Design Award of Excellence',
    project: 'The Atlas Estate',
    org: 'AIA',
  },
  {
    year: '2022',
    title: 'Dezeen Awards',
    subtitle: 'House of the Year — Shortlisted',
    project: 'Serenity Villa',
    org: 'DZ',
  },
]

const pressLogos = ['Architectural Digest', 'Wallpaper*', 'Dezeen', 'Vogue Living', 'Elle Décor', 'The Times']

export default function Awards() {
  const [ref, inView] = useInView()
  const [pressRef, pressInView] = useInView()

  return (
    <section id="awards" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-copper-900/10 blur-3xl pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-800
                       ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label">Recognition</div>
          <h2 className="section-title">
            Awards &amp; <span className="italic text-gradient">Accolades</span>
          </h2>
        </div>

        {/* Trophy Icon */}
        <div
          className={`flex justify-center mb-12 transition-all duration-800 delay-200
                       ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        >
          <div className="w-20 h-20 border border-copper-500/40 rounded-full flex items-center justify-center">
            <Trophy size={32} className="text-copper-400" />
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {awards.map((award, i) => (
            <div
              key={i}
              className={`bg-navy-950 p-8 hover:bg-navy-900/50 transition-all duration-400 group
                           ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-copper-400 font-display text-4xl font-semibold">{award.year}</span>
                <span className="text-xs tracking-widest uppercase text-white/30 bg-white/5 px-3 py-1 border border-white/10">
                  {award.org}
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-copper-300 transition-colors duration-300">
                {award.title}
              </h3>
              <p className="text-navy-300 text-sm mb-3">{award.subtitle}</p>
              <div className="flex items-center gap-2 text-copper-500/60 text-xs">
                <div className="w-3 h-[1px] bg-copper-500/40" />
                {award.project}
              </div>
            </div>
          ))}
        </div>

        {/* Press Mention Strip */}
        <div
          ref={pressRef}
          className={`mt-20 transition-all duration-800
                       ${pressInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-center text-navy-400 text-xs tracking-[0.3em] uppercase mb-8">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {pressLogos.map((logo, i) => (
              <div
                key={i}
                className="text-navy-400 font-display text-lg font-medium italic
                           hover:text-copper-400 transition-colors duration-300 cursor-pointer"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
