import React from 'react';
import Logo from '../Logo';

export default function NavbarLogo() {
  return (
    <div className="flex items-center">
      <Logo className="h-8 w-8 text-brand-primary" />
      <span className="ml-3 text-xl font-bold text-brand-primary">pharmaeventus</span>
    </div>
  );
}