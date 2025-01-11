import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function GalleryPagination({ currentPage, totalPages, onPageChange }: GalleryPaginationProps) {
  return (
    <div className="flex items-center justify-center space-x-4 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
        className="p-2 rounded-full bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              currentPage === index
                ? 'bg-brand-primary text-white'
                : 'bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        className="p-2 rounded-full bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}