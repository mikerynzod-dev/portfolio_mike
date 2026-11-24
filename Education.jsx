import { GraduationCap } from 'lucide-react'
import Reveal from './Reveal.jsx'
const steps = [
  { school: 'Tangub City Global College, Maloro, Tangub City', what: 'Bachelor of Science in Computer Science', when: '2025 - Present', note: 'Relevant coursework, achievements, and milestones: add them in src/components/Education.jsx.' },
  { school: 'Jimenez Bethel Institute', what: 'Secondary education, STEM', when: '2021 - 2022' },
  { school: 'Taboo Integrated School', what: 'Primary education', when: '2017 - 2018' }
]
export default function Education() {
  return (
    <section id="education" className="section">
      <Reveal><h2 className="title grad-text">My Academic Journey</h2></Reveal>
      <ol className="relative border-l-2 ml-5 grid gap-10" style={{ borderColor: '#5427D9' }}>
        {steps.map((s, i) => (
          <li key={s.school} className="pl-8 relative">
            <span className="absolute -left-[22px] top-0 w-10 h-10 rounded-full grid place-items-center text-white" style={{ background: 'linear-gradient(135deg,#5427D9,#E83EAE)', boxShadow: '0 0 20px #5427D9' }}><GraduationCap size={18} /></span>
            <Reveal delay={i * 0.08}>
              <div className="glass glow-border p-5">
                <p className="text-cyan text-sm font-bold">{s.when}</p>
                <h3 className="text-xl font-bold">{s.what}</h3>
                <p className="muted">{s.school}</p>
                {s.note && <p className="muted text-sm mt-3 italic">{s.note}</p>}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
