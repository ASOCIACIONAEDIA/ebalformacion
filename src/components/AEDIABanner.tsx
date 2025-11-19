import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

const AEDIABanner = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-indigo-100"
        >
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="bg-indigo-100 rounded-full p-4">
                <Award className="h-10 w-10 text-indigo-600" />
              </div>
              <div className="bg-purple-100 rounded-full p-4">
                <GraduationCap className="h-10 w-10 text-purple-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-nunito">
              Formación Organizada con AEDIA
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Todas nuestras formaciones están organizadas junto con{' '}
              <strong className="text-indigo-700">AEDIA</strong> (Asociación Española para la Difusión de la Inteligencia Artificial), 
              recibiendo así las titulaciones correspondientes de las entidades o universidades que correspondan según cada programa formativo.
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              <div className="flex flex-col items-center">
                <img 
                  src="/assets/logo-aedia.png" 
                  alt="Logo AEDIA" 
                  className="h-16 md:h-20 object-contain mb-2"
                />
                <p className="text-sm text-gray-600 font-medium">AEDIA</p>
                <p className="text-xs text-gray-500 text-center">Asociación Española para la<br/>Difusión de la IA</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AEDIABanner;

