import React, { useRef, useEffect } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  speed: number;
}

const GalaxyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars: Star[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    const resizeCanvas = () => {
      const width = canvas.width = window.innerWidth;
      const height = canvas.height = document.documentElement.scrollHeight;

      // Crear estrellas iniciales
      stars.length = 0; // Limpiar las estrellas anteriores
      for (let i = 0; i < 350; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2,
          speed: Math.random() * 0.75,
        });
      }
    };

    // Llamar a resizeCanvas para inicializar
    resizeCanvas();

    // Animar estrellas
    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);
      stars.forEach(star => {
        // Dibujar cada estrella
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();

        // Mover estrella
        star.y += star.speed;

        // Si la estrella sale de la pantalla, reaparece en la parte superior
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Ajustar el tamaño del canvas al cambiar el tamaño de la ventana
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default React.memo(GalaxyBackground);