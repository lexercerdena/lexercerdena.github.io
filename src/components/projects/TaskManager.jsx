import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaReact } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss } from 'react-icons/si'

const TaskManager = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative h-56 md:h-72 w-full overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&h=900&fit=crop"
              alt="Task Management App banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-dark-300/90 via-dark-200/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white">Task Management App</h1>
              <p className="text-gray-300 mt-2 max-w-2xl">
                Modern kanban-style tasking with drag-and-drop, real-time updates, and team collaboration.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-4 mb-10"
        >
          <a href="#/" className="btn-secondary">← Back to Portfolio</a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FaGithub size={16} /> Code
          </a>
          <a
            href="#/projects/task-manager"
            className="btn-tertiary inline-flex items-center gap-2"
          >
            <FaExternalLinkAlt size={14} /> Live Demo
          </a>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-12"
        >
          <div className="lg:col-span-2 bg-dark-100 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              The app enables teams to create projects, boards, and tasks, with drag-and-drop columns,
              mentions, due dates, and labels. It uses optimistic UI and motion transitions for a
              smooth experience.
            </p>
          </div>
          <div className="bg-dark-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'React', Icon: FaReact },
                { label: 'TypeScript', Icon: SiTypescript },
                { label: 'Tailwind CSS', Icon: SiTailwindcss },
                { label: 'Framer Motion', Icon: FaReact },
              ].map(({ label, Icon }) => (
                <span key={label} className="px-3 py-1 bg-primary-600/20 text-primary-400 text-xs rounded-full inline-flex items-center gap-2">
                  <Icon className="text-primary-400" /> {label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-dark-100 rounded-xl p-6 mb-12"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-300 list-disc list-inside">
            <li>Drag-and-drop kanban with keyboard accessibility</li>
            <li>Task details: assignees, labels, due dates, attachments</li>
            <li>Project and board permissions for teams</li>
            <li>Real-time updates ready (via web sockets or polling)</li>
            <li>Global search and quick actions</li>
            <li>Mobile-responsive layout and gestures</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default TaskManager


