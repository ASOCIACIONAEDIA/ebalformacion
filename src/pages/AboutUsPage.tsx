import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, TrendingUp, Users, Award, Target } from 'lucide-react';

const AboutUsPage = () => {
  useEffect(() => {
    document.title = 'Sobre Nosotros - Ebal Formacion';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 pt-28">
      <motion.header
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">NOSOTROS</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
      </motion.header>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Ebal IT</strong>, cuyas siglas significan <strong>Enterprise Business Analytics and Logistics IT</strong> (Análisis y Logística de Negocios Empresariales de Información y tecnología), fue fundada en 2014 con el nombre de IBESAP Consulting, en Palma de Mallorca España. En 2019 se integran en IBESAP Consulting los equipos de URSASI Consultoría y WeDevelop Software Consulting, naciendo en ese momento la empresa que conocemos como EBAL IT. Desde nuestros inicios, nos hemos centrado en transformar el panorama de la consultoría tecnológica, enfocándonos en soluciones innovadoras y personalizadas.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="order-2 md:order-1">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Equipo de Ebal trabajando"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm order-1 md:order-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nuestra Visión</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nos especializamos en ofrecer una gama diversificada de servicios que incluyen <strong>desarrollo de software, formación IT, consultoría tecnológica y gestión de proyectos digitales</strong>. Con una visión orientada hacia el éxito empresarial, asistimos a las organizaciones en la optimización de sus operaciones, impulsando las ventas y reduciendo costes mediante la implementación de tecnologías avanzadas.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Esta visión está respaldada por un equipo de profesionales IT altamente cualificados, comprometidos con la excelencia y la satisfacción del cliente.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="mb-16 bg-blue-50 p-8 rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestra Trayectoria</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
          A lo largo de los años, hemos gestionado proyectos significativos en diversos sectores, incluyendo a <strong>grandes cadenas hoteleras y empresas logísticas</strong> entre nuestros clientes. Esta versatilidad y experiencia en ofrecer soluciones tecnológicas adaptadas ha fortalecido nuestra reputación, impulsándonos en una trayectoria de crecimiento sostenido.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          En respuesta a las demandas actuales y los avances tecnológicos, en 2022 inauguramos departamentos de <strong>RPA (Automatización Robótica de Procesos) y Big Data</strong>, ampliando así nuestro portafolio de servicios y reafirmando nuestro compromiso con la vanguardia tecnológica. Como líderes en servicios IT, nuestro propósito es seguir siendo el aliado preferido para las empresas en España que buscan adaptarse y prosperar en un entorno tecnológico en constante evolución.
        </p>
      </motion.section>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <Code className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Consultoría Tecnológica</h3>
            <p className="text-gray-600">
              Ofrecemos servicios de consultoría tecnológica y SAP, con un equipo altamente cualificado técnica y funcionalmente en finanzas y logística.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-600">
            <Briefcase className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Implementación SAP</h3>
            <p className="text-gray-600">
              Implantamos los módulos SAP requeridos o realizamos la cobertura a los procesos específicos de cada área, para proveer las mayores ventajas a su organización.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
            <TrendingUp className="h-10 w-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Desarrollo Integral</h3>
            <p className="text-gray-600">
              Nuestro servicio es integral e incluye el mantenimiento del software y el análisis para la integración de nuevas funcionalidades.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <Users className="h-10 w-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Atención Personalizada</h3>
            <p className="text-gray-600">
              Escuchamos con atención a nuestros clientes, analizamos sus necesidades y ofrecemos siempre la mejor solución.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">Nuestro Compromiso</h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Como líderes en servicios IT, nuestro propósito es seguir siendo el aliado preferido para las empresas en España que buscan adaptarse y prosperar en un entorno tecnológico en constante evolución.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div>
            <Award className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Excelencia</h3>
            <p className="text-blue-100">Comprometidos con la calidad en cada proyecto</p>
          </div>
          <div>
            <Target className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Innovación</h3>
            <p className="text-blue-100">Soluciones tecnológicas de vanguardia</p>
          </div>
          <div>
            <Users className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Satisfacción</h3>
            <p className="text-blue-100">Enfocados en el éxito de nuestros clientes</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUsPage;