
import { Settings } from "lucide-react"
import ScrollAos from "./ScrollAos"

export default function SkillsSection() {
  const skills = [
    { name: "React", logo: "/react-2.svg", color: "bg-blue-500" },
    { name: "Next.js", logo: "/next-js.svg", color: "bg-black" },
    { name: "TypeScript", logo: "/typescript.svg", color: "bg-blue-600" },
    { name: "Tailwind CSS", logo: "/tailwind.svg", color: "bg-cyan-500" },
    { name: "JavaScript", logo: "/javascript.svg", color: "bg-yellow-500" },
    { name: "HTML/CSS", logo: "/html.svg", color: "bg-orange-500" },
    { name: "Node.js", logo: "/nodejs.svg", color: "bg-green-600" },
    { name: "PHP", logo: "/php.svg", color: "bg-purple-600" },
    { name: "MySQL", logo: "/mysql.svg", color: "bg-blue-700" },
    { name: "MongoDB", logo: "/mongodb.svg", color: "bg-green-500" },
    { name: "Git", logo: "/git.svg", color: "bg-red-500" },
    { name: "GitHub", logo: "/github2.svg", color: "bg-gray-800" },
    { name: "Sass", logo: "/sass.svg", color: "bg-pink-500" },
    { name: "CSS", logo: "/css.svg", color: "bg-blue-800" },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollAos>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Settings className="h-8 w-8 text-sky-600" />
              <h2 className="text-4xl font-bold text-white">Tecnologías</h2>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Las herramientas y tecnologías que uso para crear experiencias digitales excepcionales.
            </p>
          </div>
        </ScrollAos>

        <ScrollAos delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center group transition-all duration-300 hover:scale-110"
              >
                <div className="w-16 h-16 mb-4 p-2 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 group-hover:border-sky-400/50 transition-all duration-300 flex items-center justify-center">
                  <img
                    src={skill.logo || "/placeholder.svg"}
                    alt={`Logo ${skill.name}`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollAos>
      </div>
    </section>
  )
}
