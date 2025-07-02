import React from 'react';
import GridDistortion from './GridDistortion';

const DistortionSection = () => {
  return (
    <section style={{ 
      width: '100%', 
      height: '100vh', 
      position: 'relative',
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* GridDistortion Background */}
      <div style={{ 
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%'
      }}>
        <GridDistortion
          imageSrc="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&h=1080&fit=crop"
          grid={15}
          mouse={0.15}
          strength={0.2}
          relaxation={0.85}
          className="distortion-background"
        />
      </div>

      {/* Content Overlay */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        color: 'white',
        padding: '2rem'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '0 4px 8px rgba(0,0,0,0.5)'
        }}>
          Interactive Experience
        </h2>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '600px',
          margin: '0 auto',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
        }}>
          Move your mouse to interact with the distortion effect
        </p>
      </div>

      {/* Dark overlay for better text readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.3)',
        zIndex: 5
      }} />
    </section>
  );
};

export default DistortionSection;