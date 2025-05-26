import { FolderOpen } from "lucide-react"
import ScrollAos from "./ScrollAos"
import { projects } from "../data/projects"
import ProjectCard from "./projectCard/ProjectCard"


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      {/* Glass background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <ScrollAos>
          <div className="text-center mb-12">
            {/* Glass header container */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <FolderOpen className="h-8 w-8 text-sky-400" />
                </div>
                <h2 className="text-4xl font-bold text-white">Proyectos</h2>
              </div>
              <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo web.
              </p>
            </div>
          </div>
        </ScrollAos>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
