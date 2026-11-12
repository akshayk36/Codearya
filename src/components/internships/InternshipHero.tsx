
import React, { useState } from 'react';
import TypingAnimation from '@/components/TypingAnimation';
import Enhanced3DScene from '@/components/internships/Enhanced3DScene';
import EditableContent from '@/components/EditableContent';

interface InternshipHeroProps {
  isVisible: boolean;
}

const InternshipHero: React.FC<InternshipHeroProps> = ({ isVisible }) => {
  const [heroTitle, setHeroTitle] = useState("Launch Your Tech Career in 2025");
  const [heroDescription, setHeroDescription] = useState("Join our comprehensive internship program and gain hands-on experience building the future of technology with industry experts.");

  return (
    <section className="relative section-padding pt-20 sm:pt-24 md:pt-32 overflow-hidden">
      {/* Enhanced 3D Background Scene */}
      <Enhanced3DScene />
      
      {/* Enhanced Background with Mobile/Tablet Blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 mobile-blur tablet-blur backdrop-blur-xl sm:backdrop-blur-2xl md:backdrop-blur-3xl"></div>
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Random floating elements for animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 bg-neon-blue/30 rounded-full animate-random-drift" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[50%] right-[10%] w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 bg-neon-purple/40 rounded-full animate-random-drift" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[25%] left-[75%] w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 bg-neon-pink/25 rounded-full animate-random-drift" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[35%] left-[65%] w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 bg-neon-cyan/35 rounded-full animate-random-drift" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[55%] right-[20%] w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 bg-neon-blue/20 rounded-full animate-random-drift" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[20%] right-[35%] w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 bg-neon-purple/30 rounded-full animate-random-drift" style={{ animationDelay: '5s' }}></div>
        <div className="absolute bottom-[40%] left-[15%] w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 bg-neon-pink/35 rounded-full animate-random-drift" style={{ animationDelay: '6s' }}></div>
      </div>
      
      <div className="container mx-auto px-1 xs:px-2 sm:px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* 3D Animated Student Avatars with proper dimensions */}
            <div className="flex justify-center items-center mb-3 xs:mb-4 sm:mb-6 md:mb-8 space-x-1 xs:space-x-2 sm:space-x-4" style={{ minHeight: '48px' }}>
              <div className="relative w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-1 xs:border-2 sm:border-4 border-neon-blue/50 animate-float transform hover:scale-110 transition-transform duration-500 will-change-transform">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=80&h=80&fit=crop&crop=face"
                  alt="Student Avatar 1"
                  className="w-full h-full object-cover"
                  width="80"
                  height="80"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/30 to-transparent"></div>
              </div>
              <div className="relative w-12 h-12 xs:w-14 xs:h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-1 xs:border-2 sm:border-4 border-neon-purple/50 animate-float transform hover:scale-110 transition-transform duration-500 will-change-transform" style={{ animationDelay: '1s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=96&h=96&fit=crop&crop=face"
                  alt="Student Avatar 2"
                  className="w-full h-full object-cover"
                  width="96"
                  height="96"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/30 to-transparent"></div>
              </div>
              <div className="relative w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-1 xs:border-2 sm:border-4 border-neon-pink/50 animate-float transform hover:scale-110 transition-transform duration-500 will-change-transform" style={{ animationDelay: '2s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=80&h=80&fit=crop&crop=face"
                  alt="Student Avatar 3"
                  className="w-full h-full object-cover"
                  width="80"
                  height="80"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neon-pink/30 to-transparent"></div>
              </div>
            </div>
            
            <EditableContent
              content={heroTitle}
              onSave={setHeroTitle}
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight px-1 xs:px-2"
              element="h1"
            >
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight px-1 xs:px-2" style={{ minHeight: '48px' }}>
                Launch Your <TypingAnimation text="Tech Career" className="gradient-text" /> in 2025
              </h1>
            </EditableContent>
            
            <EditableContent
              content={heroDescription}
              onSave={setHeroDescription}
              className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-foreground/80 mb-4 xs:mb-6 sm:mb-8 max-w-3xl mx-auto px-1 xs:px-2 sm:px-4 leading-relaxed"
              element="p"
            >
              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-foreground/80 mb-4 xs:mb-6 sm:mb-8 max-w-3xl mx-auto px-1 xs:px-2 sm:px-4 leading-relaxed">
                {heroDescription}
              </p>
            </EditableContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipHero;
