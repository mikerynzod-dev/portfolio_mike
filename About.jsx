import Reveal from './Reveal.jsx'
const info = [['Full Name', 'Mike Rynzo L. Dela Vega'], ['Course', 'Bachelor of Science in Computer Science'], ['Interests', 'UI/UX Design, Programming, Web Development, Technology'], ['Career Goal', 'To become a skilled technology professional and creative developer.']]
export default function About() {
  return (
    <section id="about" className="section">
      <Reveal><h2 className="title grad-text">Get to Know Me</h2></Reveal>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Reveal><p className="muted text-lg leading-relaxed">I'm a passionate Computer Science student who loves exploring technology and creating meaningful digital experiences. I enjoy learning new programming languages, designing creative interfaces, and developing solutions that combine functionality and innovation.</p></Reveal>
        <Reveal delay={0.1}>
          <dl className="glass glow-border p-6 grid gap-4">
            {info.map(([k, v]) => <div key={k}><dt className="text-cyan text-sm font-bold">{k}</dt><dd className="mt-0.5">{v}</dd></div>)}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
