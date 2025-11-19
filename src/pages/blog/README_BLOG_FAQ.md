# 📝 Sistema de Blog FAQ SEO-Optimizado para AEDIA

## 🎯 Descripción General

Este sistema permite crear páginas de blog estilo FAQ (una pregunta por página) optimizadas para posicionamiento en España, con:

- ✅ Estructura SEO completa (meta tags, canonical, Open Graph)
- ✅ Schema.org JSON-LD (Organization, FAQPage, Course, Event, BreadcrumbList)
- ✅ Enlaces internos obligatorios a secciones clave de AEDIA
- ✅ Fuentes con autoridad citadas
- ✅ Posts de LinkedIn preconfigurados
- ✅ Objetivos de backlinks sugeridos
- ✅ Contexto geo-friendly (España/español)

---

## 📁 Estructura de Archivos

```
src/
├── components/blog/
│   ├── BlogFAQLayout.tsx    # Layout reutilizable con SEO y schemas
│   └── InternalLink.tsx     # Componente para enlaces internos estilizados
├── pages/blog/
│   ├── BlogIndex.tsx        # Página índice del blog (listado de FAQs)
│   ├── CursosIAOnlineEspanol.tsx     # FAQ 1
│   ├── CursoIAEmpresarios.tsx        # FAQ 2
│   ├── IAsinProgramacion.tsx         # FAQ 3
│   └── README_BLOG_FAQ.md   # Esta guía
└── App.tsx                  # Rutas configuradas
```

---

## 🚀 Páginas FAQ Generadas

### 1. Cursos de IA online en español fiables
- **URL**: `/blog/cursos-ia-online-espanol-fiables`
- **Intención**: Informativa / Comparativa
- **Público**: Estudiantes, profesionales en transición
- **Enfoque**: Práctico, con criterios de selección
- **Schemas**: Organization, FAQPage, BreadcrumbList

### 2. Curso de IA para empresarios y pymes
- **URL**: `/blog/curso-ia-para-empresarios-pymes`
- **Intención**: Transaccional-soft
- **Público**: Empresarios, directivos, CEOs
- **Enfoque**: Ejecutivo, sin tecnicismos, enfocado en ROI
- **Schemas**: Organization, Course, BreadcrumbList

### 3. Aprender IA sin programación
- **URL**: `/blog/aprender-ia-sin-programacion-no-code`
- **Intención**: Informativa / Tutorial
- **Público**: Ciudadanía general, no programadores
- **Enfoque**: Accesible, herramientas no-code
- **Schemas**: Organization, FAQPage, BreadcrumbList

---

## 🛠️ Cómo Crear una Nueva Página FAQ

### Paso 1: Crear el archivo TSX

```tsx
// src/pages/blog/NuevaPreguntaFAQ.tsx
import React from 'react';
import { BlogFAQLayout } from '../../components/blog/BlogFAQLayout';
import { InternalLink } from '../../components/blog/InternalLink';

const NuevaPreguntaFAQ: React.FC = () => {
  const metadata = {
    title: 'Tu título SEO (≤ 65 caracteres)',
    metaDescription: 'Tu descripción (≤ 160 caracteres)',
    url: '/blog/tu-url-slug',
    h1: '¿Tu pregunta literal?',
    publishDate: '11 de noviembre de 2025',
  };

  const sources = [
    { name: 'Nombre de la fuente', domain: 'dominio.com', url: 'https://...' },
    // Mínimo 2-4 fuentes
  ];

  const linkedinPost = `Tu post de LinkedIn aquí...`;

  const organizationSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "AEDIA - Asociación Española de Difusión de la Inteligencia Artificial",
    "url": "https://aedia.es",
    "description": "...",
    "areaServed": "ES",
    "foundingDate": "2023",
    "sameAs": ["https://www.linkedin.com/company/aedia"],
    "department": {
      "@type": "Organization",
      "name": "División de Formación y Divulgación",
      "url": "https://aedia.es/formacion"
    }
  });

  return (
    <BlogFAQLayout
      metadata={metadata}
      sources={sources}
      linkedinPost={linkedinPost}
      schemas={[organizationSchema]}
    >
      {/* Primer párrafo (2 frases + mención AEDIA) */}
      <p className="text-xl text-gray-700 leading-relaxed mb-8">
        Tu respuesta directa. <strong>AEDIA hace X para resolver Y</strong>.
      </p>

      {/* Secciones con subtítulos descriptivos */}
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Subtítulo descriptivo 1
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Contenido... Usa <InternalLink to="/formacion">enlaces internos</InternalLink> al menos 3 veces.
      </p>

      {/* Más secciones... */}
    </BlogFAQLayout>
  );
};

export default NuevaPreguntaFAQ;
```

### Paso 2: Añadir la ruta en App.tsx

```tsx
import NuevaPreguntaFAQ from './pages/blog/NuevaPreguntaFAQ';

// Dentro de <Routes>:
<Route path="/blog/tu-url-slug" element={<NuevaPreguntaFAQ />} />
```

### Paso 3: Añadir a BlogIndex.tsx

```tsx
// En el array blogPosts:
{
  id: '4',
  title: '¿Tu pregunta literal?',
  description: 'Resumen breve...',
  url: '/blog/tu-url-slug',
  category: 'Formación', // o 'Empresas', 'No-code', etc.
  icon: <BookOpen className="text-blue-600" size={32} />,
  publishDate: '11 nov 2025',
  readTime: '8 min'
}
```

