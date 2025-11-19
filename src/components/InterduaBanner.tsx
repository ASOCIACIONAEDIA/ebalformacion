import React from 'react';

export const InterduaBanner: React.FC = () => (
  <section className="max-w-5xl mx-auto mt-12 mb-12 px-4">
    <div className="bg-blue-50 border border-blue-200 rounded-xl shadow flex flex-col md:flex-row items-center gap-8 p-6 md:p-10">
      {/* Columna Izquierda: INTERDUA */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-2">
        <img src="/assets/logo INTEDUA.png" alt="Logo INTERDUA" className="h-16 w-auto bg-white rounded-xl shadow p-2 mb-2" />
        <h3 className="text-xl font-bold text-blue-800 mb-1">Curso en colaboración con INTEDUA</h3>
        <p className="text-blue-900 text-base leading-relaxed mb-1">
          Este curso se realiza en colaboración con la Asociación INTEDUA (<a href="https://iaeducativa.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">iaeducativa.org</a>).<br/>
          <span className="font-semibold">Si eres socio/a de INTEDUA, tienes un 30% de descuento</span> indicando tu número de socio en la matriculación.<br/>
          <span className="text-blue-700">Los fondos recaudados se destinan íntegramente a las asociaciones INTEDUA y Ebal Formacion.</span> Al inscribirte, colaboras con la difusión y democratización de la IA educativa.
        </p>
      </div>
      {/* Columna Derecha: IA EDUCATIVA + Evento */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-2">
        <img src="/assets/001. NEW LOGO IAEDUCATIVA transparente recortada.png" alt="Logo IA Educativa" className="h-16 w-auto mb-2" />
        <h4 className="text-lg font-bold text-cyan-800 mb-1">Ebal Formacion participa como partner activo en IA Educativa</h4>
        <p className="text-cyan-900 text-base leading-relaxed mb-1">
          <span className="font-semibold">Evento:</span> Viernes 10 de octubre de 2025 - ETSII US<br/>
          Av. de la Reina Mercedes, s/n, Sevilla<br/>
          <span className="italic">Una experiencia híbrida de acercamiento a la IA en Educación</span><br/>
          <span className="text-cyan-700">Organiza: Asociación INTEDUA (IAEducativa) y ETSII US, con colaboración de Ebal Formacion y referentes internacionales.</span>
        </p>
      </div>
    </div>
  </section>
);

export default InterduaBanner; 