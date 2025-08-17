import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { AnimatedBorderCard } from "./AnimatedBorderCard";

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: "primary" | "cyan" | "fuchsia" | "amber" | "custom";
  customGradient?: string;
  strength?: number;
}

function useMagnet(ref: React.RefObject<HTMLElement>, strength = 22) {
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

export function MagneticCard({ 
  children, 
  className = "", 
  gradient = "primary",
  customGradient,
  strength = 22 
}: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useMagnet(ref, strength);

  return (
    <motion.div ref={ref} style={{ x, y }} className="h-full">
      <AnimatedBorderCard 
        gradient={gradient} 
        customGradient={customGradient}
        className={className}
      >
        {children}
      </AnimatedBorderCard>
    </motion.div>
  );
}