import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award, Shield, CheckCircle, Clock, Users, Star, Trophy,
  Info, Send, Cloud, Database, Globe, Zap, Brain, Target, ChevronDown
} from 'lucide-react';
import EnrollmentModal from '../components/EnrollmentModal';
import InfoRequestModal from '../components/InfoRequestModal';

// Certification images URLs
const azureImage = 'https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png';
const awsImage = 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png';

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
      'Conceptos de Cloud Computing (25-30%): IaaS, PaaS, SaaS, modelos de implementación',
      'Servicios principales de Azure (35-40%): Compute, Storage, Networking, Databases',
      'Gestión y gobernanza (30-35%): Suscripciones, grupos de recursos, Azure Policy',
      'Seguridad, privacidad y cumplimiento: Azure Security Center, Key Vault, compliance',
      'Precios y soporte de Azure: Calculadora de precios, planes de soporte, SLA',
      'Simulacros de examen completos con explicaciones detalladas',
      'Laboratorios prácticos paso a paso en Azure Portal',
      'Acceso a Microsoft Learn oficial y recursos adicionales'
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
      'Conceptos de computación en la nube (26%): Beneficios, modelos de implementación y servicio',
      'Arquitectura de AWS (25%): Regiones, zonas de disponibilidad, servicios principales',
      'Seguridad y cumplimiento (25%): Modelo de responsabilidad compartida, IAM, compliance',
      'Facturación y precios (16%): Modelos de precios, calculadora, AWS Organizations',
      'Servicios principales: EC2, S3, RDS, Lambda, CloudFront, VPC',
      'Herramientas de gestión: CloudWatch, CloudTrail, Systems Manager',
      'Simulacros de examen actualizados con últimas preguntas CLF-C01',
      'Laboratorios hands-on con AWS Free Tier y casos prácticos reales'
    ]
  }
];

const CertificationCard: React.FC<{ cert: typeof certifications[0]; index: number; onInfoRequest: () => void }> = ({ cert, index, onInfoRequest }) => {
  const getConvenioText = (provider: string) => {
    if (provider.includes('Microsoft')) {
      return 'convenio Microsoft';
    } else if (provider.includes('Amazon') || provider.includes('AWS')) {
      return 'convenio AWS';
    }
    return 'convenio de la empresa';
  };

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
            <h4 className="font-semibold text-gray-900 mb-3">Índice de temas:</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {cert.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important notice - More discrete */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4">
            <div className="flex items-start space-x-2">
              <Info className="h-3 w-3 text-gray-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-600">
                <strong>Información importante:</strong> Los precios mostrados no incluyen las tasas de presentación a los exámenes oficiales de certificación (habitualmente 99$ aplicable 50% descuento si trabajas en empresas con {getConvenioText(cert.provider)}).
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex">
            <button
              onClick={onInfoRequest}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Solicitar Información</span>
            </button>
          </div>
        </div>
      </motion.div>

    </>
  );
};

const Certifications: React.FC = () => {
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-24">
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
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-blue-300/40 rounded-full animate-bounce" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-purple-300/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-40 right-20 w-2 h-2 bg-indigo-300/30 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        <div className="relative container mx-auto px-6 pt-16 md:pt-8 text-center text-white">
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
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
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
              className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light"
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
              className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
            >
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white/15 transition-all">
                <Shield className="h-5 w-5 text-emerald-400" />
                <span className="text-xs sm:text-sm font-medium">Certificaciones Oficiales</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white/15 transition-all">
                <Target className="h-5 w-5 text-blue-400" />
                <span className="text-xs sm:text-sm font-medium">95% Tasa de Éxito</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white/15 transition-all">
                <Brain className="h-5 w-5 text-purple-400" />
                <span className="text-xs sm:text-sm font-medium">Bonificable para Empresas</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center mb-12 sm:mb-16"
            >
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">95%</div>
                <div className="text-blue-200 text-xs sm:text-sm uppercase tracking-wide">Tasa de Aprobados</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">200+</div>
                <div className="text-blue-200 text-xs sm:text-sm uppercase tracking-wide">Estudiantes Certificados</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">129€</div>
                <div className="text-blue-200 text-xs sm:text-sm uppercase tracking-wide">Precio curso</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">4.8★</div>
                <div className="text-blue-200 text-xs sm:text-sm uppercase tracking-wide">Valoración Media</div>
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

      {/* Course Details Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Duración</h3>
              <p className="text-gray-600">30-60 horas de estudio</p>
              <p className="text-sm text-gray-500 mt-1">A tu ritmo</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Modelo</h3>
              <p className="text-gray-600">Plataforma de estudios online</p>
              <p className="text-sm text-gray-500 mt-1">Acceso 24/7</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <Brain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Profesorado</h3>
              <p className="text-gray-600">Soporte tutor para dudas</p>
              <p className="text-sm text-gray-500 mt-1">IA + expertos certificados</p>
            </motion.div>
          </div>
        </div>
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
              Te proporcionamos la <strong>teoría y práctica real</strong> necesaria para obtener las certificaciones oficiales que complementan estas profesiones altamente demandadas en el mercado cloud
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {careerPaths.slice(0, 3).map((career, index) => (
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
              <CertificationCard
                key={cert.id}
                cert={cert}
                index={index}
                onInfoRequest={() => setIsInfoModalOpen(true)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why We Have High Success Rate */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué tenemos una tasa de éxito alto?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro método probado combina la mejor tecnología educativa con contenido de calidad profesional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 mx-auto">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Temario Profesional</h3>
              <p className="text-gray-600 text-sm text-center">
                Preparado por profesionales certificados con <strong>tips importantes</strong> y <strong>preguntas reales</strong> de examen en cada tema
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4 mx-auto">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Tests de Práctica</h3>
              <p className="text-gray-600 text-sm text-center">
                Cada tema incluye <strong>tests con preguntas reales</strong> y simulacros completos para que practiques como en el examen oficial
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4 mx-auto">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Recursos Completos</h3>
              <p className="text-gray-600 text-sm text-center">
                <strong>Juegos interactivos</strong>, recursos oficiales, secciones de <strong>errores frecuentes</strong> y documentación actualizada
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-4 mx-auto">
                <Brain className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Soporte 24/7</h3>
              <p className="text-gray-600 text-sm text-center">
                <strong>Tutor AI 24/7</strong> para resolver dudas y <strong>acceso ilimitado</strong> a todo el contenido hasta aprobar tu certificación
              </p>
            </motion.div>
          </div>

          {/* Success Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-6">Resultados que Hablan por Sí Solos</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-blue-100">Tasa de Aprobados</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <div className="text-blue-100">Estudiantes Certificados</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">4.8★</div>
                  <div className="text-blue-100">Valoración Media</div>
                </div>
              </div>
            </div>
          </motion.div>
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
              <button
                onClick={() => setIsInfoModalOpen(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Info className="h-5 w-5" />
                <span>Solicitar Información</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollmentModal
        isOpen={isEnrollmentModalOpen}
        onClose={() => setIsEnrollmentModalOpen(false)}
        courseTitle="Certificaciones Cloud"
        coursePrice={129}
        paymentLink="https://pay.sumup.com/b2c/Q07791AT"
        courseOptions={[
          { id: 'az-900', name: 'AZ-900 Azure Fundamentals', price: 129 },
          { id: 'aws-clf-c01', name: 'AWS Cloud Practitioner (CLF-C01)', price: 129 }
        ]}
      />

      {/* Info Request Modal */}
      <InfoRequestModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        courseTitle="Certificaciones Cloud (Azure + AWS)"
      />
    </div>
  );
};

export default Certifications;