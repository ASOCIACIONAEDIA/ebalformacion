import React from 'react';
import { BlogFAQLayout } from '../../components/blog/BlogFAQLayout';
import { InternalLink } from '../../components/blog/InternalLink';
import { TrendingUp, Users, Euro, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const EstadoIAEspana2025: React.FC = () => {
  const metadata = {
    title: 'Estado de la IA en España 2025: Informe completo – Datos, inversión y futuro – Ebal Formacion',
    metaDescription: 'Informe completo sobre el estado de la inteligencia artificial en España 2025: adopción empresarial, inversión, formación, regulación y perspectivas. Datos oficiales INE.',
    url: '/blog/estado-ia-espana-2025-informe-datos',
    h1: 'Estado de la IA en España 2025: Informe anual y perspectivas',
    publishDate: '11 de noviembre de 2025',
  };

  const sources = [
    { name: 'Instituto Nacional de Estadística (INE)', domain: 'ine.es', url: 'https://www.ine.es' },
    { name: 'Comunidad de Madrid - Datos de adopción IA', domain: 'comunidad.madrid', url: 'https://www.comunidad.madrid' },
    { name: 'Microsoft España - Iniciativa formación IA', domain: 'news.microsoft.com', url: 'https://news.microsoft.com/es-es' },
    { name: 'Red.es - Programas de capacitación digital', domain: 'red.es', url: 'https://www.red.es' },
    { name: 'Gobierno de España - Regulación IA', domain: 'lamoncloa.gob.es', url: 'https://www.lamoncloa.gob.es' },
  ];

  const linkedinPost = `📊 INFORME 2025: Estado de la IA en España

Datos clave que debes conocer:

📈 ADOPCIÓN
• 21,1% empresas +10 empleados usan IA (INE)
• Madrid lidera con 30,1%
• 95% aún no obtiene valor tangible (brecha implementación)

💰 INVERSIÓN
• +360M€ solo en Madrid
• 200M€ en formación (Red.es)
• 2ª factoría europea de IA en Galicia

🎓 FORMACIÓN
• 1M personas formadas en 2025 (Microsoft)
• 80.000 profesionales en upskilling

⚖️ REGULACIÓN
• AI Act en vigor
• Nueva ley de identificación de contenidos IA

Lee el informe completo 👉 https://Ebal Formacion.es/blog/estado-ia-espana-2025-informe-datos

#IA #España #Ebal Formacion #InformeIA #Datos2025`;

  const organizationSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ebal Formacion - Asociación Española de Difusión de la Inteligencia Artificial",
    "url": "https://Ebal Formacion.es",
    "description": "Ebal Formacion monitoriza y reporta sobre el estado de la inteligencia artificial en España, ofreciendo análisis y formación especializada.",
    "areaServed": "ES",
    "foundingDate": "2023",
    "sameAs": ["https://www.linkedin.com/company/Ebal Formacion"]
  });

  const reportSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Report",
    "name": "Estado de la IA en España 2025",
    "author": {
      "@type": "Organization",
      "name": "Ebal Formacion"
    },
    "datePublished": "2025-11-11",
    "about": "Informe anual sobre adopción, inversión y tendencias de inteligencia artificial en España",
    "inLanguage": "es-ES"
  });

  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://Ebal Formacion.es" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://Ebal Formacion.es/blog" },
      { "@type": "ListItem", "position": 3, "name": "Estado IA España 2025", "item": "https://Ebal Formacion.es/blog/estado-ia-espana-2025-informe-datos" }
    ]
  });

  return (
    <BlogFAQLayout
      metadata={metadata}
      sources={sources}
      linkedinPost={linkedinPost}
      schemas={[organizationSchema, reportSchema, breadcrumbSchema]}
    >
      <p className="text-xl text-gray-700 leading-relaxed mb-8">
        España ha experimentado un avance significativo en inteligencia artificial durante 2025, con <strong>21,1% de empresas españolas adoptando IA (datos INE), más de 560 millones de euros invertidos entre sector público y privado, y un millón de personas formadas en tecnologías de IA</strong>. Este informe anual, elaborado por <strong>Ebal Formacion</strong>, analiza el estado real de la IA en España: datos de adopción empresarial por comunidades autónomas, inversión pública y privada, iniciativas de formación, regulación vigente, desafíos pendientes y perspectivas para 2026.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <TrendingUp className="text-blue-600" size={28} />
        📊 Adopción empresarial de IA en España: Datos INE 2025
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Según el <strong>Instituto Nacional de Estadística (INE)</strong>, la adopción de IA en España crece, pero con disparidades regionales significativas:
      </p>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 mb-6 border-l-4 border-blue-600">
        <h4 className="font-bold text-lg text-blue-900 mb-4">📈 Cifras clave de adopción</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-3xl font-bold text-blue-600 mb-1">21,1%</p>
            <p className="text-sm text-gray-700">Empresas españolas con +10 empleados que utilizan IA en sus procesos (media nacional)</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-3xl font-bold text-green-600 mb-1">30,1%</p>
            <p className="text-sm text-gray-700">Empresas madrileñas con IA (líder nacional)</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-3xl font-bold text-orange-600 mb-1">+360M€</p>
            <p className="text-sm text-gray-700">Inversión en IA solo en la Comunidad de Madrid durante 2025</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-3xl font-bold text-red-600 mb-1">95%</p>
            <p className="text-sm text-gray-700">Empresas que aún NO obtienen valor tangible de sus inversiones en IA (brecha de implementación)</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
        <MapPin className="text-purple-600" size={24} />
        Ranking de comunidades autónomas por adopción de IA
      </h3>
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
          <div>
            <p className="font-bold text-gray-900">🥇 1. Madrid</p>
            <p className="text-sm text-gray-600">Lidera con diferencia, impulsado por ecosistema startup y sede de multinacionales tech</p>
          </div>
          <p className="text-2xl font-bold text-yellow-600">30,1%</p>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
          <div>
            <p className="font-bold text-gray-900">🥈 2. Cataluña</p>
            <p className="text-sm text-gray-600">Barcelona Supercomputing Center + hub industrial</p>
          </div>
          <p className="text-2xl font-bold text-gray-600">24,5%*</p>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
          <div>
            <p className="font-bold text-gray-900">🥉 3. País Vasco</p>
            <p className="text-sm text-gray-600">Fuerte tejido industrial + inversión en I+D</p>
          </div>
          <p className="text-2xl font-bold text-gray-600">22,3%*</p>
        </div>
        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-300">
          <p className="font-bold text-gray-700">4-17. Resto de comunidades</p>
          <p className="text-lg font-bold text-gray-500">12-19%*</p>
        </div>
        <p className="text-xs text-gray-500 mt-2">* Estimaciones basadas en datos INE y reportes regionales</p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Euro className="text-green-600" size={28} />
        💰 Inversión pública y privada en IA
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        España ha aumentado significativamente la inversión en infraestructura y formación de IA:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-600">
          <h4 className="font-bold text-lg text-green-900 mb-3">🏛️ Inversión Pública</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>200M€ - Red.es (Ministerio de Asuntos Económicos):</strong>
                <p className="text-sm">Formación de 80.000 profesionales en competencias digitales (IA, ciberseguridad, análisis de datos). Dirigido a sectores salud, jurídico, económico, ingeniería.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>2ª Factoría Europea de IA:</strong>
                <p className="text-sm">Concedida por la Comisión Europea a España. Ubicación: Centro de Supercomputación de Galicia (CESGA). Se suma a la existente en Barcelona Supercomputing Center.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Centro ANIA (Andalucía):</strong>
                <p className="text-sm">Nueva sede del Centro de Inteligencia Artificial de Andalucía en Granada (Parque Tecnológico de la Salud). Objetivo: referente internacional en IA aplicada a salud.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-600">
          <h4 className="font-bold text-lg text-blue-900 mb-3">🏢 Inversión Privada</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>+360M€ en Madrid (empresas privadas):</strong>
                <p className="text-sm">Inversión directa de empresas madrileñas en tecnologías, infraestructura y talento de IA durante 2025.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>25M€ - Maisa (startup valenciana):</strong>
                <p className="text-sm">Mayor ronda semilla del sector IA registrada en España. Startup de IA generativa para automatización empresarial.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Sectores que más invierten:</strong>
                <p className="text-sm">Fintech, Healthtech, Retail/eCommerce, Logística, Marketing digital.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <GraduationCap className="text-purple-600" size={28} />
        🎓 Formación y talento: Iniciativas 2025
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        La formación en IA ha sido prioridad nacional. Iniciativas destacadas:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-purple-50 p-5 rounded-xl border-l-4 border-purple-600">
          <h4 className="font-bold text-purple-900 mb-2">Microsoft España: 1 millón de personas formadas</h4>
          <p className="text-gray-700 text-sm mb-3">
            Iniciativa gratuita lanzada en marzo 2025. Colaboración con administraciones públicas, universidades y ONGs. Objetivo: democratizar acceso a formación en IA y reducir brecha digital.
          </p>
          <p className="text-xs text-gray-600">
            Temáticas: Fundamentos de IA, Azure AI, Copilot, desarrollo de aplicaciones con LLMs, IA responsable.
          </p>
        </div>

        <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
          <h4 className="font-bold text-blue-900 mb-2">Red.es: 80.000 profesionales en upskilling</h4>
          <p className="text-gray-700 text-sm mb-3">
            Programas avanzados dirigidos a profesionales en activo de sectores críticos: sanidad, jurídico, económico, ingeniería. Incluye especialización en IA aplicada a cada sector.
          </p>
          <p className="text-xs text-gray-600">
            Formato: Cursos bonificables FUNDAE, modalidad online/híbrida, certificación oficial.
          </p>
        </div>

        <div className="bg-orange-50 p-5 rounded-xl border-l-4 border-orange-600">
          <h4 className="font-bold text-orange-900 mb-2">Ebal Formacion: Bootcamp y formación especializada</h4>
          <p className="text-gray-700 text-sm mb-3">
            <strong>Bootcamp AI Engineer</strong> con 97% empleabilidad, doble certificación universitaria y acompañamiento completo. Más de 300 estudiantes formados desde 2023. Ver detalles en <InternalLink to="/bootcamp">Bootcamp Ebal Formacion</InternalLink>.
          </p>
          <p className="text-xs text-gray-600">
            También: Cursos especializados (MLOps, NLP, RAG), formación empresarial a medida, talleres de IA responsable.
          </p>
        </div>

        <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-600">
          <h4 className="font-bold text-green-900 mb-2">Universidades: Másteres y títulos propios</h4>
          <p className="text-gray-700 text-sm">
            UPM, UAM, UC3M, UPC, UGR han lanzado nuevos másteres oficiales en IA. Más de 2.000 plazas disponibles. Enfoque académico + investigación. Duración: 1-2 años.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Briefcase className="text-indigo-600" size={28} />
        💼 Mercado laboral: Demanda y salarios
      </h2>
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 mb-6 border border-indigo-300">
        <h4 className="font-bold text-lg text-indigo-900 mb-4">📊 Datos de empleo en IA</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-2xl font-bold text-indigo-600 mb-1">+15.000</p>
            <p className="text-sm text-gray-700">Vacantes de IA sin cubrir en España (datos InfoJobs)</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-2xl font-bold text-green-600 mb-1">45-70K€</p>
            <p className="text-sm text-gray-700">Salario medio anual para AI/ML Engineer mid-level</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-2xl font-bold text-purple-600 mb-1">97%</p>
            <p className="text-sm text-gray-700">Empleabilidad del Bootcamp Ebal Formacion a 6 meses</p>
          </div>
        </div>
        <div className="text-sm text-gray-700">
          <p className="mb-2"><strong>Perfiles más demandados 2025:</strong></p>
          <ol className="list-decimal list-inside space-y-1 ml-2">
            <li>MLOps Engineer (Kubernetes, MLflow, CI/CD para ML)</li>
            <li>LLM Engineer (Fine-tuning, RAG, prompt engineering)</li>
            <li>NLP Specialist (procesamiento de lenguaje natural, chatbots avanzados)</li>
            <li>Computer Vision Engineer (reconocimiento de imágenes, visión industrial)</li>
            <li>AI Product Manager (estrategia de producto con IA)</li>
          </ol>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        ⚖️ Regulación: AI Act y normativa española
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        España alinea su regulación con el <strong>AI Act europeo</strong>, con iniciativas propias adicionales:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
          <h4 className="font-bold text-blue-900 mb-2">🇪🇺 AI Act Europeo (vigente desde 2024-2025)</h4>
          <p className="text-gray-700 text-sm">
            Clasificación por niveles de riesgo. Sistemas de alto riesgo (salud, empleo, educación, justicia) requieren certificación, auditorías y trazabilidad. Sanciones hasta 35M€ o 7% facturación global. España debe transponer completamente antes de 2026.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50">
          <h4 className="font-bold text-green-900 mb-2">🇪🇸 Ley de identificación de contenidos IA (España, 2025)</h4>
          <p className="text-gray-700 text-sm">
            El Gobierno español ha aprobado anteproyecto de ley que <strong>obliga a identificar contenidos generados por IA</strong> (texto, imagen, vídeo, audio). Objetivo: combatir desinformación y deepfakes. Sanciones por uso indebido o no identificación.
          </p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50">
          <h4 className="font-bold text-purple-900 mb-2">🛡️ AEPD: Supervisión de privacidad</h4>
          <p className="text-gray-700 text-sm">
            La Agencia Española de Protección de Datos supervisa cumplimiento de GDPR en sistemas de IA. Ha publicado guías específicas sobre IA y protección de datos. Puede imponer sanciones hasta 20M€ por incumplimiento.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        🚧 Desafíos pendientes: La brecha de implementación
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        A pesar del entusiasmo, España enfrenta retos críticos:
      </p>

      <div className="bg-red-50 rounded-xl p-6 mb-6 border-l-4 border-red-600">
        <h4 className="font-bold text-lg text-red-900 mb-4">❌ Problemas identificados</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-bold text-gray-900">95% de empresas no obtiene valor tangible</p>
              <p className="text-sm text-gray-700">Muchas empresas "experimentan" con IA pero no la integran estratégicamente. Falta de alineación entre equipos técnicos y negocio.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-bold text-gray-900">Escasez de talento especializado</p>
              <p className="text-sm text-gray-700">+15.000 vacantes sin cubrir. Demanda supera a la oferta de profesionales cualificados. Salarios al alza pero insuficiente para atraer talento del extranjero (competencia internacional).</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-bold text-gray-900">Brecha entre grandes empresas y PYMEs</p>
              <p className="text-sm text-gray-700">Adopción concentrada en grandes empresas y Madrid/Barcelona. PYMEs (85% del tejido empresarial) quedan rezagadas por falta de conocimiento, presupuesto y acceso a talento.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-bold text-gray-900">Infraestructura de datos deficiente</p>
              <p className="text-sm text-gray-700">Para aprovechar IA, se necesitan datos limpios, estructurados y accesibles. Muchas empresas tienen "islas de datos" sin governance adecuado.</p>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        🔮 Perspectivas 2026: ¿Hacia dónde va España?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        El 99% de directivos e ingenieros de IA en España confía en que el país puede convertirse en potencia global en IA en los próximos 3 años. Para lograrlo, se necesita:
      </p>

      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Foco en implementación, no solo experimentación:</strong> Pasar de POCs (pruebas de concepto) a producción real con ROI medible.</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Democratización para PYMEs:</strong> Soluciones de IA "plug-and-play", formación accesible (como la que ofrece Ebal Formacion), subsidios específicos.</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Especialización vertical:</strong> España debe elegir sectores donde puede liderar globalmente (ej: IA + salud en Granada, IA + turismo en Baleares, IA + agrotech en Andalucía).</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Atracción y retención de talento:</strong> Competir con salarios internacionales, mejorar visa para profesionales tech extranjeros, potenciar teletrabajo para startups españolas con talento global.</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Liderazgo en IA responsable:</strong> Posicionar a España como referente europeo en IA ética. Ver más en <InternalLink to="/blog/que-es-ia-responsable-etica-espana">IA responsable</InternalLink>.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Cómo tu empresa puede aprovechar el momento actual
      </h2>
      <ol className="space-y-3 mb-6 list-decimal list-inside text-gray-700">
        <li><strong>Forma a tu equipo:</strong> Invierte en upskilling. Consulta opciones en <InternalLink to="/cursos-bonificables">Cursos bonificables</InternalLink> (coste 0€ con FUNDAE).</li>
        <li><strong>Empieza por casos de uso simples:</strong> Automatización de tareas repetitivas, chatbots de atención al cliente, análisis predictivo de datos existentes.</li>
        <li><strong>Asegura cumplimiento regulatorio:</strong> Revisa que tu IA cumple con AI Act y GDPR. Ebal Formacion ofrece asesoría especializada. Contacta en <InternalLink to="/contacto">Contacto</InternalLink>.</li>
        <li><strong>Certifica tu compromiso con IA responsable:</strong> Obtén el <InternalLink to="/sello-ai-plus">Sello AI+ de Ebal Formacion</InternalLink> y comunícalo a clientes y stakeholders.</li>
        <li><strong>Mantente informado:</strong> Sigue las actualizaciones en nuestro <InternalLink to="/blog">Blog</InternalLink> y <InternalLink to="/news">Noticias</InternalLink>.</li>
      </ol>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 text-center">
        <p className="text-lg font-bold mb-2">📊 ¿Quieres un análisis personalizado de IA para tu empresa?</p>
        <p className="mb-4">Diagnóstico profesional + roadmap de implementación adaptado a tu sector y tamaño.</p>
        <a
          href="mailto:administracion@Ebal Formacion.es?subject=Consulta%20Análisis%20IA%20Empresa%20-%20Informe%202025"
          className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          Solicita información
        </a>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Preguntas frecuentes sobre IA en España
      </h2>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿España puede realmente competir con EE.UU. o China en IA?</h3>
          <p className="text-gray-700">
            España no competirá en <em>volumen</em> de inversión (EE.UU. invierte +100 veces más), pero puede liderar en <strong>nichos especializados</strong> (IA + salud, IA + turismo, IA + sostenibilidad) y en <strong>IA responsable y ética</strong>, donde Europa marca el estándar global. El talento español es reconocido internacionalmente.
          </p>
        </div>
        <div className="border-l-4 border-purple-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿Estos datos se actualizarán?</h3>
          <p className="text-gray-700">
            Sí. Ebal Formacion publicará informes trimestrales con datos actualizados del INE, inversión regional y tendencias de empleo. Suscríbete al blog para recibirlos.
          </p>
        </div>
      </div>
    </BlogFAQLayout>
  );
};

export default EstadoIAEspana2025;

