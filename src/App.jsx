import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeWrapper from './components/ThemeWrapper'

export default function App() {
  return (
    <ThemeWrapper>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeWrapper>
  )
}
