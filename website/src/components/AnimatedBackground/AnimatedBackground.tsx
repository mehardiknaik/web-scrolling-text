import React, { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

interface Dot {
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Grid settings
    const gridSize = 40;
    const numColumns = Math.ceil(canvas.width / gridSize);
    const numRows = Math.ceil(canvas.height / gridSize);

    // Initialize dots
    const initializeDots = () => {
      dotsRef.current = [];
      const numDots = Math.floor((numColumns * numRows) / 8); // One dot per 8 grid cells approximately
      
      for (let i = 0; i < numDots; i++) {
        const columnIndex = Math.floor(Math.random() * numColumns);
        dotsRef.current.push({
          x: columnIndex * gridSize,
          y: Math.random() * canvas.height * -1, // Start above canvas
          speed: 1 + Math.random() * 2,
          size: 2 + Math.random() * 3,
          opacity: 0.3 + Math.random() * 0.7,
        });
      }
    };
    initializeDots();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)'; // Primary color with low opacity
      ctx.lineWidth = 1;

      // Vertical lines
      for (let i = 0; i <= numColumns; i++) {
        const x = i * gridSize;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let i = 0; i <= numRows; i++) {
        const y = i * gridSize;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw dots
      dotsRef.current.forEach((dot, index) => {
        // Update position
        dot.y += dot.speed;

        // Reset dot when it goes off screen
        if (dot.y > canvas.height + 10) {
          dot.y = -10;
          dot.x = Math.floor(Math.random() * numColumns) * gridSize;
          dot.speed = 1 + Math.random() * 2;
        }

        // Draw dot
        ctx.fillStyle = `rgba(99, 102, 241, ${dot.opacity})`; // Primary color
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw trail
        const trailLength = 30;
        for (let i = 1; i < trailLength; i++) {
          const trailY = dot.y - (i * 2);
          const trailOpacity = dot.opacity * (1 - i / trailLength);
          const trailSize = dot.size * (1 - i / trailLength);
          
          if (trailY >= 0) {
            ctx.fillStyle = `rgba(99, 102, 241, ${trailOpacity})`;
            ctx.beginPath();
            ctx.arc(dot.x, trailY, trailSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
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
