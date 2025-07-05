import Hero from '../components/Hero.jsx';
import Skills from '../components/Skills.jsx';
import MatrixRain from '../components/MatrixRain.jsx';
import Footer from '../components/Footer.jsx'; 
import Work from '../components/Work.jsx';
import Services from '../components/Services.jsx';
import GlobalBackground from '../components/Layout.jsx'; // This is your Layout component
import ExperienceHistory from '../components/ExperienceHistory.jsx';

export default function Home() {
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <GlobalBackground>
        <Hero />
        <Skills />
        <Services />
        <ExperienceHistory/>
        <Work />
        <Footer />
        <MatrixRain />
      </GlobalBackground>
    </div>
  );
}