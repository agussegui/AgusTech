"use client"

import React, { useRef, useEffect } from "react"

interface Star {
  x: number
  y: number
  radius: number
  speed: number
}

const GalaxyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stars: Star[] = []

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")

    if (!canvas || !ctx) return

    const resizeCanvas = () => {
      const width = (canvas.width = window.innerWidth)
      const height = (canvas.height = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.body.scrollHeight,
        document.body.offsetHeight,
      ))

      stars.length = 0
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5,
          speed: Math.random() * 0.5,
        })
      }
    }

    resizeCanvas()
    window.addEventListener("load", resizeCanvas)
    window.addEventListener("resize", resizeCanvas)

    const animate = () => {
      const width = canvas.width
      const height = canvas.height

      ctx.clearRect(0, 0, width, height)

      // Gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, "hsl(222.2, 84%, 4.9%)")
      gradient.addColorStop(1, "hsl(217.2, 32.6%, 17.5%)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`
        ctx.fill()

        star.y += star.speed
        if (star.y > height) {
          star.y = 0
          star.x = Math.random() * width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("load", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />
}

export default React.memo(GalaxyBackground)
