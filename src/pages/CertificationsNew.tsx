import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Shield, CheckCircle, Clock, Users, Star, BookOpen, Trophy, 
  ChevronDown, ChevronUp, X, Info, FileText, Send, 
  AlertTriangle, Cloud, Database, Globe, Zap, Brain, Target
} from 'lucide-react';

// Import certification images
import azureImage from '/assets/azure-fundamentals.png';
import awsImage from '/assets/aws-cloud-practitioner.png';

const certifications = [
  {
    id: 'az-900',
    title: 'AZ-900 Azure Fundamentals',
    provider: 'Microsoft Azure',
    description: 'Obtén conocimientos fundamentales sobre los servicios de nube y cómo se proporcionan con Microsoft Azure.',
    image: azureImage,
    duration: '40-60 horas',
    level: 'Principiante',
    price: '129€',
    examPrice: 'No incluye tasas de examen',
    rating: 4.8,
    students: 450,
    features: [
      'Conceptos de Cloud Computing (25-30%)',
      'Arquitectura y servicios básicos de Azure (35-40%)',
      'Gestión, gobernanza y costos en Azure (30-35%)',
      'Simulacros de examen completos',
      'Laboratorios prácticos guiados',
      'Acceso a Microsoft Learn oficial'
    ]
  },
  {
    id: 'aws-clf-c01',
    title: 'AWS Cloud Practitioner (CLF-C01)',
    provider: 'Amazon Web Services',
    description: 'Valida tu conocimiento general de la nube de AWS y demuestra tu comprensión de los servicios fundamentales.',
    image: awsImage,
    duration: '30-50 horas',
    level: 'Principiante',
    price: '129€',
    examPrice: 'No incluye tasas de examen',
    rating: 4.7,
    students: 380,
    features: [
      'Conceptos de computación en la nube',
      'Principios de arquitectura de AWS',
      'Seguridad y cumplimiento en AWS',
      'Precios y facturación de AWS',
      'Soporte y recursos de AWS',
      'Práctica con consola de AWS'
    ]
  }
];

