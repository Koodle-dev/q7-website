import localFont from "next/font/local";
import "./globals.css";
import { HeaderComponent } from "@/components/header";
import { FooterComponent } from "@/components/footer";

import { SpeedInsights } from "@vercel/speed-insights/next";

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

export const metadata = {
  title: "Q7 Technology | Web Development & Hosting in Ballarat",
  description:
    "Q7 Technology offers custom web development, reliable hosting, and comprehensive digital solutions for businesses in Ballarat and beyond.",
  keywords:
    "web development, web hosting, SEO, Ballarat, custom websites, digital solutions",
  authors: [{ name: "Q7 Technology Team" }],
  creator: "Q7 Technology",
  publisher: "Q7 Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.q7technology.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Q7 Technology | Web Development & Hosting in Ballarat",
    description:
      "Custom web solutions and reliable hosting for businesses in Ballarat and beyond.",
    url: "https://www.q7technology.com.au",
    siteName: "Q7 Technology",
    images: [
      {
        url: "https://www.q7technology.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Q7 Technology - Web Development and Hosting",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Q7 Technology | Web Development & Hosting in Ballarat",
    description:
      "Custom web solutions and reliable hosting for businesses in Ballarat and beyond.",
    images: ["https://www.q7technology.com.au/twitter-image.jpg"],
    creator: "@Q7Technology",
  },
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
      <SpeedInsights />
    </html>
  );
}
