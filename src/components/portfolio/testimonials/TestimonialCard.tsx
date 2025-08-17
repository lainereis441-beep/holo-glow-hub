import React from "react";
import { Star } from "lucide-react";
import { AnimatedBorderCard } from "../AnimatedBorderCard";

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  stars: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1 text-neon-amber">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-neon-amber" />
      ))}
    </div>
  );
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <AnimatedBorderCard>
      <div className="p-5 flex gap-4 items-start">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-glass-border"
        />
        <div className="flex-1">
          <StarRow count={testimonial.stars} />
          <p className="text-foreground/90 mt-2 leading-relaxed">
            "{testimonial.quote}"
          </p>
          <div className="mt-3 text-sm text-text-subtle">
            <span className="font-semibold text-foreground/80">
              {testimonial.name}
            </span>{" "}
            • {testimonial.role}
          </div>
        </div>
      </div>
    </AnimatedBorderCard>
  );
}