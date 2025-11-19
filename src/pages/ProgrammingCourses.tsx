import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain, Code, Users, Zap, Star, BookOpen, Trophy, Clock, Wifi, Infinity as InfinityIcon,
  Check, Layers3, Database, Server, Wind, TerminalSquare, Cloud, Bot, Share2, Type, SearchCode,
  ChevronDown, ChevronUp, X, Info, FileText, Send, FolderPlus, MessageSquare, HelpCircle, CheckCircle, AlertTriangle, Award
} from 'lucide-react';
import PricingSection from '../components/PricingSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Tutor IA Personal',
    description: 'Recibe ayuda personalizada 24/7 de nuestros tutores IA entrenados por expertos.'
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Código en Vivo',
    description: 'Practica con nuestro editor de código integrado y recibe feedback instantáneo.'
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Contenido Actualizado',
    description: 'Accede a material actualizado sobre las últimas tecnologías en IA.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Comunidad Activa',
    description: 'Aprende junto a otros estudiantes y comparte conocimientos.'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Aprendizaje Rápido',
    description: 'Metodología práctica para aprender IA de forma efectiva y rápida.'
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Certificación',
    description: 'Obtén certificados reconocidos al completar los cursos.'
  }
];

const testimonials = [
  {
    quote: "Viable me ha ayudado a entender conceptos complejos de IA de una manera práctica y sencilla. El tutor AI siempre está disponible para resolver mis dudas.",
    name: "María García",
    role: "Estudiante de Ingeniería",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    quote: "La plataforma es increíble. He podido aprender a implementar modelos de IA en mis proyectos gracias a la práctica en tiempo real.",
    name: "Carlos Rodríguez",
    role: "Desarrollador Full Stack",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    quote: "El enfoque práctico y la retroalimentación instantánea hacen que el aprendizaje sea muy efectivo. Los proyectos son relevantes y actualizados.",
    name: "Ana Martínez",
    role: "Data Scientist",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  }
];

const companies = ['Meliá', 'BBVA', 'AirEuropa', 'Siemens', 'Naturgy'];

const InfoBadges: React.FC = () => (
  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-800 shadow-sm border border-gray-200">
      <Brain className="h-4 w-4 mr-1.5 text-indigo-500" /> Formación en IA y LLMs
    </span>
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-800 shadow-sm border border-gray-200">
      <Star className="h-4 w-4 mr-1.5 text-yellow-400" fill="currentColor" /> 4.9/5
    </span>
  </div>
);

const StatsSection: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-4">
    <div>
      <h3 className="text-3xl font-bold text-purple-600 mb-1">950+</h3>
      <p className="text-xs text-gray-600">Estudiantes activos</p>
    </div>
    <div>
      <h3 className="text-3xl font-bold text-purple-600 mb-1">94%</h3>
      <p className="text-xs text-gray-600">Tasa empleabilidad</p>
    </div>
    <div>
      <h3 className="text-3xl font-bold text-purple-600 mb-1">85k€</h3>
      <p className="text-xs text-gray-600">Salario medio</p>
    </div>
    <div>
      <h3 className="text-3xl font-bold text-purple-600 mb-1">200+</h3>
      <p className="text-xs text-gray-600">Empresas partners</p>
    </div>
  </div>
);

