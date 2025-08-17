import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TestimonialCard, type Testimonial } from "./TestimonialCard";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const len = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % len), 4000);
    return () => clearInterval(id);
  }, [len]);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{ x: `-${index * 100}%` }}
        transition={{ type: "spring", stiffness: 90, damping: 16 }}
        style={{ width: `${len * 100}%` }}
      >
        {testimonials.map((testimonial, i) => (
          <div key={i} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </motion.div>
      
      {/* Dots navigation */}
      <div className="flex gap-2 justify-center mt-6">
        {testimonials.map((_, i) => (
          <button
            aria-label={`Ir para depoimento ${i + 1}`}
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === index 
                ? "bg-neon-cyan w-6 shadow-glow-cyan" 
                : "bg-text-faint hover:bg-text-subtle"
            }`}
          />
        ))}
      </div>
    </div>
  );
}