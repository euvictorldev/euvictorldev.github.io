import { useEffect, useRef } from "react";

/**
 * Living mesh background. Square nodes only — never arcs.
 * Nodes drift slowly and link to nearby neighbours with 1px purple lines,
 * forming a web that reacts to the cursor.
 */

const NODE_TARGET = 90;
const LINK_DIST = 140;
const CURSOR_RADIUS = 120;

type Node = { x: number; y: number; vx: number; vy: number };

export default function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let raf = 0;
    let running = true;

    const cursor = { x: -9999, y: -9999 };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Scale node count with viewport area, capped so phones stay cheap.
      const count = Math.max(30, Math.min(NODE_TARGET, Math.round((width * height) / 16000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist >= LINK_DIST) continue;

          const alpha = (1 - dist / LINK_DIST) * 0.32;
          ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }

        // Nodes are squares. The brief was explicit: no dots.
        const near = Math.hypot(a.x - cursor.x, a.y - cursor.y) < CURSOR_RADIUS;
        ctx.fillStyle = near ? "rgba(199, 125, 255, 0.95)" : "rgba(168, 85, 247, 0.55)";
        const size = near ? 3 : 2;
        ctx.fillRect(a.x - size / 2, a.y - size / 2, size, size);
      }
    };

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));

        // Soft repulsion from the cursor.
        const dx = n.x - cursor.x;
        const dy = n.y - cursor.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 0 && dist < CURSOR_RADIUS) {
          const push = ((CURSOR_RADIUS - dist) / CURSOR_RADIUS) * 0.9;
          n.x += (dx / dist) * push;
          n.y += (dy / dist) * push;
        }
      }

      draw();
      if (running) raf = requestAnimationFrame(step);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      cursor.x = e.clientX - rect.left;
      cursor.y = e.clientY - rect.top;
    };
    const onPointerLeave = () => {
      cursor.x = -9999;
      cursor.y = -9999;
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onVisibility = () => (document.hidden ? stop() : start());

    resize();

    if (reduced) {
      running = false;
      draw(); // one static frame
    } else {
      raf = requestAnimationFrame(step);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerleave", onPointerLeave);
      document.addEventListener("visibilitychange", onVisibility);
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw();
    });
    ro.observe(canvas);

    return () => {
      stop();
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="grid-overlay absolute inset-0 opacity-60" />
      <div className="vignette absolute inset-0" />
    </div>
  );
}
