import React from 'react';
import GallerySlider from './GallerySlider';

export default function GallerySection() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Galeria de Eventos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Momentos memoráveis dos nossos eventos
          </p>
        </div>
        
        <GallerySlider />
      </div>
    </section>
  );
}