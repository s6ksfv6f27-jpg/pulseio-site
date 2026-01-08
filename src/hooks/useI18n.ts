'use client';

import { useState, useEffect } from 'react';

const translations: Record<string, any> = {
  en: {
    title: 'Pulseio',
    subtitle: 'Infrastructure for intelligent systems',
    welcome: 'Welcome to Pulse.io',
    description: 'Decentralized infrastructure for real-time public perception'
  },
  pt: {
    title: 'Pulseio',
    subtitle: 'Infraestrutura para sistemas inteligentes',
    welcome: 'Bem-vindo ao Pulse.io',
    description: 'Infraestrutura descentralizada para percepção pública em tempo real'
  },
  es: {
    title: 'Pulseio',
    subtitle: 'Infraestructura para sistemas inteligentes',
    welcome: 'Bienvenido a Pulse.io',
    description: 'Infraestructura descentralizada para percepción pública en tiempo real'
  },
  ja: {
    title: 'Pulseio',
    subtitle: 'インテリジェントシステムのためのインフラストラクチャ',
    welcome: 'Pulse.ioへようこそ',
    description: 'リアルタイムの世論認識のための分散型インフラストラクチャ'
  },
  zh: {
    title: 'Pulseio',
    subtitle: '智能系统基础设施',
    welcome: '欢迎来到Pulse.io',
    description: '实时公众认知的去中心化基础设施'
  }
};

const languageVoiceMap: Record<string, string> = {
  en: 'en-US',
  pt: 'pt-BR',
  es: 'es-ES',
  ja: 'ja-JP',
  zh: 'zh-CN'
};

export const useI18n = () => {
  const [language, setLanguage] = useState<string>('en');
  const [hasPlayedAudio, setHasPlayedAudio] = useState<boolean>(false);

  useEffect(() => {
    // Detect browser language on mount
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language.split('-')[0];
      const supportedLang = ['en', 'pt', 'es', 'ja', 'zh'].includes(browserLang) ? browserLang : 'en';
      setLanguage(supportedLang);
      
      // Get language from localStorage if exists
      const savedLang = localStorage.getItem('preferredLanguage');
      if (savedLang && ['en', 'pt', 'es', 'ja', 'zh'].includes(savedLang)) {
        setLanguage(savedLang);
      }
    }
  }, []);

  useEffect(() => {
    // Play welcome audio when language changes
    if (typeof window !== 'undefined' && window.speechSynthesis && !hasPlayedAudio) {
      playWelcomeAudio();
      setHasPlayedAudio(true);
    }
  }, [language, hasPlayedAudio]);

  const playWelcomeAudio = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const welcomeText = translations[language].welcome;
      const utterance = new SpeechSynthesisUtterance(welcomeText);
      
      // Set language for speech synthesis
      utterance.lang = languageVoiceMap[language] || 'en-US';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      // Wait for voices to load
      const speak = () => {
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(voice => voice.lang.startsWith(utterance.lang.split('-')[0]));
        
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }
        
        window.speechSynthesis.speak(utterance);
      };
      
      if (window.speechSynthesis.getVoices().length > 0) {
        speak();
      } else {
        window.speechSynthesis.onvoiceschanged = speak;
      }
    }
  };

  const changeLanguage = (newLang: string) => {
    if (['en', 'pt', 'es', 'ja', 'zh'].includes(newLang)) {
      setLanguage(newLang);
      setHasPlayedAudio(false); // Allow audio to play again on language change
      if (typeof window !== 'undefined') {
        localStorage.setItem('preferredLanguage', newLang);
      }
    }
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return {
    language,
    changeLanguage,
    t,
    playWelcomeAudio
  };
};
