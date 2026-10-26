import { Linkedin, Mail } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const team = [
  {
    name: 'Elara Montgomery',
    role: 'Founding Principal & Lead Architect',
    bio: 'Harvard GSD alumna with 25 years of award-winning residential design across four continents.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop',
    specialty: 'Architecture',
  },
  {
    name: 'Sebastian Harlow',
    role: 'Director of Interior Design',
    bio: 'Former design director at a leading Parisian atelier, Sebastian brings old-world refinement to contemporary spaces.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop',
    specialty: 'Interiors',
  },
  {
    name: 'Aisha Nkrumah',
    role: 'Senior Architect & Sustainability Lead',
    bio: 'Specialist in biophilic and passive design, Aisha ensures every ArchVista home lives lightly on the earth.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop',
    specialty: 'Sustainable Design',
  },
  {
    name: 'Marcus Chen',
    role: 'Head of Project Delivery',
    bio: 'With a background in structural engineering, Marcus bridges design vision and construction reality seamlessly.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&auto=format&fit=crop',
    specialty: 'Project Management',
  },
]

export default function Team() {
  const [ref, inView] = useInView()

  return (
    <section id="team" className="py-28 md:py-36 bg-navy-950/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-copper-900/8 blur-3xl pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-800
                       ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label">The People Behind the Vision</div>
          <h2 className="section-title">
            Meet Our <span className="italic text-gradient">Team</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6 text-center">
            Our studio is home to some of the most talented architects, designers,
            and project specialists in the world.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden bg-glass-light border border-white/5
                           hover:border-copper-500/30 transition-all duration-500
                           ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-copper-400 text-xs tracking-widest uppercase mb-2">{member.specialty}</div>
                <h3 className="font-display text-lg text-white font-semibold">{member.name}</h3>
                <p className="text-navy-300 text-sm mb-3">{member.role}</p>

                {/* Bio - revealed on hover */}
                <p
                  className="text-navy-300 text-xs leading-relaxed mb-4
                              max-h-0 overflow-hidden group-hover:max-h-20
                              transition-all duration-500"
                >
                  {member.bio}
                </p>

                {/* Social Icons */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100">
                  <button className="w-8 h-8 border border-white/20 flex items-center justify-center text-navy-300
                                     hover:border-copper-500 hover:text-copper-400 transition-colors duration-300">
                    <Linkedin size={13} />
                  </button>
                  <button className="w-8 h-8 border border-white/20 flex items-center justify-center text-navy-300
                                     hover:border-copper-500 hover:text-copper-400 transition-colors duration-300">
                    <Mail size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
