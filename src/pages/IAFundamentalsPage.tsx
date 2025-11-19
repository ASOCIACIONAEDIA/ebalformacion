import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, Award, Info, UserCircle, Check, CheckCircle, 
  BookOpen, Zap, Code, Shield, Brain, Mail, Play
} from 'lucide-react';
import { trackFormSubmit } from '../utils/analytics';
import AICourseTipSection from '../components/AICourseTipSection';
import CollaboratorsBanner from '../components/CollaboratorsBanner';
import EnrollmentModal from '../components/EnrollmentModal';
import SyllabusRequestModal from '../components/SyllabusRequestModal';
import { PlatformShowcase } from '../components/PlatformShowcase';

const IAFundamentalsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

  // --- Typing Effect Logic for Ending Text ---
  const [dynamicEndingText, setDynamicEndingText] = useState('');
  const [isEndingTypingComplete, setIsEndingTypingComplete] = useState(false);
  
  const endingFullText = "Transforma tu futuro profesional con formación especializada en SAP e Inteligencia Artificial";
  const endingHighlightStart = endingFullText.indexOf('SAP e Inteligencia Artificial');
  const endingHighlightEnd = endingHighlightStart + 'SAP e Inteligencia Artificial'.length;
  const endingTypingSpeed = 60;
  const endingPauseAfterComplete = 4000;

  useEffect(() => {
    let index = 0;
    let timeoutId: number | undefined;

    const typeEndingText = () => {
      if (index < endingFullText.length) {
        setIsEndingTypingComplete(false);
        setDynamicEndingText(endingFullText.substring(0, index + 1));
        index++;
        timeoutId = window.setTimeout(typeEndingText, endingTypingSpeed);
      } else {
        setIsEndingTypingComplete(true);
        timeoutId = window.setTimeout(() => {
          index = 0;
          setDynamicEndingText('');
          typeEndingText();
        }, endingPauseAfterComplete);
      }
    };

    timeoutId = window.setTimeout(typeEndingText, 500);

    return () => window.clearTimeout(timeoutId);
  }, []);
  // --- End Typing Effect Logic ---

  useEffect(() => {
    document.title = 'Curso de IA Fundamentals - Ebal Formacion';
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 🔥 TRACKING GA4 - Enviar evento antes de procesar
    trackFormSubmit({
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      form_type: 'course_enrollment',
      course_name: 'IA Fundamentals'
    });
    
    setIsSubmitted(true);
    setSubmitMessage('Enviando solicitud...');

    try {
      const response = await fetch('/api/send-info-request-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          courseTitle: 'Curso de IA Fundamentals',
          comments: formData.message
        }),
      });

      if (response.ok) {
        setSubmitMessage('¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        let errorDetail = 'Error del servidor.';
        try {
          const errorResult = await response.json();
          errorDetail = errorResult.detail || errorDetail;
        } catch (jsonError) {
          errorDetail = response.statusText || errorDetail;
        }
        setSubmitMessage(`Error al enviar: ${errorDetail}`);
      }
    } catch (error) {
      console.error('Error de red o conexión:', error);
      setSubmitMessage('Error de conexión al enviar la solicitud.');
    } finally {
      setIsSubmitted(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  const modules = [
    {
      title: "MÓDULO 1: Introducción a la Inteligencia Artificial Generativa",
      description: "Fundamentos de IA generativa, principios de funcionamiento y consideraciones éticas"
    },
    {
      title: "MÓDULO 2: Modelos LLM's Profesional",
      description: "Modelos de lenguaje avanzado, aplicaciones de GPT personalizado y creación de agentes IA"
    },
    {
      title: "MÓDULO 3: Creación de Contenidos con IA",
      description: "Prompts efectivos, herramientas de IA para copywriting, diseño y video marketing"
    },
    {
      title: "MÓDULO 4: Automatización de Tareas con IA",
      description: "Automatización con Make y n8n, chatbots para Telegram y envío automático de emails"
    }
  ];

  const learningObjectives = [
    'Comprenderás los fundamentos de la inteligencia artificial generativa y sus aplicaciones prácticas en el mundo real.',
    'Dominarás el uso de modelos LLM avanzados y aprenderás a crear agentes GPT personalizados para diferentes necesidades.',
    'Desarrollarás habilidades en creación de contenido con IA: textos, imágenes, videos y campañas creativas automatizadas.',
    'Aprenderás a automatizar tareas complejas usando Make y n8n, incluyendo chatbots y flujos de trabajo inteligentes.',
    'Aplicarás principios éticos en el desarrollo y uso de soluciones de IA, considerando los desafíos y responsabilidades.'
  ];

  const preparationPoints = [
    {
      title: 'Fundamentos de IA Generativa',
      description: 'Aprende qué es la IA generativa, sus principios de funcionamiento y aplicaciones prácticas en diferentes industrias.',
      icon: Brain
    },
    {
      title: 'Modelos LLM Profesionales',
      description: 'Domina modelos de lenguaje avanzado, crea agentes GPT personalizados y explora alternativas LLM.',
      icon: Zap
    },
    {
      title: 'Creación de Contenidos con IA',
      description: 'Genera textos, imágenes y videos con prompts efectivos. Automatiza campañas creativas a escala.',
      icon: Code
    },
    {
      title: 'Automatización Inteligente',
      description: 'Automatiza tareas con Make y n8n. Crea chatbots para Telegram y flujos de trabajo inteligentes.',
      icon: Shield
    }
  ];

  // Actualizar el PDF del temario
  const syllabusUrl = "/assets/Temario ia fundamentals np.pdf";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section con Formulario */}
      <section className="relative bg-gradient-to-br from-violet-700 via-purple-800 to-fuchsia-900 text-white py-16 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Formación en Inteligencia Artificial"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-700/80 via-purple-800/80 to-fuchsia-900/80"></div>
        </div>
        
        {/* Animated Shapes Background */}
        <div className="absolute inset-0 opacity-50 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 pt-28 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Course Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                CURSO BONIFICABLE
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Curso de IA Fundamentals</h1>
              <p className="text-lg text-gray-200 mb-8">
                Domina IA Generativa, explora modelos y crea agentes inteligentes desde cero.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">Duración</p>
                    <p className="font-medium text-white">40-50 horas</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">Certificación</p>
                    <p className="font-medium text-white">Ebal Formacion & SABAL</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <UserCircle className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">Soporte Tutorizado</p>
                    <p className="font-medium text-white">Equipo Docente Ebal Formacion</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Info className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-green-300 font-semibold">100% Bonificable con FUNDAE</p>
                    <p className="font-medium text-white text-lg">Consultanos</p>
                  </div>
                </div>
              </div>

              {/* Botón Descargar Temario */}
              <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-start mt-8">
                <button
                  onClick={() => setIsSyllabusModalOpen(true)}
                  className="flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-colors"
                >
                  <Play className="h-5 w-5 mr-2" /> Descargar Temario Completo
                </button>
              </div>
            </motion.div>

            {/* Right Column: Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Solicita Información
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu número de teléfono"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    placeholder="¿Tienes alguna pregunta específica?"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                  <button 
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors disabled:opacity-50"
                  >
                    {isSubmitted ? 'Enviando...' : 'Solicitar Información'}
                  </button>
                  {submitMessage && (
                    <p className={`text-sm text-center mt-3 ${submitMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                      {submitMessage}
                    </p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
          
          {/* Dynamic Ending Text solo */}
          <motion.div 
            className="mt-20 text-center" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }} 
          >
            <p className="text-2xl md:text-3xl text-gray-200 font-medium h-10 mb-8"> 
              {/* Render the text with highlight */}
              {dynamicEndingText.substring(0, endingHighlightStart)}
              <span className="bg-yellow-300 text-blue-900 px-1 pb-0.5 rounded-sm">
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


      {/* Para qué te prepara Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-medium text-center text-gray-800 mb-12 font-nunito">
              Para qué te prepara este curso
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {preparationPoints.map((point, index) => (
                <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="mr-4 flex-shrink-0 pt-1">
                    <point.icon className="h-8 w-8 text-blue-600" />
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

      {/* Módulos del Curso */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-medium text-center text-gray-800 mb-12 font-nunito">
              Contenido del Curso
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Columna izquierda - Módulos más compactos */}
              <div className="space-y-4">
                {modules.map((module, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
                  >
                    <h3 className="text-base font-semibold text-blue-800 mb-1">{module.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{module.description}</p>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
                >
                  <h3 className="text-base font-semibold text-blue-800 mb-1">Evaluacion continua</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Actividades prácticas</p>
                </motion.div>
              </div>

              {/* Columna derecha - Imagen del estudiante */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative h-full flex items-center"
              >
                <div className="w-full">
                  <div className="absolute inset-0 bg-blue-400 rounded-lg transform rotate-2 z-0"></div>
                  <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Estudiante aprendiendo IA Fundamentals"
                      className="w-full h-auto object-cover min-h-[400px] max-h-[600px]"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <p className="text-sm font-medium text-gray-800">
                      "Aprende IA desde cero con proyectos prácticos"
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      40 horas de formación especializada
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tutorización Section */}
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative p-3 self-center order-last lg:order-first"
            >
              <div className="absolute inset-0 bg-blue-400 rounded-lg transform rotate-[-2deg] z-0"></div>
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <PlatformShowcase />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 order-first lg:order-last"
            >
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <Brain className="h-10 w-10 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Plataforma AI-Learning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Plataforma AI-Learning para que aprendas a tu ritmo con entregas de proyectos y tareas prácticas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <Mail className="h-10 w-10 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Soporte Adicional</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Además, cuentas con soporte tutorizado por email para consultas más específicas con nuestros expertos.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objetivos de Aprendizaje */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl font-medium text-center text-gray-800 mb-10 font-nunito">
              Objetivos de Aprendizaje
            </h2>
            <ul className="space-y-4">
              {learningObjectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{objective}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ - Preguntas Frecuentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">1. ¿Qué es la IA Generativa y por qué es importante aprenderla?</h3>
              <p className="text-gray-700 text-sm md:text-base">La IA Generativa es la tecnología que permite crear contenido nuevo (texto, imágenes, videos) basándose en patrones aprendidos. Es crucial porque está transformando todas las industrias, desde marketing hasta desarrollo de software. Aprenderla te dará una ventaja competitiva enorme.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">2. ¿Qué son los modelos LLM y cómo los usaré profesionalmente?</h3>
              <p className="text-gray-700 text-sm md:text-base">Los LLM (Large Language Models) son modelos de IA que entienden y generan texto humano. Aprenderás a usar GPT personalizado, crear agentes IA específicos y explorar alternativas como Claude y otros modelos. Esto te permitirá automatizar tareas complejas y crear soluciones inteligentes.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">3. ¿Qué herramientas de automatización aprenderé a usar?</h3>
              <p className="text-gray-700 text-sm md:text-base">Dominarás Make (anteriormente Integromat) y n8n, dos de las plataformas más potentes para automatización. Crearás chatbots para Telegram, automatizarás envío de emails, posts en redes sociales y flujos de trabajo complejos sin necesidad de programación.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">4. ¿Cómo me ayudará la IA en la creación de contenidos?</h3>
              <p className="text-gray-700 text-sm md:text-base">Aprenderás prompts efectivos para generar textos, imágenes y videos. Usarás herramientas especializadas para copywriting, diseño gráfico y video marketing. Podrás crear campañas creativas automatizadas y personalizar contenido a escala.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">5. ¿Necesito conocimientos técnicos previos?</h3>
              <p className="text-gray-700 text-sm md:text-base">No, el curso está diseñado para principiantes. Te enseñaremos desde cero cómo usar las herramientas más avanzadas de IA sin necesidad de programación. Solo necesitas curiosidad y ganas de aprender.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">6. ¿Qué tipo de proyectos prácticos realizaré?</h3>
              <p className="text-gray-700 text-sm md:text-base">Desarrollarás proyectos reales como agentes GPT personalizados, chatbots para Telegram, automatizaciones con Make y n8n, y campañas de contenido generado con IA. Cada proyecto te dará experiencia práctica aplicable inmediatamente.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">7. ¿Qué certificación obtendré al finalizar?</h3>
              <p className="text-gray-700 text-sm md:text-base">Recibirás una certificación universitaria internacional avalada por Ebal Formacion y Sabal University que acredita tu dominio en IA Fundamentals. Esta certificación te diferenciará en el mercado laboral y te abrirá puertas en empresas innovadoras.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">8. ¿El curso incluye learning games y actividades interactivas?</h3>
              <p className="text-gray-700 text-sm md:text-base">Sí, el curso incluye learning games como "¿Dónde está la IA Generativa?", "¿Cuál es el Prompt Más Óptimo?" y actividades para crear landing pages con Bolt.new. Estas actividades hacen el aprendizaje más dinámico y efectivo.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">9. ¿Cómo me ayudará este curso en mi carrera profesional?</h3>
              <p className="text-gray-700 text-sm md:text-base">Te posicionará como un profesional de vanguardia en IA. Podrás automatizar procesos, crear contenido inteligente y desarrollar soluciones innovadoras. Los profesionales con estas habilidades pueden incrementar sus ingresos significativamente.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">10. ¿El curso es 100% bonificable con FUNDAE?</h3>
              <p className="text-gray-700 text-sm md:text-base">Sí, el curso es 100% bonificable con FUNDAE para empresas y profesionales. Esto significa que puedes formarte sin coste adicional, aprovechando los créditos de formación de tu empresa o como profesional autónomo.</p>
            </div>
          </div>
        </div>
      </section>

      <AICourseTipSection courseId="ia-fundamentals" />
      <CollaboratorsBanner />

      {/* Enrollment Modal */}
      <EnrollmentModal
        isOpen={isEnrollmentModalOpen}
        onClose={() => setIsEnrollmentModalOpen(false)}
        courseTitle="Curso de IA Fundamentals"
        coursePrice={55}
        paymentLink="https://pay.sumup.com/b2c/QXSWLIJA"
      />

      {/* Render Syllabus Request Modal */}
      <SyllabusRequestModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseTitle="Curso de IA Fundamentals"
        syllabusUrl={syllabusUrl}
      />
    </div>
  );
};

export default IAFundamentalsPage; 