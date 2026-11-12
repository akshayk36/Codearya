
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code, Palette, BarChart, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import { updatePageMeta, pageSEOData } from '@/utils/seo';
import { setupLazyLoading, measureWebVitals } from '@/utils/performance';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const seoData = pageSEOData.services;
    updatePageMeta(seoData.title, seoData.description, seoData.keywords, 'https://www.codearya.com/services');
    setIsVisible(true);
    setupLazyLoading();
    measureWebVitals();
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Scalable, secure, and fast web applications",
      icon: <Code className="h-8 w-8" />,
      color: "from-neon-blue to-cyan-400",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      id: "web-dev",
      href: "/services/web-development"
    },
    {
      title: "AI/ML Solutions",
      description: "Smart automation and data-driven technologies",
      icon: <Bot className="h-8 w-8" />,
      color: "from-neon-purple to-purple-400",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      id: "ai-ml",
      href: "/services/ai-ml"
    },
    {
      title: "Digital Marketing",
      description: "Performance marketing for real business growth",
      icon: <BarChart className="h-8 w-8" />,
      color: "from-neon-pink to-pink-400",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      id: "marketing",
      href: "/services/digital-marketing"
    },
    {
      title: "UI/UX Design",
      description: "Human-centered, modern interfaces",
      icon: <Palette className="h-8 w-8" />,
      color: "from-orange-400 to-yellow-400",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      id: "design",
      href: "/services/ui-ux-design"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Comprehensive digital solutions that transform businesses and drive innovation in India.
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
                From cutting-edge web development to AI-powered solutions, we deliver exceptional results that propel your business forward.
                <Link to="/contact" className="text-neon-blue hover:underline ml-1">Contact us</Link> to get started or
                <Link to="/projects" className="text-neon-blue hover:underline ml-1">view our portfolio</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link to={service.href || "#"}>
                <Card
                  key={service.title}
                  id={service.id}
                  className="group hover-lift glass-effect border-white/10 overflow-hidden transition-all duration-500 hover:border-neon-blue/30 hover:shadow-neon-blue/20 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-32 overflow-hidden">
                    <OptimizedImage
                      src={service.image}
                      alt={`${service.title} - CodeArya Digital Services`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-neon-blue transition-colors duration-300">{service.title}</h3>
                    <p className="text-foreground/70 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="section-padding bg-gradient-to-b from-card/20 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Why Choose Our <span className="gradient-text">Digital Services</span>?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Expert Web Development</h3>
              <p className="text-foreground/70 mb-4">
                Our web development team creates responsive, fast-loading websites using the latest technologies.
                We specialize in React, Node.js, and modern web frameworks to deliver exceptional user experiences.
              </p>
              <p className="text-foreground/70">
                From e-commerce platforms to complex web applications, we build solutions that scale with your business.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">AI-Powered Marketing</h3>
              <p className="text-foreground/70 mb-4">
                Our digital marketing strategies combine traditional methods with AI-driven insights to maximize ROI.
                We offer SEO, PPC, social media marketing, and content strategy services.
              </p>
              <p className="text-foreground/70">
                Ready to grow your business? Check out our
                <Link to="/internships" className="text-neon-blue hover:underline ml-1">internship programs</Link>
                to see how we train the next generation of digital marketers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Ready to Transform Your <span className="gradient-text">Business</span>?
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can drive innovation and growth for your company.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 neon-glow"
            >
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
