import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Github, 
  Linkedin, 
  Heart, 
  Zap, 
  Cpu, 
  Globe, 
  Terminal,
  Sparkles,
  Flame,
  Target,
  Rocket,
  Activity,
  Radio,
  Wifi,
  Brain,
  Eye,
  Code,
  CircuitBoard,
  Layers
} from 'lucide-react';

// Enhanced SVG Logo with Neural Network Effects
const MoSugarLogo = ({ className, isGlitching }) => (
  <svg 
    className={className}
    viewBox="0 0 129.79 27.71" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff0080" />
        <stop offset="25%" stopColor="#ff8c00" />
        <stop offset="50%" stopColor="#00ff88" />
        <stop offset="75%" stopColor="#0088ff" />
        <stop offset="100%" stopColor="#ff0080" />
        <animateTransform
          attributeName="gradientTransform"
          type="rotate"
          values="0 64.895 13.855;360 64.895 13.855"
          dur="8s"
          repeatCount="indefinite"
        />
      </linearGradient>
      <filter id="neuralGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="brighten"/>
        <feMerge> 
          <feMergeNode in="brighten"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="hologram">
        <feOffset in="SourceGraphic" dx="1" dy="0" result="offset"/>
        <feFlood flood-color="#ff0080" flood-opacity="0.3"/>
        <feComposite in2="offset" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g fill="url(#neuralGradient)" filter={isGlitching ? "url(#hologram)" : "url(#neuralGlow)"}>
      <path d="M26.16,1.81v18.28h-3.41v-10.06l-4.66,10.06h-1.79l-4.65-10.11v10.12h-3.41V1.81h3.07l5.9,12.54L23.09,1.81h3.07Z"/>
      <path d="M32.05,19.58c-1-.57-1.77-1.38-2.33-2.42-.56-1.04-.83-2.24-.83-3.59s.28-2.53.85-3.58c.56-1.05,1.34-1.86,2.33-2.44.99-.58,2.12-.87,3.38-.87s2.4.29,3.39.86,1.78,1.38,2.34,2.43.85,2.25.85,3.6-.28,2.52-.85,3.56-1.34,1.85-2.34,2.43-2.13.87-3.39.87-2.4-.29-3.39-.86h-.01ZM37.64,16.31c.55-.68.82-1.59.82-2.73s-.27-2.06-.82-2.74-1.28-1.03-2.2-1.03-1.63.34-2.17,1.03-.82,1.6-.82,2.74.27,2.05.81,2.73c.54.68,1.26,1.01,2.18,1.01s1.65-.34,2.2-1.01Z"/>
      <path d="M54.83,19.73c-1.15-.48-2.07-1.17-2.74-2.07-.68-.9-1.05-1.97-1.12-3.2h3.72c.1.88.52,1.59,1.24,2.12s1.66.79,2.82.79c1.09,0,1.96-.22,2.6-.66s.96-1.05.96-1.83c0-1.13-.8-1.87-2.39-2.24l-3.75-.81c-1.54-.35-2.73-.92-3.56-1.72s-1.25-1.83-1.25-3.1c0-1.09.29-2.05.86-2.89.57-.83,1.39-1.48,2.46-1.95s2.31-.7,3.73-.7c2.12,0,3.84.51,5.18,1.52,1.34,1.01,2.07,2.43,2.21,4.25h-3.69c-.17-1.8-1.39-2.71-3.64-2.71-1.04,0-1.86.19-2.47.57s-.91.92-.91,1.61c0,.55.2.99.6,1.3.4.31,1.02.56,1.87.75l3.62.81c3.31.71,4.97,2.36,4.97,4.94,0,1.21-.3,2.27-.91,3.16s-1.47,1.57-2.58,2.04c-1.11.47-2.4.7-3.88.7s-2.79-.24-3.94-.71v.03Z"/>
      <path d="M80.7,7.02v13.08h-2.73l-.36-1.85c-.94,1.46-2.39,2.18-4.37,2.18-1.51,0-2.64-.46-3.41-1.37-.76-.91-1.14-2.35-1.14-4.33v-7.72h3.46v7.72c0,.83.19,1.45.56,1.86s.89.61,1.55.61c.83,0,1.53-.31,2.11-.94s.86-1.51.86-2.65v-6.61h3.48v.02Z"/>
      <path d="M96.26,7.02v12.02c0,2.41-.58,4.21-1.74,5.41-1.16,1.2-2.75,1.79-4.76,1.79-1.77,0-3.21-.42-4.32-1.25s-1.73-2.09-1.87-3.77h3.22c.14.64.46,1.14.96,1.51s1.12.55,1.85.55c.99,0,1.77-.34,2.34-1.01.57-.68.86-1.6.86-2.76v-.52c-.94.97-2.14,1.46-3.62,1.46-1.21,0-2.29-.29-3.21-.86s-1.65-1.38-2.16-2.42c-.51-1.04-.77-2.25-.77-3.62s.27-2.6.82-3.64,1.27-1.83,2.18-2.38,1.89-.82,2.95-.82c.83,0,1.61.17,2.33.52.72.35,1.32.82,1.81,1.43l.26-1.64h2.87ZM92.8,12.19c-.19-.75-.54-1.33-1.05-1.76-.51-.42-1.15-.64-1.91-.64-.99,0-1.77.34-2.35,1.03s-.87,1.6-.87,2.74.29,2.05.87,2.73,1.37,1.01,2.38,1.01c.76,0,1.41-.2,1.94-.59s.86-.94,1-1.65v-2.89.02Z"/>
      <path d="M108.87,8.04c.99.91,1.48,2.29,1.48,4.15v7.91h-2.73l-.34-1.74c-.38.55-.95,1.04-1.69,1.46s-1.6.62-2.55.62c-1.37,0-2.47-.35-3.3-1.04-.83-.69-1.25-1.63-1.25-2.81,0-1.02.34-1.85,1.01-2.47.68-.62,1.62-1.1,2.82-1.42s2.73-.58,4.56-.77v-.18c0-.75-.19-1.3-.56-1.66s-.91-.55-1.6-.55-1.24.18-1.62.53c-.39.36-.58.8-.58,1.34h-3.46c0-.9.24-1.71.73-2.43.49-.72,1.16-1.28,2.03-1.69.87-.41,1.86-.61,2.97-.61,1.73,0,3.09.46,4.08,1.37h0ZM105.83,17.19c.57-.48.93-1.13,1.07-1.95v-1.04c-1.61.09-2.82.31-3.63.68-.81.36-1.21.88-1.21,1.56,0,.49.17.85.51,1.11.34.25.78.38,1.31.38.73,0,1.38-.24,1.95-.73h0Z"/>
      <path d="M121.53,6.73l-.16,3.48c-.33-.14-.76-.21-1.3-.21-.57,0-1.12.13-1.65.4-.53.27-.96.65-1.29,1.16s-.49,1.08-.49,1.74v6.79h-3.49V7.01h2.89l.29,1.85c.99-1.46,2.45-2.18,4.4-2.18.29,0,.56.02.81.05h0Z"/>
    </g>
  </svg>
);

