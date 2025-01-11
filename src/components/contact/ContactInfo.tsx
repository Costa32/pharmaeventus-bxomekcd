import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../../data/contactInfo';

export default function ContactInfo() {
  const { email, phone, address } = contactInfo;
  
  return (
    <div className="space-y-8">
      <div className="flex items-start space-x-4">
        <Mail className="h-6 w-6 text-brand-primary mt-1" />
        <div>
          <h3 className="text-lg font-medium text-gray-900">Email</h3>
          <p className="mt-1 text-gray-600">{email}</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Phone className="h-6 w-6 text-brand-primary mt-1" />
        <div>
          <h3 className="text-lg font-medium text-gray-900">Telefone</h3>
          <p className="mt-1 text-gray-600">{phone}</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <MapPin className="h-6 w-6 text-brand-primary mt-1" />
        <div>
          <h3 className="text-lg font-medium text-gray-900">Endereço</h3>
          <p className="mt-1 text-gray-600">
            {address.building}, {address.suite}<br />
            {address.neighborhood}<br />
            {address.city} - {address.state}<br />
            CEP: {address.zipCode}
          </p>
        </div>
      </div>
    </div>
  );
}