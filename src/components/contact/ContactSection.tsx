import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactSection() {
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
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}