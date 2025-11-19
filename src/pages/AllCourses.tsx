import CourseCard from '../components/CourseCard';
import { bonificableCourses, programmingCourses } from '../data/courses'; // Import data
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Award, Info, GraduationCap, Zap, CreditCard } from 'lucide-react'; // Added more icons

// Component for course card content
const CourseCardContent = ({ course, priceDisplay }: { 
  course: any, 
  priceDisplay: string
}) => {

  return (
    <div className="flex flex-col md:flex-row items-stretch">
      {/* Image Container */}
      <div className="relative md:w-2/5 flex-shrink-0 overflow-hidden">
        <img 
          src={course.imageUrl} 
          alt={course.title} 
          className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute top-3 right-3 bg-black bg-opacity-60 text-white text-xs font-semibold px-2 py-1 rounded">
          {course.id === 'bootcamp-ai-engineer' ? 'BOOTCAMP' : 'CURSO PROGRAMACIÓN'}
        </div>
      </div>
      
      {/* Text Content Container */}
      <div className="p-5 flex flex-col flex-grow md:w-3/5">
        <h3 className="text-xl font-medium text-gray-900 mb-3 font-nunito">{course.title}</h3>
        
        {/* Basic Course Info */}
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-purple-600" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Award className="w-4 h-4 mr-2 text-purple-600" />
            <span>Certificación: {course.certification}</span>
          </div>
          <div className="flex items-center">
            <GraduationCap className="w-4 h-4 mr-2 text-green-600" />
            <span>{course.fundaeInfo}</span>
          </div>
        </div>
        
        {/* Price/Plan Display */}
        <div className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
          <Info className="w-4 h-4 mr-2 text-blue-600" />
          <span>{priceDisplay}</span>
        </div>
        
        {/* Description Sections Container */}
        <div className="mt-4 flex-grow space-y-3">
          {/* Preparation Info */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-1 text-sm">Para qué te prepara:</h4>
            <p className="text-sm text-gray-600">{course.shortDescription}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};






const AllCourses = () => {
  return (
    <div className="container mx-auto px-4 py-16 pt-28"> {/* Added pt-28 to account for fixed navbar */}
      
      {/* Bonificable Courses Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-light text-center text-gray-800 mb-10 font-nunito">Cursos Bonificables</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Use imported bonificableCourses data */}
          {bonificableCourses.map((course, index) => {
            let priceDisplay = course.price ? `${course.price}€` : course.financingInfo || 'Consultar Precio';
            if (course.isBonificable && !course.price) {
              priceDisplay = course.fundaeInfo || 'Consultar Precio';
            }
            // Determine accent color based on index
            const accentBgColor = index % 2 === 0 ? 'bg-yellow-300' : 'bg-sky-300';
            return (
              <CourseCard 
                key={course.id} 
                id={course.id}
                title={course.title}
                imageUrl={course.imageUrl}
                duration={course.duration}
                certification={course.certification}
                priceDisplay={priceDisplay}
                fundaeInfo={course.fundaeInfo}
                preparationInfo={course.shortDescription}
                type={course.type} 
                accentColor={accentBgColor} // Pass the accent color
              />
            );
          })}
        </div>
      </section>

      {/* Programming Courses Section */}
      <section>
        <h2 className="text-3xl font-light text-center text-gray-800 mb-10 font-nunito">Cursos de Programación</h2>
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {programmingCourses.map((course, index) => {
            let priceDisplay = course.price ? `${course.price}€` : course.financingInfo || 'Consultar Plan';
            if (!course.price) {
              priceDisplay = course.financingInfo || 'Consultar Plan';
            }
            
            // Determine accent color based on index
            const accentColors = ['bg-indigo-300', 'bg-yellow-300', 'bg-green-300', 'bg-pink-300'];
            const programmingAccentColor = accentColors[index % accentColors.length];
            
            const courseLink = `/curso/${course.id}`;

            return (
              <div key={course.id} className="relative p-2">
                {/* Rotated Background Accent */}
                <div className={`absolute inset-0 rounded-lg transform rotate-[-2deg] z-0 ${programmingAccentColor}`}></div>
                
                {/* Course Card */}
                <Link
                  to={courseLink}
                  className="relative z-10 block group overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                >
                  <CourseCardContent course={course} priceDisplay={priceDisplay} />
                </Link>
              </div>
            );
          })}
          {programmingCourses.length === 0 && (
            <p className="text-center text-gray-500">Próximamente nuevos cursos de programación.</p>
          )}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-light text-center text-gray-800 mb-10 font-nunito">Certificaciones Cloud</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Azure Certification Card */}
          <div className="relative p-2">
            <div className="absolute inset-0 bg-blue-300 rounded-lg transform rotate-[-1deg] z-0"></div>
            <div className="relative z-10 block group overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-stretch">
                <div className="relative md:w-2/5 flex-shrink-0 overflow-hidden">
                  <img 
                    src="https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png" 
                    alt="AZ-900 Azure Fundamentals" 
                    className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute top-3 right-3 bg-black bg-opacity-60 text-white text-xs font-semibold px-2 py-1 rounded">
                    CERTIFICACIÓN
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow md:w-3/5">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 font-nunito">AZ-900 Azure Fundamentals</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-purple-600" />
                      <span>40-60 horas</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-600" />
                      <span>Certificación: Microsoft Azure</span>
                    </div>
                    <div className="flex items-center">
                      <Info className="w-4 h-4 mr-2 text-blue-600" />
                      <span>129€</span>
                    </div>
                  </div>
                  <div className="mt-4 flex-grow">
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Para qué te prepara:</h4>
                    <p className="text-sm text-gray-600">Obtén conocimientos fundamentales sobre los servicios de nube y cómo se proporcionan con Microsoft Azure.</p>
                  </div>
                  <Link 
                    to="/certificaciones"
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Ver detalles <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* AWS Certification Card */}
          <div className="relative p-2">
            <div className="absolute inset-0 bg-orange-300 rounded-lg transform rotate-[1deg] z-0"></div>
            <div className="relative z-10 block group overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-stretch">
                <div className="relative md:w-2/5 flex-shrink-0 overflow-hidden">
                  <img 
                    src="https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" 
                    alt="AWS Cloud Practitioner" 
                    className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute top-3 right-3 bg-black bg-opacity-60 text-white text-xs font-semibold px-2 py-1 rounded">
                    CERTIFICACIÓN
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow md:w-3/5">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 font-nunito">AWS Cloud Practitioner (CLF-C01)</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-purple-600" />
                      <span>30-50 horas</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-600" />
                      <span>Certificación: Amazon Web Services</span>
                    </div>
                    <div className="flex items-center">
                      <Info className="w-4 h-4 mr-2 text-blue-600" />
                      <span>129€</span>
                    </div>
                  </div>
                  <div className="mt-4 flex-grow">
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Para qué te prepara:</h4>
                    <p className="text-sm text-gray-600">Valida tu conocimiento general de la nube de AWS y demuestra tu comprensión de los servicios fundamentales.</p>
                  </div>
                  <Link 
                    to="/certificaciones"
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Ver detalles <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ - Preguntas Frecuentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">1. ¿Qué significa que un curso sea bonificable con FUNDAE?</h3>
              <p className="text-gray-700 text-sm md:text-base">Los cursos bonificables permiten a las empresas recuperar parte o la totalidad del importe invertido en formación a través de los créditos de FUNDAE, facilitando la capacitación de sus empleados a bajo coste.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">2. ¿Qué tipo de certificación obtengo al finalizar un curso?</h3>
              <p className="text-gray-700 text-sm md:text-base">Todos los cursos ofrecen una certificación oficial, ya sea de Ebal Formacion, Sabal University o ambas, dependiendo del curso seleccionado. Consulta la ficha de cada curso para más detalles.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">3. ¿Puedo realizar varios cursos a la vez?</h3>
              <p className="text-gray-700 text-sm md:text-base">Sí, puedes inscribirte en tantos cursos como desees, adaptando tu ritmo de aprendizaje a tus necesidades y disponibilidad.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AllCourses; 