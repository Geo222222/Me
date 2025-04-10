import React, { useRef, useEffect } from 'react';
import './NeuralGridCanvas.css';

const NeuralGridCanvas = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const spacing = 40;
    const radius = 2.5;
    let dots = [];

    const createDots = () => {
      dots = [];
      const cols = Math.floor(canvas.width / spacing);
      const rows = Math.floor(canvas.height / spacing);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          dots.push({
            x: x * spacing + spacing / 2,
            y: y * spacing + spacing / 2,
            baseSize: radius,
            size: radius
          });
        }
      }
    };

    createDots();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(dot => {
        const dx = dot.x - mouse.current.x;
        const dy = dot.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const scale = Math.max(1.6 - dist / 120, 1);
        dot.size = dot.baseSize * scale;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${(dist * 0.5) % 360}, 100%, 50%)`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="neural-canvas-bg"
      data-enable-interactive-features="true"
    />
  );
};

export default NeuralGridCanvas;
