import React from 'react';
import { Link } from 'react-router-dom';

interface InternalLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const InternalLink: React.FC<InternalLinkProps> = ({ 
  to, 
  children, 
  className = '' 
}) => {
  return (
    <Link
      to={to}
      className={`text-blue-600 hover:text-blue-700 font-medium underline decoration-2 decoration-blue-300 hover:decoration-blue-500 transition-all ${className}`}
    >
      {children}
    </Link>
  );
};

