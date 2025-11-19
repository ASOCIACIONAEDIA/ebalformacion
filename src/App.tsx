import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BonificableCourses from './pages/BonificableCourses';
import ProgrammingCourses from './pages/ProgrammingCourses';
import CourseDetail from './pages/CourseDetail';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import AboutUsPage from './pages/AboutUsPage';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import LegalNotice from './pages/LegalNotice';
import AllCourses from './pages/AllCourses';
import Bootcamp from './pages/Bootcamp';
import IAFundamentalsPage from './pages/IAFundamentalsPage';
import DesconexionDigitalPage from './pages/DesconexionDigitalPage';
import Certifications from './pages/Certifications';
import DataEngineeringMaster from './pages/DataEngineeringMaster';
import AirflowProfessional from './pages/AirflowProfessional';
import SelloAIPlus from './pages/SelloAIPlus';
import BlogIndex from './pages/blog/BlogIndex';
import CursosIAOnlineEspanol from './pages/blog/CursosIAOnlineEspanol';
import CursoIAEmpresarios from './pages/blog/CursoIAEmpresarios';
import IAsinProgramacion from './pages/blog/IAsinProgramacion';
import PrecioBootcampIA from './pages/blog/PrecioBootcampIA';
import SalidasProfesionalesIA from './pages/blog/SalidasProfesionalesIA';
import HerramientasIAGratuitas from './pages/blog/HerramientasIAGratuitas';
import MejoresCursosIAEspana2025 from './pages/blog/MejoresCursosIAEspana2025';
import IAResponsableEtica from './pages/blog/IAResponsableEtica';
import EstadoIAEspana2025 from './pages/blog/EstadoIAEspana2025';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos-bonificables" element={<BonificableCourses />} />
            <Route path="/programacion" element={<ProgrammingCourses />} />
            <Route path="/curso/:id" element={<CourseDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/sobrenosotros" element={<AboutUsPage />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
            <Route path="/politica-cookies" element={<CookiePolicy />} />
            <Route path="/aviso-legal" element={<LegalNotice />} />
            <Route path="/cursos" element={<AllCourses />} />
            <Route path="/bootcamp" element={<Bootcamp />} />
            <Route path="/ia-fundamentals" element={<IAFundamentalsPage />} />
            <Route path="/desconexion-digital" element={<DesconexionDigitalPage />} />
            <Route path="/certificaciones" element={<Certifications />} />
            <Route path="/master-ingenieria-datos" element={<DataEngineeringMaster />} />
            <Route path="/airflow-profesional" element={<AirflowProfessional />} />
            <Route path="/sello-ai-plus" element={<SelloAIPlus />} />
            
            {/* Blog Routes */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/cursos-ia-online-espanol-fiables" element={<CursosIAOnlineEspanol />} />
            <Route path="/blog/curso-ia-para-empresarios-pymes" element={<CursoIAEmpresarios />} />
            <Route path="/blog/aprender-ia-sin-programacion-no-code" element={<IAsinProgramacion />} />
            <Route path="/blog/precio-bootcamp-ia-espana-financiacion" element={<PrecioBootcampIA />} />
            <Route path="/blog/salidas-profesionales-ia-2025-espana" element={<SalidasProfesionalesIA />} />
            <Route path="/blog/herramientas-ia-gratuitas-negocios-2025" element={<HerramientasIAGratuitas />} />
            <Route path="/blog/mejores-cursos-ia-espana-2025-ranking" element={<MejoresCursosIAEspana2025 />} />
            <Route path="/blog/que-es-ia-responsable-etica-espana" element={<IAResponsableEtica />} />
            <Route path="/blog/estado-ia-espana-2025-informe-datos" element={<EstadoIAEspana2025 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;