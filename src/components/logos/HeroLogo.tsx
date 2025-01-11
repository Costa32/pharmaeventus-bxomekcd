import React from 'react';
import PharmaeventusSVG from './PharmaeventusSVG';

export default function HeroLogo() {
  return (
    <div className="mb-16 hidden md:block animate-fadeInTop">
      <div className="relative w-96 h-06">
        <PharmaeventusSVG />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full blur-3xl -z-10" />
      </div>
    </div>
  );
}