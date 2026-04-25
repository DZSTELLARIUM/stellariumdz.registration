import { Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10 py-4 px-8 flex justify-between items-center h-16">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3"
      >
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(240,192,64,0.4)]">
          <span className="text-background text-2xl">⭐</span>
        </div>
        <span className="text-primary text-2xl font-bold tracking-tight font-amiri" style={{ fontFamily: 'Georgia, serif' }}>Stellarium DZ</span>
      </motion.div>

      <motion.a
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="mailto:dzstellarium@gmail.com?subject=استفسار — Stellarium DZ"
        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-full hover:bg-white/10 transition-colors shadow-sm"
      >
        <span className="text-lg">✉️</span>
        <span className="text-sm font-medium">تواصل معنا</span>
      </motion.a>
    </header>
  );
}
