import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/site-header"
import Footer from "@/components/footer"
import DisclaimerBanner from "@/components/disclaimer-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Holzunternehmer - Lehrreiches Forstwirtschaftsspiel | Vrynthia",
  description:
    "Ein kostenloses, lehrreiches Sozialspiel nur zur Unterhaltung. Verwalten Sie Ihren eigenen Forstbetrieb in wunderschönen Wäldern. Kein Echtgeld, kein Glücksspiel, keine Preise, ab 18 Jahren.",
  keywords:
    "Lehrspiel, Holzfäller-Simulator, Forstwirtschaftsspiel, Holzspiel, Sozialspiel, kostenloses Spiel, kein Glücksspiel, Forst-Simulation, Abenteuerspiel, Simulation, Lernen",
  openGraph: {
    title: "Holzunternehmer - Lehrreiches Forstwirtschaftsspiel | Vrynthia",
    description:
      "Ein kostenloses, lehrreiches Sozialspiel nur zur Unterhaltung. Verwalten Sie Ihren eigenen Forstbetrieb in wunderschönen Wäldern. Kein Echtgeld, kein Glücksspiel, keine Preise.",
    type: "website",
    url: "https://vrynthia.com",
  },
  other: {
    google: "notranslate",
    rating: "General",
    category: "games,education,entertainment",
    subject: "Educational Games",
    "format-detection": "telephone=no",
    "google-adsense-account": "ca-pub-REPLACE_WITH_YOUR_ADSENSE_ID",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4d7a5e" />
        <link rel="icon" href="/favicon.ico" />
        {/* Additional meta tags to clarify site purpose */}
        <meta name="classification" content="Lehrreiches Spiel" />
        <meta name="subject" content="Holzfäller-Simulation" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="German" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
          <DisclaimerBanner />
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
