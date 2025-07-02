import React from 'react';
import { Menu } from 'lucide-react';
import styles from '../styles/hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* Base black background */}
      <div className={styles.backgroundBlack}></div>
      
      {/* Background image layer */}
      <div className={styles.backgroundImage}></div>
      
      {/* Dark overlay */}
      <div className={styles.darkOverlay}></div>

      {/* Navigation */}
      <nav className={styles.navigation}>
        <div className={styles.navLeft}>
          <span className={styles.navName}>Mo Sugar<span className={styles.trademark}>®</span></span>
          <div className={styles.statusBadge}>
            <div className={styles.statusDot}></div>
            <span className={styles.statusText}>Available</span>
          </div>
        </div>
        
        <button className={styles.menuButton}>
          <span className={styles.menuButtonText}>Menu</span>
          <Menu size={16} />
        </button>
      </nav>

      {/* Main Hero Content */}
      <div className={styles.mainContent}>
        
        {/* Main heading */}
        <div className={styles.titleSection}>
          <h1 className={styles.mainTitle}>
            Mo Sugar<span className={styles.trademark}>®</span>
          </h1>
        </div>
        
        {/* Three column grid: Copyright/Tagline, Brand, UI/UX */}
        <div className={styles.sectionsGrid}>
          <div className={styles.copyrightSection}>
            <div className={styles.orangeEdge}></div>
            <div className={styles.copyright}>©2025</div>
            <div className={styles.tagline}>
              Designing digital experiences that captivate, connect, and convert.
            </div>
          </div>
          
          <div className={styles.section}>
            <div className={styles.orangeEdge}></div>
            <h2 className={styles.sectionTitle}>Brand</h2>
            <p className={styles.sectionDescription}>
              We craft bold, memorable brand identities that tell your story and leave a lasting impression.
            </p>
          </div>
          
          <div className={styles.section}>
            <div className={styles.orangeEdge}></div>
            <h2 className={styles.sectionTitle}>UI/UX</h2>
            <p className={styles.sectionDescription}>
              Intuitive, user-focused interfaces that elevate engagement and drive seamless interactions.
            </p>
          </div>
        </div>
      </div>

      {/* Ambient lighting effects */}
      <div className={styles.ambientLighting}>
        <div className={styles.lightingEffect1}></div>
        <div className={styles.lightingEffect2}></div>
      </div>
    </div>
  );
};

export default Hero;