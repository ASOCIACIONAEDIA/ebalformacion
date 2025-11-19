import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Users, Briefcase, Award, CheckCircle, Clock, Laptop, BookOpen, 
  TrendingUp, Star, Smile, ThumbsUp, Globe, HeartHandshake, Brain, Code, 
  Database, GitBranch, BarChart, Zap, Target, Play, Download, ArrowRight,
  Monitor, Coffee, Lightbulb, Rocket, Shield, Medal, Video, MapPin, Wifi,
  User, Mail, Phone, X, AlertTriangle, MessageSquare, Bell, Gamepad2,
  BarChart3, Headphones, Timer, Euro
} from 'lucide-react';
import SyllabusRequestModal from '../components/SyllabusRequestModal';

const Bootcamp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

  // Structured Data para SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Bootcamp AI Engineer - Master en Inteligencia Artificial",
      "description": "Conviértete en Ingeniero de IA en 8 meses con proyectos reales. Bootcamp intensivo y Master online disponibles.",
      "provider": {
        "@type": "Organization",
        "name": "Ebal Formacion - Asociación Española para la Difusión de la Inteligencia Artificial",
        "sameAs": "https://Ebal Formacion.es"
      },
      "courseMode": ["online", "blended"],
      "educationalLevel": "Professional",
      "teaches": ["Python", "Machine Learning", "Deep Learning", "LangChain", "RAG", "SQL", "Inteligencia Artificial"],
      "duration": "P8M",
      "startDate": "2025-10-20",
      "endDate": "2026-05-20",
      "offers": [
        {
          "@type": "Offer",
          "price": "3900",
          "priceCurrency": "EUR",
          "name": "Bootcamp Intensivo",
          "description": "Clases en directo con mentores expertos"
        },
        {
          "@type": "Offer", 
          "price": "2200",
          "priceCurrency": "EUR",
          "name": "Master Online",
          "description": "Flexibilidad total con soporte por email"
        }
      ],
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "startDate": "2025-10-20",
        "endDate": "2026-05-20",
        "courseMode": "online",
        "instructor": {
          "@type": "Organization",
          "name": "Expertos Ebal Formacion"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('Enviando reserva...');
    
    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: 'Reserva de plaza - Bootcamp AI Engineer',
          course: 'Bootcamp | Master AI Engineer'
        }),
      });

      if (response.ok) {
        setSubmitMessage('¡Gracias! Tu reserva ha sido enviada correctamente. Te contactaremos pronto.');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitMessage(''), 5000);
      } else {
        let errorDetail = 'Error del servidor.';
        try {
          const errorResult = await response.json();
          errorDetail = errorResult.detail || errorDetail;
        } catch (jsonError) {
          errorDetail = response.statusText || errorDetail;
        }
        setSubmitMessage(`Error al enviar: ${errorDetail}`);
        setTimeout(() => setSubmitMessage(''), 5000);
      }
    } catch (error) {
      console.error('Error de red o conexión:', error);
      setSubmitMessage('Error de conexión. Por favor, inténtalo más tarde.');
      setTimeout(() => setSubmitMessage(''), 5000);
    }
    
    setIsSubmitting(false);
  };

  // Función para abrir el modal de descarga de temario - ACTUALIZADO
  const downloadSyllabus = () => {
    setIsSyllabusModalOpen(true);
  };

  // Calendario actualizado 2025-2026
  const bootcampSchedule = [
    {
      phase: "🟢 Inicio Bootcamp (Reunión inicial)",
      startDate: "20 octubre 2025",
      duration: "Lunes",
      icon: <Rocket className="h-6 w-6" />,
      color: "bg-green-500"
    },
    {
      phase: "Módulo 1: Programación Python - Fundamentos",
      startDate: "12 noviembre 2025",
      duration: "23 días",
      icon: <Code className="h-6 w-6" />,
      color: "bg-blue-500"
    },
    {
      phase: "Módulo 2: SQL - Fundamentos y Avanzado",
      startDate: "3 diciembre 2025",
      duration: "21 días",
      icon: <Database className="h-6 w-6" />,
      color: "bg-indigo-500"
    },
    {
      phase: "Módulo 3: Control de versiones GIT",
      startDate: "17 diciembre 2025",
      duration: "12 días",
      icon: <GitBranch className="h-6 w-6" />,
      color: "bg-purple-500"
    },
    {
      phase: "Módulo 4: Matemáticas 101 y Estadística Data Science",
      startDate: "7 enero 2026",
      duration: "14 días",
      icon: <BarChart className="h-6 w-6" />,
      color: "bg-pink-500"
    },
    {
      phase: "Módulo 5: Inteligencia Artificial - Conceptos Básicos",
      startDate: "21 enero 2026",
      duration: "15 días",
      icon: <Brain className="h-6 w-6" />,
      color: "bg-red-500"
    },
    {
      phase: "Módulo 6: Machine Learning",
      startDate: "18 febrero 2026",
      duration: "25 días",
      icon: <Target className="h-6 w-6" />,
      color: "bg-orange-500"
    },
    {
      phase: "Módulo 7: Deep Learning & Computer Vision",
      startDate: "18 marzo 2026",
      duration: "25 días",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-yellow-500"
    },
    {
      phase: "Módulo 8: NLP y Técnicas Avanzadas",
      startDate: "8 abril 2026",
      duration: "21 días",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-green-500"
    },
    {
      phase: "Módulo 9: Full LangChain, RAG y DB Vectoriales",
      startDate: "22 abril 2026",
      duration: "14 días",
      icon: <Database className="h-6 w-6" />,
      color: "bg-teal-500"
    },
    {
      phase: "Módulo 10: LLM Open-Source y Transformers & Fine-Tuning",
      startDate: "20 mayo 2026",
      duration: "28 días",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-cyan-500"
    }
  ];

  // Master Classes y Proyecto Final
  const masterClasses = [
    { title: "Git avanzado, trabajo en equipo y metodologías ágiles", icon: <GitBranch className="h-5 w-5" /> },
    { title: "Prompt Engineering avanzado", icon: <Brain className="h-5 w-5" /> },
    { title: "Empleabilidad y entrevista técnica", icon: <Briefcase className="h-5 w-5" /> }
  ];

  // Testimonios actualizados con nombres reales, fotos y LinkedIn
  const testimonials = [
    {
      name: 'Francisco Clemente Fernández',
      role: 'Alumno Bootcamp AI Engineer',
      image: '/assets/franclemente.jpg',
      linkedin: 'https://www.linkedin.com/in/franciscoclementefernandez/',
      quote: 'Gracias al bootcamp de Ebal Formacion he dado el salto profesional que buscaba en IA. El acompañamiento y los proyectos reales marcan la diferencia.',
      rating: 5
    },
    {
      name: 'Natalio Altube',
      role: 'Alumno Bootcamp AI Engineer',
      image: '/assets/natalio.jpg',
      linkedin: 'https://www.linkedin.com/in/natalio-altube/',
      quote: 'La formación es muy práctica y el networking con otros alumnos y profesores es brutal. Ahora trabajo en proyectos de IA que me apasionan.',
      rating: 5
    },
    {
      name: 'Iván Dapena Morillo',
      role: 'Alumno Máster AI Engineer',
      image: '/assets/ivan.jpg',
      linkedin: 'https://www.linkedin.com/in/iv%C3%A1n-dapena-morillo/',
      quote: 'El bootcamp me ha dado la confianza y los conocimientos para liderar proyectos de IA. Lo recomiendo totalmente.',
      rating: 5
    },
    {
      name: 'Francisco Jose Parejo',
      role: 'Alumno Bootcamp AI Engineer',
      image: '/assets/fran.jpg',
      linkedin: 'https://www.linkedin.com/in/franciscoparjim-data-engineer-ia/',
      quote: 'Ebal Formacion me ha abierto las puertas al mundo de la inteligencia artificial aplicada. El temario y los tutores son de primer nivel.',
      rating: 5
    },
    {
      name: 'Fernando Cano',
      role: 'Empresario y Director de Proyectos IA - Alumno Máster',
      image: '/assets/fcm.jpg',
      linkedin: 'https://www.linkedin.com/in/fernando-cano-mora/',
      quote: 'Como empresario, el bootcamp de Ebal Formacion me ha permitido liderar proyectos de IA en mi empresa con seguridad y visión estratégica. Es la mejor inversión para cualquier directivo.',
      rating: 5
    },
    {
      name: 'Fede Caruso',
      role: 'Alumno Bootcamp AI Engineer',
      image: '/assets/fede.jpg',
      linkedin: 'https://www.linkedin.com/in/fede-caruso-0a5079246/',
      quote: 'El enfoque práctico y el apoyo de los tutores me ayudaron a entender la IA desde cero y aplicarla en mi trabajo diario.',
      rating: 5
    },
    {
      name: 'Victor Ortin',
      role: 'Alumno IA No Code',
      image: '/assets/victor.jpg',
      linkedin: 'https://www.linkedin.com/in/victor-ortin-montiel-10649834b/',
      quote: 'El bootcamp de Ebal Formacion es ideal para quienes quieren dominar la IA sin necesidad de programar. La parte de No Code es brutal.',
      rating: 5
    },
    {
      name: 'Juan Carlos Loayza',
      role: 'Alumno Bootcamp AI Engineer',
      image: '/assets/jcl.jpg',
      linkedin: 'https://www.linkedin.com/in/juan-carlos-loayza-vaca-423646163/',
      quote: 'La experiencia en el bootcamp ha sido transformadora. Ahora puedo aportar soluciones de IA en mi empresa y seguir creciendo profesionalmente.',
      rating: 5
    },
    {
      name: 'Bruno',
      role: 'Alumno destacado / Bootcamp AI Engineer',
      image: '/assets/bruno.jpg',
      linkedin: 'https://www.linkedin.com/in/ibrunoes/',
      quote: 'Después de terminar el Máster / Bootcamp de IA, siento honestamente, que he dado un salto profesional enorme. No ha sido solo hacer un curso, sino una transformación completa: he pasado de ser usuario de tecnología a ser alguien capaz de diseñar, construir y desplegar soluciones de IA completas de nivel empresarial',
      rating: 5
    }
  ];

  // Estadísticas impactantes
  const stats = [
    { number: '97%', label: 'Empleabilidad', icon: <TrendingUp className="h-6 w-6" /> },
    { number: '55k€', label: 'Salario Medio', icon: <Award className="h-6 w-6" /> },
    { number: '50+', label: 'Empresas Partner', icon: <Users className="h-6 w-6" /> },
    { number: '4.9/5', label: 'Satisfacción', icon: <Star className="h-6 w-6" /> }
  ];

  // Ventajas del bootcamp - ACTUALIZADO
  const advantages = [
    {
      title: 'Certificación Universitaria',
      description: 'Título oficial avalado por universidades reconocidas',
      icon: <Award className="h-8 w-8 text-purple-600" />
    },
    {
      title: 'Mentores Expertos',
      description: 'Profesionales trabajando en FAANG y grandes corporaciones',
      icon: <Users className="h-8 w-8 text-purple-600" />
    },
    {
      title: 'Proyectos Reales',
      description: 'Desarrolla un portafolio con casos de uso empresariales',
      icon: <Briefcase className="h-8 w-8 text-purple-600" />
    },
    {
      title: 'Bolsa de Empleo y Prácticas',
      description: 'Acceso directo a ofertas exclusivas y programas de prácticas',
      icon: <Shield className="h-8 w-8 text-purple-600" />
    },
    {
      title: 'Formato Flexible',
      description: 'Elige entre Bootcamp intensivo o Master a tu ritmo',
      icon: <Clock className="h-8 w-8 text-purple-600" />
    },
    {
      title: 'Comunidad Activa',
      description: 'Networking permanente con +300 graduados',
      icon: <HeartHandshake className="h-8 w-8 text-purple-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section con Formulario Visible */}
      <div className="relative bg-gradient-to-br from-emerald-700 via-teal-800 to-cyan-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="AI Engineer trabajando"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido Principal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="inline-flex items-center bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Star className="h-4 w-4 mr-2" />
                Plazas LIMITADAS - Convocatoria 2025
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Máster - Bootcamp <span className="text-yellow-400">AI Engineer</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-gray-200">
                Conviértete en Ingeniero de IA en 8 meses intensivos con proyectos reales
              </p>

              {/* Información de horarios ACTUALIZADA */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Video className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="font-semibold">Bootcamp Intensivo</span>
                  </div>
                  <p className="text-sm text-gray-200">20 Oct 2025 - 20 May 2026</p>
                  <p className="text-sm text-gray-200">12 Master Classes + Tutorías</p>
                  <p className="text-sm text-gray-200">+ Pre-bootcamp + Master Classes</p>
                  <p className="text-sm text-gray-200">+ 5 Tutorías 1:1 (45 min)</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Wifi className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="font-semibold">Master Online</span>
                  </div>
                  <p className="text-sm text-gray-200">A tu ritmo</p>
                  <p className="text-sm text-gray-200">100% Online</p>
                  <p className="text-sm text-gray-200">Soporte por email</p>
                  <p className="text-sm text-gray-200">Tutorías 1:1 opcionales</p>
                </div>
              </div>

              {/* Estadísticas */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-yellow-400">{stat.number}</div>
                    <div className="text-xs lg:text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={downloadSyllabus}
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                <Download className="h-5 w-5 mr-2" />
                Descargar Temario Completo 2025-26
              </button>
            </motion.div>

            {/* Formulario de Reserva - MÁS VISIBLE */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  ¡Reserva tu plaza ahora!
                </h3>
                <p className="text-gray-600">
                  Convocatoria 2025 - Plazas limitadas
                </p>
                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg mt-3 text-sm font-medium">
                  ⏰ Solo quedan 8 plazas disponibles
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Qué formato te interesa más?
                  </label>
                  <select 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Bootcamp Intensivo (20 Oct 2025 - 20 May 2026)">Bootcamp Intensivo (20 Oct 2025 - 20 May 2026)</option>
                    <option value="Master Online a tu ritmo">Master Online a tu ritmo</option>
                    <option value="Necesito más información">Necesito más información</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting ? 'Enviando...' : '🚀 Reservar Mi Plaza'}
                </button>

                {submitMessage && (
                  <div className={`mt-4 p-4 rounded-lg text-sm flex items-center ${
                    submitMessage.includes('Gracias') 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {submitMessage.includes('Gracias') ? (
                      <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
                    )}
                    {submitMessage}
                  </div>
                )}
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  💡 Proceso de admisión: Entrevista personal + Test técnico básico
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>


      {/* NUEVA SECCIÓN: Plataforma Propia de Aprendizaje */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Plataforma de Aprendizaje Propia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Tecnología educativa de vanguardia diseñada específicamente para el aprendizaje de IA
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagen de la plataforma */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Plataforma de aprendizaje Ebal Formacion"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">Interfaz intuitiva y moderna</p>
                <p className="text-sm opacity-90">Diseñada para maximizar tu aprendizaje</p>
              </div>
            </motion.div>

            {/* Características de la plataforma */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-3">
                  <Gamepad2 className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Learning Games</h3>
                </div>
                <p className="text-gray-600">
                  Gamificación del aprendizaje con desafíos interactivos, puntos y logros que hacen que aprender IA sea divertido y motivador.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center mb-3">
                  <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Progreso en Tiempo Real</h3>
                </div>
                <p className="text-gray-600">
                  Seguimiento detallado de tu evolución con métricas personalizadas, estadísticas de rendimiento y análisis de fortalezas.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center mb-3">
                  <Bell className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Notificaciones Inteligentes</h3>
                </div>
                <p className="text-gray-600">
                  Sistema de recordatorios personalizados, alertas de nuevos contenidos y notificaciones de deadlines para mantener tu ritmo.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <Headphones className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Contacto Directo con Tutores</h3>
                </div>
                <p className="text-gray-600">
                  Chat integrado para resolver dudas al instante, sistema de tickets de soporte y acceso directo a sesiones de mentoría.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de Comparación de Formatos - ACTUALIZADA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Elige el Formato que Mejor se Adapte a Ti
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dos caminos diferentes hacia el mismo objetivo: convertirte en un experto en IA
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Bootcamp Intensivo - ACTUALIZADO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-200"
            >
              <div className="text-center mb-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-600 mb-2">Bootcamp Intensivo</h3>
                <p className="text-gray-600">Para quienes buscan una experiencia inmersiva</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-purple-600 mr-3" />
                  <span><strong>Duración:</strong> 20 Oct 2025 - 20 May 2026 (8 meses)</span>
                </div>
                <div className="flex items-center">
                  <Video className="h-5 w-5 text-purple-600 mr-3" />
                  <span><strong>Formato:</strong> 12 Master Classes + Tutorías personalizadas</span>
                </div>
                <div className="flex items-center">
                  <Video className="h-5 w-5 text-purple-600 mr-3" />
                  <span><strong>Modalidad:</strong> Telemático con sesiones programadas</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-purple-600 mr-3" />
                  <span><strong>Incluye:</strong> Pre-bootcamp + 1 Master Class/módulo</span>
                </div>
                <div className="flex items-center">
                  <Timer className="h-5 w-5 text-purple-600 mr-3" />
                  <span><strong>Tutorías:</strong> Bolsa de 5 tutorías 1:1 (45 min)</span>
                </div>
                <div className="flex items-center">
                  <Euro className="h-5 w-5 text-purple-600 mr-3" />
                  <span><strong>Ampliación:</strong> +5 tutorías por 350€</span>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-purple-800 mb-2">Perfecto para:</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Personas que buscan mentoría personalizada y master classes</li>
                  <li>• Quienes prefieren tutorías 1:1 con expertos</li>
                  <li>• Estudiantes que necesitan acompañamiento estructurado</li>
                  <li>• Profesionales que buscan flexibilidad con soporte experto</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">€3,900</div>
                <p className="text-sm text-gray-500">Financiación disponible</p>
              </div>
            </motion.div>

            {/* Master Online - ACTUALIZADO */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200"
            >
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Master Online</h3>
                <p className="text-gray-600">Flexibilidad total para estudiar a tu ritmo</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span><strong>Duración:</strong> A tu ritmo (Acceso 12 meses)</span>
                </div>
                <div className="flex items-center">
                  <Wifi className="h-5 w-5 text-blue-600 mr-3" />
                  <span><strong>Modalidad:</strong> 100% Online, acceso 24/7</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                  <span><strong>Contenido:</strong> Videos, ejercicios y proyectos prácticos</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span><strong>Soporte:</strong> Soporte por email</span>
                </div>
                <div className="flex items-center">
                  <Timer className="h-5 w-5 text-blue-600 mr-3" />
                  <span><strong>Tutorías:</strong> Opcionales (350€ por 5 sesiones)</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-blue-600 mr-3" />
                  <span><strong>Duración:</strong> Tutorías de 45 min cada una</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-blue-800 mb-2">Perfecto para:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Profesionales con horarios variables</li>
                  <li>• Personas que prefieren aprender a su ritmo</li>
                  <li>• Estudiantes internacionales</li>
                  <li>• Quienes buscan máxima flexibilidad</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">€2,200</div>
                <p className="text-sm text-gray-500">Financiación disponible</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendario Detallado - ACTUALIZADO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Calendario Académico 2025-2026
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Planificación detallada de todos los módulos y actividades
            </p>
          </motion.div>

          <div className="space-y-4">
            {bootcampSchedule.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex items-center p-6">
                  <div className={`${module.color} rounded-full p-3 text-white mr-4 flex-shrink-0`}>
                    {module.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {module.phase}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 space-x-6">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Inicio: {module.startDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Duración: {module.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Master Classes y Proyecto Final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                <Medal className="h-6 w-6 mr-2" />
                Master Classes (1 por módulo)
              </h3>
              <div className="space-y-3">
                {masterClasses.map((masterClass, index) => (
                  <div key={index} className="flex items-center text-orange-800">
                    {masterClass.icon}
                    <span className="ml-3 text-sm">{masterClass.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                <Rocket className="h-6 w-6 mr-2" />
                Proyecto Final
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-emerald-800">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="text-sm">Definición e implementación del proyecto</span>
                </div>
                <div className="flex items-center text-emerald-800">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="text-sm">Presentación y evaluación</span>
                </div>
                <div className="flex items-center text-emerald-800">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="text-sm">Portfolio profesional para entrevistas</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nueva sección: Imagen de programadores sonrientes */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Únete a una Comunidad de Desarrolladores IA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Más de 1000 profesionales han transformado su carrera con nosotros
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Programadores sonrientes trabajando en equipo"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-lg font-semibold">Ambiente colaborativo y profesional</p>
              <p className="text-sm opacity-90">Donde el aprendizaje se convierte en oportunidad</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ventajas del Bootcamp */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Columna Izquierda - ¿Por Qué Elegir Ebal Formacion? */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                  ¿Por Qué Elegir Ebal Formacion?
                </h2>
                <p className="text-lg text-gray-600">
                  Ventajas que nos diferencian de otras formaciones
                </p>
              </div>

              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start p-4 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors"
                  >
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-md flex-shrink-0">
                      {advantage.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{advantage.title}</h3>
                      <p className="text-sm text-gray-600">{advantage.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Columna Derecha - ¿Para Qué Te Prepara? */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                  ¿Para Qué Te Prepara?
                </h2>
                <p className="text-lg text-gray-600">
                  Habilidades y oportunidades profesionales que desarrollarás
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Habilidades Técnicas */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border border-blue-200"
                >
                  <div className="flex items-center mb-4">
                    <Code className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-800">Habilidades Técnicas</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>Desarrollo con Python:</strong> Desde fundamentos hasta APIs avanzadas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>Modelos de IA:</strong> RAG, Fine-tuning, y LangChain</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>Bases de Datos:</strong> SQL y vectoriales para IA</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>Frontend Moderno:</strong> React, TypeScript y interfaces IA</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Salidas Profesionales */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl border border-purple-200"
                >
                  <div className="flex items-center mb-4">
                    <Briefcase className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-purple-800">Salidas Profesionales</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>AI Engineer:</strong> 45k-85k€ desarrollando soluciones IA</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>ML Engineer:</strong> 50k-90k€ en implementación de modelos</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>Data Scientist:</strong> 40k-75k€ en análisis predictivo</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>Consultor IA:</strong> 60k-120k€ asesorando empresas</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Proyectos Reales */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl border border-green-200"
                >
                  <div className="flex items-center mb-4">
                    <Rocket className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-green-800">Proyectos del Portafolio</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>Chatbot Empresarial:</strong> Con RAG y bases de datos vectoriales</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>Sistema de Recomendaciones:</strong> ML personalizado para e-commerce</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>Análisis de Sentimientos:</strong> NLP para redes sociales</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>API de IA:</strong> Microservicios escalables en producción</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Competencias Transversales */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-yellow-50 to-orange-100 p-6 rounded-xl border border-yellow-200"
                >
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-orange-600 mr-3" />
                    <h3 className="text-xl font-bold text-orange-800">Competencias Clave</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>Pensamiento Analítico:</strong> Resolución de problemas complejos</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>Metodologías Ágiles:</strong> Scrum y desarrollo iterativo</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>Comunicación Técnica:</strong> Presentar soluciones IA a stakeholders</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>Aprendizaje Continuo:</strong> Adaptación a nuevas tecnologías IA</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Call to Action dentro de la sección */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-xl text-white"
              >
                <h4 className="text-xl font-bold mb-3">🚀 Tu futuro en IA empieza aquí</h4>
                <p className="text-purple-100 mb-4">
                  Únete a los +300 profesionales que ya han transformado su carrera con Ebal Formacion
                </p>
                <button
                  onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
                >
                  Reservar Mi Plaza Ahora
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ - Preguntas Frecuentes - ACTUALIZADO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {/* Pregunta 1 - ACTUALIZADA */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">1. ¿Cuáles son las diferencias entre el Bootcamp Intensivo y el Master Online?</h3>
              <p className="text-gray-700 text-sm md:text-base">El Bootcamp Intensivo (20 Oct 2025 - 20 May 2026) incluye 12 master classes especializadas, pre-bootcamp, y una bolsa de 5 tutorías 1:1 de 45 minutos cada una. El Master Online ofrece máxima flexibilidad con soporte por email y la posibilidad de contratar tutorías personalizadas. Ambas bolsas de tutorías son ampliables en paquetes de 5 sesiones por 350€ adicionales.</p>
            </div>
            {/* Pregunta 2 - ACTUALIZADA */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">2. ¿Cómo funciona el sistema de tutorías personalizadas?</h3>
              <p className="text-gray-700 text-sm md:text-base">En el Bootcamp Intensivo incluimos una bolsa de 5 tutorías 1:1 de 45 minutos cada una. En el Master Online, las tutorías son opcionales y se pueden contratar por separado. Todas las tutorías son ampliables en paquetes de 5 sesiones por 350€ adicionales. Estas sesiones permiten resolver dudas específicas, revisar proyectos y recibir mentoring personalizado.</p>
            </div>
            {/* Pregunta 3 - NUEVA */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">3. ¿Qué incluye el pre-bootcamp y las 12 master classes?</h3>
              <p className="text-gray-700 text-sm md:text-base">El pre-bootcamp es una preparación previa al inicio oficial que incluye conceptos básicos de programación y configuración del entorno. Las 12 master classes son sesiones especializadas (una por cada módulo + sesiones adicionales) que profundizan en temas avanzados como metodologías ágiles, prompt engineering avanzado y empleabilidad. Estas están incluidas en el Bootcamp Intensivo.</p>
            </div>
            {/* Pregunta 4 - ACTUALIZADA */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">4. ¿Qué tipo de proyectos prácticos se realizan y cómo es la plataforma de aprendizaje?</h3>
              <p className="text-gray-700 text-sm md:text-base">Los estudiantes desarrollan proyectos reales como chatbots con RAG, sistemas de recomendación y APIs de IA. Nuestra plataforma propia incluye learning games para gamificar el aprendizaje, progreso en tiempo real con métricas personalizadas, notificaciones inteligentes y contacto directo con tutores a través de chat integrado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Listo para Transformar tu Carrera?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Únete a los cientos de profesionales que ya han cambiado su vida con Ebal Formacion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={downloadSyllabus}
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
              >
                <Download className="h-5 w-5 inline mr-2" />
                Descargar Temario 2025-26
              </button>
              <button
                onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
              >
                <ArrowRight className="h-5 w-5 inline mr-2" />
                Reservar Mi Plaza
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Syllabus Request Modal - ACTUALIZADO */}
      {isSyllabusModalOpen && (
        <SyllabusRequestModal
          isOpen={isSyllabusModalOpen}
          onClose={() => setIsSyllabusModalOpen(false)}
          courseTitle="Bootcamp AI Engineer 2025-26"
          syllabusUrl="/assets/25-26 Temario Bootcamp IA Engineer.pdf"
        />
      )}
    </div>
  );
};

export default Bootcamp; 