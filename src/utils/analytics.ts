// Google Analytics 4 Form Tracking Utility
// Utilidad simple para enviar eventos de formulario a GA4

export interface FormTrackingData {
  user_name?: string;
  user_email?: string;
  user_phone?: string;
  form_type?: string;
  course_name?: string;
}

/**
 * Envía un evento form_submit al dataLayer de GA4
 * @param data - Datos del formulario a trackear
 */
export const trackFormSubmit = (data: FormTrackingData): void => {
  // Verificar que estamos en el navegador
  if (typeof window === 'undefined') return;

  // Inicializar dataLayer si no existe
  window.dataLayer = window.dataLayer || [];

  // Enviar evento al dataLayer
  window.dataLayer.push({
    event: 'form_submit',
    user_name: data.user_name || '',
    user_email: data.user_email || '',
    user_phone: data.user_phone || '',
    form_type: data.form_type || 'unknown',
    course_name: data.course_name || '',
    timestamp: new Date().toISOString()
  });

  // Log para desarrollo (solo en modo dev)
  if (import.meta.env.DEV) {
    console.log('🔍 GA4 Form Submit Event Sent:', {
      event: 'form_submit',
      user_name: data.user_name || '[empty]',
      user_email: data.user_email || '[empty]',
      user_phone: data.user_phone || '[empty]',
      form_type: data.form_type || 'unknown',
      course_name: data.course_name || '[empty]'
    });
  }
};

// Declaración global para TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}