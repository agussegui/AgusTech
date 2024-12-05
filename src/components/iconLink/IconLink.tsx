// src/components/IconLink/IconLink.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, Variants } from "framer-motion";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"; 

interface IconLinkProps {
  icon: IconDefinition;
  label: string;
  link: string;
  showText: boolean; 
  textVariants: Variants;  
}

const IconLink: React.FC<IconLinkProps> = ({ icon, label, link, showText, textVariants }) => {
  return (
    <motion.a href={link} target="_blank" rel="noopener noreferrer" className="boton-proyectgitpreview">
      <motion.div className="flex items-center" whileHover={{ x: 27 }}>
        <FontAwesomeIcon icon={icon} size="2x" className="mr-2" />
        <motion.span 
          className="ml-2"
          initial="hidden"
          animate={showText ? "visible" : "hidden"} 
          variants={textVariants} // Usar las variantes aquí
        >
          {label}
        </motion.span>
      </motion.div>
    </motion.a>
  );
};

export default IconLink;
