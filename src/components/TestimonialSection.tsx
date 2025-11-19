import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Added Autoplay

const testimonials = [
  {
    name: 'Francisco Clemente Fernández',
    role: 'Alumno Bootcamp AI Engineer',
    image: '/assets/franclemente.jpg',
    linkedin: 'https://www.linkedin.com/in/franciscoclementefernandez/',
    quote: 'Gracias al bootcamp de Ebal Formacion he dado el salto profesional que buscaba en IA. El acompañamiento y los proyectos reales marcan la diferencia.',
    rating: 5,
  },
  {
    name: 'Natalio Altube',
    role: 'Alumno Bootcamp AI Engineer',
    image: '/assets/natalio.jpg',
    linkedin: 'https://www.linkedin.com/in/natalio-altube/',
    quote: 'La formación es muy práctica y el networking con otros alumnos y profesores es brutal. Ahora trabajo en proyectos de IA que me apasionan.',
    rating: 5,
  },
  {
    name: 'Iván Dapena Morillo',
    role: 'Alumno Máster AI Engineer',
    image: '/assets/ivan.jpg',
    linkedin: 'https://www.linkedin.com/in/iv%C3%A1n-dapena-morillo/',
    quote: 'El bootcamp me ha dado la confianza y los conocimientos para liderar proyectos de IA. Lo recomiendo totalmente.',
    rating: 5,
  },
  {
    name: 'Francisco Jose Parejo',
    role: 'Alumno Bootcamp AI Engineer',
    image: '/assets/fran.jpg',
    linkedin: 'https://www.linkedin.com/in/franciscoparjim-data-engineer-ia/',
    quote: 'Ebal Formacion me ha abierto las puertas al mundo de la inteligencia artificial aplicada. El temario y los tutores son de primer nivel.',
    rating: 5,
  },
  {
    name: 'Fernando Cano',
    role: 'Empresario y Director de Proyectos IA - Alumno Máster',
    image: '/assets/fcm.jpg',
    linkedin: 'https://www.linkedin.com/in/fernando-cano-mora/',
    quote: 'Como empresario, el bootcamp de Ebal Formacion me ha permitido liderar proyectos de IA en mi empresa con seguridad y visión estratégica. Es la mejor inversión para cualquier directivo.',
    rating: 5,
  },
  {
    name: 'Fede Caruso',
    role: 'Alumno Bootcamp AI Engineer',
    image: '/assets/fede.jpg',
    linkedin: 'https://www.linkedin.com/in/fede-caruso-0a5079246/',
    quote: 'El enfoque práctico y el apoyo de los tutores me ayudaron a entender la IA desde cero y aplicarla en mi trabajo diario.',
    rating: 5,
  },
  {
    name: 'Victor Ortin',
    role: 'Especialista en IA No Code',
    image: '/assets/victor.jpg',
    linkedin: 'https://www.linkedin.com/in/victor-ortin-montiel-10649834b/',
    quote: 'El bootcamp de Ebal Formacion es ideal para quienes quieren dominar la IA sin necesidad de programar. La parte de No Code es brutal.',
    rating: 5,
  },
  {
    name: 'Juan Carlos Loayza',
    role: 'Alumno Bootcamp AI Engineer',
    image: '/assets/jcl.jpg',
    linkedin: 'https://www.linkedin.com/in/juan-carlos-loayza-vaca-423646163/',
    quote: 'La experiencia en el bootcamp ha sido transformadora. Ahora puedo aportar soluciones de IA en mi empresa y seguir creciendo profesionalmente.',
    rating: 5,
  }
];

const TestimonialSection = () => {
  // Removed useState for currentIndex and direction

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Adjusted title style */}
        <h2 className="text-3xl font-medium text-center text-gray-800 mb-12 font-nunito">Lo Que Dicen Nuestros Alumnos</h2>
        
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]} // Added Autoplay module
            spaceBetween={30} // Space between slides
            slidesPerView={1} // Default slides per view (mobile)
            loop={true} // Enable looping
            centeredSlides={true} // Center active slide (especially useful for 1 slide view)
            autoplay={{ // Added autoplay configuration
              delay: 5000, // Delay between transitions (5 seconds)
              disableOnInteraction: false, // Autoplay continues after user interaction
            }}
            pagination={{
              clickable: true, // Allow clicking on pagination dots
              dynamicBullets: true, // Make pagination dots dynamic size
            }}
            navigation={true} // Enable navigation arrows
            breakpoints={{
              // when window width is >= 768px (md)
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false, // Don't center when more than 1 slide visible
              },
              // when window width is >= 1024px (lg)
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                centeredSlides: false,
              },
            }}
            className="mySwiper" // Custom class for potential specific styling
            style={{
              // Override default Swiper navigation button colors
              '--swiper-navigation-color': '#6D28D9', // Purple color for arrows
              '--swiper-pagination-color': '#6D28D9', // Purple color for pagination
            } as React.CSSProperties}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name} className="h-auto pb-10"> {/* Added pb-10 for pagination space */}
                {/* Testimonial Card Content */}
                <div className="bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col"> {/* Ensure full height for flex */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-purple-100" // Smaller image
                    />
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic mb-4 text-base flex-grow"> {/* Adjusted text size, added flex-grow */}
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-auto pt-4 border-t border-gray-100"> {/* Push name/role to bottom */}
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">
                      {testimonial.role}, {testimonial.linkedin}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;