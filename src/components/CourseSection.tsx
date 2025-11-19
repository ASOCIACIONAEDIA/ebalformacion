
import { Clock, Award, Info, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { bonificableCourses } from '../data/courses';

// Mostrar todos los cursos bonificables relevantes, incluyendo IA Fundamentals y Desconexión Digital
const featuredCourseIds = ['ia-marketing', 'ia-educacion', 'ia-fundamentals', 'desconexion-digital'];
const featuredCourses = bonificableCourses.filter(course => 
  featuredCourseIds.includes(course.id)
);

const CourseSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-center text-gray-800 mb-12 font-nunito">Nuestros Cursos Bonificables</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <Link 
              to={course.id === 'ia-fundamentals' ? '/ia-fundamentals' : course.id === 'desconexion-digital' ? '/desconexion-digital' : `/curso/${course.id}`} 
              key={course.id} 
              className="block group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-[500px]">
                <img 
                  src={course.imageUrl} 
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm">
                       CURSO BONIFICABLE
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3">{course.title}</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>Certificación: {course.certification}</span>
                      </div>
                       <div className="flex items-center">
                         <Info className="h-4 w-4 mr-2 flex-shrink-0 text-blue-300" />
                         <span>{typeof course.price === 'number' ? `${course.price}€` : (course.financingInfo || 'Consultar')}</span>
                       </div>
                      <div className="flex items-center text-green-300 font-medium">
                        <GraduationCap className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{course.fundaeInfo}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;