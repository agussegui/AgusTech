import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "./projectCard/ProjectCard";
import { projects } from "../data/projects";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";


export default function Proyect() {

    return (
        <div className="my-12 scroll-m-5 w-full mx-auto lg:max-w-4xl md:max-w-2xl ">
            <div className="flex justify-start items-center mb-8 md:pl-0 pl-6">
                <FontAwesomeIcon
                    icon={faClipboardList}
                    className="w-10 h-10 text-white"
                />
                <h2 className="text-4xl font-bold text-indigo-500 ml-4 ">Proyectos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-16 mt-6 max-sm:text-center">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}
