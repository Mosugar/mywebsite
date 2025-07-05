import Hero from '../components/Hero';
import Skills from '../components/Skills';
// import CardSwapComponent from '../components/CardSwap';
import Services from '../components/Services';
import GlobalBackground from '@/components/Layout';
import ExperienceHistory from '@/components/ExperienceHistory';
// import Work from '@/components/Work';

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
      <ExperienceHistory/>
      {/* <Work /> */}

      
      {/* You can add other sections here like About, Projects, Contact, etc. */}
      </GlobalBackground>
    </div>
  );
}