import { useState } from 'react'
import { Home, Layers, Ruler, TreePine, ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const services = [
  {
    icon: Home,
    title: 'Residential Architecture',
    desc: 'Custom-designed residences that balance grandeur with intimacy — from initial concept sketches to final handover.',
    features: ['Site analysis & masterplanning', 'Conceptual design & 3D visualisation', 'Permit & regulatory management', 'Construction supervision'],
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop',
  },
  {
    icon: Layers,
    title: 'Interior Design',
    desc: 'Curated interiors that reflect your personality — from material selection and furniture curation to lighting design.',
    features: ['Full interior concept development', 'Material & finish specification', 'Furniture & art curation', 'Lighting & acoustic design'],
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80&auto=format&fit=crop',
  },
  {
    icon: Ruler,
    title: 'Project Management',
    desc: 'End-to-end project management ensuring your vision is delivered on time, on budget and to the highest standard.',
    features: ['Contractor procurement', 'Budget & timeline control', 'Quality assurance', 'Client reporting & communication'],
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&auto=format&fit=crop',
  },
  {
    icon: TreePine,
    title: 'Landscape Design',
    desc: 'Harmonious outdoor environments that extend the interior narrative to the natural world surrounding your home.',
    features: ['Landscape masterplanning', 'Pool & water feature design', 'Hardscape & planting strategy', 'Outdoor lighting'],
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop',
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState(0)
  const [ref, inView] = useInView()

  const active = services[activeService]

  return (
    <section id="services" className="py-28 md:py-36 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-500/30 to-transparent" />

      <div className="section-container">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-800
                       ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label">What We Do</div>
          <h2 className="section-title">
            Our <span className="italic text-gradient">Services</span>
          </h2>
        </div>

        {/* Service Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-800 delay-200
                       ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className={`flex items-center gap-3 px-6 py-3 border transition-all duration-300
                  ${activeService === i
                    ? 'bg-copper-500 border-copper-500 text-white'
                    : 'border-navy-700 text-navy-300 hover:border-copper-500/60 hover:text-white'}`}
              >
                <Icon size={16} />
                <span className="text-sm font-medium">{s.title.split(' ')[0]}</span>
              </button>
            )
          })}
        </div>

        {/* Active Service Content */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-800 delay-300
                       ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          key={activeService}
        >
          {/* Image */}
          <div className="relative overflow-hidden group">
            <img
              src={active.img}
              alt={active.title}
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Corner Decoration */}
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-copper-500 flex items-center justify-center opacity-90">
              <active.icon size={28} className="text-white" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="font-display text-3xl md:text-4xl text-white font-semibold mb-4">
              {active.title}
            </h3>
            <div className="gold-line mb-6" />
            <p className="text-navy-200 leading-relaxed mb-8">{active.desc}</p>

            <ul className="space-y-3 mb-10">
              {active.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-navy-200">
                  <div className="w-1.5 h-1.5 bg-copper-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary">
              Enquire About This Service
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
