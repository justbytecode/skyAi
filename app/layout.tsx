import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chatly - AI Assistant",
  description: "Your AI-powered productivity companion",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="flex min-h-screen max-h-screen overflow-hidden bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}

