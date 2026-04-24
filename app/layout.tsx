import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "ひだまりのヨガ｜三重県津市・久居のシニア・初心者向けやさしいヨガ教室",
    template: "%s",
  },
  description:
    "三重県津市・久居エリアとオンラインで楽しめる、シニア・初心者にも安心のやさしいヨガ教室。土曜日の朝ヨガ、オンラインヨガ、出張チェアヨガ、企業・施設向けレッスンにも対応しています。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "ひだまりのヨガ｜三重県津市・久居のシニア・初心者向けやさしいヨガ教室",
    description:
      "三重県津市・久居エリアとオンラインで楽しめる、シニア・初心者にも安心のやさしいヨガ教室。",
    images: [
      {
        url: "/images/ogp.svg",
        width: 1200,
        height: 630,
        alt: "ひだまりのヨガ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ひだまりのヨガ｜三重県津市・久居のシニア・初心者向けやさしいヨガ教室",
    description:
      "三重県津市・久居エリアとオンラインで楽しめる、シニア・初心者にも安心のやさしいヨガ教室。",
    images: ["/images/ogp.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
