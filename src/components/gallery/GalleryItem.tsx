import React from 'react';
import { GalleryImage } from './galleryData';

interface GalleryItemProps {
  image: GalleryImage;
}

export default function GalleryItem({ image }: GalleryItemProps) {
  return (
    <div className="w-1/4 flex-shrink-0 px-2">
      <div className="group relative overflow-hidden bg-gray-900 rounded-lg">
        <figure>
          <div className="aspect-square overflow-hidden">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <figcaption className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
            <div className="text-center">
              <h3 className="text-white font-semibold text-lg">{image.title}</h3>
              <p className="text-white/80 text-sm mt-2">{image.description}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}