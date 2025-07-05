import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import MatrixRain from '@/components/MatrixRain';
import Footer from '@/components/Footer'; 
import Work from '@/components/Work';// Fixed: Changed from 'Fotter' to 'Footer' and used relative path
// import CardSwapComponent from '../components/CardSwap';
import Services from '@/components/Services';
import GlobalBackground from '@/components/Layout'; // Fixed: Changed from '@/components/Layout' to relative path
import ExperienceHistory from '@/components/ExperienceHistory';
// import Work from '../components/Work';

export default function Home() {
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <GlobalBackground>
      

      {/* First Section - Hero */}
      <Hero />
      
      
      {/* Second Section - Skills */}
      <Skills />
      
      {/* Third Section - CardSwap */}
      {/* <CardSwapComponent /> */}
      
      {/* Fourth Section - Services */}
      <Services />
      
      {/* Fifth Section - Experience */}
      <ExperienceHistory/>
      
      {/* Footer Section */}
     
      <Work />

      <Footer />
      {/* You can add other sections here like About, Projects, Contact, etc. */}
      <MatrixRain />
      </GlobalBackground>
    </div>
  );
}