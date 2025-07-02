import React from 'react';
import styles from '../styles/services.module.css';

const Services = () => {
  const services = [
    { icon: "Q@", title: "Figma" },
    { icon: "O", title: "Supa" },
    { icon: "&", title: "Hype" },
    { icon: "&", title: "Hype" },
    { icon: "G®", title: "Ultra" },
    { icon: "DP", title: "Ship" }
  ];

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Services</h2>
          <p className={styles.subtitle}>
            Comprehensive digital solutions tailored to elevate your brand
          </p>
        </div>
        
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceContent}>
                <span className={styles.serviceIcon}>{service.icon}</span>
                <span className={styles.serviceTitle}>{service.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;