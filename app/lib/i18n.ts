export type Language = 'en' | 'pt' | 'es' | 'ja' | 'zh';

export interface Translations {
  title: string;
  subtitle: string;
  welcome: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    title: 'Pulse.io',
    subtitle: 'Infrastructure for intelligent systems',
    welcome: 'Welcome to Pulse.io',
  },
  pt: {
    title: 'Pulse.io',
    subtitle: 'Infraestrutura para sistemas inteligentes',
    welcome: 'Bem-vindo ao Pulse.io',
  },
  es: {
    title: 'Pulse.io',
    subtitle: 'Infraestructura para sistemas inteligentes',
    welcome: 'Bienvenido a Pulse.io',
  },
  ja: {
    title: 'Pulse.io',
    subtitle: 'インテリジェントシステムのためのインフラストラクチャ',
    welcome: 'Pulse.ioへようこそ',
  },
  zh: {
    title: 'Pulse.io',
    subtitle: '智能系统基础设施',
    welcome: '欢迎来到Pulse.io',
  },
};

export function detectLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('pt')) return 'pt';
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('ja')) return 'ja';
  if (browserLang.startsWith('zh')) return 'zh';
  
  return 'en';
}

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.en;
}