const LevelBoxesSection: React.FC = () => {
  const levels = [
    {
      title: "Fundamentals",
      color: "text-blue-600",
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50",
      description: [
        "Aprende Python desde cero.",
        "Domina SQL para bases de datos.",
        "Control de versiones con Git.",
        "Fundamentos esenciales de IA.",
        "Construye una base sólida."
      ]
    },
    {
      title: "Professional",
      color: "text-indigo-600",
      borderColor: "border-indigo-200",
      bgColor: "bg-indigo-50",
      description: [
        "Especialización en RAG.",
        "Técnicas de Fine-tuning avanzadas.",
        "Bases de datos vectoriales.",
        "Desarrollo con LangChain.",
        "Para profesionales buscando excelencia."
      ]
    },
    {
      title: "Master",
      color: "text-purple-600",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50",
      description: [
        "Viaje completo: 0 a Experto.",
        "Python, SQL, Git, Fundamentos IA.",
        "Desarrollo Full-Stack (Frontend/Backend).",
        "Aplicaciones IA con RAG, MCP, etc.",
        "Creación de aplicaciones completas."
      ]
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-nunito">Nuestros Niveles de Formación</h2>
          <p className="mt-4 text-xl text-gray-600">Encuentra el camino perfecto para tu desarrollo en IA.</p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {levels.map((level) => (
            <motion.div
              key={level.title}
              className={`${level.bgColor} p-8 rounded-lg shadow-lg border ${level.borderColor} transform hover:shadow-xl transition-shadow duration-300 flex flex-col`}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <h3 className={`text-2xl font-bold mb-6 ${level.color}`}>
                {level.title}
              </h3>
              <ul className="space-y-3 text-gray-700 leading-relaxed flex-grow">
                {level.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <Check className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

interface TechStackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TechStackModal: React.FC<TechStackModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const techItems = [
    { name: 'Python', icon: Code }, { name: 'SQL', icon: Database }, { name: 'React', icon: Type },
    { name: 'TypeScript', icon: Type }, { name: 'FastAPI', icon: Server }, { name: 'Tailwind CSS', icon: Wind },
    { name: 'Stripe', icon: Layers3 }, { name: 'MySQL', icon: Database }, { name: 'Git', icon: TerminalSquare },
    { name: 'Docker', icon: Layers3 }, { name: 'Gemini API', icon: Brain }, { name: 'LangChain', icon: Share2 },
    { name: 'Vector DBs', icon: Database }, { name: 'Hugging Face', icon: Bot }, { name: 'Cloud AI', icon: Cloud },
  ];
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-center p-4">
      <div className="relative mx-auto p-8 border w-full max-w-3xl shadow-lg rounded-md bg-white">
        <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold text-center mb-8">Tecnologías Que Aprenderás</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-8 gap-x-4 text-center">
          {techItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-purple-100 rounded-full flex items-center justify-center mb-2 shadow-md">
                <item.icon className="h-8 w-8 text-indigo-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TechStackSection: React.FC<{ onExploreClick: () => void }> = ({ onExploreClick }) => (
  <div className="bg-indigo-700 py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="inline-block bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Tech Stack</span>
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        Domina la tecnología más demandada
      </h2>
      <p className="mt-4 text-xl text-indigo-200 max-w-2xl mx-auto">
        Aprende las herramientas y frameworks que están transformando la industria y creando el futuro de la IA.
      </p>
      <div className="mt-10">
        <button
          onClick={onExploreClick}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 transition duration-300"
        >
          Explorar tecnologías
        </button>
      </div>
    </div>
  </div>
);

const featuresForSection = [
  { icon: Brain, title: 'Tutor IA Personal', description: 'Recibe ayuda personalizada 24/7 de nuestros tutores IA entrenados por expertos.' },
  { icon: Code, title: 'Código en Vivo', description: 'Practica con nuestro editor de código integrado y recibe feedback instantáneo.' },
  { icon: BookOpen, title: 'Contenido Actualizado', description: 'Accede a material actualizado sobre las últimas tecnologías en IA.' },
  { icon: Users, title: 'Comunidad Activa', description: 'Aprende junto a otros estudiantes y comparte conocimientos.' },
  { icon: Zap, title: 'Aprendizaje Rápido', description: 'Metodología práctica para aprender IA de forma efectiva y rápida.' },
  { icon: Trophy, title: 'Certificación', description: 'Obtén certificados reconocidos al completar los cursos.' }
];

interface SyllabusModalProps { isOpen: boolean; onClose: () => void; }
const SyllabusModal: React.FC<SyllabusModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const syllabusByLevel = {
    fundamentals: [
      { title: "Módulo 1: Python Fundamentals", topics: ["Variables", "Strings", "Listas", "Condicionales", "Bucles", "Funciones", "POO Básica", "Fechas", "RegEx", "Excepciones"] },
      { title: "Módulo 2: SQL Fundamentals", topics: ["Conceptos DB", "SELECT", "WHERE", "JOINs", "Agregación", "Modificación Datos", "Subconsultas", "Vistas"] },
      { title: "Módulo 3: Git Fundamentals", topics: ["Conceptos", "Repositorios", "Commits", "Branches", "Merging", "GitHub/GitLab", "Flujo de Trabajo"] },
      { title: "Módulo 4: IA Generativa Fundamentals", topics: ["¿Qué es GenAI?", "Embeddings", "LLMs (Gemini, Claude)", "Prompt Engineering Básico"] },
      { title: "Módulo 5: Tratamiento de datos Fundamentals", topics: ["Numpy", "Pandas (Series, DataFrames)", "Limpieza", "Agregación", "Visualización Básica (Matplotlib/Seaborn)"] },
    ],
    professional: [
      { title: "Módulo 1: Entorno de Desarrollo Profesional", topics: ["Gestores de Paquetes (pip, conda)", "Entornos Virtuales", "Docker Básico", "Pre-commit Hooks", "Testing (pytest)"] },
      { title: "Módulo 2: Backend y Frontend", topics: ["FastAPI (Endpoints, Pydantic)", "React (Componentes, Hooks)", "TypeScript", "TailwindCSS", "Integración API"] },
      { title: "Módulo 3: Frontend Avanzado con Python", topics: ["Streamlit", "Gradio", "Panel/Bokeh", "Creación de Demos Interactivas"] },
      { title: "Módulo 4: Modelos IA Locales", topics: ["Descarga y Uso (Transformers)", "GPT4All", "LM Studio", "APIs Locales (Ollama)"] },
      { title: "Módulo 5: LangChain", topics: ["Introducción", "Cadenas (Chains)", "Agentes", "Herramientas (Tools)", "Memoria", "Callbacks"] },
      { title: "Módulo 6: Bases de Datos Vectoriales", topics: ["¿Qué son?", "Embeddings", "Búsqueda por Similitud", "ChromaDB", "FAISS", "Integración con RAG"] },
    ],
    master: [
      { title: "Módulo 1: Hugging Face 1 - Introducción", topics: ["Plataforma HF", "Models, Datasets, Spaces", "Ecosistema (Transformers, Datasets, etc.)"] },
      { title: "Módulo 2: Hugging Face 2 - Transformers", topics: ["Instalación", "Pipelines", "Carga Manual Modelos/Tokenizers", "Generación Texto", "Generación Imágenes (Diffusers)"] },
      { title: "Módulo 3: Hugging Face 3 - Spaces", topics: ["¿Qué son Spaces?", "Crear Space con Streamlit", "Despliegue Git"] },
      { title: "Módulo 4: Fine-tuning de Modelos LLM", topics: ["Conceptos FT/PEFT", "Preparación Datos", "FT con BERT", "FT Eficiente (Unsloth)", "Inferencia"] },
      { title: "Módulo 5: Replicate - Modelos en la Nube", topics: ["¿Qué es Replicate?", "API Token", "Ejecutar Modelos (Python)", "Entradas/Salidas Archivos (Próximamente)"] },
      { title: "Módulo 6: AWS Bedrock - Modelos Generativos en la Nube", topics: ["¿Qué es Bedrock?", "Configuración Boto3", "Llamar Modelos Texto (Claude/Titan)"] },
      { title: "Módulo 7: RAG con VLM (Modelos de Lenguaje Multimodales)", topics: ["¿Qué son VLMs?", "RAG Visual con GPT-4 Vision", "Análisis Módulos", "API Backend", "Cliente Frontend"] },
      { title: "Módulo 8: Proyecto Final", topics: ["Definición y Alcance", "Libertad de Elección", "Tecnologías del Curso", "Entregables"] },
    ]
  };
  const [activeTab, setActiveTab] = useState('fundamentals');
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-start p-4 pt-10">
      <div className="relative mx-auto p-8 border w-full max-w-4xl shadow-lg rounded-md bg-white">
        <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-600"><X size={20} /></button>
        <h2 className="text-3xl font-bold text-center mb-8">Temario Detallado por Nivel</h2>
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex justify-center space-x-8" aria-label="Tabs">
            {Object.keys(syllabusByLevel).map((key) => (
              <button key={key} onClick={() => setActiveTab(key)}
                className={`${activeTab === key ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}>
                {key}
              </button>
            ))}
          </nav>
        </div>
        <div>
          {(activeTab === 'fundamentals' || activeTab === 'professional' || activeTab === 'master') && (
            <div>
              <h3 className={`text-xl font-semibold ${activeTab === 'fundamentals' ? 'text-blue-600' : activeTab === 'professional' ? 'text-indigo-600' : 'text-purple-600'} mb-4`}>Nivel {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h3>
              {activeTab !== 'fundamentals' && <p className="text-sm text-gray-600 mb-4">Incluye además todo el temario de niveles anteriores.</p>}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {syllabusByLevel[activeTab as keyof typeof syllabusByLevel].map((module) => (
                  <div key={module.title} className={`p-4 border rounded ${activeTab === 'fundamentals' ? 'bg-blue-50 border-blue-200' : activeTab === 'professional' ? 'bg-indigo-50 border-indigo-200' : 'bg-purple-50 border-purple-200'}`}>
                    <h4 className={`font-semibold ${activeTab === 'fundamentals' ? 'text-blue-800' : activeTab === 'professional' ? 'text-indigo-800' : 'text-purple-800'} mb-2`}>{module.title}</h4>
                    <ul className={`list-disc list-inside text-sm ${activeTab === 'fundamentals' ? 'text-blue-700' : activeTab === 'professional' ? 'text-indigo-700' : 'text-purple-700'} space-y-1`}>
                      {module.topics.map(topic => <li key={topic as string}>{topic as string}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface DemoVideoModalProps { isOpen: boolean; onClose: () => void; }
const DemoVideoModal: React.FC<DemoVideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl relative">
        <button onClick={onClose} className="absolute -top-3 -right-3 text-white bg-gray-700 hover:bg-gray-900 rounded-full p-1 z-10">
          <X size={20} />
        </button>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/PFc4HrpDs6c?autoplay=1" // Placeholder video
            title="Demo Viable"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  );
};

const ConversionSection: React.FC = () => (
  <div className="bg-gradient-to-r from-purple-600 to-indigo-700 py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        ¿Listo para dar el salto a la Inteligencia Artificial?
      </h2>
      <p className="mt-4 text-xl text-indigo-100">
        Únete a miles de estudiantes y profesionales que están construyendo el futuro.
        Con Viable, tienes todo el apoyo y los recursos para tener éxito.
      </p>
      <div className="mt-10">
        <a // Changed to a link to avoid login/register modal issues
          href="https://learningviable.com/" // MODIFICADO: Nueva URL
          className="inline-block bg-yellow-400 text-gray-900 px-10 py-4 rounded-lg font-medium hover:bg-yellow-500 transition-colors text-lg shadow-lg transform hover:scale-105"
        >
          Accede a Viable
        </a>
      </div>
    </div>
  </div>
);



const programmingTestimonials = [
  {
    name: 'Francisco Clemente Fernández',
    role: 'Alumno Bootcamp AI Engineer',
    image: '/assets/franclemente.jpg',
    linkedin: 'https://www.linkedin.com/in/franciscoclementefernandez/',
    quote: 'Gracias al bootcamp de Ebal Formacion he dado el salto profesional que buscaba en IA. El acompañamiento y los proyectos reales marcan la diferencia.',
    rating: 5
  },
  {
    name: 'Natalio Altube',
    role: 'Alumno Bootcamp AI Engineer',
    image: '/assets/natalio.jpg',
    linkedin: 'https://www.linkedin.com/in/natalio-altube/',
    quote: 'La formación es muy práctica y el networking con otros alumnos y profesores es brutal. Ahora trabajo en proyectos de IA que me apasionan.',
    rating: 5
  },
  {
    name: 'Iván Dapena Morillo',
    role: 'Alumno Máster AI Engineer',
    image: '/assets/ivan.jpg',
    linkedin: 'https://www.linkedin.com/in/iv%C3%A1n-dapena-morillo/',
    quote: 'El bootcamp me ha dado la confianza y los conocimientos para liderar proyectos de IA. Lo recomiendo totalmente.',
    rating: 5
  },
  {
    name: 'Francisco Jose Parejo',
    role: 'Alumno Bootcamp AI Engineer',
    image: '/assets/fran.jpg',
    linkedin: 'https://www.linkedin.com/in/franciscoparjim-data-engineer-ia/',
    quote: 'Ebal Formacion me ha abierto las puertas al mundo de la inteligencia artificial aplicada. El temario y los tutores son de primer nivel.',
    rating: 5
  },
  {
    name: 'Fernando Cano',
    role: 'Empresario y Director de Proyectos IA',
    image: '/assets/fcm.jpg',
    linkedin: 'https://www.linkedin.com/in/fernando-cano-mora/',
    quote: 'Como empresario, el bootcamp de Ebal Formacion me ha permitido liderar proyectos de IA en mi empresa con seguridad y visión estratégica. Es la mejor inversión para cualquier directivo.',
    rating: 5
  },
  {
    name: 'Fede Caruso',
    role: 'Alumno Bootcamp AI Engineer',
    image: '/assets/fede.jpg',
    linkedin: 'https://www.linkedin.com/in/fede-caruso-0a5079246/',
    quote: 'El enfoque práctico y el apoyo de los tutores me ayudaron a entender la IA desde cero y aplicarla en mi trabajo diario.',
    rating: 5
  },
  {
    name: 'Victor Ortin',
    role: 'Alumno IA No Code',
    image: '/assets/victor.jpg',
    linkedin: 'https://www.linkedin.com/in/victor-ortin-montiel-10649834b/',
    quote: 'El bootcamp de Ebal Formacion es ideal para quienes quieren dominar la IA sin necesidad de programar. La parte de No Code es brutal.',
    rating: 5
  },
  {
    name: 'Juan Carlos Loayza',
    role: 'Alumno Bootcamp AI Engineer',
    image: '/assets/jcl.jpg',
    linkedin: 'https://www.linkedin.com/in/juan-carlos-loayza-vaca-423646163/',
    quote: 'La experiencia en el bootcamp ha sido transformadora. Ahora puedo aportar soluciones de IA en mi empresa y seguir creciendo profesionalmente.',
    rating: 5
  }
];

const ProgrammingCourses = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showTechStackModal, setShowTechStackModal] = useState(false);
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section (Reimagined) */}
      <div className="relative bg-gradient-to-br from-indigo-200 via-purple-300 to-fuchsia-300 pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <InfoBadges />
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-blue-600">Activa el modo IA.</span>
                <span className="block text-gray-800">Transforma tu carrera.</span>
              </h1>
              <p className="mt-6 text-lg text-gray-700">
                Adquiere las habilidades que están transformando todas las industrias y asegura tu lugar en la revolución tecnológica con una formación diferencial.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a // Changed to a link to avoid login/register modal issues
                  href="https://learningviable.com/" // MODIFICADO: Nueva URL
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
                >
                  Accede a Viable <span aria-hidden="true" className="ml-2">→</span>
                </a>
                <button
                  onClick={() => setShowDemoModal(true)}
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-300 shadow-sm"
                >
                  Ver demo
                </button>
              </div>
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 text-sm text-gray-700">
                <span className="inline-flex items-center">
                  <Check className="h-4 w-4 mr-1.5 text-green-500" /> Certificación Oficial
                </span>
                <span className="inline-flex items-center">
                  <Trophy className="h-4 w-4 mr-1.5 text-yellow-500" /> Top 1% Instructores
                </span>
                <span className="inline-flex items-center">
                  <Users className="h-4 w-4 mr-1.5 text-blue-500" /> +10k Estudiantes
                </span>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-2xl">
                <img
                  className="w-full object-cover h-[300px] lg:h-[400px] rounded-md" // Added rounded-md
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                  alt="Profesional IA trabajando con iluminación Ciberpunk"
                />
                <div className="pt-3 sm:pt-4">
                  <StatsSection />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
          </motion.div>
        </div>
      </div>


      <LevelBoxesSection />

      <div className="text-center py-12 -mt-8 bg-white"> {/* Ensure button is on white background if LevelBoxesSection ends with different bg */}
        <button
          onClick={() => setShowSyllabusModal(true)}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition duration-300"
        >
          Explora todo el temario
        </button>
      </div>

      <TechStackSection onExploreClick={() => setShowTechStackModal(true)} />

      {/* Features Section ("Todo lo que necesitas para dominar la IA") */}
      <div className="py-16 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Características</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-nunito">
              Todo lo que necesitas para dominar la IA
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {featuresForSection.map((feature) => (
                <motion.div
                  key={feature.title}
                  className="relative p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Aprende a tu Manera Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-nunito">
              Aprende a tu Manera
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Flexibilidad total para que adaptes el aprendizaje a tu vida, sin presiones ni horarios fijos.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <motion.div
              className="relative mb-12 lg:mb-0 p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-purple-600 rounded-xl transform -rotate-2 -translate-x-1 translate-y-1 z-0 opacity-75"></div>

              <img
                className="relative w-full rounded-lg shadow-xl object-cover object-center h-80 lg:h-96 z-10"
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Estudiantes aprendiendo online con IA"
              />
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15 }}
            >
              {[
                { icon: Clock, title: 'A tu Ritmo', description: 'Avanza en los cursos según tu disponibilidad y velocidad.' },
                { icon: Wifi, title: '100% Online', description: 'Accede desde cualquier lugar con conexión a internet.' },
                { icon: InfinityIcon, title: 'Sin Límite de Acceso', description: 'Revisa el material y practica cuantas veces necesites.' },
                { icon: Zap, title: 'Tutor IA 24/7', description: 'Resuelve dudas al instante con nuestro asistente inteligente.' }
              ].map(item => (
                <motion.div
                  key={item.title}
                  className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
                  variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                >
                  <item.icon className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <ConversionSection />
      <PricingSection />



      {/* Modals */}
      <DemoVideoModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />
      <TechStackModal isOpen={showTechStackModal} onClose={() => setShowTechStackModal(false)} />
      <SyllabusModal isOpen={showSyllabusModal} onClose={() => setShowSyllabusModal(false)} />
    </div>
  );
};

export default ProgrammingCourses;
