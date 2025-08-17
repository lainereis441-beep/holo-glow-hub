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
          x: isLeft ? ["0%", "-100%"] : ["0%", "100%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ width: "200%" }}
      >
        {/* Primeira repetição do texto */}
        <div className="flex whitespace-nowrap w-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={`first-${i}`}
              className="mx-6 text-lg font-bold bg-gradient-to-r from-neon-fuchsia via-neon-purple to-neon-cyan text-transparent bg-clip-text inline-block"
            >
              {text}
            </span>
          ))}
        </div>
        
        {/* Segunda repetição do texto para continuidade */}
        <div className="flex whitespace-nowrap w-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={`second-${i}`}
              className="mx-6 text-lg font-bold bg-gradient-to-r from-neon-fuchsia via-neon-purple to-neon-cyan text-transparent bg-clip-text inline-block"
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
    <div className="relative w-full overflow-hidden py-8 my-6">
      {/* Faixa superior - rolando para a esquerda, inclinada para baixo à direita */}
      <div className="relative z-10 mb-4">
        <AnimatedBanner 
          text="✦ ITALO MAICOM ✦ GESTOR DE TRÁFEGO ✦ CRIADOR DE SITES ✦ MENTOR DE ORATÓRIA ✦" 
          direction="left"
          rotateDirection="down"
          className="bg-gradient-to-r from-neon-fuchsia/15 to-neon-cyan/15 backdrop-blur-sm border-y border-neon-fuchsia/30"
        />
      </div>
      
      {/* Faixa inferior cruzada - rolando para a direita, inclinada para cima à direita */}
      <div className="relative z-20 -mt-8">
        <AnimatedBanner 
          text="★ RESULTADOS MENSURÁVEIS ★ DESIGN PREMIUM ★ CONVERSÃO GARANTIDA ★" 
          direction="right"
          rotateDirection="up"
          className="bg-gradient-to-r from-neon-cyan/15 to-neon-amber/15 backdrop-blur-sm border-y border-neon-cyan/30"
        />
      </div>
    </div>
  );
}