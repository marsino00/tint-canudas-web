import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import ClientIntlProvider from "./ClientIntlProvider";
import { getLocale } from "next-intl/server";
import Header from "./components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Tintoreria Canudas",
  description: "La nostra tintoreria, la teva tranquil•litat",
  icons: {
    icon: "/logo.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const initialLocale = "ca";
  const initialMessages = (await import("../../messages/ca.json")).default;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientIntlProvider
          initialLocale={initialLocale}
          initialMessages={initialMessages}
        >
          <Header />
          {children}
          <Footer />
        </ClientIntlProvider>
      </body>
    </html>
  );
}
