
export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className="flex justify-between md:justify-center md:items-center">
            <footer className="opacity-80 my-12 scroll-m-5 w-full mx-auto lg:max-w-4xl md:max-w-2xl ">
                <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4 ">
                    <span className="text-sm sm:text-center text-zinc-100/90 dark:text-zinc-100/90 flex justify-center">© {currentYear} AgustinTech. Todos los derechos reservados</span>

                    <ul className="flex flex-wrap items-center mt-6 text-sm font-medium dark:text-white/90 sm:mt-0 justify-center md:pt-0 pt-4">
                        <li>
                            <a href="#about" className="hover:underline me-4 md:me-6 cursor-pointer">Sobre mi</a>
                        </li>
                        <li>
                            <a href="mailto:agussegui24@hotmail.es" className="hover:underline me-4 md:me-6 cursor-pointer">Contacto</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/agustin-segui/" className="hover:underline me-4 md:me-6 cursor-pointer" target="_blank">Linkedin</a>                    
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}
