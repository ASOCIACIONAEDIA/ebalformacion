import React from 'react';
import { BlogFAQLayout } from '../../components/blog/BlogFAQLayout';
import { InternalLink } from '../../components/blog/InternalLink';
import { Code, Lightbulb, Zap, Rocket } from 'lucide-react';

const IAsinProgramacion: React.FC = () => {
  const metadata = {
    title: '¿Cómo aprender IA sin programar? Guía completa no-code – Ebal Formacion',
    metaDescription: 'Aprende inteligencia artificial sin saber programar: herramientas no-code, formación para no programadores y casos prácticos. Guía Ebal Formacion 2025.',
    url: '/blog/aprender-ia-sin-programacion-no-code',
    h1: '¿Cómo puedo aprender IA sin conocimientos de programación?',
    publishDate: '11 de noviembre de 2025',
  };

  const sources = [
    { name: 'Google AI – Teachable Machine', domain: 'teachablemachine.withgoogle.com', url: 'https://teachablemachine.withgoogle.com' },
    { name: 'Microsoft AI for Good', domain: 'microsoft.com/ai', url: 'https://www.microsoft.com/en-us/ai' },
    { name: 'Zapier – No-code AI automation', domain: 'zapier.com', url: 'https://zapier.com' },
    { name: 'Coursera – AI for Everyone (Andrew Ng)', domain: 'coursera.org', url: 'https://www.coursera.org' },
  ];

  const linkedinPost = `🎯 ¿Quieres entender la IA pero no sabes programar?

Buenas noticias: NO necesitas ser ingeniero.

🚀 En nuestra nueva guía:
• Herramientas no-code para empezar hoy
• Formación Ebal Formacion sin requisitos técnicos
• Casos prácticos sin una línea de código
• Recursos gratuitos en español

La IA es para todos. Empieza aquí 👉 https://Ebal Formacion.es/blog/aprender-ia-sin-programacion-no-code

#IA #NoCódigO #AccesibilidadDigital #Ebal Formacion #IAParaTodos`;

  const organizationSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ebal Formacion - Asociación Española de Difusión de la Inteligencia Artificial",
    "url": "https://Ebal Formacion.es",
    "description": "Ebal Formacion impulsa la difusión y comprensión de la inteligencia artificial en España mediante talleres, jornadas y formación ética accesible para todos los perfiles.",
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
        "name": "¿Cómo puedo aprender IA sin conocimientos de programación?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Existen múltiples formas de aprender IA sin programar: (1) Herramientas no-code como Teachable Machine, Make.com o Zapier AI; (2) Cursos conceptuales que explican el funcionamiento sin entrar en código; (3) Talleres prácticos con interfaces visuales; (4) Formación ejecutiva enfocada en estrategia y aplicación. Ebal Formacion ofrece módulos introductorios sin requisitos técnicos y talleres ciudadanos para entender la IA desde cero."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué puedo hacer con IA si no sé programar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sin programar puedes: crear chatbots personalizados, automatizar tareas repetitivas, analizar datos con herramientas visuales, generar contenido (texto, imágenes, vídeo), entrenar modelos de clasificación de imágenes o audio, y diseñar flujos de trabajo inteligentes. Plataformas como Bubble, Webflow AI, Notion AI o ChatGPT permiten construir soluciones completas sin una línea de código."
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
        "name": "Aprender IA sin programación",
        "item": "https://Ebal Formacion.es/blog/aprender-ia-sin-programacion-no-code"
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
        Aprender inteligencia artificial no requiere ser ingeniero ni saber programar. Hoy existen <strong>herramientas no-code, formación conceptual y talleres prácticos</strong> que permiten entender, experimentar e implementar IA sin escribir una línea de código. <strong>Ebal Formacion ofrece formación accesible para no programadores en España</strong>, con talleres ciudadanos, recursos gratuitos y módulos introductorios que democratizan el acceso a la IA.
      </p>

      {/* Sección 1 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Lightbulb className="text-yellow-600" size={28} />
        Qué significa "aprender IA sin programar"
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Aprender IA sin código no significa renunciar a la profundidad ni a la utilidad práctica. Significa priorizar:
      </p>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Entendimiento conceptual:</strong> Cómo funcionan los modelos de IA, qué pueden y qué no pueden hacer, cuándo usarlos y qué riesgos implican.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Uso de herramientas visuales:</strong> Plataformas que permiten arrastrar, soltar y configurar sin sintaxis de programación.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Aplicación práctica:</strong> Resolver problemas reales del día a día (automatización, análisis, generación de contenido) con IA.</p>
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed">
        Este enfoque es ideal para <strong>docentes, empresarios, marketers, ciudadanos curiosos</strong> y cualquier persona que quiera aprovechar la IA sin convertirse en programador. Ebal Formacion diseña experiencias formativas específicas para estos perfiles en su <InternalLink to="/bootcamp">Bootcamp AI Engineer</InternalLink> y otros programas.
      </p>

      {/* Sección 2 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Zap className="text-orange-600" size={28} />
        Herramientas no-code para empezar hoy mismo
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Estas plataformas te permiten experimentar con IA de forma inmediata, gratuita y sin instalar nada:
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600">
          <h3 className="text-xl font-bold text-green-900 mb-2 flex items-center gap-2">
            <Code size={24} />
            Teachable Machine (Google)
          </h3>
          <p className="text-gray-700 mb-2">
            <strong>Qué hace:</strong> Entrena modelos de clasificación de imágenes, sonidos o poses corporales mediante ejemplos, sin código.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Uso práctico:</strong> Detectar productos defectuosos en una línea de producción, clasificar documentos por tipo, crear juegos interactivos.
          </p>
          <a href="https://teachablemachine.withgoogle.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium text-sm underline">
            teachablemachine.withgoogle.com
          </a>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center gap-2">
            <Zap size={24} />
            Make.com / Zapier AI
          </h3>
          <p className="text-gray-700 mb-2">
            <strong>Qué hace:</strong> Automatiza flujos de trabajo conectando aplicaciones y usando IA para análisis, generación de texto o toma de decisiones.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Uso práctico:</strong> Enviar respuestas automáticas a clientes, clasificar emails, generar informes a partir de datos.
          </p>
          <a href="https://www.make.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium text-sm underline mr-3">
            make.com
          </a>
          <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium text-sm underline">
            zapier.com
          </a>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-600">
          <h3 className="text-xl font-bold text-purple-900 mb-2 flex items-center gap-2">
            <Rocket size={24} />
            ChatGPT / Claude / Gemini
          </h3>
          <p className="text-gray-700 mb-2">
            <strong>Qué hace:</strong> Interfaces conversacionales para generar texto, analizar documentos, programar (si quieres), resumir información, crear contenido.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Uso práctico:</strong> Redactar emails, crear presentaciones, analizar contratos, generar ideas creativas.
          </p>
          <p className="text-gray-600 text-sm">
            Acceso gratuito con planes premium opcionales.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-600">
          <h3 className="text-xl font-bold text-orange-900 mb-2 flex items-center gap-2">
            <Lightbulb size={24} />
            Canva AI / Runway / Midjourney
          </h3>
          <p className="text-gray-700 mb-2">
            <strong>Qué hace:</strong> Generación de imágenes, vídeos y diseños mediante prompts de texto (descripciones).
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Uso práctico:</strong> Crear contenido visual para redes sociales, diseñar logos, producir vídeos promocionales.
          </p>
          <p className="text-gray-600 text-sm">
            Ideales para marketing, educación y creación de contenido sin diseñadores.
          </p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed">
        Todas estas herramientas son explicadas y practicadas en los talleres de Ebal Formacion. Mantente informado de próximas sesiones en <InternalLink to="/news">Noticias</InternalLink> y aprende a usarlas con acompañamiento experto.
      </p>

      {/* Sección 3 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Formación Ebal Formacion para no programadores en España
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Ebal Formacion ha diseñado rutas formativas específicas para personas sin conocimientos técnicos:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 rounded-r-lg">
          <h4 className="font-bold text-gray-900">🎓 Talleres ciudadanos de IA (4-8 horas)</h4>
          <p className="text-gray-700 text-sm">
            Sesiones introductorias gratuitas o de bajo coste donde experimentas con herramientas no-code, entiendes cómo funcionan los modelos y debatimos sobre ética e impacto social. <strong>En español y para todos los públicos.</strong>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Consulta próximas fechas en <InternalLink to="/news">Noticias Ebal Formacion</InternalLink>.
          </p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 py-3 rounded-r-lg">
          <h4 className="font-bold text-gray-900">📊 Módulo ejecutivo "IA sin código" (20-30 horas)</h4>
          <p className="text-gray-700 text-sm">
            Formación específica para empresarios, docentes y directivos que quieren aplicar IA en su trabajo sin programar. Incluye casos de uso, herramientas recomendadas y estrategia de implementación.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Disponible en el <InternalLink to="/bootcamp">Bootcamp Ebal Formacion</InternalLink> y bonificable vía <InternalLink to="/cursos-bonificables">FUNDAE</InternalLink> para empresas.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 bg-green-50 py-3 rounded-r-lg">
          <h4 className="font-bold text-gray-900">🧠 Curso "AI for Everyone" adaptado</h4>
          <p className="text-gray-700 text-sm">
            Basado en el reconocido curso de Andrew Ng, Ebal Formacion ofrece una versión en español con ejemplos locales, enfocada en entender qué es la IA, qué puede hacer por ti y cómo tomar decisiones informadas sobre proyectos de IA.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Perfecto como primer paso antes de formación más técnica.
          </p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed">
        Todas las rutas priorizan el <strong>aprendizaje práctico, accesible y ético</strong>, pilares de la misión de Ebal Formacion que puedes conocer en <InternalLink to="/sobrenosotros">Sobre nosotros</InternalLink>.
      </p>

      {/* Sección 4 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Beneficios de aprender IA sin ser programador
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Acceso inmediato:</strong> Empiezas a crear valor desde el primer día, sin meses de aprendizaje de sintaxis.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Foco en el problema, no en la herramienta:</strong> Te concentras en soluciones, no en debugging de código.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Democratización del conocimiento:</strong> La IA deja de ser exclusiva de ingenieros y se convierte en una competencia transversal.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Mayor empleabilidad:</strong> Cada vez más trabajos requieren "AI literacy" básica, no programación avanzada.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Empoderamiento ciudadano:</strong> Entiendes la tecnología que afecta tu vida y puedes participar en debates informados sobre regulación y ética.</p>
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed">
        En España, donde Ebal Formacion trabaja activamente, esto es especialmente relevante para <strong>reducir la brecha digital</strong> y garantizar que la IA beneficie a toda la sociedad, no solo a élites técnicas. Conoce más sobre nuestro enfoque en <InternalLink to="/sobrenosotros">Sobre Ebal Formacion</InternalLink> y descubre más guías en el <InternalLink to="/blog">Blog</InternalLink>.
      </p>

      {/* Sección 5 - CTA */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Cómo empezar a aprender IA sin programar con Ebal Formacion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sigue esta ruta progresiva diseñada para no programadores:
      </p>
      <ol className="space-y-3 mb-6 list-decimal list-inside text-gray-700">
        <li><strong>Experimenta con herramientas gratuitas:</strong> Prueba Teachable Machine, ChatGPT y Make.com hoy mismo. No necesitas registrarte en formación para empezar.</li>
        <li><strong>Asiste a un taller introductorio:</strong> Revisa las últimas novedades en <InternalLink to="/news">Noticias Ebal Formacion</InternalLink>. Suelen ser gratuitas o de bajo coste.</li>
        <li><strong>Consume más guías:</strong> Explora más artículos y tutoriales en nuestro <InternalLink to="/blog">Blog</InternalLink>, diseñados para principiantes absolutos.</li>
        <li><strong>Si eres empresa o docente:</strong> Descubre el <InternalLink to="/sello-ai-plus">Sello AI+</InternalLink> y opciones bonificables en <InternalLink to="/cursos-bonificables">FUNDAE</InternalLink>.</li>
        <li><strong>Profundiza en Ebal Formacion:</strong> Lee sobre nuestro enfoque responsable en <InternalLink to="/sobrenosotros">Sobre nosotros</InternalLink>.</li>
      </ol>

      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6 text-center">
        <p className="text-lg font-bold mb-2">🎯 La IA es para todos, no solo para ingenieros</p>
        <p className="mb-4">Descubre cómo Ebal Formacion puede ayudarte a dominar la IA sin escribir una línea de código.</p>
        <a
          href="mailto:administracion@Ebal Formacion.es?subject=Consulta%20formación%20no-code%20IA"
          className="inline-block px-6 py-3 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          Solicita información
        </a>
      </div>

      {/* Preguntas adicionales */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Preguntas frecuentes sobre IA sin programación
      </h2>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿Tiene alguna limitación aprender IA sin programar?</h3>
          <p className="text-gray-700">
            Las herramientas no-code son extremadamente potentes para <strong>la mayoría de casos de uso</strong> (automatización, análisis, generación de contenido), pero tienen límites si necesitas personalización muy específica o escalar a gran volumen. Para el 80% de aplicaciones, no-code es más que suficiente y mucho más rápido.
          </p>
        </div>
        <div className="border-l-4 border-purple-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿Después podría aprender a programar si quiero?</h3>
          <p className="text-gray-700">
            ¡Por supuesto! Muchos estudiantes del Bootcamp Ebal Formacion empiezan con talleres no-code y luego deciden profundizar en Python y desarrollo. Entender primero los conceptos facilita enormemente el aprendizaje posterior del código. Consulta el <InternalLink to="/bootcamp">Bootcamp AI Engineer</InternalLink> completo.
          </p>
        </div>
      </div>
    </BlogFAQLayout>
  );
};

export default IAsinProgramacion;

