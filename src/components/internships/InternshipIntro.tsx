
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const InternshipIntro: React.FC = () => {
  const scrollToApplication = () => {
    const applicationSection = document.getElementById('application-form');
    if (applicationSection) {
      applicationSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-card/30 relative overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 sm:mb-6 animate-slide-in-left animation-delay-300 leading-tight">
            Transform Your Skills with <span className="gradient-text">Real-World Experience</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed mb-6 sm:mb-8 animate-slide-in-right animation-delay-600 px-2 sm:px-4">
            Our internship program offers hands-on learning experiences across four cutting-edge technology domains. 
            Work on real projects, receive expert mentorship, and build a portfolio that sets you apart in the competitive tech industry.
          </p>
          
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center animate-scale-in animation-delay-900 px-2">
            <Button 
              onClick={scrollToApplication}
              size="lg"
              className="w-full max-w-xs bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-black font-semibold px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-500 hover:scale-105 neon-glow group relative overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2" />
                Get Started Now
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="w-full max-w-xs border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-500 hover:scale-105 hover:border-neon-blue text-sm sm:text-base"
              onClick={() => {
                const areasSection = document.querySelector('#internship-areas');
                if (areasSection) {
                  areasSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Programs
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-neon-blue/5 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-neon-purple/5 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-neon-pink/5 rounded-full blur-xl animate-pulse animation-delay-3000"></div>
      </div>
    </section>
  );
};

export default InternshipIntro;
