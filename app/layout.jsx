// import '../styles/globals.css'
import './globals.css'
import { Manrope } from '@next/font/google'

const manrope = Manrope({ subsets: ['latin'], weight: "800" })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
