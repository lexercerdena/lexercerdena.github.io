import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Ecommerce from './components/projects/Ecommerce'
import TaskManager from './components/projects/TaskManager'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [route, setRoute] = useState(window.location.hash || '#/')

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/')
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-300 via-dark-200 to-dark-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <h2 className="text-white text-xl font-semibold">Loading Portfolio...</h2>
        </div>
      </div>
    )
  }

  const isEcommerceRoute = route === '#/projects/ecommerce'
  const isTaskManagerRoute = route === '#/projects/task-manager'

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-300 via-dark-200 to-dark-100">
      <Navbar />
      <main>
        {isEcommerceRoute ? (
          <Ecommerce />
        ) : isTaskManagerRoute ? (
          <TaskManager />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App 