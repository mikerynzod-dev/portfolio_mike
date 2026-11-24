import { Moon, Sun } from 'lucide-react'
export default function ThemeToggle({ light, onToggle }) {
  return (
    <button onClick={onToggle} className="glass p-2" aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}>
      {light ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}
