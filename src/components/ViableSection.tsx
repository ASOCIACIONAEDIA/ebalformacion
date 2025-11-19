import { motion } from 'framer-motion';
import { Lightbulb, Brain, Clock, Users, BarChart, Shield } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Lightbulb className="h-6 w-6" />,
    title: 'Tutor IA Personal',
    description: 'Un asistente inteligente que te acompaña 24/7 adaptándose a tu ritmo de aprendizaje.'
  },
  {
    id: 2,
    icon: <Brain className="h-6 w-6" />,
    title: 'Contenido Adaptativo',
    description: 'Material que evoluciona según tus necesidades, preferencias y progreso.'
  },
  {
    id: 3,
    icon: <Clock className="h-6 w-6" />,
    title: 'Aprendizaje a Tu Ritmo',
    description: 'Flexibilidad total para estudiar cuando y donde quieras, sin horarios fijos.'
  },
  {
    id: 4,
    icon: <Users className="h-6 w-6" />,
    title: 'Comunidad Activa',
    description: 'Conecta con otros estudiantes y profesionales para compartir experiencias.'
  },
  {
    id: 5,
    icon: <BarChart className="h-6 w-6" />,
    title: 'Análisis de Progreso',
    description: 'Seguimiento detallado de tu evolución con métricas personalizadas.'
  },
  {
    id: 6,
    icon: <Shield className="h-6 w-6" />,
    title: 'Certificación Reconocida',
    description: 'Obtén certificados validados por la industria al completar los cursos.'
  },
];

const ViableSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-100 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-200 rounded-full filter blur-3xl opacity-40"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-200 rounded-full filter blur-3xl opacity-40"></div>
              <img 
                src="/assets/logo-Ebal Formacion.png" 
                alt="Ebal Formacion VIABLE" 
                className="h-16 mb-6"
              />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nuestra Metodología de <span className="text-purple-600">Estudio Online</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                VIABLE revoluciona la educación en inteligencia artificial mediante un sistema de aprendizaje
                personalizado con un tutor IA que se adapta a las necesidades individuales de cada estudiante.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4 text-purple-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Tasa de finalización un 85% superior a los cursos tradicionales</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4 text-purple-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Satisfacción de los estudiantes superior al 94%</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4 text-purple-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Empleabilidad mejorada en un 70% tras la certificación</span>
                </li>
              </ul>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
                Conoce VIABLE
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600 opacity-5 rounded-full -mr-20 -mt-20"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div key={feature.id} className="p-6 rounded-xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all">
                    <div className="bg-purple-100 text-purple-600 p-3 rounded-full inline-flex mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600 opacity-5 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ViableSection;