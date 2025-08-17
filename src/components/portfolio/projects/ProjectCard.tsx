import React from "react";
import { ArrowRight } from "lucide-react";
import { AnimatedBorderCard } from "../AnimatedBorderCard";
import { NeonButton } from "../NeonButton";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  onContact: (projectId: number) => void;
}

export function ProjectCard({ project, onContact }: ProjectCardProps) {
  return (
    <AnimatedBorderCard>
      <div className="p-4">
        <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-glass-border">
          <img 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
            src={project.image} 
            alt={project.title}
          />
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-foreground">{project.title}</h4>
            <p className="text-sm text-text-subtle mt-1">{project.description}</p>
          </div>
          
          <NeonButton 
            onClick={() => onContact(project.id)}
            variant="secondary"
            size="sm"
          >
            <ArrowRight className="w-4 h-4" />
            Detalhes
          </NeonButton>
        </div>
      </div>
    </AnimatedBorderCard>
  );
}