
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const SuccessMessage: React.FC = () => {
  return (
    <Card className="glass-effect border-white/10 max-w-md mx-auto animate-fade-in">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center animate-scale-in">
          <CheckCircle className="h-8 w-8 text-white animate-pulse" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-green-400">Thank you!</h3>
        <p className="text-foreground/70">We've received your application and will get back to you soon.</p>
      </CardContent>
    </Card>
  );
};

export default SuccessMessage;
