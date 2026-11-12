
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import { updatePageMeta, pageSEOData } from '@/utils/seo';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const seoData = pageSEOData.projects;
    updatePageMeta(seoData.title, seoData.description, seoData.keywords);
    setIsVisible(true);
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      description: "Revolutionary shopping experience with machine learning recommendations, real-time inventory management, and personalized user journeys.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      category: "AI/ML",
      technologies: ["React", "Python", "TensorFlow", "AWS"],
      client: "TechMart Inc.",
      year: "2024"
    },
    {
      title: "Smart City Dashboard",
      description: "Comprehensive urban analytics platform providing real-time insights into traffic, energy consumption, and environmental data.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      category: "Web Development",
      technologies: ["Vue.js", "Node.js", "MongoDB", "IoT"],
      client: "Metro City Council",
      year: "2024"
    },
    {
      title: "Virtual Reality Training Suite",
      description: "Immersive corporate training solutions for high-risk industries, reducing training costs while improving safety outcomes.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      category: "VR/AR",
      technologies: ["Unity", "WebXR", "C#", "Blender"],
      client: "SafeTech Industries",
      year: "2023"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive patient management platform with AI-driven diagnostics support and telemedicine capabilities.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      category: "Healthcare",
      technologies: ["React", "Django", "PostgreSQL", "Docker"],
      client: "MedCare Solutions",
      year: "2023"
    },
    {
      title: "Cryptocurrency Trading Bot",
      description: "Advanced algorithmic trading system with machine learning predictions and risk management protocols.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      category: "FinTech",
      technologies: ["Python", "FastAPI", "Redis", "Machine Learning"],
      client: "CryptoTrade Pro",
      year: "2023"
    },
    {
      title: "Social Impact Mobile App",
      description: "Community-driven platform connecting volunteers with local organizations to maximize social impact.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      category: "Mobile",
      technologies: ["React Native", "Firebase", "GraphQL", "TypeScript"],
      client: "Community Connect",
      year: "2024"
    }
  ];

  const testimonials = [
    {
      quote: "CodeArya transformed our business with their AI solutions. The ROI was evident within the first quarter.",
      author: "Sarah Johnson",
      position: "CTO, TechMart Inc.",
      avatar: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Their smart city dashboard revolutionized how we manage urban resources. Exceptional technical expertise.",
      author: "Michael Chen",
      position: "Director, Metro City Council",
      avatar: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The VR training suite reduced our training costs by 60% while improving safety scores significantly.",
      author: "David Rodriguez",
      position: "Head of Training, SafeTech Industries",
      avatar: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const categories = ['All', 'AI/ML', 'Web Development', 'Mobile', 'VR/AR', 'FinTech', 'Healthcare'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Our <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Explore our portfolio of innovative solutions that have transformed businesses across India and created lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`rounded-full transition-all duration-300 hover:scale-105 ${
                  filter === category 
                    ? "bg-gradient-to-r from-neon-blue to-neon-purple text-black" 
                    : "border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover-lift glass-effect border-white/10 overflow-hidden transition-all duration-500 hover:border-neon-blue/30 hover:shadow-neon-blue/20 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-neon-blue text-black hover:bg-neon-blue/80 transition-colors duration-300">{project.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white/80 text-sm">{project.client} • {project.year}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-neon-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="text-xs border-neon-blue/30 text-neon-blue/80 hover:border-neon-blue hover:text-neon-blue transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-neon-blue hover:bg-neon-blue/10 group/btn transition-all duration-300"
                  >
                    View Case Study 
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Scroll Animation */}
      <section className="section-padding bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              What our clients say about working with CodeArya
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.author}
                className="group glass-effect border-white/10 hover-lift transition-all duration-500 hover:border-neon-blue/30 hover:shadow-neon-blue/20 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <p className="text-foreground/80 mb-6 italic leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="relative">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-neon-blue/30 group-hover:border-neon-blue transition-all duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-neon-blue/20 to-transparent"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-neon-blue transition-colors duration-300">{testimonial.author}</h4>
                      <p className="text-sm text-foreground/60">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Ready to Start Your <span className="gradient-text">Project</span>?
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with cutting-edge technology.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 neon-glow"
          >
            Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
