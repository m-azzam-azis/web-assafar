import type { Metadata } from "next";
import { El_Messiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const elMessiri = El_Messiri({
  variable: "--font-el-messiri",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Assafariman Tour Travel | Paket Umroh Murah & Terpercaya Indonesia",
  description:
    "Assafariman Tour Travel menyediakan paket umroh murah, terpercaya dan berpengalaman. Dapatkan layanan umroh terbaik dengan harga terjangkau, berangkat dari Jakarta dan seluruh Indonesia. Daftar sekarang!",
  keywords: [
    "umroh murah",
    "paket umroh",
    "travel umroh",
    "umroh terpercaya",
    "umroh Jakarta",
    "umroh Indonesia",
    "Assafariman",
    "tour travel umroh",
    "biaya umroh",
    "umroh promo",
    "travel haji umroh",
    "paket umroh hemat",
    "umroh bersertifikat",
    "umroh Makkah Madinah",
    "jadwal umroh",
    "daftar umroh",
    "umroh keluarga",
    "umroh plus",
    "agen umroh resmi",
    "umroh 2025",
  ],
  authors: [{ name: "Assafariman Tour Travel" }],
  creator: "Assafariman Tour Travel",
  publisher: "Assafariman Tour Travel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.assafariman.com",
    title:
      "Assafariman Tour Travel | Paket Umroh Terpercaya & Terbaik Indonesia",
    description:
      "Layanan umroh murah dan terpercaya. Wujudkan impian ibadah umroh Anda bersama Assafariman Tour Travel dengan paket terbaik dan harga terjangkau.",
    siteName: "Assafariman Tour Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Assafariman Tour Travel | Paket Umroh Terpercaya Indonesia",
    description:
      "Umroh murah dan terpercaya bersama Assafariman Tour Travel. Daftar sekarang!",
  },
  alternates: {
    canonical: "https://www.assafariman.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#025a4e" />
      </head>
      <body className={` ${elMessiri.variable}  antialiased `}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
