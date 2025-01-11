import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroStats from './hero/HeroStats';
import WaveDivider from './dividers/WaveDivider';

export default function Hero() {
  return (
    <>
      <section id="home" className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center md:bg-left bg-no-repeat"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1734629286977-0448f1471fcb?auto=format&fit=crop&q=80&w=2070")`
            }}
          />
          <div className="absolute inset-0 bg-gray-900/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left">
          <HeroContent />
          <HeroStats />
        </div>
      </section>
      <WaveDivider />
    </>
  );
}