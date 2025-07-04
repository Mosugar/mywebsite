import React, { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(2); // Start at first real item
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const swiperRef = useRef(null);
  const autoplayRef = useRef(null);
  const sectionRef = useRef(null);

  // Clean service data matching your website theme
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      buttonText: "View Projects",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" style={{width: '32px', height: '32px', color: 'white', strokeWidth: '2'}}>
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "UI/UX Design",
      buttonText: "Design Portfolio",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" style={{width: '32px', height: '32px', color: 'white', strokeWidth: '2'}}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor"/>
          <circle cx="9" cy="9" r="2" stroke="currentColor"/>
          <path d="M21 15L16 10L5 21" stroke="currentColor"/>
        </svg>
      ),
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Backend Development",
      buttonText: "Explore APIs",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" style={{width: '32px', height: '32px', color: 'white', strokeWidth: '2'}}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor"/>
        </svg>
      ),
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "DevOps & Deployment",
      buttonText: "See Infrastructure",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" style={{width: '32px', height: '32px', color: 'white', strokeWidth: '2'}}>
          <circle cx="12" cy="12" r="3" stroke="currentColor"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor"/>
        </svg>
      ),
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      id: 5,
      title: "Performance Optimization",
      buttonText: "Learn More",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" style={{width: '32px', height: '32px', color: 'white', strokeWidth: '2'}}>
          <circle cx="12" cy="12" r="10" stroke="currentColor"/>
          <polyline points="12,6 12,12 16,14" stroke="currentColor"/>
        </svg>
      ),
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    }
  ];

  const totalSlides = services.length;
  const cardWidth = 320; // card width + gap

  // Create infinite loop by duplicating services
  const infiniteServices = [
    ...services.slice(-2), // Last 2 items at the beginning
    ...services,           // Original items
    ...services.slice(0, 2) // First 2 items at the end
  ];

  // Track the real index for pagination
  const [realIndex, setRealIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (isHovered || isTransitioning) return;

    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    };

    startAutoplay();

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isHovered, isTransitioning]);

  // Handle infinite loop logic
  useEffect(() => {
    if (isTransitioning) return;

    // Check if we need to reset position for infinite loop
    if (currentSlide >= infiniteServices.length - 2) {
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentSlide(2);
        setTimeout(() => setIsTransitioning(false), 10);
      }, 50);
    } else if (currentSlide <= 1) {
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentSlide(infiniteServices.length - 3);
        setTimeout(() => setIsTransitioning(false), 10);
      }, 50);
    }

    // Update the real index for pagination dots
    let newRealIndex = currentSlide - 2;
    if (newRealIndex < 0) newRealIndex = totalSlides + newRealIndex;
    if (newRealIndex >= totalSlides) newRealIndex = newRealIndex - totalSlides;
    setRealIndex(Math.max(0, Math.min(totalSlides - 1, newRealIndex)));
  }, [currentSlide, infiniteServices.length, isTransitioning, totalSlides]);

  // Navigation functions
  const nextSlide = () => {
    if (isTransitioning) return;
    setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setCurrentSlide(prev => prev - 1);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    const targetSlide = index + 2; // Add offset for infinite loop
    setCurrentSlide(targetSlide);
  };

  // Calculate transform with smooth transition
  const getTransform = () => {
    const translateX = -currentSlide * cardWidth;
    return `translateX(calc(${translateX}px + 50% - 160px))`;
  };

  return (
    <section style={{
      minHeight: '80vh',
      background: '#0a0a0a',
      color: 'white',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden'
    }} ref={sectionRef}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 40px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: 600,
            lineHeight: 1.1,
            margin: 0,
            color: 'white',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #ffffff 0%, #d1d5db 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Our Services</h2>
        </div>

        <div 
          style={{
            position: 'relative',
            width: '100%',
            height: '450px',
            overflow: 'visible'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div style={{
            width: '100%',
            height: '100%',
            position: 'relative'
          }}>
            <div 
              ref={swiperRef}
              style={{
                display: 'flex',
                gap: '20px',
                paddingLeft: 'calc(50% - 160px)',
                willChange: 'transform',
                transform: getTransform(),
                transition: isTransitioning ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {infiniteServices.map((service, index) => (
                <div 
                  key={`${service.id}-${index}`}
                  style={{
                    width: '300px',
                    height: '400px',
                    borderRadius: '20px',
                    padding: '30px',
                    position: 'relative',
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    background: service.gradient,
                    userSelect: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.2s ease',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Simple Icon Container */}
                  <div style={{
                    width: '64px',
                    height: '64px',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '16px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {service.icon}
                  </div>
                  
                  {/* Clean Content */}
                  <div style={{
                    flex: 1,
                    textAlign: 'left'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      margin: 0,
                      color: 'white',
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em'
                    }}>{service.title}</h3>
                  </div>
                  
                  {/* Simple Button */}
                  <button 
                    style={{
                      padding: '12px 24px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '50px',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      alignSelf: 'flex-start'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    onClick={() => console.log(`Clicked on ${service.title}`)}
                  >
                    {service.buttonText}
                    <svg style={{
                      width: '16px',
                      height: '16px',
                      strokeWidth: 2
                    }} viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19" stroke="currentColor" strokeLinecap="round"/>
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Clean Navigation Arrows */}
          <button 
            style={{
              position: 'absolute',
              top: '50%',
              left: '20px',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              background: 'rgba(31, 41, 55, 0.8)',
              border: '1px solid rgba(75, 85, 99, 0.4)',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(55, 65, 81, 0.9)';
              e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(31, 41, 55, 0.8)';
              e.currentTarget.style.borderColor = 'rgba(75, 85, 99, 0.4)';
            }}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 24 24" fill="none" style={{width: '20px', height: '20px', strokeWidth: '2'}}>
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button 
            style={{
              position: 'absolute',
              top: '50%',
              right: '20px',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              background: 'rgba(31, 41, 55, 0.8)',
              border: '1px solid rgba(75, 85, 99, 0.4)',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(55, 65, 81, 0.9)';
              e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(31, 41, 55, 0.8)';
              e.currentTarget.style.borderColor = 'rgba(75, 85, 99, 0.4)';
            }}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24" fill="none" style={{width: '20px', height: '20px', strokeWidth: '2'}}>
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Clean Pagination */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '40px'
        }}>
          {services.map((_, index) => (
            <button
              key={index}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: index === realIndex 
                  ? '#f97316' 
                  : 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                transform: index === realIndex ? 'scale(1.2)' : 'scale(1)'
              }}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Simple Background Elements */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>
      </div>
    </section>
  );
};

export default Services;