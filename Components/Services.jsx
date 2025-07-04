import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/services.module.css';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const swiperRef = useRef(null);
  const cardsRef = useRef([]);
  const autoplayRef = useRef(null);
  const sectionRef = useRef(null);

  // Enhanced service data based on your skills
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Modern React applications with Next.js, TypeScript, and cutting-edge UI libraries for exceptional user experiences.",
      buttonText: "View Projects",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.serviceIcon}>
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Intuitive user interfaces with Figma, responsive design principles, and modern interaction patterns.",
      buttonText: "Design Portfolio",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.serviceIcon}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Robust APIs with Node.js, PHP, Laravel, and database management with MySQL for scalable applications.",
      buttonText: "Explore APIs",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.serviceIcon}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "Animation & Motion",
      description: "Engaging animations with GSAP, Framer Motion, and CSS for delightful user interactions.",
      buttonText: "See Animations",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.serviceIcon}>
          <polygon points="5,3 19,12 5,21" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
        </svg>
      ),
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      id: 5,
      title: "Performance Optimization",
      description: "Speed optimization, SEO enhancement, and accessibility improvements for superior web performance.",
      buttonText: "Learn More",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.serviceIcon}>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      id: 6,
      title: "Full-Stack Solutions",
      description: "Complete web applications with modern frameworks, responsive design, and seamless user experiences.",
      buttonText: "Get Started",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.serviceIcon}>
          <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    }
  ];

  const totalSlides = services.length;

  // GSAP Animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Section entrance animation
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 80, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: swiperRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation for cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            y: -10,
            duration: 2 + (index * 0.1),
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.2
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isHovered) return;

    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
      }, 4000);
    };

    startAutoplay();

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [totalSlides, isHovered]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Calculate transform with smooth transition
  const getTransform = () => {
    const translateX = -currentSlide * (340 + 30); // card width + gap
    return `translateX(calc(${translateX}px + 50% - 170px))`;
  };

  // Handle card hover animations
  const handleCardHover = (index, isEntering) => {
    const card = cardsRef.current[index];
    if (!card) return;

    if (isEntering) {
      gsap.to(card, {
        scale: 1.05,
        y: -20,
        rotationY: 5,
        duration: 0.4,
        ease: "power2.out"
      });
    } else {
      gsap.to(card, {
        scale: 1,
        y: 0,
        rotationY: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  };

  return (
    <section className={styles.services} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>Crafting digital experiences with modern technologies</p>
        </div>

        <div 
          className={styles.swiperContainer}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.swiperTrack}>
            <div 
              className={styles.swiperWrapper}
              ref={swiperRef}
              style={{
                transform: getTransform(),
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className={styles.serviceCard}
                  ref={el => cardsRef.current[index] = el}
                  style={{ background: service.gradient }}
                  onMouseEnter={() => handleCardHover(index, true)}
                  onMouseLeave={() => handleCardHover(index, false)}
                >
                  <div className={styles.cardIcon}>
                    {service.icon}
                  </div>
                  
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDescription}>{service.description}</p>
                  </div>
                  
                  <button 
                    className={styles.cardButton}
                    onClick={() => console.log(`Clicked on ${service.title}`)}
                  >
                    {service.buttonText}
                    <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation Arrows */}
          <button 
            className={`${styles.navPrev} ${styles.navButton}`}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className={`${styles.navNext} ${styles.navButton}`}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Enhanced Pagination */}
        <div className={styles.pagination}>
          {services.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
        <div className={styles.bgShape3}></div>
      </div>
    </section>
  );
};

export default Services;