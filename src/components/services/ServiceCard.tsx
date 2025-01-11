import React from 'react';
import { Service } from '../../data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative p-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="text-brand-primary">
              <Icon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
          </div>
          <p className="text-gray-600">{service.description}</p>
        </div>
      </div>
    </div>
  );
}