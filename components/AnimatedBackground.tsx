"use client";

import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Создаем статичный шум
    const noiseCanvas = document.createElement('canvas');
    const noiseCtx = noiseCanvas.getContext('2d');
    if (!noiseCtx) return;

    noiseCanvas.width = canvas.width;
    noiseCanvas.height = canvas.height;

    const noiseData = noiseCtx.createImageData(noiseCanvas.width, noiseCanvas.height);
    const data = noiseData.data;

    // Генерируем статичный шум
    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 150;
      data[i] = noise;     // R
      data[i + 1] = noise; // G
      data[i + 2] = noise; // B
      data[i + 3] = 255;   // A
    }

    noiseCtx.putImageData(noiseData, 0, 0);

    // Создаем канвас для белого слоя с волнами
    const whiteCanvas = document.createElement('canvas');
    const whiteCtx = whiteCanvas.getContext('2d');
    if (!whiteCtx) return;

    whiteCanvas.width = canvas.width;
    whiteCanvas.height = canvas.height;

    // Центры волн прозрачности
    const waves = Array(5).fill(null).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      targetX: Math.random() * canvas.width,
      targetY: Math.random() * canvas.height,
      intensity: Math.random() * 0.3 + 0.7 // Случайная интенсивность для каждой волны
    }));

    // Обновляем целевые точки каждые 4 секунды
    setInterval(() => {
      waves.forEach(wave => {
        wave.targetX = Math.random() * canvas.width;
        wave.targetY = Math.random() * canvas.height;
        wave.intensity = Math.random() * 0.2 + 0.7;
      });
    }, 4000);

    const animate = () => {
      if (!canvas || !ctx || !whiteCtx) return;

      // Очищаем основной канвас
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Рисуем шум
      ctx.globalAlpha = 0.3;
      ctx.drawImage(noiseCanvas, 0, 0);
      ctx.globalAlpha = 1.0;

      // Очищаем белый канвас
      whiteCtx.fillStyle = 'white';
      whiteCtx.fillRect(0, 0, whiteCanvas.width, whiteCanvas.height);

      // Рисуем волны на белом канвасе
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

      // Накладываем белый слой с волнами поверх шума
      ctx.globalAlpha = 0.9;
      ctx.drawImage(whiteCanvas, 0, 0);
      ctx.globalAlpha = 1.0;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ 
        width: '100%',
        height: '100%',
        display: 'block',
        opacity: 0.9
      }}
    />
  );
} 