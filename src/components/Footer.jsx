import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const socialLinks = [
  { icon: FaFacebook, href: 'https://facebook.com/tuusuario' },
  { icon: FaTwitter, href: 'https://twitter.com/tuusuario' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/tuusuario' },
  { icon: FaGithub, href: 'https://github.com/Kevdev35' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">© 2023 KevDEV. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a 
                key={href} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}