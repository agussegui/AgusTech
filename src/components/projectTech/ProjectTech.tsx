interface Technology {
    name: string;
    logo: string;
    bgColor: string; // Clases de Tailwind para el fondo
  }
  
  interface ProjectTechProps {
    technologies: Technology[]; // Propiedades que espera el componente
  }
  
  const ProjectTech: React.FC<ProjectTechProps> = ({ technologies }) => {
  return (
    <ul className="flex flex-wrap mb-2 gap-x-2 gap-y-2 max-sm:mx-auto justify-start max-sm:justify-center w-full">
      {technologies.map((tech) => (
        <li key={tech.name}>
          <span className={`flex items-center gap-x-2 rounded-full text-xs ${tech.bgColor} text-white py-1 px-3`}>
            <img src={tech.logo} alt={`Logo ${tech.name}`} className="w-6 h-6 object-contain" />
            {tech.name}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ProjectTech;