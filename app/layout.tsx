import type { Metadata } from "next"
import { BBH_Sans_Bogle } from "next/font/google"

const bbh = BBH_Sans_Bogle({
  weight: "400",
  subsets: ["latin"],
})

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://longhornlol.com"),
  title: "Longhorn League of Legends",
  description:
    "Longhorn League of Legends is the official League of Legends club at the University of Texas at Austin. Every semester, we host tournaments, socials, watch parties, and more! Our competitive esports teams represent UT in CLOL and are supported by our competitive staff and the Alienware Esports Gaming Arena on campus.",
  openGraph: {
    title: "Longhorn League of Legends",
    description:
      "Longhorn League of Legends is the official League of Legends club at the University of Texas at Austin. Every semester, we host tournaments, socials, watch parties, and more! Our competitive esports teams represent UT in CLOL and are supported by our competitive staff and the Alienware Esports Gaming Arena on campus.",
    url: "/",
    siteName: "Longhorn League of Legends",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Open Graph preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Longhorn League of Legends",
    description:
      "Longhorn League of Legends is the official League of Legends club at the University of Texas at Austin. Every semester, we host tournaments, socials, watch parties, and more! Our competitive esports teams represent UT in CLOL and are supported by our competitive staff and the Alienware Esports Gaming Arena on campus.",
    images: ["/og.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bbh.className} antialiased`}>{children}</body>
    </html>
  )
}
