
import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import ScrollAos from "../ScrollAos"
import IconLink from "../iconLink/IconLink"
import ProjectTech from "../projectTech/ProjectTech"


const textVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  hidden: { opacity: 0, x: 25, transition: { duration: 0.3 } },
}

interface ProjectCardProps {
  title: string
  subtitle: string
  image: string
  technologies: { name: string; logo: string; bgColor: string }[]
  githubLink: string
  demoLink: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, technologies, githubLink, demoLink, subtitle }) => {
  const [showTextGithub, setShowTextGithub] = useState(true)
  const [showTextDemo, setShowTextDemo] = useState(true)

  return (
    <ScrollAos>
      <motion.article
        className="flex flex-col space-y-6 group h-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
      >
        {/* Glass container principal */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-500 h-full">
          {/* Gradient overlay que se activa en hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Efecto de brillo que se mueve */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          {/* Image section */}
          <div className="relative overflow-hidden">
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full h-48 object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Floating tech preview en la imagen */}
              <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {technologies.slice(0, 2).map((tech, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center"
                  >
                    <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="w-5 h-5 object-contain" />
                  </div>
                ))}
              </div>
            </motion.a>
          </div>

          {/* Content section */}
          <div className="p-6 relative z-10">
            <motion.h3
              className="text-xl font-bold mb-3 text-white/90 group-hover:text-white transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              {title}
            </motion.h3>

            <ProjectTech technologies={technologies} />

            <p className="text-white/70 text-sm mb-6 leading-relaxed">{subtitle}</p>

            {/* Action buttons */}
            <div className="flex gap-3 items-center">
              <motion.div onMouseEnter={() => setShowTextGithub(false)} onMouseLeave={() => setShowTextGithub(true)}>
                <IconLink
                  type="github"
                  label="Código"
                  link={githubLink}
                  showText={showTextGithub}
                  textVariants={textVariants}
                />
              </motion.div>
              <motion.div onMouseEnter={() => setShowTextDemo(false)} onMouseLeave={() => setShowTextDemo(true)}>
                <IconLink
                  type="demo"
                  label="Demo"
                  link={demoLink}
                  showText={showTextDemo}
                  textVariants={textVariants}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.article>
    </ScrollAos>
  )
}

export default ProjectCard
