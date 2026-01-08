'use client';

import OwlLogo from '@/components/OwlLogo';
import LanguageSelector from '@/components/LanguageSelector';
import { useI18n } from '@/hooks/useI18n';

export default function Home() {
  const { language, changeLanguage, t } = useI18n();

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
      position: "relative"
    }}>
      <LanguageSelector currentLanguage={language} onLanguageChange={changeLanguage} />
      
      <div style={{ marginBottom: "2rem", animation: "fadeIn 1s ease-in" }}>
        <OwlLogo size={150} />
      </div>
      
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem", textAlign: "center" }}>
        {t('title')}
      </h1>
      
      <p style={{ fontSize: "1.2rem", opacity: 0.8, textAlign: "center", maxWidth: "600px", padding: "0 20px" }}>
        {t('subtitle')}
      </p>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
