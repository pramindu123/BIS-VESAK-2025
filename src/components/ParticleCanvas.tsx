import React, { useEffect, useRef } from 'react';
import { Particle } from '../types';

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);

  const createParticle = (
    x: number = Math.random() * window.innerWidth,
    y: number = window.innerHeight,
    radius: number = Math.random() * 3 + 2,
    type: 'light' | 'lantern' = 'light'
  ) => {
    particles.current.push({
      x,
      y,
      radius,
      type,
      speedY: Math.random() * 0.5 + 0.3,
      glow: type === 'lantern'
        ? 'rgba(255, 200, 100, 0.8)'
        : `hsla(${Math.random() * 60 + 40}, 100%, 80%, 0.8)`
    });
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.current.length - 1; i >= 0; i--) {
      const p = particles.current[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.glow;
      ctx.shadowColor = p.glow;
      ctx.shadowBlur = 20;
      ctx.fill();
      p.y -= p.speedY;
      if (p.y < -10) particles.current.splice(i, 1);
    }

    animationFrameId.current = requestAnimationFrame(draw);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const interval = setInterval(() => {
      createParticle();
      if (Math.random() < 0.1) {
        createParticle(
          Math.random() * window.innerWidth,
          window.innerHeight,
          5 + Math.random() * 4,
          'lantern'
        );
      }
    }, 200);

    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 10; i++) {
        createParticle(
          e.clientX + Math.random() * 40 - 20,
          e.clientY + Math.random() * 40 - 20
        );
      }
    };

    document.addEventListener('click', handleClick);
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('click', handleClick);
      clearInterval(interval);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />;
};

export default ParticleCanvas; 