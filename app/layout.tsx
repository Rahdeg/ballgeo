import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bellagio Café - Artisan Café & Lounge",
  description: "Experience the perfect blend of artisan coffee, fresh pastries, and cozy ambiance at Bellagio Café. Your neighborhood café & lounge in Nigeria.",
  keywords: "café, coffee, lounge, artisan, pastries, brunch, cocktails, Nigeria, Abeokuta, Ogun State",
  authors: [{ name: "Bellagio Café" }],
  openGraph: {
    title: "Bellagio Café - Artisan Café & Lounge",
    description: "Experience the perfect blend of artisan coffee, fresh pastries, and cozy ambiance at Bellagio Café.",
    type: "website",
  },
  icons: {
    icon: "/logo.svg",
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
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
