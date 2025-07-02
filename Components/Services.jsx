import React, { useState, useEffect } from 'react';
import styles from '../styles/services.module.css';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    { 
      title: "Frontend Development",
      description: "React, Next.js, HTML/CSS, JavaScript, SCSS, Tailwind",
      button: "Explore Frontend",
      background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)"
    },
    { 
      title: "Backend Development",
      description: "PHP, Laravel, Python, Django, REST APIs, MySQL",
      button: "View Backend Work",
      background: "linear-gradient(135deg, #059669 0%, #0d9488 100%)"
    },
    { 
      title: "UI/UX Design",
      description: "Figma, Framer, User Interface & Experience Design",
      button: "See Design Portfolio",
      background: "linear-gradient(135deg, #dc2626 0%, #e11d48 100%)"
    },
    { 
      title: "Full-Stack Web Apps",
      description: "Complete web solutions with modern frameworks",
      button: "View Full Projects",
      background: "linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)"
    },
    { 
      title: "Machine Learning",
      description: "Python, Django, AI model development & integration",
      button: "Discover AI Solutions",
      background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)"
    },
    { 
      title: "Cybersecurity",
      description: "Ubuntu, VirtualBox, VagrantUp, Security Testing",
      button: "Learn Security",
      background: "linear-gradient(135deg, #374151 0%, #1f2937 100%)"
    },
    { 
      title: "Mobile Development",
      description: "Cross-platform iOS & Android applications",
      button: "View Mobile Apps",
      background: "linear-gradient(135deg, #059669 0%, #10b981 100%)"
    },
    { 
      title: "Performance Optimization",
      description: "PageSpeed optimization and web performance tuning",
      button: "Optimize Performance",
      background: "linear-gradient(135deg, #dc2626 0%, #ea580c 100%)"
    }
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Selected and popular<br />services on the digital<br />right now</h2>
        </div>

        {/* Card Swiper */}
        <div className={styles.swiperContainer}>
          <div className={styles.swiperTrack}>
            <div 
              className={styles.swiperWrapper}
              style={{
                transform: `translateX(-${currentSlide * 350}px)`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={styles.serviceCard}
                  style={{ background: service.background }}
                >
                  {/* Background circles */}
                  <div className={styles.bgCircle1}></div>
                  <div className={styles.bgCircle2}></div>

                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDescription}>{service.description}</p>
                  </div>

                  <button className={styles.cardButton}>
                    {service.button}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button className={styles.navPrev} onClick={prevSlide}>‹</button>
          <button className={styles.navNext} onClick={nextSlide}>›</button>

          {/* Pagination dots */}
          <div className={styles.pagination}>
            {services.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;