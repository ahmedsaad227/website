import type { Metadata } from "next"
import { Cairo, Playfair_Display } from "next/font/google"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" })

export const metadata: Metadata = {
  title: "أبيكس العقارية | Apex Estate — عقارات فاخرة",
  description:
    "اكتشف مستقبلك العقاري الفاخر مع أبيكس العقارية. فلل، شقق، واستثمارات عقارية بمعايير عالمية في دبي وأبوظبي والرياض.",
  keywords: ["عقارات فاخرة", "فلل دبي", "شقق فاخرة", "استثمار عقاري", "أبيكس العقارية", "Apex Estate"],
  openGraph: {
    title: "أبيكس العقارية — عقارات فاخرة عالمياً",
    description: "اكتشف مستقبلك العقاري الفاخر",
    type: "website",
    locale: "ar_AE",
  },
}

export const viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`bg-background ${cairo.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
