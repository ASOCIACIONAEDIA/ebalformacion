// Global Form Tracking para GA4
// Este script se ejecuta una vez y captura todos los formularios de la web

import { trackFormSubmit } from './analytics';

/**
 * Inicializa el tracking global de formularios
 * Se ejecuta una sola vez cuando se carga la aplicación
 */
export const initGlobalFormTracking = (): void => {
  // Verificar que estamos en el navegador
  if (typeof window === 'undefined') return;

  // Esperar a que el DOM esté listo
  const initTracking = () => {
    // Buscar todos los formularios en la página
    const forms = document.querySelectorAll('form');
    
    console.log(`🔍 GA4 Tracking: Found ${forms.length} forms on page`);

    forms.forEach((form, index) => {
      // Evitar duplicar listeners
      if (form.dataset.gaTracked === 'true') return;
      
      form.addEventListener('submit', (e) => {
        // Extraer datos del formulario
        const formData = new FormData(form);
        
        // Buscar campos comunes por name o id
        const nameField = form.querySelector<HTMLInputElement>('input[name="name"], #name, input[placeholder*="nombre" i], input[placeholder*="name" i]');
        const emailField = form.querySelector<HTMLInputElement>('input[name="email"], #email, input[type="email"]');
        const phoneField = form.querySelector<HTMLInputElement>('input[name="phone"], #phone, input[name="telefono"], input[placeholder*="teléfono" i], input[placeholder*="phone" i]');
        
        // Determinar tipo de formulario basado en el contexto (mejorado)
        let formType = 'contact'; // Default más específico
        const formClasses = form.className.toLowerCase();
        const formParent = form.closest('[class*="modal"], [class*="section"], [class*="page"], [data-*], [id*="modal"]');
        const parentClasses = formParent?.className.toLowerCase() || '';
        const parentId = formParent?.id?.toLowerCase() || '';
        const currentUrl = window.location.pathname.toLowerCase();
        
        // Detectar por URL actual
        if (currentUrl.includes('bootcamp') || currentUrl.includes('curso')) {
          formType = 'course_enrollment';
        } else if (currentUrl.includes('contact')) {
          formType = 'contact';
        }
        
        // Detectar por clases y IDs
        if (formClasses.includes('enrollment') || parentClasses.includes('enrollment') || parentId.includes('enrollment')) {
          formType = 'enrollment';
        } else if (formClasses.includes('contact') || parentClasses.includes('contact') || parentId.includes('contact')) {
          formType = 'contact';
        } else if (formClasses.includes('info') || parentClasses.includes('info') || parentId.includes('info')) {
          formType = 'info_request';
        } else if (formClasses.includes('syllabus') || parentClasses.includes('syllabus') || parentId.includes('syllabus')) {
          formType = 'syllabus_request';
        } else if (formClasses.includes('course') || parentClasses.includes('course') || parentId.includes('course')) {
          formType = 'course_enrollment';
        }
        
        // Detectar por contenido de botones
        const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
        const buttonText = submitButton?.textContent?.toLowerCase() || '';
        if (buttonText.includes('matricul') || buttonText.includes('inscrib')) {
          formType = 'enrollment';
        } else if (buttonText.includes('temario') || buttonText.includes('descargar')) {
          formType = 'syllabus_request';
        } else if (buttonText.includes('información') || buttonText.includes('info')) {
          formType = 'info_request';
        }

        // Determinar nombre del curso
        let courseName = '';
        const courseSelect = form.querySelector<HTMLSelectElement>('select[name="course"], select[name="courseTitle"]');
        const courseTitle = document.querySelector('h1, .course-title, [class*="title"]')?.textContent || '';
        
        if (courseSelect && courseSelect.value) {
          courseName = courseSelect.value;
        } else if (courseTitle) {
          courseName = courseTitle.trim();
        }

        // Enviar evento de tracking
        trackFormSubmit({
          user_name: nameField?.value || '',
          user_email: emailField?.value || '',
          user_phone: phoneField?.value || '',
          form_type: formType,
          course_name: courseName
        });
      });
      
      // Marcar como trackeado para evitar duplicados
      form.dataset.gaTracked = 'true';
    });
  };

  // Ejecutar inmediatamente si el DOM ya está listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTracking);
  } else {
    initTracking();
  }

  // También observar cambios en el DOM para formularios que se añadan dinámicamente
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            const element = node as Element;
            // Si el nodo añadido es un formulario o contiene formularios
            if (element.tagName === 'FORM' || element.querySelector('form')) {
              setTimeout(initTracking, 100); // Pequeño delay para asegurar que el DOM esté actualizado
            }
          }
        });
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};

// Auto-inicializar si estamos en el navegador
if (typeof window !== 'undefined') {
  initGlobalFormTracking();
}