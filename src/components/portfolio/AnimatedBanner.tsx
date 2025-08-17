import React from "react";
import { motion } from "framer-motion";

interface AnimatedBannerProps {
  text: string;
  direction?: "left" | "right";
  className?: string;
}

export function AnimatedBanner({ 
  text, 
  direction = "left", 
  className = "" 
}: AnimatedBannerProps) {
  const isLeft = direction === "left";
  
  return (
    <div className={`relative overflow-hidden py-3 ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: isLeft ? [0, -1500] : [0, 1500]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Repetimos o texto múltiplas vezes para garantir preenchimento contínuo */}
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="mx-6 text-lg font-bold bg-gradient-to-r from-neon-fuchsia via-neon-purple to-neon-cyan text-transparent bg-clip-text"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function CrossedAnimatedBanners() {
  return (
    <div className="relative w-full overflow-hidden py-6 my-8">
      {/* Faixa superior - rolando para a esquerda */}
      <div className="relative z-10 mb-2">
        <AnimatedBanner 
          text="✦ ITALO MAICOM ✦ GESTOR DE TRÁFEGO ✦ CRIADOR DE SITES ✦ MENTOR DE ORATÓRIA ✦" 
          direction="left"
          className="bg-gradient-to-r from-neon-fuchsia/15 to-neon-cyan/15 backdrop-blur-sm border-y border-neon-fuchsia/30"
        />
      </div>
      
      {/* Faixa inferior cruzada - rolando para a direita */}
      <div className="relative z-20 transform -skew-y-2">
        <AnimatedBanner 
          text="★ RESULTADOS MENSURÁVEIS ★ DESIGN PREMIUM ★ CONVERSÃO GARANTIDA ★" 
          direction="right"
          className="bg-gradient-to-r from-neon-cyan/15 to-neon-amber/15 backdrop-blur-sm border-y border-neon-cyan/30"
        />
      </div>
    </div>
  );
}