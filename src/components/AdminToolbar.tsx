
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Edit, Eye, LogOut, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const AdminToolbar: React.FC = () => {
  const { isAdmin, logout, isEditMode, toggleEditMode, login } = useAuth();
  const [loginPassword, setLoginPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    if (login(loginPassword)) {
      setShowLogin(false);
      setLoginPassword('');
    } else {
      alert('Invalid password');
    }
  };

  if (!isAdmin) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <Dialog open={showLogin} onOpenChange={setShowLogin}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
              <Settings className="w-4 h-4 mr-2" />
              Admin
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Admin Login</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                type="password"
                placeholder="Enter admin password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
              <Button onClick={handleLogin} className="w-full">
                Login
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <Button
        onClick={toggleEditMode}
        variant={isEditMode ? "default" : "outline"}
        size="sm"
        className="bg-background/80 backdrop-blur-sm"
      >
        {isEditMode ? <Eye className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
        {isEditMode ? 'Preview' : 'Edit Mode'}
      </Button>
      <Button
        onClick={logout}
        variant="outline"
        size="sm"
        className="bg-background/80 backdrop-blur-sm"
      >
        <LogOut className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default AdminToolbar;
