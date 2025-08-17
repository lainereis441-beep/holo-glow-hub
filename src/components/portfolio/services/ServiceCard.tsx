import React from "react";
import { MessageCircle } from "lucide-react";
import { MagneticCard } from "../MagneticCard";
import { NeonButton } from "../NeonButton";

export interface Service {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  gradient: "primary" | "cyan" | "fuchsia" | "amber";
}

interface ServiceCardProps {
  service: Service;
  onContact: (serviceId: string) => void;
}

export function ServiceCard({ service, onContact }: ServiceCardProps) {
  return (
    <MagneticCard gradient={service.gradient}>
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 text-neon-cyan">
          <div className="p-2 rounded-xl bg-glass-bg ring-1 ring-glass-border">
            {service.icon}
          </div>
          <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
        </div>
        
        <p className="text-text-muted mt-3 flex-1 leading-relaxed">
          {service.desc}
        </p>
        
        <div className="mt-5">
          <NeonButton 
            onClick={() => onContact(service.id)}
            variant="primary"
            size="md"
          >
            <MessageCircle className="w-4 h-4" />
            Quero este serviço
          </NeonButton>
        </div>
      </div>
    </MagneticCard>
  );
}