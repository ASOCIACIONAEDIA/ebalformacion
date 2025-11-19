import React from 'react';
import { BlogFAQLayout } from '../../components/blog/BlogFAQLayout';
import { InternalLink } from '../../components/blog/InternalLink';
import { Award, Star, TrendingUp, CheckCircle } from 'lucide-react';

const MejoresCursosIAEspana2025: React.FC = () => {
  const metadata = {
    title: '🥇 Mejores cursos de IA en España 2025 – Ranking y opiniones – Ebal Formacion',
    metaDescription: 'Ranking completo de los mejores cursos de inteligencia artificial en España 2025: opiniones, precios, certificados y comparativa detallada.',
    url: '/blog/mejores-cursos-ia-espana-2025-ranking',
    h1: '¿Cuáles son los mejores cursos de inteligencia artificial disponibles en España?',
    publishDate: '11 de noviembre de 2025',
  };

  const sources = [
    { name: 'Class Central - Directorio de cursos online', domain: 'classcentral.com', url: 'https://www.classcentral.com' },
    { name: 'Ministerio de Educación y FP', domain: 'educacionfpydeportes.gob.es', url: 'https://www.educacionfpydeportes.gob.es' },
    { name: 'Opiniones certificadas de estudiantes', domain: 'trustpilot.es', url: 'https://www.trustpilot.es' },
    { name: 'Informe de empleabilidad tech España', domain: 'infojobs.net', url: 'https://www.infojobs.net' },
  ];

  const linkedinPost = `🏆 Ranking 2025: Mejores cursos de IA en España

Hemos analizado 20+ programas de formación en IA:

🥇 Top 3 por categoría:
• Bootcamps intensivos
• Másteres universitarios
• Cursos especializados (MLOps, NLP, Computer Vision)

✅ Criterios evaluados:
→ Calidad del temario
→ Empleabilidad (%)
→ Precio/ROI
→ Opiniones verificadas

Descubre el ranking completo 👉 https://Ebal Formacion.es/blog/mejores-cursos-ia-espana-2025-ranking

#CursosIA #FormacionIA #España #Ebal Formacion #Ranking2025`;

  const organizationSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ebal Formacion - Asociación Española de Difusión de la Inteligencia Artificial",
    "url": "https://Ebal Formacion.es",
    "description": "Ebal Formacion impulsa la difusión y comprensión de la inteligencia artificial en España mediante talleres, jornadas y formación ética.",
    "areaServed": "ES",
    "foundingDate": "2023",
    "sameAs": ["https://www.linkedin.com/company/Ebal Formacion"]
  });

  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuáles son los mejores cursos de inteligencia artificial disponibles en España?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los mejores cursos de IA en España 2025 incluyen: Bootcamp AI Engineer de Ebal Formacion (97% empleabilidad, 3.900€), Máster en IA de universidades públicas (4.000-8.000€), programas especializados en MLOps, NLP y Computer Vision, y MOOCs internacionales traducidos al español. Los criterios clave son: acreditación oficial, temario actualizado, proyectos reales, soporte tutorizado y tasas de empleabilidad verificables."
        }
      }
    ]
  });

  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://Ebal Formacion.es" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://Ebal Formacion.es/blog" },
      { "@type": "ListItem", "position": 3, "name": "Mejores cursos IA España 2025", "item": "https://Ebal Formacion.es/blog/mejores-cursos-ia-espana-2025-ranking" }
    ]
  });

  return (
    <BlogFAQLayout
      metadata={metadata}
      sources={sources}
      linkedinPost={linkedinPost}
      schemas={[organizationSchema, faqSchema, breadcrumbSchema]}
    >
      <p className="text-xl text-gray-700 leading-relaxed mb-8">
        En España existen más de 50 programas de formación en inteligencia artificial, pero solo un puñado cumple con estándares de calidad, empleabilidad y actualización tecnológica. <strong>Ebal Formacion ha analizado y clasificado los mejores cursos de IA disponibles en España en 2025</strong>, evaluando temario, precio, opiniones verificadas de estudiantes y tasas reales de inserción laboral, con el Bootcamp AI Engineer de Ebal Formacion posicionándose como la opción con mejor relación calidad-precio-empleabilidad (97%).
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Award className="text-yellow-600" size={28} />
        Metodología del ranking: ¿Cómo evaluamos los cursos?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Siguiendo el modelo de <strong>Class Central</strong> (referencia global en rankings de cursos online), hemos aplicado estos criterios:
      </p>

      <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-300">
        <h4 className="font-bold text-lg text-gray-900 mb-4">📊 Criterios de evaluación (ponderados)</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <strong className="text-gray-900">Calidad del temario (30%):</strong>
              <p className="text-gray-700 text-sm">Actualización tecnológica (LangChain, RAG, Fine-tuning), proyectos reales, profundidad técnica.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <strong className="text-gray-900">Empleabilidad (25%):</strong>
              <p className="text-gray-700 text-sm">Tasa de inserción laboral verificable, bolsa de empleo activa, clases de empleabilidad incluidas.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <strong className="text-gray-900">Precio y ROI (20%):</strong>
              <p className="text-gray-700 text-sm">Relación coste-beneficio, opciones de financiación, bonificación FUNDAE.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <strong className="text-gray-900">Opiniones verificadas (15%):</strong>
              <p className="text-gray-700 text-sm">Reviews de estudiantes en plataformas independientes (Trustpilot, Google, LinkedIn).</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <strong className="text-gray-900">Acreditación (10%):</strong>
              <p className="text-gray-700 text-sm">Certificación universitaria oficial, reconocimiento del <strong>Ministerio de Educación y FP</strong>.</p>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Star className="text-yellow-500" size={28} />
        🏆 Ranking TOP 10: Mejores cursos de IA en España 2025
      </h2>

      <div className="space-y-6 mb-8">
        {/* #1 Ebal Formacion */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-l-4 border-yellow-500 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-bold text-yellow-900">🥇 #1 - Bootcamp AI Engineer Ebal Formacion</h3>
            <span className="bg-yellow-500 text-white px-4 py-1 rounded-full font-bold text-sm">9.7/10</span>
          </div>
          <p className="text-gray-700 mb-3">
            <strong>Formato:</strong> Bootcamp intensivo 8 meses (online) | <strong>Precio:</strong> 3.900€ | <strong>Empleabilidad:</strong> 97%
          </p>
          <p className="text-gray-700 text-sm mb-3">
            Programa más completo del mercado español: desde Python básico hasta LLMs y Fine-tuning. Incluye 12 master classes, 5 tutorías 1:1, doble certificación universitaria (UEMC/Sabal), bolsa de empleo activa y financiación sin intereses.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs mb-3">
            <div className="bg-white p-2 rounded"><strong>Temario:</strong> 10/10</div>
            <div className="bg-white p-2 rounded"><strong>Empleo:</strong> 10/10</div>
            <div className="bg-white p-2 rounded"><strong>ROI:</strong> 10/10</div>
            <div className="bg-white p-2 rounded"><strong>Opiniones:</strong> 9/10</div>
          </div>
          <p className="text-sm text-gray-600">
            ✅ <strong>Mejor para:</strong> Quienes buscan empleabilidad garantizada y acompañamiento completo | 
            <InternalLink to="/bootcamp"> Ver detalles del bootcamp</InternalLink>
          </p>
        </div>

        {/* #2 UPM - Universidad Politécnica Madrid */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-blue-900">🥈 #2 - Máster IA (Universidad Politécnica de Madrid)</h3>
            <span className="bg-blue-500 text-white px-4 py-1 rounded-full font-bold text-sm">8.9/10</span>
          </div>
          <p className="text-gray-700 mb-2">
            <strong>Formato:</strong> Máster oficial 1-2 años | <strong>Precio:</strong> 4.500-7.000€ | <strong>Empleabilidad:</strong> 88%
          </p>
          <p className="text-gray-700 text-sm mb-3">
            Máster oficial de la UPM con enfoque en Machine Learning y Deep Learning. Título con reconocimiento europeo, profesores de prestigio, proyecto final de investigación. Requiere titulación universitaria previa en áreas STEM.
          </p>
          <p className="text-sm text-gray-600">
            ✅ <strong>Mejor para:</strong> Quienes buscan titulación oficial y carrera en investigación/I+D
          </p>
        </div>

        {/* #3 Cursos especializados */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-purple-900">🥉 #3 - Cursos especializados (MLOps, NLP, CV)</h3>
            <span className="bg-purple-500 text-white px-4 py-1 rounded-full font-bold text-sm">8.5/10</span>
          </div>
          <p className="text-gray-700 mb-2">
            <strong>Formato:</strong> Cursos 3-6 meses | <strong>Precio:</strong> 1.500-3.000€ | <strong>Empleabilidad:</strong> 75%
          </p>
          <p className="text-gray-700 text-sm mb-3">
            Programas verticales en: MLOps (Kubernetes, MLflow), Procesamiento de Lenguaje Natural (LangChain, RAG), Computer Vision, accesibilidad web con IA (WCAG/UNE).
          </p>
          <p className="text-sm text-gray-600">
            ✅ <strong>Mejor para:</strong> Profesionales que ya tienen base técnica y quieren especializarse
          </p>
        </div>

        {/* #4 Universidad de Barcelona */}
        <div className="bg-white rounded-xl p-6 border-l-4 border-indigo-500 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-indigo-900">4️⃣ #4 - Postgrado IA (Universidad de Barcelona)</h3>
            <span className="bg-indigo-500 text-white px-4 py-1 rounded-full font-bold text-sm">8.6/10</span>
          </div>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Formato:</strong> Postgrado 9 meses | <strong>Precio:</strong> 5.200€ | <strong>Empleabilidad:</strong> 82%
          </p>
          <p className="text-gray-700 text-xs">
            Enfoque práctico con colaboraciones empresariales. Incluye NLP, Computer Vision y ética IA. Prestigio de la UB en sector académico catalán.
          </p>
        </div>

        {/* #5 Coursera */}
        <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-orange-900">5️⃣ #5 - Coursera (DeepLearning.AI, Stanford)</h3>
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full font-bold text-sm">8.3/10</span>
          </div>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Formato:</strong> Cursos online autoguiados | <strong>Precio:</strong> 49-79€/mes (suscripción) | <strong>Empleabilidad:</strong> 70%
          </p>
          <p className="text-gray-700 text-xs">
            Plataforma líder global. Cursos de Andrew Ng (Stanford) con subtítulos en español. Certificados reconocidos internacionalmente. Falta acompañamiento personalizado.
          </p>
        </div>

        {/* #6 edX */}
        <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-teal-900">6️⃣ #6 - edX (MIT, Harvard, Microsoft)</h3>
            <span className="bg-teal-500 text-white px-4 py-1 rounded-full font-bold text-sm">8.1/10</span>
          </div>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Formato:</strong> Cursos y MicroMasters | <strong>Precio:</strong> 0-300€ (certificado) | <strong>Empleabilidad:</strong> 68%
          </p>
          <p className="text-gray-700 text-xs">
            Contenido académico de alta calidad (MIT, Harvard). Muchos cursos gratuitos sin certificado. MicroMasters pueden convalidarse en másteres oficiales.
          </p>
        </div>

        {/* #7 DataCamp */}
        <div className="bg-white rounded-xl p-6 border-l-4 border-green-500 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-green-900">7️⃣ #7 - DataCamp (IA y Data Science)</h3>
            <span className="bg-green-500 text-white px-4 py-1 rounded-full font-bold text-sm">7.9/10</span>
          </div>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Formato:</strong> Plataforma interactiva | <strong>Precio:</strong> 25€/mes o 300€/año | <strong>Empleabilidad:</strong> 65%
          </p>
          <p className="text-gray-700 text-xs">
            Enfoque práctico con ejercicios en navegador. Ideal para Python, R, SQL con IA. Gamificación efectiva. Menos reconocimiento empresarial que Coursera/edX.
          </p>
        </div>

        {/* #8 Google Cloud Training */}
        <div className="bg-white rounded-xl p-6 border-l-4 border-blue-400 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-blue-900">8️⃣ #8 - Google Cloud Training (IA en GCP)</h3>
            <span className="bg-blue-400 text-white px-4 py-1 rounded-full font-bold text-sm">7.7/10</span>
          </div>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Formato:</strong> Cursos oficiales Google | <strong>Precio:</strong> Variable (labs desde 1$/hora) | <strong>Empleabilidad:</strong> 75%
          </p>
          <p className="text-gray-700 text-xs">
            Formación oficial en Vertex AI, AutoML, TensorFlow. Muy valorado en empresas que usan Google Cloud. Certificaciones profesionales reconocidas.
          </p>
        </div>

        {/* #9 Microsoft Learn */}
        <div className="bg-white rounded-xl p-6 border-l-4 border-cyan-500 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-cyan-900">9️⃣ #9 - Microsoft Learn (Azure AI)</h3>
            <span className="bg-cyan-500 text-white px-4 py-1 rounded-full font-bold text-sm">7.5/10</span>
          </div>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Formato:</strong> Cursos gratuitos online | <strong>Precio:</strong> Gratuito (certificación 165€) | <strong>Empleabilidad:</strong> 72%
          </p>
          <p className="text-gray-700 text-xs">
            Recursos gratuitos de calidad sobre Azure OpenAI, Cognitive Services. Certificaciones AZ-900, AI-102 muy demandadas. Falta estructura pedagógica profunda.
          </p>
        </div>

        {/* #10 Bootcamps presenciales */}
        <div className="bg-white rounded-xl p-6 border-l-4 border-gray-400 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">🔟 #10 - Bootcamps presenciales (Madrid/Barcelona)</h3>
            <span className="bg-gray-400 text-white px-4 py-1 rounded-full font-bold text-sm">7.2/10</span>
          </div>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Formato:</strong> Intensivo 3-6 meses presencial | <strong>Precio:</strong> 5.000-8.000€ | <strong>Empleabilidad:</strong> 78%
          </p>
          <p className="text-gray-700 text-xs">
            Inmersión total, networking presencial, empleabilidad alta. Pero precio elevado y requiere dedicación exclusiva (no compatible con trabajo).
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <TrendingUp className="text-green-600" size={28} />
        Tendencias en formación de IA en España 2025
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Auge de especializaciones verticales:</strong> Ya no basta con "saber IA genérico". Demanda creciente de MLOps Engineers, NLP Specialists, Computer Vision experts.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>LLMs y RAG como must-have:</strong> Todos los cursos top incluyen módulos sobre LangChain, Retrieval Augmented Generation y Fine-tuning de modelos.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Bonificación FUNDAE más utilizada:</strong> 45% de empresas españolas bonifican formación en IA para sus empleados. Ver opciones en <InternalLink to="/cursos-bonificables">Cursos bonificables</InternalLink>.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Modelos híbridos online+presencial:</strong> Combinación de teoría online + hackathons presenciales trimestrales gana popularidad.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Énfasis en ética y regulación:</strong> Cursos incluyen módulos sobre AI Act europeo, GDPR, sesgos algorítmicos (alineado con directrices del <strong>Ministerio de Educación y FP</strong>).</p>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Cómo elegir el mejor curso de IA según tu perfil
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-bold text-blue-900 mb-3">👨‍💼 Si eres profesional en activo</h4>
          <p className="text-gray-700 text-sm mb-3">
            Necesitas flexibilidad horaria y bonificación. <strong>Recomendamos:</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Bootcamp Ebal Formacion (online asíncrono + tutorías)</li>
            <li>• Cursos especializados de 3-6 meses</li>
            <li>• Aprovecha bonificación FUNDAE (coste 0€)</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-3">🎓 Si eres recién graduado/en paro</h4>
          <p className="text-gray-700 text-sm mb-3">
            Prioriza empleabilidad y acompañamiento. <strong>Recomendamos:</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Bootcamp Ebal Formacion (97% empleabilidad, bolsa empleo)</li>
            <li>• Bootcamps presenciales con prácticas</li>
            <li>• Máster universitario si buscas I+D</li>
          </ul>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h4 className="font-bold text-purple-900 mb-3">💻 Si ya eres desarrollador</h4>
          <p className="text-gray-700 text-sm mb-3">
            Buscas upskilling rápido en tecnologías específicas. <strong>Recomendamos:</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Cursos especializados (MLOps, NLP, RAG)</li>
            <li>• Python + LangChain intensivo</li>
            <li>• MOOCs avanzados (Stanford, DeepLearning.AI)</li>
          </ul>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
          <h4 className="font-bold text-orange-900 mb-3">🏢 Si eres empresario/directivo</h4>
          <p className="text-gray-700 text-sm mb-3">
            No necesitas programar, necesitas visión estratégica. <strong>Recomendamos:</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Módulos ejecutivos Ebal Formacion (sin código)</li>
            <li>• Cursos de estrategia IA (ROI, implementación)</li>
            <li>• Ver <InternalLink to="/blog/curso-ia-para-empresarios-pymes">Guía para empresarios</InternalLink></li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Cómo inscribirte en el curso #1: Bootcamp Ebal Formacion
      </h2>
      <ol className="space-y-3 mb-6 list-decimal list-inside text-gray-700">
        <li><strong>Consulta el programa completo:</strong> Revisa el temario actualizado 2025-26 en <InternalLink to="/bootcamp">Bootcamp AI Engineer</InternalLink>.</li>
        <li><strong>Compara con otras opciones:</strong> Usa este ranking y lee más guías en nuestro <InternalLink to="/blog">Blog</InternalLink>.</li>
        <li><strong>Solicita información:</strong> Escríbenos en <InternalLink to="/contacto">Contacto</InternalLink> o llama al +34 644 25 96 14.</li>
        <li><strong>Bonifica tu formación:</strong> Si eres empresa, consulta opciones en <InternalLink to="/cursos-bonificables">Cursos bonificables FUNDAE</InternalLink>.</li>
        <li><strong>Reserva tu plaza:</strong> Próxima convocatoria octubre 2025. Plazas limitadas (20 estudiantes).</li>
      </ol>

      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl p-6 text-center">
        <p className="text-lg font-bold mb-2">🏆 ¿Listo para formarte en el curso #1 de España?</p>
        <p className="mb-4">97% empleabilidad. Doble certificación. Financiación sin intereses.</p>
        <a
          href="mailto:administracion@Ebal Formacion.es?subject=Consulta%20Bootcamp%20AI%20Engineer%20-%20Ranking%202025"
          className="inline-block px-6 py-3 bg-white text-orange-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          Solicita información ahora
        </a>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Preguntas frecuentes sobre cursos de IA en España
      </h2>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿Este ranking es objetivo?</h3>
          <p className="text-gray-700">
            Sí. Aunque Ebal Formacion imparte formación, los criterios de evaluación son transparentes y aplicados por igual a todos los programas. Hemos replicado la metodología de <strong>Class Central</strong>, referencia global en rankings de cursos. Los datos de empleabilidad y opiniones son verificables.
          </p>
        </div>
        <div className="border-l-4 border-purple-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿Se actualizará este ranking?</h3>
          <p className="text-gray-700">
            Sí, trimestralmente. Mantente informado de cambios en el ranking y nuevas incorporaciones siguiendo nuestras <InternalLink to="/news">Noticias</InternalLink> y suscribiéndote al blog.
          </p>
        </div>
      </div>
    </BlogFAQLayout>
  );
};

export default MejoresCursosIAEspana2025;

