
import React from 'react';

const StatisticsSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-card/30 to-transparent">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
          <div className="animate-fade-in">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neon-blue">500+</h3>
            <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-tight">Students Trained</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neon-purple">95%</h3>
            <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-tight">Placement Rate</p>
          </div>
          <div className="animate-fade-in col-span-2 lg:col-span-1" style={{ animationDelay: '400ms' }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neon-pink">50+</h3>
            <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-tight">Partner Companies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
