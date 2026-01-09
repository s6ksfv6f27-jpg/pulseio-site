'use client';

import { useEffect, useState } from 'react';
import OwlLogo from './components/OwlLogo';
import { detectLanguage, getTranslations, Language } from './lib/i18n';
import { speakWelcome } from './lib/speech';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [t, setT] = useState(getTranslations('en'));

  useEffect(() => {
    const detectedLang = detectLanguage();
    setLanguage(detectedLang);
    setT(getTranslations(detectedLang));

    // Speak welcome message after a short delay
    const timer = setTimeout(() => {
      speakWelcome(getTranslations(detectedLang).welcome, detectedLang);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      background: "#0a0a0a",
      color: "#ffffff",
      fontFamily: "system-ui",
      padding: "2rem"
    }}>
      <div style={{ marginBottom: "2rem" }}>
        <OwlLogo size={150} />
      </div>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem", textAlign: "center" }}>
        {t.title}
      </h1>
      <p style={{ fontSize: "1.2rem", opacity: 0.8, textAlign: "center", maxWidth: "600px" }}>
        {t.subtitle}
      </p>
      <div style={{ 
        marginTop: "2rem", 
        padding: "0.5rem 1rem", 
        background: "rgba(255, 165, 0, 0.1)",
        borderRadius: "8px",
        border: "1px solid rgba(255, 165, 0, 0.3)",
        fontSize: "0.9rem",
        opacity: 0.7
      }}>
        Language: {language.toUpperCase()}
      </div>
    </main>
  );
}
