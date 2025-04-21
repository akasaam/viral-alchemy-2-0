import type React from "react"
import "./globals.css"
import { Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import LoadingScreen from "@/components/loading-screen"
import InquiryPopup from "@/components/inquiry-popup"
import { CacheConsent } from "@/components/cache-consent"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata = {
  title: "The Brand Counter | Digital Marketing Agency",
  description:
    "Transform your digital presence with strategic marketing alchemy. We offer SEO, social media marketing, content creation, and website development services.",
  keywords: "digital marketing, SEO, social media marketing, content marketing, website development, Siliguri, India",
  authors: [{ name: "The Brand Counter", url: "https://viralalchemy.com" }],
  creator: "The Brand Counter",
  publisher: "The Brand Counter",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Using relative URLs for deployment compatibility
  metadataBase: new URL("https://viralalchemy.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/favicon.svg", type: "image/svg+xml" },
  },
  openGraph: {
    title: "The Brand Counter | Digital Marketing Agency",
    description:
      "Transform your digital presence with strategic marketing alchemy. We offer SEO, social media marketing, content creation, and website development services.",
    url: "https://viralalchemy.vercel.app",
    siteName: "The Brand Counter",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Brand Counter - Digital Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Brand Counter | Digital Marketing Agency",
    description:
      "Transform your digital presence with strategic marketing alchemy. We offer SEO, social media marketing, content creation, and website development services.",
    images: ["/images/twitter-image.jpg"],
    creator: "@viralalchemy",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${outfit.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LoadingScreen />
          {children}
          <InquiryPopup whatsappNumber="+917501411769" email="saambarlin@gmail.com" />
          <CacheConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'