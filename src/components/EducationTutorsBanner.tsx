import React from 'react';
import { Star } from 'lucide-react';

const tutors = [
  {
    name: 'Javier Prada Oliva',
    image: '/assets/javier.jpg',
    linkedin: 'https://www.linkedin.com/in/javier-prada-oliva/',
    description: 'Profesor FP Informática | Dinamizador e impulsor de Comunidades Educativas Iberoamericanas | Asesor de Tecnologías Educativas | Co-fundador de IAEducativa y Competencia Digital Cero (ONGs)'
  },
  {
    name: 'Salvador Montaner',
    image: '/assets/salvador.jpg',
    linkedin: 'https://www.linkedin.com/in/salvadormontanervillalba/',
    description: 'Líder en Innovación Educativa con IA | Consultor en Transformación Digital Docente | CEO EduRevolution AI | salvadormontaner.com & IAEducativa.org'
  },
  {
    name: 'Abraham Bravo',
    image: '/assets/abraham.jpg',
    linkedin: 'https://www.linkedin.com/in/abraham-b-5840371a4/',
    description: 'AI Engineer & Data Engineer | Divulgador de IA | Experto en IA generativa e implementación en diferentes sectores | Vicepresidente de Ebal Formacion'
  },
  {
    name: 'Victor Ortin',
    image: '/assets/victorortin.jpg',
    linkedin: 'https://www.linkedin.com/in/victor-ortin-montiel-10649834b/',
    description: 'Experto en IA No-Code | Formador de IA No-Code | Venta de Servicios con Inteligencia Artificial'
  }
];

export const EducationTutorsBanner: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
          <Star className="h-4 w-4 mr-1.5 text-purple-500" fill="currentColor"/> Equipo Docente y Promotor
        </span>
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Tutores y Promotores del Curso
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Conoce a los expertos que impulsan la innovación educativa con IA
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tutors.map((tutor, index) => (
          <div key={tutor.name} className="bg-purple-50 p-6 rounded-xl shadow-lg flex flex-col items-center border border-purple-100 hover:shadow-xl transition-shadow">
            <a href={tutor.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={tutor.image} alt={tutor.name} className="w-20 h-20 rounded-full object-cover border-2 border-purple-300 mb-3 hover:scale-105 transition-transform" />
            </a>
            <a href={tutor.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-900 hover:underline text-lg mb-1 flex items-center gap-1">
              {tutor.name}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="inline-block ml-1 text-blue-600"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.532 0-1.768 1.197-1.768 2.434v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v4.73z"/></svg>
            </a>
            <p className="text-sm text-gray-700 mb-2 text-center">{tutor.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationTutorsBanner; 