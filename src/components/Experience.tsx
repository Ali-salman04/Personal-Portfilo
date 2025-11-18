import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Full Stack Developer (MERN)",
      company: "Upwork",
      location: "Remote",
      period: "2024 - Present",
      description: [
        "Developed and maintained scalable full-stack web applications using MERN stack",
        "Integrated RESTful APIs and optimized backend performance for faster data handling",
        "Built responsive, user-friendly UIs ensuring seamless user experience across devices",
        "Collaborated with clients globally to deliver tailored solutions meeting business goals"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"]
    },
    {
      title: "React.js Developer",
      company: "DMZ Dev Hub",
      location: "Lahore, Pakistan", 
      period: "2024 - 2025",
      description: [
        "Built responsive web applications using React and modern CSS frameworks",
        "Collaborated with UI/UX designers to implement pixel-perfect designs",
        "Improved code quality by implementing testing frameworks",
        "Contributed to open-source projects and technical documentation"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Jest", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-12"></div>
          
          <div className="text-center mb-16">
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              My professional journey in software development, where I've had the opportunity 
              to work on diverse projects and continuously expand my technical expertise.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-gray-900"></div>
                
                {/* Content */}
                <div className="ml-20 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 lg:mb-0">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-center gap-2 text-blue-400 mb-2 lg:mb-0">
                      <Building size={18} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-gray-400">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-900 text-blue-400 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-20 pt-16 border-t border-gray-700">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Education 
            </h3>
            
            <div className="flex justify-center">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 max-w-md text-center">
                <h4 className="text-xl font-bold text-white mb-2">
                  Bachelor of Software Engineering
                </h4>
                <p className="text-blue-400 mb-4">University of Management and Technology (UMT), Lahore • 2021 - 2025</p>
                {/* <p className="text-gray-300">
                  Specialized in Full Stack Web Development and Modern Web Technologies.
                  Graduated with distinction and completed final year project on web application security.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;