import React from 'react';
import { Service } from '../../data/services';
import ServiceCard from './ServiceCard';

interface ServiceCategoryProps {
  title: string;
  description: string;
  services: Service[];
}

export default function ServiceCategory({ title, description, services }: ServiceCategoryProps) {
  return (
    <div className="mb-16 last:mb-0">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-lg text-gray-600 mb-8">{description}</p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}