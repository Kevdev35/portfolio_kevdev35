import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import Footer  from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-600 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className=" max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="main lg:mt-[15vh] md:mt-[10vh] sm:mt-[3vh] px-4 py-6 sm:px-0">
          <About />
          <Technologies />
          <Projects />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}