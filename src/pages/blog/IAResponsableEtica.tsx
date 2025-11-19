import React from 'react';
import { BlogFAQLayout } from '../../components/blog/BlogFAQLayout';
import { InternalLink } from '../../components/blog/InternalLink';
import { Shield, Heart, Scale, AlertTriangle } from 'lucide-react';

const IAResponsableEtica: React.FC = () => {
  const metadata = {
    title: '¿Qué es la IA responsable? Guía práctica y ética en España – Ebal Formacion',
    metaDescription: 'Descubre qué es la inteligencia artificial responsable, por qué importa en España y cómo implementarla según el AI Act europeo. Guía Ebal Formacion 2025.',
    url: '/blog/que-es-ia-responsable-etica-espana',
    h1: '¿Qué es la IA responsable y por qué es importante en España?',
    publishDate: '11 de noviembre de 2025',
  };

  const sources = [
    { name: 'Ministerio de Educación y Formación Profesional - IA ética', domain: 'educacionfpydeportes.gob.es', url: 'https://www.educacionfpydeportes.gob.es' },
    { name: 'AI Act - Regulación europea', domain: 'europa.eu', url: 'https://digital-strategy.ec.europa.eu' },
    { name: 'UNESCO - Recomendaciones sobre ética de IA', domain: 'unesco.org', url: 'https://www.unesco.org' },
    { name: 'Agencia Española de Protección de Datos', domain: 'aepd.es', url: 'https://www.aepd.es' },
  ];

  const linkedinPost = `🛡️ ¿Qué es la IA responsable y por qué debería importarte?

La IA responsable NO es opcional:
→ Es requisito legal (AI Act europeo)
→ Genera confianza con clientes
→ Evita sanciones millonarias
→ Protege tu reputación

🎯 5 pilares clave:
1️⃣ Transparencia
2️⃣ Equidad (sin sesgos)
3️⃣ Privacidad (GDPR)
4️⃣ Accountability
5️⃣ Seguridad

En España, el Ministerio de Educación ya integra ética IA en formación profesional.

Lee la guía completa 👉 https://Ebal Formacion.es/blog/que-es-ia-responsable-etica-espana

#IAResponsable #EticaIA #Ebal Formacion #AIAct #España`;

  const organizationSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ebal Formacion - Asociación Española de Difusión de la Inteligencia Artificial",
    "url": "https://Ebal Formacion.es",
    "description": "Ebal Formacion impulsa la difusión y comprensión de la inteligencia artificial ética y responsable en España mediante formación, talleres y advocacy.",
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
        "name": "¿Qué es la IA responsable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La IA responsable es el desarrollo y uso de sistemas de inteligencia artificial que respetan principios éticos fundamentales: transparencia (explicabilidad de decisiones), equidad (ausencia de sesgos discriminatorios), privacidad (protección de datos personales según GDPR), accountability (responsabilidad clara), y seguridad (robustez frente a ataques). En España, está regulada por el AI Act europeo y supervisada por la AEPD."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué es importante la IA responsable en España?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es importante por tres razones: 1) Legal - El AI Act europeo exige cumplimiento obligatorio desde 2025 con sanciones de hasta 35M€ o 7% facturación; 2) Social - Protege a ciudadanos de decisiones automatizadas injustas o discriminatorias; 3) Empresarial - Genera confianza, mejora reputación y evita riesgos legales. El Ministerio de Educación y FP ya integra ética IA en currículos de formación profesional."
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
      { "@type": "ListItem", "position": 3, "name": "IA responsable y ética", "item": "https://Ebal Formacion.es/blog/que-es-ia-responsable-etica-espana" }
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
        La inteligencia artificial responsable es el <strong>desarrollo y uso de sistemas de IA que respetan principios éticos fundamentales: transparencia, equidad, privacidad, accountability y seguridad</strong>, garantizando que la tecnología beneficie a la sociedad sin causar daño ni discriminación. <strong>Ebal Formacion promueve la IA responsable en España</strong> alineada con el AI Act europeo, las recomendaciones de UNESCO y las directrices del <strong>Ministerio de Educación y Formación Profesional</strong>, integrando ética en todos sus programas formativos y asesorando a empresas en implementación responsable.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Shield className="text-blue-600" size={28} />
        Los 5 pilares de la IA responsable
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Un sistema de IA se considera responsable cuando cumple estos cinco principios fundamentales:
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center gap-2">
            1️⃣ Transparencia y Explicabilidad
          </h3>
          <p className="text-gray-700 text-sm mb-3">
            <strong>¿Qué significa?</strong> Las decisiones de la IA deben ser comprensibles para humanos. No basta con "la IA lo decidió"; debe explicarse <em>cómo</em> y <em>por qué</em>.
          </p>
          <p className="text-gray-700 text-sm mb-3">
            <strong>Ejemplo práctico:</strong> Si un banco rechaza un préstamo mediante IA, debe explicar qué factores influyeron (ingresos, historial crediticio, etc.), no solo decir "sistema automático denegó".
          </p>
          <p className="text-gray-600 text-xs">
            📋 <strong>Cumplimiento legal:</strong> GDPR exige derecho a explicación de decisiones automatizadas (Art. 22).
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600">
          <h3 className="text-xl font-bold text-green-900 mb-2 flex items-center gap-2">
            2️⃣ Equidad y Ausencia de Sesgos
          </h3>
          <p className="text-gray-700 text-sm mb-3">
            <strong>¿Qué significa?</strong> La IA no debe discriminar por género, raza, edad, orientación sexual, religión o cualquier característica protegida.
          </p>
          <p className="text-gray-700 text-sm mb-3">
            <strong>Ejemplo de sesgo:</strong> Un sistema de selección de CV que penaliza candidatos por nombres asociados a minorías étnicas, o un algoritmo de diagnóstico médico menos preciso con mujeres que con hombres.
          </p>
          <p className="text-gray-600 text-xs mb-2">
            ⚠️ <strong>Riesgo real:</strong> Amazon tuvo que descartar su IA de reclutamiento porque discriminaba a mujeres.
          </p>
          <p className="text-gray-600 text-xs">
            🔧 <strong>Solución:</strong> Auditorías de fairness, datasets balanceados, monitorización continua de métricas de equidad.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-600">
          <h3 className="text-xl font-bold text-purple-900 mb-2 flex items-center gap-2">
            3️⃣ Privacidad y Protección de Datos
          </h3>
          <p className="text-gray-700 text-sm mb-3">
            <strong>¿Qué significa?</strong> Los datos personales deben tratarse según GDPR: consentimiento informado, minimización de datos, derecho al olvido, anonimización cuando sea posible.
          </p>
          <p className="text-gray-700 text-sm mb-3">
            <strong>Ejemplo práctico:</strong> Un chatbot no debe almacenar información sensible (salud, finanzas) sin cifrado. Debe permitir que usuarios borren su historial (derecho de supresión).
          </p>
          <p className="text-gray-600 text-xs">
            🛡️ <strong>En España:</strong> La <strong>AEPD</strong> (Agencia Española de Protección de Datos) supervisa cumplimiento y puede sancionar hasta 20M€.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-600">
          <h3 className="text-xl font-bold text-orange-900 mb-2 flex items-center gap-2">
            4️⃣ Accountability (Responsabilidad)
          </h3>
          <p className="text-gray-700 text-sm mb-3">
            <strong>¿Qué significa?</strong> Debe haber responsables humanos claros. Si la IA comete un error, alguien debe rendir cuentas, no esconderse tras "fue el algoritmo".
          </p>
          <p className="text-gray-700 text-sm mb-3">
            <strong>Ejemplo práctico:</strong> En un hospital con diagnóstico asistido por IA, el médico es responsable final de la decisión, no puede delegar responsabilidad al sistema.
          </p>
          <p className="text-gray-600 text-xs">
            📜 <strong>AI Act exige:</strong> Registro de sistemas de alto riesgo, trazabilidad de decisiones, documentación completa del ciclo de vida del modelo.
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-600">
          <h3 className="text-xl font-bold text-red-900 mb-2 flex items-center gap-2">
            5️⃣ Seguridad y Robustez
          </h3>
          <p className="text-gray-700 text-sm mb-3">
            <strong>¿Qué significa?</strong> Los sistemas deben ser resistentes a ataques adversariales, fallos técnicos y usos maliciosos. Deben funcionar de forma predecible y segura.
          </p>
          <p className="text-gray-700 text-sm mb-3">
            <strong>Ejemplo de riesgo:</strong> IA de conducción autónoma vulnerable a señales de tráfico manipuladas con stickers. IA de reconocimiento facial engañada con imágenes adversariales.
          </p>
          <p className="text-gray-600 text-xs">
            🔒 <strong>Medidas:</strong> Testing exhaustivo, red teaming, monitorización en producción, planes de contingencia ante fallos.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Scale className="text-purple-600" size={28} />
        Marco legal de IA responsable en España y Europa
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        La IA responsable no es solo buena práctica: es <strong>obligación legal</strong> en la Unión Europea:
      </p>

      <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-300">
        <h4 className="font-bold text-lg text-gray-900 mb-4">📜 Regulación vigente en España</h4>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-blue-900 mb-1">AI Act Europeo (2024-2025)</h5>
            <p className="text-gray-700 text-sm mb-2">
              Primera regulación comprehensiva de IA del mundo. Clasifica sistemas por nivel de riesgo:
            </p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• <strong>Riesgo inaceptable:</strong> Prohibidos (ej: social scoring, manipulación subliminal)</li>
              <li>• <strong>Alto riesgo:</strong> Regulación estricta (salud, educación, empleo, justicia)</li>
              <li>• <strong>Riesgo limitado:</strong> Obligación de transparencia (chatbots deben identificarse como IA)</li>
              <li>• <strong>Riesgo mínimo:</strong> Sin requisitos especiales (ej: filtros de spam)</li>
            </ul>
            <p className="text-red-600 text-xs mt-2">
              ⚠️ <strong>Sanciones:</strong> Hasta 35M€ o 7% facturación global anual, lo que sea mayor.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-green-900 mb-1">GDPR (General Data Protection Regulation)</h5>
            <p className="text-gray-700 text-sm">
              Regula tratamiento de datos personales. Aplica a toda IA que procese datos de ciudadanos UE. Supervisado en España por AEPD.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h5 className="font-bold text-purple-900 mb-1">Directrices del Ministerio de Educación y FP</h5>
            <p className="text-gray-700 text-sm">
              El <strong>Ministerio de Educación y Formación Profesional</strong> ha integrado ética de IA en currículos de FP Digital y grados universitarios tech, asegurando que nuevas generaciones se formen con enfoque responsable.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <AlertTriangle className="text-orange-600" size={28} />
        Casos reales: ¿Qué pasa cuando la IA NO es responsable?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Ejemplos de fallos éticos con consecuencias graves:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">❌ Sistema de justicia predictiva sesgado (EE.UU.)</h4>
          <p className="text-gray-700 text-sm">
            COMPAS, sistema de predicción de reincidencia criminal, mostró sesgo racial: etiquetaba a personas negras como "alto riesgo" con el doble de probabilidad que a personas blancas con historial similar. Consecuencia: condenas injustas, vidas arruinadas.
          </p>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">❌ Chatbot de Microsoft (Tay)</h4>
          <p className="text-gray-700 text-sm">
            En 2016, Microsoft lanzó Tay, chatbot de IA en Twitter. En 16 horas aprendió discurso de odio de usuarios maliciosos y empezó a publicar mensajes racistas y sexistas. Microsoft tuvo que apagarlo. Consecuencia: daño reputacional millonario.
          </p>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">❌ Reconocimiento facial discriminatorio</h4>
          <p className="text-gray-700 text-sm">
            Múltiples estudios (MIT, NIST) demostraron que sistemas de reconocimiento facial tienen tasas de error hasta 35% más altas con personas de piel oscura. Riesgo: arrestos erróneos, denegación de servicios.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Heart className="text-pink-600" size={28} />
        Beneficios de implementar IA responsable en tu empresa
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Cumplimiento legal:</strong> Evitas sanciones millonarias del AI Act y GDPR.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Confianza del cliente:</strong> Los usuarios prefieren empresas transparentes. 78% de consumidores europeos valoran ética IA (estudio UNESCO).</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Ventaja competitiva:</strong> Diferénciate con el <InternalLink to="/sello-ai-plus">Sello AI+ de Ebal Formacion</InternalLink> que certifica tu compromiso con IA responsable.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Reducción de riesgos:</strong> Menos probabilidad de demandas, escándalos públicos o boicots por prácticas cuestionables.</p>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-gray-700"><strong>Atracción de talento:</strong> Profesionales tech prefieren trabajar en empresas con valores éticos claros.</p>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Cómo aprender e implementar IA responsable con Ebal Formacion
      </h2>
      <ol className="space-y-3 mb-6 list-decimal list-inside text-gray-700">
        <li><strong>Formación ética integrada:</strong> El <InternalLink to="/bootcamp">Bootcamp AI Engineer de Ebal Formacion</InternalLink> incluye módulos obligatorios sobre IA responsable, AI Act y fairness.</li>
        <li><strong>Asesoría para empresas:</strong> Auditoría de sistemas existentes, implementación de frameworks de ética, preparación para certificación. Contacta en <InternalLink to="/contacto">Contacto</InternalLink>.</li>
        <li><strong>Certificación Sello AI+:</strong> Demuestra públicamente tu compromiso con IA responsable. Más info en <InternalLink to="/sello-ai-plus">Sello AI+</InternalLink>.</li>
        <li><strong>Recursos y guías:</strong> Artículos, checklists y casos prácticos en nuestro <InternalLink to="/blog">Blog</InternalLink>.</li>
        <li><strong>Mantente actualizado:</strong> Regulación evoluciona rápido. Síguenos en <InternalLink to="/news">Noticias</InternalLink>.</li>
      </ol>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 text-center">
        <p className="text-lg font-bold mb-2">🛡️ ¿Tu empresa está lista para el AI Act?</p>
        <p className="mb-4">Auditoría de cumplimiento + roadmap personalizado de implementación de IA responsable.</p>
        <a
          href="mailto:administracion@Ebal Formacion.es?subject=Consulta%20IA%20Responsable%20-%20Auditoría"
          className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          Solicita información
        </a>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Preguntas frecuentes sobre IA responsable
      </h2>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿La IA responsable es más cara de desarrollar?</h3>
          <p className="text-gray-700">
            A corto plazo puede requerir más inversión (auditorías, documentación, testing de fairness), pero a largo plazo es <strong>mucho más barata</strong> que las multas del AI Act (hasta 35M€), demandas por discriminación o el coste reputacional de un escándalo público.
          </p>
        </div>
        <div className="border-l-4 border-purple-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿Mi startup pequeña debe preocuparse por esto?</h3>
          <p className="text-gray-700">
            <strong>Sí, absolutamente.</strong> El AI Act aplica a todas las empresas que operan en la UE, independientemente del tamaño. Además, integrar ética desde el diseño (privacy by design, fairness by design) es más fácil y barato que refactorizar después. Muchos inversores ahora exigen due diligence sobre IA responsable antes de invertir.
          </p>
        </div>
      </div>
    </BlogFAQLayout>
  );
};

export default IAResponsableEtica;

