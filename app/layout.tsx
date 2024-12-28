import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster"



export const metadata: Metadata = {
  title: "Alquiler",
  description: "Alquiler de Vehiculos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <NextTopLoader color="#000"/>
        {children}
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}
