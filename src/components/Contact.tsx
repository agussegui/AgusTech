import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"; 
import { Mail, MessageSquare, Send, User } from "lucide-react";

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
        <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Send className="h-8 w-8 text-sky-400" />
            <h2 className="text-4xl font-bold text-white">Contáctame</h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte.
          </p>
        </div>


        <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Envíame un mensaje</h3>
            <p className="text-gray-400">Completa el formulario y te responderé lo antes posible.</p>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <User className="h-4 w-4" />
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Mail className="h-4 w-4" />
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <MessageSquare className="h-4 w-4" />
                Mensaje
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all min-h-[120px] resize-vertical"
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-sky-800 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
                <Send className="h-4 w-4" />
                Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
    );
}
