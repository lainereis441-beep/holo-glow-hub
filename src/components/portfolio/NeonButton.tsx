import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
}

function useMagnet(ref: React.RefObject<HTMLElement>, strength = 26) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    function onMouseMove(e: MouseEvent) {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.sqrt(relX ** 2 + relY ** 2);
      const maxDist = Math.max(rect.width, rect.height);
      const pull = Math.max(0, 1 - dist / maxDist);
      x.set((relX / rect.width) * strength * pull);
      y.set((relY / rect.height) * strength * pull);
    }

    function onLeave() {
      x.set(0);
      y.set(0);
    }

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, x, y, strength]);

  return { x: springX, y: springY };
}

const variantStyles = {
  primary: "bg-gradient-primary shadow-neon hover:shadow-neon-hover",
  secondary: "bg-glass-bg backdrop-blur-xl border border-glass-border hover:bg-glass-border",
  accent: "bg-gradient-to-r from-neon-cyan to-neon-fuchsia shadow-glow-cyan hover:shadow-glow-fuchsia"
};

const sizeStyles = {
  sm: "px-3 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-4 text-base"
};

export function NeonButton({ 
  href, 
  onClick, 
  children, 
  className = "", 
  variant = "primary",
  size = "md"
}: NeonButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { x, y } = useMagnet(ref, 26);

  const Component = href ? "a" : "button";
  const props = href 
    ? { 
        href, 
        target: href.startsWith("http") ? "_blank" : undefined,
        rel: href.startsWith("http") ? "noopener noreferrer" : undefined
      }
    : { onClick };

  return (
    <motion.div style={{ x, y }}>
      <Component
        ref={ref as any}
        {...props}
        className={cn(
          "relative inline-flex items-center gap-2 rounded-2xl font-semibold transition-all duration-300",
          "text-foreground hover:scale-105 active:scale-95",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
      >
        {children}
      </Component>
    </motion.div>
  );
}