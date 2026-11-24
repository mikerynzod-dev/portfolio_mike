import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Database, GitBranch, Braces, Figma } from 'lucide-react'
import portrait from '../assets/images/portrait.png'
const roles = ['Computer Science Student', 'UI/UX Enthusiast', 'Web Development Learner', 'Creative Problem Solver']
const floaters = [[Code2, '8%', '12%', '#16D9E8'], [Palette, '88%', '20%', '#E83EAE'], [Database, '2%', '62%', '#246BFD'], [GitBranch, '92%', '66%', '#5427D9'], [Braces, '70%', '3%', '#16D9E8'], [Figma, '18%', '90%', '#E83EAE']]
function Typing() {
  const [i, setI] = useState(0), [n, setN] = useState(0), [del, setDel] = useState(false)
  useEffect(() => {
    const word = roles[i]
    const t = setTimeout(() => {
      if (!del && n < word.length) setN(n + 1)
      else if (!del) setDel(true)
      else if (n > 0) setN(n - 1)
      else { setDel(false); setI((i + 1) % roles.length) }
    }, !del && n === word.length ? 1400 : del ? 35 : 70)
    return () => clearTimeout(t)
  }, [n, del, i])
  return <span className="grad-text font-bold">{roles[i].slice(0, n)}<span className="text-cyan">|</span></span>
}
export default function Hero() {
  return (
    <section id="home" className="min-h-screen max-w-6xl mx-auto px-5 pt-24 pb-12 grid md:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.7 }}>
        <p className="text-cyan font-bold tracking-widest text-sm mb-3">HELLO, I'M MIKE RYNZO</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">Mike Rynzo L. Dela Vega</h1>
        <p className="mt-3 text-xl muted">Computer Science Student &amp; Aspiring UI/UX Designer</p>
        <p className="mt-2 text-lg h-8"><Typing /></p>
        <h2 className="mt-6 text-2xl sm:text-3xl font-bold grad-text">Turning Ideas Into Digital Experiences.</h2>
        <p className="mt-4 muted max-w-lg leading-relaxed">I'm Mike Rynzo L. Dela Vega, a Computer Science student passionate about technology, programming, web development, and creative UI/UX design. I enjoy transforming ideas into beautiful, functional, and user-friendly digital experiences.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary">Explore My Projects</a>
          <a href="#contact" className="btn glass">Let's Connect</a>
        </div>
      </motion.div>
      <div className="relative mx-auto w-full max-w-md aspect-square grid place-items-center">
        <div className="absolute inset-4 rounded-full blur-2xl opacity-70" style={{ background: 'conic-gradient(from 90deg,#5427D9,#246BFD,#16D9E8,#E83EAE,#5427D9)' }} />
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.3, duration: 0.8 }} className="relative w-3/4 aspect-square rounded-full p-1" style={{ background: 'linear-gradient(135deg,#16D9E8,#5427D9,#E83EAE)', boxShadow: '0 0 60px rgba(84,39,217,.6)' }}>
          <img src={portrait} alt="Portrait of Mike Rynzo L. Dela Vega in a black suit" className="w-full h-full rounded-full object-cover" style={{ objectPosition: '50% 18%' }} />
        </motion.div>
        {floaters.map(([Icon, l, t, c], k) => (
          <motion.div key={k} aria-hidden="true" className="absolute glass p-3" style={{ left: l, top: t, color: c, boxShadow: `0 0 18px ${c}55` }} animate={{ y: [0, -12, 0] }} transition={{ duration: 3 + k * 0.4, repeat: Infinity, ease: 'easeInOut' }}><Icon size={22} /></motion.div>
        ))}
        <div className="absolute -bottom-2 left-0 right-0 hidden sm:flex flex-wrap justify-center gap-2 text-xs font-medium">
          {['Computer Science Student', 'UI/UX Enthusiast', 'Aspiring Web Developer', 'Creative Problem Solver'].map(t => <span key={t} className="glass px-3 py-1">{t}</span>)}
        </div>
      </div>
    </section>
  )
}
