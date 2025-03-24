import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sisely DeLisi",
  description: "Sisely DeLisi is an artist and student at Stanford University",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/SisSpiral.png", sizes: "256x256", type: "image/png" }
    ],
    apple: [
      { url: "/SisSpiral.png", sizes: "256x256", type: "image/png" }
    ],
    shortcut: [
      { url: "/SisSpiral.png", sizes: "256x256", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/SisSpiral.png" type="image/png" sizes="256x256" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/SisSpiral.png" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
