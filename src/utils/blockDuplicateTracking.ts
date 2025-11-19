// Bloqueador de códigos de tracking duplicados
// Este script bloquea códigos de GA4/GTM no deseados

/**
 * Bloquea códigos de tracking duplicados y no deseados
 * Permite GTM personalizado y G-4KWRL89ZXK
 */
export const blockDuplicateTracking = (): void => {
  if (typeof window === 'undefined') return;

  // No interferir cuando está activo el modo preview/debug de GTM o Tag Assistant
  const qs = window.location.search || '';
  const isPreview = qs.indexOf('gtm_debug=') !== -1 || qs.indexOf('gtm_preview=') !== -1 || qs.indexOf('tagassistant=') !== -1;
  if (isPreview) {
    console.log('🧪 GTM Preview detected: blocker disabled');
    return; // Salir sin bloquear nada
  }

  // IDs y servidores permitidos
  const ALLOWED_GA4_ID = 'G-4KWRL89ZXK';
  const ALLOWED_GTM_ID = 'GTM-NGVDZJ5G';
  const ALLOWED_CUSTOM_SERVER = 'lnzvohke.eui.stape.net';
  const ALLOWED_GOOGLE_SERVER = 'www.googletagmanager.com';
  const BLOCKED_IDS = [
    'AW-966113994', // Google Ads específico
    'AW-', // Cualquier Google Ads
  ];

  // Interceptar gtag calls (más permisivo con GTM personalizado)
  const originalGtag = window.gtag;
  window.gtag = function(...args: any[]) {
    const command = args[0];
    const targetId = args[1];
    
    // Permitir GA4 y GTM personalizado
    if (command === 'config' && targetId === ALLOWED_GA4_ID) {
      console.log(`✅ Allowed gtag config for GA4: ${targetId}`);
    } else if (command === 'config' && targetId === ALLOWED_GTM_ID) {
      console.log(`✅ Allowed gtag config for custom GTM: ${targetId}`);
    }
    
    // Solo bloquear IDs específicamente prohibidos
    if (targetId && BLOCKED_IDS.some(blocked => targetId.includes(blocked))) {
      console.warn(`🚫 Blocked gtag call for: ${targetId}`);
      return;
    }
    
    // Llamar al gtag original si está permitido
    if (originalGtag) {
      return originalGtag.apply(this, args);
    }
  };

  // Interceptar dataLayer.push (más permisivo con GTM personalizado)
  const originalPush = window.dataLayer?.push;
  if (window.dataLayer && originalPush) {
    window.dataLayer.push = function(...args: any[]) {
      const event = args[0];
      
      // Permitir eventos GTM de nuestro servidor personalizado
      if (typeof event === 'object' && event.gtm) {
        console.log('✅ Allowed custom GTM dataLayer push:', event);
        return originalPush.apply(this, args);
      }
      
      // Permitir inicialización GTM personalizada
      if (typeof event === 'object' && event.event === 'gtm.js') {
        console.log('✅ Allowed custom GTM initialization:', event);
        return originalPush.apply(this, args);
      }
      
      // Permitir nuestros eventos form_submit
      if (typeof event === 'object' && event.event === 'form_submit') {
        console.log('✅ Allowed form_submit event:', event);
        return originalPush.apply(this, args);
      }
      
      // Permitir otros eventos legítimos
      return originalPush.apply(this, args);
    };
  }

  // Permitir scripts de nuestro servidor personalizado
  const originalCreateElement = document.createElement;
  document.createElement = function(tagName: string) {
    const element = originalCreateElement.call(this, tagName);
    
    if (tagName.toLowerCase() === 'script') {
      const script = element as HTMLScriptElement;
      
      // Interceptar cuando se establece el src
      Object.defineProperty(script, 'src', {
        set: function(value: string) {
          // Permitir nuestro servidor personalizado
          if (value.includes(ALLOWED_CUSTOM_SERVER)) {
            console.log(`✅ Allowed custom GTM server script: ${value}`);
            this.setAttribute('src', value);
            return;
          }
          
          // Permitir GTM estándar de Google con nuestro ID
          if (value.includes(ALLOWED_GOOGLE_SERVER) && value.includes(ALLOWED_GTM_ID)) {
            console.log(`✅ Allowed standard GTM script: ${value}`);
            this.setAttribute('src', value);
            return;
          }
          
          // Permitir GA4 oficial
          if (value.includes('gtag/js') && value.includes(ALLOWED_GA4_ID)) {
            console.log(`✅ Allowed GA4 script: ${value}`);
            this.setAttribute('src', value);
            return;
          }
          
          // Bloquear Google Ads específico
          if (value.includes('966113994')) {
            console.warn(`🚫 Blocked Google Ads script: ${value}`);
            return;
          }
          
          // Bloquear otros GTM no autorizados
          if (value.includes('googletagmanager.com') && !value.includes(ALLOWED_GTM_ID)) {
            console.warn(`🚫 Blocked unauthorized GTM script: ${value}`);
            return;
          }
          
          this.setAttribute('src', value);
        },
        get: function() {
          return this.getAttribute('src');
        }
      });
    }
    
    return element;
  };

  console.log('🛡️ Dual GTM tracking system initialized');
  console.log(`✅ Allowing GA4 ID: ${ALLOWED_GA4_ID}`);
  console.log(`✅ Allowing custom GTM: ${ALLOWED_GTM_ID} via ${ALLOWED_CUSTOM_SERVER}`);
  console.log(`✅ Allowing standard GTM: ${ALLOWED_GTM_ID} via ${ALLOWED_GOOGLE_SERVER}`);
};

// Declaraciones globales
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Ejecutar inmediatamente
if (typeof window !== 'undefined') {
  blockDuplicateTracking();
}