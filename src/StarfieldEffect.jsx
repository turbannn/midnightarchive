import { useEffect, useRef } from 'react';
import './StarfieldEffect.css';

const defaultConfig = {
  numStars: 120,
  speedMin: 0.05,
  speedMax: 0.2,
  radiusMin: 0.3,
  radiusMax: 1.5,
  alphaMin: 0.3,
  alphaMax: 0.8,
  spikeChance: 0.1,
  spikeLength: 3,
  glowIntensity: 8
};

const starColors = [
  '#ffffff',
  '#ffe9c4',
  '#b5d0ff',
  '#f7f7a8',
  '#c4e1ff',
  '#ffd700',
  '#ffb347'
];

function StarfieldEffect({ config = defaultConfig }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return undefined;
    }

    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars = [];
    let animationFrameId;

    const initStars = () => {
      const speedRange = config.speedMax - config.speedMin;
      const radiusRange = config.radiusMax - config.radiusMin;
      const alphaRange = config.alphaMax - config.alphaMin;

      stars = [];
      for (let i = 0; i < config.numStars; i += 1) {
        stars.push({
          positionX: Math.random() * width,
          positionY: Math.random() * height,
          radius: Math.random() * radiusRange + config.radiusMin,
          alpha: Math.random() * alphaRange + config.alphaMin,
          stepSizeX: (Math.random() - 0.5) * speedRange + config.speedMin,
          stepSizeY: (Math.random() - 0.5) * speedRange + config.speedMin,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          hasSpikes: Math.random() < config.spikeChance
        });
      }
    };

    const drawStars = () => {
      context.clearRect(0, 0, width, height);

      for (const star of stars) {
        context.save();
        context.globalAlpha = star.alpha;

        if (star.hasSpikes) {
          const numSpikes = 6;
          const spikeLength = star.radius * config.spikeLength + Math.random() * 2;
          const spikeWidth = Math.max(0.5, star.radius * 0.5);

          for (let i = 0; i < numSpikes; i += 1) {
            const angle = (i * Math.PI) / (numSpikes / 2);

            context.save();
            context.translate(star.positionX, star.positionY);
            context.rotate(angle);
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, -spikeLength);
            context.strokeStyle = star.color;
            context.shadowColor = star.color;
            context.shadowBlur = config.glowIntensity;
            context.lineWidth = spikeWidth;
            context.globalAlpha = star.alpha * 0.7;
            context.stroke();
            context.restore();
          }
        }

        context.beginPath();
        context.arc(star.positionX, star.positionY, star.radius, 0, 2 * Math.PI);
        context.fillStyle = star.color;
        context.shadowColor = star.color;
        context.shadowBlur = config.glowIntensity;
        context.globalAlpha = star.alpha;
        context.fill();
        context.restore();

        star.positionX += star.stepSizeX;
        star.positionY += star.stepSizeY;

        if (star.positionX < 0) star.positionX = width;
        if (star.positionX > width) star.positionX = 0;
        if (star.positionY < 0) star.positionY = height;
        if (star.positionY > height) star.positionY = 0;
      }

      animationFrameId = requestAnimationFrame(drawStars);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    canvas.width = width;
    canvas.height = height;
    initStars();
    drawStars();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [config]);

  return <canvas className="starfield-canvas" ref={canvasRef} />;
}

export default StarfieldEffect;
