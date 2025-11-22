import React, { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';
import { getAnimation, animations, type Particle } from './animations';

interface AnimatedBackgroundProps {
  pattern?: number;
}

export default function AnimatedBackground({ pattern = 0 }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  // Normalize pattern to cycle through available animations
  const normalizedPattern = pattern % animations.length;
  const patternRef = useRef(normalizedPattern);

  // Update pattern ref when prop changes
  useEffect(() => {
    const normalized = pattern % animations.length;
    patternRef.current = normalized;
  }, [pattern]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize particles once
    const initializeParticles = () => {
      particlesRef.current = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 3000);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Get the first animation to initialize particles
      const animation = getAnimation(0);

      for (let i = 0; i < numParticles; i++) {
        const target = animation.calculateTarget({
          canvasWidth: canvas.width,
          canvasHeight: canvas.height,
          centerX,
          centerY,
          index: i,
          totalParticles: numParticles,
        });

        const x = centerX + Math.cos(target.angle) * target.distance;
        const y = centerY + Math.sin(target.angle) * target.distance;

        particlesRef.current.push({
          x,
          y,
          vx: 0,
          vy: 0,
          size: target.size,
          opacity: target.opacity,
          angle: target.angle,
          distance: target.distance,
          hue: target.hue,
        });
      }
    };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeParticles();
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const mouseRadius = 200;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const totalParticles = particlesRef.current.length;

      // Get current animation
      const currentAnimation = getAnimation(patternRef.current);

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Calculate target position based on current animation
        const target = currentAnimation.calculateTarget({
          canvasWidth: canvas.width,
          canvasHeight: canvas.height,
          centerX,
          centerY,
          index: i,
          totalParticles,
        });

        const targetX = centerX + Math.cos(target.angle) * target.distance;
        const targetY = centerY + Math.sin(target.angle) * target.distance;

        // Calculate distance to mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const mouseDistance = Math.sqrt(dx * dx + dy * dy);

        // Mouse repulsion
        if (mouseDistance < mouseRadius) {
          const force = (mouseRadius - mouseDistance) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * force * 0.8;
          particle.vy -= Math.sin(angle) * force * 0.8;
        }

        // Apply animation-specific motion
        currentAnimation.applyMotion({
          canvasWidth: canvas.width,
          canvasHeight: canvas.height,
          centerX,
          centerY,
          index: i,
          totalParticles,
          particle,
          target,
          targetX,
          targetY,
          particleIndex: i,
        });

        // Smoothly transition to target properties
        particle.distance += (target.distance - particle.distance) * 0.008;
        particle.hue += (target.hue - particle.hue) * 0.015;
        particle.size += (target.size - particle.size) * 0.015;
        particle.opacity += (target.opacity - particle.opacity) * 0.01;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Apply friction
        particle.vx *= 0.95;
        particle.vy *= 0.95;

        // Add slight random movement for organic feel
        particle.vx += (Math.random() - 0.5) * 0.02;
        particle.vy += (Math.random() - 0.5) * 0.02;

        // Limit velocity
        const maxSpeed = 3;
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed;
          particle.vy = (particle.vy / speed) * maxSpeed;
        }

        // Draw particle with color variation
        const alpha = particle.opacity * (0.8 + Math.sin(Date.now() * 0.001 + particle.angle) * 0.2);
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow for larger particles
        if (particle.size > 2) {
          ctx.fillStyle = `hsla(${particle.hue}, 70%, 80%, ${alpha * 0.3})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.animatedBackground}
      aria-hidden="true"
    />
  );
}
