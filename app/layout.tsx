import type { Metadata } from "next";
import { Playfair_Display, Inter, Montserrat } from 'next/font/google'
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Suspense } from 'react'
import { Loading } from "@/components/ui/loading";

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: "Vikasalaya Foundation",
  description: "Empowering communities through holistic development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} ${montserrat.variable} font-inter antialiased overflow-x-hidden`}>
        <Suspense fallback={<Loading />}>
          <Header />
          <main className="flex-grow overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
