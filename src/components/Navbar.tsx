import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const smoothScroll = (targetId: string, duration: number) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);

  }  
  return (
    <>
      <nav className="flex justify-between items-start md:justify-center md:items-center p-8 text-white mb-10 bg-black md:bg-opacity-0 bg-opacity-50 md:bg-none">
        {/* UL alineado a la izquierda */}
        <ul
          className={`flex-col sm:flex-row sm:flex gap-5 md:justify-start md:items-start ${
            isOpen ? "flex" : "hidden"
          } sm:block`}
        >
          <li>
            <button 
              onClick={() => smoothScroll("home", 1000)}
              className="text-xl hover:bg-gray-800 hover:text-indigo-400 font-bold p-3 rounded-full transition-all duration-200 ease-in-out " 
            >
              Inicio
            </button>
          </li>
          <li>
            <button 
              onClick={() => smoothScroll("about", 1000)}
              className="text-xl hover:bg-gray-800 hover:text-indigo-400 font-bold p-3 rounded-full transition-all duration-200 ease-in-out " // Cambiar color para el       segundo botón
            >
              Sobre Mi
            </button>
          </li>
          <li>
            <button 
              onClick={() => smoothScroll("projects", 1000)}
              className="text-xl hover:bg-gray-800 hover:text-indigo-400 font-bold p-3 rounded-full transition-all duration-200 ease-in-out " // Cambiar color para el      tercer botón
            >
              Proyectos
            </button>
          </li>
          <li>
            <button 
              onClick={() => smoothScroll("skills", 1000)}
              className="text-xl hover:bg-gray-800 hover:text-indigo-400 font-bold p-3 rounded-full transition-all duration-200 ease-in-out " // Cambiar color para el       cuarto botón
            >
              Skills
            </button>
          </li>
          <li>
            <button 
              onClick={() => smoothScroll("contact", 1000)}
              className="text-xl hover:bg-gray-800 hover:text-indigo-400 font-bold p-3 rounded-full transition-all duration-200 ease-in-out " // Cambiar color para el       quinto botón
            >
              Contacto
            </button>
          </li>
        </ul>
        
        {/* Botón hamburguesa a la derecha en móviles */}
        <div
          className="sm:hidden flex flex-col cursor-pointer justify-end"
          onClick={toggleMenu}
        >
          <span className="bg-white w-6 h-1 mb-1"></span>
          <span className="bg-white w-6 h-1 mb-1"></span>
          <span className="bg-white w-6 h-1"></span>
        </div>
      </nav>

    </>
  );
}
