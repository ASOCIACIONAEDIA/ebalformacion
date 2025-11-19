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
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 relative">
        <button
          onClick={scrollToTop}
          className="absolute -top-6 right-4 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-transform hover:-translate-y-1"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-6 w-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6 md:mb-0">
            <img src="https://ebalit.com/wp-content/uploads/2023/08/cropped-logo-ebal-top.png" alt="Logo Ebal Formacion" className="h-10 mb-4" />
            <p className="text-gray-400 text-sm mb-4">
              Ebal Formacion.
              Transformación digital a través de SAP e Inteligencia Artificial.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/cursos" className="text-gray-400 hover:text-white transition-colors">Cursos</Link>
              </li>
              <li>
                <Link to="/sobrenosotros" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white transition-colors">Noticias</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/politica-privacidad" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/politica-cookies" className="text-gray-400 hover:text-white transition-colors">Política de Cookies</Link>
              </li>
              <li>
                <Link to="/aviso-legal" className="text-gray-400 hover:text-white transition-colors">Aviso Legal</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                <span>Gran Via Asima, 31, piso 3 oficina 11<br />Norte, 07009 Palma, Balearic Islands, España</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-purple-400" />
                <a href="mailto:web@ebalit.com" className="hover:text-white transition-colors">web@ebalit.com</a>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-purple-400" />
                <a href="tel:+34644259614" className="hover:text-white transition-colors">+34 644 25 96 14</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ebal Formacion. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;