import React, { useRef, useEffect } from 'react';

interface ThreeDObject {
  x: number;
  y: number;
  z: number;
  rotationX: number;
  rotationY: number;
  type: 'moon' | 'sun' | 'star';
  size?: number;
}

const Enhanced3DScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const objectsRef = useRef<ThreeDObject[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initializeObjects = () => {
      // Create floating stars
      const stars: ThreeDObject[] = [];
      for (let i = 0; i < 60; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: 0,
          rotationX: 0,
          rotationY: 0,
          type: 'star',
          size: Math.random() * 3 + 1
        });
      }

      objectsRef.current = [
        ...stars,
        {
          x: canvas.width * 0.15,
          y: canvas.height * 0.25,
          z: 0,
          rotationX: 0,
          rotationY: 0,
          type: 'moon'
        },
        {
          x: canvas.width * 0.85,
          y: canvas.height * 0.75,
          z: 0,
          rotationX: 0,
          rotationY: 0,
          type: 'sun'
        }
      ];
    };

    const drawGradientBackground = () => {
      // Create animated gradient background similar to reference image
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.0005;
      
      gradient.addColorStop(0, `hsl(${240 + Math.sin(time) * 10}, 80%, ${8 + Math.sin(time * 0.5) * 2}%)`);
      gradient.addColorStop(0.2, `hsl(${250 + Math.cos(time * 0.7) * 8}, 70%, ${12 + Math.cos(time * 0.3) * 2}%)`);
      gradient.addColorStop(0.5, `hsl(${260 + Math.sin(time * 0.4) * 12}, 75%, ${15 + Math.sin(time * 0.8) * 3}%)`);
      gradient.addColorStop(0.8, `hsl(${270 + Math.cos(time * 0.6) * 15}, 65%, ${10 + Math.cos(time) * 2}%)`);
      gradient.addColorStop(1, `hsl(${220 + Math.sin(time * 0.3) * 20}, 85%, ${6 + Math.sin(time * 0.9) * 1}%)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawStar = (obj: ThreeDObject) => {
      ctx.save();
      ctx.translate(obj.x, obj.y);
      
      // Enhanced twinkling effect
      const alpha = 0.3 + 0.7 * Math.sin(Date.now() * 0.003 + obj.x * 0.01);
      ctx.globalAlpha = alpha;
      
      // Star shape with enhanced glow
      ctx.beginPath();
      const spikes = 5;
      const outerRadius = obj.size || 2;
      const innerRadius = outerRadius * 0.4;
      
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / spikes;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      
      // Enhanced gradient for star
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, outerRadius);
      gradient.addColorStop(0, '#FFFFFF');
      gradient.addColorStop(0.3, '#E0E7FF');
      gradient.addColorStop(0.7, '#A5B4FC');
      gradient.addColorStop(1, 'rgba(165, 180, 252, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.shadowColor = '#FFFFFF';
      ctx.shadowBlur = 8;
      
      ctx.restore();
    };

    const drawEnhancedMoon = (obj: ThreeDObject) => {
      ctx.save();
      ctx.translate(obj.x, obj.y);
      ctx.rotate(obj.rotationY);
      
      // Make moon much larger and more prominent
      const moonSize = window.innerWidth < 768 ? 80 : 120;
      
      // Enhanced moon with realistic surface and glow
      const gradient = ctx.createRadialGradient(-moonSize/3, -moonSize/3, 0, 0, 0, moonSize);
      gradient.addColorStop(0, '#FFFFFF');
      gradient.addColorStop(0.2, '#F8F9FA');
      gradient.addColorStop(0.4, '#E9ECEF');
      gradient.addColorStop(0.6, '#DEE2E6');
      gradient.addColorStop(0.8, '#ADB5BD');
      gradient.addColorStop(1, '#6C757D');
      
      ctx.beginPath();
      ctx.arc(0, 0, moonSize, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Enhanced craters with realistic depth
      const craters = [
        { x: -moonSize/2.2, y: -moonSize/3.5, r: moonSize/4 },
        { x: moonSize/2.5, y: moonSize/2, r: moonSize/5.5 },
        { x: -moonSize/6, y: moonSize/1.6, r: moonSize/6.5 },
        { x: moonSize/1.7, y: -moonSize/3.5, r: moonSize/8 },
        { x: -moonSize/1.4, y: moonSize/2.8, r: moonSize/10 }
      ];
      
      craters.forEach(crater => {
        // Outer crater shadow
        ctx.fillStyle = 'rgba(73, 80, 87, 0.8)';
        ctx.beginPath();
        ctx.arc(crater.x, crater.y, crater.r, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner crater depth
        ctx.fillStyle = 'rgba(52, 58, 64, 0.6)';
        ctx.beginPath();
        ctx.arc(crater.x + crater.r/4, crater.y + crater.r/4, crater.r * 0.7, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Enhanced mystical glow with animated intensity
      const glowIntensity = 0.8 + 0.2 * Math.sin(Date.now() * 0.002);
      ctx.shadowColor = `rgba(233, 236, 239, ${glowIntensity})`;
      ctx.shadowBlur = 50;
      ctx.beginPath();
      ctx.arc(0, 0, moonSize + 15, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(233, 236, 239, ${glowIntensity * 0.9})`;
      ctx.lineWidth = 6;
      ctx.stroke();
      
      ctx.restore();
    };

    const drawEnhancedSun = (obj: ThreeDObject) => {
      ctx.save();
      ctx.translate(obj.x, obj.y);
      ctx.rotate(obj.rotationY);
      
      // Make sun much larger and more prominent
      const sunSize = window.innerWidth < 768 ? 85 : 125;
      
      // Dynamic solar rays with enhanced animation
      for (let i = 0; i < 20; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI * 2) / 20);
        
        const rayLength = sunSize + 35 + Math.sin(Date.now() * 0.008 + i) * 20;
        const rayIntensity = 0.8 + 0.2 * Math.sin(Date.now() * 0.006 + i * 0.5);
        
        const gradient = ctx.createLinearGradient(0, sunSize, 0, rayLength);
        gradient.addColorStop(0, `rgba(255, 215, 0, ${rayIntensity})`);
        gradient.addColorStop(0.3, `rgba(255, 165, 0, ${rayIntensity * 0.8})`);
        gradient.addColorStop(1, 'rgba(255, 140, 0, 0)');
        
        ctx.beginPath();
        ctx.moveTo(0, sunSize);
        ctx.lineTo(0, rayLength);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.restore();
      }
      
      // Enhanced corona with pulsing effect
      const coronaSize = sunSize + 25 + Math.sin(Date.now() * 0.004) * 12;
      const coronaGradient = ctx.createRadialGradient(0, 0, sunSize, 0, 0, coronaSize);
      coronaGradient.addColorStop(0, 'rgba(255, 215, 0, 0.95)');
      coronaGradient.addColorStop(0.4, 'rgba(255, 165, 0, 0.7)');
      coronaGradient.addColorStop(0.7, 'rgba(255, 140, 0, 0.4)');
      coronaGradient.addColorStop(1, 'rgba(255, 69, 0, 0)');
      
      ctx.beginPath();
      ctx.arc(0, 0, coronaSize, 0, Math.PI * 2);
      ctx.fillStyle = coronaGradient;
      ctx.fill();
      
      // Sun body with enhanced surface texture
      const sunGradient = ctx.createRadialGradient(-sunSize/4, -sunSize/4, 0, 0, 0, sunSize);
      sunGradient.addColorStop(0, '#FFFF99');
      sunGradient.addColorStop(0.2, '#FFD700');
      sunGradient.addColorStop(0.5, '#FFA500');
      sunGradient.addColorStop(0.8, '#FF8C00');
      sunGradient.addColorStop(1, '#FF6347');
      
      ctx.beginPath();
      ctx.arc(0, 0, sunSize, 0, Math.PI * 2);
      ctx.fillStyle = sunGradient;
      ctx.fill();
      
      // Enhanced solar surface details
      const spots = [
        { x: -sunSize/2.2, y: -sunSize/3.5, r: sunSize/6 },
        { x: sunSize/2, y: sunSize/2.5, r: sunSize/8 },
        { x: -sunSize/4, y: sunSize/1.6, r: sunSize/10 },
        { x: sunSize/2.8, y: -sunSize/2.2, r: sunSize/12 }
      ];
      
      spots.forEach(spot => {
        ctx.fillStyle = 'rgba(255, 69, 0, 0.9)';
        ctx.beginPath();
        ctx.arc(spot.x, spot.y, spot.r, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Intense glow with animation
      const glowIntensity = 0.9 + 0.1 * Math.sin(Date.now() * 0.003);
      ctx.shadowColor = `rgba(255, 215, 0, ${glowIntensity})`;
      ctx.shadowBlur = 70;
      ctx.beginPath();
      ctx.arc(0, 0, sunSize + 18, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 215, 0, ${glowIntensity * 0.95})`;
      ctx.lineWidth = 8;
      ctx.stroke();
      
      ctx.restore();
    };

    const animate = () => {
      // Draw animated gradient background
      drawGradientBackground();
      
      objectsRef.current.forEach(obj => {
        if (obj.type === 'star') {
          // Enhanced floating motion for stars
          obj.y += Math.sin(Date.now() * 0.0012 + obj.x * 0.01) * 0.2;
          obj.x += Math.cos(Date.now() * 0.001 + obj.y * 0.01) * 0.1;
          
          // Keep stars within bounds with smooth wrapping
          if (obj.x < -50) obj.x = canvas.width + 50;
          if (obj.x > canvas.width + 50) obj.x = -50;
          if (obj.y < -50) obj.y = canvas.height + 50;
          if (obj.y > canvas.height + 50) obj.y = -50;
          
          drawStar(obj);
        } else if (obj.type === 'moon') {
          obj.rotationY += 0.003;
          obj.y += Math.sin(Date.now() * 0.0004 + obj.x * 0.01) * 0.3;
          obj.x += Math.cos(Date.now() * 0.0003) * 0.15;
          drawEnhancedMoon(obj);
        } else if (obj.type === 'sun') {
          obj.rotationY += 0.006;
          obj.y += Math.sin(Date.now() * 0.0003 + obj.x * 0.01) * 0.25;
          obj.x += Math.cos(Date.now() * 0.0002) * 0.1;
          drawEnhancedSun(obj);
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initializeObjects();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initializeObjects();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default Enhanced3DScene;
