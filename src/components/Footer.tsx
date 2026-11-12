
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Projects', href: '/projects' },
      { name: 'Internships', href: '/internships' }
    ],
    services: [
      { name: 'Web Development', href: '/services#web-dev' },
      { name: 'AI/ML Solutions', href: '/services#ai-ml' },
      { name: 'Digital Marketing', href: '/services#marketing' },
      { name: 'UI/UX Design', href: '/services#design' }
    ],
    contact: [
      { name: 'hello@codearya.com', href: 'mailto:hello@codearya.com', icon: Mail },
      { name: '+91 90342 55732', href: 'tel:+919034255732', icon: Phone },
      { name: 'Jind, Haryana, India', href: '#', icon: MapPin }
    ],
    social: [
      { name: 'GitHub', href: 'https://github.com/codearya', icon: Github },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/codearya', icon: Linkedin },
      { name: 'Twitter', href: 'https://twitter.com/codearya', icon: Twitter }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-card/50 border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">C</span>
                </div>
                <h3 className="text-2xl font-display font-bold gradient-text">CodeArya</h3>
              </div>
            </Link>
            <p className="text-foreground/70 leading-relaxed">
              Innovating the digital future with cutting-edge web development, AI solutions, and digital design. Empowering the next generation of tech talent.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-neon-blue/20 hover:text-neon-blue transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-neon-blue">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-foreground/70 hover:text-neon-blue transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-neon-purple">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-foreground/70 hover:text-neon-purple transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-neon-pink">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <li key={contact.name}>
                    <a
                      href={contact.href}
                      className="flex items-center space-x-3 text-foreground/70 hover:text-neon-pink transition-colors duration-300 group"
                    >
                      <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:translate-x-1 transform transition-transform duration-300">
                        {contact.name}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground/60 text-sm">
              © CodeArya Pvt. Ltd. (India), 2025. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((legal) => (
                <a 
                  key={legal.name}
                  href={legal.href} 
                  className="text-foreground/60 hover:text-neon-blue transition-colors duration-300"
                >
                  {legal.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
