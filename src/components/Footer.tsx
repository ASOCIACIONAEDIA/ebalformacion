import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 relative">
        <button
          onClick={scrollToTop}
          className="absolute -top-6 right-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white p-3 rounded-full shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl z-10"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-6 w-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="mb-6 md:mb-0">
            <img 
              src="https://ebalit.com/wp-content/uploads/2023/08/cropped-logo-ebal-top.png" 
              alt="Logo Ebal Formacion" 
              className="h-12 mb-6 brightness-0 invert opacity-90" 
              loading="lazy"
            />
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Ebal Formacion. Transformación digital a través de SAP e Inteligencia Artificial.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full mr-3"></span>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Cursos
                </Link>
              </li>
              <li>
                <Link to="/sobrenosotros" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Noticias
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full mr-3"></span>
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/politica-privacidad" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/politica-cookies" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/aviso-legal" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Aviso Legal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full mr-3"></span>
              Contacto
            </h3>
            <div className="space-y-4 text-gray-400">
              <p className="flex items-start group">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="hover:text-white transition-colors">Gran Via Asima, 31, piso 3 oficina 11<br />Norte, 07009 Palma, Balearic Islands, España</span>
              </p>
              <p className="flex items-center group">
                <Mail className="h-5 w-5 mr-3 text-purple-400 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                <a href="mailto:web@ebalit.com" className="hover:text-white transition-colors">web@ebalit.com</a>
              </p>
              <p className="flex items-center group">
                <Phone className="h-5 w-5 mr-3 text-purple-400 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                <a href="tel:+34644259614" className="hover:text-white transition-colors">+34 644 25 96 14</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ebal Formacion. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;