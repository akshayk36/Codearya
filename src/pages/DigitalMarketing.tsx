import { useEffect } from 'react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Link2, Megaphone, Search, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updatePageMeta, pageSEOData } from '@/utils/seo';

const DigitalMarketing = () => {
    useEffect(() => {
        const seo = pageSEOData.serviceDigitalMarketing;
        updatePageMeta(seo.title, seo.description, seo.keywords, 'https://www.codearya.com/services/digital-marketing');
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <div className="min-h-screen pt-20">
            <section className="section-padding bg-gradient-to-b from-background to-card/30">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Digital Marketing</h1>
                    <p className="text-foreground/70 text-lg">SEO, PPC, social media, and content to grow traffic, leads, and sales.</p>
          <div className="mt-8 overflow-hidden rounded-xl border border-white/10 glass-effect">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=500&fit=crop"
              alt="Digital marketing analytics"
              className="w-full h-56 md:h-72 object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
                </div>
            </section>

      <section className="section-padding">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="glass-effect border-white/10">
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-2">SEO</h3>
                            <p className="text-sm text-foreground/70">Technical, on-page, and off-page SEO with measurable outcomes.</p>
                        </CardContent>
                    </Card>
                    <Card className="glass-effect border-white/10">
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-2">PPC Ads</h3>
                            <p className="text-sm text-foreground/70">ROI-focused Google and Meta ads with conversion tracking.</p>
                        </CardContent>
                    </Card>
                    <Card className="glass-effect border-white/10">
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-2">Social & Content</h3>
                            <p className="text-sm text-foreground/70">Content strategy and social campaigns aligned to business goals.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

      <section className="section-padding bg-gradient-to-b from-card/20 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-10">What We Optimize</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Search className="h-6 w-6 text-neon-blue" />
                  <div>
                    <h3 className="font-semibold mb-1">Organic Search</h3>
                    <p className="text-sm text-foreground/70">Keyword research, technical audits, and evergreen content.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Megaphone className="h-6 w-6 text-neon-purple" />
                  <div>
                    <h3 className="font-semibold mb-1">Paid Acquisition</h3>
                    <p className="text-sm text-foreground/70">Full-funnel ad strategy, creatives, and bid optimizations.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Link2 className="h-6 w-6 text-neon-pink" />
                  <div>
                    <h3 className="font-semibold mb-1">Authority Building</h3>
                    <p className="text-sm text-foreground/70">Digital PR and quality backlinks to grow domain authority.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-neon-blue" />
                  <div>
                    <h3 className="font-semibold mb-1">Conversion Rate</h3>
                    <p className="text-sm text-foreground/70">A/B tests and UX improvements to turn clicks into customers.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <BarChart3 className="h-6 w-6 text-neon-purple" />
                  <div>
                    <h3 className="font-semibold mb-1">Analytics</h3>
                    <p className="text-sm text-foreground/70">Attribution, dashboards, and actionable KPI tracking.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect border-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-neon-pink" />
                  <div>
                    <h3 className="font-semibold mb-1">Growth Loops</h3>
                    <p className="text-sm text-foreground/70">Retention, referrals, and lifecycle campaigns that compound.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

            <section className="section-padding text-center">
                <Link to="/contact">
                    <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white">Grow with us</Button>
                </Link>
            </section>

            <Footer />
        </div>
    );
};

export default DigitalMarketing;


