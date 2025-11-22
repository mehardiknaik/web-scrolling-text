import React, { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  angle: number; // Angle from center for orbital motion
  distance: number; // Distance from center
  hue: number; // Color variation
}

interface AnimatedBackgroundProps {
  pattern?: 1 | 2 | 3 | 4; // 1: Spiral Galaxy, 2: Circular Rings, 3: Scattered Nebula, 4: Wave Field
}

export default function AnimatedBackground({ pattern = 1 }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const patternRef = useRef(pattern); // Track current pattern

  // Update pattern ref when prop changes
  useEffect(() => {
    patternRef.current = pattern;
  }, [pattern]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Calculate target position for a particle based on current pattern
    const calculateTargetPosition = (index: number, totalParticles: number, currentPattern: number) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      let angle, distance, hue, size, opacity;

      if (currentPattern === 1) {
        // Pattern 1: Particle Burst - dynamic radial waves with pulsating motion
        const ringCount = 8;
        const particlesPerRing = Math.floor(totalParticles / ringCount);
        const ringIndex = Math.floor(index / particlesPerRing);
        const angleInRing = ((index % particlesPerRing) / particlesPerRing) * Math.PI * 2;

        // Create expanding rings with varying speeds
        const baseDistance = Math.min(canvas.width, canvas.height) * 0.05;
        const ringSpacing = Math.min(canvas.width, canvas.height) * 0.06;
        distance = baseDistance + (ringIndex * ringSpacing);

        // Add spiral offset for more dynamic look
        const spiralOffset = ringIndex * 0.3;
        angle = angleInRing + spiralOffset;

        // Vibrant, cycling colors
        hue = (200 + ringIndex * 30 + (index % 50)) % 360;

        // Varying sizes for depth
        size = 1.5 + (ringIndex % 3) * 0.5 + ((index % 20) / 20);

        // Pulsating opacity
        opacity = 0.3 + ((ringIndex % 4) * 0.15) + ((index % 30) / 100);

      } else if (currentPattern === 2) {
        // Pattern 2: Circular Rings
        const ringCount = 5;
        const ringIndex = index % ringCount;
        const particlesPerRing = Math.floor(totalParticles / ringCount);
        const angleInRing = ((index % particlesPerRing) / particlesPerRing) * Math.PI * 2;
        angle = angleInRing;
        const ringSpacing = Math.min(canvas.width, canvas.height) * 0.08;
        distance = (ringIndex + 1) * ringSpacing;
        hue = 160 + ringIndex * 20;
        size = 1.5 + ((index % 25) / 10);
        opacity = 0.3 + ((index % 50) / 100);

      } else if (currentPattern === 3) {
        // Pattern 3: Scattered Nebula
        const clusterCount = 8;
        const clusterIndex = index % clusterCount;
        const clusterAngle = (clusterIndex / clusterCount) * Math.PI * 2;
        const clusterDistance = Math.min(canvas.width, canvas.height) * 0.15;
        const clusterX = centerX + Math.cos(clusterAngle) * clusterDistance;
        const clusterY = centerY + Math.sin(clusterAngle) * clusterDistance;
        const spread = Math.min(canvas.width, canvas.height) * 0.15;
        const localAngle = ((index % (totalParticles / clusterCount)) / (totalParticles / clusterCount)) * Math.PI * 2;
        const localDistance = Math.random() * spread;
        const x = clusterX + Math.cos(localAngle) * localDistance;
        const y = clusterY + Math.sin(localAngle) * localDistance;
        distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
        angle = Math.atan2(y - centerY, x - centerX);
        hue = 280 + (index % 80);
        size = 1 + ((index % 40) / 10);
        opacity = 0.15 + ((index % 70) / 100);

      } else {
        // Pattern 4: Spiral Galaxy
        const baseAngle = (index / totalParticles) * Math.PI * 2;
        const spiralArm = index % 3;
        const armAngle = baseAngle + (spiralArm * Math.PI * 2 / 3);
        distance = Math.pow((index % (totalParticles / 3)) / (totalParticles / 3), 0.5) * Math.min(canvas.width, canvas.height) * 0.45;
        const spiralTightness = 0.003;
        angle = armAngle + distance * spiralTightness;
        hue = 220 + (index % 60);
        size = 1 + ((index % 30) / 10);
        opacity = 0.2 + ((index % 40) / 100);
      }

      return { angle, distance, hue, size, opacity };
    };

    // Initialize particles once
    const initializeParticles = () => {
      particlesRef.current = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 3000);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < numParticles; i++) {
        const target = calculateTargetPosition(i, numParticles, 1); // Start with pattern 1
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
      const mouseRadius = 200; // Interaction radius
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const totalParticles = particlesRef.current.length;

      // Update and draw particles
      const currentPattern = patternRef.current; // Use ref for latest pattern value
      particlesRef.current.forEach((particle, i) => {
        // Calculate target position based on current pattern
        const target = calculateTargetPosition(i, totalParticles, currentPattern);
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

        // Apply pattern-specific motion (slowed down for smoother transitions)
        if (currentPattern === 1) {
          // Pattern 1: Particle Burst - dynamic radial expansion with rotation and pulsation
          const time = Date.now() * 0.001;

          // Rotating motion - faster rotation for inner rings
          const rotationSpeed = 0.015 / (1 + target.distance * 0.002);
          particle.angle += rotationSpeed;

          // Pulsating distance - creates breathing effect
          const pulseFrequency = 0.8 + (i % 10) * 0.1;
          const pulseAmplitude = 20 + (i % 5) * 5;
          const pulse = Math.sin(time * pulseFrequency + particle.angle * 2) * pulseAmplitude;
          const dynamicDistance = target.distance + pulse;

          // Multi-layered wave motion
          const wave1 = Math.sin(time * 0.5 + particle.angle * 3) * 10;
          const wave2 = Math.cos(time * 0.7 + particle.angle * 2) * 8;

          // Calculate dynamic target position
          const burstX = centerX + Math.cos(particle.angle) * (dynamicDistance + wave1);
          const burstY = centerY + Math.sin(particle.angle) * (dynamicDistance + wave2);

          // Stronger pull for more dynamic movement
          particle.vx += (burstX - particle.x) * 0.012;
          particle.vy += (burstY - particle.y) * 0.012;

          // Add outward expansion force
          const expansionForce = Math.sin(time * 0.3) * 0.05;
          particle.vx += Math.cos(particle.angle) * expansionForce;
          particle.vy += Math.sin(particle.angle) * expansionForce;

        } else if (currentPattern === 2) {
          // Pattern 2: Circular Rings - rotate with slight oscillation
          const orbitalSpeed = 0.008; // Reduced from 0.02 to 0.008
          particle.angle += orbitalSpeed;
          const oscillation = Math.sin(Date.now() * 0.001 + particle.angle) * 5;
          const ringX = centerX + Math.cos(particle.angle) * (target.distance + oscillation);
          const ringY = centerY + Math.sin(particle.angle) * (target.distance + oscillation);
          particle.vx += (ringX - particle.x) * 0.006; // Reduced from 0.015 to 0.006
          particle.vy += (ringY - particle.y) * 0.006;

        } else if (currentPattern === 3) {
          // Pattern 3: Scattered Nebula - slow drift and swirl
          const driftSpeed = 0.002; // Reduced from 0.005 to 0.002
          particle.angle += driftSpeed;
          const driftX = Math.cos(Date.now() * 0.0003 + particle.angle) * 0.15; // Reduced from 0.3 to 0.15
          const driftY = Math.sin(Date.now() * 0.0003 + particle.angle) * 0.15;
          particle.vx += driftX;
          particle.vy += driftY;
          // Pull towards target position
          particle.vx += (targetX - particle.x) * 0.001; // Reduced from 0.002 to 0.001
          particle.vy += (targetY - particle.y) * 0.001;

        } else {
          // Pattern 4: Wave Field - flowing wave motion
          const waveSpeed = 0.001;
          const waveTime = Date.now() * waveSpeed;
          const waveAmplitude = 15;
          const waveFrequency = 0.02;
          const waveX = Math.sin(waveTime + targetY * waveFrequency) * waveAmplitude;
          const waveY = Math.cos(waveTime + targetX * waveFrequency) * waveAmplitude;
          const flowX = targetX + waveX;
          const flowY = targetY + waveY;
          particle.vx += (flowX - particle.x) * 0.004;
          particle.vy += (flowY - particle.y) * 0.004;
        }

        // Smoothly transition to target properties (slower for gradual pattern shifts)
        particle.distance += (target.distance - particle.distance) * 0.008; // Reduced from 0.02 to 0.008
        particle.hue += (target.hue - particle.hue) * 0.015; // Reduced from 0.05 to 0.015
        particle.size += (target.size - particle.size) * 0.015; // Reduced from 0.05 to 0.015
        particle.opacity += (target.opacity - particle.opacity) * 0.01; // Reduced from 0.05 to 0.01

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
  }, []); // Empty dependency array - particles persist and morph between patterns

  return (
    <canvas
      ref={canvasRef}
      className={styles.animatedBackground}
      aria-hidden="true"
    />
  );
}
