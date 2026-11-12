import { useEffect } from 'react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Eye, MessageSquare, Bot, Server, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updatePageMeta, pageSEOData } from '@/utils/seo';

const AIML = () => {
  useEffect(() => {
    const seo = pageSEOData.serviceAIML;
    updatePageMeta(seo.title, seo.description, seo.keywords, 'https://www.codearya.com/services/ai-ml');
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">AI / ML Solutions</h1>
          <p className="text-foreground/70 text-lg">Automation, analytics, and intelligent assistants tailored to your data.</p>
          <div className="mt-8 overflow-hidden rounded-xl border border-white/10 glass-effect">
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&h=500&fit=crop"
              alt="AI and machine learning"
              className="w-full h-56 md:h-72 object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-effect border-white/10">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-sm text-foreground/70">Forecast demand, churn, and risk using statistical learning.</p>
            </CardContent>
          </Card>
          <Card className="glass-effect border-white/10">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Computer Vision</h3>
              <p className="text-sm text-foreground/70">Detection, OCR, and quality checks powered by modern CV models.</p>
            </CardContent>
          </Card>
          <Card className="glass-effect border-white/10">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">NLP & Chatbots</h3>
              <p className="text-sm text-foreground/70">Assistants and automations using LLMs and domain-specific NLP.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-card/20 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-10">AI Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Brain className="h-6 w-6 text-neon-blue" />
                  <div>
                    <h3 className="font-semibold mb-1">Recommendation Engines</h3>
                    <p className="text-sm text-foreground/70">Personalized products, content, and offers to boost revenue.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Eye className="h-6 w-6 text-neon-purple" />
                  <div>
                    <h3 className="font-semibold mb-1">Quality Inspection</h3>
                    <p className="text-sm text-foreground/70">Vision models for defect detection and process automation.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-6 w-6 text-neon-pink" />
                  <div>
                    <h3 className="font-semibold mb-1">Customer Support</h3>
                    <p className="text-sm text-foreground/70">AI agents and chat workflows integrated with your CRM.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Server className="h-6 w-6 text-neon-blue" />
                  <div>
                    <h3 className="font-semibold mb-1">MLOps & Serving</h3>
                    <p className="text-sm text-foreground/70">Pipelines, monitoring, and scalable inference infrastructure.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Bot className="h-6 w-6 text-neon-purple" />
                  <div>
                    <h3 className="font-semibold mb-1">Process Automation</h3>
                    <p className="text-sm text-foreground/70">RPA and AI workflows to reduce cost and manual effort.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Wand2 className="h-6 w-6 text-neon-pink" />
                  <div>
                    <h3 className="font-semibold mb-1">Custom Models</h3>
                    <p className="text-sm text-foreground/70">Fine-tuned models tailored to your domain and objectives.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <Link to="/contact">
          <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white">Start an AI project</Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default AIML;


