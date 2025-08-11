import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, 
  FaDocker, FaAws, FaFigma, FaSass, FaNpm, FaPhp
} from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiVite, SiNextdotjs, SiMongodb, SiPostgresql, SiAdobephotoshop } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, level: 50, color: '#61DAFB' },
        { name: 'JavaScript', icon: FaJs, level: 80, color: '#F7DF1E' },
        { name: 'HTML5', icon: FaHtml5, level: 90, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, level: 85, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 70, color: '#06B6D4' },
      ]
    },
    {
      title: 'Tools & Build',
      skills: [
        { name: 'Vite', icon: SiVite, level: 50, color: '#646CFF' },
        { name: 'Next.js', icon: SiNextdotjs, level: 40, color: '#000000' },
        { name: 'GitHub', icon: FaGithub, level: 75, color: '#181717' },
        { name: 'npm', icon: FaNpm, level: 65, color: '#CB3837' },
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 50, color: '#339933' },
        { name: 'PHP', icon: FaPhp, level: 75, color: '#777BB4' },
        { name: 'MongoDB', icon: SiMongodb, level: 50, color: '#47A248' },
      ]
    },
    {
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', icon: FaFigma, level: 75, color: '#F24E1E' },
        { name: 'Photoshop', icon: SiAdobephotoshop, level: 65, color: '#31A8FF' },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A comprehensive set of technical skills and tools I use to build modern web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-100 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${skill.color}20` }}
                        >
                          <skill.icon 
                            size={16} 
                            style={{ color: skill.color }}
                          />
                        </div>
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-primary-400 text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-dark-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Additional Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'REST APIs', 'Testing Library', 'Responsive Design', 'Accessibility', 'SEO', 'CMS'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-dark-100 rounded-lg p-4 text-center hover:bg-dark-200 transition-colors duration-300"
              >
                <span className="text-gray-300 text-sm font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 