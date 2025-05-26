import { motion } from 'framer-motion';

import { Github, Linkedin, Mail } from "lucide-react";

// Variantes para la animación del contenedor
const containerVariants = {
  hidden: { width: "50px" }, // El contenedor comienza mostrando solo el icono
  visible: {
    width: "140px", // Se expande para mostrar el nombre
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};


export default function IconsGit() {
  return (
    <div className="flex justify-center items-center space-x-4 mt-10  md:justify-start"> 
      <motion.a
        href="https://github.com/agussegui"
        rel="noopener noreferrer"
        className="flex items-center bg-sky-600 text-white rounded-full overflow-hidden p-2 w-14 h-14 font-bold"
        variants={containerVariants}
        initial="hidden"
        whileHover="visible"
        target="_blank" 
      >
        <div className="flex items-center justify-between">
          <Github className="flex items-center w-9 h-9 justify-center" /> 
          <span className="ml-2">
            GitHub
          </span>
        </div>
        
      </motion.a>

      
      <motion.a
        href="https://www.linkedin.com/in/agustin-segui/" 
        target="_blank"
        rel="noopener noreferrer"
        className=" flex items-center bg-sky-600 text-white rounded-full overflow-hidden p-2 w-14 h-14 font-bold"
        variants={containerVariants}
        initial="hidden"
        whileHover="visible"
      >
        <div className="flex items-center justify-between">
          <Linkedin className="flex items-center w-9 h-9 justify-center" /> 
          <span className="ml-2">
            LinkedIn
          </span>
        </div>
      </motion.a>
      
      <motion.a
        href="mailto:agussegui24@hotmail.es" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-sky-600 text-white rounded-full overflow-hidden p-2 w-14 h-14 font-bold"
        variants={containerVariants}
        initial="hidden"
        whileHover="visible"
      >
        <div className="flex items-center justify-between">
          <Mail className="flex items-center w-9 h-9 justify-center" /> 
          <span className="ml-2">
            Gmail
          </span>
        </div>
      </motion.a>
    </div>
  );
}
