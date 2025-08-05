import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Frontend Engineer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices for code quality and performance.',
      achievements: [
        'Led a team of 5 developers in building a complex dashboard application',
        'Improved application performance by 40% through code optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored 3 junior developers and conducted code reviews'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and collaborated with design and backend teams to deliver high-quality user experiences.',
      achievements: [
        'Built 3 major features that increased user engagement by 25%',
        'Reduced bundle size by 30% through code splitting and optimization',
        'Implemented accessibility features improving WCAG compliance',
        'Collaborated with UX team to improve user interface design'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Git', 'REST APIs']
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'Digital Agency ABC',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: 'Started my professional journey building websites and web applications for various clients across different industries.',
      achievements: [
        'Developed 15+ client websites with responsive design',
        'Learned modern JavaScript frameworks and build tools',
        'Worked with clients to understand requirements and deliver solutions',
        'Contributed to open-source projects and attended tech meetups'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'WordPress']
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            My professional journey in web development, from junior developer to senior engineer.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-transparent transform -translate-x-1/2"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-8 md:pl-0' : 'md:pl-8 md:pr-0'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-dark-200 ${
                index % 2 === 0 
                  ? 'left-2 md:left-1/2 md:transform md:-translate-x-1/2' 
                  : 'left-2 md:left-1/2 md:transform md:-translate-x-1/2'
              }`}></div>

              {/* Content Card */}
              <div className={`bg-dark-100 rounded-lg p-6 ml-8 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {experience.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <FaBriefcase size={12} />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaMapMarkerAlt size={12} />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaCalendarAlt size={12} />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-gray-400 text-sm flex items-start space-x-2">
                        <span className="text-primary-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-600/20 text-primary-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Education
          </h3>
          <div className="bg-dark-100 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-2">
                Bachelor of Science in Computer Science
              </h4>
              <p className="text-gray-400 mb-2">University of Technology</p>
              <p className="text-gray-400 text-sm">2015 - 2019</p>
              <p className="text-gray-300 mt-4">
                Graduated with honors. Focused on web development, algorithms, and software engineering principles.
                Completed capstone project on modern web application development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 