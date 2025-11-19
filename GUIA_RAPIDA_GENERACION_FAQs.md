# 🚀 Guía Rápida: Generar Nuevas Páginas FAQ en 10 Minutos

## 📋 Proceso Completo (Paso a Paso)

### Paso 1: Definir Variables de Entrada (2 min)

Antes de empezar a escribir código, completa esta plantilla:

```
PREGUNTA: [Tu pregunta FAQ literal]
INTENCION: [informativa / comparativa / transaccional-soft]
PUBLICO: [docentes / pymes / directivos / estudiantes / ciudadanía]
ENFOQUE: [técnico / práctico / ético / no-code / ejecutivo]
FUENTES_SUGERIDAS: [lista de 4-5 dominios de autoridad]
```

**Ejemplo:**
```
PREGUNTA: ¿Cuánto cuesta un bootcamp de IA en España?
INTENCION: transaccional-soft
PUBLICO: estudiantes, profesionales en transición
ENFOQUE: práctico, con opciones de financiación
FUENTES_SUGERIDAS: fundae.es, eoi.es, universidades, comparador de precios
```

---

### Paso 2: Crear Metadatos SEO (2 min)

#### Title (≤ 65 caracteres)

**Fórmula**: `[Pregunta corta] – [Contexto] – AEDIA`

**Ejemplos buenos:**
- ✅ "Precio bootcamp IA España – Comparativa y financiación – AEDIA"
- ✅ "¿Cuánto cuesta formación IA? Guía completa España – AEDIA"

**Ejemplos malos:**
- ❌ "¿Cuánto cuesta un bootcamp de inteligencia artificial en España y qué opciones de financiación existen?" (demasiado largo)

#### Meta Description (≤ 160 caracteres)

**Fórmula**: `[Respuesta directa en 1 frase] + [Beneficio AEDIA] + [CTA suave]`

**Ejemplos buenos:**
- ✅ "Los bootcamps de IA en España cuestan entre 2.200€ y 4.000€. AEDIA ofrece financiación sin intereses y bonificación FUNDAE. Compara opciones."
- ✅ "Descubre precios reales de formación en IA: desde 2.200€ con financiación. AEDIA te guía para elegir la mejor opción para tu presupuesto."

**Ejemplos malos:**
- ❌ "Este artículo habla sobre los precios de los bootcamps de IA" (no aporta valor, genérico)

#### URL Slug

**Fórmula**: `/blog/[palabras-clave-sin-stopwords]`

**Ejemplos buenos:**
- ✅ `/blog/precio-bootcamp-ia-espana`
- ✅ `/blog/costo-formacion-ia-financiacion`

**Ejemplos malos:**
- ❌ `/blog/cuanto-cuesta-un-bootcamp-de-ia-en-espana` (con stopwords)
- ❌ `/blog/post-123` (sin keywords)

---

### Paso 3: Redactar Contenido (5 min)

#### Estructura Obligatoria:

```markdown
# H1: [Pregunta literal]

**Párrafo 1** (2 frases):
- Frase 1: Respuesta directa a la pregunta
- Frase 2: Acción de AEDIA como solución

## Subtítulo 1: [Contexto/Definición]
- Explicación práctica
- Bullets si ayudan a claridad
- 1 enlace interno mínimo

## Subtítulo 2: [Ejemplos/Casos]
- Casos reales
- Datos concretos
- 1 enlace interno mínimo

## Subtítulo 3: Beneficios/Impacto en España
- Contexto local explícito
- Impacto medible
- 1 enlace interno mínimo

## Subtítulo 4: Cómo empezar con AEDIA
- Lista numerada de pasos
- 2-3 enlaces internos
- CTA destacado con botón

## Fuentes y lecturas recomendadas
- 2-4 fuentes con autoridad
```

#### Enlaces Internos Obligatorios (usar mínimo 3):

| Enlace | Cuándo usarlo |
|--------|---------------|
| `/formacion` | Siempre, en cualquier mención de cursos/bootcamps |
| `/eventos` | Al hablar de networking, jornadas, talleres |
| `/ia-etica` | Al mencionar responsabilidad, privacidad, impacto social |
| `/pymes` | En contenido para empresarios o casos de negocio |
| `/cursos-bonificables` | Al hablar de financiación, FUNDAE, empresas |
| `/recursos` | Al mencionar guías gratuitas, tutoriales, descargables |

