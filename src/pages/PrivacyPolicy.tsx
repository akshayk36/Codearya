import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';
import { Shield, Eye, Database, Lock, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - CodeArya";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 backdrop-blur-3xl"></div>
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-foreground/60">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-neon-blue">
                  <Eye className="h-6 w-6 mr-3" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Personal Information</h4>
                  <p className="text-foreground/70">
                    When you apply for our internship program, we collect personal information including but not limited to:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-foreground/70 space-y-1">
                    <li>Full name and contact information</li>
                    <li>Email address and mobile number</li>
                    <li>Academic stream and educational background</li>
                    <li>Gender (optional)</li>
                    <li>Portfolio/resume information</li>
                    <li>Application essays and motivation statements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technical Information</h4>
                  <p className="text-foreground/70">
                    We automatically collect certain technical information when you visit our website, including IP address, browser type, device information, and usage analytics.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-neon-purple">
                  <Database className="h-6 w-6 mr-3" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  <li>Processing and evaluating internship applications</li>
                  <li>Communicating with applicants about their application status</li>
                  <li>Providing personalized learning experiences during the internship</li>
                  <li>Improving our programs and services</li>
                  <li>Sending relevant updates about our programs (with your consent)</li>
                  <li>Compliance with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-neon-pink">
                  <Lock className="h-6 w-6 mr-3" />
                  Data Protection & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Security Measures</h4>
                  <ul className="list-disc list-inside text-foreground/70 space-y-1">
                    <li>Encrypted data transmission (SSL/TLS)</li>
                    <li>Secure data storage with access controls</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access on a need-to-know basis</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-neon-blue">Data Sharing & Third Parties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>In case of business merger or acquisition (with prior notification)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-neon-purple">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another organization</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-neon-pink">Cookies & Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website usage. You can control cookie settings through your browser preferences.
                </p>
                <p className="text-foreground/70">
                  For detailed information about our cookie usage, please refer to our Cookie Policy.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-neon-blue">
                  <Mail className="h-6 w-6 mr-3" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="space-y-2 text-foreground/70">
                  <p><strong>Email:</strong> privacy@codearya.com</p>
                  <p><strong>Phone:</strong> +91 90342 55732</p>
                  <p><strong>Address:</strong> CodeArya Pvt. Ltd., Jind, Haryana, India</p>
                </div>
                <p className="text-sm text-foreground/60 mt-4">
                  We will respond to your inquiry within 30 days of receipt.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
