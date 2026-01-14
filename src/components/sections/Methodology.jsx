import { Zap, Shield, Target, Code } from 'lucide-react';
import Reveal from "../animations/Reveal";
const scrumSteps = [
  {
    number: 1,
    title: 'Sprint Planning',
    description: 'Planificación y definición de objetivos',
  },
  {
    number: 2,
    title: 'Daily Standups',
    description: 'Sincronización diaria del equipo',
  },
  {
    number: 3,
    title: 'Sprint Review',
    description: 'Revisión y demostración de resultados',
  },
  {
    number: 4,
    title: 'Retrospective',
    description: 'Mejora continua del proceso',
  },
];

const benefits = [
  {
    icon: Target,
    title: 'Entregas Incrementales',
    description: 'Resultados tangibles en cada sprint con feedback constante',
  },
  {
    icon: Zap,
    title: 'Flexibilidad y Adaptación',
    description: 'Capacidad de ajustar prioridades según necesidades del cliente',
  },
  {
    icon: Shield,
    title: 'Calidad Continua',
    description: 'Pruebas y validación en cada iteración del desarrollo',
  },
  {
    icon: Code,
    title: 'Colaboración Efectiva',
    description: 'Comunicación transparente y trabajo en equipo constante',
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal animation="zoomIn">
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Trabajo con <span className="text-blue-400">metodologías ágiles</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Desarrollo eficiente y adaptable usando las mejores prácticas de la industria
          </p>
        </header>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Proceso Scrum */}
          <Reveal animation="slideRight">
          <article className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Zap className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-400">SCRUM</h3>
                <p className="text-gray-400">Framework Ágil</p>
              </div>
            </div>

            {/* Ciclo Scrum */}
            <div className="space-y-4">
              {scrumSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-center gap-4 bg-gray-900/50 rounded-xl p-4 border border-gray-700"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{step.title}</h4>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
          </Reveal>

          {/* Beneficios */}
          <Reveal animation="slideLeft">
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-6">Beneficios de trabajar ágil</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Implemento metodologías ágiles para garantizar entregas iterativas, 
                comunicación constante y adaptabilidad ante cambios en los requisitos del proyecto.
              </p>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-500/10 rounded-lg">
                        <Icon className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                        <p className="text-gray-400 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}