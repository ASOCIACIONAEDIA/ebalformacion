import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react'; // Removed ImageIcon, VideoIcon - not needed if showing media

interface AICourseTipSectionProps {
  courseId: string;
}

// Placeholder content - USER MUST ENSURE THESE FILES EXIST AT THESE PATHS
const courseTips: { [key: string]: { mediaUrl: string; tipText: string; mediaType: 'gif' | 'video' } } = {
  'ia-educacion': { 
    mediaUrl: '/assets/v1.mp4', // Updated path to user video
    tipText: 'Tip: Usa IA para crear cuestionarios adaptativos que ajusten la dificultad según el progreso del estudiante.',
    mediaType: 'video' // Updated type
  },
  'ia-aplicada-nocode': {
    mediaUrl: '/assets/v2.mp4', // Updated path to user video
    tipText: 'Tip: Explora herramientas NoCode como Zapier o Make para automatizar tareas repetitivas conectando APIs de IA.',
    mediaType: 'video' // Updated type
  },
  'ia-marketing': {
    mediaUrl: '/assets/v4.mp4', // Updated path to user video
    tipText: 'Tip: Utiliza herramientas de IA para analizar el sentimiento en redes sociales y ajustar tus campañas de marketing.',
    mediaType: 'video' // Updated type
  },
  'ia-fundamentals': {
    mediaUrl: '/assets/fundamentals.mp4', // Video específico para IA Fundamentals
    tipText: 'Tip: Comienza con proyectos pequeños y escalables. Domina los fundamentos antes de intentar proyectos complejos.',
    mediaType: 'video'
  },
  'default': {
    mediaUrl: '/assets/tips/ai-general-tip.gif', // Keep placeholder gif for default
    tipText: 'Tip General: Mantente al día con los últimos avances en IA leyendo blogs especializados y papers de investigación.',
    mediaType: 'gif' 
  }
};

const AICourseTipSection: React.FC<AICourseTipSectionProps> = ({ courseId }) => {
  const tipContent = courseTips[courseId] || courseTips['default'];

  // Basic check if media URL seems valid (contains a dot for extension)
  // This is a weak check, the file must actually exist at the path for it to render.
  const isValidMediaUrl = tipContent.mediaUrl && tipContent.mediaUrl.includes('.');

  return (
    <section className="py-16 bg-gray-100"> 
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 md:pl-8 md:pr-8 md:pt-8 rounded-xl shadow-lg border border-gray-200 flex flex-col md:flex-row items-center gap-6 md:gap-8 relative overflow-visible"
        >
          {/* Media Element (GIF or Video) - Attempt to render */}
          {isValidMediaUrl ? (
            <div className="flex-shrink-0 w-full md:w-2/5 lg:w-1/2 md:-ml-12 md:-mt-12 md:mb-[-3rem] z-10">
              {tipContent.mediaType === 'gif' ? (
                <img 
                  src={tipContent.mediaUrl} 
                  alt={`Consejo IA para ${courseId}`} 
                  className="rounded-lg object-cover w-full h-auto max-h-64 border border-gray-200 bg-gray-100 shadow-xl" // Increased max-h, added shadow-xl
                  // Optional: Add onError handler to show placeholder if image fails
                  // onError={(e) => (e.currentTarget.style.display = 'none')} // Example: Hide broken image
                />
              ) : (
                <video 
                  src={tipContent.mediaUrl} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="rounded-lg object-cover w-full h-auto max-h-64 border border-gray-200 bg-gray-100 shadow-xl" // Increased max-h, added shadow-xl
                  // Optional: Add onError handler
                >
                  Tu navegador no soporta videos HTML5.
                </video>
              )}
            </div>
          ) : (
             // Fallback placeholder if URL is invalid format (e.g., empty string)
             <div className="flex-shrink-0 w-full md:w-2/5 lg:w-1/2 h-48 md:h-64 bg-gray-200 rounded-lg border border-gray-300 flex flex-col items-center justify-center text-gray-500 md:-ml-12 md:-mt-12 md:mb-[-3rem] z-10">
               <Lightbulb className="h-12 w-12 mb-2 opacity-50" />
               <span className="text-sm text-center px-2">Contenido multimedia no disponible</span>
             </div>
           )}

          {/* Text Content - Adjusted padding/margin for overlap */}
          <div className="flex-grow text-center md:text-left md:pl-4 lg:pl-8">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <Lightbulb className="h-6 w-6 text-yellow-500 mr-2" />
              <h3 className="text-xl font-medium text-gray-800 font-nunito">Consejo IA del Curso</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {tipContent.tipText}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AICourseTipSection; 