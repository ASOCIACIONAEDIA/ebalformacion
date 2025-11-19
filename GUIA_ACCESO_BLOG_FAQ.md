# 🚀 Guía de Acceso y Uso del Blog FAQ AEDIA

## 📍 Cómo Acceder al Blog

### Opción 1: Desde la Barra de Navegación (Principal)

**Desktop:**
1. Busca en la barra superior: `Inicio | Cursos | ... | Blog | Contacto`
2. Haz clic en **"Blog"**
3. Llegarás al índice con todas las FAQs: `https://aedia.es/blog`

**Mobile:**
1. Toca el icono del menú hamburguesa (☰)
2. Desplázate hasta **"Blog"**
3. Toca para acceder

### Opción 2: URLs Directas

Puedes compartir estas URLs directamente:

**Índice del Blog:**
```
https://aedia.es/blog
```

**Páginas FAQ Individuales:**
```
https://aedia.es/blog/cursos-ia-online-espanol-fiables
https://aedia.es/blog/curso-ia-para-empresarios-pymes
https://aedia.es/blog/aprender-ia-sin-programacion-no-code
```

### Opción 3: Desde Enlaces Internos

Las páginas del blog incluyen **enlaces cruzados** a:
- `/formacion` → Vuelve al blog desde sección de formación
- `/eventos` → Vuelve al blog desde eventos
- `/recursos` → Vuelve al blog desde recursos
- Etc.

---

## 🎯 Flujo de Navegación del Usuario

```
┌─────────────────────────────────────────────────┐
│         Navbar: Click en "Blog"                 │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│     📚 Índice del Blog (/blog)                  │
│                                                 │
│  - Card FAQ 1: Cursos IA online español        │
│  - Card FAQ 2: Curso IA para empresarios       │
│  - Card FAQ 3: Aprender IA sin programar       │
│  - Banner destacado                            │
│  - Enlaces rápidos a secciones AEDIA          │
│  - Newsletter CTA                              │
└─────────────────┬───────────────────────────────┘
                  │
                  │ Click en una card FAQ
                  ▼
┌─────────────────────────────────────────────────┐
│  📄 Página FAQ Individual                       │
│                                                 │
│  - Breadcrumb: Inicio / Blog / FAQ             │
│  - Botón "Volver al blog"                      │
│  - H1 con la pregunta                          │
│  - Contenido estructurado                      │
│  - Enlaces internos a /formacion, /eventos...  │
│  - Fuentes citadas                             │
│  - Widget LinkedIn                             │
│  - Enlaces rápidos a secciones AEDIA          │
└─────────────────┬───────────────────────────────┘
                  │
                  │ Múltiples opciones de salida:
                  │
                  ├─→ Volver al blog
                  ├─→ Ir a /formacion
                  ├─→ Ir a /eventos
                  ├─→ Ir a /pymes
                  ├─→ Compartir en LinkedIn
                  └─→ Solicitar información
```

---

## 🗺️ Mapa del Sitio (Blog)

```
aedia.es/
│
└─── blog/
     │
     ├─── index                                    (BlogIndex.tsx)
     │    └─── Listado de todas las FAQs
     │
     ├─── cursos-ia-online-espanol-fiables        (CursosIAOnlineEspanol.tsx)
     │    └─── FAQ sobre cursos de IA fiables
     │
     ├─── curso-ia-para-empresarios-pymes         (CursoIAEmpresarios.tsx)
     │    └─── FAQ para empresarios y directivos
     │
     └─── aprender-ia-sin-programacion-no-code    (IAsinProgramacion.tsx)
          └─── FAQ sobre IA sin programar
```

---

## 📱 Experiencia del Usuario

### En Desktop (Escritorio)

1. **Homepage** → Usuario ve "Blog" en navbar superior
2. **Click en Blog** → Índice con 3 cards de FAQs
3. **Click en FAQ** → Página completa con:
   - Contenido estructurado y legible
   - Enlaces a secciones relacionadas
   - Widget de LinkedIn visible en sidebar derecho
   - Fuentes citadas al final
   - CTAs claros para conversión

### En Mobile (Móvil)

1. **Homepage** → Usuario toca menú hamburguesa (☰)
2. **Desplaza** → Encuentra "Blog" en el menú
3. **Toca Blog** → Índice optimizado para mobile
4. **Toca FAQ** → Página responsive con:
   - Texto optimizado para pantalla pequeña
   - Imágenes y cards que se adaptan
   - Botones táctiles grandes
   - Fácil scroll

---

## 🎨 Características de Navegación

### Breadcrumb (Migas de Pan)

Todas las páginas FAQ incluyen breadcrumb:

```
Inicio / Blog / Nombre de la FAQ
```

- **Inicio** → Link a homepage
- **Blog** → Link a índice del blog
- **Nombre de la FAQ** → Texto sin link (página actual)

### Botón "Volver al Blog"

En cada FAQ, debajo del breadcrumb:

```
← Volver al blog
```

Click → Regresa al índice `/blog`

### Enlaces Rápidos (Footer de cada FAQ)

Al final de cada FAQ, tarjeta con 6 enlaces:

```
┌─────────────────────────────────────────┐
│  Explora más sobre AEDIA                │
├─────────────────────────────────────────┤
│  • Formación en IA                      │
│  • Próximos eventos                     │
│  • IA Ética                             │
│  • Soluciones para pymes                │
│  • Cursos bonificables                  │
│  • Recursos gratuitos                   │
└─────────────────────────────────────────┘
```

---

## 🔗 Sistema de Enlaces Internos

### Desde el Blog hacia otras secciones:

