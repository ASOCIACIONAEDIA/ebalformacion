import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  plan: {
    title: string;
    description: string;
    price: string;
    priceSuffix?: string;
    features: string[];
    buttonText: string;
    isRecommended?: boolean;
    buttonColor?: string; // Tailwind class e.g., 'bg-purple-600 hover:bg-purple-700'
    borderColor?: string; // Tailwind class e.g., 'border-purple-600'
  };
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const cardClasses = `flex flex-col bg-white p-6 rounded-xl shadow-lg h-full ${plan.borderColor ? 'border-2 ' + plan.borderColor : 'border border-gray-200'}`;
  const buttonClasses = `w-full py-3 px-6 rounded-lg font-medium transition-colors ${plan.buttonColor || 'bg-gray-700 hover:bg-gray-800 text-white'}`;

  return (
    <div className={`relative ${cardClasses}`}>
      {plan.isRecommended && (
        <div className="absolute top-0 right-4 -mt-3 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Recomendado
        </div>
      )}
      <h3 className="text-lg font-semibold mb-1 font-nunito text-gray-800">{plan.title}</h3>
      <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
      
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
        {plan.priceSuffix && (
           <span className="text-lg text-gray-500 ml-1">{plan.priceSuffix}</span>
        )}
      </div>

      <button className={buttonClasses}>
        {plan.buttonText}
      </button>

      <div className="mt-8 pt-6 border-t border-gray-200 flex-grow">
        <h4 className="text-sm font-semibold mb-4 text-gray-600 uppercase">Qué está incluido</h4>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard; 