---

### Paso 4: Seleccionar Schemas JSON-LD (1 min)

#### Schema Obligatorio (siempre):

**Organization** ✅ (ya en la plantilla)

#### Schemas Opcionales (elegir según contexto):

| Schema | Cuándo usarlo |
|--------|---------------|
| **FAQPage** | Si añades 2+ preguntas adicionales al final |
| **Course** | Si describes un curso específico con detalles |
| **Event** | Si anuncias un evento concreto con fecha/lugar |
| **BreadcrumbList** | Recomendado para todas (mejora navegación) |

**Regla de oro**: 2-3 schemas por página (Organization + BreadcrumbList + 1 opcional)

---

### Paso 5: Crear Post de LinkedIn (1 min)

**Fórmula del post perfecto:**

```
[EMOJI LLAMATIVO] [Título en 1 línea como pregunta o afirmación]

[Bullet con emoji] [Valor clave 1]
[Bullet con emoji] [Valor clave 2]
[Bullet con emoji] [Valor clave 3]
[Bullet con emoji opcional] [Valor clave 4]

[Frase de cierre emotiva o pregunta abierta]

[Emoji de enlace] Lee la guía completa 👉 [URL]

#InteligenciaArtificial #[Hashtag2] #[Hashtag3] #AEDIA
```

**Ejemplo real:**

```
💰 ¿Cuánto cuesta realmente un bootcamp de IA en España?

✅ Precios desde 2.200€ con financiación sin intereses
✅ Opciones bonificables (coste casi cero para empresas)
✅ Comparativa de 5 proveedores fiables
✅ Calculadora de ROI incluida

No dejes que el precio te detenga. La inversión se recupera en 6 meses.

👉 Descubre todas las opciones: https://aedia.es/blog/precio-bootcamp-ia-espana

#FormacionIA #BootcampIA #AEDIA #InvierteEnTi
```

---

### Paso 6: Seleccionar Backlink Targets (1 min)

**5 dominios objetivo por página FAQ**

#### Criterios de selección:

1. **Domain Authority (DA) > 40** (verificar en Moz, Ahrefs, SEMrush)
2. **Relevancia temática** con tu FAQ
3. **Accesibilidad**: ¿tienen blog? ¿aceptan guest posts? ¿tienen directorio?
4. **Ubicación**: priorizar dominios .es o con enfoque España
5. **Complementariedad**: no competidores directos

#### Plantilla de selección:

```markdown
## Backlink Targets para [Título de tu FAQ]

1. **[dominio1.com]**
   - DA: [número]
   - Por qué: [razón de autoridad/relevancia]
   - Estrategia: [guest post / co-citación / directorio]

2. **[dominio2.com]**
   - DA: [número]
   - Por qué: [razón de autoridad/relevancia]
   - Estrategia: [guest post / co-citación / directorio]

[... 3 más ...]
```

**Tipos de dominios a considerar:**

- **Gubernamentales** (.gob.es): máxima autoridad
- **Educativos** (.edu, universidades): alta confianza
- **Asociaciones profesionales**: relevancia sectorial
- **Medios especializados**: tráfico cualificado
- **Plataformas tech**: audiencia objetivo

---

## 🎨 Estilos y Componentes Visuales

### Cards Destacadas

```tsx
<div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6 border border-blue-200">
  <h3 className="text-xl font-bold text-blue-900 mb-3">Título del box</h3>
  <p className="text-gray-700 mb-3">Contenido...</p>
  <ul className="text-gray-700 space-y-1">
    <li>✅ Punto 1</li>
    <li>✅ Punto 2</li>
  </ul>
</div>
```

### Bullets con Iconos

```tsx
<ul className="space-y-3 mb-6">
  <li className="flex items-start gap-3">
    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
    <p className="text-gray-700"><strong>Título:</strong> descripción</p>
  </li>
</ul>
```

### CTA Destacado

```tsx
<div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 text-center">
  <p className="text-lg font-bold mb-2">🚀 Frase motivadora</p>
  <p className="mb-4">Explicación breve</p>
  <a
    href="mailto:administracion@aedia.es?subject=Consulta"
    className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
  >
    Texto del botón
  </a>
</div>
```

### Preguntas Adicionales

