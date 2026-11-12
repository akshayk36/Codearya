import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';
import { FileText, Users, AlertTriangle, Scale, Gavel } from 'lucide-react';

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service - CodeArya";
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
              <div className="w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Please read these terms carefully before using our services and applying for our internship programs.
            </p>
            <p className="text-sm text-foreground/60">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-neon-blue">
                  <Scale className="h-6 w-6 mr-3" />
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">
                  By accessing our website, applying for our internship programs, or using our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
                </p>
                <p className="text-foreground/70">
                  These terms constitute a legal agreement between you and CodeArya Pvt. Ltd. ("CodeArya", "we", "us", or "our").
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-neon-purple">
                  <Users className="h-6 w-6 mr-3" />
                  Internship Program Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Application Process</h4>
                  <ul className="list-disc list-inside text-foreground/70 space-y-2">
                    <li>All information provided in your application must be accurate and truthful</li>
                    <li>Submission of false information may result in immediate disqualification</li>
                    <li>We reserve the right to verify any information provided</li>
                    <li>Application decisions are final and not subject to appeal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Internship Obligations</h4>
                  <ul className="list-disc list-inside text-foreground/70 space-y-2">
                    <li>Interns must maintain professional conduct at all times</li>
                    <li>Regular attendance and participation in assigned activities</li>
                    <li>Completion of all assigned projects and tasks</li>
                    <li>Adherence to company policies and guidelines</li>
                    <li>Respect for intellectual property and confidentiality agreements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-neon-pink">
                  <Gavel className="h-6 w-6 mr-3" />
                  Intellectual Property
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Company Property</h4>
                  <p className="text-foreground/70">
                    All content, materials, tools, and resources provided during the internship remain the intellectual property of CodeArya. This includes but is not limited to:
                  </p>
                  <ul className="list-disc list-inside text-foreground/70 space-y-1 mt-2">
                    <li>Training materials and documentation</li>
                    <li>Software tools and platforms</li>
                    <li>Project specifications and requirements</li>
                    <li>Company methodologies and processes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Intern Work Product</h4>
                  <p className="text-foreground/70">
                    Work created during the internship program may be used by CodeArya for business purposes, portfolio showcases, and marketing materials. Interns retain the right to showcase their work for personal portfolio purposes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-neon-blue">Confidentiality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">
                  Interns may have access to confidential information during their program. By participating, you agree to:
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  <li>Maintain strict confidentiality of all proprietary information</li>
                  <li>Not disclose any confidential information to third parties</li>
                  <li>Return all company materials upon completion of the internship</li>
                  <li>Continue to maintain confidentiality after the internship ends</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-neon-purple">Code of Conduct</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">All participants must adhere to our code of conduct:</p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  <li>Treat all team members, mentors, and colleagues with respect</li>
                  <li>Maintain a harassment-free environment</li>
                  <li>Avoid any form of discrimination or inappropriate behavior</li>
                  <li>Follow all applicable laws and regulations</li>
                  <li>Report any violations to the program coordinators</li>
                </ul>
                <p className="text-foreground/70 mt-4">
                  Violation of the code of conduct may result in immediate termination from the program.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-neon-pink">
                  <AlertTriangle className="h-6 w-6 mr-3" />
                  Disclaimers & Limitations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">No Guarantee of Employment</h4>
                  <p className="text-foreground/70">
                    Completion of the internship program does not guarantee future employment with CodeArya or any partner organizations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Limitation of Liability</h4>
                  <p className="text-foreground/70">
                    CodeArya shall not be liable for any indirect, incidental, special, or consequential damages arising from participation in the internship program.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Program Changes</h4>
                  <p className="text-foreground/70">
                    We reserve the right to modify, suspend, or discontinue the internship program at any time with reasonable notice.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-neon-blue">Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">
                  Either party may terminate the internship arrangement with appropriate notice. Grounds for immediate termination include:
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  <li>Violation of these terms or company policies</li>
                  <li>Breach of confidentiality agreements</li>
                  <li>Inappropriate conduct or behavior</li>
                  <li>Failure to meet program requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-neon-purple">Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">
                  These Terms of Service are governed by the laws of India. Any disputes arising from these terms or the internship program shall be resolved through the courts of Jind, Haryana, India.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-neon-pink">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-foreground/70">
                  <p><strong>Email:</strong> legal@codearya.com</p>
                  <p><strong>Phone:</strong> +91 90342 55732</p>
                  <p><strong>Address:</strong> CodeArya Pvt. Ltd., Jind, Haryana, India</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
