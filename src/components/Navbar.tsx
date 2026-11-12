
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Internships', path: '/internships' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "glass-effect py-2" : "py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            <img 
              src="/lovable-uploads/df44415a-14f6-4b3c-8836-53818fb3b35f.png" 
              alt="CodeArya Logo" 
              className="w-10 h-10 object-contain"
            />
          </div>
          <span className="text-xl font-display font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            CodeArya
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="bg-black/30 backdrop-blur-xl rounded-full border border-white/20 px-2 py-2 flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "relative px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                  location.pathname === item.path 
                    ? "bg-white/10 text-white backdrop-blur-sm" 
                    : "text-foreground/80 hover:text-white hover:bg-white/5"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/contact">
            <Button 
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={cn(
              "w-4 h-0.5 bg-current transition-all duration-300",
              isMobileMenuOpen ? "rotate-45 translate-y-0.5" : ""
            )}></span>
            <span className={cn(
              "w-4 h-0.5 bg-current transition-all duration-300 mt-1",
              isMobileMenuOpen ? "opacity-0" : ""
            )}></span>
            <span className={cn(
              "w-4 h-0.5 bg-current transition-all duration-300 mt-1",
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            )}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-white/10 mt-2">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "block text-sm font-medium transition-colors",
                  location.pathname === item.path 
                    ? "text-neon-blue" 
                    : "text-foreground/80"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button 
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold mt-4"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