```tsx
<div className="space-y-6">
  <div className="border-l-4 border-blue-500 pl-4 py-2">
    <h3 className="font-bold text-lg text-gray-900 mb-2">¿Pregunta?</h3>
    <p className="text-gray-700">Respuesta...</p>
  </div>
</div>
```

---

## ✅ Checklist Final (30 segundos)

Antes de publicar, verifica:

```
[ ] H1 = pregunta literal
[ ] Primer párrafo = 2 frases + "AEDIA"
[ ] ≥3 enlaces internos de lista obligatoria
[ ] Title ≤ 65 caracteres
[ ] Meta description ≤ 160 caracteres
[ ] URL slug corto sin stopwords
[ ] Organization schema presente
[ ] Post LinkedIn redactado
[ ] 2-4 fuentes citadas
[ ] Contexto "España/español" mencionado
[ ] Ruta añadida en App.tsx
[ ] Card añadida en BlogIndex.tsx
[ ] npm run lint sin errores
```

---

## 🚀 Comandos Rápidos

```bash
# Crear nueva FAQ (duplicar plantilla)
cp src/pages/blog/PLANTILLA_NUEVA_FAQ.tsx.template src/pages/blog/TuNuevaFAQ.tsx

# Verificar lints
npm run lint

# Build local
npm run dev

# Build producción
npm run build:prod
```

---

## 📝 Ideas de Preguntas FAQ para AEDIA

### Categoría: Formación

1. ¿Cuánto cuesta un bootcamp de IA en España?
2. ¿Qué certificaciones de IA son reconocidas en Europa?
3. ¿Cuánto tiempo se tarda en aprender IA desde cero?
4. ¿Qué matemáticas necesito saber para aprender IA?
5. ¿Puedo aprender IA con 40 años sin experiencia previa?

### Categoría: Empresas

1. ¿Cómo implementar IA en mi pyme paso a paso?
2. ¿Qué ROI puedo esperar de un proyecto de IA?
3. ¿Cuánto cuesta contratar un equipo de IA?
4. ¿Qué subvenciones hay para IA en empresas españolas?
5. ¿Cómo auditar si mi empresa está lista para IA?

### Categoría: Herramientas

1. ¿Qué herramientas de IA son gratuitas y fiables?
2. ¿ChatGPT vs Gemini vs Claude: cuál usar para mi negocio?
3. ¿Cómo automatizar mi negocio con IA sin programar?
4. ¿Qué es RAG y cuándo usarlo en mi empresa?
5. ¿Cómo crear un chatbot para mi web en español?

### Categoría: Ética y Legal

1. ¿Qué dice el AI Act europeo para empresas españolas?
2. ¿Cómo cumplir con GDPR al usar IA?
3. ¿Es legal usar IA para contratar personal en España?
4. ¿Cómo proteger la privacidad al entrenar modelos de IA?
5. ¿Qué sesgos puede tener la IA y cómo detectarlos?

### Categoría: Salidas Profesionales

1. ¿Qué salidas profesionales tiene la IA en España?
2. ¿Cuánto gana un AI Engineer en España en 2025?
3. ¿Qué empresas españolas contratan perfiles de IA?
4. ¿Es tarde para hacer carrera en IA con 35 años?
5. ¿Qué habilidades de IA demandan las empresas ahora?

---

## 💡 Tips Pro

### Para SEO:
- Usa variaciones de la keyword principal en subtítulos (no repetir exacta)
- Incluye long-tail keywords naturalmente en el texto
- Menciona ciudades españolas si es relevante (Madrid, Barcelona, Valencia)
- Añade datos numéricos (porcentajes, precios, duraciones)

### Para Conversión:
- CTA cada 500-700 palabras
- Usar verbos de acción: "Descubre", "Aprende", "Solicita", "Reserva"
- Crear urgencia suave: "Plazas limitadas", "Próxima convocatoria"
- Incluir testimonios/casos de éxito si están disponibles

### Para Engagement:
- Preguntas retóricas en el texto
- Listas numeradas y bullets para escaneo rápido
- Cards visuales para destacar información clave
- Emojis en títulos de secciones (con moderación)

---

**¿Dudas?** Consulta `src/pages/blog/README_BLOG_FAQ.md` para documentación completa.

**Versión**: 1.0  
**Última actualización**: 11 de noviembre de 2025

