import { Award, ExternalLink } from 'lucide-react';
import Reveal from "../animations/Reveal";

const skillsData = {
  frontend: {
    title: 'Frontend',
    technologies: ['React', 'HTML/CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Next.js'],
  },
  backend: {
    title: 'Backend',
    technologies: ['Laravel', 'Node.js', 'PHP', 'Python', 'Express.js', 'Django'],
  },
  database: {
    title: 'Database / DevOps',
    technologies: ['MySQL', 'Git', 'GitHub', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Firebase'],
  },
  tools: {
    title: 'Herramientas',
    technologies: ['Odoo', 'n8n', 'WordPress', 'Netlify', 'Vercel'],
  },
};

const certifications = [
  {
    name: 'EF SET Inglés C1 Avanzado',
    url: 'https://cert.efset.org/es/ojRoU7',
  },
  {
    name: 'Cisco CyberOps Associate',
    url: 'https://www.credly.com/badges/a28dc2cc-066a-47cc-bb41-a844a84067c7/linked_in_profile',
  },
  {
    name: 'Python Developer – Edutin Academy',
    url: 'https://app.edutin.com/verify/11679944',
  },
  {
    name: 'Cisco Cybersecurity Essentials',
    url: 'https://www.credly.com/badges/a6d571c3-7a07-4cf3-8bf7-70118b9a25e9/linked_in_profile',
  },
  {
    name: 'Introduction to Cybersecurity – Cisco',
    url: 'https://www.credly.com/badges/648fdd30-9df2-4ceb-9992-6ceb4212ee44/linked_in_profile',
  },
  {
    name: 'EF SET Inglés B2 Intermedio Alto',
    url: 'https://cert.efset.org/es/ojRoU7',
  },
  {
    name: 'AWS Certified Cloud Practitioner CLF-C02 - En Proceso',
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Stack Tecnológico */}
          <Reveal animation="slideRight">
          <article className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="mb-6">
              <h3 className="text-sm text-gray-400 mb-2">Stack Tecnológico</h3>
              <p className="text-3xl font-bold text-blue-400">Full Stack Developer</p>
            </div>

            <div className="space-y-6">
              {Object.entries(skillsData).map(([key, skill]) => (
                <div key={key}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-semibold">{skill.title}</span>
                  </div>
                  <div className="h-3 bg-gray-900 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {skill.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-900 px-2 py-1 rounded text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
          </Reveal>

          {/* Certificaciones */}
          <Reveal animation="slideLeft">
          <div>
            <h3 className="text-3xl font-bold mb-8">Certificaciones y Logros</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-blue-500 transition-all group"
                  aria-label={`Ver certificación: ${cert.name}`}
                >
                  <div className="p-3 bg-blue-500 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Award className="text-white" size={20} />
                  </div>
                  <span className="text-gray-300 font-medium flex-1">{cert.name}</span>
                  {cert.url && (
                    <ExternalLink
                      className="text-gray-600 group-hover:text-blue-400 transition-colors"
                      size={20}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}