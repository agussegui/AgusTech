import { User, Code, Coffee, BookOpen } from "lucide-react"
import ScrollAos from "./ScrollAos"

export default function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Desarrollo Full Stack",
      description: "Frontend y Backend con tecnologías modernas",
    },
    {
      icon: Coffee,
      title: "Aprendizaje Continuo",
      description: "Siempre explorando nuevas tecnologías",
    },
    {
      icon: BookOpen,
      title: "Estudiante",
      description: "Licenciatura en Sistemas en curso",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollAos>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <User className="h-8 w-8 text-sky-600" />
              <h2 className="text-4xl font-bold text-white">Sobre Mí</h2>
            </div>
          </div>
        </ScrollAos>

        <div className="max-w-4xl mx-auto">
          <ScrollAos direction="up">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">¡Hola! Soy Agustín</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Mi llamo Agustin Segui tengo 23 años, estudiante de la carrera de
                  Licenciatura en Sistemas y desarrollador web por cuenta propia. Especializado en la
                  creación de interfaces intuitivas en el frontend, así como en la
                  implementación de lógica robusta y eficaz en el backend.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Me agrada realizar proyectos personales, ver videos y leer libros
                  para continuar con mi aprendizaje.Cuando no estoy trabajando en
                  la programacion disfruto pasar tiempo con mi familia y practicar ejericio.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 border-l-4 border-l-sky-600"
                  >
                    <div className="flex items-center gap-4">
                      <item.icon className="h-8 w-8 text-sky-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAos>
        </div>
      </div>
    </section>
  )
}
