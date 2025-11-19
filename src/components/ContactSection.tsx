import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { allCourses, Course } from '../data/courses';
import React, { useState } from 'react';
import { trackFormSubmit } from '../utils/analytics';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 🔥 TRACKING GA4 - Enviar evento antes de procesar
    trackFormSubmit({
      user_name: formData.name,
      user_email: formData.email,
      user_phone: '', // ContactSection no tiene teléfono
      form_type: 'contact',
      course_name: formData.course
    });
    
    setIsSubmitted(true);
    setSubmitMessage('Enviando mensaje...');

    try {
      const response = await fetch('http://localhost:8000/send-contact-email', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('¡Mensaje enviado con éxito!'); 
        setFormData({ name: '', email: '', course: '', subject: '', message: '' });
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
      setSubmitMessage('Error de conexión al enviar el mensaje.');
    } finally {
      setIsSubmitted(false);
      setTimeout(() => setSubmitMessage(''), 5000); 
    }
  };

  return (
    <section className="py-20 bg-white" id="contacto">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-nunito">¿Listo para Empezar? Hablemos</h2>
          <p className="text-xl text-purple-600 mb-6 font-medium font-nunito">Nos encantaría saber de ti</p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Completa el formulario o utiliza nuestros datos de contacto. Estamos aquí para resolver tus dudas sobre cursos, colaboraciones o cualquier otra consulta.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Envíanos tu Consulta</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="cs-name" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="cs-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cs-email" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                      Email
                    </label>
                    <input
                      type="email"
                      id="cs-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="cs-course" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Curso de Interés (Opcional)
                  </label>
                  <select
                    id="cs-course"
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
                <div className="mb-6">
                  <label htmlFor="cs-subject" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="cs-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="¿Sobre qué quieres hablar?"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="cs-message" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Mensaje
                  </label>
                  <textarea
                    id="cs-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full text-lg disabled:opacity-50"
                >
                  {isSubmitted ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
                {submitMessage && (
                  <p className={`text-sm text-center mt-3 ${submitMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                    {submitMessage}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-3">Nos pondremos en contacto contigo lo antes posible.</p>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col space-y-8"
          >
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-2xl shadow-xl text-white">
              <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4 shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Dirección</h4>
                    <p className="text-purple-100 opacity-90">
                      Gran Via Asima, 31, piso 3 oficina 11<br />
                      Norte, 07009 Palma, Balearic Islands, Espa�a
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4 shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Teléfono</h4>
                    <a href="tel:+34644259614" className="text-purple-100 opacity-90 hover:text-white transition-colors">+34 644 25 96 14</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4 shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a href="mailto:administracion@Ebal Formacion.es" className="text-purple-100 opacity-90 hover:text-white transition-colors">administracion@Ebal Formacion.es</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100 flex-grow">
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-800">
                <Clock className="h-6 w-6 mr-3 text-purple-600"/>
                Horario de Atención
              </h3>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;