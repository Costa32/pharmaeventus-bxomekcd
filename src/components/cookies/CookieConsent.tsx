import React from 'react';
import { useCookieConsent } from '../../hooks/useCookieConsent';

export default function CookieConsent() {
  const { isVisible, acceptCookies, declineCookies } = useCookieConsent();

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-700">
            Utilizamos cookies para melhorar sua experiência em nosso site. 
            Ao continuar navegando, você concorda com nossa{' '}
            <a href="/privacy" className="text-brand-primary hover:underline">
              Política de Privacidade
            </a>.
          </div>
          <div className="flex gap-4">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Recusar
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm font-medium text-white bg-brand-primary rounded-md hover:bg-brand-secondary"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}