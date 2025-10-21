import React from 'react'

export default function Skills() {
  const skills = [
    // Frontend Technologies
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'JSX', 'Next.js', 'Remix',
    
    // Styling & UI
    'Tailwind CSS', 'PostCSS', 'Responsive Design', 'Dark Mode', 'Framer Motion', 'Custom CSS',
    
    // Build Tools & Development
    'Vite', 'ESLint', 'Git/GitHub', 'Node.js', 'npm', 'Webpack', 'Turbopack', 'Autoprefixer',
    
    // React Ecosystem & State Management
    'React Hooks', 'Context API', 'Component Architecture', 'React Router', 'React Select', 'React Hot Toast',
    
    // Backend & Database
    'Firebase', 'Firestore', 'Firebase Authentication', 'Firebase Storage',
    
    // API & HTTP
    'RESTful APIs', 'Axios', 'Fetch API', 'JWT Tokens',
    
    // Data Visualization & Charts
    'Recharts', 'Chart.js', 'D3',
    
    // Form Handling & Validation
    'React Hook Form', 'Zod', 'Real-time Validation',
    
    // Authentication & Security
    'Session Management', 'Protected Routes', 'Input Sanitization',
    
    // PWA & Mobile Features
    'Progressive Web Apps', 'Service Worker', 'Push Notifications', 'Offline Support',
    
    // Communication & Services
    'Nodemailer', 'Twilio', 'Email Integration',
    
    // Scanning & Hardware
    'Barcode Scanning', 'QR Code Scanning', 'Camera Integration',
    
    // Development Practices
    'Local Storage', 'Modern JavaScript (ES6+)', 'TypeScript Interfaces', 'Async/Await',
    
    // SEO & Performance
    'SEO Optimization', 'Server-Side Rendering (SSR)', 'Performance Optimization', 'Code Splitting',
    
    // Deployment & DevOps
    'Vercel', 'GitHub Pages', 'GitHub Actions', 'Environment Variables', 'Module Bundling',
    
    // UI Libraries & Icons
    'Heroicons', 'Lucide React', 'Custom Components',
    
    // Utility Libraries
    'Lodash', 'date-fns', 'JSON-LD'
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
