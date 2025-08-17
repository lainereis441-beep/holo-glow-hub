import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedBorderCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: "primary" | "cyan" | "fuchsia" | "amber" | "custom";
  customGradient?: string;
}

const gradientStyles = {
  primary: "from-neon-fuchsia via-neon-purple to-neon-cyan",
  cyan: "from-neon-cyan via-blue-500 to-indigo-500",
  fuchsia: "from-neon-fuchsia via-neon-pink to-red-500",
  amber: "from-neon-amber via-orange-500 to-red-500",
  custom: ""
};

export function AnimatedBorderCard({ 
  children, 
  className = "",
  gradient = "primary",
  customGradient
}: AnimatedBorderCardProps) {
  const gradientClass = customGradient || gradientStyles[gradient];

  return (
    <div className={cn("relative p-[1px] rounded-3xl bg-transparent", className)}>
      {/* Animated border */}
      <div className={cn(
        "absolute inset-0 rounded-3xl bg-gradient-to-r animate-border-spin blur-[6px] opacity-70",
        gradientClass
      )} />
      
      {/* Content container */}
      <div className="relative rounded-3xl bg-glass-bg backdrop-blur-xl border border-glass-border">
        {children}
      </div>
    </div>
  );
}