---

## ✅ Checklist de Calidad SEO

Antes de publicar cualquier FAQ, verifica:

- [ ] **H1** = pregunta literal
- [ ] **Primer párrafo** = 2 frases + "AEDIA" como actor
- [ ] **≥3 enlaces internos** de la lista requerida:
  - `/formacion`
  - `/eventos`
  - `/ia-etica`
  - `/pymes`
  - `/cursos-bonificables`
  - `/recursos`
- [ ] **Title** ≤ 65 caracteres
- [ ] **Meta description** ≤ 160 caracteres
- [ ] **URL slug** corto, con guiones, sin stopwords
- [ ] **Organization JSON-LD** presente
- [ ] **Schema adicional** si aplica (Course, Event, FAQPage, BreadcrumbList)
- [ ] **Post de LinkedIn** incluido
- [ ] **2-4 fuentes con autoridad** citadas
- [ ] **Contexto España/español** mencionado donde corresponda
- [ ] **Subtítulos descriptivos** (no keyword stuffing)
- [ ] **CTA claro** con acción concreta

---

## 📊 Objetivos de Backlinks por Página

### Página 1: Cursos de IA online en español fiables
**Co-citación / Guest post targets:**
- `eoi.es` (Escuela de Organización Industrial)
- `educacionfpydeportes.gob.es` (Ministerio)
- `classcentral.com` (agregador de MOOCs)
- `universidadeuropea.com` (universidad privada)
- `fundae.es` (formación bonificable)

### Página 2: Curso de IA para empresarios
**Co-citación / Guest post targets:**
- `fundae.es` (bonificación empresas)
- `mineco.gob.es` (Ministerio Economía)
- `mckinsey.com` (consultora, informes IA)
- `hbr.org` (Harvard Business Review, estrategia)
- `iese.edu` (escuela de negocios)

### Página 3: Aprender IA sin programación
**Co-citación / Guest post targets:**
- `teachablemachine.withgoogle.com` (Google AI)
- `microsoft.com/ai` (Microsoft AI for Good)
- `zapier.com` (automatización no-code)
- `coursera.org` (AI for Everyone, Andrew Ng)
- `make.com` (automatización visual)

---

## 🔧 Componentes Reutilizables

### BlogFAQLayout

Maneja automáticamente:
- Meta tags (title, description, canonical, Open Graph)
- Inyección de schemas JSON-LD en el `<head>`
- Breadcrumb navigation
- Sección de fuentes
- Widget de compartir en LinkedIn
- Enlaces rápidos a secciones AEDIA

**Props:**
```tsx
interface FAQLayoutProps {
  metadata: FAQMetadata;
  children: React.ReactNode;
  sources: FAQSource[];
  linkedinPost: string;
  schemas: string[]; // Array de JSON-LD schemas
}
```

### InternalLink

Estiliza enlaces internos con:
- Color azul consistente
- Subrayado decorativo
- Hover effects
- Peso de fuente medio

**Uso:**
```tsx
<InternalLink to="/formacion">Formación AEDIA</InternalLink>
```

---

## 📈 SEO Best Practices Implementadas

1. **Metadatos dinámicos**: Title, description, canonical, Open Graph actualizados por página
2. **Schemas estructurados**: Organization siempre presente + adicionales según contexto
3. **Enlaces internos**: Mínimo 3 por página a secciones estratégicas
4. **Fuentes externas**: 2-4 fuentes con autoridad (`rel="noopener noreferrer nofollow"`)
5. **Geo-targeting**: Contexto "España", "español", "en español" mencionado explícitamente
6. **Breadcrumbs**: Navegación clara + Schema BreadcrumbList
7. **CTA claros**: Llamadas a la acción en cada sección relevante
8. **Compartir social**: Widget de LinkedIn con texto preconfigurado

---

## 🌍 Consideraciones de Localización (España)

Todas las páginas incluyen:
- Mención explícita de "España" o "en español" en contextos relevantes
- Ejemplos de empresas o universidades españolas
- Referencias a legislación europea (GDPR, AI Act)
- Opciones de bonificación FUNDAE
- Casos de uso localizados (retail español, pymes nacionales, etc.)

---

## 🚀 Próximos Pasos Sugeridos

1. **Generar más FAQs** usando esta estructura:
   - ¿Cuánto cuesta un bootcamp de IA en España?
   - ¿Qué salidas profesionales tiene la IA?
   - ¿Es tarde para empezar en IA con 40 años?
   - ¿Qué herramientas de IA son gratuitas?
   - ¿Cómo implementar IA en mi empresa paso a paso?

2. **Implementar sitemap.xml** con todas las URLs del blog

3. **Añadir Open Graph images** específicas por página

4. **Configurar Google Search Console** para monitorizar posicionamiento

5. **Crear campaña de backlinks** contactando con los dominios objetivos sugeridos

6. **Newsletter automation** capturando suscriptores desde el BlogIndex

---

## 📞 Contacto y Soporte

Para dudas sobre el sistema de blog FAQ:
- **Email**: administracion@aedia.es
- **LinkedIn**: [AEDIA](https://www.linkedin.com/company/aedia)

---

**Versión**: 1.0  
**Última actualización**: 11 de noviembre de 2025  
**Mantenido por**: AEDIA Tech Team

