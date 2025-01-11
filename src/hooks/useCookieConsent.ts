import { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'cookie_consent';

export function useCookieConsent() {
  const [consent, setConsent] = useState<boolean | null>(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    return savedConsent ? JSON.parse(savedConsent) : null;
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after a delay if consent hasn't been given
    if (consent === null) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [consent]);

  useEffect(() => {
    if (consent !== null) {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    }
  }, [consent]);

  const acceptCookies = () => {
    setConsent(true);
    setIsVisible(false);
  };

  const declineCookies = () => {
    setConsent(false);
    setIsVisible(false);
  };

  return { consent, isVisible, acceptCookies, declineCookies };
}