import { Mail, Facebook, Github } from 'lucide-react'
const nav = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact']
export default function Footer() {
  const ext = { target: '_blank', rel: 'noopener noreferrer' }
  return (
    <footer className="border-t" style={{ borderColor: 'var(--bd)', background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto px-5 py-10 grid md:grid-cols-3 gap-8">
        <div><p className="grad-text font-display text-3xl font-extrabold tracking-widest">MRDV</p><p className="font-medium mt-1">Mike Rynzo L. Dela Vega</p><p className="muted text-sm">Turning Ideas Into Digital Experiences.</p></div>
        <nav aria-label="Footer"><ul className="grid grid-cols-2 gap-2 text-sm">{nav.map(n => <li key={n}><a className="muted hover:text-cyan" href={`#${n.toLowerCase()}`}>{n}</a></li>)}</ul></nav>
        <div className="flex gap-3 md:justify-end items-start">
          <a className="glass p-3 hover:text-cyan" href="mailto:mikerynzod@gmail.com" aria-label="Email"><Mail size={18} /></a>
          <a className="glass p-3 hover:text-cyan" href="https://www.facebook.com/rynzozkie.delavega/" {...ext} aria-label="Facebook"><Facebook size={18} /></a>
          <a className="glass p-3 hover:text-cyan" href="https://github.com/mikerynzod-dev" {...ext} aria-label="GitHub"><Github size={18} /></a>
        </div>
      </div>
      <p className="text-center muted text-sm pb-6">© 2026 Mike Rynzo L. Dela Vega. All Rights Reserved.</p>
    </footer>
  )
}
