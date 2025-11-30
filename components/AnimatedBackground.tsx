"use client"; // Указываем, что компонент выполняется на клиенте

import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  // Создаем ref для доступа к canvas элементу
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Эффект, который выполняется при монтировании компонента
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Получаем 2D контекст для рисования
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Функция для изменения размера canvas при ресайзе окна
    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;

      // Учитываем pixel ratio устройства для четкости на retina дисплеях, но не более 2x для производительности
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      // Масштабируем контекст и задаем CSS размеры
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    // Вызываем ресайз сразу и добавляем слушатель события
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Создаем отдельный canvas для генерации шума
    const noiseCanvas = document.createElement('canvas');
    const noiseCtx = noiseCanvas.getContext('2d');
    if (!noiseCtx) return;

    noiseCanvas.width = canvas.width;
    noiseCanvas.height = canvas.height;

    // Создаем массив пикселей для шума
    const noiseData = noiseCtx.createImageData(noiseCanvas.width, noiseCanvas.height);
    const data = noiseData.data;

    // Заполняем массив случайными значениями для создания шума
    // Каждый пиксель состоит из 4 значений (R,G,B,A)
    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 150; // Случайное значение от 0 до 150
      data[i] = noise;     // Красный канал
      data[i + 1] = noise; // Зеленый канал
      data[i + 2] = noise; // Синий канал
      data[i + 3] = 255;   // Альфа канал (непрозрачность)
    }

    // Применяем сгенерированный шум на canvas
    noiseCtx.putImageData(noiseData, 0, 0);

    // Создаем отдельный canvas для белых волн
    const whiteCanvas = document.createElement('canvas');
    const whiteCtx = whiteCanvas.getContext('2d');
    if (!whiteCtx) return;

    whiteCanvas.width = canvas.width;
    whiteCanvas.height = canvas.height;

    // Создаем массив из 5 волн с случайными параметрами
    const waves = Array(5).fill(null).map(() => ({
      x: Math.random() * canvas.width,      // Текущая X позиция
      y: Math.random() * canvas.height,     // Текущая Y позиция
      targetX: Math.random() * canvas.width, // Целевая X позиция
      targetY: Math.random() * canvas.height,// Целевая Y позиция
      intensity: Math.random() * 0.4 + 0.5  // Интенсивность волны (от 0.5 до 0.9)
    }));

    // Каждые 4 секунды обновляем целевые точки для волн
    setInterval(() => {
      waves.forEach(wave => {
        wave.targetX = Math.random() * canvas.width;
        wave.targetY = Math.random() * canvas.height;
        wave.intensity = Math.random() * 0.3 + 0.5;
      });
    }, 4000);

    // Функция анимации, вызывается каждый кадр
    const animate = () => {
      if (!canvas || !ctx || !whiteCtx) return;

      // Заполняем основной canvas белым цветом
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Накладываем шум с прозрачностью 0.3
      ctx.globalAlpha = 0.4;
      ctx.drawImage(noiseCanvas, 0, 0);
      ctx.globalAlpha = 1.0;

      // Очищаем белый canvas
      whiteCtx.fillStyle = 'white';
      whiteCtx.fillRect(0, 0, whiteCanvas.width, whiteCanvas.height);

      // Настраиваем режим наложения для создания эффекта прозрачности
      whiteCtx.globalCompositeOperation = 'destination-out';

      // Обновляем и рисуем каждую волну
      waves.forEach(wave => {
        // Плавно перемещаем волну к целевой точке
        wave.x += (wave.targetX - wave.x) * 0.02;
        wave.y += (wave.targetY - wave.y) * 0.02;

        // Создаем радиальный градиент для волны
        const radius = Math.min(canvas.width, canvas.height) * 0.6;
        const gradient = whiteCtx.createRadialGradient(
          wave.x, wave.y, 0,
          wave.x, wave.y, radius
        );

        // Настраиваем градиент от центра к краям
        gradient.addColorStop(0, `rgba(255, 255, 255, ${wave.intensity})`);
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        // Применяем градиент и рисуем волну
        whiteCtx.fillStyle = gradient;
        whiteCtx.fillRect(0, 0, whiteCanvas.width, whiteCanvas.height);
      });
      whiteCtx.globalCompositeOperation = 'source-over';

      // Накладываем белый слой с волнами поверх шума
      ctx.globalAlpha = 0.9;
      ctx.drawImage(whiteCanvas, 0, 0);
      ctx.globalAlpha = 1.0;

      // Запрашиваем следующий кадр анимации
      requestAnimationFrame(animate);
    };

    // Запускаем анимацию
    animate();

    // Очищаем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []); // Пустой массив зависимостей - эффект выполняется только при монтировании

  // Рендерим canvas элемент
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0" // Tailwind классы для позиционирования
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        opacity: 0.9
      }}
    />
  );
} 