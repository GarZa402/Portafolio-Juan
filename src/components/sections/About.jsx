import { Briefcase, GraduationCap } from "lucide-react";
import Reveal from "../animations/Reveal";

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal animation="slideRight">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Tu <span className="text-blue-400">socio confiable</span> en
                desarrollo web.
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Estudiante universitario de Ingeniería Informática con enfoque
                en desarrollo web y tecnología. Apasionado por aplicar
                conocimientos teóricos en proyectos reales y construir
                soluciones innovadoras.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Con mentalidad proactiva y compromiso con el aprendizaje
                continuo, trabajo en crear experiencias web que generen impacto
                y valor.
              </p>
            </div>
          </Reveal>

          {/* Cards - Contenido estático para SEO */}
          <Reveal animation="slideLeft">
            <div className="space-y-6">
              <article className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400 font-semibold">
                    Experiencia
                  </span>
                  <Briefcase
                    className="text-blue-400"
                    size={24}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-3xl font-bold text-blue-400 mb-2">
                  Freelance Developer
                </h3>
  
                <p className="text-gray-400">Junio 2024 - Presente</p>
              </article>

              <article className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm text-gray-400">Educación</h3>
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <p className="text-3xl font-bold mb-2">
                  Ingeniería Informática
                </p>
                <p className="text-gray-400">Universidad de La Salle</p>
              </article>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
