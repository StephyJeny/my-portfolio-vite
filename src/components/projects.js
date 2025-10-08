import projectRestaurant from '../assets/project-restaurant.png'
import projectDashboard from '../assets/project-dashboard.png'
import projectLoyaltyProgram from '../assets/project-loyalty-program.png'
import projectRecipeFinder from '../assets/project-recipe-finder.png'

const projects = [
  {
    id: 1,
    title: "Restaurant Landing Page (HTML+CSS)",
    description: "A responsive restaurant landing page with menu, gallery, and contact form.",
    liveUrl: "https://stephyjeny.github.io/html-css-project/",
    repoUrl: "https://github.com/StephyJeny/html-css-project",
    image: projectRestaurant
  },
  {
    id: 2,
    title: "Personal Finance Dashboard",
    description: "React + Tailwind dashboard demo showing transactions and charts.",
    liveUrl: "https://stephyjeny.github.io/react-tailwind-project/",
    repoUrl: "https://github.com/StephyJeny/react-tailwind-project",
    image: projectDashboard
  },
  {
    id: 3,
    title: "Client Projects Portfolio",
    description: "Professional applications developed for clients including a Loyalty Program PWA and African Cotton marketplace. Note: Live access may be restricted as these are client projects - showcasing through screenshots.",
    clientProjects: [
      {
        name: "Loyalty Program PWA",
        url: "https://loyalty-program-web-three.vercel.app",
        description: "Comprehensive Progressive Web App for customer loyalty management featuring points system, warranty registration, barcode scanning, real-time notifications, and offline functionality. Built with modern full-stack technologies including Next.js, Firebase, and advanced PWA features.",
        techStack: [
          // Frontend Technologies & Frameworks
          "Next.js 14.2.5", "React 18.3.1", "React DOM 18.3.1",
          
          // Styling & UI
          "Tailwind CSS 3.4.0", "PostCSS 8.5.6", "Autoprefixer 10.4.21", "Lucide React 0.525.0",
          
          // UI Components & Libraries
          "React Select 5.10.2", "React DatePicker 8.4.0", "React Hot Toast 2.5.2",
          
          // Data Visualization & Charts
          "Recharts 3.1.0", "Chart.js 4.5.0", "React Chart.js 2 5.3.0", "D3 7.9.0",
          
          // Backend & Database
          "Firebase 11.10.0", "Firebase Admin 13.4.0", "Firestore", "Firebase Storage", "Firebase Authentication",
          
          // Progressive Web App Features
          "Service Worker", "Web App Manifest", "Push Notifications", "Firebase Cloud Messaging (FCM)", "App Installation",
          
          // Communication Services
          "Africa's Talking 0.7.3", "Twilio 5.7.3", "Nodemailer 7.0.5",
          
          // Barcode & QR Code Scanning
          "@zxing/browser 0.1.5", "@zxing/library 0.21.3", "html5-qrcode 2.3.8",
          
          // Utility Libraries
          "Lodash 4.17.21", "Date-fns 4.1.0",
          
          // Development Tools
          "ESLint", "Rimraf 6.0.1", "Turbopack",
          
          // Authentication & Security
          "Custom Authentication Context", "JWT Tokens", "PIN-based Authentication", "Protected Routes",
          
          // State Management & API
          "React Context API", "Custom Hooks", "Local Storage", "RESTful API", "Fetch API",
          
          // Mobile & Cross-Platform
          "Responsive Design", "Touch Gestures", "Camera Integration", "Offline Support", "iOS/Android PWA Support",
          
          // Business Logic Features
          "Loyalty Points System", "Warranty Registration", "Sales Team Management", "Document Upload", 
          "Notification System", "Reporting & Analytics",
          
          // Deployment & Performance
          "Vercel", "Webpack", "Caching Strategies", "Code Splitting"
        ]
      },
      {
        name: "African Cotton Marketplace",
        url: "https://african-cotton-v20.vercel.app",
        description: "Modern e-commerce platform for African cotton products built with Remix and TypeScript. Features server-side rendering, responsive design, structured data for SEO, and performance monitoring. Showcases advanced frontend development with type safety and modern build tools.",
        techStack: [
          // Frontend Technologies & Frameworks
          "Remix", "React 18", "TypeScript",
          
          // Styling & UI
          "Tailwind CSS", "PostCSS", "Autoprefixer", "Framer Motion", "Custom CSS",
          
          // Icons & Graphics
          "Lucide React",
          
          // Build Tools & Development Environment
          "Vite", "Node.js v18+", "npm",
          
          // Code Quality & Linting
          "ESLint", "Remix ESLint Config", "TypeScript Compiler",
          
          // Deployment & Hosting
          "Vercel", "Vercel Analytics",
          
          // Data Management
          "JSON", "Custom Data Utils",
          
          // SEO & Performance
          "Schema.org Structured Data", "JSON-LD", "Meta Tags", "Responsive Design",
          
          // Development Skills
          "Component-based Architecture", "React Hooks", "Modern CSS Techniques", "Animation & Micro-interactions",
          
          // TypeScript/JavaScript
          "Modern ES6+ JavaScript", "TypeScript Interfaces", "ESM Modules", "Async/Await", "Event Handling",
          
          // Web Development Best Practices
          "File-based Routing", "SEO Optimization", "Performance Optimization", "Accessibility", "Cross-browser Compatibility",
          
          // Build & Deployment
          "Modern Build Pipeline", "Environment Configuration", "Package Management", "Git Version Control", "Continuous Deployment",
          
          // Advanced Features
          "Server-Side Rendering (SSR)", "Progressive Enhancement", "Type Safety", "Modern Routing", "Performance Monitoring"
        ]
      }
    ],
    liveUrl: "https://loyalty-program-web-three.vercel.app", // Primary URL for the card
    repoUrl: null, // Client projects - repos not public
    image: projectLoyaltyProgram,
    isClientProject: true
  },
  {
    id: 4,
    title: "Recipe Finder App",
    description: "Full-stack React application featuring RESTful API integration, React Router for SPA navigation, Context API for theme management, and responsive design with Tailwind CSS. Implements modern JavaScript (ES6+), async/await patterns, localStorage for user preferences, mobile-first responsive design, and error handling. Built with Vite, deployed via GitHub Pages with CI/CD workflows.",
    liveUrl: "https://stephyjeny.github.io/recipe-finder/",
    repoUrl: "https://github.com/StephyJeny/recipe-finder",
    image: projectRecipeFinder,
    techStack: [
      "React.js", "JavaScript (ES6+)", "React Router", "Context API", 
      "Tailwind CSS", "RESTful APIs", "Vite", "GitHub Pages", "localStorage"
    ]
  }
]

export default projects
