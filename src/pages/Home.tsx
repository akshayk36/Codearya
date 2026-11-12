
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code, Lightbulb, Target, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import TrustedLogosSection from '@/components/home/TrustedLogosSection';
import { updatePageMeta, pageSEOData } from '@/utils/seo';

const Home = () => {
  useEffect(() => {
    const seoData = pageSEOData.home;
    updatePageMeta(seoData.title, seoData.description, seoData.keywords);
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      description: "Next-generation shopping experience with ML recommendations",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      tech: ["React", "Python", "TensorFlow"]
    },
    {
      title: "Smart City Dashboard",
      description: "Real-time urban analytics and monitoring system",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      tech: ["Vue.js", "Node.js", "IoT"]
    },
    {
      title: "Virtual Reality Training App",
      description: "Immersive corporate training solutions",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      tech: ["Unity", "WebXR", "C#"]
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
    { name: "Python", icon: "🐍", color: "from-yellow-400 to-yellow-600" },
    { name: "TensorFlow", icon: "🧠", color: "from-orange-400 to-orange-600" },
    { name: "React Native", icon: "📱", color: "from-purple-400 to-purple-600" },
    { name: "AWS", icon: "☁️", color: "from-gray-400 to-gray-600" }
  ];

  const whyChooseUs = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Cutting-Edge Technology",
      description: "We use the latest technologies and frameworks to build future-proof solutions"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation First",
      description: "Our team constantly explores new possibilities to deliver unique solutions"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results Driven",
      description: "We focus on measurable outcomes that drive real business growth"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Agile development process ensures quick turnaround without compromising quality"
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TrustedLogosSection />

      {/* Technologies Section */}
      <section className="section-padding bg-gradient-to-b from-card/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="gradient-text">Technologies</span> We Master
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Building with the most advanced and reliable tech stack
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <Card 
                key={tech.name}
                className="group glass-effect border-white/10 hover-lift text-center transition-all duration-500 hover:border-neon-blue/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-sm font-semibold group-hover:text-neon-blue transition-colors duration-300">{tech.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Why Choose <span className="gradient-text">CodeArya</span>?
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              We deliver exceptional results through innovation and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card 
                key={item.title}
                className="group glass-effect border-white/10 hover-lift text-center transition-all duration-500 hover:border-neon-blue/30 hover:shadow-neon-blue/20 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-neon-blue transition-colors duration-300">{item.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-gradient-to-b from-card/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Discover our latest innovations and success stories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover-lift glass-effect border-white/10 overflow-hidden transition-all duration-500 hover:border-neon-blue/30 hover:shadow-neon-blue/20 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-neon-blue transition-colors duration-300">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs bg-neon-blue/20 text-neon-blue rounded-full hover:bg-neon-blue/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button 
                variant="outline"
                size="lg" 
                className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Ready to Build the <span className="gradient-text">Future</span>?
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let's transform your vision into cutting-edge digital reality
          </p>
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 neon-glow"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
