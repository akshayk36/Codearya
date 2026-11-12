
import { useState, useRef, useEffect } from 'react';
import { optimizeImageUrl } from '@/utils/performance';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  lazy?: boolean;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  lazy = true 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy]);

  const optimizedSrc = optimizeImageUrl(src, width, height);

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"
          style={{ width, height }}
        />
      )}
      <img
        ref={imgRef}
        src={isInView ? optimizedSrc : undefined}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
      />
    </div>
  );
};

export default OptimizedImage;
