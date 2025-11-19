import { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { bonificableCourses } from '../data/courses';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [programmingCoursesOpen, setProgrammingCoursesOpen] = useState(false);

  const logoUrl = "https://ebalit.com/wp-content/uploads/2023/08/cropped-logo-ebal-top.png";

  // Main links - Corrected path for Programación
  const mainLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Cursos de Programación', path: '/programacion' },
    { name: 'Certificaciones', path: '/certificaciones' },
    { name: 'Sello AI+', path: '/sello-ai-plus' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contacto' },
    { name: 'Sobre Ebal Formacion', path: '/sobrenosotros' },
    { name: 'Noticias', path: '/news' },
  ];

  // Use imported bonificableCourses for the dropdown links
  const courseDropdownLinks = bonificableCourses.map(course => ({
    name: course.title,
    path: course.id === 'ia-fundamentals' ? '/ia-fundamentals' :
      course.id === 'desconexion-digital' ? '/desconexion-digital' :
        `/curso/${course.id}`
  }));

  // Type definitions remain the same
  type LinkType = { name: string; path: string };

  // Helper functions (renderLink, renderMobileLink) remain the same
  const renderLink = (link: LinkType) => (
    <Link
      key={link.name}
      to={link.path}
      className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
    >
      {link.name}
    </Link>
  );

  const renderMobileLink = (link: LinkType) => (
    <Link
      key={link.name}
      to={link.path}
      className="block text-gray-700 hover:bg-purple-50 rounded-md px-3 py-2 font-medium"
      onClick={() => setIsOpen(false)}
    >
      {link.name}
    </Link>
  );

  // Use courseDropdownLinks for the dropdown content
  const coursesDropdown = (
    <div className="relative group">
      <button
        className="flex items-center text-gray-700 hover:text-purple-600 transition-colors font-medium"
      >
        Cursos Bonificables <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      <div className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left z-50">
        <div className="py-1">
          {courseDropdownLinks.map((courseLink) => (
            <Link
              key={courseLink.name}
              to={courseLink.path}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700"
            >
              {courseLink.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  // Programming courses dropdown for desktop
  const programmingCoursesDropdown = (
    <div className="relative group">
      <button className="inline-flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 focus:outline-none">
        Cursos de Programación
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ring-1 ring-black ring-opacity-5">
        <div className="py-1">
          <Link to="/bootcamp" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            Máster - Bootcamp AI Engineer
          </Link>
          <Link to="/master-ingenieria-datos" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            Master en Ingeniería de Datos
          </Link>
          <Link to="/airflow-profesional" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            Airflow Profesional
          </Link>
        </div>
      </div>
    </div>
  );

  // Use courseDropdownLinks for the mobile dropdown content
  const mobileCoursesDropdown = (
    <div className="border-t border-gray-200 pt-2 mt-2">
      <button
        onClick={() => setCoursesOpen(!coursesOpen)}
        className="flex items-center justify-between w-full px-3 py-2 font-medium text-gray-700 hover:bg-purple-50 rounded-md"
      >
        Cursos Bonificables
        <ChevronDown className={`h-5 w-5 transition-transform ${coursesOpen ? 'rotate-180' : ''}`} />
      </button>
      {coursesOpen && (
        <div className="pl-4 mt-1 space-y-1">
          {courseDropdownLinks.map((courseLink) => (
            <Link
              key={courseLink.name}
              to={courseLink.path}
              className="block px-3 py-2 text-sm text-gray-600 hover:bg-purple-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {courseLink.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  // Mobile programming courses dropdown
  const mobileProgrammingCoursesDropdown = (
    <div className="border-t border-gray-200 pt-2 mt-2">
      <button
        onClick={() => setProgrammingCoursesOpen(!programmingCoursesOpen)}
        className="flex items-center justify-between w-full px-3 py-2 font-medium text-gray-700 hover:bg-indigo-50 rounded-md"
      >
        Cursos de Programación
        <ChevronDown className={`h-5 w-5 transition-transform ${programmingCoursesOpen ? 'rotate-180' : ''}`} />
      </button>
      {programmingCoursesOpen && (
        <div className="pl-4 mt-1 space-y-1">
          <Link
            to="/bootcamp"
            className="block px-3 py-2 text-sm text-gray-600 hover:bg-indigo-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Bootcamp AI Engineer
          </Link>
          <Link
            to="/master-ingenieria-datos"
            className="block px-3 py-2 text-sm text-gray-600 hover:bg-indigo-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Master en Ingeniería de Datos
          </Link>
          <Link
            to="/airflow-profesional"
            className="block px-3 py-2 text-sm text-gray-600 hover:bg-indigo-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Airflow Profesional
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4">
      <nav className="container mx-auto px-6 py-3 bg-white rounded-xl shadow-lg">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoUrl} alt="Ebal Formacion Logo" className="h-10" />
          </Link>

          {/* Desktop Menu - Uses updated mainLinks path */}
          <div className="hidden md:flex items-center space-x-6">
            {renderLink(mainLinks[0])} {/* Inicio */}
            {coursesDropdown} {/* Cursos Bonificables Dropdown */}
            {programmingCoursesDropdown} {/* Cursos de Programación Dropdown */}
            {renderLink(mainLinks[2])} {/* Certificaciones */}
            {renderLink(mainLinks[4])} {/* Blog */}
            {renderLink(mainLinks[5])} {/* Contacto */}
            {renderLink(mainLinks[6])} {/* Sobre Ebal Formacion */}

            <button className="flex items-center text-gray-700 border border-gray-300 hover:border-gray-500 py-2 px-3 rounded-lg transition-colors text-sm">
              <Globe className="h-4 w-4 mr-1" /> ES
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Uses updated mainLinks path */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-xl mt-2 mx-4">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {renderMobileLink(mainLinks[0])} {/* Inicio */}
            {mobileCoursesDropdown} {/* Cursos Bonificables Dropdown */}
            {mobileProgrammingCoursesDropdown} {/* Cursos de Programación Dropdown */}
            {renderMobileLink(mainLinks[2])} {/* Certificaciones */}
            {renderMobileLink(mainLinks[4])} {/* Blog */}
            {renderMobileLink(mainLinks[5])} {/* Contacto */}
            {renderMobileLink(mainLinks[6])} {/* Sobre Ebal Formacion */}
            {renderMobileLink(mainLinks[7])} {/* Noticias */}

            {/* Mobile Language Button */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <button className="w-full flex items-center justify-center text-gray-700 border border-gray-300 hover:bg-gray-100 py-2 px-4 rounded-lg transition-colors">
                <Globe className="h-4 w-4 mr-2" /> ES
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;