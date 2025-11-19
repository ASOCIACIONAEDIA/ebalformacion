import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { newsItems, featuredArticles } from '../data/newsData';

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  useEffect(() => {
    document.title = 'Noticias - Ebal Formacion';
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentItems = newsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold flex items-center">
              <ArrowRight className="mr-2 h-8 w-8" /> Noticias
            </h1>
          </motion.div>

          <div className="flex space-x-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-400' : 'text-gray-800 hover:bg-gray-200'}`}
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-400' : 'text-gray-800 hover:bg-gray-200'}`}
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/news/${item.id}`} className="block">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 line-clamp-2">{item.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{item.subtitle}</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="px-6 pb-6">
                <Link
                  to={`/news/${item.id}`}
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800"
                >
                  Leer más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-8 h-8 rounded-full ${currentPage === index + 1
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Artículos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles && featuredArticles.length > 0 && featuredArticles.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={`/news/${item.id}`} className="block">
                  <div className="md:flex">
                    <div className="md:w-2/5 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6 flex flex-col justify-between">
                      <div>
                        <div className="text-purple-600 text-sm font-semibold mb-2 uppercase tracking-wider">{item.category}</div>
                        <h3 className="text-xl font-bold mb-3 line-clamp-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{item.subtitle}</p>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{item.date}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white"
        >
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Mantente al día con Ebal Formacion</h3>
              <p className="text-purple-100">Suscríbete a nuestro boletín para recibir las últimas noticias, anuncios de eventos y novedades sobre IA.</p>
            </div>
            <div className="md:w-1/3">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Tu dirección de email"
                  className="px-4 py-3 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button type="submit" className="bg-indigo-800 hover:bg-indigo-900 px-4 py-3 rounded-r-md transition-colors">
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;