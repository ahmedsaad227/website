import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" })

export const metadata: Metadata = {
  title: "Apex Estate — Luxury Real Estate Worldwide",
  description:
    "Discover the world's most exclusive properties. Luxury villas, penthouses & commercial spaces curated by Apex Estate.",
  keywords: ["luxury real estate", "villas", "penthouse", "investment", "Apex Estate"],
  openGraph: {
    title: "Apex Estate — Luxury Real Estate Worldwide",
    description: "Find your dream property with Apex Estate.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
