
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, Target, Zap, Heart } from 'lucide-react';
import Footer from '@/components/Footer';
import { updatePageMeta, pageSEOData } from '@/utils/seo';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const seoData = pageSEOData.about;
    updatePageMeta(seoData.title, seoData.description, seoData.keywords);
    setIsVisible(true);
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
      icon: <Zap className="h-8 w-8" />,
      color: "from-neon-blue to-cyan-400"
    },
    {
      title: "Quality",
      description: "Excellence in every line of code, every design element, and every client interaction.",
      icon: <Target className="h-8 w-8" />,
      color: "from-neon-purple to-purple-400"
    },
    {
      title: "Client Success",
      description: "Your success is our mission. We're committed to delivering results that exceed expectations.",
      icon: <Heart className="h-8 w-8" />,
      color: "from-neon-pink to-pink-400"
    },
    {
      title: "Collaboration",
      description: "We believe in transparent communication and working together as partners.",
      icon: <Users className="h-8 w-8" />,
      color: "from-orange-400 to-yellow-400"
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      position: "CEO & Founder",
      bio: "Visionary leader with 10+ years in tech startups and digital transformation.",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face",
      expertise: ["Strategy", "Leadership", "Innovation"]
    },
    {
      name: "Sarah Chen",
      position: "CTO",
      bio: "Full-stack architect passionate about scalable solutions and emerging technologies.",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face",
      expertise: ["AI/ML", "Cloud Architecture", "DevOps"]
    },
    {
      name: "Michael Rodriguez",
      position: "Lead Designer",
      bio: "Creative director focused on user-centered design and brand storytelling.",
      avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop&crop=face",
      expertise: ["UI/UX", "Brand Design", "Prototyping"]
    },
    {
      name: "Emily Davis",
      position: "Marketing Director",
      bio: "Growth strategist with expertise in digital marketing and performance analytics.",
      avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop&crop=face",
      expertise: ["Growth Marketing", "SEO", "Analytics"]
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Founded",
      description: "CodeArya was born from a vision to democratize cutting-edge technology for businesses of all sizes."
    },
    {
      year: "2021",
      title: "First AI Project",
      description: "Delivered our first machine learning solution, helping a startup increase efficiency by 300%."
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew to 15+ specialists and launched our internship program to nurture future tech talent."
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded internationally, serving clients across 3 continents with innovative digital solutions."
    },
    {
      year: "2024",
      title: "Innovation Lab",
      description: "Launched our R&D division, focusing on emerging technologies like quantum computing and Web3."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-b from-background to-card/30 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-xl animate-float"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                About <span className="gradient-text">CodeArya</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
                We're a team of passionate innovators dedicated to transforming businesses through cutting-edge technology across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                At CodeArya, we believe technology should amplify human potential, not replace it. Our mission is to create 
                innovative digital solutions that empower businesses to thrive in an increasingly connected world.
              </p>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                We combine technical expertise with creative vision to build products that not only solve problems but 
                inspire new possibilities. Every project is an opportunity to push boundaries and create lasting impact.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Join Our Mission <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="group hover-lift glass-effect border-white/10 text-center transition-all duration-500 hover:border-neon-blue/30 hover:shadow-neon-blue/20 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-neon-blue transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              The brilliant minds behind CodeArya's innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="group hover-lift glass-effect border-white/10 overflow-hidden transition-all duration-500 hover:border-neon-blue/30 hover:shadow-neon-blue/20 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-neon-blue transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-neon-blue/80 text-sm font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 text-xs bg-neon-blue/20 text-neon-blue rounded-full hover:bg-neon-blue/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Key milestones in our evolution
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-neon-blue to-neon-purple hidden lg:block"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 w-full">
                    <Card className={`glass-effect border-white/10 hover-lift transition-all duration-500 hover:border-neon-blue/30 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}>
                      <CardContent className="p-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 hover:text-neon-blue transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-black font-bold text-lg shrink-0 relative z-10 hover:scale-110 transition-transform duration-300">
                    {item.year}
                  </div>
                  
                  <div className="flex-1 lg:block hidden"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Ready to Build Something <span className="gradient-text">Amazing</span>?
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join us in creating the future of digital innovation. Let's transform your vision into reality.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 neon-glow"
          >
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
