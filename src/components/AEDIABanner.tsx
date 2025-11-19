import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

const AEDIABanner = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border-2 border-indigo-100 relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100/50 to-indigo-100/50 rounded-full blur-3xl -z-0"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="flex justify-center items-center gap-4 mb-8">
                <motion.div 
                  className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full p-5 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Award className="h-12 w-12 text-indigo-600" />
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-full p-5 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <GraduationCap className="h-12 w-12 text-purple-600" />
                </motion.div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-nunito">
                Formación Organizada con{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  AEDIA
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Todas nuestras formaciones están organizadas junto con{' '}
                <strong className="text-indigo-700 font-semibold">AEDIA</strong> (Asociación Española para la Difusión de la Inteligencia Artificial), 
                recibiendo así las titulaciones correspondientes de las entidades o universidades que correspondan según cada programa formativo.
              </p>
            </div>
            
            <div className="mt-12 pt-12 border-t-2 border-indigo-200">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                <motion.div 
                  className="flex flex-col items-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-lg mb-4 group-hover:shadow-xl transition-shadow">
                    <img 
                      src="/assets/logo-aedia.png" 
                      alt="Logo AEDIA" 
                      className="h-20 md:h-24 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-base text-gray-700 font-semibold">AEDIA</p>
                  <p className="text-sm text-gray-500 text-center mt-1">Asociación Española para la<br/>Difusión de la Inteligencia Artificial</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AEDIABanner;

