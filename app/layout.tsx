import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashik Lights | Premium Chandeliers & Luxury Lighting",
  description:
    "Explore statement lighting for homes, villas, staircases, hotels and outdoor spaces. Premium chandeliers since 2016 with 6 showrooms across India.",
  keywords: [
    "chandeliers",
    "luxury lighting",
    "premium lights",
    "home decor",
    "high ceiling chandeliers",
    "outdoor lights",
    "crystal chandeliers",
  ],
  openGraph: {
    title: "Ashik Lights | Premium Chandeliers & Luxury Lighting",
    description:
      "Explore statement lighting for homes, villas, staircases, hotels and outdoor spaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
