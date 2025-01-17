import type { Metadata } from "next";
import { Manrope } from "next/font/google";

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
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
