import Hero from '../components/Hero';
import CardSwap from '../components/CardSwap';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Hero />
      <CardSwap />
      <Skills />
      {/* You can add other sections here like About, Projects, Contact, etc. */}
    </div>
  );
}