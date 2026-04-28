import { useEffect, useRef } from "react";

export function TechParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationId: number;
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 20 : 80;
    const primaryR = 100, primaryG = 103, primaryB = 242;
    const cyanR = 34, cyanG = 211, cyanB = 238;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };
    resize();
    
    // Debounced resize
    let resizeTimer: number;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 200);
    };
    window.addEventListener("resize", debouncedResize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }

    const w = window.innerWidth;
    const h = window.innerHeight;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const useCyan = Math.random() > 0.7;
      const r = useCyan ? cyanR : primaryR;
      const g = useCyan ? cyanG : primaryG;
      const b = useCyan ? cyanB : primaryB;
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2.5 + 1.5,
        color: `${r}, ${g}, ${b}`,
        alpha: 0.3 + Math.random() * 0.4,
      });
    }

    const linkDistance = isMobile ? 100 : 140;
    const linkDistSq = linkDistance * linkDistance;
    let frame = 0;

    // Skip frames on mobile for better perf
    const frameSkip = isMobile ? 2 : 1;

    const draw = () => {
      frame++;
      if (frame % frameSkip !== 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      const cw = window.innerWidth;
      const ch = window.innerHeight;
      ctx.clearRect(0, 0, cw, ch);

      // Update positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > cw) p.vx *= -1;
        if (p.y < 0 || p.y > ch) p.vy *= -1;
        p.x = Math.max(0, Math.min(cw, p.x));
        p.y = Math.max(0, Math.min(ch, p.y));
      }

      // Get visible range (only draw what's on screen)
      const viewH = window.innerHeight;
      const viewTop = 0;
      const viewBottom = viewH;

      // Draw links (only between visible particles)
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        const pi = particles[i];
        if (pi.y < viewTop || pi.y > viewBottom) continue;
        for (let j = i + 1; j < particles.length; j++) {
          const pj = particles[j];
          if (pj.y < viewTop || pj.y > viewBottom) continue;
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < linkDistSq) {
            const alpha = 0.18 * (1 - Math.sqrt(distSq) / linkDistance);
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.strokeStyle = `rgba(${primaryR}, ${primaryG}, ${primaryB}, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw particles (only visible)
      for (const p of particles) {
        if (p.y < viewTop || p.y > viewBottom) continue;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
