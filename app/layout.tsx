export const metadata = {
  title: 'Pulseio',
  description: 'Decentralized infrastructure for real-time public perception',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
pulselio-site/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ globals.css
├─ public/
│  └─ favicon.ico
├─ package.json
├─ next.config.js
├─ tsconfig.json
└─ README.md
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
