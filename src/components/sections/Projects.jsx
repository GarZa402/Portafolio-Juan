import { Code, Briefcase, Github, ExternalLink } from "lucide-react";
import Reveal from "../animations/Reveal";
import Image from "next/image";

// Datos de proyectos para SEO
const projects = [
  {
    title: "SalleConnect",
    category: "PROYECTO UNIVERSITARIO",
    description:
      "Plataforma web integral para estudiantes universitarios con chatbot, foro, sistema de asesorías, gestión de objetos perdidos, mapa y pago de parqueadero.",
    technologies: ["Laravel", "MySQL", "Blade", "PHP"],
    icon: Code,
    url: "https://github.com/GarZa402/SalleConnect",
    image: "/salleconnect.png",
  },
  {
    title: "Attendo",
    category: "SISTEMA EMPRESARIAL",
    description:
      "Sistema web de gestión de asistencias empresariales con control de horarios, usuarios, departamentos y generación de reportes automatizados.",
    technologies: ["Laravel", "Apache Airflow", "MySQL"],
    icon: Briefcase,
    url: "https://github.com/GarZa402/Attendo",
    image: "/attendo.png",
  },
  {
    title: "Lubricantes Eduard",
    category: "SITIO WEB",
    description:
      "Plataforma web para Lubricantes Eduard que exhibe de forma interactiva su catálogo de productos, servicios especializados, trayectoria profesional del equipo y galería visual optimizada para conversión de clientes.",
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    icon: Code,
    url: "https://www.lubricanteseduard.com",
    image: "/eduard.png",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - SEO optimizado */}
        <Reveal animation="zoomIn">
          <header className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Proyectos <span className="text-blue-400">destacados</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Soluciones reales diseñadas para usuarios y empresas
            </p>
          </header>
        </Reveal>

        {/* Grid de proyectos */}
        <Reveal animation="fadeUp">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <article
                  key={index}
                  className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all group"
                >
                  {/* Imagen del proyecto */}
                  <div className="relative w-full h-48 bg-gray-900 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`Captura de pantalla de ${project.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="text-sm text-blue-400 font-semibold mb-2">
                          {project.category}
                        </div>
                        <h2 className="text-3xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h2>
                      </div>
                      <div className="p-3 bg-gray-900 rounded-xl">
                        <Icon className="text-blue-400" size={24} />
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-gray-900 text-blue-400 rounded-lg text-sm font-semibold border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link a GitHub */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-4 transition-all"
                      aria-label={`Ver ${project.title} en Internet`}
                    >
                      <ExternalLink size={20} />
                      Ver en Internet
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
