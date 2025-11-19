// Removed import of icons here, they will be used in the component

export type PreparationPoint = {
  title: string;
  description: string;
  iconName?: string; // Optional: Store icon name as string (e.g., 'BookOpen')
};

export type Course = {
  id: string;
  title: string;
  shortDescription: string; // Used in CourseCard "Para qué te prepara"
  imageUrl: string; // Needs real image paths
  duration: string;
  certification: string;
  // Pricing fields updated
  isBonificable: boolean;
  price?: number; // The actual price
  financingInfo?: string; // Text like "Consulta las opciones de financiación"
  //------------------
  fundaeInfo: string;
  type: 'bonificable' | 'programacion';
  preparationDetails: string; // Detailed description for "Para qué te prepara"
  preparationPoints: PreparationPoint[];
  learningObjectives: string[];
  tutorSupport: string; // e.g., "Equipo Docente AEDIA & VIABLE"
  universityTitration?: {
    universityName: string; 
    logoUrl: string;
    notes: string;
  }[];
  syllabusUrl?: string; // Optional URL for the syllabus PDF
  // Added optional properties for visual variety
  heroColors?: string[]; // Array of 4 Tailwind bg color classes for hero blobs
  tutorImageUrl?: string; // URL for the image in Tutorizacion section
};



// Placeholder instructor data simplified
const defaultTutorSupport = "Equipo Docente Ebal Formacion";
const sabalUniversity = {
  universityName: "Sabal University",
  logoUrl: "/assets/LOGO SABAL VERTICAL.png", // Verify this path
  notes: "(tasas no incluidas)"
};

// Add UEMC data
const uemcUniversity = {
  universityName: "Universidad Europea Miguel de Cervantes",
  logoUrl: "/assets/UEMC_LOGOCH.png", 
  notes: "(tasas no incluidas)"
};

// Updated image URLs
const updatedImageUrls = {
  'ia-educacion': '/assets/edu.png',
  'ia-aplicada-nocode': '/assets/noc.png',
};

