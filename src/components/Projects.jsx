import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs, FaCss3Alt } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiVite, SiNextdotjs, SiMongodb } from 'react-icons/si'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
      icons: [FaReact, SiTypescript, FaJs, SiMongodb],
      github: 'https://github.com',
      live: 'https://example.com',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A modern task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      icons: [FaReact, SiTypescript, SiTailwindcss],
      github: 'https://github.com',
      live: 'https://example.com',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern animations and smooth interactions.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      icons: [FaReact, SiVite, SiTailwindcss],
      github: 'https://github.com',
      live: 'https://example.com',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application with real-time data, interactive maps, and detailed forecasts using multiple weather APIs.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop',
      technologies: ['React', 'JavaScript', 'CSS3', 'Weather API'],
      icons: [FaReact, FaJs, FaCss3Alt],
      github: 'https://github.com',
      live: 'https://example.com',
      category: 'frontend'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A content management system for blogs with markdown support, SEO optimization, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
      icons: [SiNextdotjs, SiTypescript, SiMongodb, SiTailwindcss],
      github: 'https://github.com',
      live: 'https://example.com',
      category: 'fullstack'
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing social media accounts with analytics, scheduling, and content planning.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      icons: [FaReact, FaJs, SiMongodb],
      github: 'https://github.com',
      live: 'https://example.com',
      category: 'fullstack'
    }
  ]

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Full Stack', value: 'fullstack' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A collection of my recent work showcasing different technologies and problem-solving approaches.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-4">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-100 text-gray-300 hover:bg-dark-200'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-100 rounded-lg overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200/80 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex items-center space-x-2 mb-4">
                  {project.icons.map((Icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="w-8 h-8 bg-dark-200 rounded-lg flex items-center justify-center"
                    >
                      <Icon className="text-gray-400 text-sm" />
                    </div>
                  ))}
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-600/20 text-primary-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FaGithub size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FaExternalLinkAlt size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-secondary">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 