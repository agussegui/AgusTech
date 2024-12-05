import {  UserRound } from "lucide-react";
import IconsGit from "./IconsGit";
import FadeInSection from "./ScrollAos";

export default function WhoIam() {
  return (
    <FadeInSection>
      <div className="my-32 scroll-m-5 w-full mx-auto lg:max-w-4xl md:max-w-2xl ">
        <div className="">
          <div className="flex justify-start items-center">
            
            <UserRound className="size-14 text-center"/>
            <h2 className="text-5xl font-bold text-indigo-500 ml-4">¿Quién soy?</h2>
          </div>
          <article className="mt-10 space-y-8 px-6 lg:px-0 ">
            <p className="text-lg text-article max-w-3xl">
              Mi llamo Agustin Segui tengo 22 años, estudiante de la carrera de
              Licenciatura en Sistemas y desarrollador web por cuenta propia. Especializado en la
              creación de interfaces intuitivas en el frontend, así como en la
              implementación de lógica robusta y eficaz en el backend.
            </p>
            <p className="text-lg text-article max-w-3xl">
              Me agrada realizar proyectos personales, ver videos y leer libros
              para continuar con mi aprendizaje.Cuando no estoy trabajando en
              la programacion disfruto pasar tiempo con mi familia y practicar ejericio.
            </p>
          </article>
          <IconsGit/>
        </div>
      </div>
    </FadeInSection>
  );
}
