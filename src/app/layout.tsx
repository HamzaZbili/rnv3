import './globals.css'
import type { Metadata } from 'next'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Rachel Naismith',
  description: 'Writer and Content Creator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="pt-12">
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