// Neural Network Visualization Component
const NeuralNetwork = ({ mousePosition }) => {
  const [nodes, setNodes] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    // Create neural nodes
    const nodeCount = 25;
    const newNodes = Array.from({ length: nodeCount }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 3 + 2,
      intensity: Math.random(),
      connections: []
    }));
    
    setNodes(newNodes);
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update nodes
      newNodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Mouse interaction
        const dx = mousePosition.x * canvas.width / 100 - node.x;
        const dy = mousePosition.y * canvas.height / 100 - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          node.x -= dx * 0.01;
          node.y -= dy * 0.01;
          node.intensity = Math.min(1, distance / 50);
        }
      });
      
      // Draw connections
      newNodes.forEach((node, i) => {
        newNodes.slice(i + 1).forEach(otherNode => {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          );
          
          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.5;
            ctx.strokeStyle = `rgba(255, ${Math.floor(100 + node.intensity * 155)}, 0, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });
      });
      
      // Draw nodes
      newNodes.forEach(node => {
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius);
        gradient.addColorStop(0, `rgba(255, ${Math.floor(100 + node.intensity * 155)}, 0, 1)`);
        gradient.addColorStop(1, 'rgba(255, 100, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

// Matrix Rain Effect
const MatrixRain = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#ff6600';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);
  
  return <canvas ref={canvasRef} className="fixed inset-0 opacity-10 pointer-events-none z-0" />;
};

// Main Footer Component
const ElonWorthyCyberpunkFooter = () => {
  const [time, setTime] = useState(new Date());
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [aiThinking, setAiThinking] = useState(false);
  const [neuralActivity, setNeuralActivity] = useState(0);
  const [systemStatus, setSystemStatus] = useState('INITIALIZING');
  const [isMounted, setIsMounted] = useState(false);
  const [cpuUsage, setCpuUsage] = useState(0);
  const [networkActivity, setNetworkActivity] = useState(0);
  const [quantumField, setQuantumField] = useState(0);
  
  const footerRef = useRef(null);
  const audioContextRef = useRef(null);

  // Mount handler
  useEffect(() => {
    setIsMounted(true);
    
    // Initialize system status sequence
    const statusSequence = ['INITIALIZING', 'LOADING_NEURAL_CORE', 'CONNECTING_TO_MARS', 'SYSTEM_ONLINE'];
    let currentIndex = 0;
    
    const statusInterval = setInterval(() => {
      setSystemStatus(statusSequence[currentIndex]);
      currentIndex = (currentIndex + 1) % statusSequence.length;
    }, 2000);
    
    return () => clearInterval(statusInterval);
  }, []);

  // Time updates
  useEffect(() => {
    if (!isMounted) return;
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [isMounted]);

  // Advanced glitch system
  useEffect(() => {
    if (!isMounted) return;
    
    const glitchTimer = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), Math.random() * 300 + 100);
    }, Math.random() * 5000 + 2000);
    
    return () => clearInterval(glitchTimer);
  }, [isMounted]);

  // AI thinking simulation
  useEffect(() => {
    if (!isMounted) return;
    
    const thinkingTimer = setInterval(() => {
      setAiThinking(true);
      setTimeout(() => setAiThinking(false), Math.random() * 2000 + 1000);
    }, Math.random() * 10000 + 5000);
    
    return () => clearInterval(thinkingTimer);
  }, [isMounted]);

  // System metrics simulation
  useEffect(() => {
    if (!isMounted) return;
    
    const metricsTimer = setInterval(() => {
      setCpuUsage(Math.random() * 100);
      setNetworkActivity(Math.random() * 1000);
      setQuantumField(Math.random() * 100);
      setNeuralActivity(Math.random() * 100);
    }, 500);
    
    return () => clearInterval(metricsTimer);
  }, [isMounted]);

  // Enhanced mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Audio feedback system
  const playBeep = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    const oscillator = audioContextRef.current.createOscillator();
    const gainNode = audioContextRef.current.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContextRef.current.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.1);
    
    oscillator.start(audioContextRef.current.currentTime);
    oscillator.stop(audioContextRef.current.currentTime + 0.1);
  }, []);

  const socialPlatforms = [
    { 
      icon: Github, 
      name: 'GitHub', 
      href: 'https://github.com/yourusername', 
      color: 'text-green-400',
      description: 'Neural_Code_Repository'
    },
    { 
      icon: Linkedin, 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/yourusername', 
      color: 'text-blue-400',
      description: 'Professional_Network_Node'
    }
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes dataStream {
          0% { transform: translateY(100vh) scaleY(0); }
          50% { transform: translateY(0) scaleY(1); }
          100% { transform: translateY(-100vh) scaleY(0); }
        }
        
        @keyframes neuralPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes quantumFlicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.1; }
        }
        
        @keyframes hologramScan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes aiThink {
          0%, 100% { transform: rotate(0deg) scale(1); }
          33% { transform: rotate(120deg) scale(1.1); }
          66% { transform: rotate(240deg) scale(0.9); }
        }
        
        .data-stream {
          animation: dataStream 3s linear infinite;
        }
        
        .neural-pulse {
          animation: neuralPulse 2s ease-in-out infinite;
        }
        
        .quantum-flicker {
          animation: quantumFlicker 0.1s linear infinite;
        }
        
        .hologram-scan {
          animation: hologramScan 8s linear infinite;
        }
        
        .ai-thinking {
          animation: aiThink 1s ease-in-out infinite;
        }
        
        .glitch-text {
          position: relative;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch-text::before {
          animation: glitch-1 0.5s infinite linear alternate-reverse;
          color: #ff0080;
          z-index: -1;
        }
        
        .glitch-text::after {
          animation: glitch-2 0.5s infinite linear alternate-reverse;
          color: #00ff88;
          z-index: -2;
        }
        
        @keyframes glitch-1 {
          0% { transform: translateX(-2px) skewX(10deg); }
          25% { transform: translateX(1px) skewX(-5deg); }
          50% { transform: translateX(-1px) skewX(5deg); }
          75% { transform: translateX(2px) skewX(-10deg); }
          100% { transform: translateX(-1px) skewX(5deg); }
        }
        
        @keyframes glitch-2 {
          0% { transform: translateX(1px) skewX(-10deg); }
          25% { transform: translateX(-2px) skewX(5deg); }
          50% { transform: translateX(2px) skewX(-5deg); }
          75% { transform: translateX(-1px) skewX(10deg); }
          100% { transform: translateX(1px) skewX(-5deg); }
        }
      `}</style>
      
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      <footer 
        ref={footerRef}
        className={`relative min-h-screen overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-2000 ease-out`}
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(255, 0, 128, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 255, 136, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 60% 40%, rgba(0, 136, 255, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)
          `
        }}
      >
        {/* Neural Network Background */}
        <NeuralNetwork mousePosition={mousePosition} />
        
        {/* Holographic Scan Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 hologram-scan" />
        </div>
        
        {/* Quantum Field Effects */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 0, 128, 0.6) 0%, rgba(0, 255, 136, 0.4) 25%, rgba(0, 136, 255, 0.2) 50%, transparent 70%)`,
            filter: 'blur(100px)',
            transform: `scale(${1 + quantumField / 500})`
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          
          {/* Neural Header */}
          <div className="flex justify-between items-start p-8 lg:p-12 border-b border-cyan-500/30">
            <div className="flex flex-col gap-6 relative">
              {/* Enhanced Logo */}
              <div className="relative group">
                <MoSugarLogo 
                  className={`h-20 transition-all duration-500 ${glitchActive ? 'quantum-flicker' : ''}`} 
                  isGlitching={glitchActive}
                />
                
                {/* AI Brain Overlay */}
                <div className="absolute -top-4 -right-4">
                  <Brain 
                    size={24} 
                    className={`text-cyan-400 ${aiThinking ? 'ai-thinking' : 'neural-pulse'}`} 
                  />
                </div>
                
                {/* Neural Activity Indicator */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60">
                  <div 
                    className="h-full bg-cyan-400 transition-all duration-300"
                    style={{ width: `${neuralActivity}%` }}
                  />
                </div>
              </div>
              
              <div className={`glitch-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-2xl font-mono font-black tracking-wider ${glitchActive ? 'quantum-flicker' : ''}`} data-text="[NEURAL_ARCHITECT]">
                [NEURAL_ARCHITECT]
              </div>

              {/* Floating Neural Nodes */}
              <div className="absolute -top-8 -right-8 text-cyan-400 animate-bounce">
                <CircuitBoard size={32} className="animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              <div className="absolute -bottom-8 -left-8 text-purple-400 animate-bounce" style={{ animationDelay: '1s' }}>
                <Layers size={28} className="animate-pulse" />
              </div>
            </div>
            
            {/* System Status Panel */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 px-6 py-3 border border-cyan-400 bg-cyan-400/10 rounded-lg backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent data-stream" />
                <div className="relative flex items-center gap-3">
                  <div className="relative">
                    <Eye size={20} className={`text-cyan-400 ${aiThinking ? 'ai-thinking' : 'animate-pulse'}`} />
                    <div className="absolute inset-0 w-5 h-5 border border-cyan-400 rounded-full animate-ping" />
                  </div>
                  <span className="text-cyan-400 font-mono text-sm tracking-wider font-bold">{systemStatus}</span>
                </div>
              </div>
              
              {/* Real-time metrics */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="px-3 py-2 bg-black/60 border border-green-400/50 rounded">
                  <div className="text-green-400">CPU: {Math.floor(cpuUsage)}%</div>
                  <div className="w-full h-1 bg-black rounded-full mt-1">
                    <div 
                      className="h-full bg-green-400 rounded-full transition-all duration-300"
                      style={{ width: `${cpuUsage}%` }}
                    />
                  </div>
                </div>
                <div className="px-3 py-2 bg-black/60 border border-purple-400/50 rounded">
                  <div className="text-purple-400">NET: {Math.floor(networkActivity)}MB/s</div>
                  <div className="w-full h-1 bg-black rounded-full mt-1">
                    <div 
                      className="h-full bg-purple-400 rounded-full transition-all duration-300"
                      style={{ width: `${networkActivity / 10}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Neural Interface */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 w-full max-w-7xl">
              
              {/* Quantum Time Portal */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-black/80 border-2 border-cyan-400/50 rounded-2xl p-8 backdrop-blur-xl overflow-hidden">
                  
                  {/* Quantum Field Header */}
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-cyan-400/30">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.6s' }} />
                    </div>
                    <span className="text-cyan-400 font-mono text-sm font-bold tracking-wider">quantum_time.exe</span>
                    <div className="ml-auto">
                      <Radio size={16} className="text-cyan-400 animate-pulse" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Location with Rocket */}
                    <div className="flex items-center gap-4">
                      <Rocket size={24} className="text-orange-400 animate-bounce" />
                      <div>
                        <div className="text-white font-mono font-bold text-lg">🚀 Rabat, Morocco</div>
                        <div className="text-cyan-400/70 font-mono text-xs">EARTH_COORDINATE_NODE</div>
                      </div>
                    </div>
                    
                    {/* Quantum Time Display */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Target size={16} className="text-orange-400 animate-spin" />
                        <span className="text-orange-400 font-mono text-sm uppercase tracking-widest font-bold">
                          [QUANTUM_TIME_SYNC]
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className={`text-5xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 tracking-wider ${glitchActive ? 'glitch-text' : ''}`} data-text={isMounted ? time.toLocaleTimeString('en-US', { 
                          hour12: false,
                          hour: '2-digit',
                          minute: '2-digit',
                          second: '2-digit'
                        }) : '00:00:00'}>
                          {isMounted ? time.toLocaleTimeString('en-US', { 
                            hour12: false,
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit'
                          }) : '00:00:00'}
                        </div>
                        
                        {/* Holographic overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                      </div>
                      
                      <div className="flex items-center gap-2 text-cyan-400/70 font-mono text-sm">
                        <Globe size={14} className="animate-spin" />
                        <span>GMT+1 // MARS_SYNC_PROTOCOL</span>
                      </div>
                    </div>

                    {/* Quantum Field Strength */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-purple-400">QUANTUM_FIELD</span>
                        <span className="text-purple-400">{Math.floor(quantumField)}%</span>
                      </div>
                      <div className="w-full h-2 bg-black/60 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                          style={{ width: `${quantumField}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating quantum particles */}
                  <div className="absolute top-4 right-4 text-purple-400 animate-bounce">
                    <Sparkles size={20} className="animate-spin" />
                  </div>
                </div>
              </div>

              {/* Neural Communication Core */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-black/80 border-2 border-pink-400/50 rounded-2xl p-10 backdrop-blur-xl overflow-hidden flex flex-col items-center justify-center text-center min-h-[400px]">
                  
                  {/* Central AI Core */}
                  <div className="relative mb-8">
                    <div className="relative">
                      <Cpu className={`w-24 h-24 text-pink-500 ${aiThinking ? 'ai-thinking' : 'neural-pulse'}`} />
                      <div className="absolute inset-0 w-24 h-24 text-pink-500 opacity-30" style={{ transform: 'translate(-3px, -3px)' }}>
                        <Cpu className="w-24 h-24" />
                      </div>
                    </div>
                    
                    {/* Neural rings */}
                    <div className="absolute inset-0 w-24 h-24 border-2 border-pink-500 rounded-full animate-ping" />
                    <div className="absolute inset-0 w-24 h-24 border border-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                    
                    {/* Orbiting nodes */}
                    <div className="absolute -top-6 -right-6">
                      <Brain size={16} className="text-cyan-400 animate-bounce" />
                    </div>
                    <div className="absolute -bottom-6 -left-6">
                      <Zap size={16} className="text-orange-400 animate-pulse" />
                    </div>
                  </div>

                  <h3 className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-orange-400 to-red-400 mb-6 font-mono tracking-tight ${glitchActive ? 'glitch-text' : ''}`} data-text="NEURAL_LINK_REQUEST">
                    NEURAL_LINK_REQUEST
                  </h3>
                  
                  <div className="text-gray-300 font-mono text-sm mb-8 max-w-xs">
                    Establishing quantum entanglement protocol for direct neural interface communication
                  </div>
                  
                  <button 
                    onClick={playBeep}
                    className="group/link relative px-10 py-5 bg-gradient-to-r from-pink-500/20 to-orange-400/20 border-2 border-pink-500 rounded-xl font-mono font-bold text-pink-400 hover:text-white transition-all duration-500 overflow-hidden transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-400 opacity-0 group-hover/link:opacity-40 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/50 to-transparent translate-x-[-100%] group-hover/link:translate-x-[100%] transition-transform duration-1000" />
                    <div className="relative flex items-center gap-3">
                      <Zap className="w-6 h-6 animate-pulse" />
                      <span>INITIATE_CONTACT</span>
                      <Activity className="w-6 h-6 animate-pulse" />
                    </div>
                    
                    {/* Corner accents */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-pink-400" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-orange-400" />
                  </button>
                  
                  <a 
                    href="mailto:contact@mosugar.dev" 
                    className="mt-4 text-sm font-mono text-cyan-400 hover:text-white transition-colors"
                  >
                    contact@mosugar.dev
                  </a>
                </div>
              </div>

              {/* Neural Network Hub */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-black/80 border-2 border-green-400/50 rounded-2xl p-8 backdrop-blur-xl overflow-hidden">
                  
                  <div className="mb-6 relative">
                    <h4 className={`text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-mono text-xl font-black tracking-wider ${glitchActive ? 'glitch-text' : ''}`} data-text="[NEURAL_NETWORK_NODES]">
                      [NEURAL_NETWORK_NODES]
                    </h4>
                    
                    {/* Network activity indicator */}
                    <div className="absolute -top-2 -right-2">
                      <Wifi size={20} className="text-green-400 animate-pulse" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {socialPlatforms.map((platform, index) => (
                      <a
                        key={index}
                        href={platform.href}
                        onClick={playBeep}
                        className="group/social block relative"
                      >
                        <div className="flex items-center gap-5 p-4 bg-black/40 border border-green-400/30 rounded-xl hover:border-green-400 transition-all duration-500 relative overflow-hidden">
                          
                          {/* Data stream effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent translate-x-[-100%] group-hover/social:translate-x-[100%] transition-transform duration-1000" />
                          
                          {/* Icon with neural glow */}
                          <div className="relative">
                            <platform.icon 
                              className={`w-7 h-7 relative z-10 ${platform.color} group-hover/social:animate-pulse transition-all duration-300`}
                            />
                            <div className={`absolute inset-0 w-7 h-7 ${platform.color} opacity-0 group-hover/social:opacity-50 blur-sm transition-opacity duration-300`}>
                              <platform.icon className="w-7 h-7" />
                            </div>
                          </div>
                          
                          <div className="flex-1 relative z-10">
                            <div className="text-white font-mono font-bold text-lg group-hover/social:text-green-400 transition-colors duration-300">
                              {platform.name}
                            </div>
                            <div className="text-green-400/70 font-mono text-xs tracking-wider">
                              {platform.description}
                            </div>
                          </div>
                          
                          <div className="relative z-10">
                            <div className="flex items-center gap-2 text-green-400/50 font-mono text-xs font-bold">
                              <Code size={14} />
                              <span>NODE_{String(index + 1).padStart(2, '0')}</span>
                            </div>
                            <div className="text-xs font-mono text-green-400 mt-1">
                              STATUS: ACTIVE
                            </div>
                          </div>
                          
                          {/* Neural connection indicator */}
                          <div className="absolute top-2 right-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          </div>
                        </div>
                      </a>
                    ))}
                    
                    {/* Neural activity display */}
                    <div className="mt-6 p-4 bg-black/60 border border-blue-400/30 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-400 font-mono text-sm font-bold">NEURAL_ACTIVITY</span>
                        <span className="text-blue-400 font-mono text-sm">{Math.floor(neuralActivity)}%</span>
                      </div>
                      <div className="w-full h-3 bg-black/60 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 rounded-full transition-all duration-1000 neural-pulse"
                          style={{ width: `${neuralActivity}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs font-mono text-blue-400/70 mt-1">
                        <span>SYNAPSES_FIRING</span>
                        <span>PATTERN_RECOGNITION</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Neural Status Bar */}
          <div className="border-t-2 border-cyan-400/30 bg-black/80 backdrop-blur-xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-6 max-w-7xl mx-auto text-sm font-mono font-bold">
              
              <div className="flex items-center gap-8 text-cyan-400/70">
                <span className="flex items-center gap-2">
                  © 2025 MoSugar
                  <Heart size={14} className="text-pink-500 animate-pulse" />
                </span>
                <span className="flex items-center gap-2">
                  Neural networks powered by
                  <Flame size={14} className="text-orange-400 animate-bounce" />
                  Moroccan innovation
                </span>
              </div>
              
              <div className="flex items-center gap-6 text-cyan-400/70">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-cyan-400 animate-pulse" />
                  <span>NEURALINK: {systemStatus}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain size={14} className="text-purple-400 animate-pulse" />
                  <span>AI_CORE: LEARNING</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket size={14} className="text-orange-400 animate-bounce" />
                  <span>MARS_READY: TRUE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-yellow-400 animate-pulse" />
                  <span>ENERGY: UNLIMITED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ElonWorthyCyberpunkFooter; 