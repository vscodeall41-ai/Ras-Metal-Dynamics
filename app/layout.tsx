import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";
import { MainLayout } from "@/components/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.contact.website}`),
  title: {
    default: `${siteConfig.company.name} | Precision Steel Fabrication | Cape Town`,
    template: `%s | ${siteConfig.company.name}`,
  },
  description: siteConfig.company.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: `${siteConfig.company.name} — Precision Steel Fabrication in Cape Town`,
    description: siteConfig.company.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.company.name} — Structural steel and architectural metalwork`,
      },
    ],
    locale: "en_ZA",
    type: "website",
    siteName: siteConfig.company.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.company.name} | Cape Town Steel Fabrication`,
    description: siteConfig.company.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#F5F5F5]">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
