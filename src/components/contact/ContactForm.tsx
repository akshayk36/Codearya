
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { User, Building2, Mail, Phone, Code, DollarSign, FileText, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    currency: 'INR',
    budget: '',
    description: '',
    contactMethod: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const budgetRecommendations = {
    'web-development': {
      INR: '₹50,000 – ₹3,00,000',
      USD: '$600 – $4,000'
    },
    'ai-ml': {
      INR: '₹1,00,000 – ₹5,00,000+',
      USD: '$1,200 – $6,000+'
    },
    'ui-ux': {
      INR: '₹30,000 – ₹1,50,000',
      USD: '$400 – $2,000'
    },
    'digital-marketing': {
      INR: '₹25,000/month – ₹2,00,000+',
      USD: '$300/month – $2,500+'
    },
    'other': {
      INR: 'Custom Budget',
      USD: 'Custom Budget'
    }
  };

  const getBudgetOptions = () => {
    const currency = formData.currency;
    const symbol = currency === 'INR' ? '₹' : '$';
    
    if (formData.projectType === 'web-development') {
      return currency === 'INR' 
        ? ['₹25,000 – ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000 – ₹3,00,000', '₹3,00,000+']
        : ['$300 – $600', '$600 – $1,200', '$1,200 – $4,000', '$4,000+'];
    } else if (formData.projectType === 'ai-ml') {
      return currency === 'INR'
        ? ['₹50,000 – ₹1,00,000', '₹1,00,000 – ₹3,00,000', '₹3,00,000 – ₹5,00,000', '₹5,00,000+']
        : ['$600 – $1,200', '$1,200 – $4,000', '$4,000 – $6,000', '$6,000+'];
    } else if (formData.projectType === 'ui-ux') {
      return currency === 'INR'
        ? ['₹15,000 – ₹30,000', '₹30,000 – ₹75,000', '₹75,000 – ₹1,50,000', '₹1,50,000+']
        : ['$200 – $400', '$400 – $1,000', '$1,000 – $2,000', '$2,000+'];
    } else if (formData.projectType === 'digital-marketing') {
      return currency === 'INR'
        ? ['₹15,000/month', '₹25,000 – ₹50,000/month', '₹50,000 – ₹2,00,000+', 'Custom Package']
        : ['$200/month', '$300 – $600/month', '$600 – $2,500+', 'Custom Package'];
    }
    return ['Let\'s Discuss', 'Custom Budget'];
  };

  const getRecommendedBudget = () => {
    if (!formData.projectType) return null;
    return budgetRecommendations[formData.projectType as keyof typeof budgetRecommendations]?.[formData.currency as 'INR' | 'USD'];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append('access_key', '9514fe65-3a10-451b-89cc-ab063b476309');
      
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          formDataObj.append(key, value.join(', '));
        } else {
          formDataObj.append(key, value);
        }
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent Successfully! 🎉",
          description: "We'll get back to you within 24-48 hours.",
        });
        
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvWAcBSuQ0PLceDwOHHfE7+SSUR8OGGy8597DlUcOJH3K7+SAQwkcWKrj8blaMws1i9ju0IGqag8UWqfi866DXzMSLYbN8OCDSQcVZ7zn45pNDgxQp+Lwtn0gBTiS1vLKdSEELYPO8diJOQcZZ7zn4ppNDgxRpuPwtmMeAjeS1vLNeSMGLYLN8tiIOQcZZ7zn45pODwxRpuPwtn0gBTiT1vLKdSEELYPO8tiIOQcZZ7zn45pODwxRpuPwtmMeAjiS1vLNeSMGLYLN8tiIOQcZZ7zn45pODwxRpuPwtn0gBTiT1vLNeSMGLYLN8tiIOQcZZ7zn45pODwxRpuPwtmMeAjiS1vLNeSMGLYLN8tiIOQcZZ7zn45pODwxRpuPwtn0gBTiT1vLKdSEELYPO8tiIOQcZZ7zn45pODwxRpuPwtmMeAjiS1vLNeSMGLYLN8tiIOQcZZ7zn45pODwxRpuPwtn0gBTiT1vLKdSEELYPO8tiIOQcZZ7zn45pODwxRpuPwtmMeAjiS1vLNeSMGLYLN8tiIOQc=');
        audio.play().catch(() => {});
        
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          projectType: '',
          currency: 'INR',
          budget: '',
          description: '',
          contactMethod: []
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactMethodChange = (method: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      contactMethod: checked 
        ? [...prev.contactMethod, method]
        : prev.contactMethod.filter(m => m !== method)
    }));
  };

  return (
    <TooltipProvider>
      <Card className="glass-effect border-white/10 p-8 max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                <User className="h-4 w-4" />
                Full Name *
              </label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Company/Organization
              </label>
              <Input
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300"
                placeholder="Your company name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address *
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone Number
              </label>
              <Input
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300"
                placeholder="+91 90342 55732"
              />
            </div>

            {/* Project Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                <Code className="h-4 w-4" />
                Project Type *
              </label>
              <Select 
                required 
                onValueChange={(value) => {
                  setFormData(prev => ({ ...prev, projectType: value, budget: '' }));
                }}
              >
                <SelectTrigger className="bg-background/50 border-white/20 focus:border-neon-blue">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent className="bg-background border-white/20">
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="ai-ml">AI/ML Solutions</SelectItem>
                  <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                  <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Currency Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Currency
              </label>
              <Select 
                value={formData.currency} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, currency: value, budget: '' }))}
              >
                <SelectTrigger className="bg-background/50 border-white/20 focus:border-neon-blue">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background border-white/20">
                  <SelectItem value="INR">🇮🇳 INR (Indian Rupee)</SelectItem>
                  <SelectItem value="USD">🇺🇸 USD (US Dollar)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Budget with Recommendations */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Estimated Budget
              {getRecommendedBudget() && (
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-neon-blue" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Recommended: {getRecommendedBudget()}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </label>
            {getRecommendedBudget() && (
              <p className="text-xs text-neon-blue/80 mb-2">
                💡 Suggested based on selected service: {getRecommendedBudget()}
              </p>
            )}
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
              <SelectTrigger className="bg-background/50 border-white/20 focus:border-neon-blue">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent className="bg-background border-white/20">
                {getBudgetOptions().map((option) => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Project Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Project Description *
            </label>
            <Textarea
              required
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300 min-h-[120px]"
              placeholder="Tell us about your project, goals, and requirements..."
            />
          </div>

          {/* Preferred Contact Method */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground/80">
              Preferred Contact Method
            </label>
            <div className="flex flex-wrap gap-4">
              {['Email', 'Phone', 'WhatsApp'].map((method) => (
                <div key={method} className="flex items-center space-x-2">
                  <Checkbox
                    id={method}
                    onCheckedChange={(checked) => handleContactMethodChange(method, checked as boolean)}
                  />
                  <label htmlFor={method} className="text-sm text-foreground/80">
                    {method}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white font-semibold py-4 rounded-full transition-all duration-300 hover:scale-105 neon-glow text-lg"
            >
              {isSubmitting ? 'Sending...' : "Let's Build Together 🚀"}
            </Button>
          </div>

          {/* Privacy Note */}
          <div className="text-center text-sm text-foreground/60 pt-4">
            <p>We'll get back to you within 24–48 hours. Your information is safe with us.</p>
            <p className="mt-2">© CodeArya Pvt. Ltd. (India), 2025. Located in Jind, Haryana. Call: +91 90342 55732</p>
          </div>
        </form>
      </Card>
    </TooltipProvider>
  );
};

export default ContactForm;
