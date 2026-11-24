import { useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen.jsx'
import Effects from './components/Effects.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  const [light, setLight] = useState(() => localStorage.getItem('mrdv-theme') === 'light')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    document.documentElement.classList.toggle('light', light)
    localStorage.setItem('mrdv-theme', light ? 'light' : 'dark')
  }, [light])
  useEffect(() => { const t = setTimeout(() => setLoading(false), 1400); return () => clearTimeout(t) }, [])
  return (
    <MotionConfig reducedMotion="user">
      <LoadingScreen show={loading} />
      <Effects />
      <Navbar light={light} onToggle={() => setLight(v => !v)} />
      <main>
        <Hero /><About /><Skills /><Projects /><Education /><Contact />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}
