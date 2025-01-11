import React from 'react';

interface GalleryIndicatorsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export default function GalleryIndicators({ total, current, onChange }: GalleryIndicatorsProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === current 
              ? 'bg-white w-4' 
              : 'bg-white/50 hover:bg-white/75'
          }`}
        />
      ))}
    </div>
  );
}