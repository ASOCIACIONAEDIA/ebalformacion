import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, User, Mail, Phone, MessageSquare } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { trackFormSubmit } from '../utils/analytics';

interface InfoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
}

const InfoRequestModal: React.FC<InfoRequestModalProps> = ({ isOpen, onClose, courseTitle }) => {
  // State for form data and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseTitle: courseTitle, // Pre-fill course title
    comments: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Update courseTitle in formData if it changes while modal is open
  useEffect(() => {
    setFormData(prev => ({ ...prev, courseTitle }));
  }, [courseTitle]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 🔥 TRACKING GA4 - Enviar evento antes de procesar
    trackFormSubmit({
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      form_type: 'info_request',
      course_name: formData.courseTitle
    });
    
    setIsSubmitted(true);
    setSubmitMessage('Enviando solicitud...');

    console.log('Enviando datos:', formData); // Debug log

    try {
      const response = await fetch('/api/send-info-request-email', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Respuesta del servidor:', response.status, response.statusText); // Debug log

      if (response.ok) {
        const result = await response.json();
        console.log('Resultado:', result); // Debug log
        setSubmitMessage('¡Solicitud enviada con éxito!'); 
        // Optionally close modal on success after a delay
        setTimeout(() => {
            onClose();
            // Reset form *after* closing transition (or earlier if preferred)
            setFormData({ name: '', email: '', phone: '', courseTitle: courseTitle, comments: '' }); 
            setSubmitMessage(''); 
        }, 2000);
      } else {
        let errorDetail = 'Error del servidor.';
        try {
          const errorResult = await response.json();
          console.log('Error del servidor:', errorResult); // Debug log
          errorDetail = errorResult.detail || errorDetail;
        } catch (jsonError) {
          const errorText = await response.text();
          console.log('Error texto:', errorText); // Debug log
          errorDetail = response.statusText || errorDetail;
        }
        setSubmitMessage(`Error al enviar: ${errorDetail}`);
        // Don't automatically close on error, let user retry or close manually
        setTimeout(() => setSubmitMessage(''), 5000);
      }
    } catch (error) {
      console.error('Error de red o conexión:', error);
      setSubmitMessage('Error de conexión al enviar la solicitud.');
      setTimeout(() => setSubmitMessage(''), 5000);
    } finally {
      // Only set isSubmitted back to false if we are not closing the modal on success
      // If closing on success, it will reset when reopened
      // Update: Keep it simple, always reset submission state
      setIsSubmitted(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
          onClick={onClose} 
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <Info className="mr-2 text-purple-600" size={20}/>
                Solicitar Información sobre: {courseTitle}
              </h3>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                aria-label="Cerrar modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="info-name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input 
                    type="text" 
                    id="info-name"
                    name="name"
                    value={formData.name} // Bind state
                    onChange={handleChange} // Handle change
                    required 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Tu nombre completo"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="info-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                 <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input 
                    type="email" 
                    id="info-email"
                    name="email"
                    value={formData.email} // Bind state
                    onChange={handleChange} // Handle change
                    required 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="info-phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                 <div className="relative">
                   <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input 
                    type="tel" 
                    id="info-phone"
                    name="phone"
                    value={formData.phone} // Bind state
                    onChange={handleChange} // Handle change
                    required 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="info-comments" className="block text-sm font-medium text-gray-700 mb-1">Comentarios (Opcional)</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea 
                    id="info-comments"
                    name="comments"
                    value={formData.comments} // Bind state
                    onChange={handleChange} // Handle change
                    rows={4} 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="¿Alguna pregunta específica?"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button and Message */} 
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitted}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors disabled:opacity-50"
                >
                  {isSubmitted ? 'Enviando...' : 'Enviar Solicitud'}
                </button>
                {submitMessage && (
                  <p className={`text-sm text-center mt-3 ${submitMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                    {submitMessage}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoRequestModal; 