export const bonificableCourses: Course[] = [
  { 
    id: 'ia-educacion', 
    title: 'Inteligencia Artificial para la Educación', 
    shortDescription: 'Desarrolla aplicaciones de IA avanzadas y domina los modelos de última generación.',
    imageUrl: updatedImageUrls['ia-educacion'],
    duration: '8-12 Semanas',
    certification: 'Ebal Formacion & Universidades Colaboradoras',
    isBonificable: true,
    price: 520, 
    financingInfo: 'Consulta las opciones de financiación',
    fundaeInfo: '100% Bonificable con FUNDAE',
    type: 'bonificable', 
    preparationDetails: 'Este curso te prepara para diseñar e implementar soluciones de IA que personalizan el aprendizaje, automatizan tareas administrativas y potencian la creatividad en el aula. Dominarás herramientas clave y estrategias pedagógicas innovadoras.',
    preparationPoints: [
      { title: 'Aplica la Inteligencia Artificial en el Aula', description: 'Aprende a integrar herramientas de IA generativa y modelos avanzados en estrategias pedagógicas. Descubre cómo la tecnología puede personalizar el aprendizaje y mejorar la experiencia educativa.', iconName: 'BookOpen' },
      { title: 'Explora el Potencial de la Robótica Educativa', description: 'Introducción a la robótica como una herramienta de enseñanza innovadora. Diseña actividades prácticas como la creación de videojuegos educativos o proyectos con Scratch.', iconName: 'Zap' },
      { title: 'Domina la Ética y Evaluación de la IA en Educación', description: 'Analiza los aspectos éticos y de privacidad asociados al uso de IA en entornos educativos. Aprende métodos de evaluación y cómo aplicarlos en proyectos de transformación digital.', iconName: 'Lightbulb' },
      { title: 'Desarrolla Proyectos Innovadores con IA', description: 'Aprende a gestionar proyectos de transformación digital educativa utilizando herramientas de vanguardia como prompt engineering y métodos de evaluación avanzados.', iconName: 'Code' },
    ],
    learningObjectives: [
        'Comprenderás los fundamentos de la IA y algoritmos de aprendizaje automático.',
        'Aprenderás a trabajar con bases de datos vectoriales y preprocesar datos para IA.',
        'Dominarás herramientas avanzadas como Hugging Face y Flowise para implementar y desplegar modelos.',
        'Desarrollarás y mantendrás aplicaciones de IA aplicables a diferentes industrias.'
    ],
    tutorSupport: defaultTutorSupport,
    universityTitration: [sabalUniversity, uemcUniversity], 
    syllabusUrl: '/assets/TemarioEducacion.pdf',
    // Visuals for this course
    heroColors: ['bg-purple-500', 'bg-pink-400', 'bg-indigo-500', 'bg-blue-400'],
    tutorImageUrl: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  { 
    id: 'ia-fundamentals', 
    title: 'Curso de IA Fundamentals', 
    shortDescription: 'Domina IA Generativa, explora modelos y crea agentes inteligentes desde cero. Proyecto práctico incluido.',
    imageUrl: '/assets/robot (1).png', // Usando la imagen del robot que está en assets
    duration: '40 horas',
    certification: 'Ebal Formacion & SABAL',
    isBonificable: true,
    price: 55, 
    financingInfo: 'Consulta las opciones de financiación',
    fundaeInfo: '100% Bonificable con FUNDAE',
    type: 'bonificable', 
    preparationDetails: 'Este curso te prepara para dominar los fundamentos de la inteligencia artificial generativa, desde la introducción hasta el desarrollo de soluciones complejas. Aprenderás a crear agentes IA, automatizar tareas, generar contenido audiovisual y aplicar principios éticos en el desarrollo de IA.',
    preparationPoints: [
      { title: 'Domina IA Generativa', description: 'Aprende IA Generativa, explora modelos y crea agentes inteligentes desde cero. Proyecto práctico incluido.', iconName: 'Brain' },
      { title: 'Automatiza con Make', description: 'Automatiza flujos con Make + Python. Ahorra horas de trabajo y lleva tus procesos al siguiente nivel.', iconName: 'Zap' },
      { title: 'IA para vídeo y audio', description: 'Transforma ideas en vídeo, audio y música con IA. Sin experiencia previa: solo creatividad y código.', iconName: 'Code' },
      { title: 'Ética en IA avanzada', description: 'Desarrolla soluciones IA de alto impacto, con responsabilidad y ética. Certifícate en IA Fundamentals.', iconName: 'Shield' },
    ],
    learningObjectives: [
        'Comprenderás los fundamentos de la inteligencia artificial generativa y sus aplicaciones.',
        'Aprenderás a usar modelos avanzados y crear agentes IA personalizados.',
        'Dominarás la automatización de tareas utilizando herramientas como Make.',
        'Desarrollarás habilidades en creación audiovisual con IA.',
        'Aplicarás principios éticos en el desarrollo de soluciones de IA complejas.'
    ],
    tutorSupport: defaultTutorSupport,
    universityTitration: [sabalUniversity], // Solo SABAL, sin UEMC
    syllabusUrl: undefined, // Sin descarga de temario
    // Visuals for this course
    heroColors: ['bg-blue-600', 'bg-cyan-500', 'bg-teal-500', 'bg-emerald-500'],
    tutorImageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  { 
    id: 'desconexion-digital', 
    title: 'Desconexión Digital', 
    shortDescription: 'Aprende a implementar políticas de desconexión digital y prevenir riesgos laborales asociados.',
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '8 Horas',
    certification: 'Ebal Formacion',
    isBonificable: true,
    price: 140, 
    financingInfo: 'Consulta las opciones de financiación',
    fundaeInfo: '100% Bonificable con FUNDAE',
    type: 'bonificable', 
    preparationDetails: 'Este curso te prepara para implementar políticas efectivas de desconexión digital en entornos laborales, protegiendo los derechos de los trabajadores y previniendo riesgos asociados al uso excesivo de tecnologías digitales.',
    preparationPoints: [
      { title: 'Marco Normativo y Contexto', description: 'Comprende el contexto laboral y normativo de la desconexión digital, incluyendo el ámbito de aplicación y conceptos clave.', iconName: 'BookOpen' },
      { title: 'Derechos a Proteger', description: 'Identifica y protege los derechos al descanso, conciliación familiar, intimidad y seguridad laboral a través de la desconexión digital.', iconName: 'Shield' },
      { title: 'Prevención de Riesgos Laborales', description: 'Analiza factores de riesgo, riesgos emergentes y consecuencias de la no desconexión digital, implementando medidas preventivas.', iconName: 'AlertTriangle' },
      { title: 'Política Interna', description: 'Desarrolla protocolos de desconexión digital, acciones de formación y medidas de seguimiento y control.', iconName: 'FileText' },
    ],
    learningObjectives: [
        'Comprenderás el marco normativo y contexto de la desconexión digital.',
        'Identificarás los derechos que protege la desconexión digital.',
        'Analizarás los riesgos laborales asociados a la no desconexión digital.',
        'Desarrollarás políticas internas de desconexión digital efectivas.',
        'Implementarás medidas de vigilancia de la salud y promoción del bienestar.'
    ],
    tutorSupport: defaultTutorSupport,
    universityTitration: [sabalUniversity, uemcUniversity], 
    syllabusUrl: undefined, // Se puede añadir más tarde si se tiene el PDF
    // Visuals for this course
    heroColors: ['bg-green-500', 'bg-teal-400', 'bg-blue-500', 'bg-cyan-400'],
    tutorImageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  { 
    id: 'ia-aplicada-nocode', // Changed ID slightly for clarity
    title: 'Inteligencia Artificial aplicada con herramientas NoCode', 
    shortDescription: 'Domina la IA sin programar: crea chatbots, automatiza tareas y genera contenido multimedia con herramientas NoCode.',
    imageUrl: '/assets/noc.png', // Cambio a la imagen NoCode
    duration: '12 Semanas', 
    certification: 'Ebal Formacion & Universidades Colaboradoras',
    isBonificable: true,
    price: 420,
    financingInfo: 'Consulta las opciones de financiación',
    fundaeInfo: '100% Bonificable con FUNDAE',
    type: 'bonificable',
    preparationDetails: 'Este curso te prepara para dominar la inteligencia artificial sin necesidad de programar. Aprenderás a crear chatbots inteligentes, asistentes de voz, automatizar procesos empresariales, desarrollar webs con SEO optimizado, generar contenido audiovisual y crear aplicaciones completas usando herramientas NoCode de vanguardia.',
    preparationPoints: [
      { title: 'Crea Chatbots y Asistentes IA', description: 'Desarrolla chatbots inteligentes y asistentes de voz con integración a Google Calendar y Sheets, sin escribir código.', iconName: 'MessageSquare' },
      { title: 'Automatiza Procesos con IA', description: 'Domina Make y n8n para automatizar tareas, publicaciones en RRSS, emails y recordatorios usando inteligencia artificial.', iconName: 'Zap' },
      { title: 'Genera Contenido Multimedia', description: 'Crea presentaciones, infografías, videos, música y avatars usando IA generativa con herramientas como Gamma, Midjourney y Suno.', iconName: 'Palette' },
      { title: 'Desarrolla Apps Sin Código', description: 'Construye aplicaciones web completas y landing pages optimizadas para SEO usando websim.ai, Framer y otras plataformas NoCode.', iconName: 'Code' },
    ],
    learningObjectives: [
        'Dominarás herramientas de IA generativa como ChatGPT, Midjourney y modelos LLM avanzados.',
        'Crearás chatbots inteligentes con integración a sistemas empresariales y asistentes de voz con VAPI.',
        'Automatizarás procesos complejos usando Make y n8n para marketing, ventas y gestión empresarial.',
        'Desarrollarás webs profesionales con Framer y b12.io, optimizadas para SEO y posicionamiento en LLMs.',
        'Generarás contenido audiovisual profesional: videos, música, infografías y presentaciones con IA.',
        'Construirás aplicaciones web completas sin programar usando herramientas como Bolt.new y Vercel.',
        'Implementarás estrategias de marketing digital, branding y captación de clientes potenciadas por IA.',
        'Aplicarás principios éticos y consideraciones legales en el desarrollo de soluciones de IA NoCode.'
    ],
    tutorSupport: defaultTutorSupport,
    universityTitration: [sabalUniversity, uemcUniversity],
    syllabusUrl: '/assets/Temario IA APLICADA NP.pdf', // Cambio al nuevo PDF
    // Visuals for this course
    heroColors: ['bg-teal-500', 'bg-rose-400', 'bg-cyan-500', 'bg-fuchsia-400'],
    tutorImageUrl: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
   { 
    id: 'ia-marketing', 
    title: 'Marketing Digital con Inteligencia Artificial', 
    shortDescription: 'Domina el marketing del futuro: SEO inteligente, contenido generativo, análisis predictivo y automatización con IA.',
    imageUrl: '/assets/mk.png', // NEW IMAGE
    duration: '10 Semanas', 
    certification: 'Ebal Formacion & Universidades Colaboradoras',
    isBonificable: true,
    price: 420,
    financingInfo: 'Consulta las opciones de financiación',
    fundaeInfo: '100% Bonificable con FUNDAE',
    type: 'bonificable',
    preparationDetails: 'Este curso te prepara para revolucionar tus estrategias de marketing digital utilizando inteligencia artificial. Aprenderás a crear contenido generativo, optimizar SEO para LLMs, analizar buyer personas con IA, implementar neuromarketing automatizado y desarrollar campañas virales con tecnología de vanguardia.',
    preparationPoints: [
      { title: 'SEO Inteligente y Posicionamiento en LLMs', description: 'Domina el SEO para motores de búsqueda IA como ChatGPT y Bing, optimizando contenido para aparecer en resultados de LLMs.', iconName: 'Search' },
      { title: 'Creación y Automatización de Contenidos', description: 'Genera textos, imágenes y videos con IA, automatiza copywriting y personaliza contenidos a escala masiva.', iconName: 'PenTool' },
      { title: 'Buyer Persona y Customer Journey con IA', description: 'Analiza datos con LLMs para crear buyer personas avanzados, detectar pain points y mapear customer journeys inteligentes.', iconName: 'Users' },
      { title: 'Social Marketing y Tendencias Automatizadas', description: 'Predice tendencias virales, crea contenido que se viraliza y optimiza campañas sociales con análisis predictivo de IA.', iconName: 'TrendingUp' },
    ],
    learningObjectives: [
        'Dominarás la ingeniería de prompts para generar contenido de marketing efectivo con IA generativa.',
        'Optimizarás el SEO para motores de búsqueda IA y LLMs como ChatGPT, Bing y Google con IA.',
        'Crearás buyer personas avanzados y mapearás customer journeys usando análisis de datos con LLMs.',
        'Implementarás estrategias de neuromarketing automatizado para predecir decisiones de compra.',
        'Desarrollarás campañas virales analizando tendencias sociales con herramientas de IA predictiva.',
        'Automatizarás la generación de reviews sintéticas y gestión de reputación online con IA.',
        'Optimizarás segmentación de audiencia y personalización de campañas usando IA avanzada.',
        'Crearás identidades visuales y activos de marca automatizados con IA generativa.',
        'Implementarás marketing automation completo con orquestación de flujos de trabajo inteligentes.',
        'Analizarás KPIs predictivos y optimizarás resultados con dashboards automatizados de IA.'
    ],
    tutorSupport: defaultTutorSupport,
    universityTitration: [sabalUniversity, uemcUniversity],
    syllabusUrl: '/assets/Temario AI MARKETING NP.pdf', // Actualizado al nuevo PDF
    // Visuals for this course
    heroColors: ['bg-red-500', 'bg-cyan-400', 'bg-lime-500', 'bg-violet-400'],
    tutorImageUrl: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
];

export const programmingCourses: Course[] = [
  {
    id: 'bootcamp-ai-engineer',
    title: 'Bootcamp AI Engineer',
    shortDescription: 'El programa más completo para convertirte en ingeniero de IA. Incluye proyectos reales, tutores expertos y bolsa de empleo.',
    imageUrl: '/assets/img11.png',
    duration: '6 meses',
    certification: 'Ebal Formacion & Universidades Colaboradoras',
    isBonificable: false,
    price: undefined,
    financingInfo: 'Consulta las opciones de financiación',
    fundaeInfo: 'Consulta disponibilidad FUNDAE',
    type: 'programacion',
    preparationDetails: 'Formación intensiva en IA aplicada, desde fundamentos hasta despliegue en producción. Incluye Python, LLMs, proyectos reales y acompañamiento profesional.',
    preparationPoints: [
      { title: 'Proyectos Reales', description: 'Trabaja en casos reales de empresas y construye tu portfolio.', iconName: 'Code' },
      { title: 'Mentoría Personalizada', description: 'Acompañamiento de expertos durante todo el bootcamp.', iconName: 'Brain' },
    ],
    learningObjectives: [
      'Dominarás Python, LLMs y frameworks de IA.',
      'Desplegarás modelos en producción.',
      'Accederás a bolsa de empleo y prácticas.',
    ],
    tutorSupport: 'Equipo Docente Ebal Formacion & Colaboradores',
    universityTitration: undefined,
    syllabusUrl: '/assets/Temario Bootcamp IA Engineer.pdf',
    heroColors: ['bg-yellow-400', 'bg-purple-600', 'bg-blue-500', 'bg-fuchsia-500'],
    tutorImageUrl: '/assets/franclemente.jpg',
  },
  {
    id: 'master-ingenieria-datos',
    title: 'Master en Ingeniería de Datos',
    shortDescription: 'Conviértete en experto en arquitecturas de datos, Big Data y Cloud. Incluye certificación Azure o AWS.',
    imageUrl: '/assets/img1.png',
    duration: '9-10 meses',
    certification: 'Ebal Formacion & Universidades Colaboradoras + Azure/AWS',
    isBonificable: false,
    price: 3900,
    financingInfo: 'Consulta las opciones de financiación',
    fundaeInfo: 'Consulta disponibilidad FUNDAE',
    type: 'programacion',
    preparationDetails: 'Master completo en ingeniería de datos con tecnologías punteras: Python, SQL, NoSQL, Spark, Kafka, Docker, Kubernetes y AWS. Incluye proyecto integrador y certificación cloud oficial.',
    preparationPoints: [
      { title: 'Tecnologías Punteras', description: 'Python, SQL, Spark, Kafka, Docker, Kubernetes, AWS y más.', iconName: 'Code' },
      { title: 'Certificación Cloud', description: 'Incluye certificación oficial Azure o AWS a elegir.', iconName: 'Award' },
      { title: 'Proyecto Real', description: 'Desarrolla un proyecto integrador para tu portfolio.', iconName: 'Target' },
    ],
    learningObjectives: [
      'Dominarás las tecnologías más demandadas en ingeniería de datos.',
      'Diseñarás y implementarás arquitecturas de datos escalables.',
      'Obtendrás certificación oficial cloud (Azure o AWS).',
      'Desarrollarás un proyecto integrador completo.',
    ],
    tutorSupport: 'Equipo Docente AEDIA & Expertos en Data Engineering',
    universityTitration: undefined,
    syllabusUrl: '/assets/Temario master BD&IDATA AEDIA.pdf',
    heroColors: ['bg-blue-500', 'bg-purple-600', 'bg-indigo-500', 'bg-cyan-500'],
    tutorImageUrl: '/assets/img1.png',
  },
];

export const allCourses = [...bonificableCourses, ...programmingCourses]; 
