import { Clock, Award, Info, GraduationCap, Zap, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define the type for course props
type CourseCardProps = {
  id: string; // For the link
  title: string;
  imageUrl: string;
  duration: string; // e.g., "3 MESES"
  certification: string; // e.g., "Ebal Formacion & SABAL UNIVERSITY"
  priceDisplay: string; // Changed from price: number
  fundaeInfo: string; // e.g., "100% Bonificable con FUNDAE"
  preparationInfo: string; // Content for "Para qué te prepara"
  type: 'bonificable' | 'programacion'; // To potentially style or filter later
  viableSystemInfo?: string; // Optional: Info about Viable System
  subscriptionDetails?: string; // Optional: Subscription details
  accentColor?: string; // Optional: Tailwind bg class for the accent (e.g., 'bg-yellow-300')
};

const CourseCard = ({ 
  id, 
  title, 
  imageUrl, 
  duration, 
  certification, 
  priceDisplay, // Use priceDisplay
  fundaeInfo,
  preparationInfo,
  type,
  viableSystemInfo, // Destructure new props
  subscriptionDetails, // Destructure new props
  accentColor // Destructure new prop
}: CourseCardProps) => {
  
  return (
    // Wrapper div to contain the background element
    <div className="relative p-2"> {/* Added relative positioning and padding */}
      {/* Rotated Background Accent - Conditionally rendered */}
      {accentColor && (
        <div className={`absolute inset-0 rounded-lg transform rotate-[-2deg] z-0 ${accentColor}`}></div>
      )}
      {/* Main Card Link - Must be relative and have z-index */}
      <Link 
        to={`/curso/${id}`} 
        className="relative z-10 block group overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute top-3 right-3 bg-black bg-opacity-60 text-white text-xs font-semibold px-2 py-1 rounded">
            {type === 'bonificable' ? 'CURSO BONIFICABLE' : 'CURSO PROGRAMACIÓN'}
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-medium text-gray-900 mb-3 font-nunito">{title}</h3>
          
          <div className="space-y-2 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-purple-600" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-purple-600" />
              <span>Certificación: {certification}</span>
            </div>
             <div className="flex items-center">
              <GraduationCap className="w-4 h-4 mr-2 text-green-600" />
              <span>{fundaeInfo}</span>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-gray-200">
             <div className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
               <Info className="w-4 h-4 mr-2 text-blue-600" />
               <span>{priceDisplay}</span>
            </div>
            
            <div className="mb-3">
               <h4 className="font-semibold text-gray-800 mb-1">Para qué te prepara:</h4>
               <p className="text-sm text-gray-600">{preparationInfo}</p>
            </div>

            {viableSystemInfo && (
              <div className="mb-3 p-3 bg-indigo-50 border border-indigo-100 rounded-md">
                 <div className="flex items-start">
                   <Zap className="w-5 h-5 mr-2 text-indigo-500 flex-shrink-0 mt-0.5" />
                   <div>
                     <h4 className="font-semibold text-indigo-800 mb-1 text-sm">Sistema Viable IA</h4>
                     <p className="text-xs text-indigo-700">{viableSystemInfo}</p>
                   </div>
                 </div>
              </div>
            )}
            
            {subscriptionDetails && (
              <div className="mb-3 p-3 bg-purple-50 border border-purple-100 rounded-md">
                <div className="flex items-start">
                   <CreditCard className="w-5 h-5 mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
                   <div>
                      <h4 className="font-semibold text-purple-800 mb-1 text-sm">Opciones de Suscripción</h4>
                      <p className="text-xs text-purple-700">{subscriptionDetails}</p>
                   </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard; 