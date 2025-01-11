import { LucideIcon, GraduationCap, Globe, Video, BookOpen, Users, Radio, Calendar, Microscope, PenTool, MonitorPlay } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  category: 'congress' | 'courses' | 'digital';
}

export const services: Service[] = [
  {
    icon: GraduationCap,
    title: "Congressos Científicos",
    description: "Organização completa de congressos nacionais e internacionais com gestão de submissões e avaliações.",
    category: 'congress'
  },
  {
    icon: Microscope,
    title: "Simpósios Acadêmicos",
    description: "Coordenação de simpósios temáticos com integração entre pesquisadores e instituições.",
    category: 'congress'
  },
  {
    icon: Users,
    title: "Workshops Especializados",
    description: "Eventos práticos e interativos com especialistas renomados em suas áreas.",
    category: 'congress'
  },
  {
    icon: BookOpen,
    title: "Cursos Online",
    description: "Plataforma completa para cursos EAD com certificação e material didático.",
    category: 'courses'
  },
  {
    icon: PenTool,
    title: "Capacitação Profissional",
    description: "Programas de formação continuada para profissionais e pesquisadores.",
    category: 'courses'
  },
  {
    icon: Globe,
    title: "Eventos Híbridos",
    description: "Integração perfeita entre participantes presenciais e remotos.",
    category: 'digital'
  },
  {
    icon: Video,
    title: "Transmissão de Lives",
    description: "Produção profissional de lives com múltiplas câmeras e interação em tempo real.",
    category: 'digital'
  },
  {
    icon: Radio,
    title: "Webinars Científicos",
    description: "Seminários online com ferramentas de interação e networking.",
    category: 'digital'
  },
  {
    icon: MonitorPlay,
    title: "Plataforma de Streaming",
    description: "Sistema próprio para transmissão de conteúdo científico com alta qualidade.",
    category: 'digital'
  },
  {
    icon: Calendar,
    title: "Gestão de Eventos",
    description: "Sistema completo para inscrições, pagamentos e emissão de certificados.",
    category: 'congress'
  }
];