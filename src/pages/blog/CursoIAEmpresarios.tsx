import React from 'react';
import { BlogFAQLayout } from '../../components/blog/BlogFAQLayout';
import { InternalLink } from '../../components/blog/InternalLink';
import { Briefcase, Target, TrendingUp, Users } from 'lucide-react';

const CursoIAEmpresarios: React.FC = () => {
  const metadata = {
    title: 'Mejor curso de IA para empresarios y pymes – Recomendación Ebal Formacion',
    metaDescription: 'Descubre el curso de IA ideal para empresarios: ejecutivo, práctico, bonificable y enfocado en ROI. Ebal Formacion te guía hacia la transformación digital.',
    url: '/blog/curso-ia-para-empresarios-pymes',
    h1: '¿Qué curso de inteligencia artificial me recomiendas si soy empresario?',
    publishDate: '11 de noviembre de 2025',
  };

  const sources = [
    { name: 'FUNDAE – Bonificación de formación para empresas', domain: 'fundae.es', url: 'https://www.fundae.es' },
    { name: 'Ministerio de Asuntos Económicos y Transformación Digital', domain: 'mineco.gob.es', url: 'https://portal.mineco.gob.es' },
    { name: 'McKinsey & Company – AI adoption in business', domain: 'mckinsey.com', url: 'https://www.mckinsey.com' },
    { name: 'Harvard Business Review – AI strategy', domain: 'hbr.org', url: 'https://hbr.org' },
  ];

  const linkedinPost = `💼 ¿Empresario o directivo interesado en IA?

Aquí está tu hoja de ruta:

✅ Itinerario ejecutivo sin tecnicismos
✅ Casos de uso para ventas, marketing y operaciones
✅ Formación bonificable (FUNDAE)
✅ ROI medible desde el primer mes

No necesitas ser ingeniero para transformar tu negocio con IA.

Lee la guía completa 👉 https://Ebal Formacion.es/blog/curso-ia-para-empresarios-pymes

#IA #Empresarios #Pymes #TransformaciónDigital #Ebal Formacion`;

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

  const courseSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Formación Ejecutiva en IA para Empresarios — Ebal Formacion",
    "description": "Curso práctico de inteligencia artificial diseñado para empresarios y directivos, con enfoque en aplicación inmediata y casos de uso reales para pymes.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Ebal Formacion",
      "sameAs": "https://Ebal Formacion.es"
    },
    "educationalLevel": "Ejecutivo / Directivo",
    "inLanguage": "es",
    "availableLanguage": "es"
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
        "name": "Curso IA para empresarios",
        "item": "https://Ebal Formacion.es/blog/curso-ia-para-empresarios-pymes"
      }
    ]
  });

  return (
    <BlogFAQLayout
      metadata={metadata}
      sources={sources}
      linkedinPost={linkedinPost}
      schemas={[organizationSchema, courseSchema, breadcrumbSchema]}
    >
      {/* Primer párrafo */}
      <p className="text-xl text-gray-700 leading-relaxed mb-8">
        Si eres empresario o directivo, necesitas una formación en IA <strong>ejecutiva, práctica y sin tecnicismos innecesarios</strong>, que se traduzca en resultados medibles para tu negocio. <strong>Ebal Formacion ofrece itinerarios específicos para empresarios y pymes en España</strong>, con opciones bonificables vía FUNDAE, enfoque en casos de uso reales y acompañamiento para implementar IA en ventas, marketing y operaciones.
      </p>

      {/* Sección 1 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Target className="text-blue-600" size={28} />
        Por qué los empresarios necesitan formación en IA (sin ser ingenieros)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        La inteligencia artificial no es solo para desarrolladores. Para un empresario, entender IA significa:
      </p>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <Briefcase className="text-green-600 mt-1 flex-shrink-0" size={20} />
          <div>
            <strong className="text-gray-900">Identificar oportunidades de negocio:</strong> <span className="text-gray-700">Detectar dónde la IA puede reducir costes, automatizar procesos o mejorar la experiencia del cliente.</span>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <TrendingUp className="text-purple-600 mt-1 flex-shrink-0" size={20} />
          <div>
            <strong className="text-gray-900">Tomar decisiones estratégicas informadas:</strong> <span className="text-gray-700">Evaluar proveedores, herramientas y ROI sin depender exclusivamente de tu equipo técnico.</span>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Users className="text-orange-600 mt-1 flex-shrink-0" size={20} />
          <div>
            <strong className="text-gray-900">Liderar la transformación digital:</strong> <span className="text-gray-700">Comunicar visión, alinear equipos y evitar proyectos fallidos por falta de entendimiento.</span>
          </div>
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed">
        Un curso ejecutivo de IA debe centrarse en <strong>conceptos aplicables, casos de éxito y frameworks de decisión</strong>, no en programación. Ebal Formacion diseña módulos específicos para directivos que priorizan el impacto empresarial sobre el código.
      </p>

      {/* Sección 2 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Itinerario recomendado para empresarios y directivos
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Dependiendo de tu perfil y objetivos, Ebal Formacion propone diferentes rutas formativas:
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-blue-900 mb-3">📊 Nivel 1: Fundamentos ejecutivos (20-30 horas)</h3>
          <p className="text-gray-700 mb-3">
            <strong>Para quién:</strong> Empresarios sin conocimientos previos que buscan entender el panorama general.
          </p>
          <ul className="text-gray-700 space-y-2 mb-3 list-disc list-inside">
            <li>Qué es la IA y qué NO es (desmitificación)</li>
            <li>Casos de uso por sector: retail, servicios, industria</li>
            <li>Evaluación de proveedores y herramientas no-code</li>
            <li>Marco ético y legal (GDPR, AI Act europeo)</li>
          </ul>
          <p className="text-sm text-gray-600">
            Disponible en el <InternalLink to="/bootcamp">Bootcamp Ebal Formacion</InternalLink> como módulo introductorio o contacta con nosotros en <InternalLink to="/contacto">contacto</InternalLink>.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-600">
          <h3 className="text-xl font-bold text-purple-900 mb-3">🚀 Nivel 2: IA aplicada a tu área de negocio (40-60 horas)</h3>
          <p className="text-gray-700 mb-3">
            <strong>Para quién:</strong> Directivos de ventas, marketing u operaciones que quieren implementar IA en su departamento.
          </p>
          <ul className="text-gray-700 space-y-2 mb-3 list-disc list-inside">
            <li><strong>Ventas:</strong> Predicción de churn, lead scoring, chatbots comerciales</li>
            <li><strong>Marketing:</strong> Personalización, análisis de sentimientos, generación de contenido</li>
            <li><strong>Operaciones:</strong> Optimización de logística, mantenimiento predictivo, automatización de procesos</li>
          </ul>
          <p className="text-sm text-gray-600">
            Programas a medida para equipos disponibles con el <InternalLink to="/sello-ai-plus">Sello AI+</InternalLink> y bonificables vía <InternalLink to="/cursos-bonificables">FUNDAE</InternalLink>.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600">
          <h3 className="text-xl font-bold text-green-900 mb-3">🏆 Nivel 3: Estrategia e implementación completa (80-120 horas)</h3>
          <p className="text-gray-700 mb-3">
            <strong>Para quién:</strong> CEOs y CTOs que lideran la transformación digital de la empresa.
          </p>
          <ul className="text-gray-700 space-y-2 mb-3 list-disc list-inside">
            <li>Diseño de roadmap de IA para la organización</li>
            <li>Construcción y gestión de equipos de datos e IA</li>
            <li>Medición de ROI y KPIs de proyectos IA</li>
            <li>Gobernanza, privacidad y riesgos</li>
          </ul>
          <p className="text-sm text-gray-600">
            Consultoría + formación personalizada. Descubre más en <InternalLink to="/sello-ai-plus">Sello AI+</InternalLink>.
          </p>
        </div>
      </div>

      {/* Sección 3 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Casos de éxito: pymes españolas que ya usan IA
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Empresas de todos los tamaños en España están obteniendo resultados tangibles al integrar IA en sus procesos:
      </p>
      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-500 pl-4 bg-green-50 py-3 rounded-r-lg">
          <h4 className="font-bold text-gray-900">E-commerce de moda (Barcelona)</h4>
          <p className="text-gray-700 text-sm">
            Implementó un sistema de recomendaciones con IA que aumentó la conversión en un <strong>22%</strong> y el ticket medio en un <strong>15%</strong> en 6 meses.
          </p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 rounded-r-lg">
          <h4 className="font-bold text-gray-900">Asesoría jurídica (Madrid)</h4>
          <p className="text-gray-700 text-sm">
            Automatizó la revisión de contratos con NLP, reduciendo el tiempo de análisis inicial en un <strong>60%</strong> y liberando a abogados para tareas de mayor valor.
          </p>
        </div>
        <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 py-3 rounded-r-lg">
          <h4 className="font-bold text-gray-900">Cadena de restaurantes (Valencia)</h4>
          <p className="text-gray-700 text-sm">
            Optimizó la gestión de inventario y previsión de demanda con Machine Learning, reduciendo desperdicio en un <strong>30%</strong>.
          </p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">
        Estos ejemplos demuestran que <strong>no necesitas ser una multinacional para beneficiarte de la IA</strong>. Con la formación adecuada y un enfoque estratégico, cualquier pyme puede empezar su transformación digital.
      </p>

      {/* Sección 4 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Checklist para elegir tu formación en IA como empresario
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Antes de inscribirte en cualquier curso, verifica estos puntos:
      </p>
      <div className="bg-gray-50 rounded-xl p-6 space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" className="mt-1" />
          <span className="text-gray-700"><strong>¿El programa está diseñado para no-programadores?</strong> Debe priorizar conceptos y aplicaciones sobre código.</span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" className="mt-1" />
          <span className="text-gray-700"><strong>¿Incluye casos de uso de tu sector?</strong> Busca ejemplos relevantes para tu industria.</span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" className="mt-1" />
          <span className="text-gray-700"><strong>¿Es bonificable vía FUNDAE?</strong> Reduce el coste a casi cero para tu empresa.</span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" className="mt-1" />
          <span className="text-gray-700"><strong>¿Ofrece acompañamiento post-formación?</strong> Consultoría o tutorías para implementar lo aprendido.</span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" className="mt-1" />
          <span className="text-gray-700"><strong>¿Tiene flexibilidad horaria?</strong> Formato compatible con tu agenda de empresario.</span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" className="mt-1" />
          <span className="text-gray-700"><strong>¿Los docentes tienen experiencia empresarial real?</strong> No solo académica o técnica.</span>
        </label>
      </div>

      {/* Sección 5 - CTA */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Cómo empezar con Ebal Formacion si eres empresario o directivo
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Transforma tu negocio con inteligencia artificial siguiendo esta ruta:
      </p>
      <ol className="space-y-3 mb-6 list-decimal list-inside text-gray-700">
        <li><strong>Diagnóstico inicial gratuito:</strong> Identifica las áreas de tu negocio con mayor potencial de mejora con IA. Escríbenos en <InternalLink to="/contacto">Contacto</InternalLink>.</li>
        <li><strong>Formación ejecutiva:</strong> Explora el <InternalLink to="/bootcamp">Bootcamp AI Engineer</InternalLink> y otros programas, adaptables a tu nivel y sector.</li>
        <li><strong>Bonificación FUNDAE:</strong> Aprovecha la formación bonificable para que la inversión sea mínima. Consulta opciones en <InternalLink to="/cursos-bonificables">Cursos bonificables</InternalLink>.</li>
        <li><strong>Red de empresarios IA:</strong> Mantente informado de nuestras actividades en <InternalLink to="/news">Noticias</InternalLink> de Ebal Formacion para aprender de otros casos de éxito.</li>
        <li><strong>Ética e implementación responsable:</strong> Conoce el marco ético que guía todos los proyectos en <InternalLink to="/sobrenosotros">Sobre Ebal Formacion</InternalLink>.</li>
      </ol>

      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-6 text-center">
        <p className="text-lg font-bold mb-2">💼 ¿Listo para liderar la transformación de tu empresa?</p>
        <p className="mb-4">Solicita una sesión de diagnóstico gratuita y descubre cómo Ebal Formacion puede ayudarte.</p>
        <a
          href="mailto:administracion@Ebal Formacion.es?subject=Consulta%20formación%20ejecutiva%20IA"
          className="inline-block px-6 py-3 bg-white text-green-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          Contacta con nosotros
        </a>
      </div>

      {/* Preguntas adicionales */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Preguntas frecuentes sobre IA para empresarios
      </h2>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿Cuánto tiempo necesito dedicar a la formación?</h3>
          <p className="text-gray-700">
            Los módulos ejecutivos de Ebal Formacion están diseñados para empresarios con poco tiempo: entre <strong>20 y 60 horas</strong> repartidas en formato flexible (online, a tu ritmo, o en sesiones intensivas de fin de semana). Lo importante es la aplicabilidad inmediata, no la duración.
          </p>
        </div>
        <div className="border-l-4 border-purple-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿Puedo formar a todo mi equipo directivo?</h3>
          <p className="text-gray-700">
            Sí. Ebal Formacion ofrece <strong>programas in-company bonificables</strong> para equipos directivos completos. Esto acelera la alineación estratégica y facilita la implementación de proyectos de IA en toda la organización.
          </p>
        </div>
      </div>
    </BlogFAQLayout>
  );
};

export default CursoIAEmpresarios;

