import React from "react";
import { 
  Phone, 
  Instagram, 
  Sparkles, 
  Rocket, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  PlayCircle 
} from "lucide-react";
import { NeonButton } from "@/components/portfolio/NeonButton";
import { AnimatedBorderCard } from "@/components/portfolio/AnimatedBorderCard";
import { FloatingImage } from "@/components/portfolio/FloatingImage";
import { FloatingImageWithEffects } from "@/components/portfolio/FloatingImageWithEffects";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { ServiceCard, type Service } from "@/components/portfolio/services/ServiceCard";
import { TestimonialCarousel } from "@/components/portfolio/testimonials/TestimonialCarousel";
import { ProjectCard, type Project } from "@/components/portfolio/projects/ProjectCard";
import { type Testimonial } from "@/components/portfolio/testimonials/TestimonialCard";
import { CrossedAnimatedBanners } from "@/components/portfolio/AnimatedBanner";

// Assets
import italoPortrait from "@/assets/italo-portrait-1.jpg";
import italoPortraitClean from "@/assets/italo-portrait-transparent.png";
import italoFullbodyClean from "@/assets/italo-fullbody-transparent.png";
import workSetup from "@/assets/work-setup-1.jpg";
import projectWebsite from "@/assets/project-website-1.jpg";
import speakingSetup from "@/assets/speaking-setup.jpg";

// Constants
const PHONE = "+5574974008239";
const IG_URL = "https://www.instagram.com/italomaicon28?igsh=bXpkMXZyOGx6Y3U5";

const services: Service[] = [
  {
    id: "trafego",
    title: "Gestão de Tráfego",
    desc: "Aquisição previsível com mídia paga, funis, criativos e métricas de ponta.",
    icon: <Rocket className="w-5 h-5" />,
    gradient: "fuchsia",
  },
  {
    id: "sites",
    title: "Criação de Sites & Apps",
    desc: "Websites, aplicativos e SaaS sob medida focados em conversão e escala.",
    icon: <Sparkles className="w-5 h-5" />,
    gradient: "cyan",
  },
  {
    id: "mentoria",
    title: "Mentoria de Oratória para Vendas",
    desc: "Estrutura, voz e persuasão para apresentações que fecham negócios.",
    icon: <PlayCircle className="w-5 h-5" />,
    gradient: "amber",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Ana Ribeiro",
    role: "CMO – StartUpX",
    quote: "O Italo triplicou nosso ROAS em 60 dias e organizou todo o funil. Virou peça-chave!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    stars: 5,
  },
  {
    name: "Carlos Mendes",
    role: "CEO – LojaMendes",
    quote: "Nosso novo site carrega em 0.8s e a taxa de conversão subiu 42%. Trabalho cirúrgico.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    stars: 5,
  },
  {
    name: "Julia Carvalho",
    role: "Head de Vendas – EduPro",
    quote: "A mentoria de oratória transformou nosso pitch. Fechamos 3 contratos na semana seguinte.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop",
    stars: 5,
  },
  {
    name: "Roberto Silva",
    role: "Diretor – TechFlow",
    quote: "O app que o Italo desenvolveu automatizou 80% dos nossos processos. ROI impressionante!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    stars: 5,
  },
  {
    name: "Mariana Costa",
    role: "Fundadora – BeautyStore",
    quote: "Estratégia de tráfego perfeita. Aumentamos as vendas em 300% em apenas 3 meses!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c3b5?q=80&w=200&auto=format&fit=crop",
    stars: 5,
  },
  {
    name: "Pedro Oliveira",
    role: "VP Comercial – InnovaTech",
    quote: "As apresentações ficaram muito mais impactantes. Nossa taxa de fechamento dobrou!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    stars: 5,
  },
  {
    name: "Fernanda Lima",
    role: "CEO – DigitalMax",
    quote: "Plataforma SaaS entregue no prazo e acima das expectativas. Parceiro estratégico!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    stars: 5,
  },
];

