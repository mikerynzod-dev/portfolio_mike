import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { skillGroups } from '../data/skills.js'
export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal><h2 className="title grad-text">My Technical Skills</h2></Reveal>
      <div className="grid sm:grid-cols-2 gap-6">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.08}>
            <div className="glass glow-border p-6 h-full">
              <h3 className="text-xl font-bold mb-4" style={{ color: g.color }}>{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map(s => (
                  <motion.li key={s} whileHover={{ y: -4, scale: 1.05 }} className="px-3 py-1.5 rounded-full text-sm font-medium" style={{ border: `1px solid ${g.color}`, boxShadow: `0 0 12px ${g.color}33` }}>{s}</motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
