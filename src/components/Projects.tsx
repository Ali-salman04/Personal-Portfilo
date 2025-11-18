import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Derma AI",
      description:
        "An AI-powered healthcare web application that analyzes skin images to detect potential dermatological conditions. Features include user authentication, AI-based image analysis, dermatologist consultation booking, and an admin dashboard for data management.",
      image: "/derma-ai-preview.png",
      tech: ["React", "Node.js", "MongoDB", "TensorFlow", "AWS"],
      github: "https://github.com/yourusername/derma-ai",
      live: "http://3.85.113.8",
      featured: true
    },
 {
  title: "Nova Flights",
  description:
    "A modern flight booking web application built with Next.js, offering real-time flight search, booking management, and secure user authentication. Features include responsive design, dynamic filtering, and smooth user experience optimized for all devices.",
  image: "/starway-flights.jpg", // store image in your 'public' folder
  tech: ["Next.js", "MongoDB", "Tailwind CSS", "Node.js"],
  github: "https://github.com/Ali-salman04/Flight-Website", // replace with actual GitHub repo
  live: "https://flight-website-eight.vercel.app/", // replace with actual deployed link
  featured: true
}
,
    {
      title: "School Record Inventory",
      description: "Designed and developed a complete admin-user dashboard solution for a client, focusing on real-time data handling, secure role-based access, and seamless UI/UX across user types.",
      image: "/school-r.png",
      tech: ["React", "Chart.js", "Firebase", "Tailwind Css"],
      github: "https://github.com/Ali-salman04/School-Record-Inventory",
      live: "https://school-record-inventory-btgy.vercel.app/login",
      featured: false
    },
    {
      title: "Active Technology",
      description: "Proud to partner with Active Technology to build a clean, responsive Next.js website with Tailwind, dark mode, Lucide icons, and WhatsApp support  a fast and user-focused digital solution.",
      image: "/public/Untitled design.png",
      tech: ["Next.js", "Tailwind CSS", "Lucide", "WhatsApp chat integration"],
      github: "https://github.com/Ali-salman04/Active-Technology",
      live: "https://active-technology.vercel.app/",
      featured: false
    },
    {
      title: "Ru-Novel",
      description: "Ru-Novel is an online platform where users can read, write, and share novels, join forums, and access premium content through membership.",
      image: "/public/ru-nuvel.png",
      tech: ["React.js", "Cloudflare", "Stripe", ],
      github: "https://github.com",
      live: "https://ru-novel-i9jv.vercel.app/login", 
      featured: false
    },
    // {
    //   title: "Learning Management System",
    //   description: "A comprehensive LMS with course creation, progress tracking, video streaming, and interactive quizzes. Supports multiple user roles and permissions.",
    //   image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   tech: ["Angular", "Spring Boot", "MySQL", "AWS S3"],
    //   github: "https://github.com/Ali-salman04/Final-Year-Project-2024-2025-",
    //   live: "https://example.com",
    //   featured: false
    // }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-12"></div>
          
          <div className="text-center mb-16">
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development. 
              Each project demonstrates different aspects of modern web development.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="border-t border-gray-700 pt-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Other Projects
            </h3>
            
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/30 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gray-800 text-blue-400 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;