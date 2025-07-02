import Hero from '../components/Hero';
import Services from '../components/Services';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Skills />
      {/* You can add other sections here like About, Projects, Contact, etc. */}
    </div>
  );
}