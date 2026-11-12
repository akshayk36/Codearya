import { useEffect } from 'react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Database, Rocket, Shield, Smartphone, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updatePageMeta, pageSEOData } from '@/utils/seo';

const WebDevelopment = () => {
    useEffect(() => {
        const seo = pageSEOData.serviceWebDev;
        updatePageMeta(seo.title, seo.description, seo.keywords, 'https://www.codearya.com/services/web-development');
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <div className="min-h-screen pt-20">
            <section className="section-padding bg-gradient-to-b from-background to-card/30">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Web Development</h1>
                    <p className="text-foreground/70 text-lg">Custom websites, web apps, and e-commerce built for speed, security, and SEO.</p>
                    <div className="mt-8 overflow-hidden rounded-xl border border-white/10 glass-effect">
                        <img
                            src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=1200&h=500&fit=crop"
                            alt="Web development hero"
                            className="w-full h-56 md:h-72 object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="glass-effect border-white/10">
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-2">Corporate Websites</h3>
                            <p className="text-sm text-foreground/70">Responsive, SEO-friendly company sites that convert visitors into leads.</p>
                        </CardContent>
                    </Card>
                    <Card className="glass-effect border-white/10">
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-2">Web Applications</h3>
                            <p className="text-sm text-foreground/70">Scalable SPAs and dashboards using modern stacks and best practices.</p>
                        </CardContent>
                    </Card>
                    <Card className="glass-effect border-white/10">
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-2">E-commerce</h3>
                            <p className="text-sm text-foreground/70">High-performance storefronts with secure payments and analytics.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-b from-card/20 to-transparent">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-10">Why Choose Our Web Development</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="hover-lift glass-effect border-white/10 transition-all">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <Smartphone className="h-6 w-6 text-neon-blue" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Responsive by Default</h3>
                                        <p className="text-sm text-foreground/70">Mobile-first layouts that adapt to all screen sizes and devices.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="hover-lift glass-effect border-white/10 transition-all">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <Timer className="h-6 w-6 text-neon-purple" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Blazing Performance</h3>
                                        <p className="text-sm text-foreground/70">Optimized assets, code-splitting, and caching for fast loads.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="hover-lift glass-effect border-white/10 transition-all">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <Shield className="h-6 w-6 text-neon-pink" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Secure Architecture</h3>
                                        <p className="text-sm text-foreground/70">Best practices for auth, input validation, and hardened deployments.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="hover-lift glass-effect border-white/10 transition-all">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <Database className="h-6 w-6 text-neon-blue" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Scalable Backends</h3>
                                        <p className="text-sm text-foreground/70">APIs and databases designed to scale with your traffic growth.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="hover-lift glass-effect border-white/10 transition-all">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <Rocket className="h-6 w-6 text-neon-purple" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Rapid Delivery</h3>
                                        <p className="text-sm text-foreground/70">Agile sprints and CI/CD to ship features quickly and safely.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="hover-lift glass-effect border-white/10 transition-all">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-neon-pink" />
                                    <div>
                                        <h3 className="font-semibold mb-1">SEO & Accessibility</h3>
                                        <p className="text-sm text-foreground/70">Semantic HTML and metadata to rank higher and reach everyone.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="section-padding text-center">
                <Link to="/contact">
                    <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white">Get a quote</Button>
                </Link>
            </section>

            <Footer />
        </div>
    );
};

export default WebDevelopment;


