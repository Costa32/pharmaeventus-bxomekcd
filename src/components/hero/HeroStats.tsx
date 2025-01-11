import React from 'react';
import { PartyPopper, Calendar, Users, Map } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: PartyPopper,
    value: "+500",
    label: "Eventos realizados com sucesso"
  },
  {
    icon: Calendar,
    value: "10 Anos",
    label: "De experiência"
  },
  {
    icon: Users,
    value: "+10.000",
    label: "Convidados atendidos"
  },
  {
    icon: Map,
    value: "+20 Estados",
    label: "Cobertura Nacional"
  }
];

export default function HeroStats() {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <Icon className="h-12 w-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}