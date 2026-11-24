import { useEffect, useRef } from 'react'
export default function Effects() {
  const canvas = useRef(null), dot = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const c = canvas.current, ctx = c.getContext('2d'), mouse = { x: -999, y: -999 }
    const colors = ['#16D9E8', '#5427D9', '#E83EAE', '#246BFD']
    let w, h, raf, pts = []
    const resize = () => {
      w = c.width = innerWidth; h = c.height = innerHeight
      pts = Array.from({ length: Math.min(70, Math.floor(w / 18)) }, (_, i) => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3, r: Math.random() * 1.8 + .6, c: colors[i % 4] }))
    }
    const move = e => {
      mouse.x = e.clientX; mouse.y = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${e.clientX - 10}px,${e.clientY - 10}px)`
    }
    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 320)
      g.addColorStop(0, 'rgba(84,39,217,.22)'); g.addColorStop(1, 'rgba(84,39,217,0)')
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h)
      pts.forEach(p => {
        p.x = (p.x + p.vx + w) % w; p.y = (p.y + p.vy + h) % h
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fillStyle = p.c; ctx.globalAlpha = .7; ctx.fill(); ctx.globalAlpha = 1
      })
      raf = requestAnimationFrame(tick)
    }
    resize(); tick()
    addEventListener('resize', resize); addEventListener('mousemove', move)
    if (matchMedia('(hover:hover) and (pointer:fine)').matches) document.body.classList.add('has-cursor')
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); removeEventListener('mousemove', move); document.body.classList.remove('has-cursor') }
  }, [])
  return (
    <>
      <canvas ref={canvas} aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none" />
      <div ref={dot} aria-hidden="true" className="fixed top-0 left-0 z-[90] w-5 h-5 rounded-full pointer-events-none hidden [@media(hover:hover)]:block" style={{ border: '2px solid #16D9E8', boxShadow: '0 0 14px #16D9E8', transition: 'transform .08s linear' }} />
    </>
  )
}
