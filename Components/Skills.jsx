import React, { useRef, useEffect, useState, memo } from "react";
import styled from "styled-components";
import Images from "../images/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import useLocomotiveScroll from "../../hooks/useLocomotiveScroll";
// import hoverSound from "../../images/sound/click_sound.mp3";

// Memoized Tilt component for better performance
const TiltComponent = memo(({ children, perspective = 110, scale = 1.06 }) => {
  const [tiltStyle, setTiltStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
    transition: "transform 0.2s ease-out",
  });
  const [glareStyle, setGlareStyle] = useState({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    pointerEvents: "none",
    opacity: 0,
  });
  const tiltRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!tiltRef.current) return;

    const rect = tiltRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Calculate tilt effect - max 10 degrees rotation
    const tiltX = (0.5 - y) * 10;
    const tiltY = (x - 0.5) * 10;

    // Update glare position
    const glareX = x * 100;
    const glareY = y * 100;

    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`,
      transition: "transform 0.2s ease-out",
    });

    setGlareStyle((prev) => ({
      ...prev,
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 80%)`,
      opacity: 0.6,
    }));
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
      transition: "transform 0.5s ease-out",
    });

    setGlareStyle((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  return (
    <div
      className="parallax-effect-glare-scale"
      ref={tiltRef}
      style={{
        transformStyle: "preserve-3d",
        ...tiltStyle,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div style={glareStyle} />
    </div>
  );
});

TiltComponent.displayName = "TiltComponent";

// Skill bubble component - memoized for performance
const SkillBubble = memo(({ skill, onMouseEnter }) => {
  const skillKey = Object.keys(skill)[0]; // Get the first key
  const { icon, name } = skill[skillKey];
  const isStyledComponents = name === "Styled-components";

  // Prepare random animation delay once per component mount
  const randomDelay = useRef(Math.random() * 2);

  return (
    <TiltComponent>
      <StyledBubble
        className="Bubbles"
        onMouseEnter={onMouseEnter}
        $delay={randomDelay.current}
      >
        <div className="bubble_content inner-element">
          <img
            className={isStyledComponents ? "styled" : ""}
            src={icon}
            alt={name}
            loading="lazy" // Add lazy loading for images
            width={isStyledComponents ? 60 : undefined}
            height={isStyledComponents ? 60 : undefined}
          />
          {/* Optionally add a tooltip with the skill name */}
          <span className="skill-tooltip">{name}</span>
        </div>
      </StyledBubble>
    </TiltComponent>
  );
});

SkillBubble.displayName = "SkillBubble";

// Main Skills component
const Skills = () => {
  const Header = useRef(null);
  const skill = useRef(null);
  const audioRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // useLocomotiveScroll();

  // Set up Intersection Observer to trigger animations only when in view
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

    if (skill.current) {
      observer.observe(skill.current);
    }

    return () => {
      if (skill.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Set up GSAP animations when element is in view
  useEffect(() => {
    if (!isInView) return;

    gsap.registerPlugin(ScrollTrigger);
    const headerEl = Header.current;
    const skillEl = skill.current;

    gsap.to(headerEl, {
      y: 0,
      x: 0,
      duration: 0.5,
      opacity: 1,
      scrollTrigger: {
        trigger: headerEl,
        start: "bottom 96%",
        end: "bottom 95%",
        toggleActions: "restart none none reverse",
        ease: "power4.inOut",
      },
    });

    // Use timeline for better performance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillEl,
        start: "30% bottom",
        end: "bottom center",
      },
    });

    // Animate all bubbles at once with stagger, more efficient than fromTo
    tl.to(".Bubbles", {
      y: 0,
      opacity: 1,
      stagger: {
        each: 0.05,
        from: "random",
      },
      duration: 0.5,
    });
  }, [isInView]);

  // Optimize sound playing with debounce
  // const playHoverSound = () => {
  //   if (window.innerWidth > 768 && audioRef.current) {
  //     // Prevent audio from playing too frequently
  //     if (audioRef.current.dataset.lastPlayed) {
  //       const lastPlayed = Number(audioRef.current.dataset.lastPlayed);
  //       if (Date.now() - lastPlayed < 500) return; // Only play every 500ms
  //     }

  //     audioRef.current.volume = 0.4;
  //     audioRef.current.currentTime = 0;
  //     audioRef.current.play().catch((e) => {
  //       // Silent catch for autoplay policy errors
  //     });
  //     audioRef.current.dataset.lastPlayed = Date.now();
  //   }
  // };

  const skillsList = [
    { Html: { icon: Images.html, name: "HTML" } },
    { SCSS: { icon: Images.scss, name: "SCSS" } },
    { Js: { icon: Images.js, name: "JavaScript" } },
    { React: { icon: Images.react, name: "React.js" } },
    { Next: { icon: Images.next, name: "Next.js" } },
    {
      Styled_components: {
        icon: Images.styled_components,
        name: "Styled-components",
      },
    },
    { Tailwind: { icon: Images.tailwind, name: "Tailwind" } },
    { Bootstrap: { icon: Images.bootstrap, name: "Bootstrap" } },
    { GSAP: { icon: Images.gsap, name: "GSAP" } },
    { Vite: { icon: Images.vite, name: "Vite" } },
    { Figma: { icon: Images.figma, name: "Figma" } },
    { php: { icon: Images.php, name: "PHP" } },
    { laravel: { icon: Images.laravel, name: "Laravel" } },
    { mysql: { icon: Images.mysql, name: "MySQL" } },
    { api: { icon: Images.api, name: "Rest API" } },
    { A11Y: { icon: Images.a11y, name: "A11Y" } },
    { Optimization: { icon: Images.optimization, name: "PageSpeed" } },
    { git: { icon: Images.git, name: "git" } },
    { postman: { icon: Images.postman, name: "Postman" } },
  ];

  return (
    <StyledSkillsSection>
      {/* <audio ref={audioRef} src={hoverSound} preload="none"></audio> */}

      <div className="Section_Heading__" id="Skills" ref={Header}>
        <div className="Section__heading_jfrk54">
          <h1>My</h1>
          <h1>Skillset</h1>
        </div>
      </div>

      <StyledSkillsContent ref={skill}>
        <div className="Bubbles__bubbles">
          {skillsList.map((skill, index) => (
            <SkillBubble
              key={index}
              skill={skill}
              // onMouseEnter={playHoverSound}
            />
          ))}
        </div>
      </StyledSkillsContent>

      <div className="Skills_Blob">
        <div className="skills_Blob__Jr9v9"></div>
        <div className="skills_Blob__J53x6"></div>
      </div>
    </StyledSkillsSection>
  );
};

export default Skills;

// Styled components - optimized
const StyledSkillsSection = styled.section`
  width: 100%;
  padding: 0 40px 0;
  position: relative;
  /* background-color: red; */

  @media (max-width: 700px) {
    padding: 0;
  }

  .Section_Heading__ {
    padding-left: 30px;
  }

  .skills_Blob__Jr9v9 {
    position: absolute;
    left: 0;
    top: -20%;
    width: 20%;
    height: 40%;
    background: conic-gradient(from 2.35rad, #c76000, rgba(7, 29, 228, 0.5));
    filter: blur(60px);
    z-index: 1;
    opacity: 0.4;
    will-change: transform; /* Helps with GPU acceleration */
  }

  .skills_Blob__J53x6 {
    position: absolute;
    left: 40%;
    top: 40%;
    transform: translateX(-50%);
    width: 80%;
    height: 40%;
    background: conic-gradient(#3d3d3d, rgba(6, 12, 68, 0.29));
    filter: blur(160px);
    opacity: 0.6;
    will-change: transform; /* Helps with GPU acceleration */
  }
`;

const StyledSkillsContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  margin-top: 80px;
  background-color: transparent !important;

  .Bubbles__bubbles {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 70px;

    @media (max-width: 700px) {
      gap: 50px;
    }

    @media (max-width: 500px) {
      gap: 30px;
    }
  }
`;

const StyledBubble = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  align-items: center;
  background: radial-gradient(
    circle,
    #fff 49%,
    #878787 100%,
    #878787 100%,
    #fff 69%
  );
  cursor: pointer;
  position: relative;
  user-select: none;
  opacity: 0;
  /* Use CSS variables for animation properties */
  animation: bubbleFloat 3s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay}s;
  will-change: transform; /* Performance optimization */

  @keyframes bubbleFloat {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
    100% {
      transform: translateY(0);
    }
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(1px 1px #00000030);
    object-fit: contain; /* Ensures proper image scaling */
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .skill-tooltip {
    position: absolute;
    bottom: -40%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 8px 15px;
    border-radius: 10px;
    color: var(--bg-navy);
    display: none;
    width: max-content;
    pointer-events: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:hover .skill-tooltip {
    display: block;

    @media (max-width: 750px) {
      display: none;
    }
  }

  .styled {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 700px) {
    width: 100px;
    height: 100px;

    img {
      width: 60px;
    }

    .styled {
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 500px) {
    width: 70px;
    height: 70px;

    img {
      width: 50px;
    }

    .styled {
      width: 30px;
      height: 30px;
    }
  }
`;