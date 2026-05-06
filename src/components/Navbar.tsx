import { motion } from 'motion/react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0B0F1A]/90 backdrop-blur-md border-b border-zinc-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase">
              HS<span className="text-indigo-500">.</span>DATA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                id={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-1.5 border border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-900 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-600 dark:text-slate-400 hover:bg-zinc-100 dark:hover:bg-slate-800 transition-colors"
              id="theme-toggle-desktop"
              aria-label="Toggle theme"
            >
              <div className={`w-2 h-2 rounded-full ${theme === 'light' ? 'bg-amber-400' : 'bg-indigo-500'}`}></div>
              <span>{theme === 'light' ? 'Light' : 'Dark'} Mode</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
              id="theme-toggle-mobile"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-zinc-600 dark:text-zinc-400"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
