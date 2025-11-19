import { motion } from 'framer-motion';
import { Clock, Award, Users, BookOpen, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 'ia-educacion',
    title: 'IA para la Educación',
    description: 'Transforma la educación con herramientas de IA avanzadas',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg',
    duration: '3 meses',
    level: 'Intermedio',
    students: '500+',
    price: '€420',
    bonificable: true
  },
  {
    id: 'ia-aplicaciones',
    title: 'Desarrollo de Aplicaciones IA',
    description: 'Crea aplicaciones innovadoras con IA',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    duration: '4 meses',
    level: 'Avanzado',
    students: '300+',
    price: '€420',
    bonificable: true
  },
  {
    id: 'ia-nocode',
    title: 'IA con Herramientas NoCode',
    description: 'Crea chatbots, automatiza procesos y genera contenido multimedia sin programar',
    image: '/assets/noc.png',
    duration: '12 semanas',
    level: 'Básico',
    students: '750+',
    price: '€420',
    bonificable: true
  },
  {
    id: 'ia-marketing',
    title: 'Marketing Digital con IA',
    description: 'Potencia tus estrategias de marketing con IA',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
    duration: '3 meses',
    level: 'Intermedio',
    students: '600+',
    price: '€420',
    bonificable: true
  },
];

// Testimonios de alumnos
const testimonials = [
  {
    name: 'María del Rosario Méndez Martínez',
    role: 'Alumna Máster en Inteligencia Artificial',
    image: '/assets/mr.jpg',
    linkedin: 'https://www.linkedin.com/in/maria-del-rosario-m%C3%A9ndez-mart%C3%ADnez-602819a1/',
    quote: 'Cursar el Máster en Inteligencia Artificial ha sido una experiencia profundamente enriquecedora. El enfoque multidisciplinar —con bases técnicas sólidas, visión ética y orientación práctica— me ha permitido integrar la IA de manera realista y efectiva en mi entorno sanitario. Quiero destacar el acompañamiento de mi tutor, cuyo compromiso, claridad y cercanía fueron claves en el desarrollo de mi Trabajo de Fin de Máster.',
    rating: 5
  },
  {
    name: 'Raquel Gómez Sart',
    role: 'Alumna IA Aplicada No-Code',
    image: '/assets/rg.jpg',
    linkedin: 'https://www.linkedin.com/in/raquelgomezsartmarketing/',
    quote: 'Estoy realmente contenta con este curso de IA aplicada no-code. Desde automatizar tareas hasta optimizar procesos, todo sin tener que escribir una sola línea de código. Es impresionante lo que se puede lograr con solo unos clics. Las lecciones son prácticas y fáciles de seguir, lo que hace que aprender sea un proceso muy fluido.',
    rating: 5
  },
  {
    name: 'Giorgio Marín',
    role: 'Alumno IA Aplicada No-Code',
    image: '/assets/gio.jpg',
    linkedin: 'https://www.linkedin.com/in/giomarinsaccoccia/',
    quote: 'Este curso de IA aplicada no-code ha sido una grata sorpresa. He podido automatizar tareas y mejorar procesos sin necesidad de escribir código, ¡y todo con solo unos clics! Las lecciones son claras, directas y fáciles de seguir, lo que hace todo mucho más sencillo.',
    rating: 5
  }
];

const BonificableCourses = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cursos Bonificables de IA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formación especializada en inteligencia artificial con certificación oficial y 100% bonificable para empresas a través de FUNDAE.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/curso/${course.id}`} className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full">
                      <span className="font-semibold text-purple-600">{course.price}</span>
                    </div>
                    {course.bonificable && (
                      <div className="absolute bottom-4 right-4 bg-green-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs font-medium text-white">100% Bonificable</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-purple-600 mr-2" />
                        <span className="text-sm text-gray-600">{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-purple-600 mr-2" />
                        <span className="text-sm text-gray-600">{course.level}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-purple-600 mr-2" />
                        <span className="text-sm text-gray-600">{course.students}</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-5 w-5 text-purple-600 mr-2" />
                        <span className="text-sm text-gray-600">Certificado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonios de Alumnos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Lo Que Dicen Nuestros Alumnos
            </h2>
            <p className="text-xl text-gray-600">
              Historias reales de transformación profesional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col items-center"
              >
                <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-purple-500 hover:scale-105 transition-transform"
                  />
                </a>
                <h4 className="font-semibold text-gray-800 text-lg mb-1 text-center">
                  <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline text-purple-700 flex items-center justify-center gap-1">
                    {testimonial.name}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="inline-block ml-1 text-blue-600"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.532 0-1.768 1.197-1.768 2.434v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v4.73z"/></svg>
                  </a>
                </h4>
                <p className="text-sm text-purple-600 mb-2 text-center">{testimonial.role}</p>
                <div className="flex mb-3 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic text-center text-sm leading-relaxed">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Preguntas Frecuentes IA NoCode */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Preguntas Frecuentes sobre IA con Herramientas NoCode</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">1. ¿Qué aprenderé en el curso de IA con herramientas NoCode?</h3>
              <p className="text-gray-700 text-sm md:text-base">Aprenderás a crear chatbots inteligentes, asistentes de voz con VAPI, automatizar procesos con Make y n8n, generar contenido multimedia (videos, música, infografías), desarrollar webs con SEO optimizado y construir aplicaciones completas sin escribir código.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">2. ¿Qué herramientas específicas dominaré?</h3>
              <p className="text-gray-700 text-sm md:text-base">Trabajarás con ChatGPT, Midjourney, VAPI, Make, n8n, Framer, b12.io, Gamma, Suno AI, websim.ai, Vercel, Bolt.new y muchas otras herramientas de vanguardia para crear soluciones profesionales de IA.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">3. ¿Podré crear chatbots y automatizaciones empresariales?</h3>
              <p className="text-gray-700 text-sm md:text-base">Sí, aprenderás a crear chatbots con integración a Google Calendar y Sheets, asistentes de voz profesionales, automatizar publicaciones en redes sociales, envío de emails, recordatorios y flujos de trabajo empresariales complejos.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">4. ¿Incluye creación de contenido multimedia y aplicaciones web?</h3>
              <p className="text-gray-700 text-sm md:text-base">Sí, dominarás la generación de presentaciones profesionales, infografías, videos automatizados, música con IA, creación de influencers virtuales y desarrollo de aplicaciones web completas con herramientas como Framer y Bolt.new.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">5. ¿Es bonificable y incluye certificación universitaria?</h3>
              <p className="text-gray-700 text-sm md:text-base">Sí, el curso es 100% bonificable a través de FUNDAE y al finalizar recibirás una certificación universitaria oficial de Ebal Formacion y universidades colaboradoras que acredita tus competencias en IA NoCode.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BonificableCourses;