import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface FAQMetadata {
  title: string;
  metaDescription: string;
  url: string;
  h1: string;
  publishDate?: string;
  lastModified?: string;
}

interface FAQSource {
  name: string;
  domain: string;
  url?: string;
}

interface InternalLink {
  text: string;
  url: string;
}

interface FAQLayoutProps {
  metadata: FAQMetadata;
  children: React.ReactNode;
  sources: FAQSource[];
  linkedinPost: string;
  schemas: string[]; // Array de JSON-LD schemas
}

export const BlogFAQLayout: React.FC<FAQLayoutProps> = ({
  metadata,
  children,
  sources,
  linkedinPost,
  schemas
}) => {
  // Actualizar metadatos en el head
  useEffect(() => {
    document.title = metadata.title;
    
    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', metadata.metaDescription);

    // Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', metadata.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', metadata.metaDescription);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', `https://Ebal Formacion.es${metadata.url}`);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://Ebal Formacion.es${metadata.url}`);

    // Schemas JSON-LD
    schemas.forEach((schema, index) => {
      const scriptId = `schema-${index}`;
      let schemaScript = document.getElementById(scriptId);
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = scriptId;
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = schema;
    });

    // Cleanup
    return () => {
      // Remover schemas al desmontar
      schemas.forEach((_, index) => {
        const schemaScript = document.getElementById(`schema-${index}`);
        if (schemaScript) schemaScript.remove();
      });
    };
  }, [metadata, schemas]);

  return (
    <article className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">FAQ</span>
        </nav>

        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 mb-6 text-blue-600 hover:text-blue-700 transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          Volver al blog
        </Link>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* H1 Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {metadata.h1}
          </h1>

          {/* Publication Date */}
          {metadata.publishDate && (
            <time className="block text-sm text-gray-500 mb-8">
              Publicado: {metadata.publishDate}
              {metadata.lastModified && ` · Actualizado: ${metadata.lastModified}`}
            </time>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {children}
          </div>

          {/* Sources Section */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Fuentes y lecturas recomendadas
            </h2>
            <ul className="space-y-3">
              {sources.map((source, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ExternalLink size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">{source.name}</strong>
                    {source.url ? (
                      <a 
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-blue-600 hover:text-blue-700 ml-2 text-sm"
                      >
                        ({source.domain})
                      </a>
                    ) : (
                      <span className="text-gray-600 ml-2 text-sm">({source.domain})</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Social Share - LinkedIn */}
          <section className="mt-8 pt-8 border-t border-gray-200 bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Comparte en LinkedIn
            </h3>
            <p className="text-sm text-gray-700 whitespace-pre-line font-medium">
              {linkedinPost}
            </p>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://Ebal Formacion.es${metadata.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Compartir ahora
            </a>
          </section>
        </div>

        {/* Related Internal Links */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Explora más sobre Ebal Formacion</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <InternalLinkCard text="🎓 Bootcamp AI Engineer" url="/bootcamp" />
            <InternalLinkCard text="📚 Todos los cursos" url="/cursos" />
            <InternalLinkCard text="💼 Cursos bonificables" url="/cursos-bonificables" />
            <InternalLinkCard text="📰 Noticias y eventos" url="/news" />
            <InternalLinkCard text="📝 Más artículos del blog" url="/blog" />
            <InternalLinkCard text="✉️ Contacto" url="/contacto" />
          </div>
        </div>
      </div>
    </article>
  );
};

const InternalLinkCard: React.FC<InternalLink> = ({ text, url }) => (
  <Link
    to={url}
    className="flex items-center gap-2 p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all backdrop-blur-sm border border-white border-opacity-20"
  >
    <span className="font-medium">{text}</span>
    <ArrowLeft size={16} className="rotate-180" />
  </Link>
);

