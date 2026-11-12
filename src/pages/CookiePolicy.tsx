import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';
import { Cookie, Settings, BarChart3, Shield, Info } from 'lucide-react';

const CookiePolicy = () => {
  useEffect(() => {
    document.title = "Cookie Policy - CodeArya";
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
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                <Cookie className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Cookie <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Learn about how we use cookies and similar technologies to improve your experience on our website.
            </p>
            <p className="text-sm text-foreground/60">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-neon-blue">
                  <Info className="h-6 w-6 mr-3" />
                  What Are Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and analyzing how you use our site.
                </p>
                <p className="text-foreground/70">
                  Similar technologies include web beacons, pixels, and local storage, which serve similar purposes to cookies.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-neon-purple">
                  <BarChart3 className="h-6 w-6 mr-3" />
                  Types of Cookies We Use
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-neon-blue">Essential Cookies</h4>
                  <p className="text-foreground/70 mb-2">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                  <ul className="list-disc list-inside text-foreground/70 space-y-1">
                    <li>Session management and security</li>
                    <li>Form submission and validation</li>
                    <li>Load balancing and performance optimization</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-neon-purple">Functional Cookies</h4>
                  <p className="text-foreground/70 mb-2">
                    These cookies enhance your experience by remembering your preferences.
                  </p>
                  <ul className="list-disc list-inside text-foreground/70 space-y-1">
                    <li>Language and region preferences</li>
                    <li>Theme and display settings</li>
                    <li>Previously entered form data</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-neon-pink">Analytics Cookies</h4>
                  <p className="text-foreground/70 mb-2">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <ul className="list-disc list-inside text-foreground/70 space-y-1">
                    <li>Google Analytics for usage statistics</li>
                    <li>Page views and navigation patterns</li>
                    <li>Performance monitoring and optimization</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-orange-400">Marketing Cookies</h4>
                  <p className="text-foreground/70 mb-2">
                    These cookies help us deliver relevant content and track marketing effectiveness.
                  </p>
                  <ul className="list-disc list-inside text-foreground/70 space-y-1">
                    <li>Social media integration</li>
                    <li>Advertising campaign tracking</li>
                    <li>Personalized content delivery</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-neon-blue">Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">
                  Some cookies on our website are set by third-party services that appear on our pages:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Google Analytics</h4>
                    <p className="text-foreground/70">
                      We use Google Analytics to analyze website traffic and user behavior. Google may use this data in accordance with their privacy policy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Social Media Platforms</h4>
                    <p className="text-foreground/70">
                      Our website includes social media sharing buttons and embedded content that may set cookies from platforms like LinkedIn, Twitter, and GitHub.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Formspree</h4>
                    <p className="text-foreground/70">
                      Our contact forms are powered by Formspree, which may set cookies to prevent spam and ensure form functionality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-neon-purple">
                  <Settings className="h-6 w-6 mr-3" />
                  Managing Your Cookie Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Browser Settings</h4>
                  <p className="text-foreground/70 mb-2">
                    You can control and manage cookies through your browser settings:
                  </p>
                  <ul className="list-disc list-inside text-foreground/70 space-y-1">
                    <li><strong>Chrome:</strong> Settings {`>`} Privacy and security {`>`} Cookies and other site data</li>
                    <li><strong>Firefox:</strong> Settings {`>`} Privacy & Security {`>`} Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences {`>`} Privacy {`>`} Manage Website Data</li>
                    <li><strong>Edge:</strong> Settings {`>`} Cookies and site permissions {`>`} Cookies and site data</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Opt-Out Options</h4>
                  <p className="text-foreground/70">
                    For analytics cookies, you can opt out directly:
                  </p>
                  <ul className="list-disc list-inside text-foreground/70 space-y-1">
                    <li>Google Analytics: Use the Google Analytics Opt-out Browser Add-on</li>
                    <li>Do Not Track: Enable the "Do Not Track" setting in your browser</li>
                  </ul>
                </div>
                
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                  <p className="text-amber-200 text-sm">
                    <strong>Note:</strong> Disabling certain cookies may affect website functionality and your user experience.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-neon-pink">
                  <Shield className="h-6 w-6 mr-3" />
                  Cookie Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">
                  We implement appropriate security measures for our cookies:
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  <li>Secure transmission over HTTPS connections</li>
                  <li>HttpOnly flags to prevent client-side script access</li>
                  <li>SameSite attributes to prevent cross-site request forgery</li>
                  <li>Regular expiration dates to limit data retention</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-neon-blue">Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>
                <p className="text-foreground/70">
                  We encourage you to review this policy periodically to stay informed about our use of cookies.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-neon-purple">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="space-y-2 text-foreground/70">
                  <p><strong>Email:</strong> privacy@codearya.com</p>
                  <p><strong>Phone:</strong> +91 90342 55732</p>
                  <p><strong>Subject:</strong> Cookie Policy Inquiry</p>
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

export default CookiePolicy;
