import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'
const links = [['home', 'Home'], ['about', 'About Me'], ['skills', 'Skills'], ['projects', 'Projects'], ['education', 'Education'], ['contact', 'Contact']]
export default function Navbar({ light, onToggle }) {
  const [active, setActive] = useState('home'), [open, setOpen] = useState(false), [solid, setSolid] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    links.forEach(([id]) => { const el = document.getElementById(id); el && obs.observe(el) })
    const s = () => setSolid(scrollY > 20); addEventListener('scroll', s); s()
    return () => { obs.disconnect(); removeEventListener('scroll', s) }
  }, [])
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${solid || open ? 'glass !rounded-none' : ''}`}>
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between" aria-label="Main">
        <a href="#home" className="grad-text font-display text-2xl font-extrabold tracking-widest">MRDV</a>
        <ul className="hidden md:flex gap-1">
          {links.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} aria-current={active === id ? 'page' : undefined} className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-cyan ${active === id ? 'text-cyan' : 'muted'}`}>
              {label}{active === id && <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded bg-gradient-to-r from-cyan to-magenta" />}
            </a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle light={light} onToggle={onToggle} />
          <button className="md:hidden glass p-2" onClick={() => setOpen(v => !v)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </nav>
      {open && <ul className="md:hidden px-5 pb-4 grid gap-1">{links.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 font-medium">{label}</a></li>)}</ul>}
    </header>
  )
}
