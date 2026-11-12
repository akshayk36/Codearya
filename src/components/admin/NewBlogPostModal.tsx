
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewBlogPostModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    tags: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save blog post (in a real app, this would save to database)
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    const newPost = {
      id: Date.now(),
      ...formData,
      publishedDate: new Date().toISOString().split('T')[0],
      status: 'published'
    };
    
    blogPosts.push(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    
    toast({
      title: "Blog Post Created",
      description: "Your new blog post has been published successfully.",
    });
    
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      category: '',
      tags: ''
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white">
          <Plus className="h-4 w-4 mr-2" />
          New Blog Post
        </Button>
      </DialogTrigger>
      <DialogContent className="glass-effect border-white/10 max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Blog Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="bg-background/50 border-white/20"
              required
            />
          </div>
          <div>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
              className="bg-background/50 border-white/20"
              rows={2}
              required
            />
          </div>
          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              className="bg-background/50 border-white/20"
              rows={8}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                value={formData.author}
                onChange={(e) => setFormData({...formData, author: e.target.value})}
                className="bg-background/50 border-white/20"
                required
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="bg-background/50 border-white/20"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input
              id="tags"
              value={formData.tags}
              onChange={(e) => setFormData({...formData, tags: e.target.value})}
              className="bg-background/50 border-white/20"
              placeholder="web development, digital marketing, tech"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-neon-blue to-neon-purple text-white">
              Publish Post
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewBlogPostModal;
