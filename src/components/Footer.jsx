import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-200 border-t border-dark-100">
      <div className="container-custom">
        <div className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Logo and Tagline */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Frontend Engineer
              </h3>
              <p className="text-gray-400">
                Crafting exceptional digital experiences
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center space-x-8 mb-8">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="border-t border-dark-100 pt-8">
              <p className="text-gray-400 text-sm">
                © {currentYear} Frontend Engineer. All rights reserved. Made with{' '}
                <FaHeart className="inline text-red-500 mx-1" />
                using React, Vite, and Tailwind CSS.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 