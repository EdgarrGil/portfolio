"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AvatarProps {
  className?: string;
}

const Avatar = ({ className = "" }: AvatarProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // This function would draw the avatar image using the canvas API
  // For now, I'm just using a basic representation similar to the provided image
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set background color to match the image (olive/greenish)
    ctx.fillStyle = '#5a5e44';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw head circle (slightly peachy/beige color)
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width * 0.33, 0, Math.PI * 2);
    ctx.fillStyle = '#e6b99c';
    ctx.fill();

    // Draw eyes (dark brown)
    ctx.fillStyle = '#3a2a20';
    
    // Left eye
    ctx.beginPath();
    ctx.ellipse(canvas.width * 0.42, canvas.height * 0.45, 8, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Right eye
    ctx.beginPath();
    ctx.ellipse(canvas.width * 0.58, canvas.height * 0.45, 8, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Draw eyebrows (dark brown)
    ctx.fillStyle = '#3a2a20';
    
    // Left eyebrow
    ctx.beginPath();
    ctx.rect(canvas.width * 0.36, canvas.height * 0.38, 20, 4);
    ctx.fill();
    
    // Right eyebrow
    ctx.beginPath();
    ctx.rect(canvas.width * 0.52, canvas.height * 0.38, 20, 4);
    ctx.fill();

    // Draw beard (dark brown)
    ctx.fillStyle = '#3a2a20';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height * 0.6, canvas.width * 0.15, 0, Math.PI);
    ctx.fill();

    // Add some beard details
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.4, canvas.height * 0.6);
    ctx.lineTo(canvas.width * 0.35, canvas.height * 0.7);
    ctx.lineTo(canvas.width * 0.65, canvas.height * 0.7);
    ctx.lineTo(canvas.width * 0.6, canvas.height * 0.6);
    ctx.fillStyle = '#3a2a20';
    ctx.fill();

    // Draw clothing (white shirt with collar)
    ctx.fillStyle = '#f0f0f0';
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.3, canvas.height * 0.85);
    ctx.lineTo(canvas.width * 0.7, canvas.height * 0.85);
    ctx.lineTo(canvas.width * 0.8, canvas.height);
    ctx.lineTo(canvas.width * 0.2, canvas.height);
    ctx.fill();

    // Draw collar
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.5, canvas.height * 0.75);
    ctx.lineTo(canvas.width * 0.5, canvas.height * 0.9);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(canvas.width * 0.5, canvas.height * 0.75, 15, 0, Math.PI, true);
    ctx.stroke();

  }, []);

  return (
    <motion.div
      className={`rounded-full overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <canvas 
        ref={canvasRef} 
        width={300} 
        height={300} 
        className="w-full h-full"
      />
    </motion.div>
  );
};

export default Avatar; 