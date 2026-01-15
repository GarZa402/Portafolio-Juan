import Reveal from "../animations/Reveal";
import { ArrowUpRight, Github, Code, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center"
    >
      {/* Decoración SVG */}
      <svg
        className="absolute top-20 right-0 w-1/2 h-96 opacity-20"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <path
          d="M 0 200 Q 100 100 200 200 T 400 200"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 0 250 Q 100 150 200 250 T 400 250"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <header className="space-y-6">
          <div className="text-sm text-gray-400 uppercase tracking-widest">
            Desarrollador Web Junior
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Construyo <span className="text-blue-400">soluciones web</span> para
            tu futuro digital.
          </h1>

          {/* Stats */}
          <div className="flex items-center gap-6 py-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-gray-900 flex items-center justify-center text-xs font-bold">
                JJ
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-gray-900"></div>
              <div className="w-10 h-10 rounded-full bg-pink-500 border-2 border-gray-900"></div>
              <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-gray-900"></div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">2+</div>
              <div className="text-sm text-gray-400">Proyectos Reales</div>
            </div>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed">
            Estudiante de Ingeniería Informática especializado en desarrollo
            web. Creo aplicaciones escalables y eficientes usando las mejores
            prácticas de la industria.
          </p>

          <div className="flex items-center gap-4 pt-4">
            {/* Cambio de button a etiqueta <a> */}
            <a
              href="#proyectos"
              aria-label="Ver proyectos"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/50 flex items-center gap-2"
            >
              <ArrowUpRight size={20} />
              Ver Proyectos
            </a>
            
            <a
              href="https://github.com/GarZa402"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-semibold transition-all flex items-center gap-2"
              aria-label="Visitar perfil de GitHub"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </header>

        {/* Mockup Card */}
        <div className="relative">
          <Reveal animation="zoomIn">
            <div className="hidden md:block bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl transform rotate-3">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">Desarrollador</div>
                  <a
                    href="https://github.com/GarZa402"
                    aria-label="Visitar perfil de GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
                <div className="text-4xl font-bold">Juan José García</div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Code className="text-blue-400" size={20} />
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Terminal className="text-blue-400" size={20} />
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Cambio de button a etiqueta <a> */}
                <a
                  href="#contacto"
                  className="block w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all text-center"
                  aria-label="Contactar Ahora"
                >
                  Contactar Ahora
                </a>
              </div>
            </div>
          </Reveal>
          
          {/* Decoración de fondo */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-3xl opacity-20 blur-2xl -z-10"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-3xl opacity-20 blur-2xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}