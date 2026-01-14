import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01.",
    title: "Desarrollo Frontend",
    description:
      "Interfaces modernas y responsivas con React, HTML5, CSS3 y JavaScript. Experiencia de usuario excepcional.",
    highlighted: false,
  },
  {
    number: "02.",
    title: "Desarrollo Backend",
    description:
      "APIs robustas y escalables con Laravel, Node.js y PHP. Arquitecturas eficientes y seguras.",
    highlighted: true,
  },
  {
    number: "03.",
    title: "Bases de Datos",
    description:
      "Diseño e implementación de bases de datos MySQL optimizadas. Gestión eficiente de información.",
    highlighted: false,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Mis <span className="text-blue-400">Servicios</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Desarrollo soluciones web completas, desde el diseño hasta la
            implementación
          </p>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={index}
              className={`rounded-2xl p-8 border transition-all group ${
                service.highlighted
                  ? "bg-blue-500 border-blue-400 transform md:scale-105 shadow-xl shadow-blue-500/20"
                  : "bg-gray-800 border-gray-700 hover:border-blue-500"
              }`}
            >
              <div
                className={`text-5xl font-bold mb-4 ${
                  service.highlighted ? "text-blue-300" : "text-gray-700"
                }`}
              >
                {service.number}
              </div>

              <h3
                className={`text-2xl font-bold mb-3 ${
                  service.highlighted
                    ? "text-white"
                    : "text-white group-hover:text-blue-400 transition-colors"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`mb-6 ${
                  service.highlighted ? "text-blue-100" : "text-gray-400"
                }`}
              >
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
