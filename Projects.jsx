import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { categories, projects } from '../data/projects.js'
function Links({ p }) {
  const b = (href, icon, label) => href
    ? <a href={href} target="_blank" rel="noopener noreferrer" className="btn glass !py-2 text-sm">{icon}{label}</a>
    : <span className="btn !py-2 text-sm opacity-40" aria-disabled="true">{icon}{label} (soon)</span>
  return <div className="flex flex-wrap gap-2 mt-4">{b(p.demo, <ExternalLink size={14} />, 'View Project')}{b(p.repo, <Github size={14} />, 'Source Code')}</div>
}
export default function Projects() {
  const [cat, setCat] = useState('All'), [sel, setSel] = useState(null)
  const list = projects.filter(p => cat === 'All' || p.category === cat)
  useEffect(() => { const k = e => e.key === 'Escape' && setSel(null); addEventListener('keydown', k); return () => removeEventListener('keydown', k) }, [])
  return (
    <section id="projects" className="section">
      <Reveal><h2 className="title grad-text">My Creative Projects</h2></Reveal>
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Project categories">
        {categories.map(c => <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)} className={`btn !py-2 text-sm ${cat === c ? 'btn-primary' : 'glass'}`}>{c}</button>)}
      </div>
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {list.map(p => (
            <motion.article layout key={p.id} initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .95 }} className="glass glow-border overflow-hidden group">
              <button onClick={() => setSel(p)} className="block w-full text-left" aria-label={`Open details for ${p.title}`}>
                <div className="h-40 overflow-hidden"><div className="h-full grid place-items-center text-sm transition-transform duration-500 group-hover:scale-110 text-white" style={{ background: 'linear-gradient(135deg,#5427D9,#246BFD 50%,#E83EAE)' }}><span className="px-3 py-1 rounded-full bg-black/30">Preview image placeholder</span></div></div>
                <div className="p-5 pb-0"><p className="text-xs text-cyan font-bold">{p.category}</p><h3 className="text-lg font-bold mt-1">{p.title}</h3><p className="muted text-sm mt-1">{p.description}</p></div>
              </button>
              <div className="px-5 pb-5"><Links p={p} /></div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {sel && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] grid place-items-center p-5 bg-black/70" onClick={() => setSel(null)}>
            <div role="dialog" aria-modal="true" aria-label={sel.title} onClick={e => e.stopPropagation()} className="glass glow-border p-6 max-w-lg w-full" style={{ background: 'var(--bg2)' }}>
              <div className="flex justify-between items-start"><div><p className="text-xs text-cyan font-bold">{sel.category}</p><h3 className="text-2xl font-bold">{sel.title}</h3></div><button onClick={() => setSel(null)} aria-label="Close"><X /></button></div>
              <p className="muted mt-3">{sel.description}</p>
              <p className="mt-3 text-sm"><b>Technologies:</b> {sel.tech.length ? sel.tech.join(', ') : 'Add technologies in src/data/projects.js'}</p>
              <Links p={sel} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
