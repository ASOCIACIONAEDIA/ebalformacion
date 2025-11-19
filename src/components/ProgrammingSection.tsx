import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Users, Clock, Award, Info, GraduationCap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allCourses } from '../data/courses';

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

const featuredCourseIds = ['ia-aplicada-nocode', 'bootcamp-ai-engineer'];
const featuredCourses = allCourses.filter(course => 
  featuredCourseIds.includes(course.id)
);

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

          <motion.div 
            className="mt-20 mb-12" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
           > 
            <h3 className="text-3xl md:text-4xl font-medium text-center mb-12 font-nunito">Programas Destacados</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {featuredCourses.map((course, index) => {
                 let priceDisplay = course.price ? `${course.price}€` : course.financingInfo || 'Consultar';
                 if (!course.price && course.type === 'programacion') {
                   priceDisplay = course.financingInfo || 'Consultar Plan';
                 }
                 const linkTo = `/curso/${course.id}`;
                 return (
                   <Link 
                      to={linkTo}
                      key={course.id}
                      className="block group"
                   >
                      <motion.div
                        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 h-full flex flex-col md:flex-row"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <div className="md:w-1/3 flex-shrink-0">
                          <img 
                            src={course.imageUrl} 
                            alt={course.title} 
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="p-6 flex flex-col justify-between flex-grow">
                          <div>
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mb-2 ${course.type === 'bonificable' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>
                              {course.type === 'bonificable' ? 'BONIFICABLE' : 'PROGRAMACIÓN'}
                            </span>
                            <h4 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-purple-700 transition-colors font-nunito">{course.title}</h4>
                            <p className="text-sm text-gray-600 mb-4">{course.shortDescription}</p>
                          </div>
                          <div className="text-xs text-gray-500 space-y-1 mt-auto pt-3 border-t border-gray-200">
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1.5 flex-shrink-0" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <Award className="w-3 h-3 mr-1.5 flex-shrink-0" />
                              <span>{course.certification}</span>
                            </div>
                            <div className="flex items-center">
                              <Info className="w-3 h-3 mr-1.5 flex-shrink-0" />
                              <span>{priceDisplay}</span>
                            </div>
                            <div className="flex items-center text-green-600">
                              <CheckCircle className="w-3 h-3 mr-1.5 flex-shrink-0" />
                              <span>{course.fundaeInfo}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgrammingSection;