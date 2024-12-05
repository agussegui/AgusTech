import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Importamos los íconos

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
  };

  return (
    <>
        <nav className="flex justify-between md:justify-center md:items-center p-8 text-white mb-10">
          {/* UL alineado a la izquierda */}
            <ul
              className={`flex-col sm:flex-row sm:flex gap-5 ${
                isOpen ? "flex" : "hidden"
              } sm:block`}
            >
              <li>
                <button
                  onClick={() => smoothScroll("home", 1000)}
                  className="text-xl  hover:text-indigo-500 font-bold p-3 rounded-full transition-all  duration-200 ease-in-out "
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScroll("about", 1000)}
                  className="text-xl  hover:text-indigo-500 font-bold p-3 rounded-full transition-all duration-200 ease-in-out "
                >
                  Sobre Mi
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScroll("projects", 1000)}
                  className="text-xl  hover:text-indigo-500 font-bold p-3 rounded-full transition-all duration-200 ease-in-out "
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScroll("skills", 1000)}
                  className="text-xl  hover:text-indigo-500 font-bold p-3 rounded-full transition-all duration-200 ease-in-out "
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScroll("contact", 1000)}
                  className="text-xl  hover:text-indigo-500 font-bold p-3 rounded-full transition-all duration-200 ease-in-out "
                >
                  Contacto
                </button>
              </li>
            </ul>
          {/* Botón hamburguesa / "X" con iconos de Heroicons */}
          <button
            className="sm:hidden flex items-center justify-center relative w-8 h-8"
            onClick={toggleMenu}
          >
            {/* Ícono de hamburguesa o "X" */}
            {isOpen ? (
              <XMarkIcon className="w-10 h-10 text-white transition-colors duration-300 absolute" />
            ) : (
              <Bars3Icon className="w-10 h-10 text-white transition-colors duration-300 absolute" />
            )}
          </button>
        </nav>
    </>
  );
}
