
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ApplicationProcessProps {
  processSteps: ProcessStep[];
}

const ApplicationProcess: React.FC<ApplicationProcessProps> = ({ processSteps }) => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-3 sm:mb-4 leading-tight">
            Application <span className="gradient-text">Process</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
            A simple, transparent process to join our team
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line - Hidden on mobile and tablet */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-neon-blue to-neon-purple hidden xl:block"></div>
          
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12">
            {processSteps.map((step, index) => (
              <div 
                key={step.step}
                className={`flex flex-col xl:flex-row items-center gap-3 sm:gap-4 md:gap-6 xl:gap-8 animate-fade-in ${
                  index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="flex-1 w-full">
                  <Card className={`glass-effect border-white/10 hover-lift transition-all duration-700 hover:border-neon-blue/30 ${
                    index % 2 === 0 ? 'xl:text-right' : 'xl:text-left'
                  }`}>
                    <CardContent className="p-3 sm:p-4 md:p-6">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 hover:text-neon-blue transition-colors duration-500 leading-tight">{step.title}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Step Number */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-black font-bold text-sm sm:text-base md:text-lg shrink-0 relative z-10 hover:scale-110 transition-transform duration-500 cursor-pointer">
                  {step.step}
                </div>
                
                <div className="flex-1 xl:block hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
