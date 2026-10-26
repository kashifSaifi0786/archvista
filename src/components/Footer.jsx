import { Instagram, Linkedin, Twitter } from 'lucide-react'

const footerLinks = {
  'Studio': ['About Us', 'Our Approach', 'Sustainability', 'Careers'],
  'Services': ['Residential Architecture', 'Interior Design', 'Project Management', 'Landscape Design'],
  'Work': ['All Projects', 'Residential', 'Villas', 'Penthouses'],
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="section-container">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-copper-500 flex items-center justify-center">
                <span className="text-copper-400 font-display font-bold text-sm">A</span>
              </div>
              <span className="font-display text-white text-xl font-semibold tracking-wide">
                Arch<span className="text-copper-400">Vista</span>
              </span>
            </div>
            <p className="text-navy-400 text-sm leading-relaxed max-w-xs mb-8">
              Award-winning luxury residential architecture and interior design studio.
              Crafting timeless spaces since 2001.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-navy-700 flex items-center justify-center text-navy-400
                             hover:border-copper-500 hover:text-copper-400 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white text-sm font-medium tracking-widest uppercase mb-5">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-navy-400 text-sm hover:text-copper-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-500 text-xs">
            © 2025 ArchVista Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-navy-500 text-xs hover:text-copper-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
