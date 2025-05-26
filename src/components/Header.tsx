
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import ScrollAos from "./ScrollAos"

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <ScrollAos direction="up" delay={0.2}>
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-gray-300">
              👋 ¡Hola! Soy
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-transparent">
                Agustín Segui
              </span>
            </h1>
          </ScrollAos>

          {/* Role */}
          <ScrollAos direction="up" delay={0.4}>
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-semibold">Frontend & Backend Developer</p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Especializado en crear experiencias web modernas y funcionales. Transformo ideas en aplicaciones
                digitales que impactan.
              </p>
            </div>
          </ScrollAos>

          {/* CTA Buttons */}
          <ScrollAos direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="/CV-AgustinSegui.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-colors group"
                rel="noreferrer"
              >
                <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                Descargar CV
              </motion.a>
              <motion.button
                onClick={scrollToAbout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white hover:bg-gray-700/50 font-medium rounded-lg transition-colors"
              >
                Ver mi trabajo
                <ArrowDown className="h-4 w-4 ml-2" />
              </motion.button>
            </div>
          </ScrollAos>

          {/* Social Links */}
          <ScrollAos direction="up" delay={0.8}>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://github.com/agussegui"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/agustin-segui/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:agussegui24@hotmail.es"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </ScrollAos>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </motion.div>
    </section>
  )
}