const projects: Project[] = [
  { id: 1, title: "E-commerce Premium", description: "Landing + Tráfego + CRM", image: projectWebsite },
  { id: 2, title: "SaaS Dashboard", description: "App Web + Analytics", image: workSetup },
  { id: 3, title: "Consultoria Digital", description: "Site + Funil + Automação", image: speakingSetup },
  { id: 4, title: "Marketplace B2B", description: "Plataforma + Integração", image: projectWebsite },
  { id: 5, title: "App Mobile", description: "React Native + Backend", image: workSetup },
  { id: 6, title: "Portal Educacional", description: "LMS + Gamificação", image: speakingSetup },
];

// Utility functions
function encodeMsg(msg: string): string {
  return encodeURIComponent(msg);
}

function waLink(message: string): string {
  return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeMsg(message)}`;
}

function msgFor(serviceId: string): string {
  const base = "Olá, Italo! Vim do seu portfólio e quero falar sobre: ";
  const map: Record<string, string> = {
    trafego: `${base}Gestão de Tráfego. Podemos agendar uma conversa?`,
    sites: `${base}Criação de Site/App/SaaS. Como começamos?`,
    mentoria: `${base}Mentoria de Oratória para Vendas. Quero detalhes.`,
    geral: `${base}Projeto sob medida. Pode me chamar?`,
  };
  return map[serviceId] || map.geral;
}

export default function Portfolio() {
  const handleServiceContact = (serviceId: string) => {
    window.open(waLink(msgFor(serviceId)), '_blank');
  };

  const handleProjectContact = (projectId: number) => {
    const message = encodeMsg(`Olá, Italo! Vi o Projeto ${projectId} e quero algo parecido.`);
    window.open(waLink(message), '_blank');
  };

  return (
    <div className="min-h-screen text-foreground bg-background overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute -top-28 -right-32 w-[42rem] h-[42rem] bg-gradient-to-br from-neon-fuchsia/25 to-neon-cyan/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -left-20 w-[36rem] h-[36rem] bg-gradient-to-br from-indigo-600/20 to-neon-pink/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[26rem] h-[26rem] bg-neon-cyan/10 rounded-full blur-[90px]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-background/50 border-b border-glass-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-neon-fuchsia to-neon-cyan" />
            <span className="font-semibold tracking-wide">Italo Maicom</span>
          </div>
          <div className="flex items-center gap-3">
            <NeonButton href={waLink(msgFor("geral"))}>
              <Phone className="w-4 h-4" /> Fale comigo
            </NeonButton>
            <NeonButton href={IG_URL} variant="secondary">
              <Instagram className="w-4 h-4" /> Instagram
            </NeonButton>
          </div>
        </div>
      </header>

      {/* Animated Banners */}
      <CrossedAnimatedBanners />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 pt-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-glass-bg ring-1 ring-glass-border">
              <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
              <span className="text-text-muted">Portfólio Futurista</span>
            </div>
            
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              <span className="bg-gradient-text text-transparent bg-clip-text">
                Italo Maicom
              </span>
              <br />
              <span className="text-foreground/80 font-semibold text-2xl sm:text-3xl lg:text-4xl">Gestor de Tráfego</span>
              <br />
              <span className="text-foreground/80 font-semibold text-2xl sm:text-3xl lg:text-4xl">Criador de Sites, Apps & SaaS</span>
              <br />
              <span className="text-foreground/80 font-semibold text-2xl sm:text-3xl lg:text-4xl">Mentor de Oratória para Vendas</span>
            </h1>
            
            <p className="mt-6 text-text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed text-lg">
              Construo sistemas que vendem: da aquisição à conversão, do pitch ao pós-venda. 
              Efeito magnético, visual premium e resultados mensuráveis.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              {services.map((service) => (
                <NeonButton 
                  key={service.id} 
                  onClick={() => handleServiceContact(service.id)}
                  variant="primary"
                >
                  <ArrowRight className="w-4 h-4" />
                  Falar sobre {service.title}
                </NeonButton>
              ))}
            </div>
            
            <ul className="mt-8 grid sm:grid-cols-3 gap-3 text-sm text-text-muted justify-center lg:justify-start">
              {["ROAS acima da média", "Sites ultra rápidos", "Pitch que converte"].map((benefit, i) => (
                <li key={i} className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-neon-cyan" /> 
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Floating Images with Special Effects */}
          <div className="relative grid grid-cols-2 gap-6 max-w-md mx-auto">
            <FloatingImageWithEffects
              src={italoPortraitClean}
              alt="Italo Maicom - Retrato profissional"
              className="h-64 w-full drop-shadow-2xl"
              hasEffects={true}
            />
            <FloatingImage
              src={workSetup}
              alt="Setup de trabalho"
              className="h-48 mt-12"
              delay={1}
            />
            <FloatingImage
              src={projectWebsite}
              alt="Projeto de website"
              className="h-52"
              delay={2}
            />
            <FloatingImageWithEffects
              src={italoFullbodyClean}
              alt="Italo Maicom - Foto completa"
              className="h-72 mt-8 drop-shadow-2xl"
              delay={3}
              hasEffects={true}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            kicker="Serviços focados em resultado"
            title="O que eu faço"
            subtitle="Estratégia + Execução com base em dados e estética magnetizante."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onContact={handleServiceContact}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            kicker="Portfólio" 
            title="Alguns projetos" 
            subtitle="Cases reais com resultados comprovados. Cada projeto tem borda animada e efeito magnético." 
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onContact={handleProjectContact}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            kicker="Prova social" 
            title="Depoimentos" 
            subtitle="Carrossel com fotos e avaliações reais de clientes satisfeitos." 
          />
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedBorderCard>
            <div className="p-10 grid md:grid-cols-2 gap-10 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold bg-gradient-text text-transparent bg-clip-text">
                  Bora tirar sua ideia do papel?
                </h3>
                <p className="text-text-muted mt-4 leading-relaxed text-lg">
                  Me chame no WhatsApp e já chego com uma proposta objetiva para seu negócio.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                  <NeonButton href={waLink(msgFor("geral"))}>
                    <Phone className="w-4 h-4" /> Fale comigo agora
                  </NeonButton>
                  <NeonButton href={IG_URL} variant="secondary">
                    <Instagram className="w-4 h-4" /> @italomaicon28
                  </NeonButton>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                <FloatingImage
                  src={italoPortrait}
                  alt="Chamada para ação 1"
                  className="h-44"
                />
                <FloatingImage
                  src={workSetup}
                  alt="Chamada para ação 2"
                  className="h-60"
                  delay={1}
                />
                <FloatingImage
                  src={projectWebsite}
                  alt="Chamada para ação 3"
                  className="h-56"
                  delay={2}
                />
                <FloatingImage
                  src={speakingSetup}
                  alt="Chamada para ação 4"
                  className="h-48"
                  delay={3}
                />
              </div>
            </div>
          </AnimatedBorderCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-glass-border">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 text-sm text-text-subtle">
            <div className="text-center sm:text-left">
              <div className="font-semibold text-foreground/80 text-lg">Italo Maicom</div>
              <p className="mt-3 leading-relaxed">
                Gestor de Tráfego • Criador de Sites/Apps/SaaS • Mentor de Oratória para Vendas
              </p>
            </div>
            
            <div className="text-center sm:text-left">
              <div className="font-semibold text-foreground/80 text-lg">Contato</div>
              <ul className="mt-3 space-y-3">
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <Phone className="w-4 h-4 text-neon-cyan" /> {PHONE}
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <Instagram className="w-4 h-4 text-neon-cyan" />{" "}
                  <a 
                    href={IG_URL} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-foreground transition-colors"
                  >
                    @italomaicon28
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="text-center sm:text-left">
              <div className="font-semibold text-foreground/80 text-lg">Ação rápida</div>
              <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
                {services.map((service) => (
                  <NeonButton 
                    key={service.id} 
                    onClick={() => handleServiceContact(service.id)}
                    variant="secondary"
                    size="sm"
                  >
                    {service.title}
                  </NeonButton>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center text-xs text-text-faint pt-8 border-t border-glass-border/50 mt-8">
            © {new Date().getFullYear()} Italo Maicom. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}