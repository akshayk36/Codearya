import { useEffect } from 'react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accessibility, Brush, Layout, NotebookPen, PanelTop, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updatePageMeta, pageSEOData } from '@/utils/seo';

const UIUXDesign = () => {
    useEffect(() => {
        const seo = pageSEOData.serviceUIUX;
        updatePageMeta(seo.title, seo.description, seo.keywords, 'https://www.codearya.com/services/ui-ux-design');
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <div className="min-h-screen pt-20">
            <section className="section-padding bg-gradient-to-b from-background to-card/30">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">UI/UX Design</h1>
                    <p className="text-foreground/70 text-lg">Human-centered design: research, wireframes, prototypes, and design systems.</p>
          <div className="mt-8 overflow-hidden rounded-xl border border-white/10 glass-effect">
            <img
              src="https://images.unsplash.com/photo-1587613991304-d4cf19b1f1cd?w=1200&h=500&fit=crop"
              alt="UI UX design desk"
              className="w-full h-56 md:h-72 object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
                </div>
            </section>

      <section className="section-padding">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="glass-effect border-white/10">
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-2">UX Research</h3>
                            <p className="text-sm text-foreground/70">User interviews, journey mapping, and usability testing to inform design.</p>
                        </CardContent>
                    </Card>
                    <Card className="glass-effect border-white/10">
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-2">Wireframes & Prototypes</h3>
                            <p className="text-sm text-foreground/70">Rapid iterations to validate flows before development starts.</p>
                        </CardContent>
                    </Card>
                    <Card className="glass-effect border-white/10">
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-2">Design Systems</h3>
                            <p className="text-sm text-foreground/70">Consistent, scalable UI kits aligned with brand and accessibility.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

      <section className="section-padding bg-gradient-to-b from-card/20 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-10">Design Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Brush className="h-6 w-6 text-neon-blue" />
                  <div>
                    <h3 className="font-semibold mb-1">Visual Craft</h3>
                    <p className="text-sm text-foreground/70">Brand-aligned visuals, motion, and micro-interactions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Layout className="h-6 w-6 text-neon-purple" />
                  <div>
                    <h3 className="font-semibold mb-1">Information Architecture</h3>
                    <p className="text-sm text-foreground/70">Clear navigation and content structure for easy discovery.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Accessibility className="h-6 w-6 text-neon-pink" />
                  <div>
                    <h3 className="font-semibold mb-1">Accessibility</h3>
                    <p className="text-sm text-foreground/70">WCAG-aligned color, contrast, and keyboard navigation.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <NotebookPen className="h-6 w-6 text-neon-blue" />
                  <div>
                    <h3 className="font-semibold mb-1">Copy & UX Writing</h3>
                    <p className="text-sm text-foreground/70">Clear, helpful microcopy to guide user decisions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <PanelTop className="h-6 w-6 text-neon-purple" />
                  <div>
                    <h3 className="font-semibold mb-1">Design Systems</h3>
                    <p className="text-sm text-foreground/70">Reusable components for consistency and speed.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-6 w-6 text-neon-pink" />
                  <div>
                    <h3 className="font-semibold mb-1">Delightful Details</h3>
                    <p className="text-sm text-foreground/70">Animations and feedback that make the experience memorable.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

            <section className="section-padding text-center">
                <Link to="/contact">
                    <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white">Discuss your product</Button>
                </Link>
            </section>

            <Footer />
        </div>
    );
};

export default UIUXDesign;


