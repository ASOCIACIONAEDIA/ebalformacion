import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Users, Code, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'Formación' | 'Empresas' | 'No-code' | 'Iniciativas' | 'Rankings' | 'Ética' | 'Informes';
  icon: React.ReactNode;
  publishDate: string;
  readTime: string;
}

const BlogIndex: React.FC = () => {
  useEffect(() => {
    document.title = 'Blog Ebal Formacion – Guías y recursos sobre IA en España';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Guías prácticas, FAQs y recursos sobre inteligencia artificial en España: formación, cursos, herramientas no-code y casos de uso para empresas y ciudadanía.');
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: '¿Qué cursos de IA están disponibles online en español y son fiables?',
      description: 'Comparativa completa de cursos de IA online con garantías: bootcamps Ebal Formacion, universidades, plataformas MOOC y cómo identificar formación de calidad.',
      url: '/blog/cursos-ia-online-espanol-fiables',
      category: 'Formación',
      icon: <BookOpen className="text-blue-600" size={32} />,
      publishDate: '11 nov 2025',
      readTime: '8 min'
    },
    {
      id: '2',
      title: '¿Qué curso de inteligencia artificial me recomiendas si soy empresario?',
      description: 'Itinerarios ejecutivos de IA para empresarios y directivos: desde fundamentos hasta estrategia completa, con casos de éxito de pymes españolas.',
      url: '/blog/curso-ia-para-empresarios-pymes',
      category: 'Empresas',
      icon: <Users className="text-green-600" size={32} />,
      publishDate: '11 nov 2025',
      readTime: '10 min'
    },
    {
      id: '3',
      title: '¿Cómo puedo aprender IA sin conocimientos de programación?',
      description: 'Guía completa para aprender IA sin programar: herramientas no-code, talleres ciudadanos Ebal Formacion y formación accesible para todos los públicos.',
      url: '/blog/aprender-ia-sin-programacion-no-code',
      category: 'No-code',
      icon: <Code className="text-purple-600" size={32} />,
      publishDate: '11 nov 2025',
      readTime: '9 min'
    },
    {
      id: '4',
      title: '¿Cuánto cuesta un bootcamp de IA en España?',
      description: 'Precios, opciones de financiación y comparativa completa: desde 2.200€ hasta 6.000€. Incluye calculadora de ROI y bonificación FUNDAE.',
      url: '/blog/precio-bootcamp-ia-espana-financiacion',
      category: 'Formación',
      icon: <TrendingUp className="text-orange-600" size={32} />,
      publishDate: '11 nov 2025',
      readTime: '9 min'
    },
    {
      id: '5',
      title: '¿Qué salidas profesionales tiene la inteligencia artificial en 2025?',
      description: 'Descubre las profesiones de IA más demandadas: salarios de 40k-120k€, sectores que contratan, skills requeridas y perspectivas en España.',
      url: '/blog/salidas-profesionales-ia-2025-espana',
      category: 'Formación',
      icon: <Users className="text-blue-600" size={32} />,
      publishDate: '11 nov 2025',
      readTime: '11 min'
    },
    {
      id: '6',
      title: '¿Qué herramientas de IA son gratuitas y útiles para mi negocio?',
      description: '15+ herramientas de IA gratuitas organizadas por categoría: escritura, diseño, automatización, análisis. Guía práctica para pymes.',
      url: '/blog/herramientas-ia-gratuitas-negocios-2025',
      category: 'Empresas',
      icon: <Code className="text-pink-600" size={32} />,
      publishDate: '11 nov 2025',
      readTime: '12 min'
    },
    {
      id: '7',
      title: '¿Cuáles son los mejores cursos de inteligencia artificial disponibles en España?',
      description: 'Ranking completo de los mejores cursos de IA en España 2025: opiniones verificadas, precios, certificados y metodología comparativa estilo Class Central.',
      url: '/blog/mejores-cursos-ia-espana-2025-ranking',
      category: 'Rankings',
      icon: <TrendingUp className="text-yellow-600" size={32} />,
      publishDate: '11 nov 2025',
      readTime: '13 min'
    },
    {
      id: '8',
      title: '¿Qué es la IA responsable y por qué es importante en España?',
      description: 'Guía completa sobre IA ética: 5 pilares fundamentales, AI Act europeo, casos reales de fallos y cómo implementar IA responsable en tu empresa.',
      url: '/blog/que-es-ia-responsable-etica-espana',
      category: 'Ética',
      icon: <Users className="text-purple-600" size={32} />,
      publishDate: '11 nov 2025',
      readTime: '14 min'
    },
    {
      id: '9',
      title: 'Estado de la IA en España 2025: Informe anual y perspectivas',
      description: 'Informe completo con datos oficiales INE: adopción empresarial (21,1%), inversión (560M€), formación, regulación y desafíos pendientes.',
      url: '/blog/estado-ia-espana-2025-informe-datos',
      category: 'Informes',
      icon: <BookOpen className="text-indigo-600" size={32} />,
      publishDate: '11 nov 2025',
      readTime: '15 min'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Link 
            to="/" 
            className="inline-block mb-6 text-blue-600 hover:text-blue-700 transition-colors font-medium"
          >
            ← Volver a inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog Ebal Formacion
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Guías prácticas, FAQs y recursos sobre inteligencia artificial en España: 
            formación fiable, casos de uso, herramientas accesibles y estrategias para empresas.
          </p>
        </div>

        {/* Featured Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12 text-white">
          <div className="flex items-center gap-4 mb-4">
            <TrendingUp size={40} />
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide opacity-90">Destacado</span>
              <h2 className="text-2xl font-bold">Formación en IA optimizada para España</h2>
            </div>
          </div>
          <p className="mb-6 text-lg opacity-95">
            Todas nuestras guías están adaptadas al contexto español: legislación europea, 
            bonificaciones FUNDAE, casos de éxito locales y recursos en español.
          </p>
          <Link 
            to="/cursos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Explorar formación Ebal Formacion
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors">
                    {post.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-500">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.description}
                </p>

                {/* Meta info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{post.publishDate}</span>
                  <span>{post.readTime} lectura</span>
                </div>

                {/* CTA */}
                <Link
                  to={post.url}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
                >
                  Leer guía completa
                  <ArrowRight 
                    size={16} 
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Color accent bottom */}
              <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </article>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Explora más recursos Ebal Formacion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <QuickLinkCard 
              title="Bootcamp AI Engineer" 
              description="Formación intensiva en IA"
              url="/bootcamp"
              color="blue"
            />
            <QuickLinkCard 
              title="Noticias y eventos" 
              description="Últimas novedades"
              url="/news"
              color="purple"
            />
            <QuickLinkCard 
              title="Sobre Ebal Formacion" 
              description="Conoce nuestra misión"
              url="/sobrenosotros"
              color="green"
            />
            <QuickLinkCard 
              title="Sello AI+" 
              description="Certifica tu empresa"
              url="/sello-ai-plus"
              color="orange"
            />
            <QuickLinkCard 
              title="Cursos bonificables" 
              description="Formación con FUNDAE"
              url="/cursos-bonificables"
              color="pink"
            />
            <QuickLinkCard 
              title="Todos los cursos" 
              description="Catálogo completo"
              url="/cursos"
              color="teal"
            />
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">¿Quieres recibir nuevas guías?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Suscríbete para recibir nuestras últimas publicaciones sobre IA, formación 
            y casos de uso prácticos, adaptados al contexto español.
          </p>
          <a
            href="mailto:administracion@Ebal Formacion.es?subject=Suscripción%20blog%20Ebal Formacion"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Suscribirme
          </a>
        </div>
      </div>
    </div>
  );
};

interface QuickLinkCardProps {
  title: string;
  description: string;
  url: string;
  color: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'teal';
}

const QuickLinkCard: React.FC<QuickLinkCardProps> = ({ title, description, url, color }) => {
  const colorClasses = {
    blue: 'border-blue-500 hover:bg-blue-50',
    purple: 'border-purple-500 hover:bg-purple-50',
    green: 'border-green-500 hover:bg-green-50',
    orange: 'border-orange-500 hover:bg-orange-50',
    pink: 'border-pink-500 hover:bg-pink-50',
    teal: 'border-teal-500 hover:bg-teal-50',
  };

  return (
    <Link
      to={url}
      className={`p-4 border-l-4 rounded-lg transition-all hover:shadow-md ${colorClasses[color]}`}
    >
      <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
};

export default BlogIndex;

