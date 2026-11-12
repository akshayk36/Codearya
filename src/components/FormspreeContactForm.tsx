
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Send } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { formSchema, FormData } from './form/formSchema';
import SuccessMessage from './form/SuccessMessage';
import StreamSelect from './form/StreamSelect';
import GenderRadioGroup from './form/GenderRadioGroup';

const FormspreeContactForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      stream: '',
      gender: undefined,
      internshipArea: '',
      portfolio: '',
      message: '',
    },
  });

  const playSuccessSound = () => {
    // Create success sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
    oscillator.frequency.setValueAtTime(1200, audioContext.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mvgrprow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        playSuccessSound();
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return <SuccessMessage />;
  }

  return (
    <Card className="glass-effect border-white/10 hover:border-neon-blue/30 transition-all duration-500 max-w-2xl mx-auto animate-fade-in hover:shadow-2xl hover:shadow-neon-blue/20">
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="animate-slide-in-left">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300 focus:shadow-lg focus:shadow-neon-blue/20 hover:border-neon-blue/50"
                        placeholder="Your first name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="animate-slide-in-right">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300 focus:shadow-lg focus:shadow-neon-blue/20 hover:border-neon-blue/50"
                        placeholder="Your last name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="animate-fade-in">
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      type="email"
                      className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300 focus:shadow-lg focus:shadow-neon-blue/20 hover:border-neon-blue/50"
                      placeholder="your.email@example.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem className="animate-fade-in">
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      type="tel"
                      className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300 focus:shadow-lg focus:shadow-neon-blue/20 hover:border-neon-blue/50"
                      placeholder="+91 98765 43210"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stream"
              render={({ field }) => (
                <StreamSelect value={field.value} onValueChange={field.onChange} />
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <GenderRadioGroup value={field.value} onValueChange={field.onChange} />
              )}
            />

            <FormField
              control={form.control}
              name="internshipArea"
              render={({ field }) => (
                <FormItem className="animate-fade-in">
                  <FormLabel>Preferred Internship Area</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300 hover:border-neon-blue/50">
                        <SelectValue placeholder="Select an area" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background/95 backdrop-blur-xl border-white/20 z-50">
                      <SelectItem value="web-development" className="hover:bg-neon-blue/20">Web Development</SelectItem>
                      <SelectItem value="ai-ml-engineering" className="hover:bg-neon-blue/20">AI/ML Engineering</SelectItem>
                      <SelectItem value="ui-ux-design" className="hover:bg-neon-blue/20">UI/UX Design</SelectItem>
                      <SelectItem value="digital-marketing" className="hover:bg-neon-blue/20">Digital Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="portfolio"
              render={({ field }) => (
                <FormItem className="animate-fade-in">
                  <FormLabel>Portfolio/Resume URL (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300 focus:shadow-lg focus:shadow-neon-blue/20 hover:border-neon-blue/50"
                      placeholder="https://your-portfolio.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="animate-fade-in">
                  <FormLabel>Why do you want to join CodeArya?</FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field}
                      className="bg-background/50 border-white/20 focus:border-neon-blue min-h-[120px] transition-all duration-300 focus:shadow-lg focus:shadow-neon-blue/20 hover:border-neon-blue/50"
                      placeholder="Tell us about your motivation and goals..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-4">
              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white font-semibold py-4 rounded-full transition-all duration-300 hover:scale-[1.02] neon-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group flex items-center justify-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FormspreeContactForm;
