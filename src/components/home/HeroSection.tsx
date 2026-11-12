
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';
import CurvedLightBackground from '@/components/CurvedLightBackground';
import TypingAnimation from '@/components/TypingAnimation';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative section-padding pt-32 overflow-hidden min-h-screen">
      <CurvedLightBackground />
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/20 to-background/40"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Innovating the{' '}
              <span className="gradient-text block" style={{ minHeight: '1.2em' }}>
                <TypingAnimation 
                  text="Digital Future" 
                  className="inline-block"
                />
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto">
              Web Development, AI Solutions & Digital Design for Impact.
            </p>
            
            <div className="flex flex-col gap-6 justify-center items-center mb-12 max-w-md mx-auto">
              <Link to="/internships" className="w-full">
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white font-semibold px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 neon-glow text-lg will-change-transform"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/projects" className="w-full">
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:border-neon-blue text-lg will-change-transform"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
