// interfaz para cada tecnología
interface Technology {
  name: string;
  logo: string;
  bgColor: string;
}

//  interfaz para cada proyecto
interface Project {
  title: string;
  image: string;
  subtitle:string;
  technologies: Technology[];
  githubLink: string;
  demoLink: string;
}

// Array de proyectos
export const projects: Project[] = [
  {
    title: "UpTask",
    image: "../task.webp",
    subtitle: "Crea tus Proyectos y administra Tareas | UpTask",
    technologies: [
      { name: "React", logo: "./react-2.svg", bgColor: "bg-blue-950" },
      { name: "Tailwind", logo: "./tailwind.svg", bgColor: "bg-sky-800" },
      { name: "MongoDB", logo: "./mongodb.svg", bgColor: "bg-green-800" },
      { name: "TypeScript", logo: "./typescript.svg", bgColor: "bg-blue-950" },
      { name: "Node.js", logo: "./nodejs.svg", bgColor: "bg-emerald-800" },
    ],
    githubLink: "https://github.com/agussegui/Uptask-Frontend",
    demoLink: "https://github.com/agussegui/Uptask-Frontend",
  },
  {
    title: "DevWebCamp",
    image: "../devwebcamp.webp",
    subtitle: "Compra y Reserva tickets para eventos | DevWebCamp",
    technologies: [
      { name: "PHP", logo: "./php.svg", bgColor: "bg-gray-800" },
      { name: "SCSS", logo: "./sass.svg", bgColor: "bg-purple-950" },
      { name: "MYSQL", logo: "./mysql.svg", bgColor: "bg-sky-400" },
      { name: "JavaScript", logo: "./javascript.svg", bgColor: "bg-yellow-700" },
    ],
    githubLink: "https://github.com/agussegui/DevWebCamp",
    demoLink: "https://github.com/agussegui/DevWebCamp",
  },
  {
    title: "Paint",
    image: "../paint.webp",
    subtitle: "Inspirate y pinta lo que vos quieras | Paint",
    technologies: [
      { name: "Next.js", logo: "./next-js.svg", bgColor: "bg-slate-500" },
      { name: "TypeScript", logo: "./typescript.svg", bgColor: "bg-blue-950" },
      { name: "Tailwind", logo: "./tailwind.svg", bgColor: "bg-sky-800" },
      { name: "React", logo: "./react-2.svg", bgColor: "bg-blue-950" },
    ],
    githubLink: "https://github.com/agussegui/PaintNote-",
    demoLink: "https://paintnote.vercel.app/",
  },
  {
    title: "Agencia de Viajes",
    image: "../agenciaviajes.webp",
    subtitle: "Viaja a través del mundo | Agencia de Viajes",
    technologies: [
      { name: "Pug", logo: "./pug.svg", bgColor: "bg-gray-800" },
      { name: "CSS", logo: "./css.svg", bgColor: "bg-blue-800" },
      { name: "MYSQL", logo: "./mysql.svg", bgColor: "bg-sky-500" },
      { name: "JavaScript", logo: "./javascript.svg", bgColor: "bg-yellow-700" },
      
    ],
    githubLink: "https://github.com/agussegui/Travel-agency",
    demoLink: "https://travel-agency-9i2i.onrender.com/",
  },
  {
    title: "Ecommerce",
    image: "../ecommerce.webp",
    subtitle: "Crea y Administra tu Tienda | Tienda Online",
    technologies: [
      { name: "Next.js", logo: "./next-js.svg", bgColor: "bg-slate-500" },
      { name: "TypeScript", logo: "./typescript.svg", bgColor: "bg-blue-950" },
      { name: "Tailwind", logo: "./tailwind.svg", bgColor: "bg-sky-950" },
      { name: "React", logo: "./react-2.svg", bgColor: "bg-blue-950" },
      { name: "MYSQL", logo: "./mysql.svg", bgColor: "bg-sky-600" },
      { name: "Prisma", logo: "./prisma.svg", bgColor: "bg-gray-600" },
      
      
    ],
    githubLink: "https://github.com/agussegui/Ecommerce-Store",
    demoLink: "https://github.com/agussegui/Ecommerce-Store",
  },
  {
    title: "Planificador",
    image: "../organizador.png",
    subtitle: "Planicifica tus Gastos | Expense-Planner",
    technologies: [
      { name: "JavaScript", logo: "./javascript.svg", bgColor: "bg-yellow-700" },
      { name: "CSS", logo: "./css.svg", bgColor: "bg-blue-800" },
      { name: "React", logo: "./react-2.svg", bgColor: "bg-blue-950" },
      
    ],
    githubLink: "https://github.com/agussegui/Ecommerce-Store",
    demoLink: "https://expense-beta-khaki.vercel.app/",
  },
  
];