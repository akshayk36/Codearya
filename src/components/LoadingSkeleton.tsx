
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface LoadingSkeletonProps {
  variant?: 'form' | 'card' | 'text' | 'hero';
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ variant = 'card', className = '' }) => {
  switch (variant) {
    case 'form':
      return (
        <div className={`space-y-6 ${className}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-20 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20" />
              <Skeleton className="h-10 w-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 animate-pulse" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-20 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20" />
              <Skeleton className="h-10 w-full bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 animate-pulse" />
            </div>
          </div>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-24 bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20" />
              <Skeleton className="h-10 w-full bg-gradient-to-r from-neon-blue/10 to-neon-cyan/10 animate-pulse" />
            </div>
          ))}
          <Skeleton className="h-12 w-full bg-gradient-to-r from-neon-blue to-neon-purple animate-pulse rounded-full" />
        </div>
      );

    case 'card':
      return (
        <div className={`space-y-4 p-6 ${className}`}>
          <Skeleton className="h-8 w-3/4 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20" />
          <Skeleton className="h-4 w-full bg-gradient-to-r from-neon-purple/10 to-neon-pink/10" />
          <Skeleton className="h-4 w-5/6 bg-gradient-to-r from-neon-pink/10 to-neon-cyan/10" />
          <Skeleton className="h-10 w-32 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
        </div>
      );

    case 'hero':
      return (
        <div className={`space-y-8 text-center ${className}`}>
          <Skeleton className="h-16 w-3/4 mx-auto bg-gradient-to-r from-neon-blue/20 to-neon-purple/20" />
          <Skeleton className="h-6 w-2/3 mx-auto bg-gradient-to-r from-neon-purple/10 to-neon-pink/10" />
          <Skeleton className="h-6 w-1/2 mx-auto bg-gradient-to-r from-neon-pink/10 to-neon-cyan/10" />
          <div className="flex justify-center gap-4">
            <Skeleton className="h-12 w-32 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
            <Skeleton className="h-12 w-32 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full" />
          </div>
        </div>
      );

    case 'text':
    default:
      return (
        <div className={`space-y-2 ${className}`}>
          <Skeleton className="h-4 w-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/10" />
          <Skeleton className="h-4 w-5/6 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10" />
          <Skeleton className="h-4 w-4/5 bg-gradient-to-r from-neon-pink/10 to-neon-cyan/10" />
        </div>
      );
  }
};

export default LoadingSkeleton;
