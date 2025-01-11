export interface Testimonial {
  content: string;
  name: string;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    content: "A Pharmaeventus superou todas as expectativas na organização do nosso congresso internacional. A equipe é extremamente profissional e atenciosa.",
    name: "Dra. Maria Silva",
    role: "Diretora de Pesquisa",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    content: "Excelente suporte técnico durante todo o evento virtual. A plataforma é intuitiva e a transmissão foi impecável.",
    name: "Dr. João Santos",
    role: "Coordenador Acadêmico",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    content: "A gestão do evento foi perfeita, desde a organização até a emissão dos certificados. Recomendo fortemente!",
    name: "Profa. Ana Costa",
    role: "Presidente do Congresso",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];