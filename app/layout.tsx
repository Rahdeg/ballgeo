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
  title: "Bella Geo - Artisan Café & Lounge",
  description: "Experience the perfect blend of artisan coffee, fresh pastries, and cozy ambiance at Bella Geo. Your neighborhood café & lounge in the heart of the city.",
  keywords: "café, coffee, lounge, artisan, pastries, brunch, cocktails",
  authors: [{ name: "Bella Geo Café" }],
  openGraph: {
    title: "Bella Geo - Artisan Café & Lounge",
    description: "Experience the perfect blend of artisan coffee, fresh pastries, and cozy ambiance at Bella Geo.",
    type: "website",
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
