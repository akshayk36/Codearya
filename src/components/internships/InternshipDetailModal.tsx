
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Clock, Award } from 'lucide-react';

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

interface InternshipDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  internship: InternshipProgram | null;
  onApplyNow: () => void;
}

const InternshipDetailModal: React.FC<InternshipDetailModalProps> = ({
  isOpen,
  onClose,
  internship,
  onApplyNow
}) => {
  if (!internship) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-effect border-white/10">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-display gradient-text">
            {internship.title} Internship
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 sm:space-y-6">
          <div className="relative h-32 sm:h-48 md:h-64 rounded-lg overflow-hidden">
            <img 
              src={internship.image} 
              alt={internship.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
              <div className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold text-xs sm:text-sm">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                {internship.duration}
              </div>
            </div>
          </div>

          <div className="bg-card/50 p-3 sm:p-4 md:p-6 rounded-lg border border-white/10">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 text-neon-blue">Program Overview</h3>
            <p className="text-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base">
              {internship.detailedDescription}
            </p>
          </div>

          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4 flex items-center">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-neon-purple" />
              Curriculum
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
              {internship.curriculum.map((item: string, index: number) => (
                <div 
                  key={index}
                  className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-card/30 rounded-lg border border-white/5 hover:border-neon-purple/30 transition-colors duration-300"
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neon-purple rounded-full mt-1 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-foreground/80 text-xs sm:text-sm md:text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 p-3 sm:p-4 md:p-6 rounded-lg border border-neon-blue/20">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 gradient-text">Ready to Start Your Journey?</h3>
            <p className="text-foreground/70 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
              Join thousands of students who have transformed their careers through our comprehensive internship program.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button 
                onClick={onApplyNow}
                className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white font-semibold py-2 sm:py-3 transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
              >
                Apply Now
              </Button>
              <Button 
                variant="outline" 
                onClick={onClose}
                className="flex-1 border-white/20 hover:bg-white/10 transition-colors duration-300 text-xs sm:text-sm py-2 sm:py-3"
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

export default InternshipDetailModal;
