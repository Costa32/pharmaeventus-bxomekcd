import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Vamos tornar seu evento realidade
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-brand-light p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-primary text-white py-3 px-6 rounded-md hover:bg-brand-secondary transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-brand-primary mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">contato@pharmaeventus.com.br</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-brand-primary mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Telefone</h3>
                <p className="mt-1 text-gray-600">(71) 99999-9999</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-brand-primary mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Endereço</h3>
                <p className="mt-1 text-gray-600">
                  Av. Paulista, 1000<br />
                  São Paulo, SP<br />
                  CEP: 01310-100
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}