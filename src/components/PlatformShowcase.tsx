import { AnimatedTestimonials } from "./ui/animated-testimonials";

const platformShowcaseData = [
  {
    quote: "Learning Games (gamificación) - Aprende jugando con nuestros juegos interactivos organizados por curso. 25 juegos disponibles para cada módulo.",
    name: "Juegos de Aprendizaje",
    designation: "Gamificación del aprendizaje",
    src: "/assets/Captura de pantalla 2025-07-17 083145.jpg"
  },
  {
    quote: "Progreso en Tiempo Real (métricas) - Seguimiento detallado de tu evolución con métricas personalizadas. Tiempo de estudio, lecciones completadas y medallas obtenidas.",
    name: "Progreso en Tiempo Real",
    designation: "Métricas personalizadas",
    src: "/assets/Captura de pantalla 2025-07-17 083330.jpg"
  },
  {
    quote: "Notificaciones Inteligentes (recordatorios) - Sistema de alertas automáticas que te mantienen al día con tu progreso y próximas actividades programadas.",
    name: "Notificaciones Inteligentes",
    designation: "Recordatorios automáticos",
    src: "/assets/Captura de pantalla 2025-07-17 083355.jpg"
  },
  {
    quote: "Contacto Directo con Tutores (chat integrado) - Asistente de lección disponible 24/7 para resolver dudas específicas sobre cada tema del curso.",
    name: "Contacto Directo con Tutores",
    designation: "Chat integrado",
    src: "/assets/Captura de pantalla 2025-07-17 083415.jpg"
  },
  {
    quote: "Calendario de Avances Recomendados - Planificación inteligente que muestra cuándo comenzar cada módulo y los eventos programados para optimizar tu aprendizaje.",
    name: "Calendario Inteligente",
    designation: "Planificación optimizada",
    src: "/assets/Captura de pantalla 2025-07-17 085549.jpg"
  },
  {
    quote: "Dashboard Personalizado - Resumen completo de tu progreso general, medallas obtenidas y sesión activa. Todo en una vista clara y organizada.",
    name: "Dashboard Personalizado",
    designation: "Vista completa de progreso",
    src: "/assets/Captura de pantalla 2025-07-17 085614.jpg"
  },
  {
    quote: "Tutor AI - Asistente inteligente que te acompaña en cada lección, resolviendo dudas y proporcionando ejemplos adicionales para mejorar tu comprensión.",
    name: "Tutor AI",
    designation: "Asistente de lección",
    src: "/assets/Captura de pantalla 2025-07-17 083122.jpg"
  }
];

export function PlatformShowcase() {
  return (
    <div className="w-full">
      <AnimatedTestimonials testimonials={platformShowcaseData} />
    </div>
  );
} 