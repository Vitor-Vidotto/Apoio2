import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Para o Cavaleiro de Dragão",
  description: "Voando pelos céus de Berk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
