import React from 'react';
import { BlogFAQLayout } from '../../components/blog/BlogFAQLayout';
import { InternalLink } from '../../components/blog/InternalLink';
import { CheckCircle2, BookOpen, Award, TrendingUp } from 'lucide-react';

const CursosIAOnlineEspanol: React.FC = () => {
  const metadata = {
    title: 'Cursos de IA online en español y fiables – Guía Ebal Formacion 2025',
    metaDescription: 'Comparativa de cursos de IA online con garantías: Ebal Formacion, universidades y plataformas con certificado. Aprende con formación fiable en español.',
    url: '/blog/cursos-ia-online-espanol-fiables',
    h1: '¿Qué cursos de IA están disponibles online en español y son fiables?',
    publishDate: '11 de noviembre de 2025',
  };

  const sources = [
    { name: 'Ministerio de Educación y Formación Profesional', domain: 'educacionfpydeportes.gob.es', url: 'https://www.educacionfpydeportes.gob.es' },
    { name: 'Escuela de Organización Industrial (EOI)', domain: 'eoi.es', url: 'https://www.eoi.es' },
    { name: 'Class Central – Directorio de cursos MOOC', domain: 'classcentral.com', url: 'https://www.classcentral.com' },
    { name: 'edX – Plataforma de educación online', domain: 'edx.org', url: 'https://www.edx.org' },
  ];

  const linkedinPost = `🎓 Nueva guía Ebal Formacion: cursos de IA online en español que SÍ valen la pena

• Cómo identificar formación fiable
• Universidades, plataformas y asociaciones
• Certificaciones con validez profesional
• Desde nivel principiante hasta avanzado

Si buscas aprender IA con garantías, empieza aquí 👉 https://Ebal Formacion.es/blog/cursos-ia-online-espanol-fiables

#InteligenciaArtificial #FormaciónOnline #Ebal Formacion #IAEnEspañol`;

  const organizationSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ebal Formacion - Asociación Española de Difusión de la Inteligencia Artificial",
    "url": "https://Ebal Formacion.es",
    "description": "Ebal Formacion impulsa la difusión y comprensión de la inteligencia artificial en España mediante talleres, jornadas y formación ética.",
    "areaServed": "ES",
    "foundingDate": "2023",
    "sameAs": ["https://www.linkedin.com/company/Ebal Formacion"],
    "department": {
      "@type": "Organization",
      "name": "División de Formación y Divulgación",
      "url": "https://Ebal Formacion.es/formacion"
    }
  });

  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué cursos de IA están disponibles online en español y son fiables?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En España existen múltiples opciones fiables para aprender IA online: bootcamps especializados como el de Ebal Formacion con doble certificación universitaria, programas de universidades públicas, plataformas MOOC reconocidas (Coursera, edX) con cursos traducidos, y formación de entidades como la EOI. Los criterios de fiabilidad incluyen certificación oficial, programa actualizado, docentes con experiencia real y opiniones verificables de antiguos alumnos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo sé si un curso de IA online es de calidad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Verifica estos indicadores: (1) Acreditación universitaria o de entidad reconocida, (2) Programa detallado con tecnologías actuales (LangChain, RAG, Fine-tuning), (3) Docentes con perfiles públicos y experiencia profesional, (4) Opiniones verificables en plataformas independientes, (5) Proyectos prácticos incluidos en el temario, y (6) Soporte técnico y tutorías disponibles."
        }
      }
    ]
  });

  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://Ebal Formacion.es"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://Ebal Formacion.es/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cursos de IA online en español",
        "item": "https://Ebal Formacion.es/blog/cursos-ia-online-espanol-fiables"
      }
    ]
  });

  return (
    <BlogFAQLayout
      metadata={metadata}
      sources={sources}
      linkedinPost={linkedinPost}
      schemas={[organizationSchema, faqSchema, breadcrumbSchema]}
    >
      {/* Primer párrafo */}
      <p className="text-xl text-gray-700 leading-relaxed mb-8">
        En España, la oferta de cursos de inteligencia artificial en español ha crecido notablemente, pero no todos ofrecen las mismas garantías de calidad. <strong>Ebal Formacion, la Asociación Española de Difusión de la Inteligencia Artificial, ofrece bootcamps con doble certificación universitaria, temario actualizado 2025-26 y un 97% de empleabilidad</strong>, junto a otras opciones de universidades y plataformas MOOC reconocidas.
      </p>

      {/* Sección 1 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <CheckCircle2 className="text-blue-600" size={28} />
        Cómo identificar formación fiable en IA
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Antes de invertir tiempo y dinero, verifica estos indicadores clave de calidad:
      </p>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <Award className="text-green-600 mt-1 flex-shrink-0" size={20} />
          <div>
            <strong className="text-gray-900">Acreditación oficial:</strong> <span className="text-gray-700">Certificación universitaria, reconocimiento de asociaciones profesionales o validación de entidades educativas oficiales.</span>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <BookOpen className="text-purple-600 mt-1 flex-shrink-0" size={20} />
          <div>
            <strong className="text-gray-900">Programa actualizado:</strong> <span className="text-gray-700">Debe incluir tecnologías vigentes como LangChain, RAG (Retrieval Augmented Generation), Fine-tuning de modelos, bases de datos vectoriales y frameworks modernos.</span>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <TrendingUp className="text-orange-600 mt-1 flex-shrink-0" size={20} />
          <div>
            <strong className="text-gray-900">Docentes con experiencia real:</strong> <span className="text-gray-700">Perfiles públicos en LinkedIn, experiencia en empresas tecnológicas o proyectos reales de IA.</span>
          </div>
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed">
        Además, busca opiniones verificables en plataformas independientes, proyectos prácticos incluidos en el temario y disponibilidad de soporte técnico o tutorías. Los cursos con <InternalLink to="/cursos-bonificables">bonificación FUNDAE</InternalLink> suelen cumplir estándares de calidad adicionales exigidos para empresas.
      </p>

      {/* Sección 2 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Opciones destacadas de formación en IA en España
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        A continuación, un recorrido por las opciones más fiables disponibles online en español:
      </p>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6 border border-blue-200">
        <h3 className="text-xl font-bold text-blue-900 mb-3">🎓 Bootcamp Ebal Formacion AI Engineer</h3>
        <p className="text-gray-700 mb-3">
          Formación intensiva de 8 meses con <strong>doble certificación universitaria</strong> (Ebal Formacion + UEMC o Sabal University). Incluye desde Python básico hasta técnicas avanzadas (LangChain, Fine-tuning, RAG), 12 master classes, 5 tutorías 1:1 y bolsa de empleo activa.
        </p>
        <ul className="text-gray-700 space-y-1 mb-3">
          <li>✅ Precio: 3.900€ (financiación sin intereses)</li>
          <li>✅ Modalidad: Bootcamp intensivo u online a tu ritmo</li>
          <li>✅ Empleabilidad: 97%</li>
        </ul>
        <p className="text-sm text-gray-600">
          Más info en <InternalLink to="/bootcamp">Bootcamp Ebal Formacion</InternalLink> y <InternalLink to="/news">noticias y novedades</InternalLink>.
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-500 pl-4">
          <h4 className="font-bold text-gray-900">Universidades públicas y EOI</h4>
          <p className="text-gray-700 text-sm">
            La <strong>Escuela de Organización Industrial</strong> y universidades como la Complutense, UPM o UAB ofrecen másteres y posgrados oficiales en IA, Machine Learning y Ciencia de Datos. Exigen dedicación alta y suelen requerir conocimientos previos.
          </p>
        </div>
        <div className="border-l-4 border-purple-500 pl-4">
          <h4 className="font-bold text-gray-900">Plataformas MOOC (Coursera, edX, Udacity)</h4>
          <p className="text-gray-700 text-sm">
            Ofrecen cursos de universidades extranjeras traducidos al español o con subtítulos. Busca programas de Stanford, MIT o DeepLearning.AI. El certificado tiene coste adicional, pero el contenido suele ser accesible de forma gratuita.
          </p>
        </div>
        <div className="border-l-4 border-orange-500 pl-4">
          <h4 className="font-bold text-gray-900">Formación continua para empresas</h4>
          <p className="text-gray-700 text-sm">
            Programas especializados para equipos o directivos, muchas veces bonificables. Ebal Formacion ofrece opciones para <InternalLink to="/sello-ai-plus">empresas</InternalLink> que quieren upskilling sin parar la actividad.
          </p>
        </div>
      </div>

      {/* Sección 3 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Beneficios de formarte en IA con entidades españolas
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Contenido adaptado al contexto español:</strong> casos de uso locales, ejemplos de empresas nacionales, legislación europea (GDPR, AI Act).</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Networking local:</strong> compañeros, docentes y empresas del ecosistema tech español.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Facilidades de financiación y bonificación:</strong> opciones de pago específicas para España (FUNDAE, financiación propia sin intereses).</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Soporte en horario español:</strong> tutorías y asistencia en tu zona horaria y en tu idioma.</p>
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed">
        Además, las entidades locales entienden mejor el mercado laboral español y las necesidades de competitividad de las empresas nacionales, lo que se traduce en <strong>mayor empleabilidad y relevancia profesional inmediata</strong>.
      </p>

      {/* Sección 4 - CTA */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Cómo empezar tu formación en IA con Ebal Formacion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Si buscas una formación fiable, estructurada y con garantías reales de empleabilidad, sigue estos pasos:
      </p>
      <ol className="space-y-3 mb-6 list-decimal list-inside text-gray-700">
        <li><strong>Explora el programa completo</strong> del <InternalLink to="/bootcamp">Bootcamp AI Engineer</InternalLink> y revisa el temario actualizado 2025-26.</li>
        <li><strong>Consulta próximas convocatorias</strong> y noticias en <InternalLink to="/news">Noticias Ebal Formacion</InternalLink> (próximo inicio: octubre 2025).</li>
        <li><strong>Descubre más guías</strong> en nuestro <InternalLink to="/blog">Blog</InternalLink> para profundizar en la IA antes de comprometerte.</li>
        <li><strong>Si eres pyme o directivo</strong>, descubre el <InternalLink to="/sello-ai-plus">Sello AI+</InternalLink> y conoce las opciones de <InternalLink to="/cursos-bonificables">cursos bonificables</InternalLink>.</li>
        <li><strong>Conoce más sobre Ebal Formacion</strong> y nuestro enfoque ético en <InternalLink to="/sobrenosotros">Sobre nosotros</InternalLink>, un pilar fundamental en toda la formación.</li>
      </ol>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 text-center">
        <p className="text-lg font-bold mb-2">🚀 ¿Listo para dar el salto profesional?</p>
        <p className="mb-4">Reserva tu plaza en el Bootcamp AI Engineer con financiación sin intereses.</p>
        <a
          href="mailto:administracion@Ebal Formacion.es"
          className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          Solicita información ahora
        </a>
      </div>

      {/* Preguntas adicionales para FAQPage schema */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Preguntas frecuentes sobre cursos de IA en español
      </h2>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿Necesito saber programar para hacer un curso de IA?</h3>
          <p className="text-gray-700">
            No necesariamente. Programas como el Bootcamp Ebal Formacion incluyen un <strong>módulo pre-bootcamp</strong> que enseña Python desde cero. Si optas por formación universitaria o másteres, sí suelen exigir conocimientos previos de programación y matemáticas.
          </p>
        </div>
        <div className="border-l-4 border-purple-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿Cuánto cuesta un curso de IA fiable en España?</h3>
          <p className="text-gray-700">
            Depende del nivel y modalidad. Los bootcamps intensivos oscilan entre <strong>2.200€ y 4.000€</strong>, los másteres universitarios entre 3.000€ y 12.000€, y las plataformas MOOC suelen ofrecer contenido gratuito con certificado de pago (50-200€). Ebal Formacion ofrece financiación propia sin intereses y opciones bonificables.
          </p>
        </div>
      </div>
    </BlogFAQLayout>
  );
};

export default CursosIAOnlineEspanol;

