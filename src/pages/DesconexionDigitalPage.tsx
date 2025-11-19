import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Shield, AlertTriangle, FileText, Users, Clock, Award, 
  Phone, Mail, Send, CheckCircle, XCircle, Loader2, Star, 
  Download, ArrowRight, Zap, Brain, Code, Lightbulb, Info
} from 'lucide-react';
import InfoRequestModal from '../components/InfoRequestModal';
import SyllabusRequestModal from '../components/SyllabusRequestModal';

const DesconexionDigitalPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect for motivational phrase
  const motivationalText = "¡Protege el bienestar digital de tu empresa y cumple con la normativa!";
  const highlightWord = "bienestar";

  const typeEndingText = () => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < motivationalText.length) {
        setCurrentText(motivationalText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowCursor(false);
          setTimeout(() => setShowCursor(true), 500);
        }, 2000);
      }
    }, 50);
  };

  useEffect(() => {
    document.title = 'Desconexión Digital - Ebal Formacion';
    window.scrollTo(0, 0);
    setTimeout(typeEndingText, 1000);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          courseTitle: 'Desconexión Digital',
          comments: formData.message
        }),
      });

      if (response.ok) {
        setSubmitMessage('¡Solicitud enviada con éxito!');
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

  const renderTextWithHighlight = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === highlight.toLowerCase() ? 
        <span key={index} className="text-yellow-400">{part}</span> : 
        part
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-amber-700 via-orange-700 to-red-700 pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Desconexión Digital"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-700/80 via-orange-700/80 to-red-700/80"></div>
        </div>
        
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white"
              >
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <span className="text-sm font-medium">CURSO BONIFICABLE</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Desconexión Digital
                </h1>

                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  Implementa políticas efectivas de desconexión digital, protege los derechos de los trabajadores 
                  y previene riesgos laborales asociados al uso excesivo de tecnologías digitales.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">8 horas</span>
                  </div>
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Award className="h-4 w-4 mr-2" />
                    <span className="text-sm">Certificación Ebal Formacion</span>
                  </div>
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Star className="h-4 w-4 mr-2" />
                    <span className="text-sm">100% Bonificable</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={() => setShowSyllabusModal(true)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Descargar Temario Completo
                  </button>
                  <div className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center">
                    <Info className="mr-2 h-5 w-5" />
                    Incluido protocolo GRATIS para la empresa
                  </div>
                </div>

                {/* Dynamic motivational text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-lg font-medium"
                >
                  {renderTextWithHighlight(currentText, highlightWord)}
                  {showCursor && <span className="animate-pulse">|</span>}
                </motion.div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Solicita Información
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Cuéntanos sobre tu interés en el curso..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 flex items-center justify-center"
                  >
                    {isSubmitted ? (
                      <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    ) : (
                      <Send className="h-5 w-5 mr-2" />
                    )}
                    {isSubmitted ? 'Enviando...' : 'Solicitar Información'}
                  </button>
                  {submitMessage && (
                    <div className={`text-center text-sm ${submitMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                      {submitMessage}
                    </div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Contenido del Curso
              </h2>
              <p className="text-xl text-gray-600">
                Domina la desconexión digital con un enfoque práctico y normativo
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Course Modules */}
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-green-800">
                      Módulo 1: Contexto y Marco Normativo
                    </h3>
                  </div>
                  <p className="text-green-700 text-sm">
                    Contexto laboral, normativo, concepto de desconexión digital y ámbito de aplicación.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-blue-800">
                      Módulo 2: Derechos a Proteger
                    </h3>
                  </div>
                  <p className="text-blue-700 text-sm">
                    Derecho al descanso, conciliación familiar, intimidad y protección en seguridad y salud laboral.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-orange-600 mr-3" />
                    <h3 className="text-lg font-semibold text-orange-800">
                      Módulo 3: Prevención de Riesgos Laborales
                    </h3>
                  </div>
                  <p className="text-orange-700 text-sm">
                    Factores de riesgo, riesgos emergentes, brecha digital y medidas preventivas.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <div className="flex items-center mb-4">
                    <FileText className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-semibold text-purple-800">
                      Módulo 4: Política Interna
                    </h3>
                  </div>
                  <p className="text-purple-700 text-sm">
                    Protocolo de desconexión digital, formación, sensibilización y medidas de control.
                  </p>
                </div>
              </div>

              {/* Right Column - Student Image */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative h-full min-h-[400px] bg-gradient-to-br from-green-100 to-blue-100 rounded-lg overflow-hidden"
                >
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Profesional trabajando con políticas de desconexión digital"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        "Protege el bienestar digital de tu equipo"
                      </h4>
                      <p className="text-sm text-gray-200">
                        40 horas de formación especializada en desconexión digital
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preparation Points Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                ¿Para qué te prepara este curso?
              </h2>
              <p className="text-xl text-gray-600">
                Desarrolla competencias clave en desconexión digital
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <BookOpen className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Marco Normativo y Contexto</h3>
                <p className="text-gray-600">
                  Comprende el contexto laboral y normativo de la desconexión digital, 
                  incluyendo el ámbito de aplicación y conceptos clave.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Derechos a Proteger</h3>
                <p className="text-gray-600">
                  Identifica y protege los derechos al descanso, conciliación familiar, 
                  intimidad y seguridad laboral a través de la desconexión digital.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <AlertTriangle className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Prevención de Riesgos Laborales</h3>
                <p className="text-gray-600">
                  Analiza factores de riesgo, riesgos emergentes y consecuencias de la no desconexión digital, 
                  implementando medidas preventivas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <FileText className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Política Interna</h3>
                <p className="text-gray-600">
                  Desarrolla protocolos de desconexión digital, acciones de formación 
                  y medidas de seguimiento y control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Obligatoriedad del Protocolo Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                ¿Es Obligatorio el Protocolo de Desconexión Digital?
              </h2>
              <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold text-lg mb-4">
                SÍ, ES OBLIGATORIO
              </div>
              <p className="text-xl text-gray-600">
                Todas las empresas deben tener un protocolo de desconexión digital, independientemente de su tamaño o sector
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Left Column - Marco Legal */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Marco Legal</h3>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-semibold text-blue-800 mb-2">Ley Orgánica de Protección de Datos</h4>
                  <p className="text-blue-700 text-sm">
                    La LOPDGDD establece la obligación de las empresas de garantizar el derecho a la desconexión digital.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-semibold text-green-800 mb-2">Estatuto de los Trabajadores</h4>
                  <p className="text-green-700 text-sm">
                    El artículo 20 bis recoge específicamente este derecho fundamental.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                  <h4 className="font-semibold text-purple-800 mb-2">Ley del Trabajo a Distancia</h4>
                  <p className="text-purple-700 text-sm">
                    El artículo 18 refuerza la importancia de la desconexión digital para trabajadores remotos.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-semibold text-orange-800 mb-2">Ley de Prevención de Riesgos Laborales</h4>
                  <p className="text-orange-700 text-sm">
                    El artículo 16.2 contempla la protección de la salud y bienestar, incluyendo la desconexión digital.
                  </p>
                </div>
              </div>

              {/* Right Column - Implicaciones */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">¿Qué Implica Tener un Protocolo?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Establecer una política interna</h4>
                      <p className="text-gray-600 text-sm">Define cómo se gestiona la desconexión digital dentro de la empresa.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Definir horarios y canales</h4>
                      <p className="text-gray-600 text-sm">Determina claramente los horarios de trabajo y canales de comunicación.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Informar y concienciar</h4>
                      <p className="text-gray-600 text-sm">Informa a los empleados sobre su derecho y promueve el uso responsable.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-100 rounded-full p-2 mr-4 mt-1">
                      <Shield className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Medidas para garantizar la desconexión</h4>
                      <p className="text-gray-600 text-sm">Incluye desactivación de notificaciones, limitación de acceso y promoción de pausas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consecuencias del Incumplimiento */}
            <div className="bg-red-50 p-8 rounded-lg border border-red-200">
              <h3 className="text-2xl font-semibold text-red-800 mb-6 text-center">
                ¿Qué Ocurre si No Se Cumple?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-red-100 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-red-800 mb-2">Sanciones Económicas</h4>
                  <p className="text-red-700 text-sm">
                    Multas de 751€ a 225.018€ por la Inspección de Trabajo
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-red-100 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                    <XCircle className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-red-800 mb-2">Daño a la Salud</h4>
                  <p className="text-red-700 text-sm">
                    Estrés, ansiedad y problemas de salud en los trabajadores
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-red-100 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-red-800 mb-2">Impacto en Productividad</h4>
                  <p className="text-red-700 text-sm">
                    Trabajadores agotados son menos productivos y cometen más errores
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-green-100 p-6 rounded-lg inline-block">
                <h4 className="text-xl font-semibold text-green-800 mb-2">
                  La desconexión digital no es opcional
                </h4>
                <p className="text-green-700">
                  Es un derecho laboral que debe ser garantizado a través de un protocolo bien definido y aplicado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consejo IA del Curso Section */}
      <section className="py-16 bg-gray-100"> 
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:pl-8 md:pr-8 md:pt-8 rounded-xl shadow-lg border border-gray-200 flex flex-col md:flex-row items-center gap-6 md:gap-8 relative overflow-visible"
          >
            {/* Video Element */}
            <div className="flex-shrink-0 w-full md:w-2/5 lg:w-1/2 md:-ml-12 md:-mt-12 md:mb-[-3rem] z-10">
              <video 
                src="/assets/desconexion.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="rounded-lg object-cover w-full h-auto max-h-64 border border-gray-200 bg-gray-100 shadow-xl"
              >
                Tu navegador no soporta videos HTML5.
              </video>
            </div>

            {/* Text Content */}
            <div className="flex-grow text-center md:text-left md:pl-4 lg:pl-8">
              <div className="flex items-center justify-center md:justify-start mb-3">
                <Lightbulb className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="text-xl font-medium text-gray-800 font-nunito">Consejo IA del Curso</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Tip: Comienza con proyectos pequeños y escalables. Domina los fundamentos antes de intentar proyectos complejos.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para implementar la desconexión digital?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Únete a nuestro curso y protege el bienestar digital de tu organización
          </p>
          <button
            onClick={() => setShowSyllabusModal(true)}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
          >
            Descargar Temario Completo
          </button>
        </div>
      </div>

      {/* FAQ - Preguntas Frecuentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">1. ¿Es obligatorio que mi empresa tenga un protocolo de desconexión digital?</h3>
              <p className="text-gray-700 text-sm md:text-base">Sí, la legislación española exige que todas las empresas, independientemente de su tamaño, cuenten con un protocolo de desconexión digital para proteger los derechos de los trabajadores.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">2. ¿Qué incluye el curso de Desconexión Digital?</h3>
              <p className="text-gray-700 text-sm md:text-base">El curso abarca el marco normativo, derechos a proteger, prevención de riesgos laborales y el desarrollo de una política interna de desconexión digital, además de un protocolo gratuito para la empresa.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">3. ¿La formación es bonificable?</h3>
              <p className="text-gray-700 text-sm md:text-base">Sí, el curso es 100% bonificable a través de FUNDAE, lo que permite a las empresas recuperar el coste de la formación.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">4. ¿Qué ocurre si una empresa no cumple con la desconexión digital?</h3>
              <p className="text-gray-700 text-sm md:text-base">El incumplimiento puede acarrear sanciones económicas, daño a la salud de los trabajadores y una disminución de la productividad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <InfoRequestModal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        courseTitle="Desconexión Digital"
      />
      <SyllabusRequestModal
        isOpen={showSyllabusModal}
        onClose={() => setShowSyllabusModal(false)}
        courseTitle="Desconexión Digital"
        syllabusUrl="/assets/ÍNDICE DE TEMARIO DESCONEXIÓN DIGITAL.pdf"
      />
    </div>
  );
};

export default DesconexionDigitalPage; 
