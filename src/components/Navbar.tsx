import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavbarLogo from './logos/NavbarLogo';
import SocialIcons from './common/SocialIcons';

interface NavbarProps {
  onPrivacyClick: () => void;
}

export default function Navbar({ onPrivacyClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Serviços' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#contact', label: 'Contato' },
    { action: onPrivacyClick, label: 'Privacidade' }
  ];

  const handleNavClick = (item: { href?: string; action?: () => void }) => {
    if (item.action) {
      item.action();
    } else if (item.href) {
      // First show main content if privacy is shown
      const privacySection = document.querySelector('[data-privacy-section]');
      const mainContent = document.querySelector('[data-main-content]');
      
      if (privacySection?.classList.contains('block')) {
        privacySection.classList.remove('block');
        privacySection.classList.add('hidden');
        mainContent?.classList.remove('hidden');
      }

      // Then scroll to the section
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavbarLogo />
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-800 hover:text-brand-primary px-3 py-2 rounded-md font-medium cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <SocialIcons />
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-brand-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left text-gray-800 hover:text-brand-primary px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <div className="px-3 py-2">
              <SocialIcons />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}