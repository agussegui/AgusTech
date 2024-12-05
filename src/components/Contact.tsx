import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"; 
import { Send } from "lucide-react";


export default function Contact() {
    const formRef = useRef<HTMLFormElement | null>(null); // Inicializa la referencia
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");


    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Valida si los campos están vacíos
        if (!name || !email || !message) {
            setError("Por favor, completa todos los campos.");
            toast.error("Por favor, completa todos los campos.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

        const templateParams = {
            from_name: name,
            reply_to: email,
            message,
        };

        emailjs.send(
            import.meta.env.VITE_EMAIL_SERVICE_ID!, // Aquí accedes a las variables con Vite
            import.meta.env.VITE_EMAIL_TEMPLATE_ID!,
            templateParams!,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
            
        )
        .then(
            () => {
                toast.success("¡Mensaje enviado con éxito!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setName("");
                setEmail("");
                setMessage("");
                setError("");
            },
            () => {
                
                toast.error("Error al enviar el correo. Intenta de nuevo.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                },);
            }
        );
    };

    return (
        <div className="my-28 scroll-m-5 w-full mx-auto lg:max-w-4xl md:max-w-2xl">
            <div className="flex justify-start items-center mb-8 p-4">
                <Send className="size-12" />
                <h2 className="text-4xl ml-5 text-indigo-500 font-bold text-center">Contáctame</h2>
            </div>
            
            <form ref={formRef} onSubmit={sendEmail} className="mx-auto p-4">
                <div className="flex flex-col md:flex-row md:justify-center">
                    <div className="flex flex-col justify-center mb-4 md:w-1/2 md:pr-2">
                        <label htmlFor="name" className="my-6 skills-contact">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 pr-10 text-md border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-200 ease-in-out contact-color-input"
                            placeholder="Tu nombre"
                            required
                        />
                        <label htmlFor="email" className="my-6 skills-contact">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 pr-10 text-md border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-200 ease-in-out contact-color-input my-2"
                            placeholder="Tu correo"
                            required
                        />
                        <label htmlFor="message" className="my-6 skills-contact">Mensaje</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-4 py-2 pr-10 text-md border-b-2 my-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-200 ease-in-out contact-color-input"
                            placeholder="Tu mensaje"
                            required
                        ></textarea>
                    </div>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-indigo-600 p-3 rounded-lg flex justify-center font-bold hover:bg-indigo-500 transition-colors"
                    >
                        Enviar Mensaje
                    </button>
                </div>
            </form>
        </div>
    );
}
