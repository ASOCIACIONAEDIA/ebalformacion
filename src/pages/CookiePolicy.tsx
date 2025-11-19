import { useEffect } from 'react';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  useEffect(() => {
    document.title = 'Política de Cookies - Ebal Formacion';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 pt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto prose prose-lg lg:prose-xl prose-headings:font-semibold prose-headings:text-gray-800 prose-a:text-purple-600 hover:prose-a:text-purple-800"
      >
        <h1>Política de COOKIES</h1>
        <p><em>Esta política de cookies fue actualizada por última vez el 29/07/2024 y se aplica a los ciudadanos y residentes legales permanentes del Espacio Económico Europeo y Suiza.</em></p>

        <h2>1. Introducción</h2>
        <p>Nuestra web, <a href="https://ebalit.com/">https://ebalit.com/</a> (en adelante: «la web») utiliza cookies y otras tecnologías relacionadas (para mayor comodidad, todas las tecnologías se denominan «cookies»). Las cookies también son colocadas por terceros a los que hemos contratado. En el siguiente documento te informamos sobre el uso de cookies en nuestra web.</p>

        <h2>2. ¿Qué son las cookies?</h2>
        <p>Una cookie es un pequeño archivo que se envía junto con las páginas de esta web y que tu navegador almacena en el disco duro de su ordenador u otro dispositivo. La información almacenada puede ser devuelta a nuestros servidores o a los servidores de terceros apropiados durante una visita posterior.</p>

        <h2>3. ¿Qué son los scripts?</h2>
        <p>Un script es un fragmento de código de programa que se utiliza para hacer que nuestra web funcione correctamente y de forma interactiva. Este código se ejecuta en nuestro servidor o en tu dispositivo.</p>

        <h2>4. ¿Qué es una baliza web?</h2>
        <p>Una baliza web (o una etiqueta de píxel) es una pequeña e invisible pieza de texto o imagen en una web que se utiliza para monitorear el tráfico en una web. Para ello, se almacenan varios datos sobre usted mediante estas balizas web.</p>

        <h2>5. Cookies</h2>
        <h3>5.1 Cookies técnicas o funcionales</h3>
        <p>Algunas cookies aseguran que ciertas partes de la web funcionen correctamente y que tus preferencias de usuario sigan recordándose. Al colocar cookies funcionales, te facilitamos la visita a nuestra web. De esta manera, no necesitas introducir repetidamente la misma información cuando visitas nuestra web y, por ejemplo, los artículos permanecen en tu cesta de la compra hasta que hayas pagado. Podemos colocar estas cookies sin tu consentimiento.</p>
        <h3>5.2 Cookies de estadísticas</h3>
        <p>Utilizamos cookies estadísticas para optimizar la experiencia de la web para nuestros usuarios. Con estas cookies estadísticas obtenemos información sobre el uso de nuestra web. Te pedimos tu permiso para colocar cookies de estadísticas.</p>
        <h3>5.3 Cookies de marketing/seguimiento</h3>
        <p>Las cookies de marketing/seguimiento son cookies, o cualquier otra forma de almacenamiento local, usadas para crear perfiles de usuario para mostrar publicidad o para hacer el seguimiento del usuario en esta web o en varias webs con fines de marketing similares.</p>

        <h2>6. Cookies usadas</h2>
        {/* Esta sección podría necesitar una tabla o formato más específico si los datos son más estructurados */}
        <ul>
          <li><strong>Elementor:</strong> Estadísticas (anónimas). Consent to service elementor</li>
          <li><strong>Google reCAPTCHA:</strong> Funcional. Consent to service google-recaptcha</li>
          <li><strong>WordPress:</strong> Funcional. Consent to service wordpress</li>
          <li><strong>Adobe Experience Cloud:</strong> Estadísticas. Consent to service adobe-experience-cloud</li>
          <li><strong>Google Analytics:</strong> Estadísticas. Consent to service google-analytics</li>
          <li><strong>Google Adsense:</strong> Marketing. Consent to service google-adsense</li>
          <li><strong>Google Maps:</strong> Propósito pendiente de investigación. Consent to service google-maps</li>
          <li><strong>Varios:</strong> Propósito pendiente de investigación. Consent to service varios</li>
        </ul>

        <h2>7. Consentimiento</h2>
        <p>Cuando visites nuestra web por primera vez, te mostraremos una ventana emergente con una explicación sobre las cookies. Tan pronto como hagas clic en «Guardar preferencias», aceptas que usemos las categorías de cookies y plugins que has seleccionado en la ventana emergente, tal y como se describe en esta política de cookies. Puedes desactivar el uso de cookies a través de tu navegador, pero, por favor, ten en cuenta que nuestra web puede dejar de funcionar correctamente.</p>
        <h3>7.1 Gestiona tus ajustes de consentimiento</h3>
        {/* Esta sección interactiva requeriría una implementación real del gestor de consentimiento */}
        <p><strong>Funcional:</strong> Siempre activo</p>
        <p><strong>Estadísticas:</strong> [Control para activar/desactivar]</p>
        <p><strong>Marketing:</strong> [Control para activar/desactivar]</p>

        <h2>8. Activación/desactivación y borrado de cookies</h2>
        <p>Puedes utilizar tu navegador de Internet para eliminar las cookies de forma automática o manual. También puedes especificar que ciertas cookies no pueden ser colocadas. Otra opción es cambiar los ajustes de tu navegador de Internet para que recibas un mensaje cada vez que se coloca una cookie. Para obtener más información sobre estas opciones, consulta las instrucciones de la sección «Ayuda» de tu navegador.</p>
        <p>Ten en cuenta que nuestra web puede no funcionar correctamente si todas las cookies están desactivadas. Si borras las cookies de tu navegador, se volverán a colocar después de tu consentimiento cuando vuelvas a visitar nuestras webs.</p>

        <h2>9. Tus derechos con respecto a los datos personales</h2>
        <p>Tienes los siguientes derechos con respecto a tus datos personales:</p>
        <ul>
          <li>Tienes derecho a saber por qué se necesitan tus datos personales, qué sucederá con ellos y durante cuánto tiempo se conservarán.</li>
          <li><strong>Derecho de acceso:</strong> tienes derecho a acceder a tus datos personales que conocemos.</li>
          <li><strong>Derecho de rectificación:</strong> tienes derecho a completar, rectificar, borrar o bloquear tus datos personales cuando lo desees.</li>
          <li>Si nos das tu consentimiento para procesar tus datos, tienes derecho a revocar dicho consentimiento y a que se eliminen tus datos personales.</li>
          <li><strong>Derecho de cesión de tus datos:</strong> tienes derecho a solicitar todos tus datos personales al responsable del tratamiento y a transferirlos íntegramente a otro responsable del tratamiento.</li>
          <li><strong>Derecho de oposición:</strong> puedes oponerte al tratamiento de tus datos. Nosotros cumplimos con esto, a menos que existan motivos justificados para el procesamiento.</li>
        </ul>
        <p>Para ejercer estos derechos, por favor, contacta con nosotros. Por favor, consulta los detalles de contacto en la parte inferior de esta política de cookies. Si tienes alguna queja sobre cómo gestionamos tus datos, nos gustaría que nos la hicieras saber, pero también tienes derecho a enviar una queja a la autoridad supervisora (la autoridad de protección de datos).</p>

        <h2>10. Datos de contacto</h2>
        <p>Para preguntas y/o comentarios sobre nuestra política de cookies y esta declaración, por favor, contacta con nosotros usando los siguientes datos de contacto:</p>
        <p><strong>Ebal Formacion</strong><br />
          Dirección: Gran Via Asima, 31, piso 3 oficina 11 – Palma, Balearic Islands, Espa�a<br />
          Teléfono: 644 25 96 14<br />
          Email: web@ebalit.com</p>
      </motion.div>
    </div>
  );
};

export default CookiePolicy; 