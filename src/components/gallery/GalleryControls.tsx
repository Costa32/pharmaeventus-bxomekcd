import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function GalleryControls({ onPrevious, onNext }: GalleryControlsProps) {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </>
  );
}