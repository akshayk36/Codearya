
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import StreamSelect from '@/components/form/StreamSelect';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  mobile: z.string().min(10, 'Mobile number must be at least 10 digits'),
  internshipArea: z.string().min(1, 'Please select an internship area'),
  customArea: z.string().optional(),
  stream: z.string().min(1, 'Please select your academic stream'),
  portfolioUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  motivation: z.string().min(50, 'Please write at least 50 characters about your motivation'),
}).refine((data) => {
  if (data.internshipArea === 'Other') {
    return data.customArea && data.customArea.length >= 2;
  }
  return true;
}, {
  message: 'Please specify your preferred area when selecting "Other"',
  path: ['customArea'],
});

type FormData = z.infer<typeof formSchema>;

const EnhancedApplicationForm: React.FC = () => {
  const [showCustomArea, setShowCustomArea] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      internshipArea: '',
      customArea: '',
      stream: '',
      portfolioUrl: '',
      motivation: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Handle form submission
    alert('Application submitted successfully! We will contact you soon.');
  };

  const handleInternshipAreaChange = (value: string) => {
    form.setValue('internshipArea', value);
    setShowCustomArea(value === 'Other');
    if (value !== 'Other') {
      form.setValue('customArea', '');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass-effect border-white/10 rounded-lg p-6 sm:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 gradient-text">
            Apply for Internship
          </h3>
          <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
            Join CodeArya's comprehensive internship program and launch your tech career
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormItem className="animate-fade-in">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your first name"
                    {...form.register('firstName')}
                    className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300 hover:border-neon-blue/50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem className="animate-fade-in animation-delay-300">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your last name"
                    {...form.register('lastName')}
                    className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300 hover:border-neon-blue/50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormItem className="animate-fade-in animation-delay-500">
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    {...form.register('email')}
                    className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300 hover:border-neon-blue/50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem className="animate-fade-in animation-delay-600">
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+91 9876543210"
                    {...form.register('mobile')}
                    className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300 hover:border-neon-blue/50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>

            {/* Internship Area */}
            <FormItem className="animate-fade-in animation-delay-900">
              <FormLabel>Preferred Internship Area</FormLabel>
              <Select onValueChange={handleInternshipAreaChange}>
                <FormControl>
                  <SelectTrigger className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300 hover:border-neon-blue/50">
                    <SelectValue placeholder="Select your preferred internship area" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-background/95 backdrop-blur-xl border-white/20">
                  <SelectItem value="Web Development" className="hover:bg-neon-blue/20">Web Development</SelectItem>
                  <SelectItem value="AI/ML Engineering" className="hover:bg-neon-blue/20">AI/ML Engineering</SelectItem>
                  <SelectItem value="UI/UX Design" className="hover:bg-neon-blue/20">UI/UX Design</SelectItem>
                  <SelectItem value="Digital Marketing" className="hover:bg-neon-blue/20">Digital Marketing</SelectItem>
                  <SelectItem value="Other" className="hover:bg-neon-blue/20">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>

            {/* Custom Area Field (conditional) */}
            {showCustomArea && (
              <FormItem className="animate-fade-in">
                <FormLabel>Please specify your preferred area</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your preferred internship area"
                    {...form.register('customArea')}
                    className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300 hover:border-neon-blue/50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}

            {/* Stream Field */}
            <StreamSelect
              value={form.watch('stream')}
              onValueChange={(value) => form.setValue('stream', value)}
            />

            {/* Portfolio URL */}
            <FormItem className="animate-fade-in animation-delay-1000">
              <FormLabel>Portfolio/Resume URL (Optional)</FormLabel>
              <FormControl>
                <Input
                  type="url"
                  placeholder="https://your-portfolio.com or drive.google.com/resume"
                  {...form.register('portfolioUrl')}
                  className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300 hover:border-neon-blue/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            {/* Motivation */}
            <FormItem className="animate-fade-in animation-delay-2000">
              <FormLabel>Why do you want to join CodeArya?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your motivation, career goals, and what you hope to achieve through this internship..."
                  className="min-h-[120px] bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300 hover:border-neon-blue/50"
                  {...form.register('motivation')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white font-semibold py-3 transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-3000"
            >
              Submit Application
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EnhancedApplicationForm;
