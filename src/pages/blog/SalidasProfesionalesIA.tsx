import React from 'react';
import { BlogFAQLayout } from '../../components/blog/BlogFAQLayout';
import { InternalLink } from '../../components/blog/InternalLink';
import { Briefcase, TrendingUp, Target, DollarSign } from 'lucide-react';

const SalidasProfesionalesIA: React.FC = () => {
  const metadata = {
    title: 'Salidas profesionales IA 2025 – Empleos, sueldos y demanda – Ebal Formacion',
    metaDescription: 'Descubre las salidas profesionales de IA en 2025: AI Engineer, Data Scientist, ML Engineer. Sueldos de 40k-90k€ y alta demanda en España.',
    url: '/blog/salidas-profesionales-ia-2025-espana',
    h1: '¿Qué salidas profesionales tiene la inteligencia artificial en 2025?',
    publishDate: '11 de noviembre de 2025',
  };

  const sources = [
    { name: 'Informe de empleo tech en España 2025', domain: 'infojobs.net', url: 'https://www.infojobs.net' },
    { name: 'LinkedIn Emerging Jobs Report', domain: 'linkedin.com', url: 'https://www.linkedin.com' },
    { name: 'Randstad Salary Expectations 2025', domain: 'randstad.es', url: 'https://www.randstad.es' },
    { name: 'Observatorio Nacional de Tecnología', domain: 'ontsi.es', url: 'https://www.ontsi.es' },
  ];

  const linkedinPost = `🚀 ¿Qué salidas profesionales tiene la IA en 2025?

📊 Datos clave en España:
• AI Engineer: 45k-85k€/año
• ML Engineer: 50k-90k€/año
• Data Scientist: 40k-75k€/año
• Consultor IA: 60k-120k€/año

✅ +5.000 vacantes sin cubrir
✅ Crecimiento del 34% anual
✅ Teletrabajo en el 70% de puestos

El momento de entrar es AHORA.

Lee el informe completo 👉 https://Ebal Formacion.es/blog/salidas-profesionales-ia-2025-espana

#EmpleoIA #CarrerasTech #Ebal Formacion #InteligenciaArtificial`;

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
      "url": "https://Ebal Formacion.es"
    }
  });

  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué salidas profesionales tiene la inteligencia artificial en 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las principales salidas profesionales en IA incluyen: AI Engineer (45k-85k€), ML Engineer (50k-90k€), Data Scientist (40k-75k€), Consultor IA (60k-120k€), NLP Specialist, Computer Vision Engineer, y roles híbridos como Product Manager especializado en IA. En España hay más de 5.000 vacantes sin cubrir con crecimiento anual del 34%."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto gana un profesional de IA en España?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los salarios en IA en España van desde 40.000€ para perfiles junior hasta 120.000€+ para roles senior de consultoría. La media para un AI Engineer con 2-3 años de experiencia es de 55.000€/año. Los freelance especializados pueden facturar entre 500€ y 1.200€ por día según experiencia y especialización."
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
        "name": "Salidas profesionales IA 2025",
        "item": "https://Ebal Formacion.es/blog/salidas-profesionales-ia-2025-espana"
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
        La inteligencia artificial ofrece en 2025 una de las mejores perspectivas laborales del mercado tech, con <strong>más de 5.000 vacantes sin cubrir en España, salarios de 40.000€ a 120.000€ y crecimiento anual del 34%</strong>. <strong>Ebal Formacion forma profesionales de IA con un 97% de empleabilidad</strong> a través de su Bootcamp AI Engineer, preparándolos para roles como AI Engineer, Data Scientist, ML Engineer y Consultor especializado en todos los sectores de la economía.
      </p>

      {/* Sección 1 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Briefcase className="text-blue-600" size={28} />
        Principales salidas profesionales en IA
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        El ecosistema de IA ha madurado y ahora ofrece roles especializados con responsabilidades claras:
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-blue-900 mb-2">🤖 AI Engineer / ML Engineer</h3>
          <p className="text-gray-700 mb-3">
            <strong>Rango salarial:</strong> 45.000€ - 90.000€/año | <strong>Demanda:</strong> Muy alta
          </p>
          <p className="text-gray-700 text-sm mb-3">
            Diseña, entrena y despliega modelos de machine learning y deep learning en producción. Trabaja con frameworks como TensorFlow, PyTorch, LangChain y servicios cloud (AWS, Azure, GCP).
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Skills clave:</strong> Python, ML/DL, MLOps, Docker, APIs, SQL, Git
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600">
          <h3 className="text-xl font-bold text-green-900 mb-2">📊 Data Scientist</h3>
          <p className="text-gray-700 mb-3">
            <strong>Rango salarial:</strong> 40.000€ - 75.000€/año | <strong>Demanda:</strong> Alta
          </p>
          <p className="text-gray-700 text-sm mb-3">
            Analiza datos complejos, construye modelos predictivos y extrae insights accionables para el negocio. Combina estadística, machine learning y visualización de datos.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Skills clave:</strong> Python/R, SQL, Pandas, Scikit-learn, Estadística, Business Intelligence
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-600">
          <h3 className="text-xl font-bold text-purple-900 mb-2">💼 Consultor/a IA & Estratega Digital</h3>
          <p className="text-gray-700 mb-3">
            <strong>Rango salarial:</strong> 60.000€ - 120.000€+/año | <strong>Demanda:</strong> Creciente
          </p>
          <p className="text-gray-700 text-sm mb-3">
            Asesora empresas en la adopción de IA: identifica casos de uso, diseña roadmaps, lidera implementaciones y mide ROI. Requiere visión técnica + habilidades de negocio.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Skills clave:</strong> Conocimiento técnico IA, gestión de proyectos, comunicación, análisis de negocio
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-600">
          <h3 className="text-xl font-bold text-orange-900 mb-2">🗣️ NLP Specialist / LLM Engineer</h3>
          <p className="text-gray-700 mb-3">
            <strong>Rango salarial:</strong> 50.000€ - 85.000€/año | <strong>Demanda:</strong> En explosión
          </p>
          <p className="text-gray-700 text-sm mb-3">
            Especializado en procesamiento de lenguaje natural: chatbots, análisis de sentimientos, traducción automática, generación de texto con LLMs (GPT, Claude, Llama).
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Skills clave:</strong> NLP, Transformers, LangChain, RAG, Fine-tuning, APIs OpenAI/Anthropic
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border-l-4 border-pink-600">
          <h3 className="text-xl font-bold text-pink-900 mb-2">👁️ Computer Vision Engineer</h3>
          <p className="text-gray-700 mb-3">
            <strong>Rango salarial:</strong> 48.000€ - 80.000€/año | <strong>Demanda:</strong> Alta (industria, retail, salud)
          </p>
          <p className="text-gray-700 text-sm mb-3">
            Desarrolla sistemas de reconocimiento de imágenes/vídeo: detección de objetos, segmentación, análisis facial, realidad aumentada, control de calidad industrial.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Skills clave:</strong> OpenCV, CNNs, YOLO, Detectron, PyTorch, procesamiento de imagen
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border-l-4 border-teal-600">
          <h3 className="text-xl font-bold text-teal-900 mb-2">⚙️ MLOps Engineer / AI Infrastructure</h3>
          <p className="text-gray-700 mb-3">
            <strong>Rango salarial:</strong> 50.000€ - 85.000€/año | <strong>Demanda:</strong> Emergente
          </p>
          <p className="text-gray-700 text-sm mb-3">
            Asegura que los modelos de IA lleguen a producción de forma eficiente, escalable y segura. Gestiona pipelines CI/CD, monitorización, versionado de modelos y automatización.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Skills clave:</strong> Docker, Kubernetes, MLflow, Airflow, CI/CD, Cloud (AWS/Azure/GCP)
          </p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed">
        Todas estas especializaciones se cubren en el temario del <InternalLink to="/bootcamp">Bootcamp AI Engineer de Ebal Formacion</InternalLink>, permitiendo a los graduados elegir su camino según sus intereses.
      </p>

      {/* Sección 2 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <DollarSign className="text-green-600" size={28} />
        Rangos salariales en España por experiencia
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        El salario varía significativamente según años de experiencia, ubicación y sector:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Nivel</th>
              <th className="px-4 py-3 text-left">Experiencia</th>
              <th className="px-4 py-3 text-left">Salario (€/año)</th>
              <th className="px-4 py-3 text-left">Características</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-3 font-bold text-green-600">Junior</td>
              <td className="px-4 py-3">0-2 años</td>
              <td className="px-4 py-3 font-bold">35.000€ - 45.000€</td>
              <td className="px-4 py-3 text-gray-600">Recién graduados, rol de apoyo, proyectos guiados</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-3 font-bold text-blue-600">Mid-level</td>
              <td className="px-4 py-3">2-5 años</td>
              <td className="px-4 py-3 font-bold">45.000€ - 65.000€</td>
              <td className="px-4 py-3 text-gray-600">Autonomía, liderazgo de features, especialización</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-3 font-bold text-purple-600">Senior</td>
              <td className="px-4 py-3">5-10 años</td>
              <td className="px-4 py-3 font-bold">65.000€ - 90.000€</td>
              <td className="px-4 py-3 text-gray-600">Arquitectura de soluciones, mentoría, decisiones técnicas</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-bold text-orange-600">Lead/Principal</td>
              <td className="px-4 py-3">10+ años</td>
              <td className="px-4 py-3 font-bold">90.000€ - 120.000€+</td>
              <td className="px-4 py-3 text-gray-600">Liderazgo de equipos, estrategia, innovación</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-relaxed text-sm mb-4">
        <strong>Nota:</strong> Estos rangos son orientativos para España. Ciudades como Madrid y Barcelona ofrecen salarios 10-20% superiores a la media nacional. El sector (fintech, salud, ecommerce) también influye significativamente.
      </p>

      {/* Sección 3 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <TrendingUp className="text-purple-600" size={28} />
        Sectores que más contratan profesionales de IA en España
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        La IA se ha convertido en transversal, pero estos sectores lideran la demanda:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-bold text-blue-900 mb-2">💳 Fintech & Banca</h4>
          <p className="text-gray-700 text-sm mb-2">
            Detección de fraude, scoring crediticio, robo-advisors, análisis de riesgo, trading algorítmico.
          </p>
          <p className="text-gray-600 text-xs">
            Empresas: BBVA, Santander, CaixaBank, fintechs (Bnext, Revolut)
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">🛒 E-commerce & Retail</h4>
          <p className="text-gray-700 text-sm mb-2">
            Sistemas de recomendación, optimización de precios, análisis de sentimientos, chatbots de atención, predicción de demanda.
          </p>
          <p className="text-gray-600 text-xs">
            Empresas: Amazon, El Corte Inglés, Inditex, Carrefour, marketplace
          </p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h4 className="font-bold text-purple-900 mb-2">🏥 Salud & Biotech</h4>
          <p className="text-gray-700 text-sm mb-2">
            Diagnóstico asistido por IA, análisis de imágenes médicas, drug discovery, genómica, telemedicina.
          </p>
          <p className="text-gray-600 text-xs">
            Empresas: Quirón, Sanitas, startups healthtech, centros de investigación
          </p>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
          <h4 className="font-bold text-orange-900 mb-2">📱 Tech & Startups</h4>
          <p className="text-gray-700 text-sm mb-2">
            Desarrollo de productos AI-first, SaaS con IA integrada, asistentes virtuales, automatización inteligente.
          </p>
          <p className="text-gray-600 text-xs">
            Empresas: Cabify, Glovo, Wallbox, ecosistema startup español
          </p>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">🏭 Industria & Logística</h4>
          <p className="text-gray-700 text-sm mb-2">
            Mantenimiento predictivo, control de calidad automatizado, optimización de rutas, gemelos digitales, robótica.
          </p>
          <p className="text-gray-600 text-xs">
            Empresas: Seat, Airbus, Telefónica Tech, empresas de logística
          </p>
        </div>

        <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
          <h4 className="font-bold text-pink-900 mb-2">📢 Marketing & AdTech</h4>
          <p className="text-gray-700 text-sm mb-2">
            Segmentación inteligente, optimización de campañas, generación de contenido, análisis de audiencia, programática.
          </p>
          <p className="text-gray-600 text-xs">
            Empresas: agencias digitales, consultoras marketing, plataformas publicitarias
          </p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed">
        Todos los sectores están incorporando IA. Si tienes conocimiento del sector + skills de IA, tu valor en el mercado se multiplica. El <InternalLink to="/sello-ai-plus">Sello AI+ de Ebal Formacion</InternalLink> ayuda a empresas a certificar su madurez en IA.
      </p>

      {/* Sección 4 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Target className="text-orange-600" size={28} />
        Beneficios de trabajar en IA en España
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Alta demanda, baja oferta:</strong> Hay más vacantes que profesionales cualificados. Esto significa poder de negociación y estabilidad laboral.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Salarios por encima de la media:</strong> Un AI Engineer gana ~40% más que un desarrollador web junior.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Teletrabajo y flexibilidad:</strong> El 70% de las ofertas de IA permiten trabajo remoto total o híbrido.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Proyectos impactantes:</strong> Trabajas en problemas complejos que afectan a millones de usuarios.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Aprendizaje continuo:</strong> El campo evoluciona rápido; siempre hay algo nuevo que aprender.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Oportunidades internacionales:</strong> Skills de IA son transferibles globalmente; acceso a mercado europeo y remoto USA.</p>
        </li>
      </ul>

      {/* Sección 5 - CTA */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Cómo prepararte para una carrera en IA con Ebal Formacion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Da el salto a una de las profesiones más demandadas:
      </p>
      <ol className="space-y-3 mb-6 list-decimal list-inside text-gray-700">
        <li><strong>Evalúa tu situación:</strong> ¿Cambio de carrera? ¿Upskilling? ¿Recién graduado? El <InternalLink to="/bootcamp">Bootcamp Ebal Formacion</InternalLink> acepta perfiles desde cero.</li>
        <li><strong>Revisa el temario completo:</strong> Asegúrate de que cubre las skills demandadas (Python, ML, DL, NLP, LLMs, MLOps).</li>
        <li><strong>Consulta estadísticas de empleabilidad:</strong> Ebal Formacion tiene un 97% de empleabilidad. Contacta con <InternalLink to="/contacto">Alumni</InternalLink> para conocer su experiencia.</li>
        <li><strong>Financia tu formación:</strong> Opciones sin intereses y bonificación FUNDAE en <InternalLink to="/cursos-bonificables">Cursos bonificables</InternalLink>.</li>
        <li><strong>Mantente actualizado:</strong> Sigue tendencias del sector en <InternalLink to="/news">Noticias Ebal Formacion</InternalLink> y nuestro <InternalLink to="/blog">Blog</InternalLink>.</li>
      </ol>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 text-center">
        <p className="text-lg font-bold mb-2">🚀 ¿Listo para tu carrera en IA?</p>
        <p className="mb-4">97% de empleabilidad. Salarios de 40k-90k€. Alta demanda. Empieza en octubre 2025.</p>
        <a
          href="mailto:administracion@Ebal Formacion.es?subject=Consulta%20Carrera%20IA%20-%20Bootcamp%20AI%20Engineer"
          className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          Solicita información ahora
        </a>
      </div>

      {/* Preguntas adicionales */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Preguntas frecuentes sobre carreras en IA
      </h2>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿Es tarde para empezar en IA con 35-40 años?</h3>
          <p className="text-gray-700">
            No, en absoluto. El 30% de los estudiantes del Bootcamp Ebal Formacion tienen más de 35 años. La experiencia profesional previa (en negocio, gestión, análisis) es un <strong>activo valioso</strong> que te diferencia de perfiles puramente técnicos sin contexto empresarial.
          </p>
        </div>
        <div className="border-l-4 border-purple-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿Puedo trabajar como freelance/consultor en IA?</h3>
          <p className="text-gray-700">
            Sí, y es muy rentable. Consultores freelance de IA con experiencia facturan entre <strong>500€ y 1.200€ por día</strong> de trabajo. Requiere 3-5 años de experiencia y una red de contactos sólida. Muchos graduados Ebal Formacion empiezan en empresa y después dan el salto a freelance.
          </p>
        </div>
      </div>
    </BlogFAQLayout>
  );
};

export default SalidasProfesionalesIA;

