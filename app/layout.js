import "./globals.css"
import BackgroundMusic from "@/components/BackgroundMusic"

export const metadata = {
  title: "Something Just for You!",
  description: "A little surprise made just for you, open it with a smile ❤️",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <BackgroundMusic />
        {children}
      </body>
    </html>
  )
}

