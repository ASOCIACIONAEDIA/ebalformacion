import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  Clock, Award, Info, Download, UserCircle, CheckCircle, GraduationCap,
  BookOpen, Zap, Code, Lightbulb, ShoppingBag, Users, Brain, Mail, Shield, Star, Search, PenTool, TrendingUp // Added Search, PenTool, TrendingUp
} from 'lucide-react';
import { allCourses } from '../data/courses';
import React, { useState, useEffect } from 'react'; // Added useState, useEffect
import InfoRequestModal from '../components/InfoRequestModal'; // Import the modal component
import SyllabusRequestModal from '../components/SyllabusRequestModal'; // Import the new modal
import EnrollmentModal from '../components/EnrollmentModal'; // Import the enrollment modal
import AICourseTipSection from '../components/AICourseTipSection'; // Import the new tip section component
import CollaboratorsBanner from '../components/CollaboratorsBanner'; // Importar el banner de colaboradores
import { PlatformShowcase } from '../components/PlatformShowcase';


// Helper to get Lucide icon component by name
const icons: { [key: string]: React.ElementType } = {
  BookOpen, Zap, Code, Lightbulb, ShoppingBag, Users, CheckCircle, GraduationCap, Brain, Shield, Search, PenTool, TrendingUp // Added Search, PenTool, TrendingUp
};

const GetIcon = ({ name }: { name?: string }) => {
  if (!name || !icons[name]) {
    return <CheckCircle className="h-8 w-8 text-purple-600" />; // Default icon
  }
  const IconComponent = icons[name];
  return <IconComponent className="h-8 w-8 text-purple-600" />;
};

// Define default values
const defaultHeroColors = ['bg-purple-600', 'bg-indigo-500', 'bg-blue-500', 'bg-pink-500'];


