import React from 'react';
import { Calendar } from 'lucide-react';
import Logo from './Logo';
import SocialIcons from './common/SocialIcons';

interface FooterProps {
  onPrivacyClick: () => void;
}

export default function Footer({ onPrivacyClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Logo className="h-8 w-8 text-brand-primary" />
              <span className="ml-2 text-xl font-bold">Pharmaeventus</span>
            </div>
            <p className="mt-4 text-gray-400">
              Transformando ideias em eventos memoráveis. Especialistas em criar
              experiências únicas e inesquecíveis para nossos clientes.
            </p>
            <div className="mt-6">
              <SocialIcons iconClassName="h-6 w-6" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Links Rápidos
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white">
                  Portfólio
                </a>
              </li>
              <li>
                <button 
                  onClick={onPrivacyClick}
                  className="text-gray-400 hover:text-white"
                >
                  Privacidade
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contato
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400">
                contato@pharmaeventus.com.br
              </li>
              <li className="text-gray-400">
                (71) 3561-0260
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Pharmaeventus. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}