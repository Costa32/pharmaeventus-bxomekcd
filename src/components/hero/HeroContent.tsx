import React from 'react';
import HeroLogo from '../logos/HeroLogo';

export default function HeroContent() {
  return (
    <div className="relative z-10 flex items-center min-h-screen px-4 sm:px-10">
      <div className="w-full text-center sm:text-left">
        <HeroLogo />
        <h1 className="text-[36px] md:text-6xl font-thin tracking-tight text-white mx-auto sm:mx-0 max-w-[90%] sm:max-w-[80%] md:max-w-[50%] mb-4 animate-fadeInLeft leading-snug" 
          style={{ animationDelay: '0.2s' }}>
          EXCELÊNCIA EM ORGANIZAÇÃO DE EVENTOS CIENTÍFICOS E ACADÊMICOS
        </h1>
        
        <p className="text-[20px] text-white mt-8 mb-16 mx-auto sm:mx-0 max-w-[90%] sm:max-w-[80%] md:max-w-[90%] animate-fadeInLeft leading-relaxed" 
          style={{ animationDelay: '0.4s' }}>
          Especialistas em criar experiências memoráveis para congressos, simpósios e conferências científicas. 
        </p>
        
        <a 
          href="#contact"
          className="btn inline-flex text-[9px] hover:text-sm font-semibold rounded-full border border-deep-pink-900 text-white px-4 py-2 transition-all hover:bg-deep-pink-900 hover:text-white animate-fadeInLeft items-center"
          style={{ animationDelay: '0.6s' }}
        >
          SAIBA MAIS 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 text-white ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  );
}