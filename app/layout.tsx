import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VIBE Token | The Economics of Sovereignty",
    template: "%s | VIBE Token"
  },
  description: "VIBE is a testnet token on Aptos for use inside the Alpha Protocol ecosystem. Not a share, a security or a promise of future value.",
  keywords: ["VIBE", "token", "cryptocurrency", "Alpha Protocol", "Aptos", "decentralized", "mesh network", "economics"],
  authors: [{ name: "Alpha Protocol" }],
  openGraph: {
    title: "VIBE Token | The Economics of Sovereignty",
    description: "A testnet token on Aptos for use inside the Alpha Protocol ecosystem",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIBE Token | The Economics of Sovereignty",
    description: "A testnet token on Aptos for use inside the Alpha Protocol ecosystem",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
