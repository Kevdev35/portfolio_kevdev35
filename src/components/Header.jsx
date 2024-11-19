import React, { useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { CiSaveDown2 } from 'react-icons/ci'
import { IoMdMenu, IoMdClose } from "react-icons/io";

const socialLinks = [
  { icon: FaFacebook, href: 'https://facebook.com/tuusuario' },
  { icon: FaInstagram, href: 'https://twitter.com/tuusuario' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/tuusuario' },
  { icon: FaGithub, href: 'https://github.com/tuusuario' },
]

export default function Header({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 z-50 fixed w-full">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <img src='/dev-min.svg'alt='logo de kevdev'  className="w-12 h-12 fill-black dark:fill-white" />
        <nav className="hidden lg:flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a 
                key={href} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Icon className="h-6 w-6 text-center"/>
              </a>
            ))}
        </nav>
        <div className='flex justify-start text-center items-center '>
          <a href="/LunaryGame.zip" download>
            <button class=" group relative flex gap-6 p-1 mx-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition">
              <CiSaveDown2 className="h-6 w-6 text-center"/>
              <div class=" text-xs absolute opacity-0 my-2 px-1.5 py-1 top-11 w-auto rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 bg-opacity-70 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                Descarga mi CV!
              </div>
            </button>
          </a>
          <button
              onClick={toggleDarkMode}
              className="p-1 hidden lg:flex rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </button>

          <button
            onClick={toggleMenu}
            className='lg:hidden flex items-center p-1 rounded-lg ml-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
          >
            {isMenuOpen ? <IoMdClose className="h-6 w-6" /> : <IoMdMenu className="h-6 w-6" />}

          </button>

          {isMenuOpen && (
            <div >
              <ul className="absolute flex-col p-5 rounded-lg top-20 right-4 backdrop-filter backdrop-blur-3xl bg-opacity-0 shadow">
                <div className=" items-center space-x-4">
                    {socialLinks.map(({ icon: Icon, href }) => (
                      <a 
                        key={href} 
                        href={href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Icon className="h-6 w-6 text-center"/>
                      </a>
                    ))}
                </div>
                <button
                    onClick={toggleDarkMode}
                    className="p-1 mt-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
      
    </header>
  )
}