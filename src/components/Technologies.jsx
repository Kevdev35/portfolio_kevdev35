import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare,  } from "react-icons/fa";
import { TbBrandAstro } from "react-icons/tb";

const technologies = [<FaReact/>, <FaHtml5/>, <FaCss3Alt/> ,  <FaJsSquare/>, <TbBrandAstro/>]


export default function Technologies() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tecnologías</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
        {technologies.map((tech) => (
          <div key={tech} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
            <span className="text-gray-800 dark:text-gray-200 font-semibold text-center text-4xl items-center justify-center flex">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  )
}