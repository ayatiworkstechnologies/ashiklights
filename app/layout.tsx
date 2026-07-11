import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P4H4NVX8');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-P4H4NVX8"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
