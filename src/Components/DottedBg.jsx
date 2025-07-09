import React, { useState, useRef, useEffect } from 'react';

const DottedBg = ({ 
  children,
  dotColor = 'rgb(120, 120, 120)',
  bgColor = 'black',
  dotSize = 2,
  baseSpacing = 20, // Base spacing that scales with device
  repelRadius = 80,
  explodeStrength = 15,
  returnSpeed = 0.5
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState(null);
  const dots = useRef([]);
  const animationRef = useRef(null);
  const [spacing, setSpacing] = useState(baseSpacing);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Handle responsive spacing
  useEffect(() => {
    const updateSpacing = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      // Scale spacing based on screen size
      const scaleFactor = Math.min(Math.max(width / 500, 0.8), 1.2);
      setSpacing(baseSpacing * scaleFactor);
    };

    updateSpacing();
    window.addEventListener('resize', updateSpacing);
    return () => window.removeEventListener('resize', updateSpacing);
  }, [baseSpacing]);

  // Initialize dots grid
  useEffect(() => {
    if (!containerRef.current || spacing === 0) return;
    
    const { width, height } = containerRef.current.getBoundingClientRect();
    setDimensions({ width, height });
    
    const cols = Math.ceil(width / spacing);
    const rows = Math.ceil(height / spacing);
    
    dots.current = Array.from({ length: cols * rows }, (_, i) => ({
      x: (i % cols) * spacing,
      y: Math.floor(i / cols) * spacing,
      originX: (i % cols) * spacing,
      originY: Math.floor(i / cols) * spacing,
      vx: 0,
      vy: 0
    }));
  }, [spacing]);

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop with hover effect
  useEffect(() => {
    if (!canvasRef.current || dots.current.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
    };
    resizeCanvas();

    const animate = () => {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      dots.current.forEach(dot => {
        if (mousePos) {
          const dx = dot.x - mousePos.x;
          const dy = dot.y - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Strong repulsion effect on hover
          if (distance < repelRadius) {
            const force = explodeStrength * (1 - distance / repelRadius);
            dot.vx = (dx / distance) * force;
            dot.vy = (dy / distance) * force;
          }
        }

        // Apply velocity
        dot.x += dot.vx;
        dot.y += dot.vy;
        
        // Return to origin with damping
        dot.x += (dot.originX - dot.x) * returnSpeed;
        dot.y += (dot.originY - dot.y) * returnSpeed;
        dot.vx *= 0.9;
        dot.vy *= 0.9;

        // Draw dot
        ctx.fillStyle = dotColor;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationRef.current);
  }, [mousePos, dimensions, bgColor, dotColor, dotSize, repelRadius, explodeStrength, returnSpeed]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DottedBg;