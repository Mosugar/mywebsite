import Hero from '../components/Hero';
import Skills from '../components/Skills';
import MatrixRain from '../components/MatrixRain';
import Footer from '../components/Footer';
import Work from '../components/Work';
import Services from '../components/Services';
import GlobalBackground from '../components/Layout';
import ExperienceHistory from '../components/ExperienceHistory';

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