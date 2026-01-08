import "./globals.css";

export const metadata = {
  title: "Pulselio",
  description: "Pulselio — Infrastructure for intelligent systems"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

