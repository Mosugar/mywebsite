import React from 'react';
import { Menu } from 'lucide-react';

const Hero = () => {
  const services = [
    {
      icon: "⚛",
      title: "React Blox",
      description: "Modern React applications with cutting-edge functionality"
    },
    {
      icon: "🎨",
      title: "Figma Blox", 
      description: "Professional UI/UX design and prototyping solutions"
    },
    {
      icon: "🔧",
      title: "Laravel Blox",
      description: "Robust backend systems and API development"
    },
    {
      icon: "⚡",
      title: "Framer Blox",
      description: "Interactive prototypes and motion design"
    },
    {
      icon: "💾",
      title: "Database Blox",
      description: "MySQL and database architecture solutions"
    },
    {
      icon: "🚀",
      title: "Full Stack Blox",
      description: "Complete web solutions with modern tech stack"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden"
         style={{
           backgroundImage: 'url(/img/12.jpg)',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
         }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-8">
        <div className="flex items-center gap-3">
          <span className="text-xl font-medium">Mohamed Sekkar</span>
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-400">Available</span>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full hover:bg-gray-800 transition-all duration-300 hover:border-orange-500">
          <span className="text-sm">Menu</span>
          <Menu size={16} />
        </button>
      </nav>

      {/* Main Hero Content */}
      <div className="flex flex-col justify-center items-start min-h-screen px-6 md:px-12 lg:px-16 pt-20 relative z-20">
        
        {/* Left side content */}
        <div className="max-w-4xl">
          {/* Copyright */}
          <div className="text-sm text-gray-500 mb-8">©2025</div>
          
          {/* Main heading */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight leading-none">
            Mohamed Sekkar
            <span className="text-xs align-top ml-2">®</span>
          </h1>
          
          {/* Profession */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-orange-500 font-medium">
              Developer / UI UX Designer
            </p>
          </div>
          
          {/* Subtitle sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Brand</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We craft bold, memorable brand identities that tell your story and leave a lasting impression.
              </p>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">UI/UX</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Intuitive, user-focused interfaces that elevate engagement and drive seamless interactions.
              </p>
            </div>
          </div>
        </div>

        {/* Service boxes at bottom */}
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 hover:bg-gray-800/80 hover:border-orange-500/30 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-white text-lg font-mono">{service.icon}</span>
                  <span className="text-white text-sm font-medium group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Hero;