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

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ring.style.display = "none";
      dot.style.display = "none";
      return;
    }
// 
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animateCursor = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 1);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 1);
      ring.style.left = ringPos.current.x + "px";
      ring.style.top = ringPos.current.y + "px";
      const dx = ringPos.current.x - mousePos.current.x;
      const dy = ringPos.current.y - mousePos.current.y;
      if (dx * dx + dy * dy > 0.5) {
        rafRef.current = requestAnimationFrame(animateCursor);
      } else {
        rafRef.current = 0;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      if (!rafRef.current) rafRef.current = requestAnimationFrame(animateCursor);
    };

    const addHover = () => document.body.classList.add("cursor-hover");
    const removeHover = () => document.body.classList.remove("cursor-hover");
    const addClick = () => {
      document.body.classList.add("cursor-click");
      setTimeout(() => document.body.classList.remove("cursor-click"), 150);
    };

    const interactables = () =>
      document.querySelectorAll("a, button, [role='button'], input, select, textarea, .shimmer");
    let cleanup: (() => void)[] = [];

    const attachHovers = () => {
      cleanup.forEach((fn) => fn());
      cleanup = [];
      interactables().forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
        cleanup.push(() => {
          el.removeEventListener("mouseenter", addHover);
          el.removeEventListener("mouseleave", removeHover);
        });
      });
    };
    attachHovers();
    let hoverDebounce: ReturnType<typeof setTimeout> | null = null;
    const observer = new MutationObserver(() => {
      if (hoverDebounce) clearTimeout(hoverDebounce);
      hoverDebounce = setTimeout(() => {
        hoverDebounce = null;
        attachHovers();
      }, 80);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", addClick);

    const onScroll = () => {
      if (!progress) return;
      const h = document.body.scrollHeight - window.innerHeight;
      const pct = h <= 0 ? 0 : (window.scrollY / h) * 100;
      progress.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const staggerObs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    const scaleObs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );

    const staggerSeen = new WeakSet<Element>();
    const scaleSeen = new WeakSet<Element>();
    const attachObservers = () => {
      document.querySelectorAll(".stagger-child").forEach((el) => {
        if (!staggerSeen.has(el)) {
          staggerSeen.add(el);
          staggerObs.observe(el);
        }
      });
      document.querySelectorAll(".scale-reveal").forEach((el) => {
        if (!scaleSeen.has(el)) {
          scaleSeen.add(el);
          scaleObs.observe(el);
        }
      });
    };
    attachObservers();
    let obsDebounce: ReturnType<typeof setTimeout> | null = null;
    const mutObs = new MutationObserver(() => {
      if (obsDebounce) clearTimeout(obsDebounce);
      obsDebounce = setTimeout(() => {
        obsDebounce = null;
        attachObservers();
      }, 80);
    });
    mutObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (hoverDebounce) clearTimeout(hoverDebounce);
      if (obsDebounce) clearTimeout(obsDebounce);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", addClick);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      staggerObs.disconnect();
      scaleObs.disconnect();
      mutObs.disconnect();
      cleanup.forEach((fn) => fn());
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const maxDpr = 1.25;
    let W = window.innerWidth;
    let H = window.innerHeight;
    const setSize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      const dpr = Math.min(maxDpr, window.devicePixelRatio || 1);
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    let resizeT: ReturnType<typeof setTimeout>;
    const resize = () => {
      clearTimeout(resizeT);
      resizeT = setTimeout(setSize, 120);
    };
    window.addEventListener("resize", resize, { passive: true });

    const PARTICLE_COUNT = 28;
    const LINK_DIST = 100;
    const LINK_DIST_SQ = LINK_DIST * LINK_DIST;
    const MOUSE_R = 130;
    const MOUSE_R_SQ = MOUSE_R * MOUSE_R;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      pulse: number;
    };
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      size: Math.random() * 1.8 + 0.4,
      opacity: Math.random() * 0.4 + 0.05,
      pulse: Math.random() * Math.PI * 2,
    }));

    let mouseX = W / 2;
    let mouseY = H / 2;
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    let frame = 0;
    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, W, H);

      particles.forEach((p) => {
        p.pulse += 0.008;
        const op = p.opacity + Math.sin(p.pulse) * 0.12;

        const dxm = p.x - mouseX;
        const dym = p.y - mouseY;
        const distSq = dxm * dxm + dym * dym;
        if (distSq > 0 && distSq < MOUSE_R_SQ) {
          const dist = Math.sqrt(distSq);
          p.vx += (dxm / dist) * 0.018;
          p.vy += (dym / dist) * 0.018;
        }
        p.vx *= 0.995;
        p.vy *= 0.995;

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(158,148,255,${Math.max(0, Math.min(0.7, op))})`;
        ctx.fill();
      });

      if (frame % 2 === 0) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dsq = dx * dx + dy * dy;
            if (dsq < LINK_DIST_SQ) {
              const d = Math.sqrt(dsq);
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(158,148,255,${0.08 * (1 - d / LINK_DIST)})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeT);
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
