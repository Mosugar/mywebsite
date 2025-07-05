import React, { useRef, useEffect, useState, memo, useCallback } from 'react';
import { ExternalLink, Code, Palette, ArrowRight } from 'lucide-react';
import CyberpunkTitle from './CyberpunkTitle';
import styles from '../styles/work.module.css';

// Helper function to determine if a color is light or dark
const isLightColor = (hex) => {
  const color = hex.replace('#', '');
  const namedColors = {
    'white': '#ffffff', 'black': '#000000', 'red': '#ff0000',
    'green': '#008000', 'blue': '#0000ff', 'yellow': '#ffff00',
    'cyan': '#00ffff', 'magenta': '#ff00ff', 'gray': '#808080'
  };
  
  const actualColor = namedColors[color.toLowerCase()] || `#${color}`;
  const cleanColor = actualColor.replace('#', '');
  
  const r = parseInt(cleanColor.substring(0, 2), 16);
  const g = parseInt(cleanColor.substring(2, 4), 16);
  const b = parseInt(cleanColor.substring(4, 6), 16);
  
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
};

// Memoized Project Card Component
const ProjectCard = memo(({ project, index, activeItem, handleMouseEnter }) => {
  const isActive = activeItem === index;
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth <= 1150;
  
  const backgroundColor = (isActive || isSmallScreen) ? project.color : '#1a1a1a';
  const isLight = isLightColor(backgroundColor);
  
  const textColor = isLight ? '#0a0a0a' : '#ffffff';
  const buttonBgColor = isLight ? '#0a0a0a' : '#ffffff';
  const buttonIconColor = backgroundColor;

  return (
    <div
      className={`${styles.projectCard} ${index === 0 ? "selected" : ""} ${isActive ? styles.active : ""}`}
      onClick={() => handleMouseEnter(index)}
      style={{
        ...(isActive && { backgroundImage: `url(${project.image})` }),
        '--text-color': textColor,
        '--button-bg-color': buttonBgColor,
        '--button-icon-color': buttonIconColor
      }}
    >
      <div className={styles.cardContent}>
        <div className={styles.projectCardTop}>
          <div>
            <div className={styles.projectName}>
              <h3 style={{ color: textColor }}>{project.name}</h3>
            </div>
            <div className={styles.projectDescription}>
              {project.description}
            </div>
          </div>
        </div>
        <div className={styles.projectExternal}>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <span style={{ color: textColor }}>Visit Project</span>
            <ExternalLink size={16} className={styles.externalIcon} style={{ color: textColor }} />
          </a>
        </div>
      </div>
      <div className={styles.projectOuterName}>
        <span>0{project.id}</span>
        <h1>{project.name}</h1>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

// Memoized Project List
const ProjectList = memo(({ activeItem, handleMouseEnter, projects }) => {
  return (
    <div className={styles.projectsContainer}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          activeItem={activeItem}
          handleMouseEnter={handleMouseEnter}
        />
      ))}
    </div>
  );
});

ProjectList.displayName = 'ProjectList';

const Work = () => {
  const [activeItem, setActiveItem] = useState(0);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const projects = [
    {
      id: 1,
      name: "El Jamai Couture",
      description: "Luxury fashion e-commerce platform with elegant design, seamless shopping experience, and premium Arabic fashion collections.",
      image: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/d-clubArtboard_1_cjqxkq.png",
      url: "https://eljamaicouture.ae/",
      color: "#ff6b35"
    },
    {
      id: 2,
      name: "Wardd Music",
      description: "Dynamic music platform featuring artist portfolios, interactive experiences, and cutting-edge audio streaming technology.",
      image: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/wardd_cover_two_u2j8hi_ahpexf.webp",
      url: "https://www.warddmusic.com/",
      color: "#e74c3c"
    },
    {
      id: 3,
      name: "Wardd Studio",
      description: "Creative studio showcase with stunning visuals, portfolio presentations, and innovative design solutions.",
      image: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/Stretched_1_hjoiei.jpg",
      url: "https://www.warddstudio.com/",
      color: "#9b59b6"
    },
    {
      id: 4,
      name: "Stretched Web",
      description: "Modern web agency platform with innovative design, cutting-edge technologies, and comprehensive digital solutions.",
      image: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/wardd_music_02__xgryox.jpg",
      url: "https://stretched-web.vercel.app/",
      color: "#3498db"
    },
    {
      id: 5,
      name: "Lawyer Sulaiman",
      description: "Professional legal services website with clean design, trusted user experience, and comprehensive law practice solutions.",
      image: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/lawyer_eto36c.webp",
      url: "https://lawyer-sulaiman.vercel.app/",
      color: "#2ecc71"
    },
    {
      id: 6,
      name: "Smiley Dentist",
      description: "Healthcare platform with friendly interface, appointment booking system, and comprehensive dental care services.",
      image: "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/post_gyz5fk.png",
      url: "https://smiley-dentist.vercel.app/",
      color: "#f39c12"
    }
  ];

  const handleMouseEnter = useCallback((index) => {
    setActiveItem(index);
  }, []);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={styles.workSection}
    >
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgGrid}></div>
        <div className={styles.bgOrb1}></div>
        <div className={styles.bgOrb2}></div>
      </div>

      <div className={styles.workContainer}>
        {/* Title */}
        <CyberpunkTitle 
          title="SELECTED PROJECTS"
          gradient="from-orange-400 via-red-400 to-orange-500"
          glowColor="text-orange-500"
          glitchColor="text-red-500"
          leftIcon={Code}
          rightIcon={Palette}
          leftIconColor="text-orange-400"
          rightIconColor="text-red-400"
        />

        {/* Projects Content */}
        <div className={styles.workContent}>
          <ProjectList 
            activeItem={activeItem} 
            handleMouseEnter={handleMouseEnter}
            projects={projects}
          />
          
          {/* More Projects Button */}
          <div className={styles.moreProjects}>
            <button className={styles.exploreButton}>
              <span>Explore more projects</span>
              <ArrowRight size={20} className={styles.buttonIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;