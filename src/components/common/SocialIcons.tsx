import React from 'react';
import { Instagram, Facebook, Linkedin, X } from 'lucide-react';

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

export default function SocialIcons({ className = '', iconClassName = 'h-5 w-5' }: SocialIconsProps) {
  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/pharmaeventus/?hl=pt-br',
      label: 'Instagram'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=61570460409314',
      label: 'Facebook'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: X,
      href: '#',
      label: 'x'
    }
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-gray-400 hover:text-brand-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className={iconClassName} />
        </a>
      ))}
    </div>
  );
}