import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Meme Hippo Evolution - From Zero to Meme God",
  description:
    "Join our adorable hippo on an epic journey to become the ultimate meme legend! Tap, idle, and evolve your way to internet stardom.",
  generator: "v0.app",
  keywords: ["mobile game", "idle game", "meme", "hippo", "evolution", "clicker"],
  authors: [{ name: "Meme Hippo Team" }],
  openGraph: {
    title: "Meme Hippo Evolution",
    description: "From Zero to Meme God - The ultimate idle evolution game!",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main className="pt-16">{children}</main>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
