import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingImageWithEffectsProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  hasEffects?: boolean;
}

export function FloatingImageWithEffects({ 
  src, 
  alt, 
  className = "", 
  delay = 0,
  hasEffects = false 
}: FloatingImageWithEffectsProps) {
  return (
    <div className="relative">
      {/* Efeitos ao redor da imagem */}
      {hasEffects && (
        <>
          {/* Círculos flutuantes */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-fuchsia rounded-full blur-sm opacity-80"
            animate={{ 
              y: [-5, 5, -5],
              x: [-3, 3, -3],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: delay + 0.5
            }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-neon-amber to-neon-pink rounded-full blur-sm opacity-70"
            animate={{ 
              y: [3, -3, 3],
              x: [2, -2, 2],
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: delay + 1
            }}
          />
          <motion.div
            className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-neon-fuchsia to-neon-cyan rounded-full blur-sm opacity-60"
            animate={{ 
              y: [-4, 4, -4],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: delay + 1.5
            }}
          />
          
          {/* Partículas brilhantes */}
          <motion.div
            className="absolute top-0 right-0 w-2 h-2 bg-neon-amber rounded-full opacity-90"
            animate={{ 
              opacity: [0.9, 0.3, 0.9],
              scale: [1, 0.5, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: delay + 2
            }}
          />
          <motion.div
            className="absolute bottom-4 right-2 w-1.5 h-1.5 bg-neon-cyan rounded-full opacity-80"
            animate={{ 
              opacity: [0.8, 0.2, 0.8],
              scale: [1, 0.3, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: delay + 2.5
            }}
          />
          
          {/* Aura brilhante */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-neon-fuchsia/20 via-transparent to-neon-cyan/20 blur-xl"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: delay
            }}
          />
        </>
      )}
      
      {/* Imagem principal */}
      <motion.img
        src={src}
        alt={alt}
        className={cn(
          "relative z-10 object-cover rounded-3xl shadow-2xl ring-1 ring-glass-border",
          hasEffects ? "shadow-neon-fuchsia/30" : "shadow-neon-fuchsia/20",
          className
        )}
        initial={{ y: 10, rotate: -1 }}
        animate={{ 
          y: [10, -10, 10], 
          rotate: [-1, 1, -1] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay 
        }}
      />
    </div>
  );
}