// --- NUEVO: Definición de FAQs por curso ---
const courseFaqs: { [key: string]: { question: string; answer: string }[] } = {
  'ia-aplicada-nocode': [
    {
      question: '¿Qué es la IA NoCode y qué aprenderé en este curso?',
      answer: 'La IA NoCode permite crear soluciones inteligentes sin programar. Aprenderás a crear chatbots, asistentes de voz, automatizar procesos con Make y n8n, generar contenido multimedia, desarrollar webs con SEO optimizado y construir aplicaciones completas usando herramientas como Framer, Bolt.new y Midjourney.'
    },
    {
      question: '¿Qué herramientas y plataformas específicas dominaré?',
      answer: 'Trabajarás con ChatGPT, Midjourney, VAPI para asistentes de voz, Make y n8n para automatización, Framer y b12.io para desarrollo web, Gamma para presentaciones, Suno AI para música, websim.ai y Vercel para aplicaciones, entre otras herramientas de vanguardia.'
    },
    {
      question: '¿Podré crear chatbots y asistentes de voz sin saber programar?',
      answer: 'Sí, aprenderás a crear chatbots inteligentes con integración a Google Calendar y Sheets, y desarrollar asistentes de voz con VAPI, todo sin escribir código. Incluye configuración para tareas específicas y opciones avanzadas como integración telefónica.'
    },
    {
      question: '¿Qué tipo de automatizaciones podré implementar?',
      answer: 'Podrás automatizar publicaciones en redes sociales, envío de emails, recordatorios, gestión de citas, análisis de datos y flujos de trabajo empresariales usando Make y n8n. También aprenderás a crear automatizaciones con APIs y plantillas reutilizables.'
    },
    {
      question: '¿Incluye creación de contenido multimedia y aplicaciones web?',
      answer: 'Sí, aprenderás a generar presentaciones profesionales, infografías, videos automatizados, música con IA, crear influencers virtuales y desarrollar aplicaciones web completas. También incluye estrategias de marketing digital, branding y captación de clientes con IA.'
    }
  ],
  'ia-educacion': [
    {
      question: '¿Qué aprenderé en el curso de IA para la Educación?',
      answer: 'Aprenderás a integrar la inteligencia artificial en el aula, personalizar el aprendizaje, automatizar tareas y fomentar la creatividad de los estudiantes mediante herramientas innovadoras.'
    },
    {
      question: '¿A quién va dirigido este curso?',
      answer: 'Está dirigido a docentes, formadores, responsables de innovación educativa y cualquier profesional del sector educativo interesado en la transformación digital.'
    },
    {
      question: '¿Qué herramientas y plataformas se utilizan?',
      answer: 'Se utilizan herramientas como GPT, Canvas, plataformas de robótica educativa y modelos generativos adaptados al entorno educativo.'
    },
    {
      question: '¿El curso es bonificable?',
      answer: 'Sí, el curso es 100% bonificable a través de FUNDAE para empresas y centros educativos.'
    },
    {
      question: '¿Obtendré un certificado?',
      answer: 'Sí, recibirás una certificación universitaria avalada por Ebal Formacion y universidades colaboradoras.'
    }
  ],
  'ia-fundamentals': [
    {
      question: '¿Qué nivel de conocimientos previos necesito?',
      answer: 'No necesitas experiencia previa en IA ni programación. El curso parte desde cero y es ideal para principiantes.'
    },
    {
      question: '¿Qué proyectos realizaré?',
      answer: 'Desarrollarás agentes inteligentes, automatizaciones y proyectos prácticos de IA generativa.'
    },
    {
      question: '¿El curso es online y flexible?',
      answer: 'Sí, puedes avanzar a tu ritmo y acceder a los contenidos en cualquier momento.'
    },
    {
      question: '¿Incluye soporte de tutores?',
      answer: 'Sí, cuentas con el apoyo de tutores expertos y un tutor IA 24/7.'
    },
    {
      question: '¿Recibo certificación?',
      answer: 'Sí, al finalizar obtendrás un certificado oficial de Ebal Formacion y Sabal University.'
    }
  ],
  'desconexion-digital': [
    {
      question: '¿Por qué es importante la desconexión digital?',
      answer: 'La desconexión digital es clave para la salud mental y el bienestar laboral, previniendo riesgos y mejorando la productividad.'
    },
    {
      question: '¿A quién va dirigido este curso?',
      answer: 'A responsables de RRHH, directivos, empleados y cualquier persona interesada en mejorar el equilibrio digital en su entorno.'
    },
    {
      question: '¿El curso es bonificable?',
      answer: 'Sí, es 100% bonificable a través de FUNDAE.'
    },
    {
      question: '¿Qué aprenderé?',
      answer: 'Aprenderás a implementar políticas de desconexión digital, identificar riesgos y promover el bienestar en la empresa.'
    },
    {
      question: '¿Incluye material descargable?',
      answer: 'Sí, tendrás acceso a recursos y guías prácticas para aplicar en tu organización.'
    }
  ],
  // --- NUEVO: FAQ para Marketing Digital con IA ---
  'ia-marketing': [
    {
      question: '¿Qué es el SEO para LLMs y por qué es importante aprenderlo?',
      answer: 'El SEO para LLMs (Large Language Models) es la optimización de contenido para aparecer en ChatGPT, Bing, Claude y otros modelos de IA. Es crucial porque el 40% de las búsquedas ahora se realizan a través de estos modelos. Aprenderás técnicas específicas para posicionar tu contenido en el futuro de las búsquedas.'
    },
    {
      question: '¿Cómo me ayudará la IA a crear buyer personas más efectivas?',
      answer: 'La IA te permitirá analizar grandes volúmenes de datos para crear perfiles de cliente ultra-detallados. Aprenderás a usar LLMs para detectar pain points reales, analizar comportamiento de usuarios y crear segmentaciones más precisas que las tradicionales, mejorando significativamente tus campañas de marketing.'
    },
    {
      question: '¿Qué herramientas de IA generativa aprenderé a usar?',
      answer: 'Dominarás ChatGPT, MidJourney, DALL-E, Copilot, y herramientas especializadas para marketing como Jasper, Copy.ai, y plataformas de automatización. También aprenderás a integrar APIs de IA para crear flujos de trabajo automatizados y personalizados.'
    },
    {
      question: '¿Cómo funciona el análisis neuromarketing con IA?',
      answer: 'El análisis neuromarketing con IA combina neurociencia y machine learning para entender las respuestas emocionales de los consumidores. Aprenderás a usar herramientas que analizan expresiones faciales, patrones de atención y respuestas fisiológicas para optimizar campañas y contenido.'
    },
    {
      question: '¿Podré automatizar campañas de marketing con IA?',
      answer: 'Sí, aprenderás a crear campañas completamente automatizadas que se adaptan en tiempo real. Desde la segmentación de audiencias hasta la personalización de contenido y análisis de resultados, todo será gestionado por IA, permitiéndote enfocarte en estrategias creativas.'
    },
    {
      question: '¿Qué ventajas competitivas obtendré con este curso?',
      answer: 'Tendrás acceso a técnicas de vanguardia como SEO para LLMs, análisis neuromarketing y automatización predictiva. Estas habilidades te posicionarán como un profesional de marketing digital de élite, con capacidades que solo el 5% de los marketers poseen actualmente.'
    },
    {
      question: '¿El curso incluye proyectos prácticos reales?',
      answer: 'Sí, desarrollarás proyectos reales como campañas automatizadas, análisis de buyer personas con IA, optimización de contenido para LLMs y estrategias de social marketing predictivo. Cada proyecto te dará experiencia práctica con casos de uso empresariales reales.'
    },
    {
      question: '¿Necesito conocimientos técnicos previos?',
      answer: 'No, el curso está diseñado para que cualquier profesional de marketing pueda aprovechar la IA. Aprenderás desde cero cómo usar las herramientas más avanzadas sin necesidad de programación, enfocándote en aplicaciones prácticas para marketing digital.'
    },
    {
      question: '¿Qué tipo de certificación obtendré?',
      answer: 'Recibirás una certificación universitaria avalada por Ebal Formacion y universidades colaboradoras que acredita tu dominio en Marketing Digital con Inteligencia Artificial. Esta certificación te diferenciará en el mercado laboral y te abrirá puertas en empresas que buscan profesionales con estas habilidades.'
    },
    {
      question: '¿Cómo me ayudará este curso en mi carrera profesional?',
      answer: 'Te posicionará como un experto en marketing digital de vanguardia. Podrás ofrecer servicios premium como SEO para LLMs, análisis neuromarketing y automatización predictiva. Los profesionales con estas habilidades pueden incrementar sus ingresos entre un 40-60% y acceder a posiciones de liderazgo en empresas innovadoras.'
    }
  ]
};

