import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { allNewsData, NewsItem } from '../data/newsData'; // Import combined data

// Helper function to generate placeholder content based on ID
const getPlaceholderContent = (id: string): string => {
  switch (id) {
    case 'news-1':
      return `
        <p class="mb-4">DeepSeek, la startup china de IA, ha revolucionado el panorama de la inteligencia artificial en enero de 2025 con el lanzamiento de su modelo R1. Este modelo de razonamiento ha demostrado que es posible crear IA de alto rendimiento con solo 5.6 millones de dólares, desafiando la creencia de que se necesitan cientos de millones para desarrollar modelos competitivos.</p>
        <p class="mb-4">El impacto fue inmediato: las acciones de Nvidia cayeron un 17% en un solo día, perdiendo casi 1 billón de dólares en capitalización de mercado. DeepSeek logró entrenar su modelo utilizando chips H800 menos potentes (debido a las restricciones de exportación de EE.UU.), demostrando que la eficiencia algorítmica puede superar la potencia bruta de hardware.</p>
        <h3 class="text-xl font-semibold mb-2 mt-6">Características Clave de DeepSeek R1</h3>
        <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
          <li><strong>Transparencia:</strong> Permite a los usuarios ver el proceso de razonamiento paso a paso, algo único en el mercado.</li>
          <li><strong>Eficiencia de Costos:</strong> 21 veces más barato de operar que Claude 3.5 Sonnet de Anthropic.</li>
          <li><strong>Código Abierto:</strong> Disponible para descarga y modificación, democratizando el acceso a IA avanzada.</li>
          <li><strong>Rendimiento Competitivo:</strong> Iguala el rendimiento de OpenAI o1 en tareas de razonamiento matemático y científico.</li>
        </ul>
        <p>Este desarrollo marca un punto de inflexión en la carrera de la IA, demostrando que la innovación puede venir de lugares inesperados y que la eficiencia puede ser más importante que el gasto masivo en recursos.</p>
      `;
    case 'news-2':
      return `
        <p class="mb-4">OpenAI se prepara para lanzar ChatGPT-5 en agosto de 2025, según ha confirmado el CEO Sam Altman en una reciente entrevista en podcast. Sin embargo, las declaraciones del líder de OpenAI han generado tanto expectación como preocupación en la comunidad tecnológica mundial.</p>
        <p class="mb-4">"Se siente muy rápido", declaró Altman sobre el nuevo modelo, pero también añadió comentarios inquietantes: "Hay momentos en la historia de la ciencia donde tienes un grupo de científicos que miran su creación y simplemente dicen: '¿Qué hemos hecho?'". Esta confesión sugiere que incluso los propios desarrolladores están sorprendidos por las capacidades del nuevo modelo.</p>
        <h3 class="text-xl font-semibold mb-2 mt-6">Lo que sabemos de ChatGPT-5</h3>
        <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
          <li><strong>Velocidad Superior:</strong> Significativamente más rápido que las versiones anteriores en procesamiento y respuesta.</li>
          <li><strong>Capacidades Avanzadas:</strong> Mejoras sustanciales en razonamiento, creatividad y resolución de problemas complejos.</li>
          <li><strong>Preocupaciones de Control:</strong> Altman expresó inquietudes sobre la supervisión y control del modelo.</li>
          <li><strong>Competencia Intensificada:</strong> Respuesta directa al éxito de DeepSeek y otros competidores emergentes.</li>
        </ul>
        <p>El lanzamiento de ChatGPT-5 promete marcar un nuevo hito en la evolución de la inteligencia artificial, aunque las advertencias de su propio creador sugieren que nos adentramos en territorio inexplorado donde la potencia de la IA podría superar nuestras expectativas y capacidades de control.</p>
      `;
    case 'news-3':
      return `
        <p class="mb-4">Google ha lanzado oficialmente Gemini 2.0 en febrero de 2025, marcando un salto cuántico en las capacidades de inteligencia artificial con un enfoque revolucionario en agentes autónomos. Esta nueva generación de modelos está diseñada para operar de manera independiente, completando tareas complejas que requieren múltiples pasos sin supervisión constante.</p>
        <p class="mb-4">La característica más innovadora de Gemini 2.0 es su capacidad para actuar como un "asistente universal" que puede entender contexto, planificar acciones futuras y ejecutar tareas en nombre del usuario. "Estamos entrando en la era de los agentes de IA verdaderamente autónomos", declaró Sundar Pichai, CEO de Google, durante la presentación oficial.</p>
        <h3 class="text-xl font-semibold mb-2 mt-6">Capacidades de Agente Autónomo</h3>
        <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
          <li><strong>Planificación Avanzada:</strong> Puede descomponer tareas complejas en pasos ejecutables y priorizarlos.</li>
          <li><strong>Ejecución Independiente:</strong> Realiza acciones sin requerir confirmación constante del usuario.</li>
          <li><strong>Aprendizaje Contextual:</strong> Adapta su comportamiento basándose en interacciones previas y preferencias del usuario.</li>
          <li><strong>Integración Multimodal:</strong> Procesa y genera contenido en texto, imagen, audio y video simultáneamente.</li>
        </ul>
        <p>Este lanzamiento posiciona a Google como pionero en la próxima fase de la IA, donde los modelos no solo responden preguntas, sino que actúan como colaboradores digitales capaces de gestionar tareas complejas de manera autónoma, redefiniendo la relación entre humanos y máquinas.</p>
      `;
    case 'news-4':
      return `
        <p class="mb-4">🎉 ¡Celebrando el éxito del evento FamilIA en Gines! 🎉 El pasado sábado vivimos una jornada extraordinaria donde Ebal Formacion demostró su compromiso con el desarrollo del talento tecnológico local y el reconocimiento a la excelencia en la implementación de IA en la administración pública.</p>
        <p class="mb-4">Durante este evento, Ebal Formacion tuvo el honor de conceder dos becas completas para estudiar programación a dos asistentes del evento, transformando sus oportunidades profesionales y contribuyendo al desarrollo del talento tecnológico en nuestra región. "El futuro se construye invirtiendo en las personas", destacamos durante la ceremonia.</p>
        <h3 class="text-xl font-semibold mb-2 mt-6">Momentos Destacados del Evento</h3>
        <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
          <li><strong>Becas para el Talento Local:</strong> Dos becas completas de programación otorgadas a participantes destacados.</li>
          <li><strong>Sello AI+2025-2026:</strong> Reconocimiento conjunto con Doctrina Qualitas al Ayuntamiento de Ginés por su excelencia en IA municipal.</li>
          <li><strong>Transformación Digital Municipal:</strong> Ginés se posiciona como referente en administración pública digital.</li>
          <li><strong>Networking Tecnológico:</strong> Conexión entre profesionales, estudiantes y administración local.</li>
        </ul>
        <p>El Ayuntamiento de Ginés se convierte así en un ejemplo de cómo la inteligencia artificial puede integrarse de manera ética y efectiva en beneficio de la ciudadanía, demostrando que la transformación digital no es solo una tendencia, sino una necesidad estratégica para ofrecer mejores servicios públicos.</p>
      `;
    case 'news-5':
      return `
        <p class="mb-4">🎨✨ ¡La IA y la creatividad se dan la mano en "El Gran Ariscalín"! 📚 Ebal Formacion ha colaborado en un proyecto pionero que demuestra cómo la tecnología puede potenciar el arte tradicional durante la celebración del Día del Libro, aportando ilustraciones generadas con inteligencia artificial para este maravilloso cuento infantil.</p>
        <p class="mb-4">Este proyecto representa perfectamente la fusión entre literatura e IA, donde las nuevas tecnologías se convierten en grandes aliadas del mundo editorial y creativo. Las ilustraciones capturan no solo la esencia del relato, sino también la emoción de los pequeños lectores al descubrir estas páginas llenas de magia y color.</p>
        <h3 class="text-xl font-semibold mb-2 mt-6">Innovación en Literatura Infantil</h3>
        <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
          <li><strong>Ilustraciones IA:</strong> Creación de imágenes únicas y personalizadas para el cuento infantil.</li>
          <li><strong>Fusión Tecnológica:</strong> Combinación exitosa entre narrativa tradicional y herramientas digitales avanzadas.</li>
          <li><strong>Impacto Educativo:</strong> Demostración práctica de aplicaciones creativas de la IA para niños y familias.</li>
          <li><strong>Colaboración Editorial:</strong> Trabajo conjunto con autores y editores para enriquecer la experiencia literaria.</li>
        </ul>
        <p>Este tipo de colaboraciones refuerzan nuestra misión de acercar la innovación tecnológica a diferentes sectores, creando puentes entre lo tradicional y lo digital. La literatura infantil se enriquece con nuevas posibilidades visuales, mientras que la IA encuentra aplicaciones prácticas y creativas que benefician a la sociedad, especialmente a las nuevas generaciones.</p>
      `;
    case 'news-6':
      return `
        <p class="mb-4">🚀 ¡Ebal Formacion presente en el evento #AI2030 en Madrid! 🌟 Nos encontramos inmersos en uno de los eventos más innovadores sobre Inteligencia Artificial del año, compartiendo conocimiento y experiencias junto a referentes del sector como Miraiku, Google for Startups y Xataka.</p>
        <p class="mb-4">Este prestigioso evento reúne a los principales actores del ecosistema tecnológico español y europeo, donde se está definiendo el futuro de la IA en nuestra región. Es un privilegio formar parte de este encuentro donde la innovación y el desarrollo tecnológico toman protagonismo.</p>
        <h3 class="text-xl font-semibold mb-2 mt-6">Highlights del Evento AI2030</h3>
        <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
          <li><strong>Charlas Inspiradoras:</strong> Conferencias sobre el futuro de la IA y sus aplicaciones transformadoras.</li>
          <li><strong>Hackathon Innovador:</strong> Competición con los mejores talentos tecnológicos del país.</li>
          <li><strong>Networking de Alto Nivel:</strong> Conexiones estratégicas con líderes del sector tech.</li>
          <li><strong>Casos de Uso Revolucionarios:</strong> Presentación de aplicaciones reales de IA en diferentes industrias.</li>
        </ul>
        <p>Estamos comprometidos con impulsar la innovación y el desarrollo tecnológico en España. Eventos como AI2030 demuestran la madurez y el potencial del ecosistema español de IA, posicionándonos como actores clave en la transformación digital europea. La colaboración entre empresas, startups y centros de formación como Ebal Formacion es fundamental para construir el futuro tecnológico que queremos.</p>
      `;
    case 'featured-1':
      return `
        <p class="mb-4">Ebal Formacion participa como partner activo en IA Educativa, un evento híbrido que se celebró el viernes 10 de octubre de 2025 en la ETSII US (Av. de la Reina Mercedes, s/n, Sevilla). Esta experiencia de acercamiento a la IA en Educación fue organizada por la Asociación INTEDUA (IAEducativa) y ETSII US, con la colaboración de Ebal Formacion y referentes internacionales.</p>
        <p class="mb-4">El evento reunió a expertos en inteligencia artificial aplicada a la educación, investigadores, docentes y profesionales del sector tecnológico para explorar las últimas tendencias y aplicaciones de la IA en entornos educativos. Ebal Formacion aportó su experiencia en metodologías innovadoras como VIABLE y su conocimiento en la formación de profesionales en IA.</p>
        <h3 class="text-xl font-semibold mb-2 mt-6">Temáticas Abordadas en el Evento</h3>
        <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
          <li><strong>IA Personalizada en Educación:</strong> Cómo adaptar el aprendizaje a las necesidades individuales de cada estudiante.</li>
          <li><strong>Herramientas Educativas Inteligentes:</strong> Desarrollo y implementación de tutores IA y asistentes educativos.</li>
          <li><strong>Ética en IA Educativa:</strong> Consideraciones sobre privacidad, sesgo y responsabilidad en sistemas educativos inteligentes.</li>
          <li><strong>Casos de Éxito:</strong> Experiencias reales de implementación de IA en instituciones educativas.</li>
        </ul>
        <p>La participación de Ebal Formacion en este evento refuerza nuestro compromiso con la innovación educativa y nuestra posición como referente en la formación en inteligencia artificial. La colaboración con INTEDUA y la Universidad de Sevilla abre nuevas oportunidades para el desarrollo de proyectos conjuntos que beneficien al ecosistema educativo español.</p>
      `;
    case 'featured-2':
      return `
        <p class="mb-4">El fenómeno DeepSeek ha generado preocupaciones significativas sobre seguridad cibernética y privacidad de datos. Investigadores de Cisco y la Universidad de Pennsylvania han revelado que DeepSeek R1 falló en todos los tests de seguridad, exhibiendo una tasa de éxito de ataque del 100%, lo que significa que no logró bloquear ni una sola consulta dañina.</p>
        <p class="mb-4">Estas vulnerabilidades han llevado a varios gobiernos a tomar medidas precautorias. El gobernador de Texas, Greg Abbott, prohibió el uso de DeepSeek y otras aplicaciones vinculadas a IA china por parte de empleados estatales, citando riesgos de seguridad nacional y posible filtración de datos sensibles.</p>
        <h3 class="text-xl font-semibold mb-2 mt-6">Principales Preocupaciones de Seguridad</h3>
        <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
          <li><strong>Fallas de Seguridad Críticas:</strong> 100% de tasa de éxito en ataques durante las pruebas de seguridad.</li>
          <li><strong>Censura Interna:</strong> El modelo se autocensura en temas sensibles como Tiananmen Square o la autonomía de Taiwán.</li>
          <li><strong>Origen de Datos Incierto:</strong> Falta de transparencia sobre los datos utilizados para entrenar el modelo.</li>
          <li><strong>Riesgos de Privacidad:</strong> Posible transferencia de datos de usuarios a servidores chinos para supervisión gubernamental.</li>
        </ul>
        <p>A pesar de estos desafíos, el impacto de DeepSeek en el mercado ha sido innegable, demostrando que la eficiencia algorítmica puede competir con recursos masivos. Sin embargo, las empresas deben evaluar cuidadosamente los riesgos de seguridad antes de implementar modelos de código abierto, especialmente aquellos desarrollados en jurisdicciones con diferentes marcos regulatorios de privacidad y seguridad.</p>
      `;
    default:
      return '<p>Contenido de la noticia no encontrado. Estamos trabajando para añadirlo pronto.</p>';
  }
};

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = allNewsData.find(item => item.id === id);

  useEffect(() => {
    // Set document title
    if (newsItem) {
      document.title = `${newsItem.title} - Noticias Ebal Formacion`;
    } else {
      document.title = 'Noticia no encontrada - Ebal Formacion';
    }
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [newsItem]);

  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-16 pt-28 text-center">
        <h1 className="text-3xl font-bold mb-4">Noticia no encontrada</h1>
        <p className="text-gray-600 mb-8">La noticia que buscas no existe o ha sido movida.</p>
        <Link to="/news" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Volver a Noticias
        </Link>
      </div>
    );
  }

  const placeholderContent = getPlaceholderContent(newsItem.id);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/news" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver a todas las noticias
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <header className="mb-8">
            <div className="text-purple-600 text-sm font-semibold mb-2 uppercase tracking-wider">{newsItem.category}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{newsItem.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{newsItem.subtitle}</p>
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-4 gap-y-2">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1.5" />
                <span>{newsItem.date}</span>
              </div>
                <div className="flex items-center">
                <User className="h-4 w-4 mr-1.5" />
                <span>Por {newsItem.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1.5" />
                <span>{newsItem.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Image */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-md">
            <img src={newsItem.image} alt={newsItem.title} className="w-full h-auto object-cover"/>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: placeholderContent }}
          >
            {/* Placeholder content will be injected here */}
                    </div>
        </motion.article>
      </div>
    </div>
  );
};

export default NewsDetail;