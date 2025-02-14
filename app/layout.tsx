import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";

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
      <head>
        {/* Google Tag Script */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTAG_ID}');
          `}
        </Script>
      </head>
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
