import React, { useEffect, useState } from "react";
import FadeInSection from "./ScrollAos";
import { ArrowDownFromLine } from "lucide-react";

const Header = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    const firstGroup = [1, 3, 4, 7, 10, 13, 14, 17, 19, 20];
    const secondGroup = [2, 5, 11, 8, 15, 18, 21];
    const thirdGroup = [9, 6, 12, 14, 16, 22];

    const showLines = (groups: number[][], delay: number) => {
      groups.forEach((group, index) => {
        setTimeout(() => {
          group.forEach((line) => {
            setVisibleLines((prev) => [...prev, line]); // Muestra cada línea del grupo
          });
        }, index * delay);
      });
    };

    showLines([firstGroup, secondGroup, thirdGroup], 650); // Retraso de 650 ms entre grupos
  }, []);

  return (
    <>
      <div className="mt-20 mb-6 scroll-m-5 w-full mx-auto lg:max-w-4xl md:max-w-2xl">
        <header className="header bar-white items-center">
          {" "}
          {/* Cambiado para no aplicar en dispositivos grandes */}
          <div className="lines-decor flex flex-col items-center w-full md:items-start">
            {" "}
            {/* Se mantiene la estructura de línea solo en móviles */}
            {/* Fila 1 */}
            <div className="line-container flex flex-col items-center md:flex-row md:items-start">
              {visibleLines.includes(1) && (
                <div className="color-1">
                  <div className="line-1 slide-in"></div>
                </div>
              )}
              {visibleLines.includes(2) && (
                <div className="color-2">
                  <div className="line-2 slide-in"></div>
                </div>
              )}
              {visibleLines.includes(1) && <div className="dot"></div>}
            </div>
            {/* Fila 2 */}
            <div className="line-container flex justify-center md:justify-start">
              {visibleLines.includes(3) && (
                <div className="color-3">
                  <div className="line-3 slide-in"></div>
                </div>
              )}
            </div>
            {/* Fila 3 */}
            <div className="line-container flex flex-col items-center md:flex-row md:items-start">
              {visibleLines.includes(4) && (
                <div className="color-4">
                  <div className="line-4 slide-in"></div>
                </div>
              )}
              {visibleLines.includes(5) && <div className="dot"></div>}
              {visibleLines.includes(5) && (
                <div className="color-5">
                  <div className="line-5 slide-in"></div>
                </div>
              )}
              {visibleLines.includes(6) && (
                <div className="color-6">
                  <div className="line-6 slide-in"></div>
                </div>
              )}
            </div>
            {/* Fila 4 */}
            <div className="line-container flex flex-col items-center md:flex-row md:items-start">
              {visibleLines.includes(7) && (
                <div className="color-7">
                  <div className="line-7 slide-in"></div>
                </div>
              )}
              {visibleLines.includes(8) && (
                <div className="color-8">
                  <div className="line-8 slide-in"></div>
                </div>
              )}
              {visibleLines.includes(7) && <div className="dot"></div>}
              {visibleLines.includes(9) && (
                <div className="color-9">
                  <div className="line-9 slide-in"></div>
                </div>
              )}
            </div>
            {/* Fila 5 */}
            <div className="line-container flex flex-col items-center md:flex-row md:items-start">
              {visibleLines.includes(10) && (
                <div className="color-10">
                  <div className="line-10 slide-in"></div>
                </div>
              )}
              {visibleLines.includes(10) && <div className="dot"></div>}
              {visibleLines.includes(11) && (
                <div className="color-11">
                  <div className="line-11 slide-in"></div>
                </div>
              )}
              {visibleLines.includes(12) && (
                <div className="color-12">
                  <div className="line-12 slide-in"></div>
                </div>
              )}
            </div>
          </div>
          <FadeInSection animationType="slide-in-left">
            <div className="m-10 text-center">
              <h1 className="inter-title text-3xl lg:text-5xl md:text-4xl w-full">
                Hey, soy <span className="text-indigo-500">Agustín!</span>
              </h1>
              <div className="flex flex-col md:flex-row justify-center mt-6 items-center">
                <p className="inter-subtitle span bg-white text-indigo-600 text-md sm:text-xl rounded-xl py-1 px-3 m-3 font-black animate-slide-up">
                  Frontend y Backend Developer{" "}
                </p>
                <a href="/CV.pdf" target="_blank" className="relative group">
                  {/* Contenedor del botón */}
                  <div className="flex items-center justify-center text-center rounded-3xl relative w-20 h-8 bg-indigo-500 cursor-pointer overflow-hidden hover:bg-[#121212] hover:border-indigo-500 hover:border-2">
                    {/* Texto "CV", desaparece al hacer hover */}
                    <span className="text-xl font-bold text-white transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-[-50%]">
                      CV
                    </span>
                    <ArrowDownFromLine className="w-5 h-5 absolute opacity-0 translate-y-[50%] transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"/>
                    {/* Ícono de descarga, aparece al hacer hover */}
                  </div>
                </a>
              </div>
            </div>
          </FadeInSection>
          <div className="lines-decor flex flex-col items-center w-full md:items-start">
            {/* Fila 6 */}
            <div className="line-container flex flex-col items-center md:flex-row md:items-start">
              {visibleLines.includes(13) && (
                <div className="color-4">
                  <div className="line-13 slide-in"></div>
                </div>
              )}
              {visibleLines.includes(13) && <div className="dot"></div>}
            </div>

            {/* Fila 7 */}
            <div className="line-container flex flex-col items-center md:flex-row md:items-start">
              {visibleLines.includes(14) && (
                <div className="color-15">
                  <div className="line-14 slide-in"></div>
                </div>
              )}
              {visibleLines.includes(15) && (
                <div className="color-11">
                  <div className="line-15 slide-in"></div>
                </div>
              )}
              {visibleLines.includes(16) && (
                <div className="color-12">
                  <div className="line-16 slide-in"></div>
                </div>
              )}
            </div>

            {/* Fila 8 */}
            <div className="line-container flex flex-col items-center md:flex-row md:items-start">
              {visibleLines.includes(17) && (
                <div className="color-6">
                  <div className="line-17 slide-in"></div>
                </div>
              )}
              {visibleLines.includes(18) && (
                <div className="color-3">
                  <div className="line-18 slide-in"></div>
                </div>
              )}
            </div>

            {/* Fila 9 */}
            <div className="line-container flex flex-col items-center md:flex-row md:items-start">
              {visibleLines.includes(19) && (
                <div className="color-14">
                  <div className="line-19 slide-in"></div>
                </div>
              )}
            </div>

            {/* Fila 10 */}
            <div className="line-container flex flex-col items-center md:flex-row md:items-start">
              {visibleLines.includes(20) && (
                <div className="color-9">
                  <div className="line-20 slide-in"></div>
                </div>
              )}
              {visibleLines.includes(20) && <div className="dot"></div>}
              {visibleLines.includes(21) && (
                <div className="color-5">
                  <div className="line-21 slide-in"></div>
                </div>
              )}
              {visibleLines.includes(22) && (
                <div className="color-16">
                  <div className="line-22 slide-in"></div>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default React.memo(Header);