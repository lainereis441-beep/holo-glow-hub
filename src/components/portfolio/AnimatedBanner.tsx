
import React from "react";
import { motion } from "framer-motion";

interface AnimatedBannerProps {
  text: string;
  direction?: "left" | "right";
  className?: string;
  rotateDirection?: "up" | "down";
}

export function AnimatedBanner({ 
  text, 
  direction = "left", 
  className = "",
  rotateDirection = "up"
}: AnimatedBannerProps) {
  const isLeft = direction === "left";
  const rotateValue = rotateDirection === "up" ? "rotate-2" : "-rotate-2";
  
  return (
    <div className={`relative overflow-hidden py-4 ${rotateValue} ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: isLeft ? [0, "-50%"] : [0, "50%"]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ 
          width: "200%",
          display: "flex"
        }}
      >
        {/* Container com repetições do texto */}
        <div className="flex whitespace-nowrap" style={{ minWidth: "100%" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={`rep1-${i}`}
              className="mx-8 text-lg font-bold bg-gradient-to-r from-neon-fuchsia via-neon-purple to-neon-cyan text-transparent bg-clip-text flex-shrink-0"
            >
              {text}
            </span>
          ))}
        </div>
        
        {/* Segunda repetição para continuidade perfeita */}
        <div className="flex whitespace-nowrap" style={{ minWidth: "100%" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={`rep2-${i}`}
              className="mx-8 text-lg font-bold bg-gradient-to-r from-neon-fuchsia via-neon-purple to-neon-cyan text-transparent bg-clip-text flex-shrink-0"
            >
              {text}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function CrossedAnimatedBanners() {
  return (
    <div className="relative w-full overflow-hidden py-6 my-8">
      {/* Faixa superior - inclinada para baixo, rolando para esquerda */}
      <div className="relative z-10 mb-6">
        <AnimatedBanner 
          text="✦ ITALO MAICOM ✦ GESTOR DE TRÁFEGO ✦ CRIADOR DE SITES ✦ MENTOR DE ORATÓRIA ✦" 
          direction="left"
          rotateDirection="down"
          className="bg-gradient-to-r from-neon-fuchsia/20 to-neon-cyan/20 backdrop-blur-sm border-y border-neon-fuchsia/40"
        />
      </div>
      
      {/* Faixa inferior - inclinada para cima, rolando para direita, entrelaçada */}
      <div className="relative z-20 -mt-12">
        <AnimatedBanner 
          text="★ RESULTADOS MENSURÁVEIS ★ DESIGN PREMIUM ★ CONVERSÃO GARANTIDA ★ PERFORMANCE ALTA ★" 
          direction="right"
          rotateDirection="up"
          className="bg-gradient-to-r from-neon-cyan/20 to-neon-amber/20 backdrop-blur-sm border-y border-neon-cyan/40"
        />
      </div>
    </div>
  );
}
