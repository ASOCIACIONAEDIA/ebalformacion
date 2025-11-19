import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Users, Briefcase, Award, CheckCircle, Clock, Laptop, BookOpen, 
  TrendingUp, Star, Smile, ThumbsUp, Globe, HeartHandshake, Brain, Code, 
  Database, GitBranch, BarChart, Zap, Target, Play, Download, ArrowRight,
  Monitor, Coffee, Lightbulb, Rocket, Shield, Medal, Video, MapPin, Wifi,
  User, Mail, Phone, X, AlertTriangle, MessageSquare, Bell, Gamepad2,
  BarChart3, Headphones, Timer, Euro, Server, Cloud, Settings, Activity,
  Workflow, GitCommit, TestTube
} from 'lucide-react';
import SyllabusRequestModal from '../components/SyllabusRequestModal';

const AirflowProfessional = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

  // Structured Data para SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Formación Profesional en Apache Airflow",
      "description": "Domina Apache Airflow desde cero hasta nivel profesional. Incluye preparación para certificación Astronomer y titulación universitaria opcional.",
      "provider": {
        "@type": "Organization",
        "name": "Ebal Formacion - Asociación Española para la Difusión de la Inteligencia Artificial",
        "sameAs": "https://Ebal Formacion.es"
      },
      "courseMode": "online",
      "educationalLevel": "Professional",
      "teaches": ["Apache Airflow", "Data Orchestration", "ETL", "Data Engineering", "Kubernetes", "Docker", "Python"],
      "duration": "P3M",
      "startDate": "2025-02-01",
      "offers": {
        "@type": "Offer",
        "price": "99",
        "priceCurrency": "EUR",
        "name": "Airflow Profesional",
        "description": "100% online con titulación Ebal Formacion incluida, opción titulación universitaria SABAL y preparación certificación Astronomer"
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
    setSubmitMessage('Enviando solicitud...');
    
    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: 'Solicitud de información - Formación Profesional Apache Airflow',
          course: 'Formación Profesional en Apache Airflow'
        }),
      });

      if (response.ok) {
        setSubmitMessage('¡Gracias! Tu solicitud de información ha sido enviada correctamente. Te contactaremos pronto.');
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


  // Estadísticas impactantes
  const stats = [
    { number: '99€', label: 'Precio completo', icon: <Euro className="h-6 w-6" /> },
    { number: '25', label: 'Módulos completos', icon: <BookOpen className="h-6 w-6" /> },
    { number: '100+', label: 'Ejercicios prácticos', icon: <Code className="h-6 w-6" /> },
    { number: '4.9/5', label: 'Satisfacción', icon: <Star className="h-6 w-6" /> }
  ];

  // Ventajas del curso
  const advantages = [
    {
      title: 'Titulación Oficial Ebal Formacion',
      description: 'Certificado profesional que acredita tu dominio de Apache Airflow',
      icon: <Award className="h-8 w-8 text-purple-600" />
    },
    {
      title: 'Preparación Certificación Astronomer',
      description: 'Te preparamos para obtener la certificación oficial de Astronomer',
      icon: <Rocket className="h-8 w-8 text-blue-600" />
    },
    {
      title: 'Proyectos Reales de Producción',
      description: 'Implementa pipelines ETL completos con casos de uso empresariales',
      icon: <Target className="h-8 w-8 text-green-600" />
    },
    {
      title: 'Despliegue en Kubernetes',
      description: 'Aprende a desplegar y escalar Airflow en entornos cloud nativos',
      icon: <Cloud className="h-8 w-8 text-cyan-600" />
    },
    {
      title: 'Formato 100% Online',
      description: 'Acceso 24/7 con soporte tutor y videoclases explicativas',
      icon: <Clock className="h-8 w-8 text-orange-600" />
    }
  ];

  // Habilidades técnicas que aprenderás
  const technicalSkills = [
    { name: 'Apache Airflow Core', description: 'DAGs, Tasks, Operators y arquitectura completa', icon: <Workflow className="h-6 w-6" /> },
    { name: 'TaskFlow API Moderna', description: 'Decoradores @dag/@task y Dynamic Task Mapping', icon: <Code className="h-6 w-6" /> },
    { name: 'Despliegue Kubernetes', description: 'Helm charts, autoescalado y gestión en producción', icon: <Settings className="h-6 w-6" /> },
    { name: 'Integración de Datos', description: 'Spark, dbt, Databricks y plataformas cloud', icon: <Database className="h-6 w-6" /> },
    { name: 'Observabilidad y Monitoring', description: 'Logs, métricas, alertas y troubleshooting', icon: <Activity className="h-6 w-6" /> },
    { name: 'CI/CD para DAGs', description: 'GitOps, testing automatizado y despliegue continuo', icon: <GitCommit className="h-6 w-6" /> }
  ];

  // Salidas profesionales
  const careerPaths = [
    { role: 'Data Engineer', salary: '45k-70k€', demand: 'Muy alta demanda', icon: <Database className="h-6 w-6" /> },
    { role: 'DevOps Engineer', salary: '50k-75k€', demand: 'Alta demanda', icon: <Settings className="h-6 w-6" /> },
    { role: 'Data Architect', salary: '60k-85k€', demand: 'Alta demanda', icon: <Brain className="h-6 w-6" /> },
    { role: 'MLOps Engineer', salary: '55k-80k€', demand: 'Creciente demanda', icon: <Zap className="h-6 w-6" /> }
  ];

  // Competencias clave
  const keyCompetencies = [
    { skill: 'Orquestación de Datos', description: 'Diseño y gestión de workflows complejos', icon: <Workflow className="h-6 w-6" /> },
    { skill: 'Automatización DevOps', description: 'CI/CD, testing y despliegue automatizado', icon: <GitBranch className="h-6 w-6" /> },
    { skill: 'Troubleshooting Avanzado', description: 'Resolución de problemas en producción', icon: <TestTube className="h-6 w-6" /> },
    { skill: 'Arquitectura Cloud Native', description: 'Diseño para alta disponibilidad y escalabilidad', icon: <Cloud className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section con Formulario Visible */}
      <div className="relative bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Apache Airflow Data Pipeline"
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
              <div className="inline-flex items-center bg-orange-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Workflow className="h-4 w-4 mr-2" />
                Nuevo Curso - Disponible Ahora
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="text-orange-400">Airflow</span> Profesional
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-gray-200">
                Domina la orquestación de datos con Apache Airflow desde cero hasta nivel profesional
              </p>

              {/* Información del programa */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Video className="h-5 w-5 text-orange-400 mr-2" />
                    <span className="font-semibold">Curso Online</span>
                  </div>
                  <p className="text-sm text-gray-200">Inicio inmediato</p>
                  <p className="text-sm text-gray-200">100% Online</p>
                  <p className="text-sm text-gray-200">Soporte tutor incluido</p>
                  <p className="text-sm text-gray-200">Acceso de por vida</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 text-orange-400 mr-2" />
                    <span className="font-semibold">Titulación + Certificación</span>
                  </div>
                  <p className="text-sm text-gray-200">Duración: 3-4 meses</p>
                  <p className="text-sm text-gray-200">25 módulos completos</p>
                  <p className="text-sm text-gray-200">Prep. Cert. Astronomer</p>
                  <p className="text-sm text-gray-200">Dedicación: 2-3h/semana</p>
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
                    <div className="text-2xl lg:text-3xl font-bold text-orange-400">{stat.number}</div>
                    <div className="text-xs lg:text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={downloadSyllabus}
                className="inline-flex items-center bg-orange-400 hover:bg-orange-500 text-black font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                <Download className="h-5 w-5 mr-2" />
                Descargar Temario Completo
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
                  ¡Solicita información!
                </h3>
                <p className="text-gray-600">
                  Curso completo - Solo 99€
                </p>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg mt-3 text-sm font-medium">
                  ✅ Titulación oficial incluida
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
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Cuál es tu experiencia actual?
                  </label>
                  <select 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Sin experiencia en Airflow">Sin experiencia en Airflow</option>
                    <option value="Algo de experiencia con Airflow">Algo de experiencia con Airflow</option>
                    <option value="Quiero certificarme con Astronomer">Quiero certificarme con Astronomer</option>
                    <option value="Necesito implementar en producción">Necesito implementar en producción</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting ? 'Enviando...' : '📧 Solicitar Información'}
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
                  💡 Te contactaremos con toda la información
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Banner de Certificación Astronomer */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Preparación para Certificación Astronomer Incluida
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Te preparamos para obtener la certificación oficial de Astronomer para Apache Airflow
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Certificación Astronomer */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="/assets/astronomer.png"
                    alt="Astronomer Apache Airflow Fundamentals Certification"
                    className="h-20 w-auto object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Apache Airflow Fundamentals</h4>
                <p className="text-purple-600 font-semibold mb-2">Certificación Astronomer</p>
                <p className="text-gray-600 text-sm mb-4">
                  Preparación completa para la certificación oficial de Astronomer. Incluye simulacros, blueprint y estrategias de examen.
                </p>
                <div className="flex items-center justify-center text-green-600 font-semibold mb-2">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Preparación incluida
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-xs text-yellow-800 font-medium">
                    ⚠️ No incluye tasas de examen (150€)
                  </p>
                </div>
              </motion.div>

              {/* Apache Airflow Logo y Formación */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="/assets/AirflowLogo (1).png"
                    alt="Apache Airflow"
                    className="h-20 w-auto object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Formación Profesional</h4>
                <p className="text-blue-600 font-semibold mb-2">Apache Airflow</p>
                <p className="text-gray-600 text-sm mb-4">
                  Titulación oficial Ebal Formacion de Formación Profesional en Apache Airflow. Opcionalmente, titulación universitaria SABAL.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-green-600 font-semibold">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">Titulación Ebal Formacion incluida</span>
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <Award className="h-4 w-4 mr-2" />
                    <span className="text-sm">Titulación universitaria SABAL (+20€)</span>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-xs text-blue-800 font-medium">
                    💡 Tasas de expedición universitaria: solo 20€
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-purple-600 mr-3" />
                <h4 className="text-lg font-bold text-gray-800">Doble Oportunidad de Certificación</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <p className="font-semibold text-purple-700 mb-1">Certificación Astronomer</p>
                  <p className="text-gray-600">Reconocimiento internacional • Válida para empresas • Aumenta empleabilidad</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-blue-700 mb-1">Titulación Universitaria</p>
                  <p className="text-gray-600">Validez académica oficial • Complementa CV • Respaldo institucional</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Sección: ¿Por qué Apache Airflow? */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              ¿Por qué Apache Airflow es Imprescindible?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              La herramienta de orquestación de datos más utilizada en el mundo empresarial
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Apache Airflow Dashboard"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-red-600/20 rounded-xl"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-1">Utilizado por las mejores empresas</h4>
                <p className="text-sm text-gray-600">Netflix, Airbnb, PayPal, ING y miles más</p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  icon: <Workflow className="h-6 w-6 text-orange-600" />,
                  title: "Orquestación Visual",
                  description: "Crea y gestiona workflows complejos de datos con una interfaz gráfica intuitiva que permite visualizar dependencias y estados en tiempo real."
                },
                {
                  icon: <Code className="h-6 w-6 text-red-600" />,
                  title: "Código Como Configuración", 
                  description: "Define tus pipelines como código Python, lo que permite versionado, testing, revisiones y reutilización de componentes entre proyectos."
                },
                {
                  icon: <Cloud className="h-6 w-6 text-blue-600" />,
                  title: "Escalabilidad Enterprise",
                  description: "Despliega en Kubernetes, maneja miles de tareas concurrentes y integra con todas las plataformas cloud y herramientas de datos modernas."
                },
                {
                  icon: <Shield className="h-6 w-6 text-green-600" />,
                  title: "Confiabilidad Garantizada",
                  description: "Sistema de reintentos, alertas automáticas, monitoreo avanzado y recuperación ante fallos para garantizar la ejecución de tus pipelines críticos."
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
              Habilidades y oportunidades profesionales que desarrollarás con Apache Airflow
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Habilidades Técnicas */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-orange-50 rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <Code className="h-8 w-8 text-orange-600 mr-3" />
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
            className="bg-blue-50 rounded-xl p-8"
          >
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
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


      {/* FAQ - Preguntas Frecuentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {/* Pregunta 1 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-orange-700 mb-2">1. ¿Necesito experiencia previa con Apache Airflow?</h3>
              <p className="text-gray-700 text-sm md:text-base">No, el curso está diseñado desde cero. Solo necesitas conocimientos básicos de Python y conceptos de datos. Te guiamos paso a paso desde la instalación hasta despliegues en producción avanzados.</p>
            </div>
            {/* Pregunta 2 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-orange-700 mb-2">2. ¿Qué titulaciones puedo obtener y cuáles son los costes?</h3>
              <p className="text-gray-700 text-sm md:text-base">Obtienes la titulación Ebal Formacion de Formación Profesional en Apache Airflow incluida en el precio. Opcionalmente, puedes obtener la titulación universitaria de SABAL abonando solo 20€ de tasas de expedición. La preparación para certificación Astronomer está incluida (tasas de examen 150€ no incluidas).</p>
            </div>
            {/* Pregunta 3 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-orange-700 mb-2">3. ¿Qué tipo de proyectos prácticos incluye?</h3>
              <p className="text-gray-700 text-sm md:text-base">Desarrollarás pipelines ETL completos, integración con Spark y dbt, despliegue en Kubernetes, configuración de alertas y monitoring, y un proyecto integrador E2E con documentación profesional.</p>
            </div>
            {/* Pregunta 4 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-orange-700 mb-2">4. ¿Cómo es el acceso y soporte del curso?</h3>
              <p className="text-gray-700 text-sm md:text-base">Acceso de por vida a todo el contenido, actualizaciones incluidas, soporte tutor para resolver dudas, y una comunidad privada de alumnos para networking y colaboración.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Listo para Dominar Airflow?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Únete a los profesionales que ya automatizan y orquestan datos como expertos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={downloadSyllabus}
                className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
              >
                <Download className="h-5 w-5 inline mr-2" />
                Descargar Temario Completo
              </button>
              <button
                onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
              >
                <ArrowRight className="h-5 w-5 inline mr-2" />
                Comenzar Ahora - 99€
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal de descarga de temario */}
      <SyllabusRequestModal 
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseTitle="Formación Profesional en Apache Airflow"
        syllabusUrl="/assets/Temario Airflow NP.pdf"
      />
    </div>
  );
};

export default AirflowProfessional;