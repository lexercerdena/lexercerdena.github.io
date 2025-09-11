import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStripe, FaReact } from 'react-icons/fa'
import { SiMongodb, SiNodedotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'

const Ecommerce = () => {
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
              src="https://images.unsplash.com/photo-1557825835-70d97c4aa567?w=1600&h=900&fit=crop"
              alt="E-Commerce Platform banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-dark-300/90 via-dark-200/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white">E-Commerce Platform</h1>
              <p className="text-gray-300 mt-2 max-w-2xl">
                Full-stack storefront with authentication, product management, cart, checkout, and payments.
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
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
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
              This project delivers a production-ready shopping experience including product catalog, search and filters,
              user accounts, role-based admin dashboard, shopping cart with persistent sessions, and a secure checkout
              flow integrated with Stripe. The backend exposes REST endpoints for products, orders, and authentication,
              backed by MongoDB.
            </p>
          </div>
          <div className="bg-dark-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'React', Icon: FaReact },
                { label: 'TypeScript', Icon: SiTypescript },
                { label: 'Tailwind CSS', Icon: SiTailwindcss },
                { label: 'Node.js', Icon: SiNodedotjs },
                { label: 'MongoDB', Icon: SiMongodb },
                { label: 'Stripe', Icon: FaStripe },
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
            <li>JWT auth, user profiles, and role-based admin controls</li>
            <li>Product CRUD with images, categories, search, and filters</li>
            <li>Responsive cart with quantity, promo codes, and saved state</li>
            <li>Stripe checkout, webhooks, and order history</li>
            <li>Optimistic UI, lazy loading, and accessible components</li>
            <li>Analytics-ready events for funnel tracking</li>
          </ul>
        </motion.div>

        {/* Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-dark-100 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Architecture</h2>
            <p className="text-gray-300 mb-4">
              Client is a React SPA styled with Tailwind. Server is Node.js/Express with REST endpoints and
              integrates with Stripe for payments. MongoDB stores users, products, carts, and orders.
            </p>
            <div className="text-gray-300 text-sm">
              <pre className="bg-dark-200 rounded-lg p-4 overflow-x-auto"><code>{`Client (React + TS)
  └── UI, state, routing
Server (Node + Express)
  └── Auth, Products, Orders, Webhooks
DB (MongoDB)
  └── Collections: users, products, carts, orders
Payments (Stripe)
  └── Checkout + Webhooks`}</code></pre>
            </div>
          </div>
          <div className="bg-dark-100 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Screens</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Catalog', 'Product', 'Cart', 'Checkout', 'Orders', 'Admin'
              ].map((label) => (
                <div key={label} className="relative h-28 bg-dark-200 rounded-lg flex items-center justify-center text-gray-400">
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-dark-100 rounded-xl p-6"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Outcomes</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-300 list-disc list-inside">
            <li>End-to-end cart to checkout in under 4 seconds (happy path)</li>
            <li>Admin dashboard enables non-technical product management</li>
            <li>Secure payment handling via Stripe with webhook verification</li>
            <li>Modular UI ready for theming and localization</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Ecommerce


