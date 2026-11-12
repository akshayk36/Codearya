
import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Edit3, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EditableContentProps {
  content: string;
  onSave: (newContent: string) => void;
  className?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children?: React.ReactNode;
}

const EditableContent: React.FC<EditableContentProps> = ({
  content,
  onSave,
  className = '',
  element = 'div',
  children
}) => {
  const { isAdmin, isEditMode } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const [showEditIcon, setShowEditIcon] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setEditContent(content);
  }, [content]);

  const handleSave = () => {
    onSave(editContent);
    setIsEditing(false);
    // Save to localStorage for demo purposes
    const savedContent = JSON.parse(localStorage.getItem('editedContent') || '{}');
    savedContent[content] = editContent;
    localStorage.setItem('editedContent', JSON.stringify(savedContent));
  };

  const handleCancel = () => {
    setEditContent(content);
    setIsEditing(false);
  };

  const Element = element as keyof JSX.IntrinsicElements;

  if (!isAdmin || !isEditMode) {
    return children || <Element className={className}>{content}</Element>;
  }

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setShowEditIcon(true)}
      onMouseLeave={() => setShowEditIcon(false)}
    >
      {isEditing ? (
        <div className="space-y-2">
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full p-2 border border-neon-blue/50 rounded bg-background text-foreground resize-vertical min-h-[100px]"
            autoFocus
          />
          <div className="flex gap-2">
            <Button onClick={handleSave} size="sm" className="bg-neon-blue text-black">
              <Save className="w-4 h-4 mr-1" />
              Save
            </Button>
            <Button onClick={handleCancel} variant="outline" size="sm">
              <X className="w-4 h-4 mr-1" />
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <>
          {children || <Element className={className}>{editContent}</Element>}
          {showEditIcon && (
            <Button
              onClick={() => setIsEditing(true)}
              size="sm"
              variant="outline"
              className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity bg-neon-blue/20 border-neon-blue/50"
            >
              <Edit3 className="w-4 h-4" />
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default EditableContent;
