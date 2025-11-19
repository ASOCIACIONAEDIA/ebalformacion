// Utilidades para controlar el comportamiento según el entorno

export const isProduction = import.meta.env.PROD;
export const isDevelopment = import.meta.env.DEV;

// Configuraciones para optimizar rendimiento en producción
export const shouldDisableAnimations = isProduction && import.meta.env.VITE_DISABLE_ANIMATIONS === 'true';
export const shouldDisableHMR = isProduction && import.meta.env.VITE_DISABLE_HMR === 'true';

// Configuración de timeouts y delays optimizados
export const getOptimizedDelay = (devDelay: number, prodDelay: number = 0) => {
  return isProduction ? prodDelay : devDelay;
};

// Función para controlar re-renders innecesarios
export const shouldSkipAnimation = () => {
  return shouldDisableAnimations || isProduction;
};

// Configuración de performance
export const performanceConfig = {
  // Reducir la frecuencia de actualizaciones en producción
  animationFrameThrottle: isProduction ? 16 : 8, // ms
  scrollThrottle: isProduction ? 16 : 8, // ms
  resizeThrottle: isProduction ? 100 : 50, // ms
};

export default {
  isProduction,
  isDevelopment,
  shouldDisableAnimations,
  shouldDisableHMR,
  getOptimizedDelay,
  shouldSkipAnimation,
  performanceConfig
}; 