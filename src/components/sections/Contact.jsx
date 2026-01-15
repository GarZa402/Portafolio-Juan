import { Mail, Phone, Linkedin, Github, Rocket } from 'lucide-react';


export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decoraciones de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge de disponibilidad */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-blue-400 text-sm font-semibold">
            Disponible para proyectos
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-bold mb-6">
          ¿Listo para <span className="text-blue-400">construir algo increíble?</span>
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Transforma tu visión en una solución digital real. Trabajemos juntos en tu próximo proyecto.
        </p>

        {/* Tarjetas de contacto */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <a
            href="mailto:juanjosegarcia756@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar correo electrónico"
            className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-blue-500 rounded-xl p-6 transition-all group"
          >
            <Mail className="text-blue-400" size={24} />
            <div className="text-left">
              <div className="text-sm text-gray-400">Email</div>
              <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                Enviar mensaje
              </div>
            </div>
          </a>

          <a
            href="https://wa.me/573007145281?
            text=Hola%20Juan%20José%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20sobre%20un%20proyecto."
            aria-label="Enviar mensaje por WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-blue-500 rounded-xl p-6 transition-all group"
          >
            <Phone className="text-green-400" size={24} />
            <div className="text-left">
              <div className="text-sm text-gray-400">WhatsApp</div>
              <div className="text-white font-semibold group-hover:text-green-400 transition-colors">
                Enviar mensaje
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/juanjgarciav"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-blue-500 rounded-xl p-6 transition-all group"
            aria-label="Conectar en LinkedIn"
          >
            <Linkedin className="text-blue-400" size={24} />
            <div className="text-left">
              <div className="text-sm text-gray-400">LinkedIn</div>
              <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                Conectar
              </div>
            </div>
          </a>
        </div>

        {/* CTAs principales */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:juanjosegarcia756@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar correo electrónico"
            className="px-10 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold text-lg transition-all shadow-lg shadow-blue-500/50 hover:shadow-blue-500/75 inline-flex items-center justify-center gap-2"
          >
            <Rocket size={24} />
            Iniciar Proyecto
          </a>
          
          <a
            href="https://www.linkedin.com/in/juanjgarciav"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 border border-blue-500 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
            aria-label="Conectar en LinkedIn"
          >
            <Linkedin size={24} />
            LinkedIn
          </a>
          
          <a
            href="https://github.com/GarZa402"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-blue-500 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
            aria-label="Conectar en GitHub"
          >
            <Github size={24} />
            GitHub
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-8">
          💙 Respuesta en menos de 24 horas • Medellín, Colombia
        </p>
      </div>
    </section>
  );
}