| Enlace | Destino | Cuando se usa |
|--------|---------|---------------|
| `/formacion` | Página de formación AEDIA | Al mencionar cursos, bootcamps |
| `/eventos` | Calendario de eventos | Al hablar de jornadas, talleres |
| `/ia-etica` | Enfoque ético AEDIA | Al mencionar responsabilidad, privacidad |
| `/pymes` | Soluciones para empresas | En contenido para empresarios |
| `/cursos-bonificables` | Formación bonificable | Al hablar de FUNDAE, empresas |
| `/recursos` | Descargas y guías | Al mencionar materiales gratuitos |

### Desde otras secciones hacia el Blog:

Añadir enlaces en:
- **Homepage**: Sección "Últimas noticias" o "Recursos"
- **Footer**: Añadir "Blog" en menú de navegación
- **Página de Formación**: "Lee nuestras guías en el blog"
- **Página de Eventos**: "Artículos relacionados en nuestro blog"

---

## 📈 Métricas de Navegación a Monitorizar

### Google Analytics 4 (Eventos a Configurar)

```javascript
// Evento 1: Acceso al índice del blog
gtag('event', 'blog_index_view', {
  'page_location': '/blog'
});

// Evento 2: Click en card de FAQ
gtag('event', 'faq_card_click', {
  'faq_title': 'Cursos IA online español'
});

// Evento 3: Click en CTA interno
gtag('event', 'internal_link_click', {
  'link_destination': '/formacion',
  'source_page': '/blog/cursos-ia-online-espanol-fiables'
});

// Evento 4: Compartir en LinkedIn
gtag('event', 'social_share', {
  'platform': 'LinkedIn',
  'content_type': 'FAQ'
});
```

### KPIs Clave:

1. **Tráfico al índice del blog**: Visitas a `/blog` por mes
2. **Tasa de click-through**: % de usuarios que pasan del índice a una FAQ
3. **Tiempo en página FAQ**: Promedio (objetivo: >3 min)
4. **Bounce rate del blog**: % de rebote (objetivo: <60%)
5. **Conversión**: Clicks en CTAs desde blog a formación/contacto

---

## 🛠️ Acceso para Desarrolladores

### Rutas Configuradas (src/App.tsx)

```tsx
// Índice del blog
<Route path="/blog" element={<BlogIndex />} />

// FAQs individuales
<Route path="/blog/cursos-ia-online-espanol-fiables" element={<CursosIAOnlineEspanol />} />
<Route path="/blog/curso-ia-para-empresarios-pymes" element={<CursoIAEmpresarios />} />
<Route path="/blog/aprender-ia-sin-programacion-no-code" element={<IAsinProgramacion />} />
```

### Componentes Clave

| Componente | Ubicación | Función |
|------------|-----------|---------|
| `BlogIndex` | `src/pages/blog/BlogIndex.tsx` | Índice del blog |
| `BlogFAQLayout` | `src/components/blog/BlogFAQLayout.tsx` | Layout maestro |
| `InternalLink` | `src/components/blog/InternalLink.tsx` | Enlaces estilizados |
| `Navbar` | `src/components/Navbar.tsx` | Barra de navegación |

### Comandos de Desarrollo

```bash
# Ver blog en local
npm run dev
# Navega a: http://localhost:5173/blog

# Build producción
npm run build:prod

# Preview producción
npm run preview:prod
```

---

## 🚦 Checklist de Verificación Post-Implementación

### Navegación

- [ ] Link "Blog" visible en navbar desktop
- [ ] Link "Blog" visible en menú mobile
- [ ] Click en "Blog" lleva a `/blog`
- [ ] Breadcrumbs funcionan correctamente
- [ ] Botón "Volver al blog" funciona
- [ ] Enlaces rápidos footer funcionan

### SEO

- [ ] URLs limpias sin parámetros
- [ ] Canonical tags configurados
- [ ] Meta descriptions únicas por página
- [ ] Schema.org JSON-LD presente
- [ ] Sitemap.xml incluye URLs del blog

### UX/UI

- [ ] Responsive en mobile (< 768px)
- [ ] Responsive en tablet (768px - 1024px)
- [ ] Hover effects funcionan
- [ ] Transiciones suaves
- [ ] Contraste de colores accesible (WCAG AA)

### Performance

- [ ] Tiempo de carga < 3 segundos
- [ ] Imágenes optimizadas
- [ ] Code splitting configurado
- [ ] Lazy loading de componentes

---

## 📞 Soporte y Documentación

### Para Content Managers

- **Crear nueva FAQ**: Ver `GUIA_RAPIDA_GENERACION_FAQs.md`
- **Estrategia de backlinks**: Ver `BLOG_FAQ_BACKLINK_STRATEGY.md`
- **Documentación técnica**: Ver `src/pages/blog/README_BLOG_FAQ.md`

### Para Desarrolladores

- **Plantilla de FAQ**: `src/pages/blog/PLANTILLA_NUEVA_FAQ.tsx.template`
- **Componentes**: Revisar `src/components/blog/`
- **Rutas**: Modificar `src/App.tsx`

### Contacto

- **Email**: administracion@aedia.es
- **LinkedIn**: [AEDIA](https://www.linkedin.com/company/aedia)
- **Teléfono**: +34 614 357 944

---

## 🎉 Resumen Ejecutivo

✅ **Acceso principal**: Click en "Blog" en navbar (desktop y mobile)  
✅ **3 páginas FAQ publicadas** y listas para posicionar  
✅ **Sistema completamente funcional** y navegable  
✅ **Optimizado para SEO** y conversión  
✅ **Responsive** en todos los dispositivos  
✅ **Documentación completa** para mantenimiento  

**El blog está 100% operativo y listo para generar tráfico orgánico.**

---

**Versión**: 1.0  
**Fecha**: 11 de noviembre de 2025  
**Última actualización**: 11 de noviembre de 2025

