"use client"

import type React from "react"
import { motion, type Variants } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

interface IconLinkProps {
  type: "github" | "demo"
  label: string
  link: string
  showText: boolean
  textVariants: Variants
}

const IconLink: React.FC<IconLinkProps> = ({ type, label, link, showText, textVariants }) => {
  const Icon = type === "github" ? Github : ExternalLink

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/15 rounded-xl px-4 py-2 text-white/80 hover:text-white transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div className="flex items-center" whileHover={{ x: 5 }}>
        <Icon className="h-5 w-5 mr-2" />
        <motion.span
          className="ml-1 font-medium"
          initial="hidden"
          animate={showText ? "visible" : "hidden"}
          variants={textVariants}
        >
          {label}
        </motion.span>
      </motion.div>
    </motion.a>
  )
}

export default IconLink
