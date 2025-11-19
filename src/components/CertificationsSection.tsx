import { Clock, Award, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CertificationsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-center text-gray-800 mb-12 font-nunito">Certificaciones Cloud</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Azure Certification Card */}
          <div className="relative p-2">
            <div className="absolute inset-0 bg-blue-300 rounded-lg transform rotate-[-1deg] z-0"></div>
            <Link 
              to="/certificaciones"
              className="relative z-10 block group overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src="https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png" 
                    alt="AZ-900 Azure Fundamentals" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-black bg-opacity-60 text-white text-xs font-semibold px-2 py-1 rounded">
                    CERTIFICACIÓN
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">AZ-900 Azure Fundamentals</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-purple-600" />
                      <span>40-60 horas</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-600" />
                      <span>Microsoft Azure</span>
                    </div>
                    <div className="flex items-center">
                      <Info className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="font-semibold text-lg text-gray-800">129€</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Obtén conocimientos fundamentales sobre los servicios de nube y cómo se proporcionan con Microsoft Azure.
                  </p>
                  <div className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Ver detalles <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* AWS Certification Card */}
          <div className="relative p-2">
            <div className="absolute inset-0 bg-orange-300 rounded-lg transform rotate-[1deg] z-0"></div>
            <Link 
              to="/certificaciones"
              className="relative z-10 block group overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src="https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" 
                    alt="AWS Cloud Practitioner" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-black bg-opacity-60 text-white text-xs font-semibold px-2 py-1 rounded">
                    CERTIFICACIÓN
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">AWS Cloud Practitioner</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-purple-600" />
                      <span>30-50 horas</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-600" />
                      <span>Amazon Web Services</span>
                    </div>
                    <div className="flex items-center">
                      <Info className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="font-semibold text-lg text-gray-800">129€</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Valida tu conocimiento general de la nube de AWS y demuestra tu comprensión de los servicios fundamentales.
                  </p>
                  <div className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Ver detalles <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;