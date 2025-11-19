import React from 'react';
import { BlogFAQLayout } from '../../components/blog/BlogFAQLayout';
import { InternalLink } from '../../components/blog/InternalLink';
import { Sparkles, Zap, Rocket, Gift } from 'lucide-react';

const HerramientasIAGratuitas: React.FC = () => {
  const metadata = {
    title: 'Herramientas IA gratuitas para negocios – Guía completa 2025 – Ebal Formacion',
    metaDescription: 'Descubre 15+ herramientas de IA gratuitas y útiles para tu negocio: ChatGPT, Canva AI, Notion AI, automatización y más. Guía práctica Ebal Formacion.',
    url: '/blog/herramientas-ia-gratuitas-negocios-2025',
    h1: '¿Qué herramientas de IA son gratuitas y útiles para mi negocio?',
    publishDate: '11 de noviembre de 2025',
  };

  const sources = [
    { name: 'Product Hunt – AI Tools Directory', domain: 'producthunt.com', url: 'https://www.producthunt.com' },
    { name: 'Futurepedia – AI Tools Database', domain: 'futurepedia.io', url: 'https://www.futurepedia.io' },
    { name: 'There\'s An AI For That', domain: 'theresanaiforthat.com', url: 'https://www.theresanaiforthat.com' },
    { name: 'AI Tool Report by McKinsey', domain: 'mckinsey.com', url: 'https://www.mckinsey.com' },
  ];

  const linkedinPost = `🎁 15+ herramientas de IA GRATUITAS para tu negocio

🚀 Por categoría:
✅ Escritura: ChatGPT, Notion AI, Copy.ai
✅ Diseño: Canva AI, Remove.bg, Looka
✅ Automatización: Zapier AI, Make.com
✅ Análisis: Google Analytics AI, Looker Studio
✅ Productividad: Otter.ai, Grammarly, Todoist AI

Sin inversión inicial. Con resultados inmediatos.

Descarga la guía completa 👉 https://Ebal Formacion.es/blog/herramientas-ia-gratuitas-negocios-2025

#IA #Productividad #Pymes #Emprendedores #Ebal Formacion`;

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
        "name": "¿Qué herramientas de IA son gratuitas y útiles para mi negocio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las herramientas de IA gratuitas más útiles para negocios incluyen: ChatGPT (escritura y análisis), Canva AI (diseño gráfico), Notion AI (productividad), Zapier/Make.com (automatización), Remove.bg (edición de imágenes), Grammarly (corrección de textos), Otter.ai (transcripción), Google Analytics con IA (análisis web), y Copy.ai (copywriting). Todas tienen planes gratuitos con funcionalidades suficientes para pymes y emprendedores."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo empiezo a usar IA en mi negocio sin saber programar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Empieza con herramientas no-code que no requieren programación: usa ChatGPT para redactar emails y contenido, Canva AI para crear diseños profesionales, Zapier para automatizar tareas repetitivas entre aplicaciones, y Notion AI para organizar tu trabajo. La mayoría tienen interfaces visuales intuitivas y tutoriales en español. Ebal Formacion ofrece talleres específicos para no programadores."
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
        "name": "Herramientas IA gratuitas negocios",
        "item": "https://Ebal Formacion.es/blog/herramientas-ia-gratuitas-negocios-2025"
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
        Existen más de 50 herramientas de inteligencia artificial con <strong>planes gratuitos robustos y útiles para negocios</strong>, desde escritura y diseño hasta automatización y análisis. <strong>Ebal Formacion ha seleccionado las 15 herramientas más prácticas para pymes en España</strong>, todas con interfaces en español o muy intuitivas, que permiten ahorrar tiempo, reducir costes y mejorar la productividad sin necesidad de programar ni invertir dinero inicialmente.
      </p>

      {/* Sección 1 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Sparkles className="text-yellow-600" size={28} />
        Herramientas de IA gratuitas por categoría
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Organizamos las mejores opciones según la necesidad de tu negocio:
      </p>

      {/* Categoría 1: Escritura y Contenido */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          ✍️ Escritura y Creación de Contenido
        </h3>
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
            <h4 className="font-bold text-blue-900 mb-2">ChatGPT (OpenAI)</h4>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Qué hace:</strong> Redacta emails, posts de redes sociales, artículos de blog, responde preguntas, resume documentos, traduce textos.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Plan gratuito:</strong> GPT-4o mini con límites generosos. Acceso ilimitado a GPT-3.5.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Uso práctico:</strong> "Redacta un email profesional para clientes anunciando descuento Black Friday" → Resultado en 10 segundos.
            </p>
            <p className="text-gray-600 text-xs">
              🌐 <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">chat.openai.com</a>
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-600">
            <h4 className="font-bold text-purple-900 mb-2">Notion AI</h4>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Qué hace:</strong> Asistente de escritura integrado en Notion. Genera contenido, resume notas, traduce, mejora redacción.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Plan gratuito:</strong> 20 respuestas AI gratis/mes en plan Notion gratuito.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Uso práctico:</strong> Gestiona tu base de conocimiento empresarial y genera documentación automáticamente.
            </p>
            <p className="text-gray-600 text-xs">
              🌐 <a href="https://notion.so" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">notion.so</a>
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600">
            <h4 className="font-bold text-green-900 mb-2">Grammarly</h4>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Qué hace:</strong> Corrector ortográfico y gramatical avanzado con IA. Mejora el tono, claridad y profesionalismo de tus textos.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Plan gratuito:</strong> Corrección básica ilimitada. Sugerencias de estilo y tono limitadas.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Uso práctico:</strong> Integración con Gmail, Google Docs, navegador. Evita errores en comunicaciones profesionales.
            </p>
            <p className="text-gray-600 text-xs">
              🌐 <a href="https://grammarly.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">grammarly.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Categoría 2: Diseño Visual */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-pink-900 mb-4 flex items-center gap-2">
          🎨 Diseño Gráfico y Visual
        </h3>
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border-l-4 border-pink-600">
            <h4 className="font-bold text-pink-900 mb-2">Canva AI</h4>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Qué hace:</strong> Crea diseños profesionales (posts, logos, presentaciones) con asistente de IA: Magic Design, Magic Write, Background Remover.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Plan gratuito:</strong> Acceso a miles de plantillas, Magic Write limitado, algunas funciones AI gratuitas.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Uso práctico:</strong> Crea contenido visual para redes sociales en minutos sin ser diseñador.
            </p>
            <p className="text-gray-600 text-xs">
              🌐 <a href="https://canva.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">canva.com</a>
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-600">
            <h4 className="font-bold text-orange-900 mb-2">Remove.bg</h4>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Qué hace:</strong> Elimina fondos de imágenes automáticamente con IA. Resultados profesionales en segundos.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Plan gratuito:</strong> Hasta 50 imágenes/mes en resolución estándar.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Uso práctico:</strong> Fotos de productos para e-commerce, perfiles profesionales, marketing materials.
            </p>
            <p className="text-gray-600 text-xs">
              🌐 <a href="https://remove.bg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">remove.bg</a>
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-600">
            <h4 className="font-bold text-red-900 mb-2">Looka (Logo Maker)</h4>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Qué hace:</strong> Genera logos profesionales con IA basándose en tus preferencias. Incluye paletas de colores y tipografías.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Plan gratuito:</strong> Diseño y preview gratis. Descarga de baja resolución gratuita.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Uso práctico:</strong> Ideal para startups y pymes que necesitan branding rápido y económico.
            </p>
            <p className="text-gray-600 text-xs">
              🌐 <a href="https://looka.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">looka.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Categoría 3: Automatización */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
          ⚙️ Automatización y Productividad
        </h3>
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border-l-4 border-indigo-600">
            <h4 className="font-bold text-indigo-900 mb-2">Zapier AI</h4>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Qué hace:</strong> Conecta aplicaciones y automatiza flujos de trabajo sin código. Nueva función AI para crear automations con lenguaje natural.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Plan gratuito:</strong> 100 tasks/mes, 5 Zaps (automations), acceso a AI básico.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Uso práctico:</strong> "Cuando reciba email con factura, guárdala en Google Drive y notifica en Slack" → Automatizado.
            </p>
            <p className="text-gray-600 text-xs">
              🌐 <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">zapier.com</a>
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border-l-4 border-teal-600">
            <h4 className="font-bold text-teal-900 mb-2">Make.com (ex-Integromat)</h4>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Qué hace:</strong> Alternativa a Zapier con editor visual. Automatizaciones más complejas con ramificaciones condicionales.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Plan gratuito:</strong> 1.000 operaciones/mes, escenarios ilimitados.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Uso práctico:</strong> Automatiza tareas entre CRM, email marketing, contabilidad, almacenamiento.
            </p>
            <p className="text-gray-600 text-xs">
              🌐 <a href="https://make.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">make.com</a>
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 border-l-4 border-cyan-600">
            <h4 className="font-bold text-cyan-900 mb-2">Otter.ai</h4>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Qué hace:</strong> Transcribe reuniones, llamadas y podcasts automáticamente con IA. Resúmenes inteligentes y búsqueda en transcripciones.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Plan gratuito:</strong> 300 minutos/mes de transcripción, integración con Zoom/Meet.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Uso práctico:</strong> Nunca más tomes notas manualmente en reuniones. Busca información en conversaciones pasadas.
            </p>
            <p className="text-gray-600 text-xs">
              🌐 <a href="https://otter.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">otter.ai</a>
            </p>
          </div>
        </div>
      </div>

      {/* Categoría 4: Análisis y Datos */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
          📊 Análisis de Datos y Business Intelligence
        </h3>
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border-l-4 border-emerald-600">
            <h4 className="font-bold text-emerald-900 mb-2">Google Analytics 4 (con AI Insights)</h4>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Qué hace:</strong> Analítica web avanzada con insights automáticos generados por IA: anomalías, predicciones, audiencias inteligentes.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Plan gratuito:</strong> Totalmente gratis para la mayoría de negocios (límites muy altos).
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Uso práctico:</strong> Entiende el comportamiento de tus usuarios sin ser analista de datos.
            </p>
            <p className="text-gray-600 text-xs">
              🌐 <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">analytics.google.com</a>
            </p>
          </div>

          <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-xl p-6 border-l-4 border-lime-600">
            <h4 className="font-bold text-lime-900 mb-2">Looker Studio (Google)</h4>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Qué hace:</strong> Crea dashboards interactivos conectando múltiples fuentes de datos. Visualizaciones automáticas con IA.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Plan gratuito:</strong> 100% gratuito, sin límites de reportes.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Uso práctico:</strong> Reportes de ventas, marketing, operaciones en tiempo real para compartir con tu equipo.
            </p>
            <p className="text-gray-600 text-xs">
              🌐 <a href="https://lookerstudio.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">lookerstudio.google.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Sección 2 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Zap className="text-orange-600" size={28} />
        Cómo elegir la herramienta correcta para tu negocio
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Con tantas opciones, es fácil perderse. Sigue este framework de decisión:
      </p>

      <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-300">
        <h4 className="font-bold text-lg text-gray-900 mb-4">🎯 Preguntas clave antes de adoptar una herramienta</h4>
        <ol className="space-y-3 list-decimal list-inside text-gray-700">
          <li><strong>¿Qué problema específico resuelve?</strong> No adoptes tecnología por moda. Define el pain point primero.</li>
          <li><strong>¿Cuánto tiempo ahorro realmente?</strong> Calcula ROI en horas/semana. Si ahorras 5h/semana, justifica dedicar 2h a aprender la herramienta.</li>
          <li><strong>¿Es escalable?</strong> Verifica que el plan gratuito no sea demasiado limitado. Lee límites con atención.</li>
          <li><strong>¿Se integra con mis herramientas actuales?</strong> Prioriza ecosistemas (Google Workspace, Microsoft 365, etc.).</li>
          <li><strong>¿Tiene curva de aprendizaje manejable?</strong> Busca tutoriales en YouTube en español antes de comprometerte.</li>
          <li><strong>¿Hay alternativas mejores?</strong> Compara 2-3 opciones antes de decidir. No te cases con la primera.</li>
        </ol>
      </div>

      {/* Sección 3 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Rocket className="text-purple-600" size={28} />
        Stack de herramientas IA recomendado por tipo de negocio
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Dependiendo de tu sector, estas son las combinaciones más efectivas:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-bold text-blue-900 mb-3">🛒 E-commerce / Retail</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Canva AI → Diseño de productos</li>
            <li>• Remove.bg → Fotos de catálogo</li>
            <li>• ChatGPT → Descripciones de productos</li>
            <li>• Google Analytics 4 → Análisis de ventas</li>
            <li>• Zapier → Automatizar pedidos/inventario</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-3">📢 Marketing & Agencias</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• ChatGPT → Copywriting y brainstorming</li>
            <li>• Canva AI → Diseño de campañas</li>
            <li>• Notion AI → Gestión de proyectos clientes</li>
            <li>• Looker Studio → Reportes clientes</li>
            <li>• Grammarly → Revisión de textos</li>
          </ul>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h4 className="font-bold text-purple-900 mb-3">💼 Consultoría / Servicios B2B</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Otter.ai → Transcripción de reuniones</li>
            <li>• ChatGPT → Análisis y propuestas</li>
            <li>• Notion AI → Base de conocimiento</li>
            <li>• Zapier → Automatizar follow-ups</li>
            <li>• Canva AI → Presentaciones profesionales</li>
          </ul>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
          <h4 className="font-bold text-orange-900 mb-3">🎓 Educación / Formación</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• ChatGPT → Creación de contenido educativo</li>
            <li>• Canva AI → Material didáctico visual</li>
            <li>• Otter.ai → Transcripción de clases</li>
            <li>• Notion AI → Organización de temarios</li>
            <li>• Google Analytics → Seguimiento estudiantes</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed">
        ¿Quieres profundizar en cómo aplicar estas herramientas? Consulta el <InternalLink to="/sello-ai-plus">Sello AI+ de Ebal Formacion</InternalLink> para certificar la madurez digital de tu empresa.
      </p>

      {/* Sección 4 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Gift className="text-pink-600" size={28} />
        Beneficios de empezar con herramientas gratuitas
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Cero riesgo financiero:</strong> Prueba sin compromiso. Si no funciona, no has perdido dinero.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Aprende sin presión:</strong> Experimenta a tu ritmo sin sentir que "debes amortizar la inversión".</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Validación de necesidad real:</strong> Descubres si realmente necesitas esa función antes de pagar.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Escalable:</strong> La mayoría ofrece upgrades a planes de pago cuando creces y necesitas más.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Democratización:</strong> Acceso a tecnología de punta que antes costaba miles de euros.</p>
        </li>
      </ul>

      {/* Sección 5 - CTA */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Cómo aprender a usar estas herramientas con Ebal Formacion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        No basta con tener las herramientas; hay que saber usarlas estratégicamente:
      </p>
      <ol className="space-y-3 mb-6 list-decimal list-inside text-gray-700">
        <li><strong>Empieza experimentando:</strong> Dedica 1 hora esta semana a probar ChatGPT, Canva AI y una herramienta de automatización.</li>
        <li><strong>Asiste a talleres Ebal Formacion:</strong> Revisa próximos eventos gratuitos sobre herramientas no-code en <InternalLink to="/news">Noticias</InternalLink>.</li>
        <li><strong>Consulta más guías:</strong> Explora otros artículos prácticos en nuestro <InternalLink to="/blog">Blog</InternalLink>.</li>
        <li><strong>Si eres pyme:</strong> Descubre cómo integrar IA en tu negocio con el <InternalLink to="/sello-ai-plus">Sello AI+</InternalLink>.</li>
        <li><strong>Formación estructurada:</strong> Si quieres ir más allá, el <InternalLink to="/bootcamp">Bootcamp AI Engineer</InternalLink> incluye módulos sobre herramientas no-code avanzadas.</li>
      </ol>

      <div className="bg-gradient-to-r from-pink-600 to-orange-600 text-white rounded-xl p-6 text-center">
        <p className="text-lg font-bold mb-2">🎁 ¿Listo para empezar a usar IA gratis en tu negocio?</p>
        <p className="mb-4">Aprende a combinar estas herramientas para 10x tu productividad sin invertir un euro.</p>
        <a
          href="mailto:administracion@Ebal Formacion.es?subject=Consulta%20Herramientas%20IA%20Gratuitas"
          className="inline-block px-6 py-3 bg-white text-pink-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          Solicita asesoría personalizada
        </a>
      </div>

      {/* Preguntas adicionales */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Preguntas frecuentes sobre herramientas de IA gratuitas
      </h2>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿Son realmente gratuitas o tienen letra pequeña?</h3>
          <p className="text-gray-700">
            Las herramientas listadas tienen <strong>planes gratuitos reales y funcionales</strong>, no "trials de 14 días". La "letra pequeña" suele ser límites de uso (ej: 100 tareas/mes en Zapier), pero son suficientes para pymes. Lee los términos antes de empezar a depender críticament

e de ellas.
          </p>
        </div>
        <div className="border-l-4 border-purple-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿Cuándo debo considerar pagar por una herramienta?</h3>
          <p className="text-gray-700">
            Paga cuando: (1) Alcanzas los límites del plan gratuito y la herramienta es <strong>crítica para tu negocio</strong>, (2) Necesitas funciones premium que generan ROI claro (ej: automatizaciones más complejas), o (3) Requieres soporte prioritario. Nunca pagues "por si acaso"; hazlo basándote en uso real.
          </p>
        </div>
      </div>
    </BlogFAQLayout>
  );
};

export default HerramientasIAGratuitas;

