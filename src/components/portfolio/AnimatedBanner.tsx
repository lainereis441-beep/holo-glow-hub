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
    <div className={`relative overflow-hidden py-4 ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: isLeft ? [0, -2000] : [0, 2000]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Repetimos o texto múltiplas vezes para garantir preenchimento contínuo */}
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="mx-8 text-2xl font-bold bg-gradient-to-r from-neon-fuchsia via-neon-purple to-neon-cyan text-transparent bg-clip-text"
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
    <div className="relative py-8 overflow-hidden">
      {/* Faixa superior - rolando para a esquerda */}
      <div className="relative z-10">
        <AnimatedBanner 
          text="✦ ITALO MAICOM ✦ GESTOR DE TRÁFEGO ✦ CRIADOR DE SITES ✦ MENTOR DE ORATÓRIA ✦" 
          direction="left"
          className="bg-gradient-to-r from-neon-fuchsia/10 to-neon-cyan/10 backdrop-blur-sm border-y border-neon-fuchsia/20"
        />
      </div>
      
      {/* Faixa inferior cruzada - rolando para a direita */}
      <div className="relative -mt-4 z-20 transform rotate-3">
        <AnimatedBanner 
          text="★ RESULTADOS MENSURÁVEIS ★ DESIGN PREMIUM ★ CONVERSÃO GARANTIDA ★" 
          direction="right"
          className="bg-gradient-to-r from-neon-cyan/10 to-neon-amber/10 backdrop-blur-sm border-y border-neon-cyan/20"
        />
      </div>
    </div>
  );
}