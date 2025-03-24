import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Set base path based on environment
const basePath = process.env.NODE_ENV === 'development' ? '' : '/sisely-web';

export const metadata: Metadata = {
  title: "Sisely DeLisi",
  description: "Sisely DeLisi is an artist and student at Stanford University",
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "any" },
      { url: `${basePath}/SisSpiral.png`, sizes: "256x256", type: "image/png" }
    ],
    apple: [
      { url: `${basePath}/SisSpiral.png`, sizes: "256x256", type: "image/png" }
    ],
    shortcut: [
      { url: `${basePath}/SisSpiral.png`, sizes: "256x256", type: "image/png" }
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
        <link rel="icon" href={`${basePath}/favicon.ico`} sizes="any" />
        <link rel="icon" href={`${basePath}/SisSpiral.png`} type="image/png" sizes="256x256" />
        <link rel="shortcut icon" href={`${basePath}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${basePath}/SisSpiral.png`} />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
