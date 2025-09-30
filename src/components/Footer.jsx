import React from 'react'

export default function Footer() {
  return (
    <footer className="py-6 mt-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        <div>© {new Date().getFullYear()} Stephanie Jeniffer — Built with React & Tailwind</div>
        <div className="mt-2">
          <a href="https://github.com/StephyJeny" target="_blank" rel="noopener noreferrer" className="text-teal-500">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
