
import { useEffect, useState } from 'react';
import { Code, Palette, Brain, TrendingUp } from 'lucide-react';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import InternshipHero from '@/components/internships/InternshipHero';
import InternshipIntro from '@/components/internships/InternshipIntro';
import StatisticsSection from '@/components/internships/StatisticsSection';
import ProgramsSection from '@/components/internships/ProgramsSection';
import ApplicationProcess from '@/components/internships/ApplicationProcess';
import ScrollingTestimonialsSection from '@/components/internships/ScrollingTestimonialsSection';
import EnhancedApplicationForm from '@/components/internships/EnhancedApplicationForm';
import InternshipDetailModal from '@/components/internships/InternshipDetailModal';
import { updatePageMeta, pageSEOData } from '@/utils/seo';

const Internships = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const seoData = pageSEOData.internships;
    updatePageMeta(seoData.title, seoData.description, seoData.keywords);
    setIsVisible(true);
  }, []);

  const internshipPrograms = [
    {
      id: 1,
      title: "Web Development",
      description: "Master full-stack development with React, Node.js, and modern frameworks. Build real-world applications and learn industry best practices.",
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      duration: "3 months",
      stipend: "₹15,000-25,000",
      skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "TypeScript"],
      spots: "20 positions",
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      detailedDescription: "Comprehensive web development program covering front-end and back-end technologies. You'll work on real client projects and build a professional portfolio.",
      curriculum: [
        "HTML5, CSS3, and Modern JavaScript",
        "React.js and Component Architecture",
        "Node.js and Express.js Backend Development",
        "Database Design with MongoDB",
        "API Development and Integration",
        "Deployment and DevOps Basics"
      ]
    },
    {
      id: 2,
      title: "AI/ML Engineering",
      description: "Build intelligent systems using Python, TensorFlow, and machine learning algorithms. Work on cutting-edge AI projects.",
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      duration: "4 months",
      stipend: "₹20,000-30,000",
      skills: ["Python", "TensorFlow", "Data Science", "NLP", "Computer Vision", "Deep Learning"],
      spots: "15 positions",
      level: "Intermediate to Advanced",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      detailedDescription: "Advanced AI/ML program focusing on practical applications in business. Learn to build and deploy machine learning models at scale.",
      curriculum: [
        "Python Programming and Data Structures",
        "Machine Learning Fundamentals",
        "Deep Learning with TensorFlow/PyTorch",
        "Natural Language Processing",
        "Computer Vision Applications",
        "MLOps and Model Deployment"
      ]
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Create stunning user experiences with Figma, Adobe XD, and design thinking methodologies. Master the art of user-centered design.",
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
      duration: "3 months",
      stipend: "₹12,000-20,000",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing", "Design Systems"],
      spots: "12 positions",
      level: "Beginner to Intermediate",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      detailedDescription: "Comprehensive UI/UX design program covering design thinking, user research, and modern design tools. Build a portfolio that stands out.",
      curriculum: [
        "Design Fundamentals and Principles",
        "User Research and Personas",
        "Wireframing and Prototyping",
        "UI Design with Figma/Adobe XD",
        "Design Systems and Components",
        "Usability Testing and Iteration"
      ]
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Learn SEO, PPC, social media marketing, and content strategy. Master data-driven marketing techniques for the digital age.",
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      duration: "2 months",
      stipend: "₹10,000-18,000",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content Marketing", "Email Marketing"],
      spots: "25 positions",
      level: "Beginner to Intermediate",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      detailedDescription: "Complete digital marketing program covering all major channels and analytics. Learn to create and optimize campaigns that drive real results.",
      curriculum: [
        "Digital Marketing Fundamentals",
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click Advertising (PPC)",
        "Social Media Marketing Strategy",
        "Content Marketing and Creation",
        "Analytics and Performance Tracking"
      ]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Submit Application",
      description: "Fill out our comprehensive application form with your details, preferred internship area, and motivation."
    },
    {
      step: "2",
      title: "Technical Assessment",
      description: "Complete a skills assessment based on your chosen track to evaluate your current knowledge level."
    },
    {
      step: "3",
      title: "Interview Round",
      description: "Participate in a virtual interview with our technical team and mentors to discuss your goals."
    },
    {
      step: "4",
      title: "Welcome & Onboarding",
      description: "Join our team and begin your learning journey with comprehensive onboarding and mentor assignment."
    }
  ];

  const openInternshipDetails = (internship: any) => {
    setSelectedInternship(internship);
    setIsModalOpen(true);
  };

  const scrollToApplication = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      const form = document.getElementById('enhanced-application-form');
      if (form) form.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const handleApplyNow = () => {
    const form = document.getElementById('enhanced-application-form');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />

      {/* Hero Section */}
      <InternshipHero isVisible={isVisible} />

      {/* Intro Section */}
      <InternshipIntro />

      {/* Stats Section */}
      <StatisticsSection />

      {/* Programs Section */}
      <ProgramsSection 
        programs={internshipPrograms}
        onLearnMore={openInternshipDetails}
        onApplyNow={handleApplyNow}
      />

      {/* Application Process */}
      <ApplicationProcess processSteps={processSteps} />

      {/* Scrolling Testimonials Section */}
      <ScrollingTestimonialsSection />

      {/* Enhanced Application Form Section */}
      <section className="section-padding bg-gradient-to-b from-card/30 to-background" id="enhanced-application-form">
        <div className="container mx-auto px-2 sm:px-4">
          <EnhancedApplicationForm />
        </div>
      </section>

      {/* Internship Details Modal */}
      <InternshipDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        internship={selectedInternship}
        onApplyNow={scrollToApplication}
      />

      <Footer />
    </div>
  );
};

export default Internships;
