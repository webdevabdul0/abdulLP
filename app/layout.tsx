import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";

// TODO: Move this to a .env.local file (e.g., NEXT_PUBLIC_GTAG_ID=G-B2DEL0NCC1)
const GTAG_ID = "G-B2DEL0NCC1"; // Your Google Tag ID

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Hanan",
  description: "Designer & Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark bg-background text-primaryText overflow-x-hidden"
    >
      <head></head>
      <body className={`${manrope.variable} antialiased`}>
        {children}
        {/* Google Tag Script - Placed at the end of body for better performance */}
        <Script
          strategy="afterInteractive"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTAG_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
