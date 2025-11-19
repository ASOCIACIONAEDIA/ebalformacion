export interface NewsItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  content?: string; // Optional field for full content later
}

export const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    title: 'DeepSeek revoluciona la IA con un modelo de solo 5.6 millones de dólares',
    subtitle: 'La startup china demuestra que la eficiencia puede superar al gasto masivo en recursos.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    category: 'IA Global',
    date: '3 Feb 2025',
    author: 'Carlos Rodríguez',
    readTime: 'Lectura 6 min'
  },
  {
    id: 'news-2',
    title: 'OpenAI presenta ChatGPT-5 para agosto 2025',
    subtitle: 'Sam Altman advierte que el nuevo modelo "se siente muy rápido" y genera preocupaciones.',
    image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg',
    category: 'Innovación',
    date: '31 Jul 2025',
    author: 'María García',
    readTime: 'Lectura 5 min'
  },
  {
    id: 'news-3',
    title: 'Google lanza Gemini 2.0 con capacidades de agentes autónomos',
    subtitle: 'La nueva suite permite completar tareas complejas de múltiples pasos sin supervisión.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
    category: 'Tecnología',
    date: '5 Feb 2025',
    author: 'Ana Martínez',
    readTime: 'Lectura 7 min'
  },
  {
    id: 'news-4',
    title: 'AEDIA celebra el éxito del evento FamilIA en Gines',
    subtitle: 'Becas otorgadas y reconocimiento del Sello AI+2025-2026 al Ayuntamiento.',
    image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg',
    category: 'Eventos AEDIA',
    date: '25 Ene 2025',
    author: 'Equipo AEDIA',
    readTime: 'Lectura 4 min'
  },
  {
    id: 'news-5',
    title: 'AEDIA colabora en "El Gran Ariscalín" con ilustraciones IA',
    subtitle: 'Un proyecto pionero que fusiona literatura infantil e inteligencia artificial.',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg',
    category: 'Creatividad IA',
    date: '23 Abr 2025',
    author: 'Laura Martín',
    readTime: 'Lectura 5 min'
  },
  {
    id: 'news-6',
    title: 'AEDIA presente en el evento AI2030 Madrid',
    subtitle: 'Compartiendo conocimiento junto a Google for Startups, Xataka y Miraiku.',
    image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg',
    category: 'Networking',
    date: '15 Ene 2025',
    author: 'Miguel González',
    readTime: 'Lectura 4 min'
  }
];

export const featuredArticles: NewsItem[] = [
  {
    id: 'featured-1',
    title: 'AEDIA participa como partner activo en IA Educativa - Sevilla',
    subtitle: 'Evento híbrido de acercamiento a la IA en Educación organizado por INTEDUA y ETSII US con colaboración de AEDIA y referentes internacionales.',
    image: 'https://images.pexels.com/photos/8438951/pexels-photo-8438951.jpeg',
    category: 'INFORME ESPECIAL',
    date: '10 Oct 2025',
    author: 'Equipo AEDIA',
    readTime: 'Lectura 8 min'
  },
  {
    id: 'featured-2',
    title: 'Análisis: Los riesgos de seguridad de DeepSeek que preocupan a los gobiernos',
    subtitle: 'Investigadores revelan vulnerabilidades críticas en el modelo chino que han llevado a prohibiciones gubernamentales por riesgos de seguridad nacional.',
    image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg',
    category: 'ENTREVISTA',
    date: '4 Feb 2025',
    author: 'Laura Martín',
    readTime: 'Lectura 12 min'
  }
];

export const allNewsData = [...newsItems, ...featuredArticles]; 