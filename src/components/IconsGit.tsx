import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
      {/** Icono de GitHub */}
      <motion.a
        href="https://github.com/agussegui"
        rel="noopener noreferrer"
        className="flex items-center bg-indigo-600 text-white rounded-full overflow-hidden p-2 w-14 h-14 font-bold"
        variants={containerVariants}
        initial="hidden"
        whileHover="visible"
        target="_blank" 
      >
        <FontAwesomeIcon icon={faGithub} size="2x" className="flex items-center w-10 h-10 justify-center" /> {/* Aumentar tamaño */}
        <span
          className="ml-2"
        >
          GitHub
        </span>
      </motion.a>

      {/** Icono de LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/agustin-segui/" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-indigo-600 text-white rounded-full overflow-hidden p-2 w-14 h-14 font-bold"
        variants={containerVariants}
        initial="hidden"
        whileHover="visible"
      >
        <FontAwesomeIcon icon={faLinkedin} size="3x" className="flex items-center w-10 h-10" /> {/* Aumentar tamaño */}
        <span
          className="ml-2"
        >
          LinkedIn
        </span>
      </motion.a>
      
      {/** Icono de Twitter */}
      <motion.a
        href="mailto:agussegui24@hotmail.es" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-indigo-600 text-white rounded-full overflow-hidden p-2 w-14 h-14 font-bold"
        variants={containerVariants}
        initial="hidden"
        whileHover="visible"
      >
        <FontAwesomeIcon icon={faEnvelope}  size="2x" className="flex items-center w-9 h-9" /> {/* Aumentar tamaño */}
        <span
          className="ml-2"
          
        >
          Gmail
        </span>
      </motion.a>
    </div>
  );
}
