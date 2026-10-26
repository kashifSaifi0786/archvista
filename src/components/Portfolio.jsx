import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const categories = ['All', 'Residential', 'Villa', 'Penthouse', 'Interior']

const projects = [
  {
    id: 1,
    title: 'The Meridian House',
    location: 'Beverly Hills, CA',
    category: 'Residential',
    year: '2024',
    size: '12,400 sq ft',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'Serenity Villa',
    location: 'Amalfi Coast, Italy',
    category: 'Villa',
    year: '2024',
    size: '8,200 sq ft',
    img: 'https://images.unsplash.com/photo-1613977257592-4a9a32f9141e?w=800&q=80&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 3,
    title: 'Azure Penthouse',
    location: 'Manhattan, NY',
    category: 'Penthouse',
    year: '2023',
    size: '6,100 sq ft',
    img: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 4,
    title: 'The Atlas Estate',
    location: 'Marbella, Spain',
    category: 'Residential',
    year: '2023',
    size: '18,000 sq ft',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 5,
    title: 'Lumina Interiors',
    location: 'London, UK',
    category: 'Interior',
    year: '2022',
    size: '4,800 sq ft',
    img: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 6,
    title: 'Cascade Villa',
    location: 'Bali, Indonesia',
    category: 'Villa',
    year: '2022',
    size: '7,600 sq ft',
    img: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=800&q=80&auto=format&fit=crop',
    featured: false,
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredId, setHoveredId] = useState(null)
  const [ref, inView] = useInView()

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-28 md:py-36 bg-navy-950/50">
      <div className="section-container">
        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8
                       transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <div className="section-label">Our Work</div>
            <h2 className="section-title">
              Selected<br />
              <span className="italic text-gradient">Projects</span>
            </h2>
          </div>
          <p className="section-subtitle max-w-sm text-base">
            A curated collection of our most distinguished residential and interior design commissions.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap gap-3 mb-12 transition-all duration-800 delay-200
                       ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm tracking-wider uppercase border transition-all duration-300
                ${activeCategory === cat
                  ? 'bg-copper-500 border-copper-500 text-white'
                  : 'border-navy-700 text-navy-300 hover:border-copper-500 hover:text-copper-400'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden cursor-pointer
                           transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent
                               transition-opacity duration-400
                               ${hoveredId === project.id ? 'opacity-100' : 'opacity-80'}`} />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-start justify-between">
                  <div>
                    <div
                      className={`text-copper-400 text-xs tracking-widest uppercase mb-2
                                   transition-all duration-400
                                   ${hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                    >
                      {project.category} · {project.year}
                    </div>
                    <h3 className="font-display text-xl text-white font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-navy-300 text-sm">{project.location}</p>
                    <div
                      className={`mt-3 text-copper-400 text-xs tracking-wide
                                   transition-all duration-400 delay-100
                                   ${hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                    >
                      {project.size}
                    </div>
                  </div>
                  <div
                    className={`w-10 h-10 border border-copper-500 flex items-center justify-center text-copper-400
                                 hover:bg-copper-500 hover:text-white transition-all duration-300
                                 ${hoveredId === project.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 bg-copper-500 text-white text-xs tracking-widest uppercase px-3 py-1">
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button className="btn-outline">
            View All Projects
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
