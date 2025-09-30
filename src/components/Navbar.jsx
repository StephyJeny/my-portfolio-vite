import React from 'react'
import { HiSun, HiMoon } from 'react-icons/hi2'
import { useTheme } from './ThemeWrapper'

export default function Navbar() {
  const { theme, setTheme } = useTheme() || {}
  // fallback to DOM if context not available
  const _theme = theme ?? (typeof window !== 'undefined' && localStorage.getItem('theme')) ?? 'light'
  const _setTheme = setTheme ?? ((t) => { localStorage.setItem('theme', t); document.documentElement.classList.toggle('dark', t === 'dark') })

  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-semibold">Stephanie Jeniffer</div>

        <nav className="hidden md:flex gap-4 items-center">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <button
            onClick={() => _setTheme(_theme === 'dark' ? 'light' : 'dark')}
            className="ml-4 p-2 rounded border border-gray-200 dark:border-gray-700"
            aria-label="Toggle theme"
          >
            {_theme === 'dark' ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
          </button>
        </nav>

        {/* mobile menu: simple anchor list */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => _setTheme(_theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded border border-gray-200 dark:border-gray-700"
            aria-label="Toggle theme"
          >
            {_theme === 'dark' ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  )
}
