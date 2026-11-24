import { AnimatePresence, motion } from 'framer-motion'
export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="fixed inset-0 z-[100] grid place-items-center" style={{ background: '#080D20' }} role="status" aria-label="Loading">
          <motion.h1 initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="grad-text text-6xl font-extrabold tracking-widest">MRDV</motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
