import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from '@/components/Layout'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chase Friedman",
  description: "Chase Friedman portfolio. Spinal cord injury survivor and web developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-full bg-black`}
      >
        <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
      </body>
    </html>
  );
}
