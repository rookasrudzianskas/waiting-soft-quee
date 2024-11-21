import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import {ConvexClientProvider} from "@/components/ConvexClientProvider";
import Header from "@/components/header";
import SyncUserWithConvex from "@/components/sync-user-with-convex";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ticket Master",
  description: "A ticketing app for events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ConvexClientProvider>
        <ClerkProvider>
          <Header />
          <SyncUserWithConvex />
          {children}
        </ClerkProvider>
      </ConvexClientProvider>
      </body>
    </html>
  );
}
