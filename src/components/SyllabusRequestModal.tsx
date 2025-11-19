import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, User, Mail, Phone, CheckCircle, AlertTriangle } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { trackFormSubmit } from '../utils/analytics';

interface SyllabusRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  syllabusUrl?: string;
}

const SyllabusRequestModal: React.FC<SyllabusRequestModalProps> = ({ 
    isOpen, 
    onClose, 
    courseTitle, 
    syllabusUrl 
}) => {

  // State for form data and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseTitle: courseTitle
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [downloadInitiated, setDownloadInitiated] = useState(false);

  // Update courseTitle in formData if it changes
  useEffect(() => {
    setFormData(prev => ({ ...prev, courseTitle }));
  }, [courseTitle]);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, name: '', email: '', phone: '' }));
      setSubmitMessage('');
      setIsSubmitted(false);
      setDownloadInitiated(false);
    }
  }, [isOpen]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (send email AND trigger download)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!syllabusUrl) return;

    // 🔥 TRACKING GA4 - Enviar evento antes de procesar
    trackFormSubmit({
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      form_type: 'syllabus_request',
      course_name: courseTitle
    });

    setIsSubmitted(true);
    setSubmitMessage('Procesando solicitud...');
    setDownloadInitiated(false);

    // Prepare payload, convert empty phone to null if needed by backend Optional[]
    const payload = {
        ...formData,
        phone: formData.phone || null
    };

    try {
      const response = await fetch('/api/send-syllabus-request-email', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitMessage('¡Datos enviados! Iniciando descarga...'); 
        setDownloadInitiated(true);

        // --- Force Download Logic ---
        if (syllabusUrl) { 
            try {
                const link = document.createElement('a');
                link.href = syllabusUrl;
                // Extract filename from URL or create a default one
                const filename = syllabusUrl.substring(syllabusUrl.lastIndexOf('/') + 1) || `temario-${courseTitle.replace(/\s+/g, '-').toLowerCase()}.pdf`;
                link.setAttribute('download', filename);
                // Append to body to ensure click works on all browsers (esp. Firefox)
                document.body.appendChild(link);
                link.click(); // Simulate click to trigger download
                document.body.removeChild(link); // Clean up the link
            } catch (downloadError) {
                console.error("Error al iniciar la descarga:", downloadError);
                setSubmitMessage('¡Datos enviados! Hubo un error al iniciar la descarga.');
                // Reset submitted state only if download fails, otherwise modal closes
                setIsSubmitted(false); 
                setDownloadInitiated(false);
                // Keep message showing longer if download fails
                 setTimeout(() => setSubmitMessage(''), 7000); 
                 // Do NOT close modal on download error
                 return; // Stop execution here
            }
        } else {
            // Handle case where syllabusUrl is missing unexpectedly
            setSubmitMessage('¡Datos enviados! Error: No se encontró la URL del temario.');
            setIsSubmitted(false);
            setDownloadInitiated(false);
            setTimeout(() => setSubmitMessage(''), 7000);
            return; // Stop execution
        }
        // --- End Force Download Logic ---
        
        // Close modal after successful download initiation
        setTimeout(() => {
          onClose();
        }, 2500); // Keep delay to show success message briefly

      } else {
        let errorDetail = 'Error del servidor al registrar la solicitud.';
        try {
          const errorResult = await response.json();
          errorDetail = errorResult.detail || errorDetail;
        } catch (jsonError) {
          errorDetail = response.statusText || errorDetail;
        }
        setSubmitMessage(`Error: ${errorDetail}. No se pudo iniciar la descarga.`);
        setTimeout(() => setSubmitMessage(''), 5000);
        setIsSubmitted(false);
      }
    } catch (error) {
      console.error('Error de red o conexión:', error);
      setSubmitMessage('Error de conexión. No se pudo iniciar la descarga.');
      setTimeout(() => setSubmitMessage(''), 5000);
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
            className="bg-white rounded-lg shadow-xl w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <Download className="mr-2 text-purple-600" size={20}/>
                Descargar Temario: {courseTitle}
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
              <p className="text-sm text-gray-600 mb-4">
                Por favor, introduce tus datos para descargar el temario del curso.
              </p>
              
              <div>
                <label htmlFor="syllabus-name" className="block text-sm font-medium text-gray-700 mb-1">Nombre <span className="text-red-500">*</span></label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input 
                    type="text" 
                    id="syllabus-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Tu nombre completo"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="syllabus-email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                 <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input 
                    type="email" 
                    id="syllabus-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="syllabus-phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono (Opcional)</label>
                 <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input 
                    type="tel" 
                    id="syllabus-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              {/* Submit Button and Message */}
              <div className="pt-4">
                 {/* Success/Error Message Area */}
                 {submitMessage && (
                   <div className={`text-sm text-center mb-3 p-3 rounded-md ${submitMessage.includes('Error') ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                     <p className="flex items-center justify-center">
                       {submitMessage.includes('Error') ? 
                         <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0"/> : 
                         <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0"/>
                       }
                       {submitMessage}
                     </p>
                   </div>
                 )}

                <button 
                  type="submit" 
                  disabled={isSubmitted || !syllabusUrl}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                   <Download size={18} />
                  {isSubmitted ? 'Procesando...' : 'Descargar Ahora'} 
                </button>
               
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SyllabusRequestModal; 