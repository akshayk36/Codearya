
// Lazy loading utility for images
export const setupLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/hero-bg.webp',
    '/logo.webp'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Optimize images for WebP format
export const optimizeImageUrl = (url: string, width?: number, height?: number): string => {
  if (url.includes('unsplash.com')) {
    let optimizedUrl = url;
    
    // Add WebP format
    optimizedUrl += url.includes('?') ? '&' : '?';
    optimizedUrl += 'fm=webp&q=80';
    
    // Add dimensions if provided
    if (width) optimizedUrl += `&w=${width}`;
    if (height) optimizedUrl += `&h=${height}`;
    
    return optimizedUrl;
  }
  
  return url;
};

// Performance monitoring
export const measureWebVitals = () => {
  // Largest Contentful Paint
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.startTime);
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // First Input Delay
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach((entry: any) => {
      console.log('FID:', entry.processingStart - entry.startTime);
    });
  }).observe({ entryTypes: ['first-input'] });

  // Cumulative Layout Shift
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        console.log('CLS:', entry.value);
      }
    });
  }).observe({ entryTypes: ['layout-shift'] });
};
