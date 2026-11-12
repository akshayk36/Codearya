
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Footer from '@/components/Footer';
import { updatePageMeta } from '@/utils/seo';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    updatePageMeta(
      "Tech Blog - Web Development, AI/ML, Digital Marketing Insights | CodeArya India",
      "Stay updated with latest tech trends, web development tutorials, AI/ML insights, and digital marketing strategies. Expert blogs from CodeArya's team of developers and marketers in India.",
      [
        "tech blog India",
        "web development blog India",
        "AI ML blog India",
        "digital marketing blog India",
        "programming tutorials India",
        "technology insights India",
        "software development blog India",
        "IT industry news India",
        "coding tips India",
        "tech trends India"
      ]
    );
    setIsVisible(true);
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const blogPosts = [
    {
      title: "The Future of Web Development in India 2025",
      excerpt: "Explore the latest trends and technologies shaping web development in India, from AI integration to Progressive Web Apps.",
      author: "CodeArya Team",
      date: "2024-12-15",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      title: "AI/ML Career Opportunities for Indian Students",
      excerpt: "Discover the growing AI/ML job market in India and how to prepare for lucrative career opportunities in artificial intelligence.",
      author: "Sarah Chen",
      date: "2024-12-10",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      readTime: "7 min read"
    },
    {
      title: "Digital Marketing Strategies for Indian Startups",
      excerpt: "Learn proven digital marketing tactics that help Indian startups grow their online presence and customer base effectively.",
      author: "Emily Davis",
      date: "2024-12-05",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      readTime: "6 min read"
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
                Tech <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Stay updated with the latest insights, tutorials, and trends in technology, web development, and digital marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.title}
                className="group hover-lift glass-effect border-white/10 overflow-hidden transition-all duration-500 hover:border-neon-blue/30 hover:shadow-neon-blue/20 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-neon-blue text-black hover:bg-neon-blue/80">{post.category}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-neon-blue transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-foreground/60 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neon-blue">{post.readTime}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-neon-blue hover:bg-neon-blue/10 group/btn transition-all duration-300"
                    >
                      Read More 
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
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
            Ready to Start Your <span className="gradient-text">Tech Journey</span>?
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join our internship programs and learn from industry experts while working on real projects.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 neon-glow"
          >
            Apply for Internship <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
