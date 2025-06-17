import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Header, Footer } from "@/components";
import { SidebarProgressBar } from "@/components/SidebarProgressBar";
import "./globals.css";

const manrope = localFont({
  src: [
    {
      path: '../../public/fonts/Manrope/static/Manrope-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Manrope/static/Manrope-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Manrope/static/Manrope-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-manrope'
});

export const metadata: Metadata = {
  title: "Портфолио | Ваше Имя",
  description: "Персональное портфолио разработчика",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${manrope.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <SidebarProgressBar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
