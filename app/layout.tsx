import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Pulseio - Decentralized Infrastructure for Real-Time Public Perception",
  description: "Pulseio provides cutting-edge decentralized infrastructure for intelligent systems and real-time public perception analysis.",
  keywords: ["pulseio", "decentralized", "infrastructure", "real-time", "public perception", "intelligent systems"],
  authors: [{ name: "Pulseio" }],
  openGraph: {
    title: "Pulseio - Decentralized Infrastructure",
    description: "Decentralized infrastructure for real-time public perception",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulseio - Decentralized Infrastructure",
    description: "Decentralized infrastructure for real-time public perception",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
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

