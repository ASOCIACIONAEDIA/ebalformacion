import { motion } from 'framer-motion';

// Tipo para los colaboradores
type Collaborator = {
  name: string;
  logo: string;
  alt: string;
  fallback?: string;
};

// Lista de logos de colaboradores - Empresas
const collaborators: Collaborator[] = [
  {
    name: 'Meliá Hotels International',
    logo: '/assets/MELIA.png',
    alt: 'Logo Meliá Hotels'
  },
  {
    name: 'Barceló Hotel Group',
    logo: '/assets/BARCELO.jpg',
    alt: 'Logo Barceló'
  },
  {
    name: 'Servei de Salut de les Illes Balears',
    logo: '/assets/LOGO-SERVI-SALUD-BALEARES.jpg',
    alt: 'Logo Servei de Salut de les Illes Balears'
  },
  {
    name: 'Laboris',
    logo: 'https://www.laboris.net/static/images/logo-laboris.svg',
    alt: 'Logo Laboris'
  },
];

const CollaboratorsBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Pequeño retraso entre cada logo
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-12 bg-gray-100"> {/* Fondo ligeramente distinto */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-10 font-nunito">
            Colaboramos con
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {collaborators.map((collaborator) => (
            <motion.div
              key={collaborator.name}
              variants={itemVariants}
              className="flex justify-center"
            >
              <img
                src={collaborator.logo}
                alt={collaborator.alt}
                className="h-10 md:h-12 lg:h-14 object-contain filter grayscale hover:filter-none transition-all duration-300 ease-in-out"
                title={collaborator.name} // Tooltip con el nombre
                loading="lazy"
                onError={(e) => {
                  // Fallback si la imagen no carga
                  if (collaborator.fallback) {
                    (e.target as HTMLImageElement).src = collaborator.fallback;
                  } else {
                    // Si no hay fallback, ocultar la imagen
                    (e.target as HTMLImageElement).style.display = 'none';
                  }
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CollaboratorsBanner; 