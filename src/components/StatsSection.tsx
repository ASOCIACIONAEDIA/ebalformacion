import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface StatProps {
  end: number;
  suffix?: string;
  title: string;
  delay?: number;
}

const Stat = ({ end, suffix = '', title, delay = 0 }: StatProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    let timeout: number;
    let animationId: number;

    if (inView) {
      // En producción, mostrar el valor final directamente para evitar re-renders
      if (import.meta.env.PROD && import.meta.env.VITE_DISABLE_ANIMATIONS === 'true') {
        setCount(end);
        return;
      }

      timeout = window.setTimeout(() => {
        let startTime: number;
        const duration = 2000;

        const animateCount = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const currentCount = Math.floor(progress * end);

          setCount(currentCount);

          if (progress < 1) {
            animationId = window.requestAnimationFrame(animateCount);
          } else {
            setCount(end);
          }
        };

        animationId = window.requestAnimationFrame(animateCount);
      }, delay);
    }

    return () => {
      if (timeout) window.clearTimeout(timeout);
      if (animationId) window.cancelAnimationFrame(animationId);
    };
  }, [inView, end, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600">{title}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">La filosofía Ebal Formacion</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transformamos profesionales a través de formación especializada en Inteligencia Artificial y SAP,
              impulsando el éxito empresarial con soluciones tecnológicas de vanguardia.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-1"
        >
          <div className="bg-white rounded-xl py-10 px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Stat end={15} suffix="+" title="Años de Experiencia" delay={0} />
              <Stat end={1000} suffix="+" title="Profesionales Formados" delay={200} />
              <Stat end={50} suffix="+" title="Proyectos Completados" delay={400} />
              <Stat end={95} suffix="%" title="Satisfacción Cliente" delay={600} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;