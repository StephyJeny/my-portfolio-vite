import React from 'react'

export default function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Git/GitHub']
  return (
    <section id="skills" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {skills.map(s => <span key={s} className="px-3 py-1.5 bg-white dark:bg-gray-900 border rounded-md text-sm">{s}</span>)}
        </div>
      </div>
    </section>
  )
}
