import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { clsx } from "clsx";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
}

export function AnimatedTestimonials({ testimonials }: AnimatedTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-xl">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className={clsx(
            "absolute inset-0 w-full h-full",
            "flex flex-col justify-center items-center p-8"
          )}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 0.8,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Imagen de fondo */}
          <div className="absolute inset-0 z-0">
            <img
              src={testimonial.src}
              alt={`Captura de pantalla ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>

          {/* Contenido del testimonio */}
          <div className="relative z-10 text-center text-white max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
                y: index === currentIndex ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <blockquote className="text-lg md:text-xl font-medium mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
                y: index === currentIndex ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm md:text-base opacity-90"
            >
              <div className="font-semibold">{testimonial.name}</div>
              <div className="opacity-75">{testimonial.designation}</div>
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Indicadores de navegación */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={clsx(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-white scale-110"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            )}
          />
        ))}
      </div>
    </div>
  );
} 