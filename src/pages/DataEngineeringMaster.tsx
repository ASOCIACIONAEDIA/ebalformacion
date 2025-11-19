import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Users, Briefcase, Award, CheckCircle, Clock, Laptop, BookOpen, 
  TrendingUp, Star, Smile, ThumbsUp, Globe, HeartHandshake, Brain, Code, 
  Database, GitBranch, BarChart, Zap, Target, Play, Download, ArrowRight,
  Monitor, Coffee, Lightbulb, Rocket, Shield, Medal, Video, MapPin, Wifi,
  User, Mail, Phone, X, AlertTriangle, MessageSquare, Bell, Gamepad2,
  BarChart3, Headphones, Timer, Euro, Server, Cloud
} from 'lucide-react';
import SyllabusRequestModal from '../components/SyllabusRequestModal';

const DataEngineeringMaster = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

  // Structured Data para SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Master en Ingeniería de Datos",
      "description": "Conviértete en experto en arquitecturas de datos, Big Data y Cloud. Incluye certificación Azure o AWS.",
      "provider": {
        "@type": "Organization",
        "name": "Ebal Formacion - Asociación Española para la Difusión de la Inteligencia Artificial",
        "sameAs": "https://Ebal Formacion.es"
      },
      "courseMode": "online",
      "educationalLevel": "Professional",
      "teaches": ["Python", "SQL", "NoSQL", "Spark", "Kafka", "Docker", "Kubernetes", "AWS", "Data Engineering"],
      "duration": "P10M",
      "startDate": "2025-10-20",
      "endDate": "2026-08-20",
      "offers": {
        "@type": "Offer",
        "price": "3900",
        "priceCurrency": "EUR",
        "name": "Master en Ingeniería de Datos",
        "description": "100% online con soporte tutor y videoclases"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

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
          subject: 'Reserva de plaza - Master en Ingeniería de Datos',
          course: 'Master en Ingeniería de Datos'
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

  const downloadSyllabus = () => {
    setIsSyllabusModalOpen(true);
  };

  // Testimonios (mismos del bootcamp)
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
    }
  ];

  // Estadísticas impactantes
  const stats = [
    { number: '95%', label: 'Empleabilidad', icon: <TrendingUp className="h-6 w-6" /> },
    { number: '3900€', label: 'Precio todo incluido', icon: <Award className="h-6 w-6" /> },
    { number: '40+', label: 'Empresas Partner', icon: <Users className="h-6 w-6" /> },
    { number: '4.8/5', label: 'Satisfacción', icon: <Star className="h-6 w-6" /> }
  ];

  // Ventajas del master
  const advantages = [
    {
      title: 'Doble Titulación Ebal Formacion + Universitaria',
      description: 'Título oficial avalado por SABAL University (tasas incluidas)',
      icon: <Award className="h-8 w-8 text-purple-600" />
    },
    {
      title: 'Mentores Expertos',
      description: 'Profesionales trabajando en empresas tecnológicas líderes',
      icon: <Users className="h-8 w-8 text-blue-600" />
    },
    {
      title: 'Proyectos Reales',
      description: 'Desarrolla un portfolio con casos de uso empresariales',
      icon: <Target className="h-8 w-8 text-green-600" />
    },
    {
      title: 'Certificación Cloud Incluida',
      description: 'Azure o AWS oficial incluida en el programa',
      icon: <Cloud className="h-8 w-8 text-cyan-600" />
    },
    {
      title: 'Formato Flexible',
      description: '100% online con soporte tutor y videoclases',
      icon: <Clock className="h-8 w-8 text-orange-600" />
    }
  ];

  // Habilidades técnicas
  const technicalSkills = [
    { name: 'Desarrollo con Python', description: 'Desde fundamentos hasta APIs avanzadas', icon: <Code className="h-6 w-6" /> },
    { name: 'Bases de Datos', description: 'SQL y vectoriales para IA', icon: <Database className="h-6 w-6" /> },
    { name: 'Big Data & Spark', description: 'Procesamiento distribuido y escalable', icon: <Server className="h-6 w-6" /> },
    { name: 'Cloud Engineering', description: 'AWS, Docker, Kubernetes', icon: <Cloud className="h-6 w-6" /> }
  ];

  // Salidas profesionales
  const careerPaths = [
    { role: 'Data Engineer', salary: '45k-75k€', demand: 'Alta demanda', icon: <BarChart className="h-6 w-6" /> },
    { role: 'Big Data Developer', salary: '50k-80k€', demand: 'Muy alta demanda', icon: <Server className="h-6 w-6" /> },
    { role: 'Data Architect', salary: '60k-90k€', demand: 'Alta demanda', icon: <Brain className="h-6 w-6" /> },
    { role: 'Cloud Data Specialist', salary: '55k-85k€', demand: 'Creciente demanda', icon: <Cloud className="h-6 w-6" /> }
  ];

  // Competencias clave
  const keyCompetencies = [
    { skill: 'Pensamiento Analítico', description: 'Resolución de problemas complejos', icon: <Brain className="h-6 w-6" /> },
    { skill: 'Metodologías Ágiles', description: 'Scrum y desarrollo iterativo', icon: <Target className="h-6 w-6" /> },
    { skill: 'Comunicación Técnica', description: 'Presentar soluciones a stakeholders', icon: <MessageSquare className="h-6 w-6" /> },
    { skill: 'Aprendizaje Continuo', description: 'Adaptación a nuevas tecnologías', icon: <BookOpen className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section con Formulario Visible */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/img1.png"
            alt="Data Engineer trabajando"
            className="w-full h-full object-cover opacity-30"
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
                Master en <span className="text-yellow-400">Big Data & Ingeniería de Datos</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-gray-200">
                Conviértete en experto en arquitecturas de datos, Big Data y Cloud
              </p>

              {/* Información del programa */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Video className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="font-semibold">Master Online</span>
                  </div>
                  <p className="text-sm text-gray-200">Inicio: 20 Oct 2025</p>
                  <p className="text-sm text-gray-200">100% Online</p>
                  <p className="text-sm text-gray-200">Soporte tutor online con videoclases</p>
                  <p className="text-sm text-gray-200"><span className="font-bold">+30 videoclases</span> de repaso de temario</p>
                  <p className="text-sm text-gray-200">Tutorías 1:1 opcionales</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="font-semibold">Certificación Incluida</span>
                  </div>
                  <p className="text-sm text-gray-200">Duración: 9-10 meses</p>
                  <p className="text-sm text-gray-200">Acceso: 18 meses</p>
                  <p className="text-sm text-gray-200">Azure o AWS oficial</p>
                  <p className="text-sm text-gray-200">Dedicación: 4h/día</p>
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

            {/* Formulario de Reserva */}
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
                  ⏰ Solo quedan 12 plazas disponibles
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
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Qué te interesa más?
                  </label>
                  <select 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Master completo con certificación">Master completo con certificación</option>
                    <option value="Información sobre financiación">Información sobre financiación</option>
                    <option value="Necesito más información">Necesito más información</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50"
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

      {/* Banner de Certificaciones Incluidas */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Cursos de Preparación para Certificaciones Cloud Incluidos
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Elige tu especialización cloud y prepárate para obtener una certificación oficial reconocida mundialmente
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Azure Fundamentals */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png"
                    alt="Azure Fundamentals AZ-900"
                    className="h-16 w-16 object-contain bg-white rounded-lg p-2"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Azure Fundamentals</h4>
                <p className="text-blue-600 font-semibold mb-2">AZ-900</p>
                <p className="text-gray-600 text-sm mb-4">
                  Curso completo de preparación para la certificación oficial de Microsoft Azure que valida conocimientos fundamentales en servicios cloud.
                </p>
                <div className="flex items-center justify-center text-green-600 font-semibold">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Curso incluido sin coste adicional
                </div>
              </motion.div>

              {/* AWS Cloud Practitioner */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
                    alt="AWS Cloud Practitioner CLF-C02"
                    className="h-16 w-16 object-contain bg-white rounded-lg p-2"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">AWS Cloud Practitioner</h4>
                <p className="text-orange-600 font-semibold mb-2">CLF-C02</p>
                <p className="text-gray-600 text-sm mb-4">
                  Curso completo de preparación para la certificación foundational de Amazon Web Services que demuestra comprensión general de la nube AWS.
                </p>
                <div className="flex items-center justify-center text-green-600 font-semibold">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Curso incluido sin coste adicional
                </div>
              </motion.div>
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-3xl mx-auto">
              <div className="flex items-center justify-center text-yellow-800">
                <Lightbulb className="h-5 w-5 mr-2" />
                <p className="font-semibold text-sm">
                  Valor de mercado de cada curso de preparación: 150-200€ • Reconocimiento internacional • Te prepara para certificarte
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Sección: Plataforma de Aprendizaje */}
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
              Tecnología educativa de vanguardia diseñada específicamente para el aprendizaje de Data Engineering
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Plataforma de aprendizaje Data Engineering"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-xl"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-1">Interfaz intuitiva y moderna</h4>
                <p className="text-sm text-gray-600">Diseñada para maximizar tu aprendizaje</p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  icon: <Gamepad2 className="h-6 w-6 text-purple-600" />,
                  title: "Learning Games",
                  description: "Gamificación del aprendizaje con desafíos interactivos, puntos y logros que hacen que aprender Data Engineering sea divertido y motivador."
                },
                {
                  icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
                  title: "Progreso en Tiempo Real", 
                  description: "Seguimiento detallado de tu evolución con métricas personalizadas, estadísticas de rendimiento y análisis de fortalezas."
                },
                {
                  icon: <Bell className="h-6 w-6 text-green-600" />,
                  title: "Notificaciones Inteligentes",
                  description: "Sistema de recordatorios personalizados, alertas de nuevos contenidos y notificaciones de deadlines para mantener tu ritmo."
                },
                {
                  icon: <Headphones className="h-6 w-6 text-orange-600" />,
                  title: "Contacto Directo con Tutores",
                  description: "Chat integrado para resolver dudas al instante, sistema de tickets de soporte y sesiones de mentoría programadas."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Ventajas adicionales */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-green-50 rounded-xl"
            >
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Financiación Disponible</h3>
              <p className="text-gray-600 text-sm">Opciones de pago flexibles y financiación sin intereses</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 bg-blue-50 rounded-xl"
            >
              <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Plataforma Online</h3>
              <p className="text-gray-600 text-sm">Acceso 24/7 a contenidos y recursos educativos</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-purple-50 rounded-xl"
            >
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Título Oficial</h3>
              <p className="text-gray-600 text-sm">Reconocimiento universitario con validez profesional</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección: Para Qué Te Prepara */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">¿Para Qué Te Prepara?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Habilidades y oportunidades profesionales que desarrollarás
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Habilidades Técnicas */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <Code className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Habilidades Técnicas</h3>
              </div>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-white rounded-lg">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                      <p className="text-gray-600 text-sm">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Salidas Profesionales */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <Briefcase className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Salidas Profesionales</h3>
              </div>
              <div className="space-y-4">
                {careerPaths.map((career, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-white rounded-lg">
                      {career.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{career.role}</h4>
                      <p className="text-green-600 font-medium text-sm">{career.salary}</p>
                      <p className="text-gray-600 text-sm">{career.demand}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Competencias Clave */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-orange-50 rounded-xl p-8"
          >
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-orange-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Competencias Clave</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {keyCompetencies.map((competency, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg">
                    {competency.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{competency.skill}</h4>
                    <p className="text-gray-600 text-sm">{competency.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección: Únete a una Comunidad de Desarrolladores IA */}
      <section className="py-16 bg-white">
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

      {/* Testimonios */}

      {/* FAQ - Preguntas Frecuentes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {/* Pregunta 1 */}
            <div className="bg-gray-50 rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-blue-700 mb-2">1. ¿Qué diferencia hay entre este Master y otros programas de Data Engineering?</h3>
              <p className="text-gray-700 text-sm md:text-base">Nuestro Master incluye doble titulación (Ebal Formacion + SABAL University con tasas incluidas), certificación cloud oficial (Azure o AWS), acceso durante 18 meses, soporte tutor online con videoclases y un enfoque 100% práctico con proyectos reales. Además, nuestra plataforma gamificada hace el aprendizaje más efectivo y motivador.</p>
            </div>
            {/* Pregunta 2 */}
            <div className="bg-gray-50 rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-blue-700 mb-2">2. ¿Está incluida la certificación Azure o AWS en el precio?</h3>
              <p className="text-gray-700 text-sm md:text-base">Sí, el Master incluye una certificación oficial a elegir entre Azure o AWS sin coste adicional. Esta certificación tiene un valor de mercado de aproximadamente 150-200€ y es reconocida mundialmente por las empresas del sector tecnológico.</p>
            </div>
            {/* Pregunta 3 */}
            <div className="bg-gray-50 rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-blue-700 mb-2">3. ¿Cómo funciona el acceso de 18 meses si el programa dura 9-10 meses?</h3>
              <p className="text-gray-700 text-sm md:text-base">El programa está diseñado para completarse en 9-10 meses con una dedicación de 4 horas diarias. Sin embargo, te damos acceso durante 18 meses para que puedas repasar contenidos, acceder a actualizaciones del temario y tener flexibilidad total en tu ritmo de aprendizaje.</p>
            </div>
            {/* Pregunta 4 */}
            <div className="bg-gray-50 rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-blue-700 mb-2">4. ¿Qué tipo de proyectos realizaré y cómo es el soporte tutorial?</h3>
              <p className="text-gray-700 text-sm md:text-base">Desarrollarás proyectos reales como pipelines de datos con Apache Airflow, arquitecturas Big Data con Spark, sistemas de streaming con Kafka y despliegues en AWS. El soporte incluye tutores online especializados, videoclases explicativas, chat integrado para dudas y sesiones de mentoría opcionales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
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
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
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

      {/* Modal de descarga de temario */}
      <SyllabusRequestModal 
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseTitle="Master en Ingeniería de Datos"
        syllabusUrl="/assets/Temario master BD&IDATA Ebal Formacion.pdf"
      />
    </div>
  );
};

export default DataEngineeringMaster;