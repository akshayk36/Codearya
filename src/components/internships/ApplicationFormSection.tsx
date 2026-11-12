
import React from 'react';
import FormspreeContactForm from '@/components/FormspreeContactForm';

const ApplicationFormSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-card/30 to-background" id="application-form">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-3 sm:mb-4 leading-tight">
              Apply <span className="gradient-text">Now</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 px-2 sm:px-4 leading-relaxed">
              Take the first step towards your tech career with our enhanced application form
            </p>
          </div>
          
          <div className="animate-fade-in animation-delay-500 px-2 sm:px-4">
            <FormspreeContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationFormSection;
