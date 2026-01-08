"use client";

import { useEffect } from "react";

export default function WelcomeSpeech() {
  useEffect(() => {
    // Check if SpeechSynthesis API is available in the browser
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      // Small delay to ensure the page is fully loaded
      const timer = setTimeout(() => {
        try {
          // Create a new speech utterance
          const utterance = new SpeechSynthesisUtterance("Bem-vindo ao Pulse.io");
          
          // Configure the utterance for Portuguese (Brazil)
          utterance.lang = "pt-BR";
          utterance.rate = 1.0;
          utterance.pitch = 1.0;
          utterance.volume = 1.0;
          
          // Speak the text
          window.speechSynthesis.speak(utterance);
        } catch (error) {
          // Silently handle errors to avoid breaking the site
          console.error("Speech synthesis error:", error);
        }
      }, 500);

      // Cleanup function to clear the timer
      return () => clearTimeout(timer);
    }
  }, []);

  // This component doesn't render anything visible
  return null;
}
