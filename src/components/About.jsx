import React from 'react'


export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center mb-12">
      <img
        src="https://media-dfw5-1.cdn.whatsapp.net/v/t61.24694-24/459757635_1082275509935984_7804301408072543249_n.jpg?ccb=11-4&oh=01_Q5AaIJSoS7msqi9KgAqq3AadJjkUFhGdrTXDO3ofZoWPXtBK&oe=67312331&_nc_sid=5e03e0&_nc_cat=101"
        alt="Foto de KEVDEV"
        className="rounded-full w-48 h-48 object-cover mb-4 md:mb-0 md:mr-8"
      />
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Hola! Soy Kevin</h2>
        
        <p className="text-gray-800 dark:text-gray-200 mt-5">
          ¡Hola! Soy un desarrollador web que transforma tus ideas en realidad. Con experiencia en diseño y desarrollo de aplicaciones web, puedo ayudarte a crear una presencia en línea que refleje tu personalidad y objetivos.
        </p>
        <p className=" text-center text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 mb-4 px-2 py-2 rounded-lg mt-5">
          Desarrollador Web | Diseñador UI/UX | Estudiante de Ing en Sistemas
        </p>
      </div>
    </div>
  )
}