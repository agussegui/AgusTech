// src/components/ProjectCard/ProjectCard.tsx
import { useState } from "react";
import { motion } from "framer-motion";

import { faGithub } from "@fortawesome/free-brands-svg-icons"; 
import ProjectTech from "../projectTech/ProjectTech";
import IconLink from "../iconLink/IconLink";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FadeInSection from "../ScrollAos";

const textVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  hidden: { opacity: 0, x: 25, transition: { duration: 0.3 } },
};

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
  technologies: { name: string; logo: string; bgColor: string }[];
  githubLink: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, technologies, githubLink, demoLink,subtitle }) => {
  const [showTextGithub, setShowTextGithub] = useState(true);
  const [showTextDemo, setShowTextDemo] = useState(true);

  return (
    <FadeInSection animationType="fade-in">
      <article className="flex flex-col space-x-0 space-y-8 group">
        <div className="w-full relative">
          <div className="relative flex flex-col items-center gap-6 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-3xl group-hover:-translate-y-1 group-hover:shadow-2xl hover:border-gray-800">
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="relative bg-space rounded-2xl p-6 transition duration-500 group-hover:scale-105 hover:border-gray-800">
                <img
                  src={image}
                  alt={title}
                  className="rounded-xl shadow-md hover:shadow-lg shadow-neutral-500 dark:shadow-black hover:shadow-neutral-500 dark:hover:shadow-black transition-all cursor-none"
                />
              </a>
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <ProjectTech technologies={technologies} />
          <p className="flex items-end text-lg mt-4 gap-x-4 max-sm:mx-auto font-bold md:justify-start justify-center">
            {subtitle}
          </p>
          <div className="gap-4 flex items-center mt-6 md:justify-start justify-center">
            <motion.div 
              onMouseEnter={() => setShowTextGithub(false)} 
              onMouseLeave={() => setShowTextGithub(true)}
            >
              <IconLink
                icon={faGithub}
                label="Code"
                link={githubLink}
                showText={showTextGithub}
                textVariants={textVariants}          
              />
            </motion.div>
            <motion.div 
              onMouseEnter={() => setShowTextDemo(false)} 
              onMouseLeave={() => setShowTextDemo(true)}
            >
              <IconLink
                icon={faMagnifyingGlass}
                label="Demo"
                link={demoLink}
                showText={showTextDemo}
                textVariants={textVariants}
              />
            </motion.div>
          </div>
        </div>
      </article>
    </FadeInSection>  

  );
};

export default ProjectCard;
