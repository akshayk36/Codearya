
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Code, Brain, Palette, TrendingUp } from 'lucide-react';

interface InternshipProgram {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  duration: string;
  stipend: string;
  skills: string[];
  spots: string;
  level: string;
  image: string;
  detailedDescription: string;
  curriculum: string[];
}

interface ProgramsSectionProps {
  programs: InternshipProgram[];
  onLearnMore: (program: InternshipProgram) => void;
  onApplyNow: () => void;
}

const ProgramsSection: React.FC<ProgramsSectionProps> = ({ programs, onLearnMore, onApplyNow }) => {
  return (
    <section className="section-padding" id="internship-areas">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-3 sm:mb-4 leading-tight">
            Choose Your <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
            Four specialized tracks designed to give you industry-ready skills and real-world experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {programs.map((program, index) => (
            <Card 
              key={program.id}
              className="group hover-lift glass-effect border-white/10 overflow-hidden transition-all duration-700 hover:border-neon-blue/30 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                <img 
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110">
                  {program.icon}
                </div>
              </div>
              
              <CardHeader className="pb-2 sm:pb-4 p-3 sm:p-6">
                <CardTitle className="text-base sm:text-lg md:text-xl group-hover:text-neon-blue transition-colors duration-500 leading-tight">
                  {program.title}
                </CardTitle>
                <p className="text-foreground/70 text-xs sm:text-sm md:text-base leading-relaxed">{program.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-3 sm:space-y-4 p-3 sm:p-6 pt-0">
                <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-neon-blue" />
                    <span className="truncate">{program.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-neon-purple" />
                    <span className="truncate">{program.spots}</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Stipend: {program.stipend}</p>
                  <p className="text-xs sm:text-sm text-foreground/70 mb-2 sm:mb-3">Level: {program.level}</p>
                </div>
                
                <div>
                  <p className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Skills you'll learn:</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {program.skills.slice(0, 4).map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30 text-xs px-1.5 py-0.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    onClick={() => onLearnMore(program)}
                    variant="outline"
                    className="flex-1 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 text-xs sm:text-sm py-2"
                  >
                    Learn More
                  </Button>
                  <Button 
                    onClick={onApplyNow}
                    className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white font-semibold transition-all duration-500 hover:scale-105 text-xs sm:text-sm py-2"
                  >
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
