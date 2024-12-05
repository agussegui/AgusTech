import { Settings } from "lucide-react";
import FadeInSection from "./ScrollAos";

export default function SkillIcon() {
    return (
        <>
            <FadeInSection animationType={'fade-in'}>
                <div className="my-12 scroll-m-5 w-full mx-auto lg:max-w-4xl md:max-w-2xl ">
                    <div className="flex justify-start items-center mb-8 p-4">
                        <Settings className="size-12" />
                        <h2 className="text-4xl text-indigo-500 ml-4 font-semibold">Tecnologías</h2>
                    </div>

                    {/* Primera lista */}
                    <div className="mt-4 ">
                        <ul className="grid grid-cols-2 md:flex md:flex-wrap lg:justify-between gap-x-3 gap-y-7 sm:gap-x-6">
                            <li className="flex flex-col items-center justify-between group transition-all duration-300">
                                <img src="./html.svg" alt="Logo HTML" className="max-w-16 transform group-hover:rotate-6 group-hover:scale-130 transition-transform duration-300" />
                                <span className="text-lg skills-contact font-bold mt-4 transition-colors duration-300 group-hover:text-amber-500">HTML</span>
                            </li>
                            <li className="flex flex-col items-center justify-between group transition-all duration-300">
                                <img src="./css.svg" alt="Logo CSS" className="max-w-16 transform group-hover:rotate-6 group-hover:scale-130 transition-transform duration-300" />
                                <span className="text-lg skills-contact font-bold mt-4 transition-colors duration-300 group-hover:text-amber-500">CSS</span>
                            </li>
                            <li className="flex flex-col items-center justify-between group transition-all duration-300">
                                <img src="./sass.svg" alt="Logo Sass" className="max-w-16 transform group-hover:rotate-6 group-hover:scale-130 transition-transform duration-300" />
                                <span className="text-lg skills-contact font-bold mt-4 transition-colors duration-300 group-hover:text-amber-500">Sass</span>
                            </li>
                            <li className="flex flex-col items-center justify-between group transition-all duration-300">
                                <img src="./tailwind.svg" alt="Logo Tailwind" className="max-w-16 transform group-hover:rotate-6 group-hover:scale-130 transition-transform duration-300" />
                                <span className="text-lg skills-contact font-bold mt-4 transition-colors duration-300 group-hover:text-amber-500">Tailwind</span>
                            </li>
                            <li className="flex flex-col items-center justify-between group transition-all duration-300">
                                <img src="./javascript.svg" alt="Logo Javascript" className="max-w-16 transform group-hover:rotate-6 group-hover:scale-130 transition-transform duration-300" />
                                <span className="text-lg skills-contact font-bold mt-4 transition-colors duration-300 group-hover:text-amber-500">Javascript</span>
                            </li>
                            <li className="flex flex-col items-center justify-between group transition-all duration-300">
                                <img src="./react-2.svg" alt="Logo React" className="max-w-16 transform group-hover:rotate-6 group-hover:scale-130 transition-transform duration-300" />
                                <span className="text-lg skills-contact font-bold mt-4 transition-colors duration-300 group-hover:text-amber-500">React</span>
                            </li>
                            <li className="flex flex-col items-center justify-between group transition-all duration-300">
                                <img src="./nextjs-13.svg" alt="Logo Next.js" className="max-w-16 transform group-hover:rotate-6 group-hover:scale-130 transition-transform duration-300 bg-white rounded-full w-16 h-16 p-1" />
                                <span className="text-lg skills-contact font-bold mt-4 transition-colors duration-300 group-hover:text-amber-500">Next.js</span>
                            </li>
                        </ul>
                    </div>

                    {/* Segunda lista */}
                    <div className="mt-8">
                        <ul className="grid grid-cols-2 md:flex md:flex-wrap lg:justify-between gap-x-3 gap-y-7 sm:gap-x-6">
                            <li className="flex flex-col items-center justify-between group transition-all duration-300">
                                <img src="./nodejs.svg" alt="Logo Node js" className="max-w-16 transform group-hover:rotate-6 group-hover:scale-130 transition-transform duration-300" />
                                <span className="text-lg skills-contact font-bold mt-4 transition-colors duration-300 group-hover:text-amber-500">Node.js</span>
                            </li>
                            <li className="flex flex-col items-center justify-between group transition-all duration-300">
                                <img src="./typescript.svg" alt="Logo Node js" className="max-w-16 transform group-hover:rotate-6 group-hover:scale-130 transition-transform duration-300" />
                                <span className="text-lg skills-contact font-bold mt-4 transition-colors duration-300 group-hover:text-amber-500">Typescript</span>
                            </li>
                            <li className="flex flex-col items-center justify-between group transition-all duration-300">
                                <img src="./php.svg" alt="Logo PHP" className="max-w-16 transform group-hover:rotate-6 group-hover:scale-130 transition-transform duration-300" />
                                <span className="text-lg skills-contact font-bold mt-4 transition-colors duration-300 group-hover:text-amber-500">PHP</span>
                            </li>
                            <li className="flex flex-col items-center justify-between group transition-all duration-300">
                                <img src="./mysql.svg" alt="Logo MySQL" className="max-w-16 transform group-hover:rotate-6 group-hover:scale-130 transition-transform duration-300" />
                                <span className="text-lg skills-contact font-bold mt-4 transition-colors duration-300 group-hover:text-amber-500">MYSQL</span>
                            </li>
                            <li className="flex flex-col items-center justify-between group transition-all duration-300">
                                <img src="./mongodb.svg" alt="Logo MongoDB" className="max-w-16 transform group-hover:rotate-6 group-hover:scale-130 transition-transform duration-300" />
                                <span className="text-lg skills-contact font-bold mt-4 transition-colors duration-300 group-hover:text-amber-500">MongoDB</span>
                            </li>
                            <li className="flex flex-col items-center justify-between group transition-all duration-300">
                                <img src="./git.svg" alt="Logo Git" className="max-w-16 transform group-hover:rotate-6 group-hover:scale-130 transition-transform duration-300" />
                                <span className="text-lg skills-contact font-bold mt-4 transition-colors duration-300 group-hover:text-amber-500">Git</span>
                            </li>
                            <li className="flex flex-col items-center justify-between group transition-all duration-300">
                                <img src="./github2.svg" alt="Logo GitHub" className="max-w-16 transform group-hover:rotate-6 group-hover:scale-130 transition-transform duration-300" />
                                <span className="text-lg skills-contact font-bold mt-4 transition-colors duration-300 group-hover:text-amber-500">GitHub</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </FadeInSection>

        </>
    )
}