// --- NUEVO: Componente de FAQ ---
const CourseFAQSection: React.FC<{ faqs: { question: string; answer: string }[] }> = ({ faqs }) => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-10 font-nunito">Preguntas Frecuentes</h2>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">{faq.question}</h3>
            <p className="text-gray-700 text-base">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = allCourses.find(c => c.id === id);
  const [dynamicEndingText, setDynamicEndingText] = useState('');
  const [isEndingTypingComplete, setIsEndingTypingComplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false); // State for syllabus modal
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false); // State for enrollment modal

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 pt-28 text-center">
        <h1 className="text-3xl font-bold mb-4">Curso no encontrado</h1>
        <p className="text-gray-600 mb-8">El curso que buscas no existe o ha sido movido.</p>
        <Link to="/cursos" className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
          Ver todos los cursos
        </Link>
      </div>
    );
  }

  // Use course-specific colors/image or defaults
  const heroColors = course.heroColors && course.heroColors.length === 4 ? course.heroColors : defaultHeroColors;


  // Specific descriptive text for ia-educacion course
  const descriptiveTextEdu = `El curso de Inteligencia Artificial para la Educación te permitirá comprender y aplicar las herramientas más innovadoras de IA dentro del ámbito educativo.\nAprenderás a integrar inteligencia artificial en el aula para personalizar el aprendizaje, optimizar procesos y fomentar la creatividad en los estudiantes.\nA lo largo del programa, explorarás desde los fundamentos de la IA y el aprendizaje automático hasta el uso de modelos generativos, robótica educativa y herramientas como GPT y Canvas.\nAdemás, desarrollarás habilidades en ética y evaluación de la IA en entornos educativos, garantizando un uso responsable de estas tecnologías. ¡Lleva la enseñanza al siguiente nivel con IA!`;

  // Added descriptive text for ia-aplicada-nocode course
  const descriptiveTextNoCode = `El curso Inteligencia Artificial aplicada con herramientas NoCode cuenta con titulación universitaria y está diseñado para llevar tu creatividad y habilidades técnicas a un nuevo nivel a través de la inteligencia artificial. Con un enfoque en la IA generativa, automatización de procesos y creación de contenido, aprenderás a utilizar herramientas punteras como GPT, MidJourney y Copilot, entre otras, para desarrollar soluciones innovadoras y personalizadas en distintas áreas. Ideal para profesionales, emprendedores y curiosos que quieran destacar en el campo de la tecnología.`;


  // --- Typing Effect Logic for Ending Text - Modified for Loop ---
  const endingFullText = "¡El momento de la IA es ahora y tú puedes ser parte de él!";
  const endingHighlightStart = endingFullText.indexOf('ahora');
  const endingHighlightEnd = endingHighlightStart + 'ahora'.length;
  const endingTypingSpeed = 60;
  const endingPauseAfterComplete = 4000; // Pause duration in ms before restart

  useEffect(() => {
    let index = 0;
    let timeoutId: number | undefined;

    const typeEndingText = () => {
      if (index < endingFullText.length) {
        // Still typing
        setIsEndingTypingComplete(false); // Ensure cursor is visible while typing
        setDynamicEndingText(endingFullText.substring(0, index + 1));
        index++;
        timeoutId = window.setTimeout(typeEndingText, endingTypingSpeed);
      } else {
        // Typing complete, pause then restart
        setIsEndingTypingComplete(true); // Hide cursor during pause
        timeoutId = window.setTimeout(() => {
          // Reset for next loop
          index = 0;
          setDynamicEndingText('');
          // Call typeEndingText again to start the loop
          // No need for another timeout here, the first call in the sequence will handle it
          typeEndingText();
        }, endingPauseAfterComplete);
      }
    };

    // Start the initial typing sequence
    timeoutId = window.setTimeout(typeEndingText, 500); // Initial delay remains

    // Cleanup function to clear timeout if component unmounts during typing/pause
    return () => window.clearTimeout(timeoutId);

  }, []); // Empty dependency array - effect runs once on mount, loop managed internally
  // --- End Typing Effect Logic ---

  const paymentLink = "https://pay.sumup.com/b2c/Q1X0MR5E"; // Define payment link here

  // --- NUEVO: Textos específicos para IA Educación ---
  const preparationPointsEdu = [
    {
      title: 'Transforma la educación con IA generativa',
      description: 'Aprende a aplicar IA generativa y modelos LLM para personalizar el aprendizaje y la evaluación.',
      iconName: 'Brain'
    },
    {
      title: 'Automatiza tareas docentes',
      description: 'Descubre cómo la IA puede ayudarte a automatizar tareas administrativas y de gestión educativa.',
      iconName: 'Zap'
    },
    {
      title: 'Crea recursos educativos innovadores',
      description: 'Diseña actividades, recursos y proyectos educativos usando IA y herramientas digitales avanzadas.',
      iconName: 'Code'
    },
    {
      title: 'Lidera la transformación digital',
      description: 'Desarrolla competencias digitales docentes y lidera proyectos de innovación educativa con IA.',
      iconName: 'Lightbulb'
    }
  ];
  const learningObjectivesEdu = [
    'Comprender los fundamentos de la IA generativa y su impacto en la educación.',
    'Dominar el uso de modelos LLM y herramientas de IA para la docencia.',
    'Crear recursos y actividades educativas innovadoras con IA.',
    'Automatizar procesos educativos y administrativos.',
    'Analizar y aplicar buenas prácticas éticas en el uso de IA educativa.',
    'Liderar proyectos de transformación digital en centros educativos.'
  ];
  // --- End NUEVO: Textos específicos para IA Educación ---

  // Cambiar el PDF de temario solo para ia-educacion
  if (course.id === 'ia-educacion') {
    course.syllabusUrl = '/assets/Temario AI EDUCACION NP.pdf';
    course.preparationPoints = preparationPointsEdu;
    course.learningObjectives = learningObjectivesEdu;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Use dynamic colors */}
      <section className="relative bg-gradient-to-br from-purple-900 to-indigo-800 text-white py-16 pb-24 overflow-hidden">
        {/* Animated Shapes Background - Use dynamic colors */}
        <div className="absolute inset-0 opacity-50 z-0">
          <div className={`absolute top-0 left-1/4 w-96 h-96 ${heroColors[0]} rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000`}></div>
          <div className={`absolute top-1/2 right-10 w-96 h-96 ${heroColors[1]} rounded-full mix-blend-multiply filter blur-3xl animate-blob`}></div>
          <div className={`absolute bottom-0 left-1/3 w-96 h-96 ${heroColors[2]} rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${heroColors[3]} rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000`}></div>
        </div>

        {/* Main Hero Content */}
        <div className="relative container mx-auto px-4 pt-28 z-10">
          {/* Grid for Main Content (Text + Image) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {course.type === 'bonificable' ? 'CURSO BONIFICABLE' : 'CURSO PROGRAMACIÓN'}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
              <p className="text-xl text-gray-200 mb-8">{course.shortDescription}</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* Duration */}
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-purple-300 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">Duración</p>
                    <p className="font-medium text-white">{course.duration}</p>
                  </div>
                </div>
                {/* Certification */}
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-purple-300 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">Certificación</p>
                    <p className="font-medium text-white">{course.certification}</p>
                  </div>
                </div>
                {/* Tutor Support */}
                <div className="flex items-center">
                  <UserCircle className="h-6 w-6 text-purple-300 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">Soporte Tutorizado</p> {/* Changed Text */}
                    <p className="font-medium text-white">{course.tutorSupport}</p>
                  </div>
                </div>
                {/* Price / Bonification Info */}
                <div className="flex items-start">
                  <Info className="h-6 w-6 text-purple-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    {course.isBonificable && (
                      <p className="text-green-300 font-semibold">{course.fundaeInfo}</p>
                    )}
                    {course.price && (
                      <p className="font-medium text-white text-lg">{course.price}€</p>
                    )}
                    {!course.price && !course.isBonificable && (
                      <p className="font-medium text-white">Consultar Plan</p> // Fallback if no price and not bonificable
                    )}
                    {course.financingInfo && (
                      <p className="text-sm text-gray-300 mt-1">{course.financingInfo}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                <button
                  onClick={() => setIsModalOpen(true)} // Open modal on click
                  className="bg-white text-purple-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Solicitar información
                </button>
                {/* Matriculate Button - Opens modal */}
                <button
                  onClick={() => setIsEnrollmentModalOpen(true)} // Open enrollment modal
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
                >
                  Matricúlate Ahora
                </button>
                {/* Download Button - Now opens modal */}
                {course.syllabusUrl ? (
                  <button
                    onClick={() => setIsSyllabusModalOpen(true)} // Open syllabus modal
                    className="flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-900 transition-colors"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Descargar Temario
                  </button>
                ) : (
                  <button
                    className="flex items-center justify-center bg-transparent border-2 border-gray-500 text-gray-400 px-6 py-3 rounded-lg font-medium cursor-not-allowed opacity-60"
                    disabled
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Temario No Disponible
                  </button>
                )}
              </div>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
                <img src={course.imageUrl} alt={course.title} className="w-full h-auto max-h-[450px] object-cover" />
              </div>
            </motion.div>
          </div>

          {/* MOVED: Dynamic Ending Text - Centered below the grid */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="text-2xl md:text-3xl text-gray-200 font-medium h-10">
              {/* Render the text with highlight */}
              {dynamicEndingText.substring(0, endingHighlightStart)}
              <span className="bg-yellow-300 text-purple-900 px-1 pb-0.5 rounded-sm">
                {dynamicEndingText.substring(endingHighlightStart, Math.min(endingHighlightEnd, dynamicEndingText.length))}
              </span>
              {dynamicEndingText.substring(Math.min(endingHighlightEnd, dynamicEndingText.length))}
              {/* Blinking cursor simulation */}
              {!isEndingTypingComplete ? (
                <span className="inline-block w-0.5 h-7 bg-gray-200 ml-1 animate-pulse opacity-75 relative top-1"></span>
              ) : null}
            </p>
          </motion.div>

        </div>
      </section>



      {/* "Para qué te prepara" Section - Restyled */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-medium text-center text-gray-800 mb-12 font-nunito">Para qué te prepara este curso</h2>
            {/* Grid layout for preparation points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {course.preparationPoints.map((point, index) => (
                <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="mr-4 flex-shrink-0 pt-1">
                    <GetIcon name={point.iconName} /> {/* Use helper to render icon */}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Viable Tutorization Section - REDESIGNED & SWAPPED */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-medium text-center text-gray-800 mb-12 font-nunito"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Tutorización Inteligente
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* SWAPPED: Right Column First (Platform Showcase) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative p-3 self-center order-last lg:order-first"
            >
              {/* Blue Background Element */}
              <div className="absolute inset-0 bg-blue-400 rounded-lg transform rotate-[-2deg] z-0"></div>

              {/* Platform Showcase Component */}
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <PlatformShowcase />
              </div>
            </motion.div>

            {/* SWAPPED: Left Column Second (Text Content) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 order-first lg:order-last"
            >
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <Brain className="h-10 w-10 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Plataforma AI-Learning</h3>
                  <p className="text-gray-600 leading-relaxed">Plataforma AI-Learning para que aprendas a tu ritmo con entregas de proyectos y tareas prácticas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <Mail className="h-10 w-10 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Soporte Adicional</h3>
                  <p className="text-gray-600 leading-relaxed">Además, cuentas con soporte tutorizado por email para consultas más específicas con nuestros expertos.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Objectives Section - Modified for 2-column layout on ia-educacion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl"> {/* Increased max-width for columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Conditional Grid Layout - Updated condition */}
            <div className={`${(course.id === 'ia-educacion' || course.id === 'ia-aplicada-nocode' || course.id === 'ia-marketing') ? 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-start' : 'max-w-4xl mx-auto'}`}>

              {/* Column 1: Learning Objectives (Always Visible) */}
              <div>
                <h2 className="text-3xl font-medium text-center lg:text-left text-gray-800 mb-10 font-nunito">Objetivos de Aprendizaje</h2>
                <ul className="space-y-4">
                  {course.learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Descriptive Text Block (Only for specific courses) - Updated condition */}
              {(course.id === 'ia-educacion' || course.id === 'ia-aplicada-nocode' || course.id === 'ia-marketing') && (
                <div className="relative p-2 mt-10 lg:mt-0"> {/* Added margin top for mobile */}
                  {/* Yellow Background Element */}
                  <div className="absolute inset-0 bg-yellow-300 rounded-lg transform rotate-[-1deg] z-0"></div>

                  {/* White Card Content */}
                  <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl">
                    {/* Conditional Title - Updated */}
                    <h2 className="text-2xl font-medium text-gray-800 mb-4 text-center font-nunito">
                      {course.id === 'ia-educacion' ? 'Transforma la Educación con IA' :
                        course.id === 'ia-aplicada-nocode' ? 'Innovación Sin Código con IA' :
                          'Tips Destacados del Curso'} {/* Title for Marketing */}
                    </h2>
                    {/* Conditional Text - Updated */}
                    <p className="text-gray-700 whitespace-pre-line text-center leading-relaxed">
                      {course.id === 'ia-educacion' ? descriptiveTextEdu :
                        course.id === 'ia-aplicada-nocode' ? descriptiveTextNoCode :
                          `🎯 MÓDULO 3 - SEO Inteligente: Aprende a posicionar tu contenido en ChatGPT, Bing y otros LLMs. Optimiza para el futuro de las búsquedas.

👥 MÓDULO 5 - Buyer Persona con IA: Crea perfiles de cliente ultra-detallados usando análisis de datos con LLMs. Detecta pain points reales.

📈 MÓDULO 7 - Social Marketing: Predice tendencias virales y crea contenido que se viraliza automáticamente con análisis predictivo de IA.`} {/* Text for Marketing */}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* <-- ADDED: AI Course Tip Section --> */}
      {course && <AICourseTipSection courseId={course.id} />}

      {/* CONDITIONAL: Show Collaborators Banner only for bonificable courses */}
      {course.type === 'bonificable' && (
        <div className="pt-16"> {/* Add padding top to separate from previous section */}
          <CollaboratorsBanner />
        </div>
      )}

      {/* Final CTA - Modified Button */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-white mb-6 font-nunito">¿Listo para transformar tu futuro?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)} // Added onClick to open the info modal
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Solicitar información
            </button>
          </div>
        </div>
      </section>

      {/* Render the Modal conditionally */}
      {course && (
        <InfoRequestModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          courseTitle={course.title}
        />
      )}

      {/* Render Syllabus Request Modal */}
      {course && (
        <SyllabusRequestModal
          isOpen={isSyllabusModalOpen}
          onClose={() => setIsSyllabusModalOpen(false)}
          courseTitle={course.title}
          syllabusUrl={course.syllabusUrl}
        />
      )}

      {/* Render Enrollment Modal */}
      {course && (
        <EnrollmentModal
          isOpen={isEnrollmentModalOpen}
          onClose={() => setIsEnrollmentModalOpen(false)}
          courseTitle={course.title}
          coursePrice={course.price}
          paymentLink={paymentLink} // Pass the SumUp link
        />
      )}

      {/* DONDE RENDERIZAR: Justo antes del CTA final */}
      {courseFaqs[course.id] && <CourseFAQSection faqs={courseFaqs[course.id]} />}

    </div>
  );
};

export default CourseDetail;