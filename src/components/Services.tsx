import React from 'react';
import { services } from '../data/services';
import ServiceCategory from './services/ServiceCategory';

export default function Services() {
  const congressServices = services.filter(s => s.category === 'congress');
  const courseServices = services.filter(s => s.category === 'courses');
  const digitalServices = services.filter(s => s.category === 'digital');

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Soluções completas para eventos científicos e acadêmicos
          </p>
        </div>

        <ServiceCategory
          title="Congressos e Eventos Científicos"
          description="Organização completa de eventos acadêmicos com foco em resultados e networking"
          services={congressServices}
        />

        <ServiceCategory
          title="Cursos e Capacitação"
          description="Plataforma integrada para educação continuada e desenvolvimento profissional"
          services={courseServices}
        />

        <ServiceCategory
          title="Soluções Digitais"
          description="Tecnologia de ponta para transmissão e interação em eventos virtuais"
          services={digitalServices}
        />
      </div>
    </section>
  );
}