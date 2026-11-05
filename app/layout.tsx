import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Muhammed Ali Kösen - Developer";
const description =
  "Full-stack developer who writes well documented, secure, and tested code.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mhalikosen.com"),
  title,
  description,
  alternates: { canonical: "/" },
  verification: { google: "uCU8TbKTRpHTySX2peaGbM8HAcTXneyHgjD7-3Y3NKc" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/",
    siteName: "Muhammed Ali Kösen",
    images: "/og.png",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: "/og.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
