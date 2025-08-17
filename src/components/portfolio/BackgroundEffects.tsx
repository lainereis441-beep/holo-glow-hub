import React from "react";
import { motion } from "framer-motion";

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-28 -right-32 w-[42rem] h-[42rem] bg-gradient-to-br from-neon-fuchsia/25 to-neon-cyan/20 rounded-full blur-[120px]"
        animate={{ 
          x: [0, -20, 20, 0],
          y: [0, 20, -20, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 -left-20 w-[36rem] h-[36rem] bg-gradient-to-br from-indigo-600/20 to-neon-pink/20 rounded-full blur-[120px]"
        animate={{ 
          x: [0, 30, -30, 0],
          y: [0, -25, 25, 0],
          scale: [1, 0.8, 1.2, 1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-1/3 w-[26rem] h-[26rem] bg-neon-cyan/10 rounded-full blur-[90px]"
        animate={{ 
          x: [0, -15, 15, 0],
          y: [0, 15, -15, 0],
          scale: [1, 1.3, 0.7, 1]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
      />
      
      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-neon-cyan/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--neon-cyan)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--neon-cyan)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />
    </div>
  );
};