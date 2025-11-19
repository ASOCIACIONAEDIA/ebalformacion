// 🔥 BLOQUEAR TRACKING DUPLICADO PRIMERO (antes que cualquier otra cosa)
import './utils/blockDuplicateTracking';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import App from './App.tsx';
import './index.css';

// 🔥 Inicializar tracking global de formularios GA4
import './utils/globalFormTracking';

// Create public directory and assets
import.meta.glob([
  '../public/assets/**',
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>
);