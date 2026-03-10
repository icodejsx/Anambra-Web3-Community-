"use client";

import { useEffect, useRef } from "react";

export default function GlobalEffects() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const progress = progressRef.current;
    if (!dot || !ring) return;

    // ── Cursor follow ──
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animateCursor = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.9);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.9);
      ring.style.left = ringPos.current.x + "px";
      ring.style.top = ringPos.current.y + "px";
      rafRef.current = requestAnimationFrame(animateCursor);
    };
    rafRef.current = requestAnimationFrame(animateCursor);

    // hover & click states
    const addHover = () => document.body.classList.add("cursor-hover");
    const removeHover = () => document.body.classList.remove("cursor-hover");
    const addClick = () => { document.body.classList.add("cursor-click"); setTimeout(() => document.body.classList.remove("cursor-click"), 150); };

    const interactables = () => document.querySelectorAll("a, button, [role='button'], input, select, textarea, .shimmer");
    let cleanup: (() => void)[] = [];

    const attachHovers = () => {
      cleanup.forEach(fn => fn());
      cleanup = [];
      interactables().forEach(el => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
        cleanup.push(() => {
          el.removeEventListener("mouseenter", addHover);
          el.removeEventListener("mouseleave", removeHover);
        });
      });
    };
    attachHovers();
    const observer = new MutationObserver(attachHovers);
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", addClick);

    // ── Scroll progress ──
    const onScroll = () => {
      if (!progress) return;
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      progress.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Intersection observer for stagger children ──
    const staggerObs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    const scaleObs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );

    const attachObservers = () => {
      document.querySelectorAll(".stagger-child").forEach(el => staggerObs.observe(el));
      document.querySelectorAll(".scale-reveal").forEach(el => scaleObs.observe(el));
    };
    attachObservers();
    const mutObs = new MutationObserver(attachObservers);
    mutObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", addClick);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      staggerObs.disconnect();
      scaleObs.disconnect();
      mutObs.disconnect();
      cleanup.forEach(fn => fn());
    };
  }, []);

  // ── Particle canvas ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;

    const resize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    };
    window.addEventListener("resize", resize);

    const PARTICLE_COUNT = 55;
    type Particle = { x:number; y:number; vx:number; vy:number; size:number; opacity:number; pulse:number; };
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      size: Math.random() * 1.8 + 0.4,
      opacity: Math.random() * 0.4 + 0.05,
      pulse: Math.random() * Math.PI * 2,
    }));

    let mouseX = W / 2, mouseY = H / 2;
    const onMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      particles.forEach(p => {
        p.pulse += 0.008;
        const op = p.opacity + Math.sin(p.pulse) * 0.12;

        // gentle mouse repulsion
        const dx = p.x - mouseX, dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          p.vx += (dx / dist) * 0.018;
          p.vy += (dy / dist) * 0.018;
        }
        // dampen
        p.vx *= 0.995; p.vy *= 0.995;

        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(158,148,255,${Math.max(0, Math.min(0.7, op))})`;
        ctx.fill();
      });

      // draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 115) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(158,148,255,${0.08 * (1 - d / 115)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div id="scroll-progress" ref={progressRef} style={{ width: "0%" }} />
      <canvas id="particles-canvas" ref={canvasRef} />
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
