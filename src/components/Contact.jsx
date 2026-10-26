import { useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Studio',
    value: '280 Park Avenue, 40th Floor\nNew York, NY 10017',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (212) 555 0182',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@archvista.studio',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [ref, inView] = useInView()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 md:py-36 bg-navy-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-500/20 to-transparent" />
        <div className="absolute -top-20 right-0 w-96 h-96 bg-copper-900/8 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-800/30 blur-3xl rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-800
                       ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label">Start a Conversation</div>
          <h2 className="section-title">
            Let's Create<br />
            <span className="italic text-gradient">Together</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6 text-center">
            Whether you have a project in mind or simply want to explore possibilities,
            we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div
            className={`transition-all duration-800 delay-200
                         ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="space-y-8 mb-12">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 border border-copper-500/40 flex items-center justify-center">
                      <Icon size={18} className="text-copper-400" />
                    </div>
                    <div>
                      <div className="text-xs tracking-widest uppercase text-navy-400 mb-1">{item.label}</div>
                      <div className="text-white font-medium whitespace-pre-line">{item.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Studio Image */}
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80&auto=format&fit=crop"
                alt="ArchVista Studio"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white/60 text-sm">Our New York Studio</div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`transition-all duration-800 delay-400
                         ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-6 py-16 text-center">
                <div className="w-20 h-20 border border-copper-500 rounded-full flex items-center justify-center">
                  <CheckCircle size={36} className="text-copper-400" />
                </div>
                <h3 className="font-display text-3xl text-white">Thank You</h3>
                <p className="text-navy-300 max-w-sm">
                  Your message has been received. A member of our team will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-navy-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-transparent border border-navy-700 text-white px-4 py-3
                                 focus:border-copper-500 focus:outline-none transition-colors duration-300
                                 placeholder:text-navy-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-navy-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      className="w-full bg-transparent border border-navy-700 text-white px-4 py-3
                                 focus:border-copper-500 focus:outline-none transition-colors duration-300
                                 placeholder:text-navy-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-navy-400 mb-2">
                    Project Budget
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full bg-navy-950 border border-navy-700 text-white px-4 py-3
                               focus:border-copper-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select a range</option>
                    <option value="500k-1m">$500K – $1M</option>
                    <option value="1m-5m">$1M – $5M</option>
                    <option value="5m-15m">$5M – $15M</option>
                    <option value="15m+">$15M+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-navy-400 mb-2">
                    Tell Us About Your Vision *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project, location, timeline..."
                    className="w-full bg-transparent border border-navy-700 text-white px-4 py-3
                               focus:border-copper-500 focus:outline-none transition-colors duration-300
                               placeholder:text-navy-600 resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Send Your Enquiry
                  <Send size={16} />
                </button>

                <p className="text-navy-500 text-xs text-center">
                  By submitting this form you agree to our privacy policy. We respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
