import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollPosition(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Professional gradient overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/30"></div>
      </div>

      {/* Subtle animated shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10 pt-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo/Brand */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-light text-blue-200 mb-2 tracking-wide">
              EBAL FORMACION
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto"></div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Formación Profesional en<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-200">
              Inteligencia Artificial y SAP
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Impulsa tu carrera con formación especializada en las tecnologías más demandadas del mercado
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/cursos"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block w-full sm:w-auto"
            >
              Explorar Cursos
            </Link>
            <Link
              to="/sobrenosotros"
              className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition-all inline-block w-full sm:w-auto"
            >
              Conoce Ebal
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 text-blue-200 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Formación Certificada</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              <span>Expertos del Sector</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Metodología Práctica</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToContent}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown className="h-10 w-10 text-white opacity-70" />
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
        style={{
          transform: `translateY(${scrollPosition > 0 ? '0' : '100%'})`,
          transition: 'transform 0.3s ease-out'
        }}
      />
    </div>
  );
};

export default Hero;