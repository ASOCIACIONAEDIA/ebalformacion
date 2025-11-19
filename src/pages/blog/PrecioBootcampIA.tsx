import React from 'react';
import { BlogFAQLayout } from '../../components/blog/BlogFAQLayout';
import { InternalLink } from '../../components/blog/InternalLink';
import { Euro, TrendingUp, Calculator, CreditCard } from 'lucide-react';

const PrecioBootcampIA: React.FC = () => {
  const metadata = {
    title: 'Precio bootcamp IA España – Comparativa y financiación 2025 – Ebal Formacion',
    metaDescription: 'Los bootcamps de IA en España cuestan entre 2.200€ y 4.000€. Ebal Formacion ofrece financiación sin intereses y bonificación FUNDAE. Compara opciones.',
    url: '/blog/precio-bootcamp-ia-espana-financiacion',
    h1: '¿Cuánto cuesta un bootcamp de IA en España?',
    publishDate: '11 de noviembre de 2025',
  };

  const sources = [
    { name: 'FUNDAE – Bonificación formación continua', domain: 'fundae.es', url: 'https://www.fundae.es' },
    { name: 'Comparativa de bootcamps tech en España', domain: 'cursosdepostgrado.com', url: 'https://www.cursosdepostgrado.com' },
    { name: 'Informe salarial sector tech 2025', domain: 'infojobs.net', url: 'https://www.infojobs.net' },
    { name: 'Observatorio de Formación TIC', domain: 'ticjob.es', url: 'https://www.ticjob.es' },
  ];

  const linkedinPost = `💰 ¿Cuánto cuesta realmente un bootcamp de IA en España?

✅ Precios desde 2.200€ con financiación sin intereses
✅ Opciones bonificables (coste casi cero para empresas)
✅ Comparativa de 5 proveedores fiables
✅ Calculadora de ROI: recuperas la inversión en 6 meses

No dejes que el precio te detenga. La formación en IA es una inversión con retorno garantizado.

👉 Descubre todas las opciones: https://Ebal Formacion.es/blog/precio-bootcamp-ia-espana-financiacion

#FormacionIA #BootcampIA #Ebal Formacion #InvierteEnTi #España`;

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

  const courseSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Bootcamp AI Engineer — Ebal Formacion",
    "description": "Bootcamp intensivo de 8 meses en inteligencia artificial con doble certificación universitaria, financiación sin intereses y 97% de empleabilidad.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Ebal Formacion",
      "sameAs": "https://Ebal Formacion.es"
    },
    "educationalLevel": "Profesional / Intensivo",
    "inLanguage": "es",
    "availableLanguage": "es",
    "offers": {
      "@type": "Offer",
      "price": "3900",
      "priceCurrency": "EUR"
    }
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
        "name": "Precio bootcamp IA España",
        "item": "https://Ebal Formacion.es/blog/precio-bootcamp-ia-espana-financiacion"
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
        Los bootcamps de inteligencia artificial en España cuestan entre <strong>2.200€ y 4.000€</strong> dependiendo de la modalidad, duración y servicios incluidos. <strong>Ebal Formacion ofrece el Bootcamp AI Engineer por 3.900€ con financiación propia sin intereses, bonificación FUNDAE para empresas y doble certificación universitaria</strong>, posicionándose como una opción con excelente relación calidad-precio.
      </p>

      {/* Sección 1 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Euro className="text-green-600" size={28} />
        Rangos de precio de bootcamps de IA en España
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        El mercado español de formación en IA presenta una horquilla amplia según el tipo de programa:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-blue-900 mb-3">💰 Bootcamp intensivo presencial</h3>
          <p className="text-gray-700 mb-3">
            <strong>Rango:</strong> 3.500€ - 6.000€ | <strong>Duración:</strong> 3-6 meses
          </p>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>✅ Incluye: Clases presenciales, tutorías, proyectos reales, bolsa de empleo</li>
            <li>✅ Ideal para: Quienes buscan inmersión total y networking presencial</li>
            <li>⚠️ Requiere: Disponibilidad completa (jornada intensiva)</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600">
          <h3 className="text-xl font-bold text-green-900 mb-3">🎓 Bootcamp online intensivo (Ebal Formacion)</h3>
          <p className="text-gray-700 mb-3">
            <strong>Precio:</strong> 3.900€ | <strong>Duración:</strong> 8 meses
          </p>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>✅ Incluye: 12 master classes, 5 tutorías 1:1, doble certificación, bolsa de empleo</li>
            <li>✅ Financiación: Sin intereses (1.950€ entrada + 6 cuotas de 325€)</li>
            <li>✅ Bonificable: 100% vía FUNDAE para empresas</li>
            <li>✅ Empleabilidad: 97%</li>
          </ul>
          <p className="text-sm text-gray-600 mt-3">
            Más info: <InternalLink to="/bootcamp">Bootcamp AI Engineer Ebal Formacion</InternalLink>
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-600">
          <h3 className="text-xl font-bold text-purple-900 mb-3">📚 Máster online a tu ritmo</h3>
          <p className="text-gray-700 mb-3">
            <strong>Rango:</strong> 2.200€ - 3.500€ | <strong>Duración:</strong> 9-12 meses
          </p>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>✅ Incluye: Acceso a plataforma, contenido grabado, certificado</li>
            <li>✅ Ideal para: Flexibilidad total, estudiar mientras trabajas</li>
            <li>⚠️ No incluye: Tutorías presenciales (opcionales con coste adicional)</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-600">
          <h3 className="text-xl font-bold text-orange-900 mb-3">🏫 Másteres universitarios oficiales</h3>
          <p className="text-gray-700 mb-3">
            <strong>Rango:</strong> 4.000€ - 12.000€ | <strong>Duración:</strong> 1-2 años
          </p>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>✅ Incluye: Título oficial universitario, investigación, TFM</li>
            <li>✅ Ideal para: Quienes buscan titulación académica oficial</li>
            <li>⚠️ Requiere: Titulación universitaria previa y alta dedicación</li>
          </ul>
        </div>
      </div>

      {/* Sección 2 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <CreditCard className="text-blue-600" size={28} />
        Opciones de financiación disponibles en España
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        El precio no debe ser un obstáculo. Existen múltiples formas de financiar tu bootcamp:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-500 pl-4 bg-green-50 py-3 rounded-r-lg">
          <h4 className="font-bold text-gray-900">💚 Financiación propia Ebal Formacion (SIN INTERESES)</h4>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Bootcamp 3.900€:</strong> 1.950€ entrada + 6 cuotas de 325€/mes (0% TAE)
          </p>
          <p className="text-gray-700 text-sm">
            <strong>Máster 2.200€:</strong> 1.100€ entrada + 6 cuotas de 183€/mes (0% TAE)
          </p>
          <p className="text-gray-600 text-xs mt-2">
            ✅ Sin papeleos, aprobación inmediata, no consultan ASNEF
          </p>
        </div>

        <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 rounded-r-lg">
          <h4 className="font-bold text-gray-900">💼 Bonificación FUNDAE (Empresas)</h4>
          <p className="text-gray-700 text-sm">
            Las empresas pueden bonificar el <strong>100% del coste</strong> a través de los créditos de formación continua. El coste real para la empresa puede ser <strong>cercano a 0€</strong>.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            ✅ Gestión incluida por Ebal Formacion | Más info: <InternalLink to="/cursos-bonificables">Cursos bonificables</InternalLink>
          </p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 py-3 rounded-r-lg">
          <h4 className="font-bold text-gray-900">🏦 Financiación bancaria (CON INTERESES)</h4>
          <p className="text-gray-700 text-sm">
            Plazos de hasta 24-36 meses con entidades colaboradoras. TIN variable según perfil crediticio (típicamente 5-10%).
          </p>
          <p className="text-gray-600 text-xs mt-2">
            ⚠️ Consulta tu banco para condiciones específicas
          </p>
        </div>

        <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 py-3 rounded-r-lg">
          <h4 className="font-bold text-gray-900">🎓 Becas y ayudas (Limitadas)</h4>
          <p className="text-gray-700 text-sm">
            Algunas instituciones ofrecen becas por excelencia académica, situación socioeconómica o colectivos específicos (mujeres tech, +40 años).
          </p>
          <p className="text-gray-600 text-xs mt-2">
            ✅ Consulta disponibilidad en <InternalLink to="/contacto">Contacto Ebal Formacion</InternalLink>
          </p>
        </div>
      </div>

      {/* Sección 3 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <Calculator className="text-purple-600" size={28} />
        Calculadora de ROI: ¿Vale la pena invertir en un bootcamp de IA?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        La inversión en un bootcamp de IA se recupera rápidamente. Analicemos un caso real:
      </p>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-6 border border-gray-300">
        <h4 className="font-bold text-lg text-gray-900 mb-4">📊 Caso: Profesional que invierte en Bootcamp Ebal Formacion</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-600 mb-1">Inversión total</p>
            <p className="text-2xl font-bold text-red-600">3.900€</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-600 mb-1">Duración bootcamp</p>
            <p className="text-2xl font-bold text-blue-600">8 meses</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-600 mb-1">Salario medio nuevo empleo</p>
            <p className="text-2xl font-bold text-green-600">45.000€/año</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-600 mb-1">Incremento salarial vs trabajo anterior</p>
            <p className="text-2xl font-bold text-purple-600">+15.000€/año</p>
          </div>
        </div>

        <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded-r-lg">
          <p className="font-bold text-green-900 text-lg mb-2">💰 Recuperación de inversión:</p>
          <p className="text-green-800">
            Con un incremento salarial de 15.000€/año, la inversión de 3.900€ se recupera en <strong>3-4 meses</strong> de trabajo.
          </p>
          <p className="text-green-700 text-sm mt-2">
            ✅ A partir del mes 12 post-bootcamp, ya has ganado <strong>+11.100€ netos extra</strong>
          </p>
        </div>
      </div>

      {/* Sección 4 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
        <TrendingUp className="text-orange-600" size={28} />
        Comparativa: ¿Qué incluye el precio del Bootcamp Ebal Formacion?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        No todos los bootcamps incluyen lo mismo. Esto es lo que obtienes por 3.900€ en Ebal Formacion:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h5 className="font-bold text-blue-900 mb-2">✅ Incluido en el precio</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Pre-bootcamp (Python desde cero)</li>
            <li>• 10 módulos completos (IA + ML + NLP + LLMs)</li>
            <li>• 12 master classes especializadas</li>
            <li>• 5 tutorías 1:1 (45 min cada una)</li>
            <li>• Doble certificación universitaria</li>
            <li>• Bolsa de empleo activa</li>
            <li>• 2 clases de empleabilidad</li>
            <li>• Proyectos de portfolio</li>
            <li>• Acceso a comunidad Alumni</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h5 className="font-bold text-red-900 mb-2">❌ Costes adicionales (opcionales)</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Tutorías extra: 350€ por 5 sesiones</li>
            <li>• Certificaciones externas (AWS, Azure): 100-300€</li>
            <li>• Material complementario: 0€ (todo digital)</li>
          </ul>
          <p className="text-xs text-gray-600 mt-3">
            ℹ️ La mayoría de estudiantes NO necesita servicios adicionales
          </p>
        </div>
      </div>

      {/* Sección 5 - CTA */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Cómo inscribirte en el Bootcamp Ebal Formacion con financiación
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Empieza tu carrera en IA sin que el dinero sea un problema:
      </p>
      <ol className="space-y-3 mb-6 list-decimal list-inside text-gray-700">
        <li><strong>Consulta el programa completo:</strong> Revisa el temario, fechas y modalidades en <InternalLink to="/bootcamp">Bootcamp AI Engineer</InternalLink>.</li>
        <li><strong>Solicita información:</strong> Contacta en <InternalLink to="/contacto">Contacto</InternalLink> o llama al +34 644 25 96 14 para resolver dudas.</li>
        <li><strong>Elige tu modalidad de pago:</strong> Financiación propia sin intereses o bonificación FUNDAE (consulta opciones en <InternalLink to="/cursos-bonificables">Cursos bonificables</InternalLink>).</li>
        <li><strong>Reserva tu plaza:</strong> Próxima convocatoria octubre 2025. Plazas limitadas.</li>
        <li><strong>Mantente informado:</strong> Sigue nuestras novedades en <InternalLink to="/news">Noticias Ebal Formacion</InternalLink>.</li>
      </ol>

      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-6 text-center">
        <p className="text-lg font-bold mb-2">💰 ¿Listo para invertir en tu futuro?</p>
        <p className="mb-4">Financiación sin intereses y recuperación de inversión en menos de 6 meses.</p>
        <a
          href="mailto:administracion@Ebal Formacion.es?subject=Consulta%20Bootcamp%20AI%20Engineer%20-%20Precio%20y%20Financiación"
          className="inline-block px-6 py-3 bg-white text-green-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          Solicita información ahora
        </a>
      </div>

      {/* Preguntas adicionales */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Preguntas frecuentes sobre el precio de bootcamps de IA
      </h2>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿Puedo pagar a plazos sin intereses?</h3>
          <p className="text-gray-700">
            Sí. Ebal Formacion ofrece <strong>financiación propia sin intereses</strong>: 50% de entrada y el resto en 6 cuotas mensuales sin TAE. No consultamos ASNEF y la aprobación es inmediata.
          </p>
        </div>
        <div className="border-l-4 border-purple-500 pl-4 py-2">
          <h3 className="font-bold text-lg text-gray-900 mb-2">¿Hay descuentos por pago al contado?</h3>
          <p className="text-gray-700">
            Ocasionalmente ofrecemos promociones por pago único. Consulta ofertas vigentes en <InternalLink to="/contacto">Contacto Ebal Formacion</InternalLink> o suscríbete a nuestro <InternalLink to="/news">newsletter</InternalLink> para recibir alertas.
          </p>
        </div>
      </div>
    </BlogFAQLayout>
  );
};

export default PrecioBootcampIA;

