
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ScrollingTestimonial {
  name: string;
  role: string;
  testimonial: string;
  avatar: string;
}

const ScrollingTestimonialsSection: React.FC = () => {
  const testimonials: ScrollingTestimonial[] = [
    {
      name: "Priya Sharma",
      role: "Web Development Intern",
      testimonial: "CodeArya's internship changed my life! Got placed at TCS with amazing mentorship and real-world projects.",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Rahul Kumar",
      role: "AI/ML Engineering Intern",
      testimonial: "Best learning experience! The hands-on projects and industry exposure helped me land my dream job at Infosys.",
      avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ananya Patel",
      role: "UI/UX Design Intern",
      testimonial: "Amazing mentors and real client projects. Now working as a senior designer at a top MNC!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c0763205?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Vikash Singh",
      role: "Digital Marketing Intern",
      testimonial: "Learned practical digital marketing skills that got me placed immediately after the internship. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sneha Gupta",
      role: "Web Development Intern",
      testimonial: "From zero coding knowledge to full-stack developer in 3 months. CodeArya's training is world-class!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Arjun Reddy",
      role: "AI/ML Engineering Intern",
      testimonial: "The machine learning projects were industry-grade. Now working as an AI engineer with 6-figure salary!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Kavya Iyer",
      role: "UI/UX Design Intern",
      testimonial: "Creative freedom + professional guidance = perfect learning environment. Got hired before internship ended!",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face"
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-card/30 overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 mb-8 sm:mb-12">
        <div className="text-center">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-3 sm:mb-4 leading-tight">
            Student <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
            Hear from our former interns who are now thriving in their tech careers
          </p>
        </div>
      </div>
      
      <div className="relative">
        {/* Fade effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        {/* Scrolling container */}
        <div className="flex animate-scroll gap-4 sm:gap-6">
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card 
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-72 sm:w-80 md:w-96 glass-effect border-white/10 hover-lift transition-all duration-700 hover:border-neon-blue/30 hover:shadow-neon-blue/20 hover:shadow-lg"
            >
              <CardContent className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-foreground/80 mb-4 sm:mb-6 italic leading-relaxed min-h-[60px] sm:min-h-[80px]">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-3 sm:mr-4 object-cover border-2 border-neon-blue/30"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-neon-blue/20 to-transparent"></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm sm:text-base font-semibold text-neon-blue truncate">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-foreground/60 truncate">{testimonial.role}</p>
                    <p className="text-xs text-neon-purple/80 truncate">CodeArya Alumni</p>
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

export default ScrollingTestimonialsSection;
