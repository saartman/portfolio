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
  title: "Gleb Fedorov",
  description: "Creator's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
// Это компонент RootLayout, который определяет общий макет (layout) для всего приложения Next.js.
// Это нужно для того, чтобы внутрь макета (layout) можно было подставлять разное содержимое каждой страницы приложения.
// Проп children позволяет сделать компонент универсальным — всё, что находится между тегами <RootLayout>...</RootLayout>,
// автоматически попадёт внутрь <main> и будет отображаться на соответствующей странице.
// Здесь задаются глобальные стили, шрифты, а также подключаются Header и SidebarProgressBar.
// Footer закомментирован, его можно включить при необходимости.

}>) {
  return (
    <html lang="ru">
      <body
        className={`${manrope.variable} antialiased min-h-screen w-full flex flex-grow flex-1 flex-col`}
      >
        <Header/>
        {/* <SidebarProgressBar /> */}
        <main className="flex flex-grow w-full h-full">
          {children}
        </main>
        {/* <Footer /> */} 
      </body>
    </html>
  );
}
