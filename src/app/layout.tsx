import "./globals.css";

export const metadata = {
  title: "Pulseio",
  description: "Pulseio — Infrastructure for intelligent systems"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
