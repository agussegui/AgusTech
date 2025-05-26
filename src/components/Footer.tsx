import { Github, Linkedin, Mail,  } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/agussegui", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/agustin-segui/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:agussegui24@hotmail.es", label: "Email" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900/50 border-t border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Agustín Segui</h3>
            <p className="text-gray-400">
              Frontend & Backend Developer especializado en crear experiencias web modernas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Enlaces Rápidos</h4>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("#about")}
                className="text-gray-400 hover:text-sky-400 transition-colors text-left"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection("#projects")}
                className="text-gray-400 hover:text-sky-400 transition-colors text-left"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="text-gray-400 hover:text-sky-400 transition-colors text-left"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Sígueme</h4>
            <div className="flex space-x-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 rounded-full bg-gray-800/50 hover:bg-sky-600/20 text-gray-400 hover:text-white transition-all hover:scale-110"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} AgustinTech.Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
