
import { Card } from '@/components/ui/card';

const TrustedLogosSection = () => {
  const logos = [
    { name: 'OpenAI', icon: '🤖' },
    { name: 'NVIDIA', icon: '🟢' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Netlify', icon: '🌐' },
    { name: 'Vercel', icon: '▲' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Adobe XD', icon: '🎯' },
    { name: 'Webflow', icon: '💜' },
    { name: 'Google Analytics', icon: '📊' },
    { name: 'Meta Ads', icon: '📱' },
    { name: 'HubSpot', icon: '🧡' },
    { name: 'Shopify', icon: '🛍️' },
    { name: 'Microsoft', icon: '🔷' }
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="section-padding bg-gradient-to-b from-card/10 to-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Technologies</span> We Work With
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Empowering our projects with industry-leading tools and platforms
          </p>
        </div>
        
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <Card 
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-4 glass-effect border-white/10 hover:border-neon-blue/30 transition-all duration-300 hover:scale-105"
              >
                <div className="p-6 flex items-center justify-center min-w-[120px]">
                  <div className="text-center">
                    <div className="text-2xl mb-2">{logo.icon}</div>
                    <p className="text-sm font-medium text-foreground/80">{logo.name}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-foreground/60">
            Trusted by professionals from leading companies worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedLogosSection;
