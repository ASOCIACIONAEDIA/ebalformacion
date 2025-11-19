import { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Política de Privacidad - Ebal Formacion';
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
        <h1>POLÍTICA DE PRIVACIDAD DEL SITIO WEB https://ebalit.com/</h1>

        <h2>I. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h2>
        <p>Respetando lo establecido en la legislación vigente, Ebal Formacion (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.</p>

        <h3>Leyes que incorpora esta política de privacidad</h3>
        <p>Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, la misma respeta las siguientes normas:</p>
        <ul>
          <li>El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).</li>
          <li>La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).</li>
          <li>El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).</li>
          <li>La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).</li>
        </ul>

        <h3>Identidad del responsable del tratamiento de los datos personales</h3>
        <p>El responsable del tratamiento de los datos personales recogidos en Ebal Formacion es: Ebal Formacion provista de CIF: G16423691 (en adelante, Responsable del tratamiento).</p>
        {/* Repetido en el texto original, se puede omitir una ocurrencia si se desea */}
        <p>Sus datos de contacto son los siguientes:</p>
        <ul>
          <li>Dirección: Gran Via Asima, 31, piso 3 oficina 11 – Palma, Balearic Islands, Espa�a</li>
          <li>Contacto: Teléfono 644 25 96 14 – Email: web@ebalit.com</li>
        </ul>

        <h3>Registro de Datos de Carácter Personal</h3>
        <p>En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales recabados por Ebal Formacion, mediante los formularios extendidos en sus páginas quedarán incorporados y serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los compromisos establecidos entre Ebal Formacion y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo. Asimismo, de conformidad con lo previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la excepción prevista en el artículo 30.5 del RGPD, se mantiene un registro de actividades de tratamiento que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás circunstancias establecidas en el RGPD.</p>

        <h3>Principios aplicables al tratamiento de los datos personales</h3>
        <p>El tratamiento de los datos personales del Usuario se someterá a los siguientes principios recogidos en el artículo 5 del RGPD y en el artículo 4 y siguientes de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:</p>
        <ul>
          <li>Principio de licitud, lealtad y transparencia: se requerirá en todo momento el consentimiento del Usuario previa información completamente transparente de los fines para los cuales se recogen los datos personales.</li>
          <li>Principio de limitación de la finalidad: los datos personales serán recogidos con fines determinados, explícitos y legítimos.</li>
          <li>Principio de minimización de datos: los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.</li>
          <li>Principio de exactitud: los datos personales deben ser exactos y estar siempre actualizados.</li>
          <li>Principio de limitación del plazo de conservación: los datos personales solo serán mantenidos de forma que se permita la identificación del Usuario durante el tiempo necesario para los fines de su tratamiento.</li>
          <li>Principio de integridad y confidencialidad: los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.</li>
          <li>Principio de responsabilidad proactiva: el Responsable del tratamiento será responsable de asegurar que los principios anteriores se cumplen.</li>
        </ul>

        <h3>Categorías de datos personales</h3>
        {/* Hay una contradicción en el texto original sobre categorías especiales. Se deja como está. */}
        <p>Las categorías de datos que se tratan en Ebal Formacion son únicamente datos identificativos. En ningún caso, se tratan categorías especiales de datos personales en el sentido del artículo 9 del RGPD.</p>
        <p>Las categorías de datos que se tratan en Ebal Formacion son tanto datos identificativos como categorías especiales de datos personales en el sentido del artículo 9 del RGPD.</p>
        <p>Se entienden como categorías especiales de datos personales aquellos que revelen el origen étnico o racial, las opiniones políticas, las convicciones religiosas o filosóficas, o la afiliación sindical, y el tratamiento de datos genéticos, datos biométricos dirigidos a identificar de manera unívoca a una persona física, datos relativos a la salud o datos relativos a la vida sexual o la orientación sexual de una persona física.</p>
        <p>Para el tratamiento de las categorías especiales de datos personales, será necesario en todo caso el consentimiento explícito del Usuario para uno o varios fines específicos.</p>

        <h3>Base legal para el tratamiento de los datos personales</h3>
        <p>La base legal para el tratamiento de los datos personales es el consentimiento. Ebal Formacion se compromete a recabar el consentimiento expreso y verificable del Usuario para el tratamiento de sus datos personales para uno o varios fines específicos.</p>
        <p>El Usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil retirar el consentimiento como darlo. Como regla general, la retirada del consentimiento no condicionará el uso del Sitio Web.</p>
        <p>En las ocasiones en las que el Usuario deba o pueda facilitar sus datos a través de formularios para realizar consultas, solicitar información o por motivos relacionados con el contenido del Sitio Web, se le informará en caso de que la cumplimentación de alguno de ellos sea obligatoria debido a que los mismos sean imprescindibles para el correcto desarrollo de la operación realizada.</p>

        <h3>Fines del tratamiento a que se destinan los datos personales</h3>
        <p>Los datos personales son recabados y gestionados por Ebal Formacion con la finalidad de poder facilitar, agilizar y cumplir los compromisos establecidos entre el Sitio Web y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este último rellene o para atender una solicitud o consulta.</p>
        <p>Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y estadística, y actividades propias del objeto social de Ebal Formacion, así como para la extracción, almacenamiento de datos y estudios de marketing para adecuar el Contenido ofertado al Usuario, así como mejorar la calidad, funcionamiento y navegación por el Sitio Web.</p>
        <p>En el momento en que se obtengan los datos personales, se informará al Usuario acerca del fin o fines específicos del tratamiento a que se destinarán los datos personales; es decir, del uso o usos que se dará a la información recopilada.</p>

        <h3>Períodos de retención de los datos personales</h3>
        <p>Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su tratamiento y, en todo caso, únicamente durante el siguiente plazo: 12 meses, o hasta que el Usuario solicite su supresión.</p>
        <p>En el momento en que se obtengan los datos personales, se informará al Usuario acerca del plazo durante el cual se conservarán los datos personales o, cuando eso no sea posible, los criterios utilizados para determinar este plazo.</p>

        <h3>Destinatarios de los datos personales</h3>
        {/* Contradicción en el texto original. Se deja como está. */}
        <p>Los datos personales del Usuario no serán compartidos con terceros.</p>
        <p>En cualquier caso, en el momento en que se obtengan los datos personales, se informará al Usuario acerca de los destinatarios o las categorías de destinatarios de los datos personales.</p>
        <p>Los datos personales del Usuario serán compartidos con los siguientes destinatarios o categorías de destinatarios:</p> {/* Falta info aquí en el texto original */}
        <p>En caso de que el Responsable del tratamiento tenga la intención de transferir datos personales a un tercer país u organización internacional, en el momento en que se obtengan los datos personales, se informará al Usuario acerca del tercer país u organización internacional al cual se tiene la intención de transferir los datos, así como de la existencia o ausencia de una decisión de adecuación de la Comisión.</p>

        <h3>Datos personales de menores de edad</h3>
        <p>Respetando lo establecido en los artículos 8 del RGPD y 7 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, solo los mayores de 14 años podrán otorgar su consentimiento para el tratamiento de sus datos personales de forma lícita por Ebal Formacion. Si se trata de un menor de 14 años, será necesario el consentimiento de los padres o tutores para el tratamiento, y este solo se considerará lícito en la medida en la que los mismos lo hayan autorizado.</p>

        <h3>Secreto y seguridad de los datos personales</h3>
        <p>Ebal Formacion se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.</p>
        <p>El Sitio Web cuenta con un certificado SSL (Secure Socket Layer), que asegura que los datos personales se transmiten de forma segura y confidencial, al ser la transmisión de los datos entre el servidor y el Usuario, y en retroalimentación, totalmente cifrada o encriptada.</p>
        <p>Sin embargo, debido a que Ebal Formacion no puede garantizar la inexpugnabilidad de internet ni la ausencia total de hackers u otros que accedan de modo fraudulento a los datos personales, el Responsable del tratamiento se compromete a comunicar al Usuario sin dilación indebida cuando ocurra una violación de la seguridad de los datos personales que sea probable que entrañe un alto riesgo para los derechos y libertades de las personas físicas. Siguiendo lo establecido en el artículo 4 del RGPD, se entiende por violación de la seguridad de los datos personales toda violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.</p>
        <p>Los datos personales serán tratados como confidenciales por el Responsable del tratamiento, quien se compromete a informar de y a garantizar por medio de una obligación legal o contractual que dicha confidencialidad sea respetada por sus empleados, asociados, y toda persona a la cual le haga accesible la información.</p>

        <h3>Derechos derivados del tratamiento de los datos personales</h3>
        <p>El Usuario tiene sobre Ebal Formacion y podrá, por tanto, ejercer frente al Responsable del tratamiento los siguientes derechos reconocidos en el RGPD y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:</p>
        <ul>
          <li><strong>Derecho de acceso:</strong> Es el derecho del Usuario a obtener confirmación de si Ebal Formacion está tratando o no sus datos personales y, en caso afirmativo, obtener información sobre sus datos concretos de carácter personal y del tratamiento que Ebal Formacion haya realizado o realice, así como, entre otra, de la información disponible sobre el origen de dichos datos y los destinatarios de las comunicaciones realizadas o previstas de los mismos.</li>
          <li><strong>Derecho de rectificación:</strong> Es el derecho del Usuario a que se modifiquen sus datos personales que resulten ser inexactos o, teniendo en cuenta los fines del tratamiento, incompletos.</li>
          <li><strong>Derecho de supresión («el derecho al olvido»):</strong> Es el derecho del Usuario, siempre que la legislación vigente no establezca lo contrario, a obtener la supresión de sus datos personales cuando estos ya no sean necesarios para los fines para los cuales fueron recogidos o tratados; el Usuario haya retirado su consentimiento al tratamiento y este no cuente con otra base legal; el Usuario se oponga al tratamiento y no exista otro motivo legítimo para continuar con el mismo; los datos personales hayan sido tratados ilícitamente; los datos personales deban suprimirse en cumplimiento de una obligación legal; o los datos personales hayan sido obtenidos producto de una oferta directa de servicios de la sociedad de la información a un menor de 14 años. Además de suprimir los datos, el Responsable del tratamiento, teniendo en cuenta la tecnología disponible y el coste de su aplicación, deberá adoptar medidas razonables para informar a los responsables que estén tratando los datos personales de la solicitud del interesado de supresión de cualquier enlace a esos datos personales.</li>
          <li><strong>Derecho a la limitación del tratamiento:</strong> Es el derecho del Usuario a limitar el tratamiento de sus datos personales. El Usuario tiene derecho a obtener la limitación del tratamiento cuando impugne la exactitud de sus datos personales; el tratamiento sea ilícito; el Responsable del tratamiento ya no necesite los datos personales, pero el Usuario lo necesite para hacer reclamaciones; y cuando el Usuario se haya opuesto al tratamiento.</li>
          <li><strong>Derecho a la portabilidad de los datos:</strong> En caso de que el tratamiento se efectúe por medios automatizados, el Usuario tendrá derecho a recibir del Responsable del tratamiento sus datos personales en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable del tratamiento. Siempre que sea técnicamente posible, el Responsable del tratamiento transmitirá directamente los datos a ese otro responsable.</li>
          <li><strong>Derecho de oposición:</strong> Es el derecho del Usuario a que no se lleve a cabo el tratamiento de sus datos de carácter personal o se cese el tratamiento de los mismos por parte de Ebal Formacion.</li>
          <li><strong>Derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles:</strong> Es el derecho del Usuario a no ser objeto de una decisión individualizada basada únicamente en el tratamiento automatizado de sus datos personales, incluida la elaboración de perfiles, existente salvo que la legislación vigente establezca lo contrario.</li>
        </ul>
        <p>Así pues, el Usuario podrá ejercitar sus derechos mediante comunicación escrita dirigida al Responsable del tratamiento con la referencia «RGPD-Ebalit.com», especificando:</p>
        <ul>
          <li>Nombre, apellidos del Usuario y copia del DNI. En los casos en que se admita la representación, será también necesaria la identificación por el mismo medio de la persona que representa al Usuario, así como el documento acreditativo de la representación. La fotocopia del DNI podrá ser sustituida, por cualquier otro medio válido en derecho que acredite la identidad.</li>
          <li>Petición con los motivos específicos de la solicitud o información a la que se quiere acceder.</li>
          <li>Domicilio a efecto de notificaciones.</li>
          <li>Fecha y firma del solicitante.</li>
          <li>Todo documento que acredite la petición que formula.</li>
        </ul>
        <p>Esta solicitud y todo otro documento adjunto podrá enviarse a la siguiente dirección y/o correo electrónico:</p>
        <p>Dirección: Gran Via Asima, 31, piso 3 oficina 11 – Palma, Balearic Islands, Espa�a</p>
        <p>Correo electrónico: web@ebalit.com</p>

        <h3>Enlaces a sitios web de terceros</h3>
        <p>El Sitio Web puede incluir hipervínculos o enlaces que permiten acceder a páginas web de terceros distintos de Ebal Formacion, y que por tanto no son operados por Ebal Formacion. Los titulares de dichos sitios web dispondrán de sus propias políticas de protección de datos, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad.</p>

        <h3>Reclamaciones ante la autoridad de control</h3>
        <p>En caso de que el Usuario considere que existe un problema o infracción de la normativa vigente en la forma en la que se están tratando sus datos personales, tendrá derecho a la tutela judicial efectiva y a presentar una reclamación ante una autoridad de control, en particular, en el Estado en el que tenga su residencia habitual, lugar de trabajo o lugar de la supuesta infracción. En el caso de España, la autoridad de control es la Agencia Española de Protección de Datos (<a href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer">https://www.aepd.es/</a>).</p>

        <h2>II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD</h2>
        <p>Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección de datos de carácter personal contenidas en esta Política de Privacidad, así como que acepte el tratamiento de sus datos personales para que el Responsable del tratamiento pueda proceder al mismo en la forma, durante los plazos y para las finalidades indicadas. El uso del Sitio Web implicará la aceptación de la Política de Privacidad del mismo.</p>
        <p>Ebal Formacion se reserva el derecho a modificar su Política de Privacidad, de acuerdo a su propio criterio, o motivado por un cambio legislativo, jurisprudencial o doctrinal de la Agencia Española de Protección de Datos. Los cambios o actualizaciones de esta Política de Privacidad no serán notificados de forma explícita al Usuario. Se recomienda al Usuario consultar esta página de forma periódica para estar al tanto de los últimos cambios o actualizaciones.</p>
        <p>Esta Política de Privacidad fue actualizada para adaptarse al Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.</p>

      </motion.div>
    </div>
  );
};

export default PrivacyPolicy; 