const CertificationCard: React.FC<{ cert: typeof certifications[0]; index: number }> = ({ cert, index }) => {
  const [showEnrollModal, setShowEnrollModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
      >
        {/* Header with image */}
        <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600 p-6 flex items-center justify-center">
          <img 
            src={cert.image} 
            alt={cert.title} 
            className="h-24 w-24 object-contain bg-white rounded-lg p-2"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
              {cert.level}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-600">{cert.rating}</span>
            </div>
          </div>

          <p className="text-sm text-blue-600 font-medium mb-2">{cert.provider}</p>
          <p className="text-gray-600 mb-4 leading-relaxed">{cert.description}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <Clock className="h-5 w-5 text-blue-500 mx-auto mb-1" />
              <p className="text-xs text-gray-500">Duración</p>
              <p className="text-sm font-medium">{cert.duration}</p>
            </div>
            <div className="text-center">
              <Users className="h-5 w-5 text-green-500 mx-auto mb-1" />
              <p className="text-xs text-gray-500">Estudiantes</p>
              <p className="text-sm font-medium">{cert.students}+</p>
            </div>
            <div className="text-center">
              <Trophy className="h-5 w-5 text-yellow-500 mx-auto mb-1" />
              <p className="text-xs text-gray-500">Precio</p>
              <p className="text-sm font-medium">{cert.price}</p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Lo que incluye:</h4>
            <div className="space-y-2">
              {cert.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
              {cert.features.length > 3 && (
                <p className="text-sm text-blue-600 font-medium">
                  +{cert.features.length - 3} características más
                </p>
              )}
            </div>
          </div>

          {/* Important notice - More discrete */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4">
            <div className="flex items-start space-x-2">
              <Info className="h-3 w-3 text-gray-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-600">
                <strong>Información importante:</strong> Los precios mostrados no incluyen las tasas de presentación a los exámenes oficiales de certificación.
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex">
            <button
              onClick={() => setShowEnrollModal(true)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Solicitar Información</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Enrollment Modal */}
      {showEnrollModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Solicitar Información</h3>
              <button
                onClick={() => setShowEnrollModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2">{cert.title}</h4>
              <p className="text-sm text-gray-600">
                Solicita información sobre esta certificación y te contactaremos para resolver todas tus dudas.
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+34 600 000 000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje (opcional)
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Cuéntanos qué te interesa saber..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Enviar Solicitud
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

const Certifications: React.FC = () => {
  const careerPaths = [
    {
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      title: 'Arquitecto Cloud',
      description: 'Diseña y gestiona infraestructuras cloud escalables y seguras para empresas de cualquier tamaño.',
      salary: '65.000€ - 85.000€',
      demand: 'Alta demanda'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: 'Especialista en Seguridad Cloud',
      description: 'Protege los datos y aplicaciones en la nube implementando las mejores prácticas de ciberseguridad.',
      salary: '70.000€ - 90.000€',
      demand: 'Muy alta demanda'
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: 'Ingeniero DevOps',
      description: 'Automatiza procesos de desarrollo y despliegue usando herramientas cloud nativas.',
      salary: '60.000€ - 80.000€',
      demand: 'Alta demanda'
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: 'Consultor Cloud',
      description: 'Asesora a empresas en su proceso de migración y transformación digital hacia la nube.',
      salary: '55.000€ - 75.000€',
      demand: 'Creciente demanda'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: 'Administrador de Sistemas Cloud',
      description: 'Gestiona y mantiene servicios cloud garantizando alta disponibilidad y rendimiento.',
      salary: '50.000€ - 70.000€',
      demand: 'Alta demanda'
    },
    {
      icon: <Brain className="h-8 w-8 text-pink-600" />,
      title: 'Especialista en IA/ML Cloud',
      description: 'Implementa soluciones de inteligencia artificial y machine learning en plataformas cloud.',
      salary: '75.000€ - 95.000€',
      demand: 'Muy alta demanda'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80" 
            alt="Cloud Computing Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-purple-900/80 to-indigo-900/85"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-blue-300/40 rounded-full animate-bounce" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-purple-300/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 right-20 w-2 h-2 bg-indigo-300/30 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-8"
            >
              <Award className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium">Certificaciones Oficiales Cloud</span>
            </motion.div>
            
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Certifícate
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                en la Nube
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Domina las tecnologías cloud más demandadas del mercado. 
              <br />
              <span className="text-white font-medium">Azure y AWS te esperan.</span>
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white/15 transition-all">
                <Shield className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium">Certificaciones Oficiales</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white/15 transition-all">
                <Target className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">95% Tasa de Éxito</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white/15 transition-all">
                <Brain className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-medium">Simulacros Reales</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Ver Certificaciones
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Solicitar Info
              </button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">95%</div>
                <div className="text-blue-200 text-sm uppercase tracking-wide">Tasa de Aprobados</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">800+</div>
                <div className="text-blue-200 text-sm uppercase tracking-wide">Estudiantes Certificados</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">2</div>
                <div className="text-blue-200 text-sm uppercase tracking-wide">Certificaciones</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">4.8★</div>
                <div className="text-blue-200 text-sm uppercase tracking-wide">Valoración Media</div>
              </div>
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
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Descubre más</span>
            <div className="w-px h-8 bg-white/30 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* What These Courses Prepare You For */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Para qué te preparan estos cursos?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestras certificaciones te abren las puertas a las oportunidades más demandadas en el mundo cloud
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {careerPaths.map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm mr-4">
                    {career.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{career.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {career.demand}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{career.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Salario promedio:</span>
                  </div>
                </div>
                <div className="text-lg font-bold text-blue-600 mt-1">{career.salary}</div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Ventaja Competitiva</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Los profesionales certificados en Azure y AWS tienen un <strong>35% más de oportunidades laborales</strong> 
                y pueden negociar salarios hasta un <strong>25% superiores</strong> comparado con perfiles sin certificación.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">+35%</div>
                  <div className="text-sm text-gray-600">Más oportunidades</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">+25%</div>
                  <div className="text-sm text-gray-600">Mayor salario</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Reconocimiento global</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certificaciones Disponibles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prepárate para las certificaciones más valoradas en el mercado cloud con nuestros cursos especializados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para certificarte?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Únete a los cientos de profesionales que ya han conseguido su certificación con Ebal Formacion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Solicitar Información
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Ver Todas las Certificaciones
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;