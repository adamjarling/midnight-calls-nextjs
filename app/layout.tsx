import "./globals.css";

import { Bungee, Libre_Franklin } from "next/font/google";
import { config, nav } from "nttb-config";

import Footer from "@/components/Footer";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { OverflowHiddenProvider } from "@/context/overflow-hidden";
import Script from "next/script";
import Wrapper from "@/components/Wrapper";

const { OPEN_GRAPH, SITE } = config;

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libreFranklin",
});

const headlineFont = Bungee({
  subsets: ["latin"],
  variable: "--font-headlineFont",
  weight: "400",
});

export const metadata: Metadata = {
  description: SITE.description,
  openGraph: OPEN_GRAPH,
  title: {
    default: SITE.title,
    template: `%s | ${SITE.title}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headlineFont.variable} ${libreFranklin.className} scroll-smooth`}
    >
      <link
        rel="icon"
        href="/images/logo/mc-initials2_white.png"
        type="image/png"
      />

      <OverflowHiddenProvider>
        <Wrapper>
          <Navbar />
          {children}
          <Footer />

          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA}');
            `}
          </Script>
        </Wrapper>
      </OverflowHiddenProvider>
    </html>
  );
}
