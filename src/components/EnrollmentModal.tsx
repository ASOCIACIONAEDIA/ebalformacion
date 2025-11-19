import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, User, Mail, Phone, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, Calendar, Hash, MapPin, Euro } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { trackFormSubmit } from '../utils/analytics';

interface CourseOption {
  id: string;
  name: string;
  price: number;
}

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  coursePrice?: number;
  paymentLink: string;
  courseOptions?: CourseOption[];
}

// Helper function to format date
const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
    isOpen,
    onClose,
    courseTitle,
    coursePrice,
    paymentLink,
    courseOptions
}) => {

  // --- State Variables ---
  const [formData, setFormData] = useState({
    // Personal Info
    name: '',
    email: '',
    phone: '',
    dni: '',
    dob: '', // Date of Birth
    address: '',
    postalCode: '',
    city: '',
    province: '',
    // Billing Info (Optional)
    billingName: '',
    billingNif: '',
    billingAddress: '',
    billingPostalCode: '',
    billingCity: '',
    billingProvince: '',
    billingCountry: 'España', // Default
    billingEmail: '',
    billingPhone: '',
    // Course Info (pre-filled)
    courseTitle: courseTitle,
    coursePrice: coursePrice ?? 0,
    selectedCourse: courseOptions && courseOptions.length > 0 ? courseOptions[0].id : '',
    selectedCourseName: courseOptions && courseOptions.length > 0 ? courseOptions[0].name : courseTitle,
    // Consents & Acceptance
    contractAccepted: false,
    acceptCommunications: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isBillingExpanded, setIsBillingExpanded] = useState(false);
  const [signatureTimestamp, setSignatureTimestamp] = useState<Date | null>(null);
  const contractTextRef = useRef<HTMLDivElement>(null); // Ref for contract text area

  // --- Effects ---
  // Update courseTitle and price in formData if they change
  useEffect(() => {
    setFormData(prev => ({ ...prev, courseTitle, coursePrice: coursePrice ?? 0 }));
  }, [courseTitle, coursePrice]);

   // Reset state when modal opens/closes
   useEffect(() => {
    if (isOpen) {
      // Reset form fields but keep course info
      setFormData(prev => ({
        ...prev,
        name: '', email: '', phone: '', dni: '', dob: '',
        address: '', postalCode: '', city: '', province: '',
        billingName: '', billingNif: '', billingAddress: '', billingPostalCode: '',
        billingCity: '', billingProvince: '', billingCountry: 'España',
        billingEmail: '', billingPhone: '',
        contractAccepted: false, acceptCommunications: false,
      }));
      setSubmitMessage('');
      setIsSubmitted(false);
      setIsBillingExpanded(false);
      setSignatureTimestamp(null);
    }
  }, [isOpen]);

  // --- Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCourseId = e.target.value;
    const selectedOption = courseOptions?.find(option => option.id === selectedCourseId);
    
    if (selectedOption) {
      setFormData(prev => ({
        ...prev,
        selectedCourse: selectedCourseId,
        selectedCourseName: selectedOption.name,
        coursePrice: selectedOption.price
      }));
    }
  };

  const handleContractAcceptance = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setFormData(prev => ({ ...prev, contractAccepted: isChecked }));
    setSignatureTimestamp(isChecked ? new Date() : null);
    // Scroll to bottom of contract text when accepted (optional nice-to-have)
    if (isChecked && contractTextRef.current) {
        contractTextRef.current.scrollTop = contractTextRef.current.scrollHeight;
    }
  };

  const generateContractText = (signDate: Date | null): string => {
    const formattedDate = signDate ? formatDate(signDate) : '[Fecha Pendiente]';
    // IMPORTANT: Replace placeholders in your actual contract text
    const contractTemplate = `
Firmado digitalmente • ${formattedDate}
CONTRATO DE PRESTACIÓN DE SERVICIOS DE FORMACIÓN

Entre:
Ebal Formacion (Asociación Española para la Difusión de la Inteligencia Artificial), con domicilio en
Gran Via Asima, 31, piso 3 oficina 11, Norte, 07009 Palma, Balearic Islands, Espa�a, CIF G16423691, Nº REG 629089 en
adelante denominada "LA ASOCIACIÓN".

Y
${formData.name || '[Nombre Estudiante]'}, con DNI ${formData.dni || '__________________'}, en adelante denominado "EL ESTUDIANTE".

En consideración a:
1. Que "LA ASOCIACIÓN" es una entidad dedicada a la difusión y enseñanza de la inteligencia
artificial a través de cursos, bootcamps y másters impartidos de forma telepresencial u online.
2. Que "EL ESTUDIANTE" está interesado en recibir dicha formación.

Las partes acuerdan lo siguiente:

Cláusula 1: Objeto del Contrato "LA ASOCIACIÓN" se compromete a impartir la formación
seleccionada por "EL ALUMNO", consistente en un curso de ${formData.courseTitle || '[Curso]'}, que se desarrollará bajo la modalidad telepresencial/online.

Cláusula 2: Duración El curso tiene una duración de Horas lectivas indicadas en la planificación
de la formación.

Cláusula 3: Precio El costo del curso será de ${formData.coursePrice !== undefined ? formData.coursePrice.toFixed(2) + ' €' : '[Precio Curso]'}.

Cláusula 4: Exención de IVA De acuerdo con lo establecido en el Artículo 20.Uno.9º de la Ley
37/1992, de 28 de diciembre, del Impuesto sobre el Valor Añadido, los servicios de formación
impartidos por "LA ASOCIACIÓN" están exentos de IVA al tratarse de formación reglada.

Cláusula 5: Obligaciones de "LA ASOCIACIÓN" "LA ASOCIACIÓN" se compromete a
proporcionar todos los materiales didácticos necesarios para el curso y asegurar la disponibilidad
de los medios tecnológicos necesarios para la correcta impartición del curso en modalidad
telepresencial u online.

Cláusula 6: Derechos y Obligaciones de "EL ALUMNO" Este se compromete a cumplir con los
requisitos técnicos necesarios para la conexión y participación en el curso, así como a completar
los pagos acordados en la fecha estipulada.

Cláusula 7: Cancelaciones y Devoluciones Según la normativa vigente, las personas
consumidoras tienen un plazo de 14 días para devolver el producto por el motivo que sea, bien
porque no se ajusta a nuestras expectativas o porque hemos cambiado de opinión. Este derecho
es de aplicación para los cursos online, siempre que no se produzca una descarga o acceso de al
menos es 30% a los archivos que contengan el contenido didáctico del curso. En este caso, el
Firmado digitalmente • ${formattedDate}
alumno no podrá ejercer el derecho de desistimiento.

Cláusula 8: Propiedad Intelectual Todos los derechos de propiedad intelectual y contenidos del
curso son propiedad de "LA ASOCIACIÓN" y están protegidos por las leyes de derechos de autor.
Está prohibida su reproducción, retransmisión, copia, cesión o redifusión total o parcial sin
autorización expresa y escrita de "LA ASOCIACIÓN".

Cláusula 9: Confidencialidad "EL ALUMNO" se compromete a mantener en confidencialidad la
información a la que tenga acceso como parte del curso y no divulgarla a terceros sin el
consentimiento previo y por escrito de "LA ASOCIACIÓN".

Cláusula 10: Resolución de Conflictos Cualquier controversia o reclamación derivada de este
contrato, su incumplimiento, terminación o validez, se resolverá mediante arbitraje, según las
normas de la Ley de Arbitraje española.

Cláusula 11: De la titulación Los tramites y costes necesarios para la expedición del título quedan
al cargo de EL ALUMNO, el plazo de entrega por parte de la universidad es de 3 – 6 meses desde
la finalización. El costo es del 20% del precio del curso en caso de la titulación de la universidad
europea miguel de cervantes y un 10% en caso de la Sbal university, respectivamente.

Cláusula 12: Condiciones particulares Se establecen las siguientes condiciones particulares: -
El alumno recibirá la titulación propia expedida por LA ASOCIACIÓN.

Firmas:

_________________________                      _________________________
Asociación Española para la                      ${formData.name || '[Nombre Estudiante]'}
Difusión de la Inteligencia Artificial

Fecha: ${formattedDate}
    `;
    return contractTemplate.trim(); // Trim leading/trailing whitespace
  };

 const generateStudentRecordText = (signDate: Date | null): string => {
    const formattedDate = signDate ? formatDate(signDate) : '[Fecha Pendiente]';
    const recordTemplate = `
Firmado digitalmente • ${formattedDate}
FICHA DE ALUMNO

DATOS PERSONALES
Nombre Completo: ${formData.name || ''}
Email: ${formData.email || ''}
Teléfono: ${formData.phone || ''}
DNI/NIE: ${formData.dni || ''}
Fecha de nacimiento: ${formData.dob || ''}
Dirección: ${formData.address || ''}
Código Postal: ${formData.postalCode || ''}
Población: ${formData.city || ''}
Provincia: ${formData.province || ''}

DATOS DE FACTURACIÓN
${isBillingExpanded && (formData.billingName || formData.billingNif) ? `
Nombre/Razón social: ${formData.billingName || ''}
NIF/CIF: ${formData.billingNif || ''}
Dirección fiscal: ${formData.billingAddress || ''}
Código Postal: ${formData.billingPostalCode || ''}
Población: ${formData.billingCity || ''}
Provincia: ${formData.billingProvince || ''}
País: ${formData.billingCountry || ''}
Email para facturación: ${formData.billingEmail || ''}
Teléfono de contacto: ${formData.billingPhone || ''}
` : 'No proporcionados'}

DATOS ACADÉMICOS
Curso: ${formData.selectedCourseName || formData.courseTitle || '[Curso]'}
Fecha de matrícula: ${formattedDate}
Estado: Activo
Precio: ${formData.coursePrice !== undefined ? formData.coursePrice.toFixed(2) + ' €' : '[Precio Curso]'}
Estado de pago: Pendiente (hasta confirmación de pago)
Forma de pago: Online (Redirección a pasarela)

CONSENTIMIENTO PROTECCIÓN DE DATOS
En cumplimiento de lo establecido en el RGPD, le informamos que sus datos personales serán
tratados por Asociación Española para la Difusión de la Inteligencia Artificial con la finalidad de
gestión académica, administrativa y facturación. La base legal para el tratamiento de sus datos es
la ejecución del contrato de formación.

Acepto recibir comunicaciones sobre eventos, cursos y actividades de Ebal Formacion: ${formData.acceptCommunications ? 'Sí' : 'No'}

FIRMA DEL ALUMNO
Fecha: ${formattedDate}
Firma: (Aceptado Digitalmente a través de la web)

Ficha generada por Asociación Española para la Difusión de la Inteligencia Artificial |
https://Ebal Formacion.es | administracion@Ebal Formacion.es
    `;
    return recordTemplate.trim();
 };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.contractAccepted || !signatureTimestamp) {
      setSubmitMessage('Debe leer y aceptar el contrato de formación para continuar.');
      setTimeout(() => setSubmitMessage(''), 5000);
      return;
    }

    // 🔥 TRACKING GA4 - Enviar evento antes de procesar
    trackFormSubmit({
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      form_type: 'enrollment',
      course_name: courseTitle
    });

    setIsSubmitted(true);
    setSubmitMessage('Procesando matrícula...');

    // Generate the final texts
    const finalContractText = generateContractText(signatureTimestamp);
    const finalStudentRecordText = generateStudentRecordText(signatureTimestamp);

    // Prepare payload, explicitly setting empty optional strings to null
    const processedFormData = { ...formData };
    // List of optional string fields that could be empty
    const optionalFields: (keyof typeof formData)[] = [
        'billingName', 'billingNif', 'billingAddress', 'billingPostalCode', 
        'billingCity', 'billingProvince', 'billingCountry', 'billingEmail', 'billingPhone'
    ];
    optionalFields.forEach(key => {
        if (processedFormData[key] === '') {
            // Type assertion needed here because TS doesn't know the value can be null for these specific keys
            (processedFormData as any)[key] = null;
        }
    });

    const payload = {
      ...processedFormData, // Use the processed data with nulls instead of empty strings
      contractText: finalContractText,
      studentRecordText: finalStudentRecordText,
      acceptanceTimestamp: signatureTimestamp.toISOString(),
    };

    try {
      // Send ALL data (including generated texts) to the backend
      const response = await fetch('/api/send-enrollment-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload), // Send the complete payload
      });

      if (response.ok) {
        setSubmitMessage('¡Matrícula registrada! Redirigiendo al pago...');
        window.location.href = paymentLink; // Redirect to payment
      } else {
        let errorDetail = 'Error del servidor al registrar la matrícula.';
        try {
          const errorResult = await response.json();
          errorDetail = errorResult.detail || errorDetail;
        } catch (jsonError) {
          errorDetail = response.statusText || errorDetail;
        }
        setSubmitMessage(`Error: ${errorDetail}. No se pudo completar la matrícula.`);
        setTimeout(() => setSubmitMessage(''), 5000);
        setIsSubmitted(false); // Allow retry
      }
    } catch (error) {
      console.error('Error de red o conexión:', error);
      setSubmitMessage('Error de conexión. No se pudo completar la matrícula.');
      setTimeout(() => setSubmitMessage(''), 5000);
      setIsSubmitted(false); // Allow retry
    }
  };

  // --- Render ---
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
          {/* Increase max-width and add overflow handling */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-3xl relative flex flex-col max-h-[90vh]" // Increased width, max height
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-t-lg flex-shrink-0">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <ShoppingCart className="mr-2 text-purple-600" size={20}/>
                Confirmar Matrícula: {formData.selectedCourseName || courseTitle}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                aria-label="Cerrar modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form Body - Make it scrollable */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto flex-grow"> {/* Added overflow */}

              {/* Personal Details Section */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                  <legend className="text-md font-semibold px-2 text-gray-700">Datos Personales</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                         <label htmlFor="enroll-name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                         <div className="relative">
                           <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                           <input type="text" id="enroll-name" name="name" value={formData.name} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="Tu nombre y apellidos"/>
                         </div>
                      </div>
                      {/* Email */}
                      <div>
                         <label htmlFor="enroll-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <div className="relative">
                           <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                           <input type="email" id="enroll-email" name="email" value={formData.email} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="tu@email.com"/>
                         </div>
                      </div>
                      {/* Phone */}
                       <div>
                         <label htmlFor="enroll-phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                           <input type="tel" id="enroll-phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="+34 600 000 000"/>
                         </div>
                       </div>
                      {/* DNI/NIE */}
                      <div>
                         <label htmlFor="enroll-dni" className="block text-sm font-medium text-gray-700 mb-1">DNI/NIE</label>
                         <div className="relative">
                           <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                           <input type="text" id="enroll-dni" name="dni" value={formData.dni} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="12345678Z"/>
                         </div>
                      </div>
                      {/* Date of Birth */}
                      <div>
                         <label htmlFor="enroll-dob" className="block text-sm font-medium text-gray-700 mb-1">Fecha de Nacimiento</label>
                         <div className="relative">
                           <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                           <input type="date" id="enroll-dob" name="dob" value={formData.dob} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"/>
                         </div>
                      </div>
                      {/* Address */}
                      <div className="md:col-span-2">
                         <label htmlFor="enroll-address" className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                         <div className="relative">
                           <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                           <textarea id="enroll-address" name="address" value={formData.address} onChange={handleChange} required rows={2} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="Calle, número, piso..."/>
                         </div>
                      </div>
                       {/* Postal Code */}
                       <div>
                         <label htmlFor="enroll-postalCode" className="block text-sm font-medium text-gray-700 mb-1">Código Postal</label>
                         <input type="text" id="enroll-postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="28001"/>
                      </div>
                       {/* City */}
                       <div>
                         <label htmlFor="enroll-city" className="block text-sm font-medium text-gray-700 mb-1">Población</label>
                         <input type="text" id="enroll-city" name="city" value={formData.city} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="Madrid"/>
                      </div>
                       {/* Province */}
                       <div className="md:col-span-2">
                         <label htmlFor="enroll-province" className="block text-sm font-medium text-gray-700 mb-1">Provincia</label>
                         <input type="text" id="enroll-province" name="province" value={formData.province} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="Madrid"/>
                      </div>
                  </div>
              </fieldset>

              {/* Course Selection Section */}
              {courseOptions && courseOptions.length > 0 && (
                <fieldset className="border border-gray-300 p-4 rounded-md">
                  <legend className="text-md font-semibold px-2 text-gray-700">Datos del Curso</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Course Selection */}
                    <div className="md:col-span-2">
                      <label htmlFor="course-selection" className="block text-sm font-medium text-gray-700 mb-1">
                        Selecciona la certificación
                      </label>
                      <div className="relative">
                        <select
                          id="course-selection"
                          value={formData.selectedCourse}
                          onChange={handleCourseChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 bg-white"
                          required
                        >
                          {courseOptions.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.name} - {option.price}€
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    {/* Price Display */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Precio</label>
                      <div className="flex items-center">
                        <Euro className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-lg font-semibold text-green-600">
                          {formData.coursePrice}€
                        </span>
                      </div>
                    </div>

                    {/* Course Description */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Certificación seleccionada</label>
                      <div className="p-3 bg-gray-50 rounded-md">
                        <span className="text-sm text-gray-800 font-medium">
                          {formData.selectedCourseName}
                        </span>
                      </div>
                    </div>
                  </div>
                </fieldset>
              )}

              {/* Billing Details Section (Collapsible) */}
              <div className="border border-gray-300 rounded-md">
                  <button
                      type="button"
                      onClick={() => setIsBillingExpanded(!isBillingExpanded)}
                      className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-t-md"
                  >
                      <span className="text-md font-semibold text-gray-700">Datos de Facturación (Opcional)</span>
                      {isBillingExpanded ? <ChevronUp className="h-5 w-5 text-gray-600"/> : <ChevronDown className="h-5 w-5 text-gray-600"/>}
                  </button>
                  <AnimatePresence>
                      {isBillingExpanded && (
                          <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                          >
                              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-300">
                                 {/* Billing Name */}
                                  <div>
                                      <label htmlFor="enroll-billingName" className="block text-sm font-medium text-gray-700 mb-1">Nombre/Razón Social</label>
                                      <input type="text" id="enroll-billingName" name="billingName" value={formData.billingName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                                  </div>
                                  {/* Billing NIF/CIF */}
                                  <div>
                                      <label htmlFor="enroll-billingNif" className="block text-sm font-medium text-gray-700 mb-1">NIF/CIF</label>
                                      <input type="text" id="enroll-billingNif" name="billingNif" value={formData.billingNif} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                                  </div>
                                   {/* Billing Address */}
                                  <div className="md:col-span-2">
                                      <label htmlFor="enroll-billingAddress" className="block text-sm font-medium text-gray-700 mb-1">Dirección Fiscal</label>
                                       <textarea id="enroll-billingAddress" name="billingAddress" value={formData.billingAddress} onChange={handleChange} rows={2} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"/>
                                  </div>
                                   {/* Billing Postal Code */}
                                   <div>
                                      <label htmlFor="enroll-billingPostalCode" className="block text-sm font-medium text-gray-700 mb-1">Código Postal</label>
                                      <input type="text" id="enroll-billingPostalCode" name="billingPostalCode" value={formData.billingPostalCode} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                                  </div>
                                   {/* Billing City */}
                                   <div>
                                      <label htmlFor="enroll-billingCity" className="block text-sm font-medium text-gray-700 mb-1">Población</label>
                                      <input type="text" id="enroll-billingCity" name="billingCity" value={formData.billingCity} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                                  </div>
                                  {/* Billing Province */}
                                  <div>
                                      <label htmlFor="enroll-billingProvince" className="block text-sm font-medium text-gray-700 mb-1">Provincia</label>
                                      <input type="text" id="enroll-billingProvince" name="billingProvince" value={formData.billingProvince} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                                  </div>
                                  {/* Billing Country */}
                                  <div>
                                      <label htmlFor="enroll-billingCountry" className="block text-sm font-medium text-gray-700 mb-1">País</label>
                                      {/* Consider using a select for countries if needed */}
                                      <input type="text" id="enroll-billingCountry" name="billingCountry" value={formData.billingCountry} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                                  </div>
                                   {/* Billing Email */}
                                   <div>
                                      <label htmlFor="enroll-billingEmail" className="block text-sm font-medium text-gray-700 mb-1">Email Facturación</label>
                                      <input type="email" id="enroll-billingEmail" name="billingEmail" value={formData.billingEmail} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                                  </div>
                                   {/* Billing Phone */}
                                   <div>
                                      <label htmlFor="enroll-billingPhone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono Facturación</label>
                                      <input type="tel" id="enroll-billingPhone" name="billingPhone" value={formData.billingPhone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                                  </div>
                              </div>
                          </motion.div>
                      )}
                  </AnimatePresence>
              </div>

              {/* Contract Section */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                  <legend className="text-md font-semibold px-2 text-gray-700">Contrato de Formación</legend>
                  <div
                      ref={contractTextRef}
                      className="h-48 overflow-y-scroll border border-gray-200 bg-gray-50 p-3 rounded text-xs whitespace-pre-wrap mb-3 font-mono" // Scrollable, pre-wrap
                  >
                    {generateContractText(signatureTimestamp)}
                  </div>
                  <div className="flex items-start space-x-2">
                      <input
                          type="checkbox"
                          id="enroll-contractAccepted"
                          name="contractAccepted"
                          checked={formData.contractAccepted}
                          onChange={handleContractAcceptance} // Use specific handler
                          required
                          className="mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                      />
                      <label htmlFor="enroll-contractAccepted" className="text-sm text-gray-700">
                          He leído y acepto los términos y condiciones del contrato de prestación de servicios de formación. <span className="text-red-500">*</span>
                      </label>
                  </div>
              </fieldset>

              {/* GDPR Consents Section */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                   <legend className="text-md font-semibold px-2 text-gray-700">Consentimientos</legend>
                   <div className="space-y-2">
                       <div className="flex items-start space-x-2">
                           <input type="checkbox" id="enroll-acceptCommunications" name="acceptCommunications" checked={formData.acceptCommunications} onChange={handleChange} className="mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"/>
                           <label htmlFor="enroll-acceptCommunications" className="text-sm text-gray-700">Acepto recibir comunicaciones sobre eventos, cursos y actividades de Ebal Formacion.</label>
                       </div>
                   </div>
               </fieldset>


              {/* Course Price Display (Repeated for visibility near submit) */}
              {coursePrice !== undefined && (
                <div className="p-3 bg-indigo-100 border border-indigo-200 rounded-md text-center">
                  <p className="text-md font-medium text-indigo-800">Total a Pagar: {coursePrice}€</p>
                </div>
              )}


              {/* Submit Button and Message Area */}
              <div className="pt-2"> {/* Reduced padding */}
                 {/* Success/Error Message Area */}
                 {submitMessage && (
                   <div className={`text-sm text-center mb-3 p-3 rounded-md ${submitMessage.includes('Error') || submitMessage.includes('Debe') ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                     <p className="flex items-center justify-center">
                       {submitMessage.includes('Error') || submitMessage.includes('Debe') ?
                         <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0"/> :
                         <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0"/>
                       }
                       {submitMessage}
                     </p>
                   </div>
                 )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitted || !formData.contractAccepted} // Also disable if contract not accepted
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  {isSubmitted ? 'Procesando...' : 'Confirmar y Pagar'}
                </button>
              </div>
            </form> {/* End Form */}

             {/* Footer Info (Optional) */}
             <div className="p-4 text-center text-xs text-gray-500 border-t border-gray-200 flex-shrink-0">
                 Serás redirigido a una pasarela de pago segura (SumUp).
             </div>

          </motion.div> {/* End Modal Content */}
        </motion.div> /* End Overlay */
      )}
    </AnimatePresence>
  );
};

export default EnrollmentModal; 