import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export function FloatingImage({ src, alt, className = "", delay = 0 }: FloatingImageProps) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={cn(
        "object-cover rounded-3xl shadow-2xl ring-1 ring-glass-border",
        "shadow-neon-fuchsia/20",
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
  );
}