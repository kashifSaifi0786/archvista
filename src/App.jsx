import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Team from './components/Team'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full bg-copper-500 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Team />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
