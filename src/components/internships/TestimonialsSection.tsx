
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  avatar: string;
  company: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="section-padding bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-3 sm:mb-4 leading-tight">
            Student <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
            Hear from our former interns who are now thriving in their tech careers
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.author}
              className="group glass-effect border-white/10 hover-lift transition-all duration-700 hover:border-neon-blue/30 hover:shadow-neon-blue/20 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-3 sm:p-4 md:p-6">
                <p className="text-xs sm:text-sm md:text-base text-foreground/80 mb-3 sm:mb-4 md:mb-6 italic leading-relaxed group-hover:text-foreground transition-colors duration-500">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full mr-2 sm:mr-3 md:mr-4 object-cover border-2 border-neon-blue/30 group-hover:border-neon-blue transition-colors duration-500"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-neon-blue/20 to-transparent"></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm md:text-base font-semibold group-hover:text-neon-blue transition-colors duration-500 truncate">{testimonial.author}</h4>
                    <p className="text-xs sm:text-sm text-foreground/60 truncate">{testimonial.position}</p>
                    <p className="text-xs text-neon-blue/80 truncate">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
