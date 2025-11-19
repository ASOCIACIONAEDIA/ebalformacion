import { GraduationCap, Award, Target, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  {
    id: 1,
    title: 'Formación Especializada',
    description: 'Cursos y programas en Inteligencia Artificial, SAP y tecnologías emergentes.',
    icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 2,
    title: 'Experiencia Profesional',
    description: 'Equipo con amplia trayectoria en consultoría tecnológica y formación empresarial.',
    icon: <Award className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 3,
    title: 'Metodología Práctica',
    description: 'Aprendizaje basado en casos reales y proyectos aplicados al entorno laboral.',
    icon: <Target className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 4,
    title: 'Innovación Continua',
    description: 'Actualización constante de contenidos según las demandas del mercado.',
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
  },
];

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Sobre Ebal Formacion</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-center text-blue-600 mb-8 font-semibold">
            Tu Partner en Formación Tecnológica
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ebal es una empresa especializada en <strong>consultoría tecnológica y formación profesional</strong>,
            con foco en <strong>Inteligencia Artificial, SAP y transformación digital</strong>.
            Ayudamos a profesionales y empresas a desarrollar las competencias necesarias para liderar
            en un entorno tecnológico en constante evolución.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              variants={itemVariants}
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              ¿Por qué elegir Ebal Formacion?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">+15</div>
                <div className="text-blue-100">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">+1000</div>
                <div className="text-blue-100">Profesionales Formados</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Satisfacción</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/sobrenosotros"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Conoce Más Sobre Nosotros
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;