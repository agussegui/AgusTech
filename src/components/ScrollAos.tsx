import type React from "react"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface ScrollAosProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
}

const ScrollAos: React.FC<ScrollAosProps> = ({ children, direction = "up", delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  )
}

export default ScrollAos
