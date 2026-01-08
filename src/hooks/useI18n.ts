'use client';

import { useState, useEffect } from 'react';

const SUPPORTED_LANGUAGES = ['en', 'pt', 'es', 'ja', 'zh'] as const;
type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

interface Translations {
  title: string;
  subtitle: string;
  welcome: string;
  description: string;
}

const translations: Record<SupportedLanguage, Translations> = {
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

const languageVoiceMap: Record<SupportedLanguage, string> = {
  en: 'en-US',
  pt: 'pt-BR',
  es: 'es-ES',
  ja: 'ja-JP',
  zh: 'zh-CN'
};

export const useI18n = () => {
  const [language, setLanguage] = useState<SupportedLanguage>('en');
  const [hasPlayedAudio, setHasPlayedAudio] = useState<boolean>(false);

  useEffect(() => {
    // Detect browser language on mount
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language.split('-')[0];
      const supportedLang = SUPPORTED_LANGUAGES.includes(browserLang as SupportedLanguage) 
        ? (browserLang as SupportedLanguage) 
        : 'en';
      setLanguage(supportedLang);
      
      // Get language from localStorage if exists
      const savedLang = localStorage.getItem('preferredLanguage');
      if (savedLang && SUPPORTED_LANGUAGES.includes(savedLang as SupportedLanguage)) {
        setLanguage(savedLang as SupportedLanguage);
      }
    }
  }, []);

  useEffect(() => {
    // Play welcome audio when language changes (only if user has interacted)
    if (typeof window !== 'undefined' && window.speechSynthesis && !hasPlayedAudio) {
      // Use setTimeout to ensure audio plays after user interaction
      const handleFirstInteraction = () => {
        playWelcomeAudio();
        setHasPlayedAudio(true);
        // Remove listeners after first interaction
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
      };
      
      document.addEventListener('click', handleFirstInteraction);
      document.addEventListener('keydown', handleFirstInteraction);
      
      return () => {
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
      };
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
    if (SUPPORTED_LANGUAGES.includes(newLang as SupportedLanguage)) {
      setLanguage(newLang as SupportedLanguage);
      setHasPlayedAudio(false); // Allow audio to play again on language change
      if (typeof window !== 'undefined') {
        localStorage.setItem('preferredLanguage', newLang);
        // Play audio immediately on manual language change
        playWelcomeAudio();
      }
    }
  };

  const t = (key: keyof Translations): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return {
    language,
    changeLanguage,
    t,
    playWelcomeAudio
  };
};

