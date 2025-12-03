"use client";

import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false }); // Optimize for no alpha on main canvas if possible, but we need it for noise overlay
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    const fps = 30; // Limit FPS to 30 to reduce CPU usage
    const interval = 1000 / fps;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Reduce max DPR to 1.5
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const noiseCanvas = document.createElement('canvas');
    const noiseCtx = noiseCanvas.getContext('2d');
    if (!noiseCtx) return;

    // Reduce noise resolution
    noiseCanvas.width = 200;
    noiseCanvas.height = 200;

    const noiseData = noiseCtx.createImageData(noiseCanvas.width, noiseCanvas.height);
    const data = noiseData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 150;
      data[i] = noise;
      data[i + 1] = noise;
      data[i + 2] = noise;
      data[i + 3] = 255;
    }

    noiseCtx.putImageData(noiseData, 0, 0);

    const whiteCanvas = document.createElement('canvas');
    const whiteCtx = whiteCanvas.getContext('2d');
    if (!whiteCtx) return;

    // Sync white canvas size with main canvas
    const updateWhiteCanvasSize = () => {
      whiteCanvas.width = canvas.width;
      whiteCanvas.height = canvas.height;
    };
    updateWhiteCanvasSize();
    window.addEventListener('resize', updateWhiteCanvasSize);

    const waves = Array(3).fill(null).map(() => ({ // Reduce waves from 5 to 3
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      targetX: Math.random() * canvas.width,
      targetY: Math.random() * canvas.height,
      intensity: Math.random() * 0.4 + 0.5
    }));

    const waveInterval = setInterval(() => {
      waves.forEach(wave => {
        wave.targetX = Math.random() * canvas.width;
        wave.targetY = Math.random() * canvas.height;
        wave.intensity = Math.random() * 0.3 + 0.5;
      });
    }, 4000);

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = time - lastTime;
      if (delta < interval) return;

      lastTime = time - (delta % interval);

      if (!canvas || !ctx || !whiteCtx) return;

      // Clear with solid color instead of fillRect if possible, but here we need white background
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width / ctx.getTransform().a, canvas.height / ctx.getTransform().d); // Adjust for scale

      // Draw noise pattern repeatedly
      ctx.globalAlpha = 0.4;
      const pattern = ctx.createPattern(noiseCanvas, 'repeat');
      if (pattern) {
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, canvas.width / ctx.getTransform().a, canvas.height / ctx.getTransform().d);
      }
      ctx.globalAlpha = 1.0;

      whiteCtx.fillStyle = 'white';
      whiteCtx.fillRect(0, 0, whiteCanvas.width, whiteCanvas.height);

      whiteCtx.globalCompositeOperation = 'destination-out';

      waves.forEach(wave => {
        wave.x += (wave.targetX - wave.x) * 0.02;
        wave.y += (wave.targetY - wave.y) * 0.02;

        const radius = Math.min(canvas.width, canvas.height) * 0.6;
        const gradient = whiteCtx.createRadialGradient(
          wave.x, wave.y, 0,
          wave.x, wave.y, radius
        );

        gradient.addColorStop(0, `rgba(255, 255, 255, ${wave.intensity})`);
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        whiteCtx.fillStyle = gradient;
        whiteCtx.fillRect(0, 0, whiteCanvas.width, whiteCanvas.height);
      });
      whiteCtx.globalCompositeOperation = 'source-over';

      ctx.globalAlpha = 0.9;
      ctx.drawImage(whiteCanvas, 0, 0, canvas.width / ctx.getTransform().a, canvas.height / ctx.getTransform().d);
      ctx.globalAlpha = 1.0;
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', updateWhiteCanvasSize);
      cancelAnimationFrame(animationFrameId);
      clearInterval(waveInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 will-change-transform"
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        opacity: 0.9
      }}
    />
  );
} 