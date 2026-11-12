
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  originalSize: number;
  pulsePhase: number;
}

export class ParticleSystem {
  private particles: Particle[] = [];
  private colors = ['#00d4ff', '#8b5cf6', '#f472b6', '#06b6d4'];

  createParticles(canvas: HTMLCanvasElement): void {
    this.particles = [];
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000));

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 1;
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size,
        originalSize: size,
        opacity: Math.random() * 0.6 + 0.2,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        pulsePhase: Math.random() * Math.PI * 2
      });
    }
  }

  updateParticles(canvas: HTMLCanvasElement, mouse: { x: number; y: number }): void {
    this.particles.forEach(particle => {
      // Mouse interaction
      const mouseDistance = Math.sqrt(
        Math.pow(particle.x - mouse.x, 2) + Math.pow(particle.y - mouse.y, 2)
      );
      
      if (mouseDistance < 150) {
        const force = (150 - mouseDistance) / 150;
        const angle = Math.atan2(particle.y - mouse.y, particle.x - mouse.x);
        particle.vx += Math.cos(angle) * force * 0.02;
        particle.vy += Math.sin(angle) * force * 0.02;
        
        particle.size = particle.originalSize * (1 + force * 0.5);
        particle.opacity = Math.min(0.9, particle.opacity + force * 0.3);
      } else {
        particle.size = particle.originalSize;
      }
      
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      particle.vx *= 0.99;
      particle.vy *= 0.99;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx *= -0.8;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy *= -0.8;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }
      
      // Pulsing effect
      particle.pulsePhase += 0.02;
      const pulse = Math.sin(particle.pulsePhase) * 0.1;
      particle.opacity = Math.max(0.2, Math.min(0.8, particle.opacity + pulse));
      
      if (Math.random() < 0.005) {
        particle.vx += (Math.random() - 0.5) * 0.1;
        particle.vy += (Math.random() - 0.5) * 0.1;
      }
    });
  }

  drawParticles(ctx: CanvasRenderingContext2D): void {
    this.particles.forEach(particle => {
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 2
      );
      gradient.addColorStop(0, `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(0.5, `${particle.color}${Math.floor(particle.opacity * 0.5 * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, `${particle.color}00`);

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    });
  }

  drawConnections(ctx: CanvasRenderingContext2D): void {
    const connectionDistance = 120;
    
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < connectionDistance) {
          const opacity = (1 - distance / connectionDistance) * 0.3;
          
          const gradient = ctx.createLinearGradient(
            this.particles[i].x, this.particles[i].y,
            this.particles[j].x, this.particles[j].y
          );
          gradient.addColorStop(0, `${this.particles[i].color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
          gradient.addColorStop(1, `${this.particles[j].color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
          
          ctx.beginPath();
          ctx.moveTo(this.particles[i].x, this.particles[i].y);
          ctx.lineTo(this.particles[j].x, this.particles[j].y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }
}
