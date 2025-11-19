import { useEffect } from 'react';
import { motion } from 'framer-motion';

const LegalNotice = () => {
  useEffect(() => {
    document.title = 'Aviso Legal - Ebal Formacion';
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
        <h1>AVISO LEGAL</h1>
        <p>En cumplimiento con lo establecido en la Ley 34/2002 de 11 de Julio, de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSICE), se informa de los siguientes aspectos legales:</p>

        <h2>PROPIEDAD DEL SITIO WEB</h2>
        <p><strong>Ebal Formacion</strong></p>
        <ul>
          <li><strong>Responsable:</strong> Ebal Formacion</li>
          <li><strong>CIF:</strong> G16423691</li>
          <li><strong>Dirección:</strong> Gran Via Asima, 31, piso 3 oficina 11 – Palma, Balearic Islands, Espa�a</li>
          <li><strong>Contacto:</strong> Teléfono 644 25 96 14 – Email: web@ebalit.com</li>
          <li><strong>Actividad:</strong> Asociación empresarial</li>
        </ul>

        <h2>CONDICIONES GENERALES DE USO</h2>
        <p>El portal web tiene como objeto facilitar al público, en general, el conocimiento de las actividades que esta organización realiza y de los servicios que presta, para el desarrollo de su actividad.</p>
        <p>El uso de cualquiera de las funcionalidades del sitio Web implica la expresa y plena aceptación de las condiciones aquí expuestas, sin perjuicio de aquellas particulares que pudieran aplicarse a algunos de los servicios concretos ofrecidos a través del sitio Web.</p>
        <p>Ebal Formacion se reserva la facultad de efectuar, en cualquier momento y sin necesidad de previo aviso, modificaciones y actualizaciones de la información contenida en su Web o en la configuración y presentación de ésta.</p>
        <p>Con el objeto de mantener actualizada la información publicada en el portal Web, los contenidos del mismo podrán ser modificados, corregidos, eliminados o añadidos en cualquier momento, por lo que será conveniente comprobar la vigencia o exactitud de los mismos acudiendo a las fuentes oficiales.</p>

        <h2>PROPIEDAD INTELECTUAL, INDUSTRIAL Y FRAMES</h2>
        <p>Todos los elementos que forman el sitio Web, así como su estructura, diseño, código fuente, así como los logos, marcas y demás signos distintivos que aparecen en la misma, son titularidad de Ebal Formacion o de sus colaboradores y están protegidos por los correspondientes derechos de propiedad intelectual e industrial.</p>
        <p>Igualmente están protegidos por los correspondientes derechos de propiedad intelectual e industrial las imágenes y otros elementos gráficos contenidos en el sitio Web.</p>
        <p>Ebal Formacion prohíbe expresamente la realización de «framing» o la utilización por parte de terceros de cualesquiera otros mecanismos que alteren el diseño, configuración original o contenidos de nuestro sitio Web.</p>
        <p>El uso de los contenidos deberá respetar su licenciamiento particular. De tal modo su uso, reproducción, distribución, comunicación pública, transformación o cualquier otra actividad similar o análoga, queda totalmente prohibida salvo que medie previa y expresa autorización de Ebal Formacion.</p>
        <p>Únicamente se autoriza la reproducción total o parcial de los textos y contenidos proporcionados por el sitio Web, siempre que concurran todas y cada una de las siguientes condiciones:</p>
        <ul>
          <li>Se mantenga la integridad de los contenidos, documentos o gráficos;</li>
          <li>se cite expresamente a Ebal Formacion como fuente y origen de aquellos;</li>
          <li>el propósito y la finalidad de tal uso sea compatible con los fines de la Web y/o actividad de Ebal Formacion;</li>
          <li>y no se pretenda un uso comercial, quedando expresamente prohibidas su distribución, comunicación pública, transformación o descompilación.</li>
        </ul>
        <p>Cualquier otro uso habrá de ser comunicado y autorizado por Ebal Formacion, previa y expresamente.</p>
        <p>Respecto a las citas de productos y servicios de terceros, Ebal Formacion reconoce a favor de sus titulares los correspondientes derechos de propiedad industrial e intelectual, no implicando su sola mención o aparición en la Web la existencia de derechos ni de responsabilidad alguna sobre los mismos, como tampoco respaldo, patrocinio o recomendación.</p>
        <p>Ebal Formacion declara su respeto a los derechos de propiedad intelectual e industrial de terceros; por ello, si considera que nuestro sitio Web pudiera estar violando sus derechos, rogamos se ponga en contacto con Ebal Formacion.</p>

        <h2>RESPONSABILIDAD</h2>
        <p>Ebal Formacion no garantiza la inexistencia de errores en el acceso a la Web, en su contenido, ni que éste se encuentre actualizado, aunque Ebal Formacion desarrollará sus mejores esfuerzos para, en su caso, evitarlos, subsanarlos o actualizarlos.</p>
        <p>Tanto el acceso al sitio Web de Ebal Formacion, como el uso que pueda hacerse de la información contenida en los mismos es de la exclusiva responsabilidad de quien lo realiza.</p>
        <p>Ebal Formacion no se hace responsable de la información y contenidos almacenados, a título enunciativo, pero no limitativo, en foros, chats, blogs, comentarios, redes sociales o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en la página Web de Ebal Formacion.</p>
        <p>No obstante, y en cumplimiento de lo dispuesto en la LSSI, Ebal Formacion se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad, y colaborando de forma activa en la retirada o en su caso bloqueo de todos aquellos contenidos que pudieran afectar o contravenir la legislación nacional, o internacional, derechos de terceros o la moral y el orden público. En caso de que el usuario considere que existe en el sitio web algún contenido que pudiera ser susceptible de esta clasificación, rogamos se ponga en contacto con Ebal Formacion.</p>
        <p>Ebal Formacion no se responsabiliza de las contestaciones que se realicen a través de las distintas direcciones de correo electrónico que aparecen en su sitio Web, por lo que en ningún caso podrá derivarse efecto jurídico vinculante de las mismas.</p>

        <h2>LINKS O HIPERENLACES</h2>
        <p>El sitio web no dispone de enlaces o hipervínculos de terceros. En el supuesto de que en la Web se dispusiesen enlaces o hipervínculos hacía otros lugares de Internet, Ebal Formacion no ejercerá ningún tipo de control sobre estos lugares y contenidos. En ningún caso Ebal Formacion asumirá responsabilidad alguna por los contenidos algún enlace perteneciente a un lugar Web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en cabeza de los hipervínculos u otros lugares de Internet. Estos enlaces se proporcionarán únicamente para informar al Usuario sobre la existencia de otras fuentes de información sobre un tema concreto, y la inclusión de un enlace no implica la aprobación de la página web enlazada por parte de Ebal Formacion.</p>

        <h2>PROTECCIÓN DE DATOS PERSONALES</h2>
        <p>Los datos personales solicitados para la prestación de nuestros servicios se incluyen en tratamientos sometidos a lo dispuesto en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-gdd) y el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).</p>
        <p>La recogida y tratamiento de dichos datos se llevan a cabo por Ebal Formacion, y tienen por finalidad la gestión, prestación, ampliación y mejora de los servicios solicitados en cada momento por el usuario, el seguimiento de consultas, participación en procesos de selección de personal, comunicaciones electrónicas y/o la confección de estadísticas.</p>
        <p>Los servicios prestados por Ebal Formacion están dirigidos a mayores de edad. En el supuesto excepcional de que se desarrollará algún servicio dirigido específicamente a menores de dicha edad, Ebal Formacion solicitará la conformidad de los padres o tutores para la recogida de los datos personales o, en su caso, para el tratamiento de los mismos.</p>
        <p>Ebal Formacion se compromete al cumplimiento de su obligación de secreto con respecto a los datos de carácter personal suministrados y al deber de tratarlos con confidencialidad y reserva, conforme a la legislación vigente. A estos efectos adoptará las medidas necesarias para evitar su alteración, pérdida, tratamiento o acceso no autorizado.</p>

        <h2>DERECHOS DE LOS INTERESADOS</h2>
        <p>La normativa vigente de protección de datos le ampara en una serie de derechos en relación al uso que le damos a sus datos. Todos y cada uno de sus derechos son unipersonales e intransferibles, es decir, que únicamente pueden ser realizados por el titular de los datos, previa comprobación de su identidad.</p>
        <p>A continuación, te indicamos cuales son los derechos que le asisten:</p>
        <ul>
          <li>Solicitar el acceso a sus datos personales.</li>
          <li>Solicitar la rectificación de sus datos.</li>
          <li>Solicitar la supresión o eliminación de sus datos (derecho al «olvido»).</li>
          <li>Limitar u oponerte al uso que le damos a sus datos.</li>
          <li>Derecho a la portabilidad de sus datos para casos de servicios de telecomunicaciones o internet.</li>
          <li>Derecho a retirar su consentimiento en cualquier momento.</li>
          <li>Derecho a presentar una reclamación en materia de protección de datos ante la autoridad de control (agencia española de protección de datos)</li>
        </ul>

        <h3>¿Cómo puede ejercer sus derechos en relación a sus datos?</h3>
        <p>Para el ejercicio de sus derechos de acceso, rectificación, supresión, limitación u oposición, portabilidad y retirada de su consentimiento, puede hacerlo de la siguiente forma:</p>
        <ul>
          <li><strong>Responsable:</strong> Ebal Formacion</li>
          <li><strong>Dirección:</strong> Gran Via Asima, 31, piso 3 oficina 11 – Palma, Balearic Islands, Espa�a</li>
          <li><strong>Teléfono:</strong> 644 25 96 14</li>
          <li><strong>Email:</strong> web@ebalit.com</li>
        </ul>

        <h3>¿Cómo puede presentar una reclamación?</h3>
        <p>Además de los derechos que le asisten, si cree que sus datos no se están recabando o tratando conforme a la normativa vigente de Protección de Datos, usted podrá realizar una reclamación ante la Autoridad de Control, cuyos datos de contacto indicamos a continuación:</p>
        <p><strong>Agencia Española de Protección de Datos</strong><br />
          C/. Jorge Juan, 6. 28001, Madrid (Madrid), España<br />
          Email: info@agpd.es – Teléfono: 912663517<br />
          Web: <a href="https://www.agpd.es" target="_blank" rel="noopener noreferrer">https://www.agpd.es</a></p>

        <h2>LEY APLICABLE Y JURISDICCIÓN</h2>
        <p>La ley aplicable en caso de disputa o conflicto de interpretación de los términos que conforman este Aviso Legal, así como cualquier cuestión relacionada con los servicios del presente Portal, será la ley española.</p>

      </motion.div>
    </div>
  );
};

export default LegalNotice; 