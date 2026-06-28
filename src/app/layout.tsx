import Navbar from "@/components/shared/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  IBM_Plex_Sans,
  Nunito_Sans,
} from "next/font/google";
import "./globals.css";

const ibmPlexSansHeading = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tiny Library",
    template: "%s | Tiny Library",
  },
  description:
    "A cosy corner of the web where readers discover hand-picked titles across every genre, from timeless classics to hidden indie gems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full bg-background text-foreground  scroll-smooth",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        nunitoSans.variable,
        ibmPlexSansHeading.variable,
      )}
    >
      <body className="relative">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
