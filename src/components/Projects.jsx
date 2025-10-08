import React from 'react'
import projects from './projects'

function Card({ p }) {
  // Handle client projects with multiple live URLs
  if (p.isClientProject && p.clientProjects) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col">
        <img src={p.image} alt={p.title} className="h-40 w-full object-cover rounded-md mb-3" />
        <h3 className="font-semibold">{p.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mt-2 flex-1">{p.description}</p>
        
        {/* Display both client projects with separate buttons */}
        <div className="mt-3 space-y-2">
          {p.clientProjects.map((project, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="flex-1">
                <h4 className="text-sm font-medium">{project.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{project.description}</p>
              </div>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-1 rounded bg-teal-500 text-white text-xs ml-2"
              >
                Live
              </a>
            </div>
          ))}
          
          {/* Code button (disabled for client projects) */}
          <div className="mt-2">
            <span className="px-3 py-2 rounded border text-sm text-gray-400 cursor-not-allowed">
              Code (Private)
            </span>
          </div>
        </div>
      </div>
    )
  }

  // Regular project card
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col">
      <img src={p.image} alt={p.title} className="h-40 w-full object-cover rounded-md mb-3" />
      <h3 className="font-semibold">{p.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-2 flex-1">{p.description}</p>
      <div className="mt-3 flex gap-2">
        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded bg-teal-500 text-white text-sm">Live</a>
        {p.repoUrl && (
          <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded border text-sm">Code</a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map(p => <Card p={p} key={p.id} />)}
        </div>
      </div>
    </section>
  )
}
