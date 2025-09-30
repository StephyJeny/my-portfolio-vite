import React from 'react'
import heroImg from '../assets/hero.png'

export default function Hero() {
  return (
    <section id="hero" className="pt-12 pb-20">
      <div className="grid md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I’m <span className="text-teal-500">Stephanie Jeniffer</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
            I build modern, fast, and responsive web apps using React and Tailwind CSS.
            I work with clients to ship clean, maintainable web experiences.
          </p>

          <div className="mt-6 flex gap-3">
            <a href="#projects" className="inline-block px-5 py-3 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600">See Projects</a>
            <a href="#contact" className="inline-block px-5 py-3 border rounded-lg">Contact Me</a>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <div>Email: <a href="mailto:thejennystefprojects@gmail.com" className="text-teal-500">thejennystefprojects@gmail.com</a></div>
            <div>Phone: <a href="tel:+254707478416" className="text-teal-500">+254 707 478 416</a></div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg min-h-[220px] bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
          <img src={heroImg} alt="hero" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
