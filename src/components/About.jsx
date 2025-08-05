import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaRocket, FaUsers } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code that follows best practices.'
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with focus on user experience.'
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and smooth user interactions.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Working effectively in teams, mentoring others, and sharing knowledge.'
    }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A passionate frontend engineer with expertise in modern web technologies and a keen eye for design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a dedicated frontend engineer with over 5 years of experience building 
                modern web applications. My journey in web development started with a curiosity 
                about how websites work, which evolved into a passion for creating exceptional 
                user experiences.
              </p>
              <p>
                I specialize in React, TypeScript, and modern CSS frameworks, always staying 
                up-to-date with the latest industry trends and best practices. My approach 
                combines technical expertise with creative problem-solving to deliver solutions 
                that not only work flawlessly but also delight users.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-dark-100 rounded-lg">
                <div className="text-2xl font-bold text-primary-400">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-dark-100 rounded-lg">
                <div className="text-2xl font-bold text-primary-400">50+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-dark-100 rounded-lg hover:bg-dark-200 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <feature.icon className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 