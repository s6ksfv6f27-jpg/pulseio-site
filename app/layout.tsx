import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "PULSEIO.IO - The Operating System for Real-Time Intelligence",
  description: "Transform signals into decisions — instantly. PULSEIO.IO is a real-time intelligence platform built to process signals, data, and events at the speed of reality.",
  keywords: ["pulseio.io", "real-time intelligence", "AI", "decision engine", "signal processing", "enterprise intelligence", "real-time analytics"],
  authors: [{ name: "PULSEIO.IO" }],
  openGraph: {
    title: "PULSEIO.IO - Real-Time Intelligence Infrastructure",
    description: "Transform signals into decisions — instantly. Real-time intelligence platform for mission-critical systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PULSEIO.IO - Real-Time Intelligence Infrastructure",
    description: "Transform signals into decisions — instantly.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

