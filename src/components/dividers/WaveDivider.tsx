import React from 'react';

export default function WaveDivider() {
  return (
    <div className="relative h-48 bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/75 to-transparent" />
      <svg
        className="absolute bottom-0 w-full h-24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}