import React from 'react'

export default function Skills() {
  const skills = [
    // Frontend Technologies
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'JSX',
    
    // Styling & UI
    'Tailwind CSS', 'PostCSS', 'Responsive Design', 'Dark Mode',
    
    // Build Tools & Development
    'Vite', 'ESLint', 'Git/GitHub', 'Node.js', 'npm',
    
    // React Ecosystem
    'React Hooks', 'Context API', 'Component Architecture',
    
    // Development Practices
    'Progressive Web Apps', 'Local Storage', 'Modern JavaScript (ES6+)',
    
    // Deployment & Tools
    'Vercel', 'GitHub Pages', 'Module Bundling'
  ]
  
  return (
    <section id="skills" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {skills.map(s => (
            <span 
              key={s} 
              className="px-3 py-1.5 bg-white dark:bg-gray-900 border rounded-md text-sm hover:bg-teal-50 dark:hover:bg-gray-700 transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
