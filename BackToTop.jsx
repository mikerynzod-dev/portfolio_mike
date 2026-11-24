import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => { const f = () => setShow(scrollY > 600); addEventListener('scroll', f); return () => removeEventListener('scroll', f) }, [])
  return show ? <a href="#home" aria-label="Back to top" className="fixed bottom-5 right-5 z-40 btn btn-primary !p-3"><ArrowUp size={20} /></a> : null
}
