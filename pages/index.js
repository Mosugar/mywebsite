import Hero from '../components/Hero';
import CardSwapComponent from '../components/CardSwap';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <CardSwapComponent />
      {/* You can add other sections here like About, Projects, Contact, etc. */}
    </div>
  );
}