import Hero from '../components/Hero';
import Skills from '../components/Skills';
// import CardSwapComponent from '../components/CardSwap';
import Services from '../components/Services';

export default function Home() {
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      {/* First Section - Hero */}
      <Hero />
      
      {/* Second Section - Skills */}
      <Skills />
      
      {/* Third Section - CardSwap */}
      {/* <CardSwapComponent /> */}
      
      {/* Fourth Section - Services */}
      <Services />
      
      {/* You can add other sections here like About, Projects, Contact, etc. */}
    </div>
  );
}