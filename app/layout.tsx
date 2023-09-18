import "./globals.css";

import { config, nav } from "nttb-config";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Libre_Franklin } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";

const { OPEN_GRAPH, SITE } = config;

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libreFranklin",
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
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={libreFranklin.className}>
      <link
        rel="icon"
        href="/images/logo/mc-initials2_white.png"
        type="image/png"
      />
      <body>
        <div className="relative bg-slate-950 text-slate-50">
          {/* <Nav links={nav} /> */}
          <Header />
          <div className="">{children}</div>
          <Footer />
        </div>

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
      </body>
    </html>
  );
}
