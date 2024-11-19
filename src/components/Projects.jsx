import React from 'react'
import { FaFly, FaTwitter, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'Proyecto 1',
    description: 'Una aplicación web para gestión de tareas.',
    image: 'https://web.whatsapp.com/2cc9c825-3032-46dc-9f0d-402535a02043',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/tuusuario/proyecto1',
    liveUrl: 'https://proyecto1.com'
  },
  {
    id: 2,
    title: 'Proyecto 2',
    description: 'Una tienda en línea con carrito de compras.',
    image: '/placeholder.svg?height=200&width=300&text=Proyecto 2',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/tuusuario/proyecto2',
    liveUrl: 'https://proyecto2.com'
  },
  {
    id: 3,
    title: 'Proyecto 3',
    description: 'Un blog personal con sistema de comentarios.',
    image: '/placeholder.svg?height=200&width=300&text=Proyecto 3',
    technologies: ['Next.js', 'Tailwind CSS', 'Sanity.io'],
    githubUrl: 'https://github.com/tuusuario/proyecto3',
    liveUrl: 'https://proyecto3.com'
  }
]

export default function Projects() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Mis Proyectos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-md text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
                >
                  <FaGithub/>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}