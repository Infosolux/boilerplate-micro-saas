import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google"

import { ThemeProvider } from 'next-themes'

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Boilerplate - Micro SaaS",
  description: "Boilerplate - Micro SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col h-screen w-screen overflow-hidden",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}