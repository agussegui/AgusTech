import type React from "react"
import { motion } from "framer-motion"

interface Technology {
  name: string
  logo: string
  bgColor: string
}

interface ProjectTechProps {
  technologies: Technology[]
}

const ProjectTech: React.FC<ProjectTechProps> = ({ technologies }) => {
  return (
    <ul className="flex flex-wrap mb-4 gap-x-2 gap-y-2 max-sm:mx-auto justify-start max-sm:justify-center w-full">
      {technologies.map((tech, index) => (
        <motion.li
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="flex items-center gap-x-2 rounded-full text-xs bg-white/10 backdrop-blur-sm text-white/90 py-1.5 px-3 font-medium border border-white/10 hover:border-white/20 hover:bg-white/15 transition-all duration-300">
            <img src={tech.logo || "/placeholder.svg"} alt={`Logo ${tech.name}`} className="w-4 h-4 object-contain" />
            {tech.name}
          </span>
        </motion.li>
      ))}
    </ul>
  )
}

export default ProjectTech
