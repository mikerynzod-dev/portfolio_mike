import { useState } from 'react'
import { Mail, Facebook, Github, Loader2, Send } from 'lucide-react'
import Reveal from './Reveal.jsx'
const cards = [[Mail, 'Email', 'mikerynzod@gmail.com', 'mailto:mikerynzod@gmail.com'], [Facebook, 'Facebook', 'rynzozkie.delavega', 'https://www.facebook.com/rynzozkie.delavega/'], [Github, 'GitHub', 'mikerynzod-dev', 'https://github.com/mikerynzod-dev']]
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT // e.g. https://formspree.io/f/xxxxxxx
const empty = { name: '', email: '', subject: '', message: '' }
export default function Contact() {
  const [v, setV] = useState(empty), [err, setErr] = useState({}), [state, setState] = useState({ s: 'idle', m: '' })
  const set = k => e => setV({ ...v, [k]: e.target.value })
  async function submit(e) {
    e.preventDefault()
    const er = {}
    if (!v.name.trim()) er.name = 'Enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) er.email = 'Enter a valid email address.'
    if (!v.subject.trim()) er.subject = 'Enter a subject.'
    if (!v.message.trim()) er.message = 'Enter a message.'
    setErr(er)
    if (Object.keys(er).length) return
    if (!ENDPOINT) return setState({ s: 'error', m: 'The form is not connected yet, so nothing was sent. Set VITE_FORM_ENDPOINT (see README) or email mikerynzod@gmail.com directly.' })
    setState({ s: 'loading', m: '' })
    try {
      const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
      if (!r.ok) throw new Error('failed')
      setState({ s: 'success', m: 'Message sent. Thank you, I will reply soon.' }); setV(empty)
    } catch { setState({ s: 'error', m: 'The message could not be sent. Try again or email mikerynzod@gmail.com.' }) }
  }
  const field = (k, label, props = {}) => (
    <label className="block"><span className="text-sm font-bold">{label}</span>
      {k === 'message' ? <textarea rows="5" className="field mt-1" value={v[k]} onChange={set(k)} /> : <input className="field mt-1" value={v[k]} onChange={set(k)} {...props} />}
      {err[k] && <span className="block text-sm text-magenta" role="alert">{err[k]}</span>}
    </label>)
  return (
    <section id="contact" className="section">
      <Reveal><h2 className="title grad-text !mb-3">Let's Build Something Amazing!</h2><p className="muted max-w-xl mb-8">I'm always excited to learn, collaborate, and explore new opportunities in technology and design. Feel free to connect with me!</p></Reveal>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="grid gap-4 content-start">
          {cards.map(([Icon, t, label, href]) => (
            <Reveal key={t}><a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="glass glow-border p-5 flex items-center gap-4 transition-transform hover:-translate-y-1">
              <Icon className="text-cyan" /><span><b className="block">{t}</b><span className="muted text-sm">{label}</span></span>
            </a></Reveal>
          ))}
        </div>
        <Reveal><form onSubmit={submit} noValidate className="glass glow-border p-6 grid gap-4">
          {field('name', 'Full Name', { autoComplete: 'name' })}{field('email', 'Email Address', { type: 'email', autoComplete: 'email' })}{field('subject', 'Subject')}{field('message', 'Message')}
          <button className="btn btn-primary justify-center" disabled={state.s === 'loading'}>{state.s === 'loading' ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}{state.s === 'loading' ? 'Sending...' : 'Send Message'}</button>
          {state.m && <p role="status" className={state.s === 'success' ? 'text-cyan' : 'text-magenta'}>{state.m}</p>}
        </form></Reveal>
      </div>
    </section>
  )
}
