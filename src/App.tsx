
import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Internships from "./pages/Internships";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import WebDevelopment from "./pages/WebDevelopment";
import UIUXDesign from "./pages/UIUXDesign";
import DigitalMarketing from "./pages/DigitalMarketing";
import AIML from "./pages/AIML";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import { preloadCriticalResources } from "@/utils/performance";
import BackgroundImage from "@/components/BackgroundImage";
import ParticleBackground from "@/components/ParticleBackground";
import CursorBlob from "@/components/CursorBlob";

const queryClient = new QueryClient();

const AppContent = () => {
  useEffect(() => {
    // Initialize performance optimizations
    preloadCriticalResources();
  }, []);

  return (
    <div className="min-h-screen text-foreground relative overflow-x-hidden">
      <BackgroundImage />
      <ParticleBackground />
      <CursorBlob />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/ai-ml" element={<AIML />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
