import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Shield, CheckCircle, Clock, Users, Star, Trophy, 
  Info, Send, Globe, Zap, Brain, Target, ChevronDown, ExternalLink,
  BarChart, Database, Settings, Lock, Leaf, Eye, GitBranch, Monitor,
  FileText, TrendingUp, Lightbulb, ArrowRight, Building, Cpu, Activity
} from 'lucide-react';

const SelloAIPlus = () => {

  // Structured Data para SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sello AI+ - Certificación de Calidad en IA",
      "description": "Estándar de referencia en el ecosistema de la inteligencia artificial promovido por Ebal Formacion y Doctrina Qualitas.",
      "url": "https://Ebal Formacion.es/sello-ai-plus",
      "sameAs": [
        "https://internationalai.online/sello-ai-plus/",
        "https://Ebal Formacion.es"
      ],
      "foundingOrganization": [
        {
          "@type": "Organization",
          "name": "Ebal Formacion - Asociación Española para la Difusión de la Inteligencia Artificial"
        },
        {
          "@type": "Organization", 
          "name": "Doctrina Qualitas"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Dimensiones del sistema de auditoría
  const auditDimensions = [
    {
      id: 1,
      title: "Nivel de Integración y Madurez de la IA",
      description: "Evaluación del grado de adopción y madurez de las soluciones de IA en la organización",
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      color: "bg-blue-50 border-blue-200",
      aspects: [
        "Ratio de proyectos en producción vs. pilotos",
        "Integración en procesos críticos",
        "Estandarización y normalización de uso"
      ]
    },
    {
      id: 2,
      title: "Calidad Técnica y Operativa",
      description: "Análisis de la robustez, rendimiento y calidad de los sistemas de IA implementados",
      icon: <Settings className="h-8 w-8 text-green-600" />,
      color: "bg-green-50 border-green-200",
      aspects: [
        "Calidad de datos y datasets",
        "Métricas de rendimiento del modelo",
        "Robustez y resiliencia del sistema",
        "Ciclo DevOps/MLOps"
      ]
    },
    {
      id: 3,
      title: "Gobernanza y Cumplimiento",
      description: "Verificación del cumplimiento normativo y las políticas internas de gobernanza",
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      color: "bg-purple-50 border-purple-200",
      aspects: [
        "Cumplimiento normativo y regulatorio",
        "Políticas internas de gobernanza IA",
        "Gestión del ciclo de vida de modelos",
        "Transparencia y trazabilidad"
      ]
    },
    {
      id: 4,
      title: "Uso Responsable, Ética y Seguridad",
      description: "Evaluación de aspectos éticos, de seguridad y uso responsable de la IA",
      icon: <Shield className="h-8 w-8 text-red-600" />,
      color: "bg-red-50 border-red-200",
      aspects: [
        "Evitar sesgos y discriminación",
        "Ética y principios rectores (FATE)",
        "Seguridad de la información",
        "Explicabilidad y comprensibilidad"
      ]
    },
    {
      id: 5,
      title: "Impacto Organizacional y Sostenibilidad",
      description: "Medición del impacto positivo y la sostenibilidad de las soluciones de IA",
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      color: "bg-emerald-50 border-emerald-200",
      aspects: [
        "Mejora de procesos y reducción de costes",
        "Crecimiento y diversificación",
        "Sostenibilidad ambiental",
        "Aceptación e impacto social"
      ]
    },
    {
      id: 6,
      title: "Uso Adecuado de Herramientas de IA",
      description: "Evaluación de la correcta selección, implementación y gestión de herramientas de IA",
      icon: <Cpu className="h-8 w-8 text-orange-600" />,
      color: "bg-orange-50 border-orange-200",
      aspects: [
        "Selección y evaluación de herramientas",
        "Versionado y actualización",
        "Formación continua",
        "Documentación y soporte interno"
      ]
    }
  ];

  // Beneficios del Sello AI+
  const benefits = [
    {
      title: "Diferenciación Competitiva",
      description: "Destaca en el mercado con un sello que garantiza excelencia en IA",
      icon: <Trophy className="h-6 w-6 text-yellow-600" />
    },
    {
      title: "Confianza del Cliente",
      description: "Genera mayor confianza en tus stakeholders y usuarios finales",
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Mejora Continua",
      description: "Identifica oportunidades de mejora y optimización en tus procesos de IA",
      icon: <TrendingUp className="h-6 w-6 text-green-600" />
    },
    {
      title: "Cumplimiento Normativo",
      description: "Asegura el cumplimiento de regulaciones y estándares éticos",
      icon: <Shield className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Sostenibilidad",
      description: "Promueve prácticas sostenibles y responsables en el uso de IA",
      icon: <Leaf className="h-6 w-6 text-emerald-600" />
    },
    {
      title: "Reconocimiento Sectorial",
      description: "Obtén reconocimiento como líder en implementación responsable de IA",
      icon: <Award className="h-6 w-6 text-orange-600" />
    }
  ];

  // Estadísticas del sello
  const stats = [
    { number: '6', label: 'Dimensiones de Evaluación', icon: <BarChart className="h-6 w-6" /> },
    { number: '50+', label: 'Criterios Medibles', icon: <CheckCircle className="h-6 w-6" /> },
    { number: '100%', label: 'Transparencia', icon: <Eye className="h-6 w-6" /> },
    { number: '2', label: 'Organizaciones Fundadoras', icon: <Building className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Inteligencia Artificial Responsable" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-indigo-900/90"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="relative container mx-auto px-6 pt-16 md:pt-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Logo del Sello */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <img
                src="/assets/Sello-AI-Plus.webp"
                alt="Sello AI+"
                className="h-32 w-auto object-contain"
              />
            </motion.div>
            
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Sello AI+
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Estándar de referencia en el ecosistema de la inteligencia artificial
              <br />
              <span className="text-white font-medium">Promoviendo la excelencia, responsabilidad y calidad en IA</span>
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
            >
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white/15 transition-all">
                <Shield className="h-5 w-5 text-emerald-400" />
                <span className="text-xs sm:text-sm font-medium">Certificación Oficial</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white/15 transition-all">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-xs sm:text-sm font-medium">6 Dimensiones de Evaluación</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white/15 transition-all">
                <Brain className="h-5 w-5 text-purple-400" />
                <span className="text-xs sm:text-sm font-medium">IA Responsable</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16"
            >
              <a 
                href="https://internationalai.online/sello-ai-plus/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-bold text-lg sm:text-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Más Información
              </a>
              <button 
                onClick={() => document.querySelector('#beneficios')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-bold text-lg sm:text-xl hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
              >
                Conocer Más
              </button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">{stat.number}</div>
                  <div className="text-blue-200 text-xs sm:text-sm uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/70 hover:text-white/90 transition-colors cursor-pointer"
          >
            <ChevronDown className="h-8 w-8" />
            <ChevronDown className="h-6 w-6 -mt-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* Sección: ¿Qué es el Sello AI+? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Qué es el Sello AI+?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Una iniciativa conjunta de <strong>Doctrina Qualitas</strong> y <strong>Ebal Formacion</strong> para establecer 
              un estándar de referencia en el ecosistema de la inteligencia artificial
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Equipo trabajando con IA"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Objetivo Principal</h3>
                <p className="text-gray-700 leading-relaxed">
                  Promover la <strong>excelencia, responsabilidad y calidad</strong> en el uso de las herramientas 
                  de IA en todo tipo de organizaciones, desde pymes hasta grandes corporaciones.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Alcance Integral</h3>
                <p className="text-gray-700 leading-relaxed">
                  No se limita a evaluar la eficacia técnica, sino que abarca aspectos <strong>éticos, 
                  de transparencia, cumplimiento normativo, seguridad, sostenibilidad</strong> y responsabilidad social.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Doble Función</h3>
                <p className="text-gray-700 leading-relaxed">
                  Herramienta de <strong>certificación e incentivo</strong> que ayuda a identificar mejoras 
                  y ofrece garantías a stakeholders sobre la calidad de las soluciones de IA.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Organizaciones Fundadoras */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Impulsado por Ebal Formacion y Doctrina Qualitas
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <img
                    src="/assets/logo-Ebal Formacion.png"
                    alt="Ebal Formacion"
                    className="h-16 mx-auto mb-4 object-contain"
                  />
                  <h4 className="font-bold text-gray-900 mb-2">Ebal Formacion</h4>
                  <p className="text-gray-600 text-sm">
                    Asociación Española para la Difusión de la Inteligencia Artificial
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <img
                    src="/assets/Logo-Grupo-Doctrina-Qualitas.webp"
                    alt="Doctrina Qualitas"
                    className="h-16 mx-auto mb-4 object-contain"
                  />
                  <h4 className="font-bold text-gray-900 mb-2">Doctrina Qualitas</h4>
                  <p className="text-gray-600 text-sm">
                    Especialistas en calidad y certificación de sistemas
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección: Sistema de Auditoría - 6 Dimensiones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sistema de Auditoría: 6 Dimensiones Clave
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Cada dimensión incluye criterios medibles, indicadores y evidencias que permiten 
              obtener una puntuación global y emitir el sello AI+
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {auditDimensions.map((dimension, index) => (
              <motion.div
                key={dimension.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg p-6 border-2 ${dimension.color} hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                    {dimension.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Dimensión {dimension.id}: {dimension.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {dimension.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-3">Aspectos evaluados:</h4>
                  {dimension.aspects.map((aspect, aspectIndex) => (
                    <div key={aspectIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{aspect}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección: Beneficios del Sello AI+ */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Beneficios del Sello AI+
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obtén reconocimiento por tu excelencia en IA y diferénciate en el mercado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección: Proceso de Certificación */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proceso de Certificación
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso riguroso y transparente que garantiza la calidad y excelencia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Solicitud",
                description: "Envía tu solicitud de certificación con la documentación inicial",
                icon: <Send className="h-6 w-6 text-blue-600" />
              },
              {
                step: "2", 
                title: "Evaluación",
                description: "Auditoría exhaustiva de las 6 dimensiones por expertos certificados",
                icon: <Eye className="h-6 w-6 text-green-600" />
              },
              {
                step: "3",
                title: "Informe",
                description: "Recibe un informe detallado con puntuación y recomendaciones de mejora",
                icon: <FileText className="h-6 w-6 text-purple-600" />
              },
              {
                step: "4",
                title: "Certificación",
                description: "Obtén el Sello AI+ y únete al ecosistema de IA responsable",
                icon: <Award className="h-6 w-6 text-yellow-600" />
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-gray-800">{process.step}</span>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-3">
                    {process.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Certificar tu IA?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Únete al ecosistema de organizaciones que lideran el uso responsable de la inteligencia artificial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://internationalai.online/sello-ai-plus/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Más Información</span>
              </a>
              <a 
                href="mailto:info@Ebal Formacion.es?subject=Consulta sobre Sello AI+"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Contactar</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SelloAIPlus;
