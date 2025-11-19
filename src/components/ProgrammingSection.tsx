import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Users } from 'lucide-react';

const features = [
  {
    title: "PASIÓN",
    description: "Un nuevo tipo de educación es crucial.",
    color: "bg-coral-100",
    icon: <Brain className="h-8 w-8" />,
  },
  {
    title: "ALIANZAS",
    description: "Dicen que eres la compañía que mantienes.",
    color: "bg-purple-100",
    icon: <Users className="h-8 w-8" />,
  },
  {
    title: "TALENTO",
    description: "Hay algo especial en aprender juntos.",
    color: "bg-violet-100",
    icon: <Code className="h-8 w-8" />,
  },
  {
    title: "COMUNIDAD",
    description: "Un campus virtual con conexiones reales.",
    color: "bg-amber-100",
    icon: <Rocket className="h-8 w-8" />,
  },
];

const ProgrammingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-medium text-center text-gray-800 mb-12 font-nunito">
            La filosofía <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Ebal Formacion</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`${feature.color} rounded-3xl p-8 h-64 relative overflow-hidden shadow-md hover:shadow-lg transition-shadow`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute top-4 left-4">
                  <span className="text-sm font-medium text-gray-700 opacity-80">{feature.title}</span>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{feature.description}</h3>
                </div>
                <div className="absolute bottom-4 right-4 text-gray-500 opacity-70">
                   {feature.icon}
                 </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgrammingSection;