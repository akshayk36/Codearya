
import ContactForm from '@/components/contact/ContactForm';
import ParticleBackground from '@/components/ParticleBackground';
import CurvedLightBackground from '@/components/CurvedLightBackground';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { updatePageMeta, pageSEOData } from '@/utils/seo';

const Contact = () => {
  useEffect(() => {
    const seoData = pageSEOData.contact;
    updatePageMeta(seoData.title, seoData.description, seoData.keywords);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-padding pt-32 overflow-hidden">
        <CurvedLightBackground />
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/20 to-background/40"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Ready to bring your vision to life? Tell us about your project and let's create something amazing together in India.
            </p>
            <p className="text-sm text-foreground/60 mt-4">
              📍 Located in Jind, Haryana, India | 📞 +91 90342 55732
            </p>
          </div>

          <div className="animate-fade-in">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
