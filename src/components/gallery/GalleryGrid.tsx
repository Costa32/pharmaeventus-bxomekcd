import React from 'react';
import { GalleryImage } from '../../data/galleryImages';

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-[4/3] group overflow-hidden rounded-lg">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${image.url})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-lg font-semibold mb-1">{image.title}</h3>
              <p className="text-white/90 text-sm">{image.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}