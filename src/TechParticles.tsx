import { useEffect, useRef } from "react";

export function TechParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 45 : 140;
    const primaryR = 100, primaryG = 103, primaryB = 242;
    const cyanR = 34, cyanG = 211, cyanB = 238;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const resizeObserver = new ResizeObserver(() => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    });
    resizeObserver.observe(document.documentElement);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      glow: string;
      pulseSpeed: number;
      pulseOffset: number;
    }
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const useCyan = Math.random() > 0.7;
      const r = useCyan ? cyanR : primaryR;
      const g = useCyan ? cyanG : primaryG;
      const b = useCyan ? cyanB : primaryB;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 3 + 1.5,
        color: `${r}, ${g}, ${b}`,
        glow: `rgba(${r}, ${g}, ${b}, 0.6)`,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    const linkDistance = 160;
    let frame = 0;

    const draw = () => {
      frame++;
      const docHeight = document.documentElement.scrollHeight;
      if (canvas.height !== docHeight || canvas.width !== window.innerWidth) {
        canvas.width = window.innerWidth;
        canvas.height = docHeight;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw links first (behind particles)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDistance) {
            const alpha = 0.22 * (1 - dist / linkDistance);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${primaryR}, ${primaryG}, ${primaryB}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw particles with glow effect
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        p.x = Math.max(0, Math.min(canvas.width, p.x));
        p.y = Math.max(0, Math.min(canvas.height, p.y));

        // Pulse effect
        const pulse = 0.5 + 0.5 * Math.sin(frame * p.pulseSpeed + p.pulseOffset);
        const currentSize = p.size * (0.8 + 0.4 * pulse);
        const currentAlpha = 0.4 + 0.3 * pulse;

        // Outer glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentSize * 4);
        gradient.addColorStop(0, `rgba(${p.color}, ${currentAlpha * 0.4})`);
        gradient.addColorStop(1, `rgba(${p.color}, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Inner bright dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${currentAlpha})`;
        ctx.fill();

        // White core for brightness
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha * 0.6})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
