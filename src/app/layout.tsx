import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sofra App",
  description: "Modern yemek sipariş uygulaması",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
