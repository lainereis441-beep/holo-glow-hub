import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  kicker: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ kicker, title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl mx-auto text-center mb-10", className)}>
      <div className="text-xs tracking-widest uppercase text-neon-cyan/80 font-medium">
        {kicker}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-text text-transparent bg-clip-text mt-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted mt-3 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}