import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Millionaire Barbershop - Sharp Cuts, Millionaire Finish",
  description: "Premium barbershop services with expert cuts, styling, and grooming. Book online with TheCut for the ultimate luxury barbering experience.",
  keywords: "barbershop, haircuts, mens grooming, styling, shave, luxury barber",
  authors: [{ name: "Millionaire Barbershop" }],
  openGraph: {
    title: "Millionaire Barbershop - Sharp Cuts, Millionaire Finish",
    description: "Premium barbershop services with expert cuts, styling, and grooming. Book online with TheCut for the ultimate luxury barbering experience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Millionaire Barbershop - Sharp Cuts, Millionaire Finish",
    description: "Premium barbershop services with expert cuts, styling, and grooming.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
