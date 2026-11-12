
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Users, FileText, Settings, TrendingUp, Edit, Download, Plus, Save, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import NewBlogPostModal from '@/components/admin/NewBlogPostModal';
import NewProgramModal from '@/components/admin/NewProgramModal';
import { exportToCSV, exportToPDF, exportToWord, exportToExcel } from '@/utils/exportUtils';

const Admin = () => {
  const [applications, setApplications] = useState<any[]>([]);
  const [programs, setPrograms] = useState<any[]>([]);
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [isContentModalOpen, setIsContentModalOpen] = useState(false);
  const [contentData, setContentData] = useState({
    heroTitle: "Launch Your Tech Career in 2025",
    heroSubtitle: "Join our comprehensive internship program and gain hands-on experience building the future of technology with industry experts.",
    aboutTitle: "Transform Your Skills with Real-World Experience",
    aboutDescription: "Our internship program offers hands-on learning experiences across four cutting-edge technology domains."
  });
  const { toast } = useToast();

  useEffect(() => {
    // Load data from localStorage
    const savedApplications = JSON.parse(localStorage.getItem('applications') || '[]');
    const savedPrograms = JSON.parse(localStorage.getItem('internshipPrograms') || '[]');
    const savedBlogPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    const savedContent = JSON.parse(localStorage.getItem('siteContent') || 'null');
    
    setApplications(savedApplications);
    setPrograms(savedPrograms);
    setBlogPosts(savedBlogPosts);
    
    if (savedContent) {
      setContentData(savedContent);
    }
  }, []);

  const handleContentSave = () => {
    localStorage.setItem('siteContent', JSON.stringify(contentData));
    toast({
      title: "Content Updated",
      description: "Website content has been updated successfully.",
    });
    setIsContentModalOpen(false);
    
    // Trigger a storage event to update other components
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'siteContent',
      newValue: JSON.stringify(contentData)
    }));
  };

  const handleExport = (format: string) => {
    const filename = `applications_${new Date().toISOString().split('T')[0]}`;
    
    switch (format) {
      case 'csv':
        exportToCSV(applications, filename);
        break;
      case 'pdf':
        exportToPDF(applications, filename);
        break;
      case 'word':
        exportToWord(applications, filename);
        break;
      case 'excel':
        exportToExcel(applications, filename);
        break;
    }
    
    toast({
      title: "Export Successful",
      description: `Applications exported as ${format.toUpperCase()} file.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/20 to-background p-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">Admin Dashboard</h1>
          <p className="text-foreground/70">Manage your internship programs and applications</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 glass-effect">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-effect border-white/10">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                  <Users className="h-4 w-4 text-neon-blue" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-neon-blue">{applications.length}</div>
                  <p className="text-xs text-foreground/70">Active applications</p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Programs</CardTitle>
                  <FileText className="h-4 w-4 text-neon-purple" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-neon-purple">{programs.length}</div>
                  <p className="text-xs text-foreground/70">Running programs</p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
                  <TrendingUp className="h-4 w-4 text-neon-pink" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-neon-pink">{blogPosts.length}</div>
                  <p className="text-xs text-foreground/70">Published posts</p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                  <TrendingUp className="h-4 w-4 text-neon-cyan" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-neon-cyan">85%</div>
                  <p className="text-xs text-foreground/70">Application to enrollment</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="programs" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Internship Programs</h2>
              <NewProgramModal />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <Card key={program.id} className="glass-effect border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{program.title}</span>
                      <Badge variant="secondary">{program.status}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-foreground/70">{program.description}</p>
                    <div className="flex justify-between text-sm">
                      <span>Duration: {program.duration}</span>
                      <span>Spots: {program.spots}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Applications</h2>
              <div className="flex gap-2">
                <Button onClick={() => handleExport('csv')} variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  CSV
                </Button>
                <Button onClick={() => handleExport('pdf')} variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  PDF
                </Button>
                <Button onClick={() => handleExport('word')} variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Word
                </Button>
                <Button onClick={() => handleExport('excel')} variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Excel
                </Button>
              </div>
            </div>
            
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.length === 0 ? (
                    <p className="text-center text-foreground/70 py-8">No applications yet</p>
                  ) : (
                    applications.slice(0, 10).map((app, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-card/30 rounded-lg border border-white/10">
                        <div className="flex-1">
                          <h4 className="font-semibold">{app.firstName} {app.lastName}</h4>
                          <p className="text-sm text-foreground/70">{app.email}</p>
                          <p className="text-sm text-foreground/70">{app.internshipArea}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary">{app.academicStream}</Badge>
                          <p className="text-xs text-foreground/70 mt-1">{app.submittedAt}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Content Management</h2>
              <Dialog open={isContentModalOpen} onOpenChange={setIsContentModalOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Content
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-effect border-white/10 max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Edit Website Content</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="heroTitle">Hero Title</Label>
                      <Input
                        id="heroTitle"
                        value={contentData.heroTitle}
                        onChange={(e) => setContentData({...contentData, heroTitle: e.target.value})}
                        className="bg-background/50 border-white/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                      <Textarea
                        id="heroSubtitle"
                        value={contentData.heroSubtitle}
                        onChange={(e) => setContentData({...contentData, heroSubtitle: e.target.value})}
                        className="bg-background/50 border-white/20"
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label htmlFor="aboutTitle">About Section Title</Label>
                      <Input
                        id="aboutTitle"
                        value={contentData.aboutTitle}
                        onChange={(e) => setContentData({...contentData, aboutTitle: e.target.value})}
                        className="bg-background/50 border-white/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="aboutDescription">About Description</Label>
                      <Textarea
                        id="aboutDescription"
                        value={contentData.aboutDescription}
                        onChange={(e) => setContentData({...contentData, aboutDescription: e.target.value})}
                        className="bg-background/50 border-white/20"
                        rows={3}
                      />
                    </div>
                    <Button onClick={handleContentSave} className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle>Hero Section</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <label className="text-sm font-medium">Title:</label>
                      <p className="text-sm text-foreground/70">{contentData.heroTitle}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Subtitle:</label>
                      <p className="text-sm text-foreground/70">{contentData.heroSubtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle>About Section</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <label className="text-sm font-medium">Title:</label>
                      <p className="text-sm text-foreground/70">{contentData.aboutTitle}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Description:</label>
                      <p className="text-sm text-foreground/70">{contentData.aboutDescription}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="blog" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Blog Management</h2>
              <NewBlogPostModal />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="glass-effect border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-foreground/70">{post.excerpt}</p>
                    <div className="flex justify-between text-sm">
                      <span>Author: {post.author}</span>
                      <span>{post.publishedDate}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {blogPosts.length === 0 && (
                <Card className="glass-effect border-white/10 col-span-full">
                  <CardContent className="text-center py-12">
                    <p className="text-foreground/70">No blog posts yet. Create your first post!</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold">Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="siteName">Site Name</Label>
                    <Input
                      id="siteName"
                      defaultValue="CodeArya Digital Visions Pvt. Ltd."
                      className="bg-background/50 border-white/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="siteDescription">Site Description</Label>
                    <Textarea
                      id="siteDescription"
                      defaultValue="Leading digital agency specializing in web development, AI/ML, and digital marketing."
                      className="bg-background/50 border-white/20"
                      rows={3}
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white">
                    Save General Settings
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle>Email Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input
                      id="contactEmail"
                      defaultValue="contact@codearya.com"
                      className="bg-background/50 border-white/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="adminEmail">Admin Email</Label>
                    <Input
                      id="adminEmail"
                      defaultValue="admin@codearya.com"
                      className="bg-background/50 border-white/20"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white">
                    Save Email Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
