
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

const ThreeDScene: React.FC = () => {
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
      // Create stars
      const stars: ThreeDObject[] = [];
      for (let i = 0; i < 50; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: 0,
          rotationX: 0,
          rotationY: 0,
          type: 'star',
          size: Math.random() * 2 + 1
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

    const drawStar = (obj: ThreeDObject) => {
      ctx.save();
      ctx.translate(obj.x, obj.y);
      
      // Twinkling effect
      const alpha = 0.5 + 0.5 * Math.sin(Date.now() * 0.005 + obj.x * 0.01);
      ctx.globalAlpha = alpha;
      
      // Star shape
      ctx.beginPath();
      const spikes = 5;
      const outerRadius = obj.size || 2;
      const innerRadius = outerRadius * 0.5;
      
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
      
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.shadowColor = '#FFFFFF';
      ctx.shadowBlur = 4;
      
      ctx.restore();
    };

    const drawMoon = (obj: ThreeDObject) => {
      ctx.save();
      ctx.translate(obj.x, obj.y);
      ctx.rotate(obj.rotationY);
      
      // Realistic moon with craters and surface texture
      const gradient = ctx.createRadialGradient(-15, -15, 0, 0, 0, 50);
      gradient.addColorStop(0, '#F8F9FA');
      gradient.addColorStop(0.3, '#E9ECEF');
      gradient.addColorStop(0.6, '#CED4DA');
      gradient.addColorStop(1, '#6C757D');
      
      ctx.beginPath();
      ctx.arc(0, 0, 50, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Moon craters with realistic shadows
      ctx.fillStyle = 'rgba(108, 117, 125, 0.4)';
      ctx.beginPath();
      ctx.arc(-20, -15, 12, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(15, 20, 8, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(-8, 25, 6, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(25, -10, 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Lunar surface details
      ctx.fillStyle = 'rgba(108, 117, 125, 0.2)';
      ctx.beginPath();
      ctx.arc(-30, 5, 3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(8, -30, 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Subtle glow
      ctx.shadowColor = '#E9ECEF';
      ctx.shadowBlur = 25;
      ctx.beginPath();
      ctx.arc(0, 0, 55, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(233, 236, 239, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.restore();
    };

    const drawSun = (obj: ThreeDObject) => {
      ctx.save();
      ctx.translate(obj.x, obj.y);
      ctx.rotate(obj.rotationY);
      
      // Realistic sun rays
      for (let i = 0; i < 16; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI * 2) / 16);
        
        const gradient = ctx.createLinearGradient(0, 55, 0, 85);
        gradient.addColorStop(0, '#FFD700');
        gradient.addColorStop(0.5, '#FFA500');
        gradient.addColorStop(1, 'rgba(255, 165, 0, 0)');
        
        ctx.beginPath();
        ctx.moveTo(0, 55);
        ctx.lineTo(0, 85);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.restore();
      }
      
      // Sun corona
      const coronaGradient = ctx.createRadialGradient(0, 0, 45, 0, 0, 65);
      coronaGradient.addColorStop(0, 'rgba(255, 215, 0, 0.8)');
      coronaGradient.addColorStop(1, 'rgba(255, 165, 0, 0)');
      
      ctx.beginPath();
      ctx.arc(0, 0, 65, 0, Math.PI * 2);
      ctx.fillStyle = coronaGradient;
      ctx.fill();
      
      // Sun body with realistic surface
      const sunGradient = ctx.createRadialGradient(-10, -10, 0, 0, 0, 45);
      sunGradient.addColorStop(0, '#FFFF99');
      sunGradient.addColorStop(0.3, '#FFD700');
      sunGradient.addColorStop(0.7, '#FFA500');
      sunGradient.addColorStop(1, '#FF8C00');
      
      ctx.beginPath();
      ctx.arc(0, 0, 45, 0, Math.PI * 2);
      ctx.fillStyle = sunGradient;
      ctx.fill();
      
      // Solar flares and surface details
      ctx.fillStyle = 'rgba(255, 140, 0, 0.6)';
      ctx.beginPath();
      ctx.arc(-15, -12, 6, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(18, 15, 4, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(-8, 20, 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Intense glow
      ctx.shadowColor = '#FFD700';
      ctx.shadowBlur = 40;
      ctx.beginPath();
      ctx.arc(0, 0, 50, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.6)';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      objectsRef.current.forEach(obj => {
        if (obj.type === 'star') {
          drawStar(obj);
        } else if (obj.type === 'moon') {
          obj.rotationY += 0.005;
          obj.y += Math.sin(Date.now() * 0.0008 + obj.x * 0.01) * 0.3;
          drawMoon(obj);
        } else if (obj.type === 'sun') {
          obj.rotationY += 0.008;
          obj.y += Math.sin(Date.now() * 0.0006 + obj.x * 0.01) * 0.2;
          drawSun(obj);
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
      className="absolute inset-0 pointer-events-none z-10"
    />
  );
};

export default ThreeDScene;
