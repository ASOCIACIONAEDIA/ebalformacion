import React from 'react';
import PricingCard from './PricingCard'; // Import the card component
import { motion } from 'framer-motion';

// Define the pricing plans data
const pricingPlans = [
  {
    title: 'Demo gratis',
    description: 'Descubre la plataforma sin compromiso.',
    price: 'Gratis',
    features: [
      'Prueba de 5 días del plan Estudiante',
      'Acceso a cursos básicos seleccionados',
      'Asistencia limitada del tutor IA'
    ],
    buttonText: 'Probar Gratis',
    buttonColor: 'bg-gray-700 hover:bg-gray-800 text-white' // Dark button for free tier
  },
  {
    title: 'Estudiante',
    description: 'Ideal para comenzar tu viaje en IA.',
    price: '$49',
    priceSuffix: '/mes',
    features: [
      'Acceso a todos los niveles',
      'Asistencia del tutor IA',
      'Ejercicios prácticos',
      'Acceso al foro de la comunidad',
      'Título de Experto en Programación de IA con Python expedido por Ebal Formacion'
    ],
    buttonText: 'Comenzar a Aprender',
    buttonColor: 'bg-indigo-600 hover:bg-indigo-700 text-white'
  },
  {
    title: 'Profesional',
    description: 'Para profesionales que buscan dominar la IA.',
    price: '$79',
    priceSuffix: '/mes',
    features: [
      'Acceso a todos los niveles',
      'Acceso a modelos avanzados (Llama, Claude)',
      'Soporte prioritario del tutor IA',
      'Proyectos del mundo real',
      'Mentoría personalizada (opcional)',
      'Soporte por Email de profesionales del sector',
      'Bolsa de empleo y prácticas',
      'Certificado universitario expedido por: Universidad Europea Miguel de Cervantes o Sabal University, *Nota: Tasas de expedicion de titulo universitarios no incluidas 125€',
      'Master class de Curriculums optimos y LinkedIn'
    ],
    buttonText: 'Hazte Pro',
    isRecommended: true,
    buttonColor: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    borderColor: 'border-indigo-600'
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-50"> {/* Match background of other sections */}
      <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            {/* Use font-nunito for titles */}
            <h2 className="text-3xl font-semibold mb-3 font-nunito text-gray-900">Planes de Precios Claros</h2> 
            <p className="text-lg text-gray-600">
              Elige el plan que mejor se adapte a tus necesidades de aprendizaje. Sin costes ocultos.
            </p>
          </motion.div>
        
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"> {/* Use items-stretch for equal height */}
          {pricingPlans.map((plan, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                className="h-full" // Ensure motion div takes full height for stretching
             >
               <PricingCard plan={plan} />
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 