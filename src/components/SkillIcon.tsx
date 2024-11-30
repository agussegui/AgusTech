import FadeInSection from "./ScrollAos";

export default function SkillIcon() {
    return (
        <>
            <FadeInSection animationType={'fade-in'}>
                <div className="my-12 scroll-m-5 w-full mx-auto lg:max-w-4xl md:max-w-2xl ">
                    <div className="flex justify-start items-center mb-8 p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
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
