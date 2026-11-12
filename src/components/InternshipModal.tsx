import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Wrench, Award, X } from 'lucide-react';

interface InternshipArea {
  id: string;
  title: string;
  description: string;
  duration: string;
  color: string;
  image: string;
  learningPrompt: string;
  tools: string[];
  outcomes: string[];
  skills: string[];
}

interface InternshipModalProps {
  internship: InternshipArea | null;
  isOpen: boolean;
  onClose: () => void;
}

const InternshipModal: React.FC<InternshipModalProps> = ({ internship, isOpen, onClose }) => {
  if (!internship) return null;

  const scrollToApplication = () => {
    onClose();
    setTimeout(() => {
      const applicationSection = document.getElementById('application-form');
      if (applicationSection) {
        applicationSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-effect border-white/10">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl md:text-3xl font-display gradient-text">
              {internship.title} Internship
            </DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Hero Image */}
          <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
            <img 
              src={internship.image} 
              alt={internship.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <div className={`inline-flex items-center px-3 py-2 rounded-full bg-gradient-to-r ${internship.color} text-black font-semibold`}>
                <Clock className="h-4 w-4 mr-2" />
                {internship.duration}
              </div>
            </div>
          </div>

          {/* Learning Description */}
          <div className="bg-card/50 p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold mb-3 text-neon-blue">What You'll Learn</h3>
            <p className="text-foreground/80 leading-relaxed">
              {internship.learningPrompt}
            </p>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Wrench className="h-5 w-5 mr-2 text-neon-purple" />
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {internship.tools.map((tool) => (
                <Badge 
                  key={tool} 
                  variant="secondary" 
                  className="bg-neon-purple/20 text-neon-purple border-neon-purple/30 hover:bg-neon-purple/30 transition-colors duration-300 justify-center py-2"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Learning Outcomes */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-neon-pink" />
              Learning Outcomes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {internship.outcomes.map((outcome, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-card/30 rounded-lg border border-white/5 hover:border-neon-pink/30 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-neon-pink rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground/80">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 p-6 rounded-lg border border-neon-blue/20">
            <h3 className="text-xl font-semibold mb-3 gradient-text">Ready to Start Your Journey?</h3>
            <p className="text-foreground/70 mb-4">
              Join thousands of students who have transformed their careers through our comprehensive internship program.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={scrollToApplication}
                className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-black font-semibold py-3 transition-all duration-300 hover:scale-105"
              >
                Apply Now
              </Button>
              <Button 
                variant="outline" 
                onClick={onClose}
                className="flex-1 border-white/20 hover:bg-white/10 transition-colors duration-300"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InternshipModal;
