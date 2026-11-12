
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewProgramModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    stipend: '',
    spots: '',
    requirements: '',
    skills: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save program (in a real app, this would save to database)
    const programs = JSON.parse(localStorage.getItem('internshipPrograms') || '[]');
    const newProgram = {
      id: Date.now(),
      ...formData,
      spots: parseInt(formData.spots),
      applicants: 0,
      status: 'active',
      createdDate: new Date().toISOString().split('T')[0]
    };
    
    programs.push(newProgram);
    localStorage.setItem('internshipPrograms', JSON.stringify(programs));
    
    toast({
      title: "Program Created",
      description: "New internship program has been added successfully.",
    });
    
    setFormData({
      title: '',
      description: '',
      duration: '',
      stipend: '',
      spots: '',
      requirements: '',
      skills: ''
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add New Program
        </Button>
      </DialogTrigger>
      <DialogContent className="glass-effect border-white/10 max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Internship Program</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Program Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="bg-background/50 border-white/20"
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="bg-background/50 border-white/20"
              rows={3}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="duration"
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                className="bg-background/50 border-white/20"
                placeholder="e.g., 3 months"
                required
              />
            </div>
            <div>
              <Label htmlFor="stipend">Stipend</Label>
              <Input
                id="stipend"
                value={formData.stipend}
                onChange={(e) => setFormData({...formData, stipend: e.target.value})}
                className="bg-background/50 border-white/20"
                placeholder="e.g., ₹15,000-25,000"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="spots">Available Spots</Label>
            <Input
              id="spots"
              type="number"
              value={formData.spots}
              onChange={(e) => setFormData({...formData, spots: e.target.value})}
              className="bg-background/50 border-white/20"
              required
            />
          </div>
          <div>
            <Label htmlFor="requirements">Requirements</Label>
            <Textarea
              id="requirements"
              value={formData.requirements}
              onChange={(e) => setFormData({...formData, requirements: e.target.value})}
              className="bg-background/50 border-white/20"
              rows={3}
              placeholder="Educational background, skills required, etc."
              required
            />
          </div>
          <div>
            <Label htmlFor="skills">Skills to Learn</Label>
            <Textarea
              id="skills"
              value={formData.skills}
              onChange={(e) => setFormData({...formData, skills: e.target.value})}
              className="bg-background/50 border-white/20"
              rows={2}
              placeholder="Technologies and skills students will learn"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-neon-blue to-neon-purple text-white">
              Create Program
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewProgramModal;
