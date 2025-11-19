import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { allCourses, Course } from '../data/courses';
import { trackFormSubmit } from '../utils/analytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    document.title = 'Contacto - Ebal Formacion';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 🔥 TRACKING GA4 - Enviar evento antes de procesar
    trackFormSubmit({
      user_name: formData.name,
      user_email: formData.email,
      user_phone: '', // Contact page no tiene teléfono
      form_type: 'contact_page',
      course_name: formData.course
    });

    setIsSubmitted(true);
    setSubmitMessage('Enviando mensaje...');

    // --- Enviar datos al backend --- 
    try {
      const response = await fetch('/api/send-contact-email', { // URL del backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await response.json();
        setSubmitMessage('¡Mensaje enviado con éxito!');
        setFormData({ name: '', email: '', course: '', subject: '', message: '' }); // Reset form
      } else {
        // Try to get error detail from backend response
        let errorDetail = 'Error del servidor.';
        try {
          const errorResult = await response.json();
          errorDetail = errorResult.detail || errorDetail;
        } catch (jsonError) {
          // Could not parse JSON, use status text
          errorDetail = response.statusText || errorDetail;
        }
        setSubmitMessage(`Error al enviar: ${errorDetail}`);
      }
    } catch (error) {
      console.error('Error de red o conexión:', error);
      setSubmitMessage('Error de conexión al enviar el mensaje.');
    } finally {
      setIsSubmitted(false);
      // Clear the message after a few seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }
    // --- Fin envío backend ---
  };

  return (
    <div className="container mx-auto px-4 py-16 pt-28">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-nunito">
          ¿Tienes Preguntas? Hablemos
        </h1>
        <p className="text-xl text-purple-600 mb-6 font-medium font-nunito">Estamos aquí para ayudarte</p>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Utiliza el formulario o nuestros datos de contacto directo. Queremos resolver tus dudas sobre cursos, la asociación o cualquier otra consulta que tengas.
        </p>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100 order-last lg:order-first">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Envíanos tu Consulta</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                Curso de Interés (Opcional)
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white appearance-none transition-colors"
              >
                <option value="">Selecciona un curso...</option>
                {allCourses.map((course: Course) => (
                  <option key={course.id} value={course.title}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="¿Sobre qué quieres hablar?"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Escribe tu mensaje aquí..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 text-lg"
            >
              {isSubmitted ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            {submitMessage && (
              <p className={`text-sm text-center mt-3 ${submitMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                {submitMessage}
              </p>
            )}
            <p className="text-xs text-gray-500 text-center pt-1">Nos pondremos en contacto contigo lo antes posible.</p>
          </form>
        </div>

        <div className="space-y-8 order-first lg:order-last">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-2xl shadow-xl text-white">
            <h2 className="text-2xl font-semibold mb-6">Información Directa</h2>
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4 shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Dirección</h3>
                  <p className="text-purple-100 opacity-90">
                    Gran Via Asima, 31, piso 3 oficina 11<br />
                    Norte, 07009 Palma, Balearic Islands, España
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4 shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Teléfono</h3>
                  <a href="tel:+34644259614" className="text-purple-100 opacity-90 hover:text-white transition-colors">
                    +34 644 25 96 14
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4 shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a href="mailto:web@ebalit.com" className="text-purple-100 opacity-90 hover:text-white transition-colors">
                    web@ebalit.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-gray-800">
              <Clock className="h-6 w-6 mr-3 text-purple-600" />
              Horario de Atención
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between pb-2 border-b border-gray-200">
                <span className="text-gray-700">Lunes - Viernes</span>
                <span className="font-medium text-gray-800">09:00 - 13:00</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-200">
                <span className="text-gray-700"></span>
                <span className="font-medium text-gray-800">15:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Sábado y Domingo</span>
                <span className="font-medium text-red-600">Cerrado</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;